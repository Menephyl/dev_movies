import  { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../../layout/DefaultLayout.jsx';
import {
  getAiringAnimes,
  getPopularAnimes,
  getTopRatedAnimes,
} from '../../services/api_anime.js';
import styles from './styles.js';

const DESIRED_COUNT = 15;

// 1. Mapeamento de títulos em Português
const titleTranslations = {
  // Em Cartaz
  'my-hero-academia-final-season': 'My Hero Academia: Temporada Final',
  'one-punch-man-3':          'One-Punch Man: 3ª Temporada',
  'spy-x-family-3':           'Spy x Family: 3ª Temporada',
  'chainsaw-man':             'Chainsaw Man',
  'blue-lock':                'Blue Lock',

  // Populares (se quiser traduzir mais, adicione aqui)
  'attack-on-titan':          'Ataque dos Titãs',
  // (os demais ficarão em inglês ou como você preferir)
};

// 2. Fallback “Em Cartaz” usando o mapeamento de títulos
const fallbackAiring = [
  {
    id:    'my-hero-academia-final-season',
    title: titleTranslations['my-hero-academia-final-season'],
    image: 'https://cdn.myanimelist.net/images/anime/10/90607.jpg',
  },
  {
    id:    'one-punch-man-3',
    title: titleTranslations['one-punch-man-3'],
    image: 'https://cdn.myanimelist.net/images/anime/1334/129278.jpg',
  },
  {
    id:    'spy-x-family-3',
    title: titleTranslations['spy-x-family-3'],
    image: 'https://cdn.myanimelist.net/images/anime/1646/138651.jpg',
  },
  {
    id:    'chainsaw-man',
    title: titleTranslations['chainsaw-man'],
    image: 'https://cdn.myanimelist.net/images/anime/1742/137463.jpg',
  },
  {
    id:    'blue-lock',
    title: titleTranslations['blue-lock'],
    image: 'https://cdn.myanimelist.net/images/anime/1700/136892.jpg',
  },
];

// 3. Fallback “Populares!” (mantém títulos originais se não estiverem no mapa)
const fallbackPopular = [
  {
    id:    'attack-on-titan',
    title: titleTranslations['attack-on-titan'] || 'Attack on Titan',
    image: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
  },
  { id: 'death-note',                      title: 'Death Note',                          image: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg' },
  { id: 'fullmetal-alchemist-brotherhood', title: 'Fullmetal Alchemist: Brotherhood',     image: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg' },
  { id: 'one-punch-man',                   title: 'One Punch Man',                       image: 'https://cdn.myanimelist.net/images/anime/12/76049.jpg' },
  { id: 'demon-slayer',                    title: 'Demon Slayer: Kimetsu no Yaiba',      image: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg' },
  { id: 'sword-art-online',                title: 'Sword Art Online',                    image: 'https://cdn.myanimelist.net/images/anime/11/39717.jpg' },
  { id: 'my-hero-academia',                title: 'My Hero Academia',                    image: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg' },
  { id: 'hunter-x-hunter-2011',            title: 'Hunter x Hunter (2011)',              image: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg' },
  { id: 'naruto',                          title: 'Naruto',                              image: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg' },
  { id: 'naruto-shippuden',                title: 'Naruto: Shippuden',                    image: 'https://cdn.myanimelist.net/images/anime/6/67441.jpg' },
  { id: 'dragon-ball-z',                   title: 'Dragon Ball Z',                       image: 'https://cdn.myanimelist.net/images/anime/7/79597.jpg' },
  { id: 'tokyo-ghoul',                     title: 'Tokyo Ghoul',                         image: 'https://cdn.myanimelist.net/images/anime/4/42707.jpg' },
  { id: 'steinsgate',                      title: 'Steins;Gate',                         image: 'https://cdn.myanimelist.net/images/anime/5/73199.jpg' },
  { id: 'code-geass',                      title: 'Code Geass: Lelouch of the Rebellion',image: 'https://cdn.myanimelist.net/images/anime/9/72271.jpg' },
  { id: 'cowboy-bebop',                    title: 'Cowboy Bebop',                        image: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg' },
];

// 4. Fallback “Melhores Animes!”
const fallbackTop = [
  { id: 'fullmetal-alchemist-brotherhood', title: 'Fullmetal Alchemist: Brotherhood',   image: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg' },
  { id: 'steinsgate',                      title: 'Steins;Gate',                         image: 'https://cdn.myanimelist.net/images/anime/5/73199.jpg' },
  { id: 'cowboy-bebop',                    title: 'Cowboy Bebop',                        image: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg' },
  { id: 'clannad-after-story',             title: 'Clannad: After Story',                image: 'https://cdn.myanimelist.net/images/anime/5/28464.jpg' },
  { id: 'mushishi',                        title: 'Mushishi',                            image: 'https://cdn.myanimelist.net/images/anime/6/52943.jpg' },
  { id: 'code-geass',                      title: 'Code Geass: Lelouch of the Rebellion',image: 'https://cdn.myanimelist.net/images/anime/9/72271.jpg' },
  { id: 'hunter-x-hunter-2011',            title: 'Hunter x Hunter (2011)',              image: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg' },
  { id: 'death-note',                      title: 'Death Note',                          image: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg' },
  { id: 'attack-on-titan',                 title: 'Ataque dos Titãs',                    image: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg' },
  { id: 'violet-evergarden',               title: 'Violet Evergarden',                   image: 'https://cdn.myanimelist.net/images/anime/1795/94745.jpg' },
  { id: 'your-name',                       title: 'Your Name',                           image: 'https://cdn.myanimelist.net/images/anime/5/87048.jpg' },
  { id: 'haikyuu',                         title: 'Haikyuu!!',                           image: 'https://cdn.myanimelist.net/images/anime/4/22734.jpg' },
  { id: 'ping-pong-the-animation',         title: 'Ping Pong the Animation',             image: 'https://cdn.myanimelist.net/images/anime/9/57921.jpg' },
  { id: 'gurren-lagann',                   title: 'Tengen Toppa Gurren Lagann',          image: 'https://cdn.myanimelist.net/images/anime/7/41433.jpg' },
  {
    id:    'jojos-bizarre-adventure-stardust-crusaders',
    title: "JoJo's Bizarre Adventure: Stardust Crusaders",
    image: 'https://cdn.myanimelist.net/images/anime/8/62717.jpg'
  },
];

function adapt(list) {
  return list
    .map(a => {
      const id   = a.id;
      const orig = a.title.english || a.title.romaji || '–';
      // 5. Usa tradução se existir, senão conserva o original
      const title = titleTranslations[id] || orig;
      return { id, title, image: a.coverImage.large };
    })
    .filter(item => item.title && item.image);
}

function fillWithFallback(validItems, fallback) {
  const combined = validItems.concat(fallback);
  return combined.slice(0, DESIRED_COUNT);
}

export default function Animes() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading]   = useState(true);
  const navigate                = useNavigate();
  const scrollRefs              = useRef([]);
  const intervals               = useRef([]);

  useEffect(() => {
    async function load() {
      const [airing, popular, top] = await Promise.all([
        getAiringAnimes(),
        getPopularAnimes(),
        getTopRatedAnimes(),
      ]);

      setSections([
        {
          title: 'Em Cartaz',
          items:  fillWithFallback(adapt(airing), fallbackAiring),
        },
        {
          title: 'Populares!',
          items:  fillWithFallback(adapt(popular), fallbackPopular),
        },
        {
          title: 'Melhores Animes!',
          items:  fillWithFallback(adapt(top), fallbackTop),
        },
      ]);
      setLoading(false);
    }
    load();
  }, []);

  useEffect(() => {
    if (loading) return;

    intervals.current.forEach(clearInterval);
    intervals.current = [];

    scrollRefs.current.forEach(el => {
      if (!el) return;
      const max  = el.scrollWidth - el.clientWidth;
      const timer = setInterval(() => {
        el.scrollLeft = el.scrollLeft >= max ? 0 : el.scrollLeft + 1;
      }, 30);
      intervals.current.push(timer);
    });

    return () => intervals.current.forEach(clearInterval);
  }, [loading, sections]);

  if (loading) {
    return (
      <>
        <DefaultLayout />
        <div style={styles.container}>
          <p style={styles.loading}>Carregando animes…</p>
        </div>
      </>
    );
  }

  return (
    <>
      <DefaultLayout />
      <div style={styles.container}>
        {sections.map(({ title, items }, idx) => (
          <section key={title} style={styles.section}>
            <h2 style={styles.title}>{title}</h2>
            <div
              style={styles.scroll}
              ref={el => (scrollRefs.current[idx] = el)}
            >
              {items.map(anime => (
                <div
                  key={anime.id}
                  style={styles.card}
                  onClick={() => navigate(`/details/anime/${anime.id}`)}
                >
                  <img
                    src={anime.image}
                    alt={anime.title}
                    style={styles.thumb}
                  />
                  <p style={styles.cardTitle}>{anime.title}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
