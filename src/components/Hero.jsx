import Chemikum from '../assets/chemicum.webp';
function Hero () {
    return (
        <div className="hero" height="500">
          <div className="hero-text__container">
          <h2>Welcome to</h2>
          <h1>Light, Oled and Photo Group</h1>
          </div>
          <img width="590" height="480" src={Chemikum} alt="Chemistry departent Building" />
        </div>
    )
}

export default Hero;