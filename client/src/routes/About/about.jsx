import React from 'react'
import { Link } from 'react-router-dom';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import Background from "../../assets/home.webp"


function About() {

    const top = () => {
        window.scrollTo(0,0);
      };

  return (
    <div>
        <h1>Summer reads for every adventure</h1> 
        <p><FaTwitter /> <FaFacebookF /> <LuInstagram /> <MdOutlineMailOutline /> </p>
        <img src={Background}  />
       <p className='d-text'>All year long, we look forward to summer. Summer gives us sun. It gives us get-togethers and the time we need to finally finish a book. But now that summer is here, where do we start?<br /><br />
       Start with our summer reading guide: four lists, hand-picked to meet every bookish need, with both new and used copies available. Whether you need the inspiration of a self-help book to power through your annual goals, a little romance novel to lose yourself for a few hours, or a conversation starter from award-winning fiction for the next neighborhood cookout, we have you covered
       </p>

        <h3 className='h3'>Choose your journey and let your reading adventure begin.</h3>
        <ul className='b-links'>
            <li><Link to={`/books/harry-potter`} >Harry Potter</Link></li>
            <li><Link to={`/books/the-extra-mile`}>The Extra Mile</Link></li>
            <li><Link to={`/books/the-6-20-man`}>The 6:20 Man</Link></li>
            <li><Link to={`/books/no-one-saw-a-thing`}>No One Saw A Thing</Link></li>
            <li><Link to={`/books`}>Show All</Link></li>
        </ul>
        <br />
        <button onClick={top} className='b-t-top'>Back to Top</button>
       
    </div>
  )
}

export default About