import React from 'react'
import { Link } from 'react-scroll'
import '../App.css'
export default function Navbar() {
    const elements= [
        {'id':1, 'name':'Store', 'link':'/Store'},
        {'id':2, 'name':'Mac', 'link':'/Mac'},
        {'id':3, 'name':'iPad', 'link':'/iPad'},
        {'id':4, 'name':'iPhone', 'link':'/iPhone'},
        {'id':5, 'name':'Watch', 'link':'/Watch'},
        {'id':6, 'name':'AirPods', 'link':'/AirPods'},
        {'id':7, 'name':'TV & Home', 'link':'/TV&Home'},
        {'id':8, 'name':'Entertainment', 'link':'/Entertainment'},
        {'id':9, 'name':'Accessories', 'link':'/Accessories'},
        {'id':10, 'name':'Support', 'link':'/Support'},
    ]
  return (
    <>
        <nav className="sticky top-0 z-50 bgBlur">
            <ul className='flex h-10 text-center items-center justify-evenly'>
                <div className="text-white">
                    <a href="#"><i className="fa-brands fa-apple"></i></a>
                </div>
                <div className='flex flex-wrap space-x-6'>

                {elements.map((route)=>(
                    <Link
                    to={route.link}
                    smooth={true}
                    duration={500}
                    key={route.id}
                    >
                        <li className='text-white'>{route.name}</li>

                    </Link>
                ))

                }
                </div>
                <div className="text-white space-x-14">
                    <a href="#"><i className="fas fa-search"></i></a>
                    <a href="#"><i className="fa-solid fa-bag-shopping"></i></a>
                </div>
            </ul>
        </nav>
    </>
  )
}