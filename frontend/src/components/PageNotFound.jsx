import { Box , Image } from '@chakra-ui/react'
import React from 'react'
import pagenotfound from '../Assets/oops-404-error.avif'

const PageNotFound = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} >
        <Image  src={pagenotfound} alt="pagenotfound" />
    </Box>
  )
}

export default PageNotFound