import React from 'react'
import { Link } from 'react-scroll'

export default function () {
    const Product = [
        { product: 'watch', about: 'Smarter. Brighter. Mightier.' },
        { product: 'watch', about: 'Smarter. Brighter. Mightier.' },
        { product: 'watch', about: 'Smarter. Brighter. Mightier.' },
        { product: 'watch', about: 'Smarter. Brighter. Mightier.' },
        { product: 'watch', about: 'Smarter. Brighter. Mightier.' },
        { product: 'watch', about: 'Smarter. Brighter. Mightier.' },
    ]

    return (
        <>
            
                <div className='grid grid-cols-2 gap-1 h-screen'>
                    {Product.map((item, index) => (
                        <Link key={index}>
                            <div className='bg-orange-300 h-full w-full  '>
                                <div>
                                    <h1>{item.product}</h1>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

        </>
    )
}