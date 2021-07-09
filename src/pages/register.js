import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { InscriptionAction } from "../actions/RegisterAction";
import { useHistory } from "react-router-dom";

const RegisterForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");id: uuidv4(), username,
  const goTologin = useSelector((state) => state.register.registerStatus);
  const dispatch = useDispatch();
  console.log(goTologin);
  const handlSubmit = () => {
    dispatch(InscriptionAction({ email: email, password: password }));
  };

  useEffect(() => {
    if (goTologin === "success") {
      history.push("./login");
    }
    // eslint-disable-next-line
  }, [goTologin]);

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1" color="teal" textAlign="center">
          Create your account
        </Header>
        <Form size="large" onSubmit={handlSubmit}>
          <Segment stacked>
            <Form.Input
              required
              email
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Form.Input
              required
              password
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button color="teal" fluid size="large">
              Register
            </Button>
          </Segment>
        </Form>

        <Message>
          have account <a href="/login">Sign in</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default RegisterForm;
