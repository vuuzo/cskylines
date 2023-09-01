import Image from "next/image"
import Form from "../elements/Form"
import Container from "../layout/Container"
import { useState } from "react"
import { MediumHeading, SmallHeading } from "../layout/Headings"

const Newsletter = () => {
  return (
    <Container className="relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image src={'/hero-image2.jpg'} alt='bg' fill className="[object-position:center top] overflow-hidden object-cover absolute w-full h-full z-[-1]"/>
      </div>
      <div className="flex flex-wrap col-[1/-1] py-[3rem] lg:py-[4.5rem] text-center justify-center">
        <SmallHeading className="w-full">Stay up to date</SmallHeading>
        <MediumHeading className="text-center mb-0">Cities: Skylines Newsletter</MediumHeading>
        <div className='grid grid-cols-skylines-4 gap-4 sm:grid-cols-skylines-10 md:grid-cols-skylines-12 lg:gap-8'>
          <Form className="mt-[3rem] col-[1/-1] sm:col-[3/span_6] md:col-[4/span_6]" />
        </div>
      </div>
    </Container>
  )
}

export default Newsletter