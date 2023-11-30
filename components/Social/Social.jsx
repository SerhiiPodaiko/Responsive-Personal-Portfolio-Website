'use client'
import { motion } from 'framer-motion'

import SocialIcon from './SocialIcon'

const Social = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className='hidden xl:flex w-[10%] h-[88vh] fixed left-0 bottom-0'>
            <div className='w-full h-full flex flex-col items-center justify-end gap-5 text-textLight'>
                <SocialIcon />
                <div className='w-[2px] h-32 bg-textDark'></div>
            </div>
        </motion.section>
    )
}

export default Social