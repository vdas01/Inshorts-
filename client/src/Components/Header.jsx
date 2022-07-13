import React from 'react';
import {AppBar,Toolbar ,styled} from '@mui/material';
import {Menu} from '@mui/icons-material';    //install

const Styleheader = styled(AppBar) `
  background:#fff;
  height:70px;
`
const Menuicon = styled(Menu) `
color:#000;
`
const Image = styled('img')({
    height:55,
     margin:"auto",
     paddingRight:70,
})   //to use tags as components use string and object instead of backtick;

const Header = () => {
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
  return (
    //by default AppBar in material Ui has position fixed so use position static
    <Styleheader position='static'>  
      <Toolbar>
        <Menuicon/>
        <Image src={url} alt="" />
      </Toolbar>
    </Styleheader>
  )
}

export default Header
