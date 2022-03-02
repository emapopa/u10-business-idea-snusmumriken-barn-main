import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import authHeader from '../services/auth-header';
import Modal from 'react-bootstrap/Modal';
import addSnus from '../services/snus-add.service';
import { useAlert } from "react-alert";

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";

export default function SnusModal(props) {

    const req = [
        {
            name: '',
            type: '',
            strength: '',
            img_url: '',
            flavours_id: ''
        }
    ]

    const [snusFlavour, setSnusFlavour] = useState('');
    const [request, setRequest] = useState(req)
    const { name, type, strength, img_url, flavours_id } = request;

    useEffect(() => {
        axios.get(`${API_URL}flavours`, { headers: authHeader() })
        .then(response => {
            const data = response.data.flavours;
            setSnusFlavour(data);
        })
    },[])

    console.log(snusFlavour);

    const updateSnus = async () => {
        await addSnus(name, type, strength, img_url, flavours_id);
        axios.get(`${API_URL}snuses`, { headers: authHeader() })
            .then(response => {
                const data = response.data
                setRequest(data);
                window.location.reload();
        })
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        updateSnus();
        setRequest(req);
    }

  return (
    <>
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Lägg till snus i databasen!
                </Modal.Title>
            </Modal.Header>

            <Form onSubmit={HandleSubmit}>
                <Modal.Body>
                    <Form.Group>
                    <Form.Label className="mr-2">Märke</Form.Label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={e => { 
                            e.preventDefault()
                            setRequest({ ...request, name: e.target.value });
                        }}
                    />
                    </Form.Group>

                    <Form.Group>
                    <Form.Label className="mr-2">Typ</Form.Label>
                    <input
                        list="type"
                        name="type"
                        value={type}
                        onChange={e => { 
                            e.preventDefault()
                            setRequest({ ...request, type: e.target.value });
                        }}
                    / >
                    <datalist id="type">
                        <option value="PORTION"/>
                        <option value="TOBAKSFRI"/>
                        <option value="WHITE PORTION"/>
                        <option value="NIKOTINFRI"/>
                        <option value="LÖS"/>
                    </datalist>
                    </Form.Group>

                    <Form.Group>
                    <Form.Label className="mr-2">Styrka</Form.Label>
                    <input
                        list="strength"
                        name="strength"
                        value={strength}
                        onChange={e => { 
                            e.preventDefault()
                            setRequest({ ...request, strength: e.target.value });
                        }}
                    />
                    <datalist id="strength">
                        <option value="1"/>
                        <option value="2"/>
                        <option value="3"/>
                        <option value="4"/>
                        <option value="5"/>
                    </datalist>
                    </Form.Group>

                    <Form.Group>
                    <Form.Label className="mr-2">Bild</Form.Label>
                    <input
                        type="text"
                        name="img_url"
                        value={img_url}
                        onChange={e => { 
                            e.preventDefault()
                            setRequest({ ...request, img_url: e.target.value });
                        }}
                    / >
                    </Form.Group>


                    <Form.Group>
                    <Form.Label className="mr-2">Smak</Form.Label>
                    <input
                        list="flavours_id"
                        name="flavours_id"
                        value={flavours_id}
                        onChange={e => { 
                            e.preventDefault()
                            setRequest({ ...request, flavours_id: e.target.value });
                        }}
                    />
                    <datalist id="flavours_id">
                        <option value="1">Tall</option>
                        <option value="2">Gran</option>
                        <option value="3">Mint</option>
                        <option value="4">Bär</option>
                        <option value="5">Frukt</option>
                        <option value="6">Kaffe</option>
                        <option value="7">Choklad</option>
                        <option value="8">Laktrits</option>
                        <option value="9">Geranium</option>
                        <option value="10">Bergamott</option>
                        <option value="11">Örter</option>
                        <option value="12">Citrus</option>
                        <option value="13">Rökt</option>
                        <option value="14">Cognac</option>
                    </datalist>
                    </Form.Group>

                    <Button type="submit" value="Submit" variant="#2A324B" style={{ color: 'white', background: "#2A324B" }}>
                        Submit
                    </Button>
                
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="#2A324B" style={{ color: 'white', background: "#2A324B" }} onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    </>
  );
  
}
