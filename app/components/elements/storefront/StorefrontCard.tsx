import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"

interface Props {
    name?: string
    Icon: any
    links: Link[]
}

interface Link {
    name?: string
    link?: Url
}

const StoreftontCard = ({ links, Icon }:Props) => {
    return (
            <div className='border border-white rounded-[2px] m-1 h-[78px] w-[160px]'>
            {links.length > 1 ? (
                    <div className='relative group flex items-center justify-center h-full hover:bg-white transition-colors duration-300'>
                        <Icon className='fill-white group-hover:fill-skylines_dark duration-300'/>

                        <div
                            className='absolute pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto bottom-full duration-300 w-[calc(100%+2px)] pb-2'
                        >
                            <div className='border uppercase text-xs tracking-wider font-medium bg-white text-black rounded-[2px] shadow-md'>
                                {links.map(({ name, link }) => (
                                    <Link
                                        className='p-4 flex items-center justify-center hover:text-zinc-400 duration-150'
                                        href={link as Url}
                                        target='_blank'
                                    >
                                        {name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
            ):
                <Link href={links.at(0)?.link as Url} target='_blank' className='group flex items-center justify-center h-full hover:bg-white transition-colors duration-300'>
                    <Icon className='fill-white group-hover:fill-skylines_dark duration-300'/>
                </Link>
            }
            </div>
    )
}

export default StoreftontCard