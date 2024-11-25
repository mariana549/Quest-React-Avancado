import styled from "styled-components";
import { Color0, Color10 } from "../../../utils/constants/themeUtils";

export const Li = styled.li`
  width: 100%;
  color: ${Color10};
  padding: 6px;
  cursor: default;

  @media (max-width: 900px) {
    font-size: 0.95rem;
  }
`;

export const Name = styled.span`
  text-transform: capitalize;
  font-weight: bold;
  color: ${Color0};
  font-size: 1.2rem;
  letter-spacing: 1px;

  @media (max-width: 900px) {
    font-size: 1.1rem;
  }
`;

export const DescriptionAbilities = styled.p`
  display: inline-block;
`;
