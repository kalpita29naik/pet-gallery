import groupImg from '../assets/image/group.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function Home() {



 return (
  <div className="bg-[#EBD6FB] flex flex-row mt-10 p-6 px-20 items-center ">
   <div>
    <h1 className="font-Delius text-8xl">Let's Find Your Furry Friend</h1>

    <Button placeholder="Explore More" onClick="Gallery" />
   </div>

   <img src={groupImg} alt="mainImg" className='h-[400px]' />
  </div>
 )
}

export default Home;