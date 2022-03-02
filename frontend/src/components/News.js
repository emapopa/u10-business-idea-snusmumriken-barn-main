import { CardGroup, Col, Row, Button, Card } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import "../App.css";

const News = () => {
    
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height= "500px"
                        src="https://snusforumet.se/wp-content/uploads/2021/05/shutterstock_1761537095-copy.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-white fw-bold">Ny rapport: Okunskap om nikotin hotar potentialen med nikotinportioner</h3>
                        <p className="text-white fw-bolder">Nikotinportioner har potential att vara ett ”trovärdigt, livskraftigt och säkrare” alternativ till dödliga cigaretter.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height="500px"
                        src="https://snusforumet.se/wp-content/uploads/2020/05/finlandsnus-scaled-1.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-white fw-bold" >Snuskommissionen: ”Finland är snart rökfritt – förklaringen är snuset”</h3>
                        <p className="text-white fw-bolder" >Snuskommissionen slår fast: Bara fem procent av den finska befolkningen röker. Därmed kan Finland snart bli världens första rökfria land.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height="500px"
                        src="https://sph.umich.edu/news/2020posts/images/cigarette-hand.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-white fw-bold" >Cancer och cigaretter – 99 procent av svenskarna har fel information</h3>
                        <p className="text-white fw-bolder" >– Det här är ännu ett exempel på varför svenska myndigheter måste börja tala klarspråk kring hur olika tobaksprodukter påverkar hälsan,
                             säger Svenska Snustillverkarföreningens generalsekreterare Patrik Strömer.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        <CardGroup className="text-center">
            <Row className="justify-content-md-center">
                <Col sm={6} md={5} lg={3}>
                    <Card style={{ backgroundColor: '#F2F3F8', padding: '0.5em', margin: '15px'  }}>
                        <Card.Img variant="top" src="https://swedishmatch.cdn.storm.io/67ed9e14-11f6-4068-8e47-f5b7a39da5e5.jpg?format=png" />
                        <Card.Body className='p-2'>
                            <Card.Title style={{ color: '#2A324B' }}>HUR FARLIGT ÄR DET ATT SNUSA?</Card.Title>
                            <Button href="/snus" variant="#2A324B" style={{ color: 'white', background: "#2A324B" }}>LÄS MER</Button>{' '}
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={5} lg={3}>
                    <Card style={{ backgroundColor: '#F4DA9D', padding: '0.5em', margin: '15px' }}>
                        <Card.Img variant="top" src="https://swedishmatch.cdn.storm.io/11b9b348-b144-4ee9-8a09-e58971889e38.jpg?format=png" />
                        <Card.Body className='p-2'>
                            <Card.Title style={{ color: '#2A324B' }}>NU LANSERAS FACTORY BATCH</Card.Title>
                            <Button href="/snus" variant="#2A324B" style={{ color: 'white', background: "#2A324B" }}>LÄS MER</Button>{' '}
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={5} lg={3}>
                    <Card style={{ backgroundColor: '#D1E0DD', padding: '0.5em', margin: '15px' }}>
                        <Card.Img variant="top" src="https://swedishmatch.cdn.storm.io/f21ff84f-8e55-4d1f-9d80-1272657d2aaa.jpg?format=png" />
                        <Card.Body className='p-2'>
                            <Card.Title style={{ color: '#2A324B' }}>GÖTEBORGS RAPÈ WESTCOAST IPA</Card.Title>
                            <Button href="/snus" variant="#2A324B" style={{ color: 'white', background: "#2A324B" }}>LÄS MER</Button>{' '}
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={5} lg={3}>
                    <Card style={{ backgroundColor: '#E7BAC0', padding: '0.5em', margin: '15px' }}>
                        <Card.Img variant="top" src="https://swedishmatch.cdn.storm.io/f3c751c9-0e4b-46f5-9b37-6277b80ed08c.jpg?format=png" />
                        <Card.Body className='p-2'>
                            <Card.Title style={{ color: '#2A324B' }}>VINNARE I SMAKTEST 2021</Card.Title>
                            <Button href="/snus" variant="#2A324B" style={{ color: 'white', background: "#2A324B" }}>LÄS MER</Button>{' '}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </CardGroup>
        </>
    );
}

export default News;