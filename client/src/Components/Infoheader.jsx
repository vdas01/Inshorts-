import React from 'react'
import {Box,Typography,styled} from '@mui/material';

const Container = styled(Box)(({theme})=>({
  background:'#f44336',
  color:'#fff',
  display:'flex',
  alignItems:'center',
  height:40,
  marginBottom:30,
  [theme.breakpoints.down('md')]:{
       display:'none'
  }
})) 
    

const Image = styled('img')({
    height:34,
    '&:last-child':{
        margin:'0 50px 0 20px'
    }
})
const Text = styled(Typography)`
    font-size:14px;
    font-weight:300;
    margin-left:50px;
`

const Infoheader = () => {
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';
  return (
    <Container>
      <Typography>
          For the best experince use inshorts app on your smartphone
      </Typography>
      <Box style={{display:"flex",marginLeft:"auto"}}>
            <Image src={appleStore} alt="" />
             <Image src={googleStore} alt="" />
      </Box>
    </Container>
  )
}

export default Infoheader
