import React, { useState, useEffect } from 'react';
import '../css/BigPictureModal.css';
import ProductImageSmall from './ProductImageSmall';
export default function BigPictureModal({src,urls,closeModal,changeActiveImage}) {
    const [nextProducts,setNextProducts] = useState([]);
    let count = 0;

    useEffect(() => {
        const temp = [];
        for(let i=1; i<=5; i++){
            temp.push(urls[src.id+i])
        }
        setNextProducts(temp);
    },[src.id]);

    return(
        <div className="modalContainer">
            <div className="modalCenter">
            <img 
                src={src.url}
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10pt"
                }}
            />
            </div>
            <div className="modalRight">
                <button>RIGHT</button>
            </div>
            <div className="modalLeft">
                <button>LEFT</button>
            </div>
            <div className="modalBottom">
                {nextProducts.map((product=>{
                    count ++;
                    const classN = `mini${count}`;
                    return(
                        <div className={classN} >
                            <ProductImageSmall 
                                key={product} 
                                src={product}
                                id={count}
                                openBigPicture={()=>{}}
                                h="100%"
                                w="100%"
                            />
                        </div>
                    );
                }))}
            </div>
            <div className="closeModal">
                <button onClick={()=>closeModal()}></button>
            </div>
      </div>
    );
}

