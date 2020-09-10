import React from 'react';

export default function ProductImageSmall({image,openBigPicture}) {
    return (
        <img
            id={image.id}
            src={image.url}
            className="img-small"
            alt="small"
            onClick={() => openBigPicture(image.url, image.id)}
            style={{
                height: "100%",
                width: "100%",
                borderRadius: "5pt",
                border: 0,
                outline: 0
            }}
        />
    );
}