import styled, { keyframes } from "styled-components"

const scale = keyframes`
from{
   transform: scale(0);
}to{
   transform: scale(1);
}
`
export const Background = styled.div`
background-image:url(${(props) => props.image});
height: 50vh;
background-position:center;
background-size:cover;
background-repeat: no-repeat ;
position: relative;

&::before{
content:'';
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.5);

}
&::after{
   content:'';
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 4rem;
background-color: rgba(0, 0, 0, 0.25);     
background-image:linear-gradient(to top,#000, rgba(0,0,0,0))
}
`

export const Container = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
height: 100%;
max-width: 93.75rem;
margin-top:-8.25rem;
`

export const Cover = styled.div`
padding: 1.25rem;
display: flex;
align-items: center;
height: 100%;
z-index: 99;
img{
   width: 25.25rem;
   border-radius:2rem;
   box-shadow:rgb(100 100 111/ 20%) 0 7px 29px 0;
   animation: ${scale} 0.5s linear;
}
`

export const Info = styled.div`
padding: 1.2rem;
width: 50%;
z-index: 99;
display: flex;
align-items: flex-start;
flex-direction: column;

h2{
   font-size: 3.2rem;
font-weight: 700;
color:#fff;


}
p{
   font-weight:700;
   color: #fff;
   margin-top: 1.2rem;
   margin-bottom:1.8rem;
}
`

export const ContainerMovies = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 1.3rem;
width: 100%;




div{
   display: flex;
   flex-direction:column;
   min-width: 30rem;
   max-width: 62.5rem;
   width: 100%;
   height: 100%;
   margin: 3rem 0 ;
}

h4{
   color: #ffff;
   font-size:1.2rem;
   font-weight:700;
padding: 1rem;
}

iframe{
border: none;
  min-width: 30rem;
  min-height:30rem;
}
`