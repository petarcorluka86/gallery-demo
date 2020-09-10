import React from 'react';

export default function ProductImageSmall({src, openBigPicture, id, h, w}) {
    return (
        <button
            style={{
                height: `${h}`,
                width: `${w}`,
                background: "url("+src+")",
                backgroundSize: "cover",
                border: "1pt solid black"
            }}
            onClick={() => openBigPicture(src, id)}
        >
        </button>
    );
}