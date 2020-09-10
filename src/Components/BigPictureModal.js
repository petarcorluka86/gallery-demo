import React, { useState, useEffect } from 'react';
import '../css/BigPictureModal.css';
import ProductImageSmall from './ProductImageSmall';
export default function BigPictureModal({src,urls,closeModal,openNewBig}) {
    const [nextProducts,setNextProducts] = useState([]);
    let count = 0;

    useEffect(() => {
        const temp = [];
        for(let i=-2; i<=2; i++){
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
                    alt="Load fail"
                />
            </div>
            <div className="modalRight"><button onClick={()=>openNewBig(nextProducts[3].url,nextProducts[3].id)}></button></div>
            <div className="modalLeft"><button onClick={()=>openNewBig(nextProducts[1].url,nextProducts[1].id)}></button></div>
            <div className="modalBottom">
                {nextProducts.map((product=>{
                    count ++;
                    const classN = `mini${count}`;
                        return(
                            <div key={product.url} className={classN} onClick={()=>openNewBig(product.url,product.id)}>
                                <ProductImageSmall 
                                    src={product.url}
                                    id={product.id}
                                    openBigPicture={()=>{}}
                                    h="100%"
                                    w="100%"
                                />
                            </div>
                        );
                }))}
            </div>
            <div className="closeModal"><button onClick={()=>closeModal()}></button></div>
      </div>
    );
}

