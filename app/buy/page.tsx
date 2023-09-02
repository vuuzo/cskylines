import { IconBrandSteam, IconSteam } from "@tabler/icons-react"
import Container from "../components/layout/Container"
import { BigHeading, MediumHeading, SmallHeading } from "../components/layout/Headings"
import HeroWrapper from "../components/layout/HeroWrapper"


const versions = [
  {
    title: 'Cities: Skylines II - Ultimate Edition',
    price: 89.99,
    base: ['Base Game', 'Landmark Buildings + Tampere Map'],
    extra: ['Expansion Pass', 'San Francisco Set (instant unlock)', "Assets Pack + Radio Station (Q4 '23)", "Content Creator Pack + Radio Station (Q1 '24)", "Expansion + Radio Station (Q2 '24)"]
  },
  {
    title: 'Cities: Skylines II',
    price: 49.99,
    base: ['Base Game', 'Landmark Buildings + Tampere Map']
  }
]

const details = {
  platforms: [
    'PlayStation 5',
    'Steam',
    'Xbox Series X|S',
  ],
  compatibility: ['Windows'],
  gameplay: ['Singleplayer'],
  developer: 'Colossal Order',
  languages: ['English', 'Polish', 'French', 'German', 'Spanish', 'Italian', 'Simplified Chinese', 'Japanese', 'Korean', 'Portuguese', 'Traditional Chinese', 'Russian']
}

const requirements = [
  {
    system: 'Windows',
    minimum: 'to be confirmed',
    recommend: 'to be confirmed',
  }
]

const PurchasePage = () => {
  return (
      <HeroWrapper className="min-h-screen relative">
        <div className="absolute [background-image:linear-gradient(to_top,hsla(219,50%,13%,.9)_40%,transparent_85%)] inset-0 -z-[1]"/>
        <Container className="lg:!px-0">
          <BigHeading className="col-[1/-1] mb-4 sm:text-left">Main Game</BigHeading>
          {versions.map(({
            title, price,
            base, extra
          }) => (
            <Card title={title} price={price} base={base} extra={extra} />
          ))}
        </Container>
        <Container className="my-[4rem] md:mt-[8rem] lg:!px-0">
          <div className="col-[1/-1] text-left sm:col-[1/span_5] md:col-[1/span_6] lg:col-[1/span_6] lg:flex-wrap lg:flex">
            <MediumHeading className="mb-[3rem] w-full">Product Details</MediumHeading>

            <div className="lg:w-[50%]">
              <SmallHeading>Platforms</SmallHeading>
              <ul className="text-[14px] sm:text-base">{details.platforms.map(platform => <li>{platform}</li>)}</ul>
            </div>

            <div className="lg:w-[50%]">
              <SmallHeading className="mt-4">OS Compatibility</SmallHeading>
              <ul className="text-[14px] sm:text-base">{details.compatibility.map(compatible => <li>{compatible}</li>)}</ul>
            </div>

            <div className="lg:w-full">
              <SmallHeading className="mt-4">Developer</SmallHeading>
              <span className="text-[14px] sm:text-base">{details.developer}</span>
            </div>

            <div className="lg:w-full">
              <SmallHeading className="mt-4">Languages</SmallHeading>
              <ul className="lg:flex lg:flex-wrap">{details.languages.map(lang => <li className="lg:inline lg:mr-3">{lang}</li>)}</ul>
            </div>
          </div>

          <div className="col-[1/-1] text-left sm:col-[6/-1] md:col-[7/-1] lg:col-[7/-1]">
            <MediumHeading className="mb-[3rem]">System Requirements</MediumHeading>
            {
              requirements.map((item, key) => (
                <div key={key}>
                  <MediumHeading className="text-lg lg:text-[1.5rem] mb-3">{item.system}</MediumHeading>
                  <div className="w-full h-[1px] bg-white bg-opacity-50 mb-6"/>
                  <SmallHeading className="mt-4">Minimum</SmallHeading>
                  <span className="text-[14px] sm:text-base">{item.minimum}</span>
                  <SmallHeading className="mt-4">Recommended</SmallHeading>
                  <span className="text-[14px] sm:text-base">{item.recommend}</span>
                </div>
              ))
            }

          </div>
        </Container>
      </HeroWrapper>
  )
}

export default PurchasePage 


interface CardProps {
  title: string
  price: number
  base: string[]
  extra?: string[]
}

const Card = ({title, price, base, extra}: CardProps) => {
  return (
    <div className={`flex flex-col rounded-md col-[1/-1] bg-[hsl(219,50%,13%)] sm:col-[1/span_5] odd:sm:col-[6/-1] md:col-[1/span_6] odd:md:col-[7/-1] lg:col-[1/span_5] odd:lg:col-[7/-2] xl:col-[1/span_4] xl:odd:col-[5/span_4] border-1 border-white border-opacity-10 overflow-hidden`}>

        <div className="flex flex-col h-full p-5 lg:p-6">
          <MediumHeading>{title}</MediumHeading>
          <ul className="text-left">
            {base.map(item => <li>{item}</li>)}
          </ul>
          {extra && <ul className="text-left rounded-sm border border-[hsl(219,50%,30%)] p-2 mt-3">{extra.map(item => <li>{item}</li>)}</ul>}
          <div className="mt-auto">
            <MediumHeading className="mb-2 mt-6">{price} EUR</MediumHeading>
            <div className="flex items-center justify-center gap-2 mb-6">
            <svg className="h-[17px] fill-zinc-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M237.762 129.613c.029 60.635-49.101 109.812-109.736 109.842-48.34.023-91.008-31.574-105.084-77.82l41.537 17.109c3.513 16.404 19.658 26.854 36.062 23.342a30.375 30.375 0 0 0 21.76-18.218 31.196 31.196 0 0 0 2.379-12.534l38.426-27.447h.915c23.092.05 41.852-18.628 41.902-41.72s-18.628-41.852-41.72-41.902c-23.092-.05-41.852 18.628-41.902 41.72v.732l-26.807 39.066a31.38 31.38 0 0 0-18.298 4.941l-59.011-24.337C20.18 61.75 70.952 14.214 131.587 16.21s108.171 52.768 106.175 113.403zM86.619 187.984l-13.541-5.672c5.539 11.689 19.505 16.676 31.195 11.137a23.424 23.424 0 0 0 11.623-12.234 23.695 23.695 0 0 0 0-18.298A23.233 23.233 0 0 0 103.27 150.2a22.87 22.87 0 0 0-17.383 0l14.09 5.764c8.608 4.252 12.138 14.677 7.886 23.284-3.874 7.841-12.973 11.583-21.244 8.736zm77.401-58.371c-15.156-.303-27.196-12.835-26.893-27.991.303-15.156 12.835-27.196 27.991-26.893 14.94.299 26.895 12.494 26.898 27.436-.25 15.269-12.726 27.5-27.996 27.448zm0-7.045c11.571.047 20.989-9.296 21.035-20.867.047-11.571-9.296-20.989-20.867-21.035-11.571-.047-20.989 9.296-21.035 20.867-.001.211.001.422.007.633.1 11.464 9.396 20.719 20.86 20.768v-.366z"></path></svg>
              <small>Steam key</small>
            </div>
          
          </div>
          <button className="py-3 px-3 flex items-center justify-center gap-3 uppercase bg-white w-full mb-3 bg-opacity-50 border text-sm font-medium tracking-wider border-white rounded-[2px] min-w-[40px] hover:bg-opacity-100 hover:text-skylines transition-colors">
            <span>Add to Cart</span>
          </button>
        </div>

        <button className="text-left bg-[rgba(255,255,255,0.15)] p-5 lg:p-6">
          <small className="uppercase font-semibold tracking-wide">Also available at</small>
        </button>
    </div>
  )
}