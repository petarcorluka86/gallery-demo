import React, { useEffect, useState } from 'react';
import ProductImageSmall from '../Components/ProductImageSmall';
import BigPictureModal from '../Components/BigPictureModal';
import api from '../Services/apiService';
import '../css/App.css';

function App() {
  
  const [urls,setUrls] = useState([]);
  const [showModal,setShowModal] = useState(false);
  const [activeImage,setActiveImage] = useState();
  let count = -1;

  useEffect(() => {
    api.getUrls().then(response => setUrls(response));
  },[]);

  const toggleBigPicture = (url,id) => {
    setShowModal(!showModal);
    setActiveImage({url:url, id:id});
  }
  

  return (
    <div>
      {!showModal &&
        <div className="app">
          {urls.map( url => {
            count++;
            return (
              <div style={{border: "1pt solid black", borderRadius: "5pt", width: "150pt" , height: "150pt"}}>
            <ProductImageSmall
              key={url} 
              src={url}
              id={count}
              openBigPicture={toggleBigPicture}
              h="100%"
              w="150pt"
            />
            </div>);
          }
          )}
        </div>
      }
      {showModal && 
        <BigPictureModal src={activeImage} urls={urls} closeModal={toggleBigPicture} openNewBig={(url,id) => setActiveImage({url:url,id:id})}/>
      }
    </div>
  );
}

export default App;
