'use client'
import { motion } from 'framer-motion'

const Hero = () => (
    <section
        className='w-full max-w-contentContainer py-10 md:py-15 flex flex-col gap-4 lgl:gap-8'>
        <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className='text-lg tracking-wide text-textGreen text-[30px]'
        >
            Hi, my name is
        </motion.h3>
        <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
        >
            Podaiko Serhii. <span>I build things for the web.</span>
        </motion.h1>
        <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className='text-base md:max-w-[650px] text-textDark font-medium italic'
        >
            As a skilled and professional frontend developer with nearly 5 years of experience, including 4 years of
            commercial expertise, and nearly 4 years of specialization in React(Next)/Vue(Nuxt)/React Native, I possess a strong creative
            flair and analytical mindset. I excel at problem-solving in a team environment and pay meticulous attention
            to detail, ensuring the delivery of high-quality and successful projects.
        </motion.p>
    </section>
)

export default Hero