import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosal'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'

export default function HomePage() {
    return (
        <div className=''>
            <MainCarosel />
            <div className='py-10 flex flex-col justify-center space-y-10 px-5 lg:px10'>
                <HomeSectionCarosel  sectionName={"Mens Kurta"} />
                <HomeSectionCarosel />
                <HomeSectionCarosel />
                <HomeSectionCarosel />
                <HomeSectionCarosel />

            </div>
        </div>
    )
}
