'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import ErrorImage from '@public/images/error.png'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error('Error client', error)
    }, [error])

    return (
        <section className='p-5 border border-red-600 bg-red-400 text-white rounded'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2>Opps, Error</h2>
                    {error && <p>{error.message}</p>}
                </div>
                <Image src={ErrorImage} alt='Error | 404' />
            </div>
            <button className='py-2 px-3 font-medium bg-red-600 text-white rounded' onClick={() => reset()}>
                Try again
            </button>
        </section>
    )
}