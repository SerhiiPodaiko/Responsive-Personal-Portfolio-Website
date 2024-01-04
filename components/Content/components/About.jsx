'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AiFillThunderbolt } from 'react-icons/ai'
import SectionTitle from '@ui/SectionTitle'

import ProfileImage from '@public/images/profile.jpg'

const texnologies = ['Javascript (ES6+)', 'React / Next', 'React Native', 'Vue / Nuxt', 'Node / Nest',
    'TypeScript', 'Redux (Toolkit) / Mobx', 'Zustand', 'React Query', 'UI / UX', 'Webpack / Vite / Gulp', 'CI / CD',
    'Testing', 'Git / GitHub / GitLab / Bitbucket', 'SOLID / OOP / DRY / KISS', 'Docker']
const About = () => (
    <motion.section
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className='w-full max-w-contentContainer py-10 md:py-24 flex flex-col gap-4 lgl:gap-8'
        id='about'>
        <SectionTitle title='About me' />
        <div className='flex lgl:flex-row flex-col gap-16'>
            <div className='lgl:w-[60%] flex flex-col gap-1 text-textDark font-medium max-w-[700px] text-[14px]'>
                <p>
                    Hello! I'm Serhii, a front-end developer with experience since 2018. Over the years,
                    I've worked in various domains, including outsourcing, product development, and management.
                </p>
                <p>
                    I began my journey in web development in 2018 and have since navigated through roles in outsourcing,
                    where I honed my skills, to contributing to the development of products. In different projects,
                    I've taken on leadership roles, leading teams and serving as a mentor for junior developers.
                </p>
                <p>
                    My expertise spans a broad range of technologies, including React/Next, Vue, React Native, HTML, CSS, and more.
                    I'm always on the lookout for new challenges and opportunities for growth. My leadership skills
                    and willingness to assist fellow developers make me a strong asset in any team.
                </p>
                <p>
                    I believe that my skills and experience make me well-suited to contribute meaningfully to any project.
                    Let's discuss how I can join your team and help achieve our shared goals!
                </p>
                <ul className='mt-5 grid grid-cols-2'>
                    {
                        texnologies.map((technology, index) => (
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.3 }}
                                key={technology}
                                className='mb-2 flex items-center gap-2 text-textGreen'>
                                <AiFillThunderbolt />
                                <span className='text-textLight'>{technology}</span>
                            </motion.li>
                        ))
                    }
                </ul>
            </div>
            <div className='lgl:w-[40%] flex mb-[200px] lgl:mb-0 relative'>
                <div className='w-full self-start relative group'>
                    <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
                        <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
                            <Image
                                src={ProfileImage}
                                className='rounded-lg h-full w-full'
                                alt='Serhii Podaiko'
                            />
                            <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'>
                            </div>
                        </div>
                    </div>
                    <div className='hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300'></div>
                </div>
            </div>
        </div>
    </motion.section>
)

export default About