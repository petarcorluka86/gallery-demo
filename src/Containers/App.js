import React, { useEffect, useState } from 'react';
import ProductImage from '../Components/ProductImage';
import api from '../Services/apiService';
import styles from '../css/App.module.css'

function App() {
  
  const [urls,setUrls] = useState([]);

  useEffect(() => {
    api.getUrls().then(response => setUrls(response));
  },[]);

  return (
    <div className={styles.app}>
      {urls.map( url => 
        <ProductImage key={url} src={url}/>
      )}
    </div>
  );
}

export default App;
