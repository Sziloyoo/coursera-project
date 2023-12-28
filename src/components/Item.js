export default function Item({ image, name, price, description }){
    return(
        <>
            <div className="item">
                <img src={image} alt={name} />
                <div className="name-price-container">
                    <h2 className="item-title">{name}</h2>
                    <p className="price">{price}</p>
                </div>
                <p className="description">{description}</p>
                <button>Order a delivery</button>
            </div>
        </>
    )
}