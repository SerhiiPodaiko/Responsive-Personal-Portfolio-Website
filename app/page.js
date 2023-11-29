import Header from '@components/Header/Header'
import Social from '@components/Social/Social'
import Email from '@components/Email/Email'
import Content from '@components/Content/Content'

export default function Home() {
    return (
        <div className='w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll'>
            <Header/>
            <main className='relative w-full flex'>
                <Social/>
                <Content/>
                <Email/>
            </main>
        </div>
    )
}
