import React, { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../services/auth-header";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import RenderFav from "./RenderFav";
import { useAlert } from 'react-alert'



const Favourites = (notis) => {
    const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";
    const [myFav, setmyFav] = useState();

    let { id } = useParams();
    useEffect(() => {
        axios.get(`${API_URL}favourites/${id}`, { headers: authHeader() })
            .then(response => {
                setmyFav(response.data)
            })

    }, [id]);

    const alert = useAlert()



    return (
        <>
            <div>
                <h1 className="container-fluid text-center" style={{ color: '#2A324B' }}>Dina Favorit Smaker</h1>
            </div>
            <Container id="board" style={{ minHeight: "60vh"}}>
                <Row>
                    {myFav ? myFav.favourites.map((snuses) => (RenderFav(snuses, notis = { alert }))) : <div> LADDDAR IN  SNUS</div>}
                </Row>
            </Container>
        </>
    )





}

export default Favourites;