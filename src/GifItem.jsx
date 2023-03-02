import "./App.css";

export const GifItem = ({ title, url}) => {
    return (
        <div className="Card">
             <img src={url} alt={title} />
        </div>
    )
}