import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background:  rgb(57, 97, 184);
  position: fixed;
  top: 13vh;
  left: ${props => (props.open ? "0" : "-100%")};
  width: 100%;
  height: 15vh;
  transition: left 0.3s linear;
  border: 2px solid black;

  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: left;
    background: purple;
  }
  a {
   
    padding: 0.5rem 0.8rem;
    color: rgb(238 223 241);
    text-decoration: none;
  }`;