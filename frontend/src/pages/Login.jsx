import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Auth.css"; // Custom styles

const Login = () => {
  return (
    <div className="Login">
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="auth-card shadow-lg">
        <Card.Body>
          <h3 className="text-center mb-3">Login</h3>
          <Form>
            <Form.Group className="mb-3">
              <div className="input-icon">
                <FaEnvelope />
                <Form.Control type="email" placeholder="Email" required />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="input-icon">
                <FaLock />
                <Form.Control type="password" placeholder="Password" required />
              </div>
            </Form.Group>
            <Button variant="primary" className="w-100">Login</Button>
          </Form>
          <p className="mt-3 text-center">
            Not yet registered? <Link to="/register" className="link-text">Register here</Link>
          </p>
        </Card.Body>
      </Card>
    </Container>
    </div>
  );
};

export default Login;
