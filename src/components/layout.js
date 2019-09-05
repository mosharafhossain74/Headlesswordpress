import React from "react"
import MainMenu from "./MainMenu"
import styled, {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Chilanka&display=swap');
  body{
    font-family: 'Chilanka', cursive;
    padding:0;
    margin:0;
  }
`
const LayoutWrapper = styled.div`
  max-width:960px;
  margin:0 auto;
`
const Layout = ({ children }) => (
  <div>
    
    <GlobalStyles/>
    <MainMenu />
    <LayoutWrapper>
    {children}
    </LayoutWrapper>
  </div>

);
export default Layout;



