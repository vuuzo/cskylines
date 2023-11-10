'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { useEffect, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

import CitiesSkylinesLogo from '@/public/cs-horizontal-logo.png'
import ParadoxLogo from '@/public/logo-platypus-white.svg'
import LogoutIcon from '@/public/logout-icon.svg'

export const links = [
    { content: 'about', link: '/' },
    { content: 'features', link: '/features' },
    { content: 'modding', link: '/modding' },
    { content: 'press', link: '/press' },
    // { content: 'cities in the sky', link: '/cities-in-the-sky' },
    { content: 'console news', link: '/console-news' },
]

const Header = () => {
    const pathname = usePathname()

    const [isActive, setIsActive] = useState(pathname)
    const [visible, setVisible] = useState(false)
    const [hidden, setHidden] = useState(false)

    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', last => {
        const prev = scrollY.getPrevious()
        last > prev && last > 200 && !visible && window.innerWidth <= 1024 ? setHidden(true) : setHidden(false)
    })

    useEffect(() => {
        setIsActive(pathname)
        
        const mobileMenu = () => { visible ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto' }
        mobileMenu()

    }, [pathname, visible])

		const menu = {
			visible: { y: 0 },
			hidden: { y: '-100%' },
		}

		const transition = {
			duration: .2,
			ease: 'easeInOut'
		}

    return (
        <motion.header
            className='z-50 fixed top-0 w-full transition-transform ease-in-out duration-300'
            style={{ translateY: hidden ? '-100%' : '0px' }}
        >
            <nav className=' bg-skylines text-white flex h-[56px] lg:h-[72px] tracking-wider uppercase text-xs font-semibold'>
                <Link 
                    href={'/'}
                    className='block relative my-auto mx-4 w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]'
                >
                    <ParadoxLogo className='absolute w-full h-full object-contain'/>
                </Link>
                <ul className='flex'>
                    <li>
                        <Link href={'/'} className='relative block h-full w-[160px] lg:mx-6'>
                            <Image
                                src={CitiesSkylinesLogo}
                                alt='Cities: Skylines 2 Logo'
                                fill
                                className='object-contain py-[1px]'
                            />
                        </Link>
                    </li>
                    {links.map(link => (
                        <li
                            className='hidden lg:block'
                            key={link.content}
                        >
                            <Link
                                href={link.link}
                                onClick={() => setIsActive(link.link)}
                                className='relative group h-full flex items-center px-6'
                            >
                                <span className='group-hover:opacity-70 transition-opacity'>{link.content}</span>
                                    {
                                        isActive === link.link &&
                                        <motion.div
                                            layoutId='active'
                                            style={{ originY: '0px', translateZ: '0' }}
                                            className='w-1 aspect-square bg-white absolute rounded-full bottom-4 left-[calc(50%-2px)]'
                                        />
                                    }
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className='ml-auto flex items-center'>
                    <Link
                        href={'/buy'}
                        className='hidden py-3 px-3 bg-white bg-opacity-50 border border-white rounded-[2px] min-w-[40px] mr-6 hover:bg-opacity-100 hover:text-skylines transition-colors sm:block'
                    >
                        <span className=''>Pre-order</span>
                    </Link>
                    <Link
                        href={'/cart'}
                        className='group px-2 flex items-center h-full'
                    >
                        <svg
                            className="fill-white group-hover:opacity-70 transition-opacity"
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg">
                                <g fillRule="evenodd">
                                    <path d="m1.447 2.106 2.383 1.19L4.66 6h17.683l-3.6 12H6.261L2.17 4.703.553 3.894l.894-1.788ZM19.656 8H5.277l2.461 8h9.518l2.4-8Z" fillRule="nonzero">
                                    </path>
                                    <circle cx="8.5" cy="20.5" r="1.5">
                                        </circle><circle cx="16.5" cy="20.5" r="1.5">
                                    </circle>
                                </g>
                        </svg>
                    </Link>
                    <Link
                        href={'/'} 
                        className="hidden mx-6 lg:block hover:opacity-70 transition-opacity"
                    >
                        Log in
                    </Link>
                    <button
                        onClick={() => setVisible(!visible)}
                        className='lg:hidden z-30'
                    >
                        {
                            !visible  ? (
                                <svg
                                className="fill-white"
                                width="56"
                                height="56"
                                xmlns="http://www.w3.org/2000/svg">
                                    <g fillRule="evenodd"><path d="M16 22h24v2H16zM16 32h24v2H16z"></path></g>
                                </svg>
                            ) : (
                                <svg
                                width="56"
                                height="56"
                                viewBox="0 0 56 56"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 19L37.38 37.38M37.38 19L19 37.38" stroke="white" strokeWidth="2"/>
                                </svg>
                            )
                        }
                    </button>
                </div>
            </nav>

                {
                visible &&
                    <ul
                        id='mobile-menu'
                        className='fixed w-full h-[calc(100dvh-56px)] lg:hidden uppercase touch-none text-lg font-semibold tracking-wider px-4 border-t border-zinc-800'
                    >
                        <div className='bg-skylines absolute inset-0'/>
                        {links.map(link => (
                            <li
                                key={link.content}
                            >
                                <Link
                                    href={link.link}
                                    onClick={() => (setIsActive(link.link), setVisible(false))}
                                    className={`relative group h-[56px] flex items-center px-2 py-4 border-b border-zinc-800`}
                                >
                                    <span className={`group-hover:opacity-70 ${isActive === link.link ? 'text-skylines_yellow' : ''} transition-opacity`}>{link.content}</span>
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href={'/'}
                                className="relative hover:opacity-70 transition-opacity px-2 py-4 flex gap-3 items-center  border-b border-zinc-800"
                            >
                                <span>Log in</span>
                                <LogoutIcon className='fill-white' />
                            </Link>
                        </li>
                    </ul>
                }
                
        </motion.header>
    )
}

export default Header