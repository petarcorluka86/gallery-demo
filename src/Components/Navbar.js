import React from 'react';
import '../css/App.css';

export default function Navbar({modalOpen,restoreDelted}){
    return  <div className="navbar">
                <div className="title">
                    Flom Products Photo Gallery
                </div>
                {!modalOpen && <div className="flom">
                    <a href="https://dev.flom.app/" >
                        <button >Visit Flom</button>
                    </a>
                    <button onClick={()=> restoreDelted()}>Restore Deleted</button>
                </div>
                }
            </div>
}