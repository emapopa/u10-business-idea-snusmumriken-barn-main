import React, { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../services/auth-header";
import { Form, FormControl, Button, Container, Row, } from "react-bootstrap";
import RenderSnus from "./RenderSnus";
import SnusModal from "./SnusModal";
import { useAlert } from "react-alert";

const Snus = (notis) => {

    const [snus, setSnus] = useState();
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        axios.get('https://snusare-backend.herokuapp.com/api/auth/snuses', { headers: authHeader() })
            .then(response => {
                setSnus(response.data)

            })
    }, []);

    const alert = useAlert()

    const btnStyle = { color: 'white', background: "#2A324B" }

    return (

        <>

            <div>
                <h1 className="container-fluid text-center" style={{ color: '#2A324B' }}>SNUS</h1>
            </div>

            <Form inline className="m-auto">
                <FormControl type="text" placeholder="Search" className="mr-sm-2 p-2 w-75" />
                <Button className="mb-3 mt-3 " variant="#2A324B" style={btnStyle} >Sök snus</Button>
            </Form>
            
            <Button variant="#2A324B" style={btnStyle} onClick={() => setModalShow(true)}>
                Lägg till snus
            </Button>

            <SnusModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <Container>
                <Row>
                    {snus ? snus.snuses.slice(0).reverse().map((snuses) => (RenderSnus(snuses, notis = { alert }))) : <div> LOADING SNUSES</div>}
                </Row>
            </Container>


        </>
    )
}

export default Snus;