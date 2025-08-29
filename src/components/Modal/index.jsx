import { Container, Background, CloseButton } from './styles'
import { useEffect, useState } from 'react'
import { getMovieVideos } from '../../services/getData'
import { AiFillCloseCircle } from "react-icons/ai";
function Modal({ movieId,setShowModal }) {

    const [movie, setMovie] = useState()
    useEffect(() => {
        async function getMovies() {
          
            setMovie(await getMovieVideos(movieId))

        }


        getMovies()
    }, []
    )

    return (
        <Background onClick={()=>setShowModal(false)}>
            {(
                movie &&
                <Container>
                   { <CloseButton><AiFillCloseCircle /></CloseButton> }
                    <iframe
                        src={`https://www.youtube.com/embed/${movie.key}`}
                        title='Youtube Video Player'
                        height='31.25rem'
                        width='100%'

                    >
                    </iframe>
                    </Container>

            )}
        </Background>
    )


}
export default Modal