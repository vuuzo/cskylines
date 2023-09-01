import Link from "next/link"
import Container from "../layout/Container"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import { IconArrowNarrowRight } from "@tabler/icons-react"
import { Card, CardContent, CardImage, SecondaryText, Title } from "../layout/CardElements"

const CommunityLinks = () => {

  const links = [
    {
      image: '/socials/discord.jpg',
      subtitle: 'Join the cities: skylines discord server',
      title: 'Discord',
      link: 'https://discord.com/invite/citiesskylines'
    },
    {
      image: '/socials/instagram.jpg',
      subtitle: 'Follow cities: skylines on instagram',
      title: 'Instagram',
      link: 'https://www.instagram.com/citiesskylines/'
    },
    {
      image: '/socials/forum.jpg',
      subtitle: 'Share your suggestions with the team and discuss with your fellow city builders.',
      title: 'Forums',
      link: 'https://discord.com/invite/citiesskylines'
    },
  ]

  return (
      <div className='grid gap-4 my-[4.5rem] sm:px-8 px-4 md:gap-8 md:grid-cols-3 lg:px-skylines'>
        
        <div className="text-center col-[1/-1]">
          <div className="uppercase mb-4 text-base font-semibold">Join us</div>
          <h2 className='text-[2rem] font-city leading-[1.1875] text-center mb-4 sm:col-[2/3] md:col-[1/-1] lg:text-[32px]'>A Community Of City Builders</h2>
        </div>
        {links.map(({ link, image, subtitle, title }) => (
          <Card link={link}>
            <CardImage src={image} className="aspect-[5/3.5]"/>
            <CardContent>
              <SecondaryText>{subtitle}</SecondaryText>
              <Title className="lg:text-[1.5rem]">{title}</Title>
            </CardContent>
          </Card>
        ))}
      </div>
  )
}

export default CommunityLinks
