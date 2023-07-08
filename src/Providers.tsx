import React from 'react'
import { ModalProvider } from 'cashcow-uikit'
// import bsc, { UseWalletProvider } from '@binance-chain/bsc-use-wallet'
import * as bsc from '@binance-chain/bsc-use-wallet'
import { Provider } from 'react-redux'
import { LanguageContextProvider } from 'contexts/Localisation/languageContext'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import { BlockContextProvider } from 'contexts/BlockContext'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import { LoadingContextProvider } from 'contexts/LoadingContext'
import { StakeContextProvider } from 'contexts/StakeContext'
import store from 'state'

const Providers: React.FC = ({ children }) => {
  const rpcUrl = "https://rpc.ankr.com/dogechain	";

  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <LanguageContextProvider>
          <bsc.UseWalletProvider
            chainId={Number(2000)}
            connectors={{
              walletconnect: { rpcUrl },

            }}
          >
            <BlockContextProvider>
              <RefreshContextProvider>
                <LoadingContextProvider>
                  <StakeContextProvider>
                    <ModalProvider>{children}</ModalProvider>
                  </StakeContextProvider>
                </LoadingContextProvider>
              </RefreshContextProvider>
            </BlockContextProvider>
          </bsc.UseWalletProvider>
        </LanguageContextProvider>
      </ThemeContextProvider>
    </Provider>
  )
}

export default Providers
