import styled ,{css} from "styled-components";




const  buttonStyles =css`
border: 3px solid #ffffff;
background: transparent;
color: #ffffff;
border-radius: 30px;
padding: 0.625rem 1.2rem;
font-size: 1.25rem;
font-weight:500;

&:hover{
    color: red;
    background: #ffffff;
}

`

export const ButtonR = styled.button`
${buttonStyles}

background: #ff0000;
border: 0.25rem solid transparent;
color: #fff;
box-shadow:0px 0px 0.438rem 0.438rem rgb(255 0 0 / 30%) ;

&:hover{
    box-shadow:0px 0px 0.438rem 0.938rem rgb(255 0 0 / 30%);
    background:#ff0000;
    color:#fffFFF;

    }
`
export const ButtonW = styled.button`
${buttonStyles}
`


