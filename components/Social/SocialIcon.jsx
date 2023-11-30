import { RxGithubLogo } from 'react-icons/rx'
import { GrLinkedin } from 'react-icons/gr'
import { BsFacebook } from 'react-icons/bs'
import { SiTelegram } from 'react-icons/si'

const SocialIcon = () => (
    <>
        <a href='https://github.com/SerhiiPodaiko?tab=repositories' target='_blank'>
            <span className='w-10 h-10 text-xl bg-hoveColor rounded-full inline-flex items-center justify-center
            hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'>
                <RxGithubLogo size={20} />
            </span>
        </a>
        <a href='https://www.linkedin.com/in/serhii-podaiko-346505160/' target='_blank'>
            <span className='w-10 h-10 text-xl bg-hoveColor rounded-full inline-flex items-center justify-center
            hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'>
                <GrLinkedin size={20} />
            </span>
        </a>
        <a href='https://www.facebook.com/serhii.podaiko/' target='_blank'>
            <span className='w-10 h-10 text-xl bg-hoveColor rounded-full inline-flex items-center justify-center
            hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'>
                <BsFacebook size={20} />
            </span>
        </a>
        <a href='https://web.telegram.org/k/#@Serhii_Podaiko' target='_blank'>
            <span className='w-10 h-10 text-xl bg-hoveColor rounded-full inline-flex items-center justify-center
            hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'>
                <SiTelegram size={20} />
            </span>
        </a>
    </>
)

export default SocialIcon