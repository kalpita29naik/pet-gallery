import data from '../data.json'
import Button from './Button';

const Gallery = () => {

	return (
		<div className=' m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-6 '>

			{data.map((pet) => (
				<article className='border border-yellow-600 p-4 rounded-2xl font-Delius hover:shadow-xl' key={pet.id}>

					<figure>
						<img src={pet.image} alt={pet.Breed} className='h-96 sm:h-[200px] lg:h-60 w-full object-cover rounded-md' />
					</figure>
					<h1 className='font-bold text-3xl mt-3'>{pet.name}</h1>
					<p className='text-gray-500 text-xl mt-2'>{pet.Breed}</p>

					<p className='text-gray-500 text-lg mt-2'>{pet.adopted === 'Adopted' || pet.adopted === 'Yes' ? 'Adopted' : 'Available'}</p>

					<Button placeholder="Know More" to={`/PetPage/${pet.id}`} />
				</article>
			))
			}


		</div >


	)
}

export default Gallery