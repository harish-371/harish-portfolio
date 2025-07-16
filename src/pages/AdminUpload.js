import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const CLOUDINARY_UPLOAD_PRESET = 'YOUR_UPLOAD_PRESET'; // Set in Cloudinary dashboard
const CLOUDINARY_CLOUD_NAME = 'YOUR_CLOUD_NAME';

export default function AdminUpload() {
  const [uploaded, setUploaded] = useState([]);
  const [uploading, setUploading] = useState(false);

  const onDrop = useCallback(async (acceptedFiles) => {
    setUploading(true);
    for (const file of acceptedFiles) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
      );
      setUploaded((prev) => [...prev, res.data.secure_url]);
    }
    setUploading(false);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="max-w-xl mx-auto py-16">
      <h2 className="text-2xl font-bold mb-4">Admin Image Upload</h2>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed p-8 rounded-lg text-center cursor-pointer ${
          isDragActive ? 'bg-blue-100' : 'bg-gray-50'
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag & drop images here, or click to select files</p>
        )}
      </div>
      {uploading && <p className="mt-4 text-blue-500">Uploading...</p>}
      <div className="mt-8 grid grid-cols-2 gap-4">
        {uploaded.map((url, idx) => (
          <img key={idx} src={url} alt="Uploaded" className="rounded shadow" />
        ))}
      </div>
      <div className="mt-4">
        {uploaded.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Image URLs (copy to your gallery data):</h3>
            <textarea
              className="w-full p-2 border rounded"
              rows={uploaded.length}
              value={uploaded.join('\n')}
              readOnly
            />
          </div>
        )}
      </div>
    </div>
  );
}