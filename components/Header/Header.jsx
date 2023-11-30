'use client'
import {useEffect, useRef, useState} from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import LogoImage from '@public/images/logo.jpeg'
import CloseSvg from '@public/icons/close.svg'
import Navigation from '@components/Header/components/Navigation'

const links = [
    { title: 'Home', path: '#home' },
    { title: 'About', path: '#about' },
    { title: 'Experience', path: '#experience' },
    { title: 'Contact', path: '#contact' },
]

const Header = () => {
    const [menu, setMenu] = useState(false)
    const menuRef = useRef(null)

    const toggleMenu = () => setMenu(prev => !prev)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && menu) {
                setMenu(false)
            }
        }

        document.addEventListener('click', handleClickOutside)

        return () => document.removeEventListener('click', handleClickOutside)
    }, [])

    return (
        <header className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
            <div className='max-w-container h-full mx-auto py-1 flex items-center justify-between'>

                <motion.div initial={{ opacity:0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <Image src={LogoImage} width={50} alt='Logo' className='cursor-pointer' />
                </motion.div>
                <nav className='hidden lg:flex items-center gap-7'>
                    <ul className='flex items-center gap-7 text-[13px]'>
                        { links.map((link, index) =>
                            <Navigation link={link} index={index} /> )}
                    </ul>
                    <motion.a
                        target='`_blank`'
                        href='./resume.pdf'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoveColor duration-300'
                    >
                        Resume
                    </motion.a>
                </nav>
                {
                    menu ? <CloseSvg className='w-[40px] height=[40px] duration-300' onClick={() => setMenu(false)} /> : (
                        <div onClick={() => setMenu(true)}
                             className='menu w-6 h-5 lg:hidden flex flex-col justify-between items-center text-4xl text-textGreen cursor-pointer overflow-hidden group'>
                            <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
                            <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
                            <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
                        </div>
                    )
                }
            </div>
            { menu && <div ref={menuRef} className='flex bg-bodyColor flex-col items-center fixed right-0 h-screen w-[80%] z-50'>

            </div> }
        </header>
    )
}

export default Header