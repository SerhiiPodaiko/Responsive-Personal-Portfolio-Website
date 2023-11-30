import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'

const Content = () => (
    <section className='h-[88vh] w-full flex flex-col items-center px-0 xl:px-40' id='home'>
        <Hero />
        <About />
        <Experience />
        <Contact />
    </section>
)

export default Content