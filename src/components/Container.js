import Item from "./Item";

export default function Conatiner(){
    return(
        <>
            <div className="item-container">
                <Item
                  image={'./pizza.jpg'}
                  name={"Pizza"}
                  price={"$ 12.99"}
                  description={"Best pizza in the world Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aperiam in nulla voluptas placeat est incidunt cumque ea deserunt."}/>

                <Item
                  image={'./salad.jpg'}
                  name={"Salad"}
                  price={"$ 8.99"}
                  description={"Best pizza in the world Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aperiam in nulla voluptas placeat est incidunt cumque ea deserunt."}/>

                <Item
                  image={'./dessert.jpg'}
                  name={"Dessert"}
                  price={"$ 10.99"}
                  description={"Best pizza in the world Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aperiam in nulla voluptas placeat est incidunt cumque ea deserunt."}/>

                  <Item
                  image={'./pancakes.jpg'}
                  name={"pancakes"}
                  price={"$ 8.99"}
                  description={"Best pizza in the world Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aperiam in nulla voluptas placeat est incidunt cumque ea deserunt."}/>
            </div>
        </>
    )
}