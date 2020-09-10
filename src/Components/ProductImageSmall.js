import React from 'react';

export default function ProductImageSmall({src, openBigPicture, id, h, w}) {
    return (
        <button
            id={id}
            className="img-small"
            style={{
                height: `${h}`,
                width: `${w}`,
                background: "url("+src+")",
                backgroundSize: "cover",
                borderRadius: "5pt",
                border: 0,
                outline: 0
            }}
            onClick={() => openBigPicture(src, id)}
        >
        </button>
    );
}