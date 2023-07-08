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
      2000: '0x8df9B21945ebaa75424730F85eCFf426C35F5EF8', // DogeShrek
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
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
  },




]

export default farms
