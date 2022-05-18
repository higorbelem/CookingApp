import styled from 'styled-components/native';

import T from '../../components/Text';

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.accent};
  margin-top: 20px;
`;

export const Text = styled(T)`
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({theme}) => theme.colors.text_white};
`;
