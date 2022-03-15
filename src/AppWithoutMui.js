import Album from './components/withoutMui/Album';
import Header from './components/withoutMui/Header';
import Hero from './components/withoutMui/Hero';
import Footer from './components/withoutMui/Footer';

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
