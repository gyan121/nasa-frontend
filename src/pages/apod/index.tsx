import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "store";
import { fetchApdo } from "store/actions";
import {
  StyledContainer,
  StyledDetails,
  StyledHeading,
  StyledImage,
} from "./styled";
import { selectApodData } from "store/selectors";
import { Flex, Spin } from "antd";

const Apod = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: { title, explanation, hdurl },
    isLoading,
  } = useSelector(selectApodData);

  useEffect(() => {
    dispatch(fetchApdo());
  }, []);

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
      <StyledHeading>{title}</StyledHeading>
      <StyledImage src={hdurl} alt="image" />
      <StyledDetails>{explanation}</StyledDetails>
    </StyledContainer>
  );
};

export default Apod;
