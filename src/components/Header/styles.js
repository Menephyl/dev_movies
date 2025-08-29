import styled from 'styled-components'


export const Container = styled.div`
min-height: 4rem;
z-index: 99;
position: fixed;
top: 0;
display: flex;
justify-content: space-between;
padding: 2.5rem 2rem 2rem 2rem;
align-items: center;
height: 4rem;
width: 100%;
background-color: ${props =>( props.$changeBackground ? '#000' :'transparent')};
transition: background-color 1s ease-in-out;
img{
    width: 25%; 
    height: auto;
}

`

export const Menu = styled.ul`
display: flex;
list-style: none;
gap: 3.25rem;

`
export const Li = styled.li`
color: #ffffff;
font-weight: 600;
cursor: pointer;
font-size: 2rem;
padding-bottom: 0.2rem;
position: relative;
a{
    color: #ffffff;
    text-decoration: none;
}

&::after{
    content: '';
    height: 3px;
    width: ${(props) => (props.$isActive ? '100%' : '0')};
    background-color: #fff700ff;
    position: absolute;
    bottom: -0.625rem;
    left: 50%;
    transform:translateX(-50%);
    transition: width 0.5s ease-in-out;
}

&:hover::after{
    width: 100%;
}
`