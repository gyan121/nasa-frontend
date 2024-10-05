import styled from "styled-components";
import { getFontParams } from "styles";

export const StyledHeading = styled.h1`
  ${getFontParams(52, 600, 52, "normal")};
  text-align: center;
  margin-top: 40px;
`;

export const StyledContainer = styled.div`
  padding: 40px;
`;

export const StyledImage = styled.img`
  width: 100%;
  margin-top: 40px;
`;

export const StyledDetails = styled.p`
  ${getFontParams(18, 400, 18, "normal")};
  margin-top: 30px;
`;
