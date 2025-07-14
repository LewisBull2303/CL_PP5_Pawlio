import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import landingImage from '../assets/landing-page-image.png';
import styles from '../styles/Landing.module.css';
import appStyles from '../App.module.css';

const Landing = () => {
  return (
    <>
      <Row className="text-center">
        <Col sm={12}>
          <Container>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h1 className="mb-4">Pawlio - Get started</h1>
                </Card.Title>
                <Card.Text className="font-weight-bold">
                  Pawlio is a Pet photo sharing portal. If you’re looking for
                  come adorable animals, you've come to the right place!
                  <br />
                  <br />
                  Join our community!
                </Card.Text>
              </Card.Body>
              <img
                src={landingImage}
                className={styles.LandingImage}
                alt="Person photographing a dog in a pool"
              />
              <Card.Body>
                <Link to="/signup">
                  <Button
                    className={`${appStyles.button} ${styles.LandingButtonMargin} mb-3`}
                  >
                    Happy to join!
                  </Button>
                </Link>
                <Link to="/login">
                  <Button className={`${appStyles.button} mb-3`}>
                    I’m already a member, log me in!
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
      <Container>
        <footer className={styles.footer}>
          <div className="float-left">
            <p>Created by Lewis B.</p>
          </div>

          <div className="float-right pb-3">
            <a
              href="https://github.com/LewisBull2303/CL_PP5_Pawlio"
              aria-label="Check the website GitHub page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/lewis-bull-3a465a229/"
              aria-label="Visit me on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Landing;
