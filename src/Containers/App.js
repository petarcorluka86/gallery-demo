import React, { useEffect, useState } from 'react';
import ProductImage from '../Components/ProductImage';
import api from '../Services/apiService';

function App() {
  
  const [urls,setUrls] = useState([]);

  useEffect(() => {
    api.getUrls().then(response => setUrls(response));
  },[]);

  return (
    <div className="app">
      {urls.map( url => 
        <ProductImage key={url} src={url}/>
      )}
    </div>
  );
}

export default App;
