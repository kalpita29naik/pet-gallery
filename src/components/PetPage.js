
import data from '../data.json'
import { useParams } from 'react-router-dom'
import petCare from '../petCare.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';



const PetPage = () => {
 const { id } = useParams();
 const pet = data.find(p => String(p.id) === id);

 if (!pet) {
  return (
   <div className='text-center text-5xl text-red-600 mt-10 font-Delius'>Pet Not Found <FontAwesomeIcon icon={faPaw} className='mr-3' /></div>
  )
 }

 return (

  <div>
   <div className='lg:flex lg:flex-row p-10 gap-4 font-Delius items-center'>
    <img src={pet.image} alt={pet.Breed} className='rounded-3xl h-full w-full ' />

    <div >

     <p className="text-xl lg:text-2xl text-gray-700 mt-4 ml-4 leading-relaxed text-left sm:text-justify">

      <span className="font-semibold">{pet.name}</span> is a {pet.Age} old <span className="font-semibold">{pet.Breed}</span> {pet.type} from <span className="font-semibold">{pet.Location}</span> who has {pet.adopted === 'Adopted' ? 'already found a loving home' : 'not been adopted yet'}. Known for a unique love of water, {pet.name} enjoys swimming and playing, which is quite rare for {pet.type}. He is very <span className="italic">affectionate</span> and gets along well with other pets. His vaccinations are <span className="font-semibold lowercase">{pet.VaccinationStatus}</span>, ensuring he's healthy and cared for. With a playful nature and warm personality, {pet.name} makes a perfect companion.
     </p>

    </div>
   </div>

   <div className='font-Delius p-10 '>
    <p className=' text-3xl text-center lg:text-left font-bold'>Pet care Tips</p>

    <div className='lg:flex lg:flex-row gap-3 items-center mt-6'>

     <div>
      <video width="610" controls className='rounded-3xl' >
       <source src={pet.careVideo} type='video/mp4' />
      </video>
     </div>

     <div>
      <ul >
       {petCare.map((item, index) => (
        <li key={index} className='p-3 text-lg'>
         <FontAwesomeIcon icon={faPaw} className='mr-3' />
         {item}
        </li>
       ))}
      </ul>
     </div>
    </div>
   </div>

  </div>
 )
}

export default PetPage