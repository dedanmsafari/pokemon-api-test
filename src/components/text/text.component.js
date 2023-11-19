import styled from "styled-components/native";

const defaultStyles = (theme) => `
font-family: ${theme.fonts.body};
font-weight:${theme.fontWeights.regular};
color: ${theme.colors.text.primary};

flex-wrap:wrap;
margin-top:0px;
margin-bottom:0px;
`;

const body = (theme) => `
 font-size: ${theme.fontSizes.body};
 `;

const steps = (theme) => `
 font-size: ${theme.fontSizes.button};
 color: ${theme.colors.ui.icons};
 
 `;

const item = (theme) => `
 font-family:${theme.fonts.medium};
 padding: 5px 2px;
 font-size: ${theme.fontSizes.button};
 font-weight:${theme.fontWeights.medium};
 color: ${theme.colors.ui.success};
 `;

const title = (theme) => `
font-family:${theme.fonts.heading};
 font-size: ${theme.fontSizes.h4};
   font-weight:${theme.fontWeights.bold};
   color: ${theme.colors.brand.primary};
 `;

const variants = {
  body,
  title,
  steps,
  item,
};

export default Text = styled.Text`
  ${({ theme }) => defaultStyles(theme)}
  ${({ theme, variant, inverted }) => variants[variant](theme, inverted)}
`;

Text.defaultProps = {
  variant: "body",
};
