import { useState } from "react";
import BackspaceIcon from '@mui/icons-material/Backspace'; 
import { Button, ButtonGroup, Grid,  TextField, Typography,createTheme, ThemeProvider } from "@mui/material";
import './styles.css'; 

const Calculadora = () => {

   const [result, setResult] = useState('');

   const handleClick = (e)=> {
    const operator = e.target.name;
    if(operator === '+' || operator === '-' || operator === '*' || operator === '/'){
        if(result !== ''){
            setResult(result.concat(operator));
        }
    } else {
        setResult(result.concat(operator));
    }
   }; 

   //________________________________________________

   const calculate = ()=> {
    try {
        setResult(eval(result).toString())
    } catch (error) {
        setResult('Error')
    }
   };

   //____________________________________________________

   const clear = () => {
    setResult('')
   };

   const clearOne = () => {
    setResult(result.slice(0, -1));
   };


  return (
    <Grid className='calculadora'>
       <Typography  sx={{ mb:1 }}>Calculadora</Typography>  
            <Grid container  direction="column" spacing={2} alignItems="center">
                <TextField
                type="text"
                value={result === ''? '0': result}
                style={{margin:'20px', marginBottom: '20px', width:'95%', textAlignLast:'end', backgroundColor:'#f5f5f5'}}
/>
                <ButtonGroup variant="outlined" aria-label="outlined button group" fullWidth>
                    <Button onClick={clear} style={{fontSize:'14px', background:'#e0e0e0'}} className='botones'   >CE</Button>
                    <Button style={{fontSize:'14px', background:'#e0e0e0'}} onClick={clear} className='botones' >C</Button>
                    <Button style={{fontSize:'14px', background:'#e0e0e0'}} onClick={clearOne} className="botones" ><BackspaceIcon style={{ fontSize: '14px' }}/></Button>
                    <Button style={{fontSize:'14px', background:'#e0e0e0'}} name="/" onClick={handleClick} className="botones">/</Button>
                </ButtonGroup>
                <ButtonGroup variant="outlined" aria-label="outlined button group" fullWidth>
                    <Button className="numeros" style={{fontSize:'24px', background:'#f5f5f5'}} name="7" onClick={handleClick}>7</Button>
                    <Button style={{fontSize:'24px', background:'#f5f5f5'}} name="8" onClick={handleClick} className="numeros">8</Button>
                    <Button style={{fontSize:'24px', background:'#f5f5f5'}} name="9" onClick={handleClick} className="numeros">9</Button>
                    <Button style={{fontSize:'14px', background:'#e0e0e0'}} name="*" onClick={handleClick} className="boton" >*</Button>
                </ButtonGroup>
                <ButtonGroup variant="outlined" aria-label="outlined button group" fullWidth>
                    <Button style={{fontSize:'24px', background:'#f5f5f5'}} name="4" onClick={handleClick} className="numeros">4</Button>
                    <Button style={{fontSize:'24px', background:'#f5f5f5'}} name="5" onClick={handleClick} className="numeros">5</Button>
                    <Button style={{fontSize:'24px', background:'#f5f5f5'}} name="6" onClick={handleClick} className="numeros">6</Button>
                    <Button style={{fontSize:'14px', background:'#e0e0e0'}} name="-" onClick={handleClick} className="botones" >-</Button>
                </ButtonGroup>
                <ButtonGroup variant="outlined" aria-label="outlined button group" fullWidth>
                    <Button style={{fontSize:'24px', background:'#f5f5f5'}} name="1" onClick={handleClick} className="numeros">1</Button>
                    <Button style={{fontSize:'24px', background:'#f5f5f5'}} name="2" onClick={handleClick} className="numeros">2</Button>
                    <Button style={{fontSize:'24px', background:'#f5f5f5'}} name="3" onClick={handleClick} className="numeros">3</Button>
                    <Button style={{fontSize:'14px', background:'#e0e0e0'}} name="+" onClick={handleClick} className="botones" >+</Button>
                </ButtonGroup>
                <ButtonGroup variant="outlined" aria-label="outlined button group" fullWidth>
                    <Button style={{fontSize:'14px', background:'#e0e0e0'}} name="." onClick={handleClick} className="botones" >.</Button>
                    <Button style={{fontSize:'24px', background:'#f5f5f5'}} name="0" onClick={handleClick} className="numeros">0</Button>
                    <Button style={{fontSize:'14px', background:'#e0e0e0'}} name="." onClick={handleClick} className="botones" >.</Button>
                    <Button style={{fontSize:'14px', background:'#e0e0e0'}} onClick={calculate} className="botones">=</Button>
                </ButtonGroup>
            </Grid>
           
    </Grid>
  )
}

export default Calculadora
