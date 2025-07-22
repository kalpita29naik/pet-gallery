import groupImg from '../assets/image/group.png'
import Button from './Button';

function Home() {



 return (
  <div className="bg-[#EBD6FB] lg:flex lg:flex-row mt-10 px-6 lg:px-20 items-center justify-center ">
   <div>
    <h1 className="font-Delius text-5xl sm:text-5xl md:text-6xl lg:text-8xl">Let's Find Your Furry Friend</h1>

    <Button placeholder="Explore More" onClick="Gallery" />
   </div>

   <img src={groupImg} alt="mainImg" className='h-[300px] sm:h-[400px] sm:w-[500px] lg:h-[500px] lg:w-[800px] justify-center' />
  </div>
 )
}

export default Home;