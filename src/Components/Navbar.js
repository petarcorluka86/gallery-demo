import React from 'react';
import '../css/App.css';
import Media from 'react-media';

export default function Navbar({restoreDelted}){
    return  <div className="navbar">
                <Media query="(min-width: 470px)">
                    <div className="title">
                    Flom Products Photo Gallery
                    </div>
                </Media>

                <Media query="(max-width: 470px)">
                    <div className="title">
                    Flom Gallery
                    </div>
                </Media>

                <div className="flom">
                    
                        <button href="https://dev.flom.app/" ><a href="https://dev.flom.app/" >Visit Flom </a></button>
                    
                    <button onClick={()=> restoreDelted()}>Restore Deleted</button>
                </div>
                
            </div>
}