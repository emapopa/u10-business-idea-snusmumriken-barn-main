import React, { useState } from "react";
import { getCurrentUser } from "../services/auth.service";
import axios from "axios";
import { Card, Container, CardGroup, Row, Col, Button, ListGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import leaf from "../image/leaf.png";
import authHeader from "../services/auth-header";

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";

const Profile = () => {

  const currentUser = getCurrentUser();
  const userId = currentUser.user.id;

  const [getPosts, setGetPosts] = useState()
  const [getReviews, setGetReviews] = useState()
  const [getComments, setGetComments] = useState()

  const getPostsData = () => {
    axios.get(`${API_URL}posts`, { headers: authHeader() })
      .then(response => {
        const data = response.data;
        setGetPosts(data);
      })
  }

  const getReviewsData = () => {
    axios.get(`${API_URL}reviews`, { headers: authHeader() })
      .then(response => {
        const data = response.data;
        setGetReviews(data);
      })
  }

  const getCommentsData = () => {
    axios.get(`${API_URL}comments`, { headers: authHeader() })
      .then(response => {
        const data = response.data;
        setGetComments(data);
      })
  }


  const renderData = (array) => {
    const data = array.posts.map(id => {
      if (id.users_id === userId) {
        return (
          <Card key={id} style={{ backgroundColor: '#F2F3F8' }}>
            <Card.Title>Dina forumtrådar</Card.Title>
            <Card.Body>
              <p>{id.body}</p>
              {/* <p style={{ fontStyle: 'italic' }}> {moment(id.created_at).format("YYYY-MM-DD")}</p> */}
            </Card.Body>
          </Card>
        )
      }
    })
    return data;
  }

  const renderReviewsData = (array) => {
    const data = array.reviews.map(id => {
      if (id.users_id === userId) {
        return (
          <Card key={id} style={{ backgroundColor: '#F2F3F8' }}>
            <Card.Title>Dina recensioner</Card.Title>
            <Card.Body>
              <p>{id.body}</p>
              {/* <p style={{ fontStyle: 'italic' }}>{username} - {moment(created_at).format("YYYY-MM-DD")}</p> */}
            </Card.Body>
          </Card>
        )
      }
    })
    return data;
  }

  const renderCommentsData = (array) => {
    const data = array.comments.map(id => {
      if (id.users_id === userId) {
        return (
          <Card key={id} style={{ backgroundColor: '#F2F3F8' }}>
            <Card.Title>Dina kommentarer</Card.Title>
            <Card.Body>
              <p>{id.body}</p>
              {/* <p style={{ fontStyle: 'italic' }}>{username} - {moment(created_at).format("YYYY-MM-DD")}</p> */}
            </Card.Body>
          </Card>
        )
      }
    })
    return data;
  }

  const submitHandlerPosts = (e) => {
    e.preventDefault();
    getPostsData()
  }

  const submitHandlerReviews = (e) => {
    e.preventDefault();
    getReviewsData()
  }

  const submitHandlerComments = (e) => {
    e.preventDefault();
    getCommentsData()
  }

  const bgcolors = {
    yellow: '#F4DA9D',
    green: '#73f952',
    blue: '#D1E0DD',
    pink: '#E7BAC0',
    textColor: '#2A324B',
    headerColor: ' #73939C',
    borderRadius: '5px'
  }

  const Logo = () => {
    return (
      <img src={leaf}
        width="30"
        height="30"
        className="d-inline-block mb-2 mr-2"
        alt="LOGO"
      />)
  }

  let color = "#";

  function randomColor() {
    const letters = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 5)];
    }
    return color;
  }

  randomColor()

  const ProfileImg = {
    content: 'AA',
    height: '45px',
    width: '45px',
    margin: '1rem',
    backgroundColor: `${color}`,
    borderRadius: '50%',
    display: 'inlineblock',
  }
  
  return (
    <>
      <>
        <div className="d-flex justify-content-between">

          <Container>
            <ListGroup horizontal>
              <ListGroup.Item style={ProfileImg}></ListGroup.Item>
              <ListGroup.Item><h2>{currentUser.user.username}</h2></ListGroup.Item>
            </ListGroup>
          </Container>
          <Container className=" d-lg-block d-none">
            <ListGroup horizontal>
              <ListGroup.Item> <p >Välkommen till din profil här hittar du länkar till forum, dina sparade favoriter med mera</p></ListGroup.Item>
            </ListGroup>
          </Container>
        </div>
      </>

      <Container>
        <CardGroup  >
          <Row>
            <Col sm={12} md={12} lg={6}>
              <Card style={{ backgroundColor: bgcolors.yellow, minWidth: '100%', padding: '1em' }}>
                <Card.Body>
                  <Card.Title style={{
                    color: bgcolors.textColor
                  }}>
                    <Logo />
                  Forumtrådar
                </Card.Title>
                  <Card.Text style={{
                    color: bgcolors.textColor
                  }}>
                    Klicka här för att se dina forumtrådar
                </Card.Text>
                  <Button className="mt-3 mb-3 p-2" variant="#2A324B" style={{ color: 'white', background: "#2A324B" }} onClick={submitHandlerPosts}>Se Forumtrådar</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={12} lg={6}>
              <Card style={{ backgroundColor: bgcolors.blue, minWidth: '100%', padding: '1em' }}>
                <Card.Body>
                  <Card.Title style={{
                    color: bgcolors.textColor
                  }}>
                    <Logo />
                  Dina Favoritsmaker
                </Card.Title>
                  <Card.Text style={{
                    color: bgcolors.textColor
                  }}>
                    Klicka här för att se dina favoritsmaker
                </Card.Text>
                  <Card.Link href={`/favourites/${userId}`}><Button className="mt-3 mb-3 p-2" variant="#2A324B" style={{ color: 'white', background: "#2A324B" }}>Se favoriter</Button></Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={12} lg={6}   >
              <Card style={{ backgroundColor: '#F2F3F8', minWidth: '100%', padding: '1em' }}>
                <Card.Body>
                  <Card.Title style={{
                    color: bgcolors.textColor
                  }}>
                    <Logo />
                    Recensioner
                  </Card.Title>
                  <Card.Text style={{
                    color: bgcolors.textColor
                  }}>
                    Klicka här för att se dina recensioner
                  </Card.Text>
                  <Button className="mt-3 mb-3 p-2" variant="#2A324B" style={{ color: 'white', background: "#2A324B" }} onClick={submitHandlerReviews}>Se recensioner</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={12} lg={6}  >
              <Card style={{ backgroundColor: bgcolors.pink, minWidth: '100%', padding: '1em' }}>
                <Card.Body>
                  <Card.Title style={{
                    color: bgcolors.textColor
                  }}>
                    <Logo />
                    Kommentarer
                  </Card.Title>
                  <Card.Text style={{
                    color: bgcolors.textColor
                  }}>
                    Klicka på länken för att se dina kommentarer
                  </Card.Text>
                  <Button className="mt-3 mb-3 p-2" variant="#2A324B" style={{ color: 'white', background: "#2A324B" }} onClick={submitHandlerComments}>Se kommentarer</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </CardGroup>
      </Container>
      <Container>
        {getPosts ? renderData(getPosts) :
          <div>
          </div>
        }
      </Container>

      <Container>
        {getReviews ? renderReviewsData(getReviews) :
          <div>
          </div>
        }
      </Container>

      <Container>
        {getComments ? renderCommentsData(getComments) :
          <div>
          </div>
        }
      </Container>
    </>
  );
};

export default Profile;