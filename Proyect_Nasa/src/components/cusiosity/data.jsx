import React, { useState, useEffect } from 'react';
import { Layout } from '../layout';

function MarsRoverPhotos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Nsk9iWGqh5qlntoxkZgVQNx69kf0VZYMpJOs5dDW')
      .then(response => response.json())
      .then(data => {
        setPhotos(data.photos);
      })
      .catch(error => {
        console.log(error);
      });
  }, []); 
 const description= "leading-relaxed mb-3 text-white tracking-widest"
  return (
    <Layout>
      <aside className='flex flex-wrap gap-8 p-10 pl-10 bg-gradient-to-r from-blue-950 to-cyan-950'>
        {photos.map(photo =>   
          <div className='h-auto w-80' key={photo.id}>
          <  img className='lg:h-48 md:h-36 w-full object-cover object-center rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-white' src={photo.img_src} alt={photo.id} />
          <div className="p-6">
          <h2 className="tracking-widest text-lg title-font font-medium text-gray-800 mb-1">ROVER</h2>
          <h1 className="title-font text-lg font-medium text-black mb-3">{photo.rover.name}</h1>
          <p className={description}>CAMERA: {photo.camera.name}</p>
          <p className={description}>STATUS: {photo.rover.status}</p>
          <p className={description}>EARTTH DATE: {photo.earth_date}</p>
        </div>
      </div>
        )}
    </aside>
    </Layout>
  );
}

export default MarsRoverPhotos;
