import React from 'react'

const HomeSectionCard = () => {
    return (
        <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
            <div className='h-[13rem] w-[10rem]'>
                <img className='obbject-cover object-top w-full h-full' src='https://media.istockphoto.com/id/1152823479/photo/confident-trendy-boy-with-skateboard.webp?b=1&s=170667a&w=0&k=20&c=BN7mrOFp0Z-V130kLwPB2G0qCjvo_0F0zXcbTJONGBI=' alt='' />
            </div>
            <div className='p-4'>
                <h3 className='text-lg font-medium text-gray-900'>Notifier</h3>
                <p className='mt-2 text-sm text-gray-500'>men solid pure cotten straight kurta</p>
            </div>

        </div>
    )
}

export default HomeSectionCard
