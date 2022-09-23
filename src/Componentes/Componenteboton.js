import Styled from 'styled-components'
import Button from '@mui/material/Button'





export const Componenteboton = () => {
    const ButtonRH= Styled.nav`
    Button{
        top: 20px;
        left: 50px;
        color: #333;
        
    }
         
    `
    const ButtonIn= Styled.nav`

    Button{
        left: 950px;
        top: -18px;
    }
    `
    const ButtonIs= Styled.nav`

    Button{
        
        left: 1200px;
        top: -55px;
        
        
    }
    `
    const ButtonIse= Styled.nav`

    Button{
        
        left: 33px;
        top: 480px;
        
        
    }
    `
    const ButtonPp= Styled.nav`

    Button{
        
        left: 650px;
        top: -127px;
        
        
    }
    `
    const ButtonEmp= Styled.nav`

    Button{
        
        left: 786px;
        top: -164px;
        
        
    }
    `
    
    return (
      <>  
         <ButtonRH>
         <Button variant="text">Recusos Humanos</Button>         
         </ButtonRH>
         
         <ButtonIn>
            <Button color="secondary" 
            variant="contained"
            size="medium">
            Inicio</Button> </ButtonIn>          
        
         <ButtonIs>         
         <Button color="primary" 
          variant="outlined" 
          size="medium"> Iniciar Sesion </Button></ButtonIs>

         <ButtonIse>         
         <Button color="primary" 
          variant="outlined" 
          size="medium"> Iniciar Sesion </Button></ButtonIse>

         <ButtonPp>         
         <Button color="secondary" 
          variant="contained" 
          size="medium"> Plan PP </Button></ButtonPp>

         <ButtonEmp>         
         <Button color="secondary" 
          variant="contained" 
          size="medium"> Empleados </Button></ButtonEmp>

        
      </> 
    )
  }


