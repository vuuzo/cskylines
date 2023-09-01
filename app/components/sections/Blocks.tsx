import Image, { StaticImageData } from "next/image"

import IMG1 from '@/public/gameplay/ss6.jpg'
import IMG2 from '@/public/gameplay/ss1.jpg'
import IMG3 from '@/public/gameplay/ss3.jpg'
import IMG4 from '@/public/gameplay/ss5.jpg'
import { twMerge } from "tailwind-merge"
import { MediumHeading, SmallHeading } from "../layout/Headings"

const blocksData = [
  {
    id: 1,
    subtitle: "PLAN, REACT, CHANGE",
    title: "Deep Simulation",
    description: "AI and intricate economics mean your choices ripple through the fabric of the city. Remember that as you strategize, problem-solve, and react to change, challenges, and opportunities.",
    image: IMG1
  },
  {
    id: 2,
    subtitle: "HIGHER & WIDER",
    title: "Epic Scale, Endless Possibilities",
    description: "Cities: Skylines II lets you create without compromise. Now you can build sky-high and sprawl across the map like never before. Why not? Your city is you.",
    image: IMG2
  },
  {
    id: 3,
    subtitle: "CITY LIFE",
    title: "Cities That Come Alive",
    description: "Your decisions shape each citizen's life path, a chain of events that defines who they are. From love and loss to wealth and wellbeing, follow their life's ups and downs.",
    image: IMG3
  },
  {
    id: 4,
    subtitle: "WEATHER, CLIMATE & SEASONS",
    title: "A Dynamic World",
    description: "Pick a map to set the climate of your city. These are the natural forces you'll negotiate to expand your city amid rising pollution, changeable weather, and seasonal challenges.",
    image: IMG4
  },
]

const Blocks = () => {
  return (
    <>
      {blocksData.map(({ id, subtitle, title, description, image }) => <Block key={id} subtitle={subtitle} title={title} description={description} image={image} />)}
    </>
  )
}

export default Blocks

interface Props {
  subtitle: string
  title: string
  description: string
  image: StaticImageData | string,
  className?: string
}

export const Block = ({ subtitle, title, description, image, className }: Props) => {
  return (
    <div className={twMerge(`group grid gap-4 grid-cols-[repeat(4,1fr)] px-4 sm:grid-cols-[repeat(10,1fr)] sm:items-center sm:px-8 lg:grid-cols-[repeat(12,1fr)] lg:px-skylines`, className)}>

      <div
        className="relative aspect-video col-[1/-1] mx-[calc(16px*(-1))] sm:col-[1/span_5] sm:ml-[calc(32px*(-1))] sm:mr-[calc(32px*(-.5))] lg:col-[1/span_6] lg:-ml-skylines sm:group-odd:mr-[calc(32px*(-1))] sm:group-odd:ml-0 sm:group-odd:col-[6/-1] sm:group-odd:order-2 lg:group-odd:col-[7/-1] lg:group-odd:-mr-skylines"
      >
        <Image fill src={image} alt="image" className="absolute object-cover" />
      </div>

      <div className="py-6 col-[1/-1] sm:col-[7/-1] lg:col-[8/-1] sm:group-odd:col-[1/span_4] sm:group-odd:order-1 lg:group-odd:col-[1/span_5]">
        <SmallHeading>{subtitle}</SmallHeading>
        <MediumHeading>{title}</MediumHeading>
        <p>{description}</p>
      </div>
    </div>
  )
}