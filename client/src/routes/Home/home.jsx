import React from 'react'
import Background from '../../assets/home.webp';
import { Link } from 'react-router-dom';



function Home() {
  const top = () => {
    window.scrollTo(0,0);
  };
  
  return (
    <div>
      <h1>Disney BookStore</h1>
        <img src= {Background}/>
        <h1>Summer reads for every adventure</h1>
        <p>Looking for the book that best fits your holiday? Find your next adventure in our guide of hand-picked summer reading lists.</p>
        <Link to={"/about"}>See the Books... </Link>
        <br />
        <button onClick={top} className='b-t-top'>Back to Top</button>
    </div>
  )
}

export default Home