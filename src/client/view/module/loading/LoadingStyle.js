import styled, { keyframes }  from 'styled-components';

const LetterKeyframe = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

const Letter = styled.div`
  float: left;
  font-size: 14px;
  color: #b7b7b7;
  animation-name: ${LetterKeyframe};
  animation-duration: 1.6s;
  animation-iteration-count: infinite;
  animation-direction: linear;
`

export const Letter1 = styled(Letter)`
  animation-delay: .48s;
`;
export const Letter2 = styled(Letter)`
  animation-delay: .6s;
`;
export const Letter3 = styled(Letter)`
  animation-delay: .72s;
`;
export const Letter4 = styled(Letter)`
  animation-delay: .84s;
`;
export const Letter5 = styled(Letter)`
  animation-delay: .96s;
`;
export const Letter6 = styled(Letter)`
  animation-delay: 1.08s;
`;
export const Letter7 = styled(Letter)`
  animation-delay: 1.2s;
`;
export const Letter8 = styled(Letter)`
  animation-delay: 1.32s;
`;
export const Letter9 = styled(Letter)`
  animation-delay: 1.44s;
`;
export const Letter10 = styled(Letter)`
  animation-delay: 1.56s;
`;