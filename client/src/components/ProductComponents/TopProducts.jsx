import React from 'react'
import { Link } from 'react-scroll';
import mac from '../../assets/images/mac.jpg'
import p1 from '../../assets/images/p1.jpg'
import p2 from '../../assets/images/p2.jpg'
import { IoIosArrowForward } from "react-icons/io";



export default function () {

    const topProduct= [
        {h1: "MacBook Air",con1:"Supercharged by M3",con2:"Available from 9 March", img:mac,textColor:'black'},
        {h1: "iPhone 15 Pro",con1:"Titanium. So strong. So light. So Pro.",con2:"Available from 9 March", img:p1,textColor:'white'},
        {h1: "iPhone 15",con1:"New camera. New design. Newphoria.",con2:"Available from 9 March", img:p2,textColor:'black'}
    ]

    return (
    <>
        <div>

{topProduct.map((item) => (
    <Link to="your-destination-url-here">
        <div className='h-screen  flex items-center justify-center'>
            <div className="h-full w-full " style={{backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className='text-center mt-24' style={{color:`${item.textColor}`}} >
                    <h2 className='text-3xl font-semibold mb-2 md:text-6xl'>{item.h1}</h2>
                    <p className='text-lg mb-1 font-semibold' >{item.con1}</p>
                    <p className='text-gray-400'>{item.con2}</p>
                </div>
                {/* Ensure the image is not hidden */}
                {/* <img src={item.img} alt="" srcSet="" /> */}
                <div className='flex justify-center space-x-4 text-blue-600 my-2'>
                    <a href="#" className='flex text-center align-middle justify-center items-center hover:underline '>Learn more<IoIosArrowForward /></a>
                    <a href="#" className='flex text-center align-middle justify-center items-center hover:underline '>Order now<IoIosArrowForward /></a>
                </div>
            </div>
        </div>
    </Link>
))}

        </div>
    </>
  )
}
