import { MediumHeading } from "../layout/Headings"

const Intro = () => {
    return (
        <div className='bg-skylines text-center px-4 sm:px-8'>
            <div className='
            grid grid-cols-skylines-4 gap-4 py-[48px]
            sm:py-[72px] sm:grid-cols-skylines-10 sm:px-skylines 
            lg:grid-cols-skylines-12'>
                <div className='col-[1/-1] sm:col-[2/-2] lg:col-[3/-3]'>
                    <div>
                        <MediumHeading>If You Can Dream It, You Can Build It</MediumHeading>
                    </div>
                    <div className='mt-6'>
                        <p>Raise a city from the ground up and transform it into a thriving metropolis with the most realistic city builder ever. Push your creativity and problem-solving to build on a scale you've never experienced. With deep simulation and a living economy, this is world-building without limits.</p>
                    </div>
                    <div className='my-6'>
                        <p className='font-semibold'>You Make It Happen. You Make It Yours. You Make Cities.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro 