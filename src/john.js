import React from 'react';
import TestimonialBtn from './testimonial-btn.js'

export default function John (){
    
    return(
        <div className='global'>
        <div className='girl-image'>
            <img className='bg-tanya' src='/images2/pattern-bg.svg' alt=''/>
            <img className='tanya' src='images2/image-john.jpg' alt=''/> 
            <TestimonialBtn/>  
        </div>
        <div className='quotes'>
            <img className='quote-img' src='images2/pattern-quotes.svg' alt=''/>
            <p className='testimonial-text'>
                "If you want to lay the best <br/> foundation possible, I'd recomment <br/>
                taking this course. The depth the<br/> instructors go into is incredible. I<br/>now feel so confident about starting 
                <br/>up as a professional developer."
            </p>
            <p className='name'>John Tarkpor</p>
            <p className='job'>Junior Front-end Developer</p>
            <img className='quote-curve' src='images2/pattern-curve.svg' alt=''/>
        </div>
    </div>
    )
}