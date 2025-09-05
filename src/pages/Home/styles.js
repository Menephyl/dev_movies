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

@media (max-width:600px) {
  background-image: url(${props => props.img});
height: 100vh;
background-position: center;
background-size:cover;
display: flex;
align-items: center;
justify-content: center;

}
&::before{  // efeito meio escuro, muito massa !!!
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    background-color: rgb(0, 0, 0, 0.5);

    @media (max-width:600px) {
       position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    background-color: rgb(0, 0, 0, 0.5);
    }
}

`
export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
@media (max-width:600px) {
   display: flex;
   flex-direction:column-reverse;
   justify-content: space-around;
   align-items: center;
}
`

export const Info = styled.div`
 z-index: 2;
 padding: 1.25rem;
 width: 50%;
 @media (max-width:600px) {
   padding: 5px;
   width: 100%;


 }
 h1{
    font-size: 5rem;
    text-align: center;
    font-weight: 700;
    color: #ffffff;
     @media (max-width:600px) {
   font-size:2rem;
   padding: 5px;
   width: 100%;
 }
 }
 p{
    font-size: 1.2rem;
    font-weight: 500;
    color: #fff;
    margin-top: 1.8rem;
    margin-bottom:1.5rem;
    background-color: black;

 @media (max-width:600px) { 
   justify-content: flex-start;
   align-content:center;
   text-align: justify;
   margin-left:-rem;
    width: 90vw;
  font-size:12px;
  font-weight:400;
  margin-top:1rem;
  margin-bottom:10px;
  padding: 5px;
   animation: ${scale} 0.7s linear;
    font-style:italic;
 }
 }

 `
export const Poster = styled.div`
margin-top:5rem;
 z-index: 98;


 img{
    width: 25rem;
    border-radius:1.5rem;
    z-index: 2;
    animation: ${scale} 0.5s linear;


@media (max-width:600px) {
   width: 16rem;
   padding: 10px;
   border-radius:1.5rem;
    margin-top:8rem;
    z-index: 2;
    animation: ${scale} 0.5s linear;
 }

 }

 @media (max-width:600px) {
   display: flex;
   justify-content: center;
   align-items: center;
  z-index: 98;
   width: 100%;

   

 }
 `

export const ContainerButtons = styled.div`
 display:flex;
gap: 1.2rem;


 @media (max-width:600px){
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 5px;
 }
 
 `