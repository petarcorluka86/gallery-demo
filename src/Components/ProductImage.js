import React from 'react';

export default function ProductImage({src}) {
    return (
        <div>
            <img src={src} alt="Fetch failed."/>
        </div>
    );
}