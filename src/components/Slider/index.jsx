import { Container } from "./styles"
import { Swiper, SwiperSlide } from 'swiper/react'
import Cards from "../Cards"
function Slider({ info = [], title }) {
    return (
        <Container>
            <h2>{title}</h2>
            <Swiper
                grabCursor
                spaceBetween={10}
                slidesPerView={'auto'}
                className="swiper"
                pagination={{ clickable: true }} // Adiciona paginação se necessário
            >
                {
                    Array.isArray(info) && info.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Cards item={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Container>
    );
}

export default Slider;