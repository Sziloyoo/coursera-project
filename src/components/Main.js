import { useNavigate } from 'react-router-dom';

export default function Main(){

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    return(
        <main>
            <div className="col1">
                <h1 className="title">Little Lemon</h1>
                <h3 className="subtitle">Chicago</h3>
                <p className="text">
                    We are a family owned Mediterran restaurant,
                    focused on traditional recipes served with a modern twist.
                </p>
                <button onClick={() => navigateTo('/booking')} className="reserve-button">Reserve a Table</button>
            </div>
            <img src="./restauranfood.jpg" alt="food" className="food-image"/>
        </main>
    );
}