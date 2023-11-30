'use client'
import SocialIcon from '@components/Social/SocialIcon'

const Contact = () => {
    const onClickContact = () => {
        const emailElement = document.getElementById('email')

        emailElement.classList.add('bounce-animation')

        setTimeout(() => {
            emailElement.classList.remove('bounce-animation')
        },1000)
    }

    return (
        <section className='w-full flex flex-col items-center max-w-contentContainer mx-auto py-10 md:py-24 gap-4 lgl:gap-8' id='contact'>
            <h2 className='text-2xl text-textGreen'>What’s Next?</h2>
            <h2 className='text-2xl text-textLight'>Get In Touch</h2>
            <p className='max-w-[500px] text-[16px] text-center text-textLight'>
                I am looking for new opportunities, my inbox is always open.
                Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>
            <a
                onClick={onClickContact}
                href='mailto:podajko1997@gmail.com'
                className='mt-3 py-2 px-5 self-center tracking-wider border border-textGreen rounded text-textGreen font-medium duration-300 hover:bg-hoveColor'
            >
                Say Hello
            </a>
            <div className='sm:hidden lg:flex xl:hidden flex items-center gap-5 mt-5'>
                <SocialIcon />
            </div>
        </section>
    )
}

export default Contact