import DefaultLayout from "../../layout/DefaultLayout";
import { useState, useEffect } from "react";
import Slider from '../../components/Slider';
import {
    getMovies,
    getTopMovies,
    getNowPlayingMovies,
    getUpcomingMovies,
} from '../../services/getData';

import { Background, Container } from './styles';

function Movies() {
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        async function fetchAllMovies() {
            Promise.all([
                getMovies(),
                getTopMovies(),
                getNowPlayingMovies(),
                getUpcomingMovies(),
            ])
            .then(([popular, top, nowPlaying, upcoming]) => {
                setPopularMovies(popular);
                setTopMovies(top);
                setNowPlayingMovies(nowPlaying);
                setUpcomingMovies(upcoming);
            })
            .catch((error) => console.log(error));
        }

        fetchAllMovies();
    }, []);

    return (
        <>
            <DefaultLayout />
            <Background>
                <Container>
                    {nowPlayingMovies.length > 0 && <Slider info={nowPlayingMovies} title={'Em Cartaz'} />}
                    {upcomingMovies.length > 0 && <Slider info={upcomingMovies} title={'Próximas Estreias'} />}
                    {topMovies.length > 0 && <Slider info={topMovies} title={'Top Avaliados'} />}
                    {popularMovies.length > 0 && <Slider info={popularMovies} title={'Populares'} />}
                </Container>
            </Background>
        </>
    );
}

export default Movies;