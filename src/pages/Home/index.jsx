import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Slider from '../../components/Slider'
import Modal from '../../components/Modal'
import {
    getMovies,
    getTopMovies,
    getTopSeries,
    getPopularSeries,
    getUpComing,
 

} from '../../services/getData'
import { getImages } from '../../components/utils/get_images'
import {
    Background,
    Poster,
    Container,
    ContainerButtons,
    Info
} from './styles'

function Home() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [UpComing, setUpComing] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        async function getAllData() {
     Promise.all([
            getMovies(),
            getTopMovies(),
             getTopSeries(),
            getPopularSeries(),
            getUpComing()

        ]).then(([movie, topMovies, topSeries, popularSeries, upComing]) => {
            setMovie(movie)
            setTopMovies(topMovies)
            setTopSeries(topSeries)
            setPopularSeries(popularSeries)
            setUpComing(upComing)
        })
            .catch((error) => console.log(error))

        
        }



        getAllData()

    }, [])


    return (
  <>
       {
        movie && (
        <Background img={getImages(movie.poster_path)}>
         {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
             <Container>
              <Info>
             <h1>{movie.title}</h1>
            <p>{movie.overview}</p>

            <ContainerButtons>

         <Button red={true} onClick={() => navigate(`/detalhe/${movie.id}`)}>
                Ver Filme
         </Button>
         <Button red={false} onClick={() => setShowModal(true)}>
          Ver Trailer
         </Button>

         </ContainerButtons>

         </Info>
          <Poster>
             <img
                 src={getImages(movie.poster_path)}
                 alt="capa-filme"
             />
             </Poster>
             </Container>
                    </Background>

                )}

            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
            {UpComing && <Slider info={UpComing} title={'Logo chegando!'} />}
        </>


    )


}
export default Home