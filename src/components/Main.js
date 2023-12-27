export default function Main(){
    return(
        <main>
            <div className="col1">
                <h1 className="title">Little Lemon</h1>
                <h3 className="subtitle">Chicago</h3>
                <p className="text">
                    We are a family owned Mediterran restaurant,
                    focused on traditional recipes served with a modern twist.
                </p>
                <button className="reserve-button">Reserve a Table</button>
            </div>
            <img src="./restauranfood.jpg" alt="food" className="food-image"/>
        </main>
    );
}