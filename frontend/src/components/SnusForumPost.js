import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import authHeader from "../services/auth-header";
import { useParams } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import addComment from "../services/snus-comments.service";
import moment from 'moment';

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";

const SnusForumPost = () => {

    let { id } = useParams();
    const form = useRef();

    const forum = {
        allcomments: [],
        message: "There are no post yet, create a new one?"
    }

    const { allcomments, message } = forum

    /* Initial värde på request state */
    const req = {
        body: ""
    }

    const [comment, setComment] = useState("");
    const [request, setRequest] = useState(req)
    const [response, setResponse] = useState()
    const { body } = request;

    useEffect(() => {
        axios.get(`${API_URL}posts/${id}`, { headers: authHeader() })
            .then(response => {

                const data = response.data.comments
                setResponse(response.data)
                setComment(data);
            })
    }, []);
   
    const updateComment = async () => {
        await addComment(body, id)
        axios.get(`${API_URL}posts/${id}`, { headers: authHeader() })
            .then(response => {
                const data = response.data.comments
                setComment(data)
            })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        updateComment();
        setRequest(req);
    };

    const RenderData = (array) => {
        const data = array.slice(0).reverse().map((comment) => {
            const { body, username, created_at, id } = comment
            return (
                <Card key={id} style={{ backgroundColor: '#F2F3F8' }}>
                    <Card.Body>
                        {/* <Card.Body className="text-uppercase">{body}</Card.Link> */}
                        <p>{body}</p>
                        <p style={{ fontStyle: 'italic' }}>{username} - {moment(created_at).format("YYYY-MM-DD")}</p>
                    </Card.Body>
                </Card>
            )
        })
        return data;
    }

    return comment ?
        <>
            <div>
                <h1 className="container-fluid text-center text-uppercase mt-5">{response.post.title}</h1>
            </div>
            <Card style={{ backgroundColor: '#D1E0DD' }}>
                <Card.Body >
                    <p>{response.post.body}</p>
                    <p style={{ fontStyle: 'italic' }}>Startad av: {response.post.username} - {moment(response.post.created_at).format("YYYY-MM-DD")}</p>
                </Card.Body>
            </Card>

            <Form className="mt-5" onSubmit={submitHandler} ref={form}>
                <Input
                    type="text"
                    className="form-control"
                    name="body"
                    value={body}
                    onChange={e => {
                        e.preventDefault()
                        setRequest({ ...request, body: e.target.value });
                    }}
                    placeholder="Svara på inlägg"
                />
                <div className="form-group">
                    <Button type="submit" className="mt-3 mb-3" variant="#2A324B" style={{ color: 'white', background: "#2A324B" }}>Lägg till</Button>
                </div>
            </Form>
            <Container>
                {comment ? RenderData(comment) :
                    <div>
                        <h1> {message} </h1>
                    </div>
                }
            </Container>
        </>
        : null
}

export default SnusForumPost;