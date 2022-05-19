import React, {FC, useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import uuid from 'react-native-uuid';

import {IIngredient} from '../../@types/ingredient';
import {IRecipe} from '../../@types/recipe';
import Alert from '../../components/Alert';
import Header from '../../components/Header';
import Input from '../../components/Input';
import types from '../../store/module/types';
import * as S from './styles';

type Props = {
  navigation: any;
};

const AddRecipe: FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();

  const ingredientsData: IIngredient[] = useSelector(
    (state: any) => state?.ingredient?.ingredients,
  );

  const [image, setImage] = useState({
    error: true,
    value: '',
  });
  const [name, setName] = useState({
    error: true,
    value: '',
  });
  const [method, setMethod] = useState({
    error: true,
    value: '',
  });
  const [ingredients, setIngredients] = useState<IIngredient[]>([
    {
      id: '',
      name: '',
      quantity: {
        metric: 'Kg',
        value: 0,
      },
      image: '',
    },
  ]);

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
                response => {
                  if (response.assets?.length && response.assets[0].base64) {
                    setImage({
                      error: false,
                      value: response.assets[0].base64,
                    });
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
                  if (response.assets?.length && response.assets[0].base64) {
                    setImage({
                      error: false,
                      value: response.assets[0].base64,
                    });
                  }
                },
              );
            }, 500),
        },
      ],
    });
  };

  const onSave = () => {
    if (!name.error && !image.error && ingredients && !method.error) {
      const recipe: IRecipe = {
        id: uuid.v4() as string,
        name: name.value,
        image: image.value,
        ingredients: ingredients,
        method: method.value,
        favorite: false,
      };

      dispatch({type: types.recipe.ADD_RECIPE, payload: recipe});

      navigation.goBack();
    } else {
      Alert.show({
        text: 'Por favor, preencha todos os campos',
        buttons: [{text: 'OK'}],
      });
    }
  };

  const onAddIngredient = () => {
    setIngredients(state => [
      ...state,
      {
        id: '',
        name: '',
        quantity: {
          metric: 'Kg',
          value: 0,
        },
        image: '',
      },
    ]);
  };

  return (
    <S.Safe>
      <Header
        title="Add Recipe"
        leftIcon="back"
        onLeftPress={navigation.goBack}
      />
      <S.Scroll showsVerticalScrollIndicator={false}>
        <S.AddImageButton onPress={onImagePressed} activeOpacity={0.8}>
          {image.value ? (
            <S.Image source={{uri: `data:image/png;base64,${image.value}`}} />
          ) : (
            <S.AddImageIcon />
          )}
        </S.AddImageButton>

        <Input
          placeholder="Name"
          onChange={(text, hasError) =>
            setName({
              error: hasError || !text,
              value: text,
            })
          }
          validation={[{type: 'notEmpty', message: 'Name is required'}]}
        />

        <S.Separator />

        <S.IngredientsContainer>
          {ingredients?.map((ingredient, index) => (
            <S.IngredientContainer key={`${index}`}>
              <S.IngredientSelect
                data={ingredientsData.map(item => ({
                  label: `${item.name} (${item.quantity.metric})`,
                  value: item,
                }))}
                placeholder="Choose a ingredient"
                onChange={item => {
                  setIngredients(state => {
                    const tmp = [...state];
                    tmp[index] = item.value;
                    return tmp;
                  });
                }}
              />

              <S.IngredientQuantInput
                placeholder="Quant"
                validation={[
                  {type: 'notEmpty', message: 'Required'},
                  {type: 'onlyNumbers', message: 'Only numbers'},
                ]}
                value={`${ingredient?.quantity?.value || ''}`}
                onChange={text => {
                  setIngredients(state => {
                    const tmp = [...state];
                    tmp[index] = {
                      ...tmp[index],
                      quantity: {
                        ...tmp[index].quantity,
                        value: parseFloat(text.replace(/,/g, '.')),
                      },
                    };
                    return tmp;
                  });
                }}
              />
            </S.IngredientContainer>
          ))}

          <S.AddButton onPress={onAddIngredient}>
            <S.AddIcon />
          </S.AddButton>
        </S.IngredientsContainer>

        <S.Separator />

        <Input
          placeholder="Method"
          multiline
          onChange={(text, hasError) =>
            setMethod({
              error: hasError || !text,
              value: text,
            })
          }
          validation={[{type: 'notEmpty', message: 'Method is required'}]}
        />
      </S.Scroll>

      <S.Button text="Save" onPress={onSave} />
    </S.Safe>
  );
};

export default AddRecipe;
