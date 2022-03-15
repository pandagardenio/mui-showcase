import './AlbumCard.css';

function AlbumCard(props) {
    return (
        <div className="album-card">
            <img className="album-card__image" src={props.picture.url} alt={props.picture.title}/>
            <h5>{props.picture.title}</h5>
            <p>{props.picture.description}</p>
            <div className="album-card__actions">
                <button>View</button>
                <button>Edit</button>
            </div>
        </div>
    )
}

export default AlbumCard;
