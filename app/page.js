import Social from '@components/Social/Social'
import Email from '@components/Email'
import Content from '@components/Content/Content'

export default function Home() {
    return (
        <main className='relative w-full flex px-4'>
            <Social />
            <Content />
            <Email />
        </main>
    )
}