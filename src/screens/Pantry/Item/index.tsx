/* eslint-disable react-hooks/exhaustive-deps */
import React, {FC, useEffect, useRef, useState} from 'react';

import {IMetric} from '../../../@types/ingredient';
import * as S from './styles';

type Props = {
  image: string;
  title: string;
  onPress?: () => void;
  metric: IMetric;
  quant: number;
  onChange: (quant: number) => void;
};

const Item: FC<Props> = ({image, title, metric, quant, onPress, onChange}) => {
  const [number, setNumber] = useState(`${quant}`);

  const inputRef = useRef<any>(null);

  useEffect(() => {
    const num = parseFloat(number);
    onChange(num);
  }, [number]);

  return (
    <S.Container activeOpacity={0.9} onPress={onPress}>
      <S.Content>
        <S.Image source={{uri: `data:image/png;base64,${image}`}} />

        <S.TitleContainer>
          <S.Title numberOfLines={1}>{title}</S.Title>
        </S.TitleContainer>

        <S.QuantContainer>
          <S.QuantButton
            onPress={() => {
              setNumber(state => {
                const num = (parseFloat(state) || 0) - 1;
                if (num < 0) {
                  return '0';
                }
                return `${num}`;
              });
            }}>
            <S.MinusIcon width={25} height={25} />
          </S.QuantButton>

          <S.QuantInputContainer
            activeOpacity={1}
            onPress={() => inputRef.current.focus()}>
            <S.QuantInput
              ref={inputRef}
              value={`${number}`}
              keyboardType="numeric"
              onChangeText={text =>
                setNumber(text.replace(/[^0-9.]/g, '') || '0')
              }
            />

            <S.MetricText>{metric}</S.MetricText>
          </S.QuantInputContainer>

          <S.QuantButton
            onPress={() =>
              setNumber(state => `${(parseFloat(state) || 0) + 1}`)
            }>
            <S.PlusIcon width={25} height={25} />
          </S.QuantButton>
        </S.QuantContainer>
      </S.Content>
    </S.Container>
  );
};

export default Item;
