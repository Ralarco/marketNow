import React, { useContext } from 'react'
import styled from 'styled-components'
import Anuncios from '../components/Anuncios'
import NavbarVPrivada from '../components/NavbarVPrivada'
import Footer from '../components/Footer'
import SideMenu from '../components/sidemenu'
import ContextProductos from '../contextProductos'
import Detalle from '../components/detalle'

const Container = styled.div`
  
  display: flex;
  height: 80vh;
  justify-content: left;
  width:100%;
  position: relative;
`;

const FooterContainer = styled.div`
  position: relative; 
  z-index: 2; 
`;


const Detalleproducto = () => {



  return (
    <div>
      <Anuncios/>
      <NavbarVPrivada/>
      <Container disableGutters maxWidth={false} sx={{display: 'flex', flexDirection: 'row', width: '100%', margin: 0, padding: 0}}>
      <SideMenu/> 
      <Detalle />
      </Container>
      
      <FooterContainer>
      <Footer/> 
      </FooterContainer>
      
    </div>
  )
}

export default Detalleproducto
