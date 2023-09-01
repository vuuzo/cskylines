import Image from "next/image"
import Container from "../layout/Container"
import { MediumHeading, SmallHeading } from "../layout/Headings"


const PhysicialEditions = () => {
  const details = {
    image:'/physicial-editions.png',
    subtitle: 'Comming soon',
    title: 'Physicial Editions',
    description: "The limited Premium Edition will also be available for pre-order. Including a Steelbook, a wrapped Base Game and the digital Expansion Pass, packaged with a double-sided drawable city map and specially designed pens for planning out the city of your dreams.\r\nPurchase options coming soon."
  }
  return (
    <Container className="p-[48px_16px] lg:p-[72px_0px] items-center">
      <div
        className="relative aspect-video col-[1/-1] sm:items-center sm:order-2 sm:col-[6/-2] lg:col-[7/-2]"
      >
        <Image fill src={details.image} alt="image" className="absolute object-cover" />
      </div>

      <div className="py-6 col-[1/-1] sm:order-1 sm:col-[2/5] lg:col-[2/6]">
        <SmallHeading>{details.subtitle}</SmallHeading>
        <MediumHeading>Physicial Editions</MediumHeading>
        <p>{details.description}</p>
      </div>
    </Container>
  )
}

export default PhysicialEditions