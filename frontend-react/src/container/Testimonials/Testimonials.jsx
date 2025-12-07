import React,{useState,useEffect} from 'react'

import { HiChevronLeft,HiChevronRight } from 'react-icons/hi';
import{motion} from 'framer-motion';
import {urlFor,client} from '../../client';
import{AppWrap,MotionWrap} from '../../wrapper';
import './Testimonials.scss';







const Testimonials = () => {
  const [brands,setBrands]=useState([]);
  const [testimonial,setTestimonial]=useState([]);
  const [currentIndex,setCurrentIndex]=useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

   useEffect(() => {
      const query = '*[_type == "testimonial"]';
      const BrandsQuery = '*[_type == "brands"]';
  
      client.fetch(query).then((data) => {
        setTestimonial(data);
      });
  
      client.fetch(BrandsQuery).then((data) => {
        setBrands(data);
      });
    }, []);
  
  return(
    <>
      {testimonial.length && (
        <>
        <div className="app__testimonial-item app__flex">
         <img src={urlFor(testimonial[currentIndex]?.image).url()} alt="testimonial" />
         <div className="app__testimonial-content">
              <p className="p-text">{testimonial[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonial[currentIndex].name}</h4>
                <h5 className="p-text">{testimonial[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonial.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonial.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>


      
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);