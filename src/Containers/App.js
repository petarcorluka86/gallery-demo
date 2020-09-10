import React, { useEffect, useState } from 'react';
import ProductImageSmall from '../Components/ProductImageSmall';
import BigPictureModal from '../Components/BigPictureModal';
import Navbar from '../Components/Navbar';
import { Modal } from 'react-bootstrap';
import api from '../Services/apiService';
import '../css/App.css';

export default function App() {
  
  const [urls,setUrls] = useState([]);
  const [showModal,setShowModal] = useState(false);
  const [activeImage,setActiveImage] = useState();
  let count = 0;

  useEffect(() => { 
    const urlsStorage = localStorage.getItem('urls');
    if(urlsStorage) setUrls( urlsStorage.split(","));
    else api.getUrls().then(response => setUrls(response))
  },[]);

  const deleteItem = (urlToDelte) => {
    const newUrls = urls.filter(url =>  url !== urlToDelte);
    toggleModal(urlToDelte,1);
    localStorage.setItem('urls',newUrls);
    setUrls(newUrls);
  }

  const restoreDeleted = () => {
    localStorage.clear();
    api.getUrls().then(response => setUrls(response));
  }

  const toggleModal = (url,id) => {
    setShowModal(!showModal);
    setActiveImage({url:url, id:id});
  }
  
  return (
    <div>
      <div className="app">
        <Navbar modalOpen={showModal} restoreDelted={restoreDeleted}/>
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
        <BigPictureModal src={activeImage} urls={urls} closeModal={()=>setShowModal(!showModal)} openNewBig={(url,id) => setActiveImage({url:url,id:id})} deleteItem={deleteItem}/>
      </Modal>
    </div>
  );
}