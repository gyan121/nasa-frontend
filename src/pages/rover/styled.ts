import { Button, Image, Input } from "antd";
import styled from "styled-components";
import { getFontParams } from "styles";

export const StyledHeading = styled.h1`
  ${getFontParams(52, 600, 52, "normal")};
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const StyledContainer = styled.div`
  padding: 40px;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  object-fit: cover;
`;

export const StyledTitle = styled.div`
  ${getFontParams(16, 400, 16, "normal")}
`;

export const StyledInput = styled(Input)`
  width: 200px;
`;

export const StyledButton = styled(Button)`
  margin-right: 20px;
`;
