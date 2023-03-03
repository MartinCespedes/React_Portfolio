import React from 'react'
import "./services.css"
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
   <section id="services">
   <h5>What I Offer</h5>
   <h2>Services</h2>
   
   <div className='container services__container'>
    <article className='service'>
      <div className='service__head'>
        <h3>UI/UX Design</h3>
      </div>

      <ul className='service__list'>

        <li>
        <BiCheck className='service__list-icon'/>
        <p> Design interfaces that captivate and engage users.
        </p>
        </li>
        <li>
        <BiCheck className='service__list-icon'/>
        <p> Enhance user experience with intuitive design solutions.
        </p>
        </li>
        <li>
        <BiCheck className='service__list-icon'/>
        <p> Improve user flow and navigation for websites.
        </p>
        </li>
        <li>
        <BiCheck className='service__list-icon'/>
        <p> Create beautiful and functional mobile app designs.
        </p>
        </li>
        <li>
        <BiCheck className='service__list-icon'/>
        <p> Optimize user interfaces for greater usability.
        </p>
        </li>
        <li>
        <BiCheck className='service__list-icon'/>
        <p> Develop UI designs that meet your business goals.
        </p>
        </li>
        <li>
        <BiCheck className='service__list-icon'/>
        <p> Transform complex information into easy-to-use interfaces.
        </p>
        </li>
        <li>
        <BiCheck className='service__list-icon'/>
        <p> Make your digital products more user-friendly.
        </p>
        </li>
        
      </ul>
      </article>
      {/* END OF UI/UX */}
      <article className='service'>
      <div className='service__head'>
        <h3>Content Creation</h3>
      </div>

      <ul className='service__list'>

        <li>
        <BiCheck className='service__list-icon'/>
        <p> Craft compelling and engaging written content.
        </p>
        </li>
        <li>
        <BiCheck className='service__list-icon'/>
        <p> Create visual content that tells your story.
        </p>
        </li>
        <li>
        <BiCheck className='service__list-icon'/>
        <p> Produce high-quality videos for your brand.
        </p>
        </li>
        <li>
        <BiCheck className='service__list-icon'/>
        <p> Develop social media content that drives engagement.
        </p>
        </li>
        <li>
        <BiCheck className='service__list-icon'/>
        <p> Write SEO-friendly content to boost your visibility.
        </p>
        </li>
        <li>
        <BiCheck className='service__list-icon'/>
        <p> Design infographics that communicate complex data.
        </p>
        </li>
        <li>
        <BiCheck className='service__list-icon'/>
        <p> Capture your brand's voice in every piece.
        </p>
        </li>
        <li>
        <BiCheck className='service__list-icon'/>
        <p> Produce content that resonates with your audience.
        </p>
        </li>
        
        
      </ul>
      </article>
       {/* End Content Creation */} 
    

      <article className='service'>
      <div className='service__head'>
        <h3>Web Development</h3>
      </div>

      <ul className='service__list'>

        <li>
        <BiCheck className='service__list-icon'/>
        <p> Develop custom websites that meet your business needs.
        </p>
        </li>
        <li>
        <BiCheck className='service__list-icon'/>
        <p> Improve website speed and performance for better user experience.
        </p>
        </li>
        <li>
        <BiCheck className='service__list-icon'/>
        <p> Build scalable web applications for your business.
        </p>
        </li>
        <li>
        <BiCheck className='service__list-icon'/>
        <p> Integrate powerful e-commerce solutions into your website.
        </p>
        </li>
        <li>
        <BiCheck className='service__list-icon'/>
        <p> Secure your website with the latest web technologies.
        </p>
        </li>
        <li>
        <BiCheck className='service__list-icon'/>
        <p> Optimize your website for search engine visibility.
        </p>
        </li>
        <li>
        <BiCheck className='service__list-icon'/>
        <p> Provide ongoing website maintenance and support.
        </p>
        </li>
        
      </ul>
      </article>
       {/* END Web Development */}
      
      
      

   </div>
    </section>
  )
}

export default Services