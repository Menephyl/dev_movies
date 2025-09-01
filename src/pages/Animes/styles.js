const styles = {
  container: {
    background: '#121212',
    minHeight: '100vh',
    padding: '2rem 1.5rem',
    marginTop:'10rem',
  },
  loading: {
    color: '#fff',
    textAlign: 'center',
    marginTop: '4rem',
  },
  section: {
    marginBottom: '2.5rem',
  },
  title: {
    color: '#fff',
    fontSize: '1.75rem',
    marginBottom: '1rem',
  },
  // Tornamos o overflow escondido para ocultar qualquer barra de rolagem
  scroll: {
    display: 'flex',
    gap: '1rem',
    overflow: 'hidden',
    position: 'relative',
  },
  card: {
    flex: '0 0 auto',
    width: '160px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
  thumb: {
    width: '100%',
    height: '240px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  cardTitle: {
    color: '#fff',
    fontSize: '0.9rem',
    textAlign: 'center',
    marginTop: '0.5rem',
  },
};

export default styles;
