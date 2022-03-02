import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import authHeader from "../services/auth-header";
import { useParams } from "react-router-dom";
import moment from 'moment';
import addReview from "../services/snus-reviews.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import { Card, ListGroup, ListGroupItem, Button, Container, CardGroup, Row, Col } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";

const SnusReviews = () => {
    let { id } = useParams();
    const form = useRef();

    const forum = {
        allreviews: [],
        message: "There are no reviews yet, create a new one?"
    }

    const { allreviews, message } = forum

    const req = {
        title: "",
        body: "",
        rating: "",
    }

    const [snusData, setSnusData] = useState("");
    const [review, setReview] = useState("");
    const [request, setRequest] = useState(req)
    const { title, body, rating } = request;

    useEffect(() => {
        axios.get(`${API_URL}snuses/${id}`, { headers: authHeader() })
            .then(response => {
                const data = response.data.reviews
                setSnusData(response.data)
                setReview(data);
            })
    }, []);

    const updateReview = async () => {
        await addReview(title, body, rating, id)
        axios.get(`${API_URL}snuses/${id}`, { headers: authHeader() })
            .then(response => {
                const data = response.data.reviews
                setReview(data)
            })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        updateReview()
        setRequest(req);    
    };

    const RenderData = (array) => {
        const data = array.slice(0).reverse().map((review) => {
            const { body, rating, username, created_at } = review
            return (
                <ListGroupItem>
                    <p>{body}</p>
                    <p>Betyg: {rating}</p>
                    <p style={{ fontStyle: 'italic' }}>{username} - {moment(created_at).format("YYYY-MM-DD")}</p>
                </ListGroupItem>
            )
        })
        return data;
    }

    console.log(snusData);

    return snusData ?
        <>
            <div>
                <h1 className="container-fluid text-center">SNUS REVIEWS</h1>
            </div>

            <Form ref={form} onSubmit={submitHandler}>
                <Input
                    type="hidden"
                    className="form-control mb-2"
                    name="title"
                    value={title}
                    onChange={e => {
                        e.preventDefault()
                        setRequest({ ...request, title: e.target.value });
                    }}
                    placeholder="Title"
                />
                <Input
                    type="text"
                    className="form-control mb-2"
                    name="body"
                    value={body}
                    onChange={e => {
                        e.preventDefault()
                        setRequest({ ...request, body: e.target.value });
                    }}
                    placeholder="Skriv en recension"
                />
                <Input
                    type="text"
                    className="form-control"
                    name="rating"
                    value={rating}
                    onChange={e => {
                        e.preventDefault()
                        setRequest({ ...request, rating: e.target.value });
                    }}
                    placeholder="Betyg 1-5"
                />
                <div className="form-group">
                    <Button type="submit" className="mt-3 mb-3" variant="#2A324B" style={{ color: 'white', background: "#2A324B" }}>Lägg till</Button>
                </div>
            </Form>

            <Container>
                <CardGroup>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body style={{ backgroundColor: '#F2F3F8' }}>
                                    <Card.Img variant="top" src={snusData.snus.img_url} />
                                </Card.Body>
                                <Card.Title style={{ marginTop: '10px', textTransform: 'uppercase' }}>{snusData.snus.name} {snusData.snus.id}
                                    <Card.Link href="#"><Icon.StarFill style={{ fill: '#8E92A4', float: 'right' }}></Icon.StarFill></Card.Link>
                                </Card.Title>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Styrka: {snusData.snus.strength}</ListGroupItem>
                                    <ListGroupItem>Typ: {snusData.snus.type}</ListGroupItem>
                                    <ListGroupItem>Smak: {snusData.snus.flavour_name}</ListGroupItem>
                                    {/* <ListGroupItem>Genomsnittligt Betyg: {Math.round(snusData.avgRating)}</ListGroupItem> */}
                                    <Card.Title style={{ marginTop: '30px' }}>Reviews</Card.Title>
                                    {review ? RenderData(review) :
                                        <div>
                                            <h5>{message}</h5>
                                        </div>
                                    }
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </CardGroup>
            </Container>
        </>
        : null
}

export default SnusReviews;