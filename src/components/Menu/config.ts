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
        label: 'Trade DogeCorn on Dogeshrek',
        href: `https://dogeshrek.com/#/swap/${contracts.cake[2000]}`,
      },
      {
        label: 'Trade DogeShrek on Dogeshrek',
        href: `https://dogeshrek.com/#/swap?outputCurrency=0x2be0096b24343549e34224aa9aa297e99961023d`,
      }, 
      {
        label: 'Trade Kibby on Dogeshrek',
        href: `https://dogeshrek.com/#/swap?outputCurrency=0x72aB1BAbED0502B08225FA1eF777fa673d82Ee3e`,
      },
      {
        label: 'Trade Kibby on Kibble',
        href: `https://swap.kibby.dog/#/swap?outputCurrency=0x72aB1BAbED0502B08225FA1eF777fa673d82Ee3e`,
      },
    ],
  },

  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Doge Bridge',
    icon: 'TicketIcon',
    href: 'https://bridge.dogechain.dog/'
  },

 
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'DexScreener',
        href: 'https://dexscreener.com/dogechain/dogeshrek',
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
