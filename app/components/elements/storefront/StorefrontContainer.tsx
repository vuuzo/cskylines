import StoreftontCard from "./StorefrontCard"
import SteamIcon from '@/public/storefront/steam.svg'
import MicrosoftIcon from '@/public/storefront/microsoft.svg'
import PlaystationIcon from '@/public/storefront/playstation.svg'
import XboxIcon from '@/public/storefront/xbox.svg'

const storefront_icons = [
    { name: 'steam', Icon: SteamIcon, links: [{ name: '', link: 'https://store.steampowered.com/app/949230/Cities_Skylines_II/' }]},
    { name: 'microsoft', Icon: MicrosoftIcon, links: [{ name: '', link: 'https://www.xbox.com/pl-PL/games/store/cities-skylines-ii-ultimate-edition-pc/9pd2wsj85dz0' }]},
    { name: 'xbox', Icon: XboxIcon, links: [{ name: '', link:'https://www.xbox.com/pl-PL/games/store/cities-skylines-ii-ultimate-edition/9nqbx2l5ll8l' }]},
    { name: 'playstation', Icon: PlaystationIcon, links: [
        { name: 'Europe', link: 'https://store.playstation.com/pl-pl/product/EP4139-PPSA16733_00-CS2ULTIMATEEDI00/' },
        { name: 'America', link: 'https://store.playstation.com/pl-pl/error' },
    ]},
]

const StorefrontContainer = () => {
    return (
        <div className='bg-skylines backdrop-blur-[3px] saturate-150 bg-opacity-70 py-4 flex justify-center flex-wrap'>
        {storefront_icons.map(({ name, links, Icon }) => (
            <StoreftontCard
                key={name}
                name={name}
                links={links}
                Icon={Icon}
            />
        ))}
        </div>
    )
}

export default StorefrontContainer