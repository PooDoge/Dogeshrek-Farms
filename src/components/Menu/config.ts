import { MenuEntry } from 'cashcow-uikit'
import contracts from "../../config/constants/contracts";

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: `https://dogeshrek.com/#/swap`,
      },
      {
        label: 'Liquidity',
        href: `https://dogeshrek.com/#/pool`,
      },
    ],
  },

  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
//  {
//    label: 'My NFTs',
//    icon: 'TicketIcon',
//    href: '/nft-market',
//  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/dogeshrek',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/dogeshrek/',
      },
      {
        label: 'GeckoTerminal',
        href: 'https://www.geckoterminal.com/dogechain/pools/0xd4f2e4107cc48296d25bc656bf9039fb3f406d79',
      },
    ],
  },
  {
    label: 'More',
    icon: 'InfoIcon',
    items: [
      {
        label: 'GitHub',
        href: 'https://github.com/PooDoge',
      },
      {
        label: 'Docs',
        href: 'https://docs.dogeshrek.com',
      },
    ],
  },
 
//
  // add later


  /*

  
  {
    label: 'NFT Staking',
    icon: 'TicketIcon',
    items: [
      {
        label: 'HappyCows',
        href: '/stakes/1',
      },
      {
        label: 'Genesis',
        href: '/stakes/2',
      }
    ]
  },


  // add later
 
  {
    label: 'My NFTs',
    // icon: 'NftIcon',
    icon: 'TicketIcon',
    href: '/myNFTs'
  },
  {
    label: 'NFT Market ( Coming Soon )',
    // icon: 'NftIcon',
    icon: 'TicketIcon',
    href: '/nft-market'
  },
*/  
]

export default config
