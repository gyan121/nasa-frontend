import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "store";
import {
  StyledButton,
  StyledContainer,
  StyledHeading,
  StyledImage,
  StyledInput,
  StyledTitle,
} from "./styled";
import { selectRoverData } from "store/selectors";
import { Col, Flex, Row, Spin } from "antd";
import { fetchRoverImages } from "store/rover/action";
import { RoverData } from "models/api/rover";

const Rover = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [data, setData] = useState<RoverData[]>([]);
  const { images, isLoading } = useSelector(selectRoverData);
  const [searchByNameValue, setSearchByNameValue] = useState("");
  const [searchByIdValue, setSearchByIdValue] = useState("");

  useEffect(() => {
    dispatch(fetchRoverImages());
  }, [dispatch]);

  useEffect(() => {
    setData(images);
  }, [images]);

  const handleSearchByName = () => {
    const filtereData = images.filter(
      ({ camera }) =>
        camera.full_name
          .toLocaleLowerCase()
          .indexOf(searchByNameValue.toLocaleLowerCase()) > -1
    );

    console.log(filtereData);

    setData(filtereData);
  };

  const handleSearchById = () => {
    const filtereData = images.filter(
      ({ id }) =>
        String(id)
          .toLocaleLowerCase()
          .indexOf(searchByIdValue.toLocaleLowerCase()) > -1
    );

    setData(filtereData);
  };

  const handleReset = () => {
    setData(images);
  };

  if (isLoading) {
    return (
      <Flex
        align="center"
        justify="center"
        gap="middle"
        style={{ height: "100%" }}
      >
        <Spin size="large" />
      </Flex>
    );
  }

  return (
    <StyledContainer>
      <StyledHeading>Mars Rover Images</StyledHeading>
      <Flex style={{ marginBottom: 20 }} align="flex-end">
        <StyledInput
          placeholder="Search by name"
          value={searchByNameValue}
          onChange={(e) => setSearchByNameValue(e.target.value)}
        />
        <StyledButton type="primary" onClick={handleSearchByName}>
          Search
        </StyledButton>

        <StyledInput
          placeholder="Search by Id"
          value={searchByIdValue}
          onChange={(e) => setSearchByIdValue(e.target.value)}
        />
        <StyledButton type="primary" onClick={handleSearchById}>
          Search
        </StyledButton>

        <StyledButton type="link" onClick={handleReset}>
          Reset
        </StyledButton>
      </Flex>

      <Row gutter={10}>
        {data.map(({ img_src, camera, id }) => (
          <Col sm={16} md={3} key={img_src} style={{ marginBottom: 10 }}>
            <StyledImage src={img_src} alt={img_src} />
            <StyledTitle>
              {id}-{camera.full_name}
            </StyledTitle>
          </Col>
        ))}
      </Row>
    </StyledContainer>
  );
};

export default Rover;
