import { Carousel } from "react-bootstrap"

const Carrousel = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block, w-100"
                    style={{height:"500px", objectFit:"cover"}} 
                    src="src/assets/images/proy1.jpeg" alt="" />
                    <Carousel.Caption>
                        <h3>Web Pro 1</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="d-block, w-100"
                    style={{height:"500px", objectFit:"cover"}} 
                    src="src/assets/images/proy2.jpg" alt="" />
                    <Carousel.Caption>
                        <h3>Web Pro 2</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="d-block, w-100"
                    style={{height:"500px", objectFit:"cover"}} 
                    src="src/assets/images/proy3.png" alt="" />
                    <Carousel.Caption>
                        <h3>Web Pro 3</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Carrousel