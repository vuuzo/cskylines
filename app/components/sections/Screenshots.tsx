import Image from "next/image"
import Carousel from "../elements/Carousel"
import Container from "../layout/Container"

import IMG1 from '@/public/gameplay/ss1.jpg'
import IMG2 from '@/public/gameplay/ss2.jpg'
import IMG3 from '@/public/gameplay/ss3.jpg'
import IMG4 from '@/public/gameplay/ss4.jpg'
import IMG5 from '@/public/gameplay/ss5.jpg'
import IMG6 from '@/public/gameplay/ss6.jpg'
import IMG7 from '@/public/gameplay/ss7.jpg'
import IMG8 from '@/public/gameplay/ss8.jpg'

import { MediumHeading } from "../layout/Headings"

const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8]

const Screenshots = () => {
  return (
    <Container className='my-16'>
      <MediumHeading className="text-center mb-0 col-[1/-1]">Gameplay Screenshots</MediumHeading>
      <Carousel>
        {images.map((image, id) => (
            <Image alt={`IMG_${id}`} src={image}/>
        ))}
      </Carousel>
    </Container>
  )
}

export default Screenshots