import React, { useState, useEffect } from 'react';
import ProductImageSmall from './ProductImageSmall';
import '../css/BigPictureModal.css';

export default function BigPictureModal({src,urls,closeModal,openNewBig, deleteItem}) {
    const [nextProducts,setNextProducts] = useState([]);
    let count = 1;

    useEffect(() => {
        const temp = [];
        for(let i=-5; i<=5; i++){
            if(src.id+i < 0) {
                temp.push({url: urls[urls.length+i], id: urls.length+i});
            }
            else if (src.id +i > urls.length -1) {
                temp.push({url: urls[i  - 1], id: i -1});
            }
            else {
                temp.push({url: urls[src.id+i], id: src.id+i});
            }
        }
        setNextProducts(temp);
    },[src.id,urls]);

    return (
        <div className="modalContainer">

            <div className="modalCenter">
                <div 
                    style={{ 
                        width: "100%",
                        height: "100%",
                        borderRadius: "7pt", 
                        backgroundImage: `url(${src.url})`, 
                        backgroundSize: "100% 100%",
                        display: "grid", 
                        gridTemplateRows: "auto 10%", 
                        gridTemplateColumns: "60pt auto"
                    }}
                >
                    <div className="imgCounter">
                        <img src="https://image.flaticon.com/icons/svg/2983/2983759.svg" alt="counter"/>
                        <span>{src.id +1 }/{urls.length}</span>
                    </div>
                </div>
            </div>

            <div className="modalRight">
                <button onClick={()=>openNewBig(nextProducts[6].url,nextProducts[6].id)}></button>
            </div>

            <div className="modalLeft">
                <button onClick={()=>openNewBig(nextProducts[4].url,nextProducts[4].id)}></button>
            </div>

            <div className="modalBottom">
                {nextProducts.map( product =>
                    <div key={product.url+count} className={`mini${count++}`}>
                        <ProductImageSmall 
                            image={product}
                            openBigPicture={()=> openNewBig(product.url,product.id)}
                        />
                    </div>
                )}
            </div>

            <div className="deleteImage">
                <label htmlFor="del">
                    <button id="del" onClick={()=> deleteItem(src.url)}></button>
                    DELETE
                </label>
            </div>

            <div className="closeModal">
                <button onClick={()=>closeModal()}></button>
            </div>

      </div>
    );
}

