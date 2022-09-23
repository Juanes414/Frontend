import React from 'react'
import Styled from 'styled-components'

export const  Primercomponente = () => {

  const H2PlanPP= Styled.nav`
  h1{
      padding: 2rem;
      text-align: left;
         
  }
  
  `
  const SubPp= Styled.nav`
  p{
      padding: 2rem;
      
      
  }
  
  `
  return (
    <>  
      <H2PlanPP>        
      <h1>PLAN DE  <br/> DESARROLLO <br/> PERSONAL Y<br/> PROFESIONAL</h1>
      </H2PlanPP>
     <SubPp>        
      <p>Pagina para gestionar el plan de desarrollo <br/> personal y profesional de cada empleado </p>
     </SubPp>

    </> 
  )
}


