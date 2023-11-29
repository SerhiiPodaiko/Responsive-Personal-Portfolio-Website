'use client'
import { motion } from 'framer-motion'

const Email = () => (
    <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className='hidden xl:inline-flex w-[10%] h-[88vh] relative bottom-0'>
        <div className='w-full h-full flex flex-col items-center justify-end gap-6'>
            <a href='mailto:podajko1997@gmail.com'>
            <span className='inline-block text-sm rotate-90 w-72 tracking-wide text-textGreen'>
                podajko1997@gmail.com
            </span>
            </a>
            <span className='mt-5 w-[2px] h-32 bg-textDark inline-flex'></span>
        </div>
    </motion.section>
)

export default Email