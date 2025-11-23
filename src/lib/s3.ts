import AWS from 'aws-sdk';

// Configure AWS S3
const s3 = new AWS.S3({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_AWS_REGION || 'us-east-1',
});

export interface PhotoItem {
  id: string;
  title: string;
  category: string;
  image: string;
  key: string;
}

/**
 * Fetch photos from AWS S3 bucket
 * @param bucketName - S3 bucket name
 * @param prefix - Optional prefix to filter objects
 * @returns Array of photo objects
 */
export async function fetchPhotosFromS3(
  bucketName: string,
  prefix: string = ''
): Promise<PhotoItem[]> {
  try {
    const params = {
      Bucket: bucketName,
      Prefix: prefix,
    };

    const response = await s3.listObjectsV2(params).promise();

    if (!response.Contents) {
      console.warn('No photos found in S3 bucket');
      return [];
    }

    // Filter image files and create photo objects
    const photos: PhotoItem[] = response.Contents.filter((obj) => {
      const key = obj.Key || '';
      // Only include common image formats
      return /\.(jpg|jpeg|png|gif|webp)$/i.test(key) && obj.Size! > 0;
    }).map((obj, index) => {
      const key = obj.Key || '';
      const fileName = key.split('/').pop() || '';
      const fileNameWithoutExt = fileName.replace(/\.[^.]+$/, '');
      
      // Generate signed URL for S3 object
      const imageUrl = s3.getSignedUrl('getObject', {
        Bucket: bucketName,
        Key: key,
        Expires: 3600, // URL valid for 1 hour
      });

      // Extract category from folder structure (e.g., "nature/photo.jpg" -> "nature")
      const pathParts = key.split('/');
      const category =
        pathParts.length > 1
          ? pathParts[0].charAt(0).toUpperCase() + pathParts[0].slice(1)
          : 'Uncategorized';

      return {
        id: `${index}-${Date.now()}`,
        title: fileNameWithoutExt.replace(/[-_]/g, ' '),
        category: category,
        image: imageUrl,
        key: key,
      };
    });

    return photos;
  } catch (error) {
    console.error('Error fetching photos from S3:', error);
    return [];
  }
}

/**
 * Get a single signed URL for an S3 object
 * @param bucketName - S3 bucket name
 * @param key - Object key
 * @returns Signed URL string
 */
export function getSignedUrl(bucketName: string, key: string): string {
  try {
    return s3.getSignedUrl('getObject', {
      Bucket: bucketName,
      Key: key,
      Expires: 3600,
    });
  } catch (error) {
    console.error('Error generating signed URL:', error);
    return '';
  }
}

/**
 * Upload a photo to S3
 * @param bucketName - S3 bucket name
 * @param key - Object key (path)
 * @param file - File buffer or blob
 * @returns Success boolean
 */
export async function uploadPhotoToS3(
  bucketName: string,
  key: string,
  file: Buffer | Blob
): Promise<boolean> {
  try {
    let body: Buffer | string;

    if (file instanceof Blob) {
      body = await file.arrayBuffer().then(buf => Buffer.from(buf));
    } else {
      body = file;
    }

    const params = {
      Bucket: bucketName,
      Key: key,
      Body: body,
      ContentType: 'image/jpeg', // Adjust based on file type
    };

    await s3.upload(params).promise();
    return true;
  } catch (error) {
    console.error('Error uploading photo to S3:', error);
    return false;
  }
}
