'use client';

import { useState } from 'react';

export default function PhotoUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState('nature');
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const categories = ['nature', 'people', 'street', 'events', 'other'];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile);
      setMessage(null);
    } else {
      setMessage({ type: 'error', text: 'Please select a valid image file' });
    }
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!file) {
      setMessage({ type: 'error', text: 'Please select a file' });
      return;
    }

    try {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('category', category);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Upload failed');
      }

      setMessage({
        type: 'success',
        text: `Photo "${file.name}" uploaded successfully to ${category}!`,
      });
      setFile(null);
      setCategory('nature');
      
      // Reset file input
      const input = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (input) input.value = '';
    } catch (error) {
      setMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Upload failed',
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-primary mb-6">Upload Photo to S3</h3>

      <form onSubmit={handleUpload} className="space-y-4">
        {/* File Input */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            Select Photo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
          />
          {file && (
            <p className="text-sm text-secondary mt-1">
              Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
            </p>
          )}
        </div>

        {/* Category Select */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            disabled={uploading}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        {message && (
          <div
            className={`p-3 rounded-lg ${
              message.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!file || uploading}
          className={`w-full py-2 rounded-lg font-semibold transition-colors ${
            !file || uploading
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-accent text-white hover:bg-blue-600'
          }`}
        >
          {uploading ? 'Uploading...' : 'Upload Photo'}
        </button>
      </form>

      {/* Info */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg text-sm text-blue-800">
        <p className="font-semibold mb-2">📝 Upload Instructions:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Select an image file (JPG, PNG, WebP, etc.)</li>
          <li>Choose a category to organize photos</li>
          <li>Click "Upload Photo" to add to S3 bucket</li>
          <li>Photos appear in gallery automatically</li>
        </ul>
      </div>
    </div>
  );
}
