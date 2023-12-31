import React, { useContext } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import { usePriceBnbBusd, usePriceCakeBusd, usePriceCowBusd } from 'state/hooks'
import { Menu as UikitMenu } from 'cashcow-uikit'

import config from './config'


const Menu = (props) => {
  const { account, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  const cowPriceUsd = usePriceCowBusd()
  const bnbPriceUsd = usePriceBnbBusd()


  return (
    <UikitMenu
      account={account}
      login={connect}
      logout={reset}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={cakePriceUsd}
      cowPriceUsd={cowPriceUsd}
      bnbPriceUsd={bnbPriceUsd}

      links={config}
      // profile={{
      //   username: "MyNFTS",
      //   image: "https://ibb.co/xh2Fxyc",
      //   profileLink: "/myNFTs",
      //   noProfileLink: "/no-myNFTs",
      // }}
      {...props}
    />
  )
}

export default Menu
