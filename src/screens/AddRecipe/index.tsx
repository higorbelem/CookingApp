import React, {FC, useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useSelector} from 'react-redux';
import {IIngredient} from '../../@types/ingredient';

import Alert from '../../components/Alert';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import * as S from './styles';

type Props = {
  navigation: any;
};

const AddRecipe: FC<Props> = ({navigation}) => {
  const ingredientsData: IIngredient[] = useSelector(
    state => state?.ingredient?.ingredients,
  );
  console.log(ingredientsData);
  const [image, setImage] = useState<string>();
  const [ingredients, setIngredients] = useState<(IIngredient | undefined)[]>([
    undefined,
  ]);

  const onImagePressed = () => {
    Alert.show({
      text: 'Onde você quer pegar a foto?',
      buttons: [
        {
          text: 'Câmera',
          isPrimary: true,
          onPress: () =>
            launchCamera(
              {
                mediaType: 'photo',
                quality: 0.5,
                includeBase64: true,
              },
              response => {
                if (response.assets?.length && response.assets[0].base64) {
                  setImage(response.assets[0].base64);
                }
              },
            ),
        },
        {
          text: 'Galeria',
          isPrimary: true,
          onPress: () =>
            launchImageLibrary(
              {
                mediaType: 'photo',
                quality: 0.5,
                includeBase64: true,
              },
              (response: any) => {
                if (response.assets?.length && response.assets[0].base64) {
                  setImage(response.assets[0].base64);
                }
              },
            ),
        },
      ],
    });
  };

  const onSave = () => {};

  const onAddIngredient = () => {
    setIngredients(state => [...state, undefined]);
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
          {image ? (
            <S.Image source={{uri: `data:image/png;base64,${image}`}} />
          ) : (
            <S.AddImageIcon />
          )}
        </S.AddImageButton>

        <Input placeholder="Name" />

        <S.Separator />

        <S.IngredientsContainer>
          {ingredients?.map((ingredient, index) => (
            <Select
              data={ingredientsData.map(item => ({
                label: item.name,
                value: item,
              }))}
              placeholder="Choose a ingredient"
            />
          ))}

          <S.AddButton onPress={onAddIngredient}>
            <S.AddIcon />
          </S.AddButton>
        </S.IngredientsContainer>

        <S.Separator />

        <Input placeholder="Method" multiline />
      </S.Scroll>

      <S.Button text="Save" onPress={onSave} />
    </S.Safe>
  );
};

export default AddRecipe;
