import React, { useState } from 'react';
import axios from 'axios';
import '../styles/detail.css';

const ImageUploadPopup = ({ isOpen, onClose, onUpload }) => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [uploadedUrl, setUploadedUrl] = useState('');

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
    }
  };

  const cropImage = async (file) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 250;
        canvas.height = 250;
        const ctx = canvas.getContext('2d');
        const aspectRatio = img.width / img.height;
        let sx, sy, sWidth, sHeight;

        if (aspectRatio > 1) {
          sHeight = img.height;
          sWidth = img.height * (250 / 250);
          sx = (img.width - sWidth) / 2;
          sy = 0;
        } else {
          sWidth = img.width;
          sHeight = img.width * (250 / 250);
          sx = 0;
          sy = (img.height - sHeight) / 2;
        }

        ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, 250, 250);

        canvas.toBlob((blob) => {
          resolve(blob);
        }, 'image/jpeg');
      };
    });
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select an image first!');
      return;
    }

    const croppedImage = await cropImage(file);

    const formData = new FormData();
    formData.append('image', croppedImage, 'cropped-image.jpg');

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setUploadedUrl(response.data.imageUrl);
      alert('Image uploaded successfully!');
      onUpload(response.data.imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image');
    }
    // alert(uploadedUrl);
    // onUpload(uploadedUrl);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h1>Upload Image</h1>
        <div className='popup-div'>
          <input type="file" className='popup-input' onChange={handleFileChange} />
          {previewUrl && <img src={previewUrl} alt="Preview" className='popup-img' />}
          <button onClick={handleUpload} className='upload-btn'>Upload</button>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadPopup;
