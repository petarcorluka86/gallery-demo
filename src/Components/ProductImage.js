import React from 'react';

export default function ProductImage({src}) {
    return (
        <button
            style={{
                height: "150pt",
                width: "150pt",
                background: "url("+src+")",
                backgroundSize: "cover",
                border: "1pt solid black",
                margin: "10pt"
            }}
        >
        </button>
    );
}