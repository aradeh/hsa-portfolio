import { NextRequest, NextResponse } from 'next/server';
import { uploadPhotoToS3 } from '@/lib/s3';

/**
 * API route to upload a photo to S3
 * POST /api/upload
 * 
 * Request body: FormData with file
 * Query params: ?category=nature&filename=photo.jpg
 */
export async function POST(request: NextRequest) {
  try {
    const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET;
    
    if (!bucketName) {
      return NextResponse.json(
        { error: 'AWS S3 bucket not configured' },
        { status: 400 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const category = formData.get('category') as string || 'uncategorized';
    const customFilename = formData.get('filename') as string;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file is an image
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'File must be an image' },
        { status: 400 }
      );
    }

    // Generate S3 key
    const filename = customFilename || file.name;
    const key = `${category}/${filename}`;

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Upload to S3
    const success = await uploadPhotoToS3(bucketName, key, buffer);

    if (!success) {
      return NextResponse.json(
        { error: 'Failed to upload photo' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Photo uploaded successfully',
      key: key,
      filename: filename,
      category: category,
    });
  } catch (error) {
    console.error('Error uploading photo:', error);
    return NextResponse.json(
      { error: 'Failed to process upload' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({ message: 'OK' }, { status: 200 });
}
