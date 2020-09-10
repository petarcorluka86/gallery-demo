import React from 'react';
import '../css/App.css';

export default function Navbar({modalOpen}){
    return  <div className="navbar">
                <div className="title">
                    Flom Products Photo Gallery
                </div>
                {!modalOpen && <div className="flom">
                    <a href="https://dev.flom.app/" >
                        <button >
                        </button>
                    </a>
                </div>
                }
            </div>
}