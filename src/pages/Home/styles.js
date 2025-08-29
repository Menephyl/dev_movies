import styled, {keyframes} from 'styled-components'




const scale = keyframes`
from{
   transform: scale(0);
}to{
   transform: scale(1);
}
`
export const Background = styled.div`

background-image: url(${props => props.img});

height: 100vh;
background-position: center;
background-size:cover;
display: flex;
align-items: center;
justify-content: center;


&::before{  // efeito meio escuro, muito massa !!!
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.5);
}
 
 
`
export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;

`
export const Info = styled.div`
 z-index: 2;
 padding: 1.25rem;
 width: 50%;
 h1{
    font-size: 5rem;
    text-align: center;
    font-weight: 700;
    color: #ffffff;
 }
 p{
    font-size: 1.2rem;
    font-weight: 500;
    color: #ffffff;
    margin-top: 1.8rem;
    margin-bottom:1.5rem;
 }
 `
export const Poster = styled.div`
margin-top:5rem;
 z-index: 98;
 
 img{
    width: 400px;
    border-radius:1.5rem;
    z-index: 2;
    animation: ${scale} 0.5s linear;
 }
 `

export const ContainerButtons = styled.div`
 display:flex;
gap: 1.2rem;

 
 `