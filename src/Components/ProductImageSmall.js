import React from 'react';

export default function ProductImageSmall({src, openBigPicture, id, h, w}) {
    return (
        <img
            id={id}
            className="img-small"
            src={src}
            alt="small"
            style={{
                height: `${h}`,
                width: `${w}`,
                borderRadius: "5pt",
                border: 0,
                outline: 0
            }}
            onClick={() => openBigPicture(src, id)}
        >
        </img>
    );
}