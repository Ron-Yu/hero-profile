import React from 'react'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'
import { FadeIn } from 'animate-css-styled-components'

const EmptyHeroProfile = () => {
  return (
    <FadeIn delay="0.5s">
      <Flex>
        <Box width={1} px={2}>
          <Title>Please choose your favorite hero</Title>
        </Box>
      </Flex>
    </FadeIn>
  )
}

const Title = styled.h3`
  color: #cfd8dc;
  text-align: center;
`

export default EmptyHeroProfile
