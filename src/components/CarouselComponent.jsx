import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function CarouselComponent({ gameImages, gamesNames, width}) {
    let i = 0
    return (
        <Carousel autoPlay={true} interval={3000} infiniteLoop={true} width={width} stopOnHover={false} >
            {
                gameImages.map((gameImage) => {
                    return (
                        <div className='image-container'>
                            <img src={gameImage} alt="game-img" />
                            <p className="legend"><a style={{ color: 'white', textDecoration: 'none' }} href={`/gameinfopage/${gamesNames[i].replaceAll(" ", "-")}`}>{gamesNames[i++]}</a></p>
                        </div>
                    )
                })
            }
        </Carousel>
    )
}

export default CarouselComponent