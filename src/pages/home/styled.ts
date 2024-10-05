import { Card } from "antd";
import styled from "styled-components";
import { getFontParams, white } from "styles";

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  background: hsla(225, 57%, 41%, 1);

  background: linear-gradient(
    90deg,
    hsla(225, 57%, 41%, 1) 0%,
    hsla(279, 95%, 42%, 1) 100%
  );

  background: -moz-linear-gradient(
    90deg,
    hsla(225, 57%, 41%, 1) 0%,
    hsla(279, 95%, 42%, 1) 100%
  );

  background: -webkit-linear-gradient(
    90deg,
    hsla(225, 57%, 41%, 1) 0%,
    hsla(279, 95%, 42%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#2D4AA2", endColorstr="#8905D0", GradientType=1 );
`;

export const StyledHeading = styled.h1`
  ${getFontParams(62, 600, 62, "normal")}
  text-align: center;
  margin-top: 100px;
  position: absolute;
  top: 0;
  color: ${white};
`;

export const StyledCardContainer = styled.div`
  width: calc(100% - 80px);
  padding: 40px;
`;

export const StyledCard = styled(Card)`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    z-index: 10;
  }
`;
