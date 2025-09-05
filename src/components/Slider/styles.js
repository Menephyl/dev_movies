import styled from "styled-components";


export const Container = styled.div`
display: flex;
left: -6.25rem;
  flex-direction: column;
  position: relative;       
  width: 100vw;             
  max-width: 80rem;         
  margin: 0 auto;          
  padding: 3rem 1rem;       
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
    background: #000;
    padding: 0 1.20rem;
    margin-bottom: 2rem;

@media (max-width:600) {
    display: flex;
    flex-direction: column;
    left:0;
    margin: 0 auto;
    max-width: 350px;
   
}
    h2 {
        color: #ffffff;
        font-size: 1.8rem;
        margin: 3.125rem 970px 1.25rem 1.25rem;
        width: auto;
    }
    .swiper-wrapper {
        display: flex;
    }
    .swiper {
        width: 100%; 
    }


`