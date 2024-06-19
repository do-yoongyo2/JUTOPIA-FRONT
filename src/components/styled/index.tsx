import styled from "styled-components";

interface DescriptionFrameProps {
  backgroundColor?: string;
}

export const DescriptionFrame = styled.section<DescriptionFrameProps>`
  background: ${(props: DescriptionFrameProps) => props.backgroundColor};
  border-radius: 20px;
  padding: 20px;
  margin: 20px 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  color: whitesmoke;
`;
