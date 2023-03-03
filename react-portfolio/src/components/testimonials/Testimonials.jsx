import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
      avatar: AVTR1,
      name: 'Maria Frances',
      review: 'I really enjoyed playing the Guess My Number game! The interface was simple and intuitive, and the guessing challenge kept me engaged. Highly recommended!'
    },
    {
      avatar: AVTR2,
      name: 'Oscar Myers',
      review:  "The gamelist database is an awesome resource for gamers! It's easy to use and provides tons of information. Highly recommended for anyone looking for new games!"
    },
    {
    avatar: AVTR3,
      name: 'Clinton Smith',
      review:  'The JavaScript API quiz is a great way to test your knowledge! The questions are challenging but not impossible, and the interface is user-friendly. Highly recommended for aspiring developers!'
    },
    {
    avatar: AVTR4,
    name: 'Destine Colls',
    review: "Beer Buddy  locator is a fantastic tool for beer enthusiasts! It's easy to find new breweries and types of beer to try, and the interface is intuitive. Highly recommended for anyone looking to explore the world of beer"
  },
    
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testitmonials</h2>

      <Swiper className="container testimonials__container" 
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
   
          pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide Key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="" />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
             {review}
            </small>
       
        </SwiperSlide>
          )})
        }
      
        
      </Swiper>
    </section>
  )
}

export default Testimonials