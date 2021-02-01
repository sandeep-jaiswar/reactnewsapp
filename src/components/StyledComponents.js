import styled, { css } from 'styled-components';

export const SubmitButton =styled.button`
  background: ${props => props.primary ? "MidnightBlue" : "white"};
  color: ${props => props.primary ? "white" : "MidnightBlue"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid MidnightBlue;
  border-radius: 3px;
`;

export const Title = styled.h3`
  color: palevioletred;
  font-weight: bold;
  font-height: 1rem;
`;

export const Wrapper = styled.div`
  padding: 2em;
  background: papayawhip;
  display:flex;
  border-radius: 25px;
  cursor:pointer;
`

export const ReadMore = styled.h5`
color: #00af91;
font-weight: bold;
font-height: 1rem;
cursor:pointer;
`;

export const Developer = styled.h1`
color: #00af91;
font-weight: bold;
font-height: 1rem;
cursor:pointer;
text-align:center;
text-decoration:underline;
`;

export const ReactNews = styled.h6`
  color: palevioletred;
  font-weight: bold;
  font-height: 1rem;
  text-align:center;
`;

export const ReactNewsHomeBG = styled.div`
  padding: 2em;
  background: papayawhip;
  display:flex;
  justify-content:center;
  border-radius: 25px;
`
