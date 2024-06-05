import React, { useState } from 'react';
import { imagenes } from './imagenes.js';
import './ejercicio2.css'

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <h1>Galería de Imágenes</h1>
      <div className="gallery-container">
        {imagenes.map((imagen, index) => (
          <img
            key={index}
            src={imagen.img}
            alt={`Imagen ${index}`}
            onClick={() => handleImageClick(imagen)}
            className="thumbnail"
          />
        ))}
      </div>
      {selectedImage && (
        <div className="modal-overlay">
          <div className="modal">
            <img src={selectedImage.img} onClick={() => setSelectedImage(null)} alt="Imagen Ampliada" className="expanded-image" />
          </div>
        </div>
      )}
    </div>
  );
};
export default ImageGallery;