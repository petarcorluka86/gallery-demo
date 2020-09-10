import React from 'react';
import '../css/ProductImageSmall.css';

export default function ProductImageSmall({image,openBigPicture}) {
    return <img
                id={image.id}
                src={image.url}
                className="imgSmall"
                alt="ProductImageSmall placeholder."
                onClick={() => openBigPicture(image.url, image.id)}
            />
}