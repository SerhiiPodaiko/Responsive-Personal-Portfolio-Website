'use client'
import { useEffect } from 'react'
import Image from 'next/image'

import ErrorImage from '@public/images/error.png'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error('Error client', error)
    }, [error])

    return (
        <section className='m-5 p-5 border border-red-600 bg-dangerBg text-white rounded'>
            <div className='flex items-center justify-between flex-wrap gap-5'>
                <div>
                    <h2>Opps, Error</h2>
                    {error && <p>{error.message}</p>}
                </div>
                <Image src={ErrorImage} className='w-full sm:w-auto' alt='Error | 404' />
            </div>
            <button
                className='mt-5 py-2 px-3 font-medium border-[1px] border-red-700 bg-dangerBg text-white rounded hover:bg-red-600 duration-300'
                onClick={() => reset()}
            >
                Try again
            </button>
        </section>
    )
}