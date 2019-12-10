import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import UserProfile from '../user_profile/user_profile';
import Experience from '../experience/experience';
import companyAvatar from '../images/company.png';
import companyAvatar2 from '../images/company2.png';

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
      <h5 className="subtitle">About Me</h5>
      <Card>
        <div>
          <p>
            <b>Lorem</b>
          </p>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan
            disputationi eu sit. Vide electram sadipscing et per. Per aumento de
            cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im
            ampola pa arma uma pindureta.
          </p>
          <br />
          <p>
            <b>Ipsum</b>
          </p>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan
            disputationi eu sit. Vide electram sadipscing et per. Per aumento de
            cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im
            ampola pa arma uma pindureta.
          </p>
        </div>
      </Card>

      <h5 className="subtitle">Experiences</h5>
      <Experience
        title="Ruby Developer"
        company="SoundCloud"
        description="Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor."
        avatar={companyAvatar}
      />
      <Experience
        title="React Developer"
        company="Twitter"
        description="Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor."
        avatar={companyAvatar2}
      />
    </Col>
  </Row>
);

export default Home;
