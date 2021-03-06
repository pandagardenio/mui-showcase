import Album from './components/Album';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <Album/>
            </main>
            <Footer/>
        </>
    );
}

export default App;
