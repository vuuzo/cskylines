'use client'

import Link from 'next/link'
import { IconChevronDown } from '@tabler/icons-react'
import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion, stagger } from 'framer-motion'
import { links as mainLinks } from './Header'

import PARADOX2_Logo from '@/public/logotype_white.svg'
import PEGI3 from '@/public/PEGI_3.svg'
import youtube from '@/public/icons/Youtube.svg'
import twitter from '@/public/icons/Twitter.svg'
import facebook from '@/public/icons/Facebook.svg'
import vk from '@/public/icons/Vk.svg'
import spotify from '@/public/icons/Spotify.svg'
import twitch from '@/public/icons/Twitch.svg'

const navLinks = [
    { content: 'About', link: '/' },
    { content: 'Features', link: '/' },
    { content: 'Press', link: '/' },
]

const socials = [
    { name: 'youtube', Icon: youtube, link: 'https://www.youtube.com/user/Paradoxplaza' },
    { name: 'twitter', Icon: twitter, link: 'https://twitter.com/PdxInteractive' },
    { name: 'facebook', Icon: facebook, link: 'https://www.facebook.com/ParadoxInteractive' },
    { name: 'vk', Icon: vk, link: 'https://vk.com/pdxint' },
    { name: 'spotify', Icon: spotify, link: 'https://open.spotify.com/artist/75N2nC2KNgaQ1e6bGs0wyc' },
    { name: 'twitch', Icon: twitch, link: 'https://www.twitch.tv/paradoxinteractive/' },
]

const Footer = () => {
    const [visible, setVisible] = useState(false)

    const variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
        exit: { opacity: 0 },
    }

    const links = {
        hidden: { x: 10, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    }

    return (
        <footer className=' bg-skylines_dark text-white font-sourceSans'>
            <div className='container mx-auto grid gap-8 grid-cols-skylines-10 pt-4 pb-16 px-8 lg:grid-cols-skylines-4'>
                
                {/* LOGO & SOCIALS */}
                <div className='flex flex-col col-skylines lg:justify-between lg:flex-row'>
                    <Link href={'/'} className='flex items-center'>
                        <PARADOX2_Logo  className='block w-[150px] h-auto py-2 lg:w-[113px]'/>
                    </Link>
                    <div className='flex -ml-3'>
                        {socials.map(({ name, link, Icon }) => (
                            <Link key={name} href={link} target='_blank' className='block p-3 my-2'>
                                <Icon />
                            </Link>
                        ))}
                    </div>
                </div>

                <LayoutGroup>
                    {/* FOOTER NAVIGATION */}
                    <div className='col-skylines'>
                        <div className='uppercase text-base font-semibold lg:text-[12px] tracking-wider py-[6px]'>
                            <div className='flex items-center justify-between gap-2'>
                                <Link href={'/'}>Cities: Skylines II</Link>
                                <button className='lg:hidden group' onClick={() => setVisible(!visible)}>
                                    <IconChevronDown size={16} className={`${visible ? 'rotate-180' : ''} transition-transform duration-300`} />
                                </button>
                            </div>

                            {/* WHEN ITS LARGE */}
                            <ul className='hidden lg:flex lg:flex-col'>
                                {mainLinks.map(link => (
                                    <li key={link.content}><Link className='block leading-[1.3333] py-[10px] transition-colors text-zinc-400 hover:text-white' href={link.link}>{link.content}</Link></li>
                                ))}
                            </ul>

                            {/* WAHEN ITS SMALL */}
                            <AnimatePresence>
                                {
                                    visible &&
                                    <motion.ul
                                        layout
                                        variants={variants}
                                        initial='hidden'
                                        animate='visible'
                                        exit='exit'
                                        className='flex flex-col lg:hidden'
                                    >
                                        {
                                            navLinks.map(link => (
                                            <motion.li
                                                key={link.content}
                                                variants={links}
                                            >
                                                <Link className='block leading-[1.3333] py-[10px] transition-colors text-zinc-400 hover:text-white' href={link.link}>{link.content}</Link>
                                            </motion.li>
                                            ))
                                        }
                                    </motion.ul>
                                }
                            </AnimatePresence>
                        </div>
                    </div>
                    {/* PEGI3 */}
                    <motion.div layout className='col-skylines grid grid-cols-skylines-pegi'>
                            <PEGI3 className='block w-full border border-white'/>
                    </motion.div>
                    {/* CREDENTIALS / BOTTOM NAVIGATION */}
                    <motion.div layout className='text-sm lg:flex lg:justify-between  col-skylines'>
                        <div>
                            <p>© 2023 Paradox Interactive AB. All trademarks are the property of their respective owners.</p>
                        </div>
                        <div className=''>
                            <Link href={'/'} className='underline font-semibold'>Privacy Policy</Link>
                            <span className='px-2'>|</span>
                            <Link href={'/'} className='underline font-semibold'>User Agreement</Link>
                        </div>
                    </motion.div>
                </LayoutGroup>

            </div>
        </footer>
    )
}

export default Footer