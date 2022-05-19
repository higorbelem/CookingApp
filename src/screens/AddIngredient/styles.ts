import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

import AddImage from '../../assets/svgs/add_image.svg';
import Plus from '../../assets/svgs/plus.svg';
import B from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';

const {width} = Dimensions.get('window');

export const Safe = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
`;

export const AddImageButton = styled.TouchableOpacity`
  width: ${width * 0.3}px;
  height: ${width * 0.3}px;
  border-radius: ${(width * 0.3) / 2}px;
  align-items: center;
  justify-content: center;
  border: 4px solid ${({theme}) => theme.colors.gray};
  overflow: hidden;
  margin-bottom: 20px;
`;

export const AddImageIcon = styled(AddImage).attrs({
  width: width * 0.18,
  height: width * 0.18,
})``;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Button = styled(B)`
  width: 95%;
  margin: 10px;
  align-self: center;
`;

export const AddButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

export const AddIcon = styled(Plus).attrs({
  width: 30,
  height: 30,
})``;

export const QuantityContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-top: 15px;
`;

export const QuantityInput = styled(Input)`
  flex: 0.7;
`;

export const QuantitySelect = styled(Select)`
  flex: 0.3;
  margin-left: 5px;
`;
