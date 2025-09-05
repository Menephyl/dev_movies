import styled from 'styled-components'


export const Container = styled.div`
min-height: 4rem;
z-index: 99;
position: fixed;
top:0.5rem;
display: flex;
justify-content: space-between;
padding: 2.5rem 2rem 2rem 2rem;
align-items: center;
height: 4rem;
width: 100%;
background-color: ${props => (props.$changeBackground ? '#000' : 'transparent')};
transition: background-color 1s ease-in-out ;

@media (max-width: 600px) {
    display: flex;
    z-index: 99;
    flex-direction: column;
    top: -70px;
    left: 0;
    position: fixed;
   height: 40px;
   width: 100vw;
    align-items: center;
    background-color: ${props => (props.$changeBackground ? '#000' : 'transparent')};
transition: background-color 1s ease-in-out ;

    }

img{
    width: 25%; 
    height: auto;

 @media (max-width: 600px) { // imagem
   width: 150px;
 padding: 0;
 margin: 0;
    }
}

`

export const Menu = styled.ul`
display: flex;
list-style: none;
gap: 3.25rem;

 @media (max-width: 600px) {
 
width: 100vw;
height: auto;
display: flex;
gap: 4px;
 padding: 0;
 margin-top: -25px;
 align-items: center;
 justify-content: center;

    }

`
export const Li = styled.li`
color: #ffffff;
font-weight: 600;
cursor: pointer;
font-size: 2rem;
padding-bottom: 0.2rem;
position: relative;

 @media (max-width: 600px) {
   position: relative;
 padding: 5px;
 margin-right: 5px;
 font-size:20px;
    }
a{
    color: #ffffff;
    text-decoration: none;


     @media (max-width: 600px) {
    width: 100%;
     padding: 5px;
     margin: 0;
    }
}

&::after{
    content: '';
    height: 0.2rem;
    width: ${(props) => (props.$isActive ? '100%' : '0')};
    background-color: #fff700ff;
    position: absolute;
    bottom: -0.625rem;
    left: 50%;
    transform:translateX(-50%);
    transition: width 0.5s ease-in-out;
     @media (max-width: 600px) {
 width: ${(props) => (props.$isActive ? '90%' : '0')};
 height: 0.2rem;
 position: absolute;
 bottom: -0.1rem;
  left: 50%;
    transform:translateX(-50%);
    transition: width 0.5s ease-in-out;
 
    }
    
}

&:hover::after{
    width: 100%;

@media (max-width:600px) {
    width: 100%;
}
}

`


