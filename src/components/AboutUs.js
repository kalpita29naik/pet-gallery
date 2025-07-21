import React from 'react'
import bg from '../assets/image/petCare1-removebg-preview.png'

const AboutUs = () => {
 return (
  <div className='font-Delius flex flex-row justify-center items-center p-20'>

   <div className='w-1/2 '>
    <img src={bg} alt='gk' className=' w-96  ' />
   </div>

   <div className='w-1/2 text-justify '>

    <p className='pb-8'>Welcome to Puppy, a trusted community built for pet lovers, by pet lovers. Established in 2023 by a group of passionate animal enthusiasts, our mission is to provide a safe and loving space for both pets and their future families. We noticed how difficult it can be to find trustworthy sources for adopting or purchasing pets, and that's what inspired us to create this platform.</p>

    <p className='pb-8'>
     At Puppy, we sell both cats and dogs of various breeds — from playful Labradors and Golden Retrievers to elegant Persians and active Siamese cats. We ensure that every pet is thoroughly vaccinated and health-checked before becoming part of your family. Our team works closely with certified veterinarians and caretakers to make sure each pet is well-cared for, emotionally and physically.
    </p>

    <p>
     But we're more than just a pet-selling platform. We’re a growing community built on love, trust, and care. Whether you're a first-time pet parent or a seasoned animal lover, our goal is to support you at every step — from grooming advice and training tips to long-term health care. Join us in creating a world where every paw is loved, every bark is heard, and every purr is cherished.</p>

   </div>

  </div >
 )
}

export default AboutUs