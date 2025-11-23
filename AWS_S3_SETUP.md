# AWS S3 Integration Guide

This guide explains how to set up AWS S3 integration for your HSA Photography Portfolio gallery.

## 📋 Prerequisites

- AWS Account (create at https://aws.amazon.com)
- AWS IAM user with S3 access permissions
- Node.js 18+
- npm or yarn

## 🚀 Step-by-Step Setup

### 1. Create AWS S3 Bucket

**Via AWS Console:**

1. Go to [AWS S3 Console](https://console.aws.amazon.com/s3)
2. Click "Create bucket"
3. Enter bucket name: `your-portfolio-photos` (must be globally unique)
4. Select region: `us-east-1` (or your preferred region)
5. Uncheck "Block all public access" (we'll use signed URLs for security)
6. Click "Create bucket"

### 2. Create IAM User with S3 Permissions

**Via AWS IAM Console:**

1. Go to [AWS IAM Console](https://console.aws.amazon.com/iam)
2. Click "Users" → "Create user"
3. Username: `portfolio-app`
4. Click "Create user"
5. Click on the user, then "Security credentials" tab
6. Click "Create access key"
7. Select "Application running outside AWS"
8. Click "Create access key"
9. **SAVE:** Access Key ID and Secret Access Key (you won't see it again!)

### 3. Attach S3 Policy to User

1. Go back to Users
2. Click on your user
3. Click "Add permissions" → "Attach policies directly"
4. Search for `AmazonS3FullAccess`
5. Check the box and click "Add permissions"

**Better (Least Privilege) - Create Custom Policy:**

1. Go to Policies → "Create policy"
2. Choose JSON editor and paste:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject"
      ],
      "Resource": [
        "arn:aws:s3:::your-bucket-name",
        "arn:aws:s3:::your-bucket-name/*"
      ]
    }
  ]
}
```

Replace `your-bucket-name` with your actual bucket name.

### 4. Upload Photos to S3

**Option A: Via AWS Console**

1. Go to S3 bucket
2. Create folders: `nature`, `street`, `people`
3. Click each folder and upload images
4. Photos will be organized by category automatically

**Option B: Via AWS CLI**

```bash
# Install AWS CLI
brew install awscli

# Configure credentials
aws configure

# Upload photos
aws s3 sync ./photos s3://your-bucket-name/
```

**Option C: Using S3 Upload API**

The portfolio includes an upload function in `src/lib/s3.ts` that you can extend.

### 5. Configure Portfolio

**Create `.env.local` file:**

```bash
# Copy the example file
cp .env.example .env.local
```

**Edit `.env.local` with your credentials:**

```env
NEXT_PUBLIC_AWS_ACCESS_KEY_ID=your_access_key_id
NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY=your_secret_access_key
NEXT_PUBLIC_AWS_REGION=us-east-1
NEXT_PUBLIC_AWS_S3_BUCKET=your-bucket-name
```

### 6. Test the Integration

1. Start development server:
```bash
npm run dev
```

2. Open http://localhost:3000
3. Go to Gallery section
4. You should see:
   - Loading spinner
   - Your photos from S3
   - Success message: "✓ Loading photos from AWS S3 (X photos)"
   - Dynamic grid that adjusts based on photo count

## 🔄 How It Works

### Photo Loading Flow

```
Browser Request
     ↓
/api/photos endpoint
     ↓
fetchPhotosFromS3() function
     ↓
AWS S3 API (ListObjectsV2)
     ↓
Filter image files (.jpg, .png, etc.)
     ↓
Generate signed URLs (1-hour expiration)
     ↓
Return photo metadata
     ↓
Gallery Component displays photos
```

### Dynamic Grid Adjustment

The gallery automatically adjusts layout based on photo count:

- **1 photo:** Single centered column
- **2 photos:** 2 columns (1 col on mobile)
- **3-4 photos:** 2 columns (1 col on mobile)
- **5+ photos:** 3 columns (2 on tablet, 1 on mobile)

### File Organization

Organize photos by category in S3:

```
my-bucket/
├── nature/
│   ├── mountain.jpg
│   ├── forest.jpg
│   └── sunset.jpg
├── people/
│   ├── portrait1.jpg
│   └── portrait2.jpg
└── street/
    ├── urban1.jpg
    └── urban2.jpg
```

Categories are extracted from folder names and automatically capitalized.

## 🔐 Security Best Practices

1. **Use IAM User:** Never use root AWS credentials
2. **Least Privilege:** Only grant S3 permissions needed
3. **Signed URLs:** Photos use 1-hour expiring signed URLs
4. **Hide Credentials:** Keep `.env.local` out of version control
5. **Rotate Keys:** Regularly rotate AWS access keys
6. **Block Public Access:** Keep S3 bucket private

### Environment Variables

- **NEXT_PUBLIC_** prefix: These are exposed to browser
- Use these for non-sensitive config only
- AWS keys are considered public-facing in this setup for simplicity
- For production, use IAM roles and Cognito instead

## 🚀 Production Deployment

For production, consider:

1. **Use AWS Amplify:** Built-in S3 integration
2. **Use CloudFront:** CDN for faster image delivery
3. **Use IAM Roles:** Instead of access keys (if on AWS)
4. **Use Cognito:** For user authentication
5. **Move keys to backend:** Use environment variables on server only

### Environment Variables for Production

Create `.env.production`:

```env
NEXT_PUBLIC_AWS_REGION=us-east-1
NEXT_PUBLIC_AWS_S3_BUCKET=your-bucket-name
AWS_ACCESS_KEY_ID=your_key  # Server-side only
AWS_SECRET_ACCESS_KEY=your_secret  # Server-side only
```

Then update `src/lib/s3.ts` to use server-side environment variables.

## 📊 Fallback System

If S3 is not configured or fetch fails:

1. Displays sample photos from Unsplash
2. Shows error message: "Using sample photos (S3 not configured)"
3. Gallery still functions normally
4. No broken layout or errors

## 🆘 Troubleshooting

### "AWS S3 bucket name not configured"

**Solution:** Add `NEXT_PUBLIC_AWS_S3_BUCKET` to `.env.local`

### "Failed to fetch photos from S3"

**Possible causes:**
- Invalid AWS credentials
- Bucket name incorrect
- Region mismatch
- IAM permissions missing

**Debug:** Check browser console for detailed error messages

### Photos not loading

1. Check bucket contents in AWS Console
2. Verify IAM user has `s3:GetObject` permission
3. Try refreshing page
4. Check that images are in supported format (.jpg, .png, etc.)

### Signed URLs expiring

- Default expiration: 1 hour
- Change in `src/lib/s3.ts`: `Expires: 3600` → `Expires: 86400` (24 hours)
- For permanent URLs, use CloudFront

## 📝 API Reference

### fetchPhotosFromS3()

```typescript
async function fetchPhotosFromS3(
  bucketName: string,
  prefix?: string
): Promise<PhotoItem[]>
```

Fetches photos from S3 bucket and returns array of photo objects with signed URLs.

### getSignedUrl()

```typescript
function getSignedUrl(bucketName: string, key: string): string
```

Generates a single signed URL for direct S3 object access.

### uploadPhotoToS3()

```typescript
async function uploadPhotoToS3(
  bucketName: string,
  key: string,
  file: Buffer | Blob
): Promise<boolean>
```

Uploads a photo to S3 bucket.

## 🔗 Useful Links

- [AWS S3 Documentation](https://docs.aws.amazon.com/s3/)
- [AWS IAM Documentation](https://docs.aws.amazon.com/iam/)
- [AWS SDK for JavaScript](https://docs.aws.amazon.com/AWSJavaScriptSDK/)
- [AWS CLI Documentation](https://docs.aws.amazon.com/cli/)

## 💡 Tips

1. **Test Locally:** Set up S3 integration in development before production
2. **Monitor Costs:** S3 has data transfer costs; monitor usage
3. **Use Regions:** Choose region closest to users
4. **Cache Images:** Use CloudFront or CDN for caching
5. **Backup Photos:** Keep backup copy of S3 bucket

## 🎯 Next Steps

1. ✓ Set up AWS account and S3 bucket
2. ✓ Create IAM user with S3 permissions
3. ✓ Upload photos to S3
4. ✓ Configure environment variables
5. ✓ Test locally
6. ✓ Deploy to production
7. ✓ Monitor and maintain

---

**Questions?** Check AWS documentation or GitHub issues for troubleshooting.
