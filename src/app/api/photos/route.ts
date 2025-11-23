import { NextRequest, NextResponse } from 'next/server';
import { fetchPhotosFromS3 } from '@/lib/s3';

export async function GET(request: NextRequest) {
  try {
    const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET;
    const prefix = request.nextUrl.searchParams.get('prefix') || '';

    if (!bucketName) {
      return NextResponse.json(
        { error: 'AWS S3 bucket name not configured' },
        { status: 400 }
      );
    }

    const photos = await fetchPhotosFromS3(bucketName, prefix);

    return NextResponse.json({
      success: true,
      count: photos.length,
      photos: photos,
    });
  } catch (error) {
    console.error('Error in /api/photos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch photos' },
      { status: 500 }
    );
  }
}
