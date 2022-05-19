/* eslint-disable react-hooks/exhaustive-deps */
import React, {FC, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {IRecipe} from '../../@types/recipe';
import Header from '../../components/Header';
import FavoriteList from './FavoritesList';
import OthersList from './OthersList';
import * as S from './styles';

type Props = {
  navigation: any;
};

const Main: FC<Props> = ({navigation}) => {
  const recipesData: IRecipe[] = useSelector(
    (state: any) => state.recipe.recipes,
  );

  const [recipes, setRecipes] = useState(recipesData);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search.length > 2) {
      const filtered = recipesData.filter((item: any) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
      setRecipes(filtered);
    } else {
      setRecipes(recipesData);
    }
  }, [search]);

  useEffect(() => {
    setRecipes(recipesData);
  }, [recipesData]);

  const onPressFavorite = (recipe: IRecipe) => {
    navigation.navigate('Recipe', {recipe});
  };

  const onPressOthers = (recipe: IRecipe) => {
    navigation.navigate('Recipe', {recipe});
  };

  return (
    <S.KeyboardView>
      <S.BackgroundCircle scale={1} xOffset={-100} yOffset={0} />
      <S.BackgroundCircle scale={0.8} xOffset={-100} yOffset={100} />
      <S.BackgroundCircle scale={1.1} xOffset={-100} yOffset={100} />

      <S.Safe>
        <Header
          title="Main"
          leftIcon="history"
          onLeftPress={() => navigation.navigate('History')}
          rightIcon="add"
          onRightPress={() => navigation.navigate('AddRecipe')}
        />

        <S.Scroll showsVerticalScrollIndicator={false}>
          <S.SearchInput
            placeholder="Search recipes"
            onChangeText={text => setSearch(text)}
          />

          <FavoriteList
            data={recipes.filter(item => item.favorite)}
            onPress={onPressFavorite}
          />

          <OthersList
            data={recipes.filter(item => !item.favorite)}
            onPress={onPressOthers}
            onAddRecipePress={() => navigation.navigate('AddRecipe')}
          />
        </S.Scroll>
      </S.Safe>

      <S.PantryTray
        activeOpacity={0.9}
        onPress={() => navigation.navigate('Pantry')}>
        <S.TrayArrowIcon />
        <S.PantryTrayText>Pantry</S.PantryTrayText>
      </S.PantryTray>
    </S.KeyboardView>
  );
};

export default Main;
