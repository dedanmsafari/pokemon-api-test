import styled, { useTheme } from "styled-components/native";

//position i.e top bottom,right,left
//size i.e  xsmall,small,medium,large,xlarge
//transform i.e top == margin-top small == 3px

const property = {
  top: "margin-top",
  bottom: "margin-bottom",
  right: "margin-right",
  left: "margin-left",
};

const value = {
  xsmall: 1,
  small: 2,
  medium: 3,
  large: 4,
  xlarge: 5,
};

const getVariant = (position, size, theme) => {
  const key = property[position]; // i.e margin-top
  const item = value[size]; // i.e 2
  const actualValue = theme.space[item];
  return `${key}: ${actualValue}`;
};

const SpaceView = styled.View`
  ${({ variant }) => variant}
`;

export default Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpaceView variant={variant}>{children}</SpaceView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
