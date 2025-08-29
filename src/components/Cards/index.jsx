import { getImages } from "../utils/get_images"
import { Container } from "./styles"

function Cards({item}) {
   
    return (

        <Container>
           <img src={getImages(item.poster_path || item.poster_path || '')} />
           <h3>{item.title}</h3>
        </Container>

    )   
}

export default Cards