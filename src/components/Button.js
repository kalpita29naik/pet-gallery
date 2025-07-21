import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Button = ({ placeholder, onClick }) => {
	const navigate = useNavigate();
	return (
		<button
			type='button'
			className=' bg-[#FFCC00] p-3 rounded-full mt-10 text-xl font-Delius hover:bg-[#FFB22C] hover:shadow-md'
			onClick={() => {
				navigate(onClick)
			}}

		>
			{placeholder}
			<FontAwesomeIcon
				icon={faPaw}
				className='ml-2 mr-1' />
		</button>
	)

}

export default Button;