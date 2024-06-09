import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useDispatch } from "react-redux";
import { PrimarySearch } from "../_Redux/features/StoreSlice";

function HomeForm() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const GenrateId = () => {
    var IdLength = 12;
    var BookId = "";
    for (var i = 0; i <= IdLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      BookId += chars.substring(randomNumber, randomNumber + 1);
    }
    return BookId;
  };
  const [Departureairport, setDepartureairport] = useState("");
  const [Arrivalirport, setArrivalirport] = useState("");
  const [CheckIn, setCheckIn] = useState("");
  const [CheckOut, setCheckOut] = useState("");
  const [Class, setClass] = useState("");
  const [Adult, setAdult] = useState("");
  const [Children, setChildren] = useState("");
  const [Infant, setInfant] = useState("");
  const BookId = useState(GenrateId());
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      Departureairport.length > 0 &&
      Arrivalirport.length > 0 &&
      CheckIn.length > 0 &&
      CheckOut.length > 0 &&
      Class.length > 0 &&
      Adult.length > 0 &&
      Children.length > 0 &&
      Infant.length > 0
    ) {
      let data = {
        Departureairport,
        Arrivalirport,
        CheckIn,
        CheckOut,
        Infant,
        Children,
        Adult,
        Class,
        BookId,
      };

      dispatch(PrimarySearch(data));
      router.push("/Results");
    } else {
    }
  };

  return (
    <Form className="HomeForm">
      <div className="header">Search for flights</div>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Departure airport</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="ex Cariro , EGY"
            defaultValue="Cairo"
            onChange={(e) => {
              setDepartureairport(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Arrival airport</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="ex Los Angeles, USA"
            defaultValue="Los Angeles"
            onChange={(e) => {
              setArrivalirport(e.target.value);
            }}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
          <Form.Label>Check In:</Form.Label>
          <InputGroup>
            <Form.Control
              type="date"
              required
              onChange={(e) => {
                setCheckIn(e.target.value);
              }}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
          <Form.Label>Check Out:</Form.Label>
          <InputGroup>
            <Form.Control
              type="date"
              onChange={(e) => {
                setCheckOut(e.target.value);
              }}
              required
            />
          </InputGroup>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} md="12">
          <Form.Label>Class:</Form.Label>
          <Form.Select
            aria-label="Default select example"
            className="form-control"
            required
            onChange={(e) => {
              setClass(e.target.value);
            }}
          >
            <option value="Economy class">Economy class</option>
            <option value="Premium economy class">Premium economy class</option>
            <option value="First class">First class</option>
            <option value="Business class">Business class</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Adult :</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="2"
            defaultValue="1"
            onChange={(e) => {
              setAdult(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Children :</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="2"
            defaultValue="1"
            onChange={(e) => {
              setChildren(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>infant :</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="2"
            defaultValue="1"
            onChange={(e) => {
              setInfant(e.target.value);
            }}
          />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button
        type="submit"
        id="submit"
        onClick={handleSubmit}
        variant="warning"
        className="form-control"
      >
        Search for flights
      </Button>
    </Form>
  );
}

export default HomeForm;
