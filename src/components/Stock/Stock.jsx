import React from "react"
import ab from './Stock.module.scss'
import { Carousel } from 'react-bootstrap'
import a from '../../image/stok/AV.jpg'
import b from '../../image/stok/mps.jpg'
import c from '../../image/stok/spi.jpg'
const Stock = () => {
    return (
        <section className={ab.component}>
            <h1>Акция</h1>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={b}
                        alt="r"
                    />
                    <Carousel.Caption>
                        <h3>АКЦИЯ</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={a}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>АКЦИЯ</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={c}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>АКЦИЯ</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}
export default Stock