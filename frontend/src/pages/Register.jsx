import React, { useState } from "react";
import { Container, Card, Form, Button, Row, Col, InputGroup, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Eye, EyeSlash, Plus, X } from "react-bootstrap-icons";
import "./Auth.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [profession, setProfession] = useState(""); 

  const addSkill = () => {
    if (skillInput.trim() !== "" && !skills.includes(skillInput)) {
      setSkills([...skills, skillInput]);
      setSkillInput("");
    }
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  return (
    <div className="Register">
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card className="auth-card shadow-lg p-4">
          <Card.Body>
            <h3 className="text-center mb-3">Register</h3>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Full Name" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Date of Birth <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="date" required />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                <Form.Control type="email" placeholder="Email" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Profession <span className="text-danger">*</span></Form.Label>
                <Form.Select required onChange={(e) => setProfession(e.target.value)}>
                  <option value="">Select Profession</option>
                  <option value="student">Student</option>
                  <option value="developer">Software Developer</option>
                  <option value="designer">UI/UX Designer</option>
                </Form.Select>
              </Form.Group>

              {profession === "student" && (
                <Form.Group className="mb-3">
                  <Form.Label>Institution Name <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Institution Name" required />
                </Form.Group>
              )}

              {profession !== "student" && profession !== "" && (
                <Form.Group className="mb-3">
                  <Form.Label>Company Name <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Company Name" required />
                </Form.Group>
              )}

              <Form.Group className="mb-3">
                <Form.Label>Skills You Know <span className="text-danger">*</span></Form.Label>
                <InputGroup>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter a skill" 
                    value={skillInput} 
                    onChange={(e) => setSkillInput(e.target.value)}
                  />
                  <Button variant="outline-primary" onClick={addSkill}><Plus /></Button>
                </InputGroup>
                <div className="mt-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} pill bg="primary" className="me-2">
                      {skill} <X className="ms-1" style={{ cursor: "pointer" }} onClick={() => removeSkill(skill)} />
                    </Badge>
                  ))}
                </div>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>LinkedIn Profile</Form.Label>
                <Form.Control type="text" placeholder="LinkedIn Profile (Optional)" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>GitHub Profile</Form.Label>
                <Form.Control type="text" placeholder="GitHub Profile (Optional)" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password <span className="text-danger">*</span></Form.Label>
                <InputGroup>
                  <Form.Control type={showPassword ? "text" : "password"} placeholder="Password" required />
                  <Button variant="outline-secondary" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeSlash /> : <Eye />}
                  </Button>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password <span className="text-danger">*</span></Form.Label>
                <InputGroup>
                  <Form.Control type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" required />
                  <Button variant="outline-secondary" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <EyeSlash /> : <Eye />}
                  </Button>
                </InputGroup>
              </Form.Group>
              <Button variant="success" className="w-100">Register</Button>
            </Form>
            <p className="mt-3 text-center">
              Already registered? <Link to="/login" className="link-text">Login here</Link>
            </p>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Register;
