import React from 'react';

export default function ProductImageSmall({src, openBigPicture, id, h, w}) {
    return (
        <button
            id={id}
            style={{
                height: `${h}`,
                width: `${w}`,
                background: "url("+src+")",
                backgroundSize: "cover",
                border: "1pt solid black",
                borderRadius: "5pt",
            }}
            onClick={() => openBigPicture(src, id)}
        >
        </button>
    );
}