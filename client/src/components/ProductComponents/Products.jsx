import React from 'react'
import { Link } from 'react-scroll'
import airpod from '../../assets/images/productd/airpods.jpg'
import homepod from '../../assets/images/productd/homepod.jpg'
import ipad from '../../assets/images/productd/ipad.jpg'
import trade from '../../assets/images/productd/trade.jpg'
import watch from '../../assets/images/productd/watch.jpg'
import mac from '../../assets/images/productd/maclap.jpg'
import watchlogo from '../../assets/images/productd/watchlogo.png'
import { IoIosArrowForward } from "react-icons/io";

export default function () {
    const Product = [
        { product: 'Watch', about: 'Smarter. Brighter. Mightier.', image: watch,style:'white' },
        { product: 'iPad', about: 'Lovable. Drawable. Magical.', image: ipad ,style:'black' },
        { product: 'Airpods Por', about: 'Adaptive Audio. Now playing.', image: airpod ,style:'white' },
        { product: 'MacBook Pro', about: 'Mind-blowing. Head-turning.', image: mac ,style:'black' },
        { product: 'HomePod mini', about: 'Smarter. Brighter. Mightier.', image: homepod ,style:'black' },
        { product: 'Trade In', about: "Upgrade and save. It's that easy.", image: trade ,style:'black' },

    ]

    return (
        <>
            
                <div className='grid grid-cols-2 gap-4 m-4' style={{minHeight:'200vh'}}>
                    {Product.map((item, index) => (
                        <Link key={index}>
                            <div className='h-full w-full bg-cover bg-center shadow-2xl' style={{backgroundImage:`url(${item.image})`}}>
                               
                               <div className='py-12'>
                                
                                <div className='select-none text-center ' style={{color:`${item.style}`}}>
                                
                                    <h1 className=' font-semibold text-5xl py-4' > {item.product}</h1> 
                                    <p className='text-xl font-medium'> {item.about} </p>
                                </div>
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