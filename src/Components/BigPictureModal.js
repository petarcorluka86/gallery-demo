import React, { useState, useEffect } from 'react';
import '../css/BigPictureModal.css';
import ProductImageSmall from './ProductImageSmall';
export default function BigPictureModal({src,urls,closeModal,openNewBig}) {
    const [nextProducts,setNextProducts] = useState([]);
    let count = 0;

    useEffect(() => {
        const temp = [];
        for(let i=-2; i<=2; i++){
            console.log("SRC ID = ",src.id)
            console.log("i: ",src.id+i)
            temp.push({url: urls[src.id+i], id: src.id+i})
        }
        setNextProducts(temp);
    },[src.id,urls]);

    return(
        <div className="modalContainer">
            <div className="modalCenter">
            <img 
                key={src.url}
                src={src.url}
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10pt"
                }}
                alt="Load fail"
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
                    if((count+src.id<urls.length))
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
                    else return null
                }))}
            </div>
            <div className="closeModal">
                <button onClick={()=>closeModal()}></button>
            </div>
      </div>
    );
}

