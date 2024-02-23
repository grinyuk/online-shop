import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png';

const DevicePage = () => {
    const device = {
        id: 1,
        name: 'Iphone 12 pro',
        price: 100000,
        rating: 5,
        img: 'https://img.jabko.ua/image/cache/catalog/products/2021/05/041936/IMG_4457-1397x1397.jpg'
    };

    const description = [
        {id:1, title: 'RAM Memory', description: '5 gb'},
        {id:2, title: 'Camera', description: '12 mp'},
        {id:3, title: 'Processor', description: 'Pentium 3'},
        {id:4, title: 'Count of cores', description: '2'},
        {id:5, title: 'Battery', description: '4888'}
    ]

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2 style={{textAlign: 'center'}}>{device.name}</h2>
                        <div
                            style={{
                                background: `url(${bigStar}) no-repeat center center`,
                                width: 240,
                                height: 240,
                                backgroundSize: 'cover',
                                fontSize: 64
                            }}
                            className="d-flex justify-content-center align-items-center"
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>From: {device.price} UAH</h3>
                        <Button variant={'outline-dark'}>Add to basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Item specifics</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? "lightgray" : "transparent", padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;