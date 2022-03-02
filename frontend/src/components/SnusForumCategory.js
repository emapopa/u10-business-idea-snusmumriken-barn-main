import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import authHeader from "../services/auth-header";
import { useParams } from "react-router-dom";
import { Button, Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import moment from 'moment';
import addPost from "../services/snus-forum.service";
import leaf from "../image/leaf.png";

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/"

const SnusForumCategory = () => {

    let { id } = useParams();
    const form = useRef();

    const forum = {
        allposts: [],
        message: "There are no post yet, create a new one?"
    }

    const { allposts, message } = forum

    const req = {
        title: "",
        body: ""
    }

    const [posts, setPosts] = useState([])
    const [request, setRequest] = useState(req)
    const [response, setReponse] = useState()
    const { title, body } = request;

    useEffect(() => {
        axios.get(`${API_URL}categorys/${id}`, { headers: authHeader() })
            .then(response => {
                const data = response.data.posts
                setReponse(response.data)
                setPosts(data)
            })

    }, [id]);

    const updatePost = async () => {
        await addPost(title, body, id)
        axios.get(`${API_URL}categorys/${id}`, { headers: authHeader() })
            .then(response => {
                const data = response.data.posts
                setPosts(data)
            })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        updatePost()
        setRequest(req);
    };

    const RenderData = (array) => {
        const data = array.slice(0).reverse().map((post) => {
            const { title, body, id, username, created_at } = post
            return (
                <Card key={id} style={{ backgroundColor: '#F2F3F8' }}>
                    <Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem style={{ backgroundColor: '#F2F3F8' }}>
                                <img src={leaf}
                                    width="30"
                                    height="30"
                                    className="d-inline-block mb-2"
                                    alt="logo"
                                />
                                <Card.Link className="text-uppercase ml-3" style={{ color: 'black' }} href={`/snus-post/${id}`} >{title}</Card.Link>
                                <p>{body}</p>
                                <p style={{ fontStyle: 'italic' }}>Startad av: {username} - {moment(created_at).format("YYYY-MM-DD")}</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
            )
        })
        return data;
    }

    return (
        <>
            <div>
                <h1 className="container-fluid text-center text-uppercase mt-5">{response && response.category.category}</h1>
            </div>

            <Form ref={form} onSubmit={submitHandler}>
                <Input
                    type="text"
                    className="form-control mb-2 mt-5"
                    name="title"
                    value={title}
                    onChange={e => {
                        e.preventDefault()
                        setRequest({ ...request, title: e.target.value });
                    }}
                    placeholder="Titel"
                />
                
                <Input  
                    type="text"
                    className="form-control"
                    name="body"
                    value={body}
                    onChange={e => {
                        e.preventDefault()
                        setRequest({ ...request, body: e.target.value });
                    }}
                    placeholder="Starta en tråd"
                />    
              
                <div className="form-group">
                    <Button type="submit" className="mt-3 mb-3" variant="#2A324B" style={{ color: 'white', background: "#2A324B" }}>Lägg till</Button>
                </div>
            </Form>
            <Container>
                {posts ? RenderData(posts) :
                    <div>
                        <h1> {message} </h1>
                    </div>
                }
            </Container>
        </>
    )
}

export default SnusForumCategory;