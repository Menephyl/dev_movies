import styled from "styled-components";


export const Background = styled.div`

height: 100vh;
width: 100vw;
z-index: 999;
background-color: rgba(0,0,0, 0.7);
position: absolute;
display: flex;
align-items: center;
justify-content: center;


`
export const Container = styled.div`
display: flex;
background: #000;
width: 50%;
height: 60%;
justify-content:center;
align-items:center;
position: fixed;
padding: 3.125rem;
max-width: 1200px;
border-radius:1rem;


iframe{
border: none;
 width: 100%;
height: 100%; 
display: flex;
}
`


export const CloseButton = styled.button`
 display: flex;
 position: fixed;
 top: 22%;
 right: 28%;
  background: #000000ff;
  border: red;
  font-size: 3.5rem;
  cursor: pointer;
  color: #fff; /* Default color */
  width: 2rem;
  height: 2.5rem;
  border-radius:20%;
  text-align: center;
  font-weight:500;


  AiFillCloseCircle{
    width: 100%;
    height: 100%;
  }
 
  &:hover {
    color: #ff0000ff; 
 
  height: 1.5rem;/* Darker on hover */  
  } 
`


