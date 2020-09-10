import React, { useEffect, useState } from 'react';
import ProductImageSmall from '../Components/ProductImageSmall';
import BigPictureModal from '../Components/BigPictureModal';
import { Modal } from 'react-bootstrap';
import api from '../Services/apiService';
import '../css/App.css';

export default function App() {
  
  const [urls,setUrls] = useState([]);
  const [showModal,setShowModal] = useState(false);
  const [activeImage,setActiveImage] = useState();
  let count = 0;

  useEffect(() => { 
    api.getUrls()
      .then(response => setUrls(response))
  },[]);

  const toggleModal = (url,id) => {
    setShowModal(!showModal);
    setActiveImage({url:url, id:id});
  }
  
  return (
    <div>
      <div className="app">
        <div className="title">Flom Products Gallery</div>
        <div className="photos">
          {urls.map( url => 
            <div key={url} style={{border: "1pt solid black", borderRadius: "5pt", width: "150pt" , height: "150pt"}}>
              <ProductImageSmall
                image={{url:url, id: count++}}
                openBigPicture={toggleModal}
                h="100%"
                w="150pt"
              />
            </div>
          )}
        </div>
      </div>
      <Modal show={showModal}>
        <BigPictureModal src={activeImage} urls={urls} closeModal={()=>setShowModal(!showModal)} openNewBig={(url,id) => setActiveImage({url:url,id:id})}/>
      </Modal>
    </div>
  );
}