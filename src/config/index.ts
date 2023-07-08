import BigNumber from 'bignumber.js/bignumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const CAKE_PER_BLOCK = new BigNumber(1)
export const BLOCKS_PER_YEAR = new BigNumber(15768000) // Dogechan (2 seconds per block)
// export const BLOCKS_PER_YEAR = new BigNumber(10512000) // BSC (3 seconds per block)
export const BSC_BLOCK_TIME = 3

export const CAKE_POOL_PID = 1 // Was set to 1 (Dogecorn-WDOGE) set to 4 (Dogecorn-USDC)
