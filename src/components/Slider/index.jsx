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
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                // breakpoints={{
                //     640: { slidesPerView: 2 },
                //     768: { slidesPerView: 3 },
                //     1024: { slidesPerView: 4 },
                // }}
                className="swiper"
                
                


                
            >
                {
                    Array.isArray(info) && info.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Cards item={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Container >
    );
}

export default Slider;