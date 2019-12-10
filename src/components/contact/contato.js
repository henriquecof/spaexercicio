import React from 'react';
import { Row, Col, Card, Button, Input } from 'react-materialize';
import UserProfile from '../user_profile/user_profile';

const Contato = () => (
  <Row>
    <Col m={3} s={8}>
      <UserProfile />
    </Col>

    <Col s={3} m={8}>
      <h3>Contato</h3>
      <Card>
        <Row>
          <Input
            placeholder="lorem@ipsum.com"
            type="email"
            label="Email"
            s={12}
          />
          <Input placeholder="Lorem Ipsum..." label="Message" s={12} />
          <Col s={12} m={12}>
            <Button waves="light" className="right grey darken-2">
              SEND
            </Button>
          </Col>
        </Row>
      </Card>
    </Col>
  </Row>
);

export default Contato;
