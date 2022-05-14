import { Button, Grid } from '@mui/material';
import { useState } from 'react';
import './App.css';



function App() {
  let oneDiv = () => {
    return(
     <div>
        <h1>hello bro this is working first div</h1>
     </div>
    )  
  }
  const [name,setName] = useState(oneDiv)

  
  function services() {
    setName(twoDiv)
  }

  const twoDiv = () => {
    return(
    <div>
    <h1>hello bro this is  also working second div</h1>
   </div>
    ) 
  }
  function home() {
    setName (oneDiv)
  }

 const devStyle = {
   color: "white",
   fontSize: "2em"
 }
  return (
     <Grid spacing={2}>
          <nav>
              <Button variant='contained' color='warning' onClick={home}>Home</Button>{" "}<Button variant='contained' onClick={services} color='warning'>Services</Button>
          </nav>
        <Grid>
            <h1 style={devStyle}>{name}</h1>
        </Grid>
     </Grid>
  )
}

export default App;


