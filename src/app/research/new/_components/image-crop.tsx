"use client";

import { useState, useRef } from 'react';
import ReactCrop, { type Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

export default function ImageCrop() {
  const [crop, setCrop] = useState<Crop>({
    unit: '%', // Can be 'px' or '%'
    x: 25,
    y: 25,
    width: 50,
    height: 50,
  });

  const [completedCrop, setCompletedCrop] = useState<Crop | null>(null);
  const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const onImageLoaded = (image: HTMLImageElement) => {
    imageRef.current = image;
  };

  const onCropComplete = (crop: Crop) => {
    setCompletedCrop(crop);
    if (imageRef.current && crop.width && crop.height) {
      const canvas = document.createElement('canvas');
      const scaleX = imageRef.current.naturalWidth / imageRef.current.width;
      const scaleY = imageRef.current.naturalHeight / imageRef.current.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.drawImage(
          imageRef.current,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );

        const base64Image = canvas.toDataURL('image/jpeg');
        setCroppedImageUrl(base64Image);
        console.log(base64Image);
        
      }
    }
  };

  return (
    <div>
      <ReactCrop
        crop={crop}
        onChange={(c) => setCrop(c)}
        onComplete={onCropComplete}
        aspect={1}
        circularCrop
        keepSelection
      >
        <img
          src="/komeji.jpg"
          alt="komeji"
          width={300}
          onLoad={(e) => onImageLoaded(e.currentTarget)}
        />
      </ReactCrop>
      {croppedImageUrl && (
        <div>
          <h3>クロップされた画像:</h3>
          <img src={croppedImageUrl} alt="Cropped" style={{borderRadius: "100%"}} />
        </div>
      )}
    </div>
  );
}
