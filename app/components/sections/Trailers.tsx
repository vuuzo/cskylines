import Container from "../layout/Container"
import { MediumHeading } from "../layout/Headings"
import Carousel from "../elements/Carousel"

const Trailers = () => {
    return (
        <Container className='my-16'>
            <MediumHeading className="text-center mb-0 col-[1/-1]">Cities: Skylines II Trailers</MediumHeading>
            <Carousel>
                <div className={`relative w-full aspect-video shrink-0`}>
                    <iframe
                        className='absolute w-full h-full object-cover'
                        src="https://www.youtube.com/embed/WdD66WGBVHM"
                        title="Cities Skylines II | Announcement Trailer I"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className={`relative w-full aspect-video shrink-0`}>
                    <iframe
                        className='absolute w-full h-full object-cover'
                        src="https://www.youtube.com/embed/MX9YWu5wkGg"
                        title="Coming October 24th, 2023 I Pre-Order NoI Cities: Skylines II Official Gameplay Trailer"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-pictureweb-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </Carousel>
        </Container>
    )
}

export default Trailers