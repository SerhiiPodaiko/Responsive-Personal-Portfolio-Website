'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import LogoImage from '@public/images/logo.jpeg'

const links = [
    { title: 'Home', path: '#home' },
    { title: 'About', path: '#about' },
    { title: 'Experience', path: '#experience' },
    { title: 'Project', path: '#project' },
    { title: 'Contact', path: '#contact' },
]

const Header = () => {
    return (
        <header className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor'>
            <div className='max-w-container h-full mx-auto py-1 flex items-center justify-between'>
                <motion.div initial={{ opacity:0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <Image src={LogoImage} width={50} alt='Logo' className='cursor-pointer' />
                </motion.div>
                <nav className='hidden md:flex items-center gap-7'>
                    <ul className='flex items-center gap-7 text-[13px]'>
                        {
                            links.map((link, index) => (
                                <motion.li
                                    key={link.title}
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: index * 0.4, delay: 0.1 }}
                                >
                                    <Link href={link.path} className='text-textDark cursor-pointer duration-300 hover:text-textGreen'>
                                        {link.title}
                                    </Link>
                                </motion.li>
                            ))
                        }
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
                <div className='w-6 h-5 md:hidden flex flex-col justify-between items-center text-4xl text-textGreen cursor-pointer overflow-hidden group'>
                    <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
                    <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
                    <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
                </div>
            </div>
        </header>
    )
}

export default Header