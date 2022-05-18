import React, {useState} from 'react';

import * as S from './styles';

type buttonType = {
  text: string;
  onPress?: () => void;
  isPrimary?: boolean;
};

type stateTypes = {
  show?: boolean;
  hideOnOutsideTouch?: boolean;
  text?: string;
  buttons?: buttonType[];
};

let show = ({}: stateTypes) => {};
let hide = () => {};

const Alert = () => {
  const [state, setState] = useState<stateTypes>({
    hideOnOutsideTouch: true,
    show: false,
    text: '',
    buttons: [],
  });

  show = ({text = '', buttons = [], hideOnOutsideTouch = true}) => {
    setState({
      show: true,
      text,
      buttons,
      hideOnOutsideTouch,
    });
  };

  hide = () => {
    setState({...state, show: false});
  };

  const onPress = (item: buttonType) => {
    if (item.onPress) {
      item.onPress();
    }
    hide();
  };

  return (
    <S.Modal
      isVisible={state.show}
      backdropOpacity={0.5}
      onBackdropPress={state.hideOnOutsideTouch ? hide : undefined}
      animationIn={'slideInUp'}
      animationInTiming={300}
      animationOut={'slideOutDown'}
      animationOutTiming={300}>
      <S.Container>
        <S.Text>{state.text}</S.Text>

        <S.ButtonsContainer>
          {state?.buttons?.map((item, index: number) => (
            <S.Button
              key={`${index}`}
              hasMargin={index !== 0}
              isPrimary={item.isPrimary}
              onPress={() => onPress(item)}>
              <S.ButtonText isPrimary={item.isPrimary}>
                {item.text}
              </S.ButtonText>
            </S.Button>
          ))}
        </S.ButtonsContainer>
      </S.Container>
    </S.Modal>
  );
};

export default {
  Component: Alert,
  show: ({text = '', buttons = [], hideOnOutsideTouch = true}: stateTypes) =>
    show({
      text,
      buttons,
      hideOnOutsideTouch,
    }),
  hide: () => hide(),
};
