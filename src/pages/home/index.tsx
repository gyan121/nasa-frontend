import React from "react";
import {
  StyledCard,
  StyledCardContainer,
  StyledContainer,
  StyledHeading,
} from "./styled";
import { Col, Row } from "antd";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <StyledContainer>
      <StyledHeading>Explore NASA DATA</StyledHeading>
      <StyledCardContainer>
        <Row gutter={30}>
          <Col md={12}>
            <StyledCard
              hoverable
              title=" APOD"
              bordered={false}
              onClick={() => history.push("/apod")}
            >
              Astronomy Picture of the Day.
            </StyledCard>
          </Col>
          <Col md={12}>
            <StyledCard
              hoverable
              title="Mars Rover Photos"
              bordered={false}
              onClick={() => history.push("/rover")}
            >
              Image data gathered by NASA's Curiosity, Opportunity, and Spirit
              rovers on Mars
            </StyledCard>
          </Col>
        </Row>
      </StyledCardContainer>
    </StyledContainer>
  );
};

export default Home;
