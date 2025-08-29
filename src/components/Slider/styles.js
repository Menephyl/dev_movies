import styled from "styled-components";

export const Container = styled.div`
    background: #000;
    padding: 0 1.20rem;
    margin-bottom: 2rem; // Adicione uma margem inferior para espaçamento entre sliders
    h2 {
        color: #ffffff;
        font-size: 1.8rem;
        margin: 3.125rem 0 1.25rem 1.25rem;
    }
    .swiper-wrapper {
        display: flex;
    }
    .swiper {
        width: 100%; // Certifique-se de que o swiper ocupa toda a largura
    }
`;