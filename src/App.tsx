import './App.css';
import {Editable} from './Editable';
import { Container } from '@mui/material';
import {FileSelectWithEffect} from './FileSelectWithEffect'

function App() {
  return (
    <Container maxWidth="lg">
    
    <FileSelectWithEffect/>
    <Editable></Editable>
    </Container>
  );
}
// <Editable/>
export default App;
