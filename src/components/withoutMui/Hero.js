import './Hero.css';

function Hero() {
    return (
        <div className="hero">
            <h2 className="hero__title">Album layout</h2>
            <h5 className="hero__subtitle">
                Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
            </h5>
            <div className="hero__actions">
                <button>
                    Main call to action
                </button>
                <button>
                    Secondary action
                </button>
            </div>
        </div>
    );
}

export default Hero;
