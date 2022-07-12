import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <p>
        We are Computer Science majors going through our Capstone. Here are the
        team members:
      </p>
      <div className="flex place-content-center">
        <div className="flex-none mx-3 text-center">
          <img
            src="../../assets/images/armant.png"
            alt="armant"
            className="circle-img w-52 h-52"
          />
          <div className="mx-auto">
            Armant Touche <br /> Team Lead
          </div>
        </div>
        <div className="flex-none mx-3 text-center">
          <img
            src="../../assets/images/marten.jpg"
            alt="marten"
            className="w-52 h-52 circle-img"
          />
          <div className="mx-auto">Marten Sova</div>
        </div>
      </div>
    </Content>
  </Main>
);

export default About;
