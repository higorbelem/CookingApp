import React, {FC, useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import uuid from 'react-native-uuid';

import {IIngredient} from '../../@types/ingredient';
import Alert from '../../components/Alert';
import Header from '../../components/Header';
import Input from '../../components/Input';
import types from '../../store/module/types';
import * as S from './styles';
import {metrics} from '../../static/metrics';

type Props = {
  navigation: any;
};

const AddIngredient: FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    image: {
      error: true,
      value: '',
    },
    name: {
      error: false,
      value: '',
    },
    quantity: {
      error: false,
      value: 0,
    },
    metric: {
      error: true,
      value: '',
    },
  });

  const onImagePressed = () => {
    Alert.show({
      text: 'Onde você quer pegar a foto?',
      buttons: [
        {
          text: 'Câmera',
          isPrimary: true,
          onPress: () =>
            setTimeout(() => {
              launchCamera(
                {
                  mediaType: 'photo',
                  quality: 0.5,
                  includeBase64: true,
                },
                (response: any) => {
                  if (response?.assets?.length && response?.assets[0]?.base64) {
                    setData((state: any) => ({
                      ...state,
                      image: {error: false, value: response.assets[0].base64},
                    }));
                  }
                },
              );
            }, 500),
        },
        {
          text: 'Galeria',
          isPrimary: true,
          onPress: () =>
            setTimeout(() => {
              launchImageLibrary(
                {
                  mediaType: 'photo',
                  quality: 0.5,
                  includeBase64: true,
                },
                (response: any) => {
                  if (response?.assets?.length && response?.assets[0]?.base64) {
                    setData((state: any) => ({
                      ...state,
                      image: {error: false, value: response.assets[0].base64},
                    }));
                  }
                },
              );
            }, 500),
        },
      ],
    });
  };

  const onSave = () => {
    if (!Object.entries(data).some(item => item[1].error)) {
      const ingredient: IIngredient = {
        id: uuid.v4() as string,
        name: data.name.value,
        image: data.image.value,
        quantity: {
          metric: data.metric.value as any,
          value: data.quantity.value,
        },
      };

      dispatch({type: types.ingredient.ADD_INGREDIENT, payload: ingredient});

      navigation.goBack();
    } else {
      Alert.show({
        text: 'Por favor, preencha todos os campos',
        buttons: [{text: 'OK'}],
      });
    }
    return;
  };

  return (
    <S.Safe>
      <Header
        title="Add Ingredient"
        leftIcon="back"
        onLeftPress={navigation.goBack}
      />
      <S.Container>
        <S.AddImageButton onPress={onImagePressed} activeOpacity={0.8}>
          {data?.image?.value ? (
            <S.Image
              source={{uri: `data:image/png;base64,${data?.image?.value}`}}
            />
          ) : (
            <S.AddImageIcon />
          )}
        </S.AddImageButton>

        <Input
          placeholder="Name"
          validation={[{type: 'notEmpty', message: 'Name is required'}]}
          onChange={(text, hasError) =>
            setData((state: any) => ({
              ...state,
              name: {error: hasError || !text, value: text},
            }))
          }
        />

        <S.QuantityContainer>
          <S.QuantityInput
            placeholder="Quantity"
            isNumeric
            validation={[{type: 'onlyNumbers', message: 'Only numbers'}]}
            onChange={(text, hasError) => {
              setData((state: any) => ({
                ...state,
                quantity: {
                  error: hasError || !text,
                  value: parseFloat(text.replace(/,/g, '.')),
                },
              }));
            }}
          />

          <S.QuantitySelect
            data={metrics.map(item => ({label: item, value: item}))}
            placeholder="Metric"
            onChange={item =>
              setData((state: any) => ({
                ...state,
                metric: {error: !item.value, value: item.value},
              }))
            }
          />
        </S.QuantityContainer>
      </S.Container>

      <S.Button text="Save" onPress={onSave} />
    </S.Safe>
  );
};

export default AddIngredient;
