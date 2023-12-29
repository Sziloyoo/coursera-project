export default function Nav(){
    return(
        <nav>
            <img src="./logo.png" alt="logo" className="logo"/>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/home">About</a></li>
                <li><a href="/home">Menu</a></li>
                <li><a href="/booking">Reservations</a></li>
                <li><a href="/home">Order Online</a></li>
                <li><a href="/home">Login</a></li>
            </ul>
        </nav>
    );
}