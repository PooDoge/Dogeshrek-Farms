import React from 'react'
import { Card, CardBody, Heading, Text } from 'cashcow-uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
// import { Timeline } from 'react-twitter-widgets'
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'

const StyledTwitterCard = styled(Card)`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const TwitterCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledTwitterCard>
      <CardBody>
        <Heading size="xl" mb="24px" style={{ textAlign: 'left' }}>
          {TranslateString(10003, 'Announcements')}
        </Heading>

        <TwitterFollowButton
    screenName='dogeshrek'
  />
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
