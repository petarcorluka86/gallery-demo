import React, { useEffect, useState } from 'react';
import ProductImageSmall from '../Components/ProductImageSmall';
import BigPictureModal from '../Components/BigPictureModal';
import api from '../Services/apiService';
import '../css/App.css';

function App() {
  
  const [urls,setUrls] = useState([]);
  const [showModal,setShowModal] = useState(false);
  const [activeImage,setActiveImage] = useState();
  let count = 1;

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
            <ProductImageSmall
              key={url} 
              src={url}
              id={count}
              openBigPicture={toggleBigPicture}
              h="150pt"
              w="150pt"
            />);
          }
          )}
        </div>
      }
      {showModal && 
        <BigPictureModal src={activeImage} urls={urls} closeModal={toggleBigPicture}/>
      }
    </div>
  );
}

export default App;