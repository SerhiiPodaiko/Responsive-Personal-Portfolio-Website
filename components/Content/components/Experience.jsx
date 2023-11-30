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
            className='w-full max-w-contentContainer mx-auto py-10 md:py-24 flex flex-col gap-4 lgl:gap-8'
            id='experience'>
            <SectionTitle title='Where I have Worked'/>
            <div className='flex gap-5'>
                <ul className='flex flex-col self-start w-[15%]'>
                    {
                        experienceData.map((experience, index) => (
                            <li key={experience.companyName}
                                className={cn('relative py-4 pl-10 w-full self-start cursor-pointer duration-300 ease-in-out font-bold border-l-[2px] hover:bg-[#112240]',
                                    companyActive === index ? 'text-textGreen border-l-textGreen' : 'border-l-[#112240] text-textDark')}
                                onClick={() => setCompanyActive(index)}
                            >
                                {experience.companyName}
                            </li>
                        ))
                    }
                </ul>
                <div className='relative w-[85%]'>
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
                    <div className='flex flex-col gap-3 mt-2'>
                        {experienceData[companyActive].projectDescription && <p className='mb-10'>{experienceData[companyActive].projectDescription}</p>}
                        <p className='flex'>
                            <strong className='max-w-[150px] w-full'>Tech stack:</strong>
                            <span>{experienceData[companyActive].stack.map(s => s + (', ') )}</span>
                        </p>
                        <p className='flex'>
                            <strong className='max-w-[150px] w-full'>Responsibilities:</strong>
                            <span>{experienceData[companyActive].responsibilities}:</span>
                        </p>
                        {experienceData[companyActive].description && <p>{experienceData[companyActive].description}</p>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience