import StoreftontCard from "./StorefrontCard"
import SteamIcon from '@/public/storefront/steam.svg'
import MicrosoftIcon from '@/public/storefront/microsoft.svg'
import PlaystationIcon from '@/public/storefront/playstation.svg'
import XboxIcon from '@/public/storefront/xbox.svg'
import GamePass from '@/public/storefront/gamepass.svg'

const storefront_icons = [
    { name: 'steam', Icon: SteamIcon, links: [{ name: '', link: 'https://store.steampowered.com/app/949230/Cities_Skylines_II/' }]},
    { name: 'microsoft', Icon: MicrosoftIcon, links: [{ name: '', link: 'https://www.xbox.com/pl-PL/games/store/cities-skylines-ii-ultimate-edition-pc/9pd2wsj85dz0' }]},
    { name: 'game-pass', Icon: GamePass, links: [{ name: '', link: 'https://www.xbox.com/pl-PL/games/store/cities-skylines-ii-pc-edition/9pgz346psln0' }] }
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