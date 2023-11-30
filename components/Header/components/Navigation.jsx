import Link from 'next/link'
import { motion } from 'framer-motion'

const Navigation = ({ link, index }) => {
    const handleScroll = (e) => {
        e.preventDefault()
        const href = e.currentTarget.href
        const targetId = href.replace(/.*\#/, '')
        const element = document.getElementById(targetId)

        element?.scrollIntoView({
            behavior: 'smooth'
        })

        const links = document.querySelectorAll('.nav-link')

        links.forEach((link) => {
            link.classList.remove('active')
        })

        e.currentTarget.classList.add('active')
    }

    return (
        <motion.li
            key={link.title}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: index * 0.4, delay: 0.1 }}
            className='list-none'
        >
            <Link
                href={link.path}
                className='nav-link text-textDark cursor-pointer duration-300 hover:text-textGreen'
                onClick={handleScroll}
            >
                {link.title}
            </Link>
        </motion.li>
    )
}

export default Navigation