import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [

  {
    pid: 6,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'Kibby-Doge LP',
    lpAddresses: {
      2000: "0x2a9B0F8A94d418B07b52b632230215aac9Fb7581",
    },
    tokenSymbol: 'Kibby',
    tokenAddresses: {
      2000: "0x72aB1BAbED0502B08225FA1eF777fa673d82Ee3e",
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 7,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'DC-Doge LP',
    lpAddresses: {
      2000: "0x2bcc9c4067821dD4899C2Dd901c9eDadb2551cE2",
    },
    tokenSymbol: 'DC',
    tokenAddresses: {
      2000: "0x7B4328c127B85369D9f82ca0503B000D09CF9180",
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 8,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'TDH-Doge LP',
    lpAddresses: {
      2000: "0x38ed98250F5fD293233eDD31CE86d9B8B2E56782"
    },
    tokenSymbol: 'TDH',
    tokenAddresses: {
      2000: "0x35EA0c670eD9f54Ac07B648aCF0F2EB173A6012D"
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 21,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'RainGod-Doge LP',
    lpAddresses: {
      2000: "0x54b149d21235169b13c0b2c01d737a5b8d8307b0"
    },
    tokenSymbol: 'RainGod',
    tokenAddresses: {
      2000: "0x1174d0b9cfc32f8c39884b226db43697a9ad541d"
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 20,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'Lit-Doge LP',
    lpAddresses: {
      2000: "0x992f41e50500120fb5247ce8ed85ec566cf4f4c7"
    },
    tokenSymbol: 'Lit',
    tokenAddresses: {
      2000: "0x5cc1d860c0d1a695912e5aedc5cf3ccf5af83eca"
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 19,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'X-Doge LP',
    lpAddresses: {
      2000: "0xb01e97cff926aa37a5cf809a4c108c2640d5d683"
    },
    tokenSymbol: 'X',
    tokenAddresses: {
      2000: "0x3abde71c12b7f34bc33d7d2c5f3236393eac7880"
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 18,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'FuckPepe-Doge LP',
    lpAddresses: {
      2000: "0xd31D96BE6A2414600fdbA03E11F43833a362DD53"
    },
    tokenSymbol: 'FuckPepe',
    tokenAddresses: {
      2000: "0xA6D7137aF64280e3eb8715aB6766740984Dd35E7"
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 9,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'KONRA-Doge LP',
    lpAddresses: {
      2000: "0x4e0631e976FCd1226A8a7C07cf997Cc40160EaBD"
    },
    tokenSymbol: 'KONRA',
    tokenAddresses: {
      2000: "0x4716269c75C09eaA3Df3Cc1709A88C9Da663f272"
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 10,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'DogeAstro-Doge LP',
    lpAddresses: {
      2000: "0x9fA802871F6d2714264598AF5b649b46091299B3"
    },
    tokenSymbol: 'DogeAstro',
    tokenAddresses: {
      2000: "0x6ceeD11D4A1C1D8f561F240B38850B37Ad5fb3ce"
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'Dogecorn-Doge LP',
    lpAddresses: {
      2000: "0x647DD9e94ac9B09eF3E3bE18C92066cEAD90Cd5C",
    },
    tokenSymbol: 'Dogecorn',
    tokenAddresses: {
      2000: "0x8df9B21945ebaa75424730F85eCFf426C35F5EF8",
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 0, // Has zero aloc, we use this just to calculate USD price
    risk: 3,
    isTokenOnly: false,
    hide: true,
    lpSymbol: 'WDOGE-USDC LP',
    lpAddresses: {
      2000: "0x8010D305B0220461eC538da7e12B0b4cbcc2AdFe"
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      2000: "0xB7ddC6414bf4F5515b52D8BdD69973Ae205ff101"
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12, // Has zero aloc, we use this just to calculate Kibby-USD price
    risk: 3,
    isTokenOnly: false,
    hide: true,
    lpSymbol: 'Kibby-USDC LP',
    lpAddresses: {
      2000: "0x78ea450f562135Ac473d843B59661E1f2f1624AB"
    },
    tokenSymbol: 'KIBBY',
    tokenAddresses: {
      2000: "0x72aB1BAbED0502B08225FA1eF777fa673d82Ee3e"
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'DogeShrek-Doge LP',
    lpAddresses: {
      2000: '0xD4f2E4107CC48296D25bc656bf9039fb3F406d79', // DogeShrek-Doge LP
    },
    tokenSymbol: 'dogeshrek',
    tokenAddresses: {
      2000: '0x2BE0096B24343549E34224aa9aa297E99961023D', // DogeShrek
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 17,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'DTools-Doge LP',
    lpAddresses: {
      2000: '0xfD6d0A99849b886f6E036D6dF60F7De2D3431E4A', // DTools-Doge LP
    },
    tokenSymbol: 'dtools',
    tokenAddresses: {
      2000: '0xB9fcAa7590916578087842e017078D7797Fa18D0', // DogeTools
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 3,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'DogeShrek-USDC LP',
    lpAddresses: {
      2000: '0x7fA8c10CFD1D9d8De544C318bd58D4B4492F583C', // DogeShrek-Doge LP
    },
    tokenSymbol: 'Dogeshrek',
    tokenAddresses: {
      2000: '0x2BE0096B24343549E34224aa9aa297E99961023D', // DogeShrek
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },


  {
    pid: 4,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'Dogecorn-USDC LP',
    lpAddresses: {
      2000: '0xEC5E63e2fc25785D81760E6f5C8B0a371CB67d3c', // DogeShrek-Doge LP
    },
    tokenSymbol: 'dogecorn',
    tokenAddresses: {
      2000: '0x8df9B21945ebaa75424730F85eCFf426C35F5EF8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 11,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'Dogecorn-Kibby LP',
    lpAddresses: {
      2000: '0x01eEaA2aBfE11a75b95a40bA4F70b6B333E818E8', // Dogecorn-Kibby LP
    },
    tokenSymbol: 'kibby',
    tokenAddresses: {
      2000: '0x8df9B21945ebaa75424730F85eCFf426C35F5EF8', // Dogecorn
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },

  {
    pid: 15,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'BDC-Doge LP',
    lpAddresses: {
      2000: '0x5dB707875fc0890d867F1B775Fbb7101445CC30C', // Buddy-Doge LP
    },
    tokenSymbol: 'buddy',
    tokenAddresses: {
      2000: '0x1Db10Fc7e7e4b5443f549cF53A53c5A4De4759ca', // BDC
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 16,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'WAT-Doge LP',
    lpAddresses: {
      2000: '0x6B17eCED3F52EbADBB1f15995e9148ac2151C921', // WAT-Doge LP
    },
    tokenSymbol: 'WAT',
    tokenAddresses: {
      2000: '0xdd5e0f05680e7d4aeC462E9A60bc860d009c92c9', // WAT
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 13,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'Grimace-Doge LP',
    lpAddresses: {
      2000: '0x8E7269772ea8A0046BfA3ff93d1aaaD279b921Ae', // Grimace-Doge LP
    },
    tokenSymbol: 'Grimace',
    tokenAddresses: {
      2000: '0x2f90907fD1DC1B7a484b6f31Ddf012328c2baB28', // Grimace
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 14,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'BBYoda-Doge LP',
    lpAddresses: {
      2000: '0x3D1653D39B6EaFBBcE2CE95989fDD1CE747D550C', // Grimace-Doge LP
    },
    tokenSymbol: 'BBYoda',
    tokenAddresses: {
      2000: '0xd8ba3140C1b72432076f28aBf228755645b6A589', // BBYoda
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'Dogeshrek-DC LP',
    lpAddresses: {
      2000: '0x605cD43B56D233BFA365644c41C857a6Eb5d7406', // Dogecorn-DC LP
    },
    tokenSymbol: 'Dogeshrek',
    tokenAddresses: {
      2000: '0x7B4328c127B85369D9f82ca0503B000D09CF9180', // DogeShrek
    },
    quoteTokenSymbol: QuoteToken.DC,
    quoteTokenAdresses: contracts.dc,
  }

]

export default farms