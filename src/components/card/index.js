import './index.scss';

const Card = ({ image, name, description, githubLink }) => {
    return (
        <div className="card">
            <img>{image}</img>
            <p>{name}</p>
            <p>{description}</p>
            <p>{githubLink}</p>
        </div>
    )
}

export default Card