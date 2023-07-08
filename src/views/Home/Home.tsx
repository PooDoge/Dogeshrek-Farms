import React from 'react'
import styled, { useTheme } from 'styled-components'
import { Heading, Text, BaseLayout } from 'cashcow-uikit'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;  
  padding-top: 116px;
  text-align: center;
  height: 175px;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-position: left center, center bottom, right center;
    height: 300px, 185px, 185px;  
    width:  300px, 185px, 185px;
    margin-right: 3%;
    margin-left: 3%;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }  
`

const Home: React.FC = () => {

  const {isDark}=useTheme(); 

  return (
    <Page
      style={{
        backgroundImage: isDark ? `url(/images/cow/home-backgrounddark.png)` : `url(/images/cow/home-backgroundlight.png)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',        
      }}
    >
      <Hero>
        <Heading as="h1" style={{fontSize: '3.5vw'}}>
        Dogecorn Farms
        </Heading><Text style={{fontSize: '1vw'}}>Community Farms & Pools!</Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
