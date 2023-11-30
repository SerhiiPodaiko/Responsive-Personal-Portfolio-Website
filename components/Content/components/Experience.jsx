'use client'
import {useState} from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import cn from 'classnames'
import SectionTitle from '@ui/SectionTitle'
import {experienceData} from '@components/Content/components/data'

const Experience = () => {
    const [companyActive, setCompanyActive] = useState(0)

    return (
        <section
            className='w-full max-w-contentContainer mx-auto pt-40 md:py-24 flex flex-col gap-4 lgl:gap-8'
            id='experience'>
            <SectionTitle title='Where I have Worked'/>
            <div className='flex gap-5 flex-col lg:flex-row'>
                <ul className='flex flex-col self-start lg:w-[15%] w-full'>
                    {
                        experienceData.map((experience, index) => (
                            <li key={experience.companyName}
                                className={cn('relative py-4 pl-4 lg:pl-10 w-full self-start cursor-pointer duration-300 ease-in-out font-bold border-l-[2px] hover:bg-[#112240]',
                                    companyActive === index ? 'text-textGreen border-l-textGreen' : 'border-l-[#112240] text-textDark')}
                                onClick={() => setCompanyActive(index)}
                            >
                                {experience.companyName}
                            </li>
                        ))
                    }
                </ul>
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className='relative w-[85%]'>
                    <header className='flex flex-col gap-3'>
                        <h3>{experienceData[companyActive].position}</h3>
                        <p className='flex items-center gap-5'>
                            <strong>{experienceData[companyActive].companyName}</strong>
                            <span>
                                {experienceData[companyActive].startDate}
                                {experienceData[companyActive].endDate && ' - '}
                                {experienceData[companyActive].endDate}
                            </span>
                        </p>
                    </header>
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className='flex flex-col gap-3 mt-2'>
                        {experienceData[companyActive].projectDescription && <p className='mb-2 lg:mb-10'>{experienceData[companyActive].projectDescription}</p>}
                        <p className='flex flex-col lg:flex-row'>
                            <strong className='max-w-[150px] w-full'>Tech stack:</strong>
                            <span>{experienceData[companyActive].stack.map(s => s + (', ') )}</span>
                        </p>
                        <p className='flex flex-col lg:flex-row'>
                            <strong className='max-w-[150px] w-full'>Responsibilities:</strong>
                            <span>{experienceData[companyActive].responsibilities}:</span>
                        </p>
                        {experienceData[companyActive].description && <p>{experienceData[companyActive].description}</p>}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Experience