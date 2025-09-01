import {useState, useEffect } from "react";
import {Background, Container} from './styles.js'
import Slider from '../../components/Slider';
import DefaultLayout from '../../layout/DefaultLayout.jsx'
import {
    getTopSeries,
    getPopularSeries,
    getAiringTodaySeries,
    getOnTheAirSeries,
    
} from '../../services/getData';
function Series() {
    const [topSeries, setTopSeries] = useState([]);
    const [popularSeries, setPopularSeries] = useState([]);
    const [airingTodaySeries, setAiringTodaySeries] = useState([]);
    const [onTheAirSeries, setOnTheAirSeries] = useState([]);

    useEffect(() => {
        async function fetchAllDataSeries() {
            Promise.all([
                getTopSeries(),
                getPopularSeries(),
                getAiringTodaySeries(),
                getOnTheAirSeries(),

            ]).then(([topSeries, popularSeries, airingTodaySeries, onTheAirSeries,]) => {
                setTopSeries(topSeries);
                setPopularSeries(popularSeries);
                setAiringTodaySeries(airingTodaySeries);
                setOnTheAirSeries(onTheAirSeries);

            }).catch((error) => console.log(error));
        }

        fetchAllDataSeries();
    }, []);
    return (
        <>
             <DefaultLayout />
                <Background >
             <Container>
              {topSeries.length >0  && <Slider info={topSeries} title={'Séries Em Alta!'} />}
               {popularSeries.length >0  && <Slider info={popularSeries} title={' Populares!'} />}
              {airingTodaySeries.length >0  && <Slider info={airingTodaySeries} title={'Em Exibição Hoje'} />}
             {onTheAirSeries.length >0  && <Slider info={onTheAirSeries} title={'Na TV'} />}
              </Container>
                </Background>
            
        </>
    );
}
export default Series