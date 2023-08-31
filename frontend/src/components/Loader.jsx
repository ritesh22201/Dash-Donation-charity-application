import { Flex } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'
import React from 'react'

const Loader = () => {
  return (
    <Flex h={'90vh'} justifyContent="center" alignItems="center">

      <Spinner
        mt="50px"
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'

      />
    </Flex>
  )
}

export default Loader