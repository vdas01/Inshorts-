
import './App.css';
import Header from './Components/Header';
import Infoheader from './Components/Infoheader';
import Articles from './Components/Articles';
import {styled,Box} from '@mui/material';

const Container = styled(Box)(({theme})=>({
  width:'60%',
  margin:'30px auto 0 auto',
  [theme.breakpoints.down('md')]:{
     width:'75%'
  },
  [theme.breakpoints.down('sm')]:{
    width:'85%'
 }
}))

      


function App() {
  return (
    <>
      <Header/>
      <Container>
        <Infoheader/>
        <Articles/>
      </Container>
    </>
  );
}

export default App;
