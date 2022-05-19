/* eslint-disable react-hooks/exhaustive-deps */
import React, {FC, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import {IIngredient} from '../../@types/ingredient';
import Header from '../../components/Header';
import types from '../../store/module/types';
import Item from './Item';
import * as S from './styles';

type Props = {
  navigation: any;
};

const Pantry: FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const ingredientsData: IIngredient[] = useSelector(
    (state: any) => state.ingredient.ingredients,
  );

  const [search, setSearch] = useState('');
  const [ingredients, setIngredients] =
    useState<IIngredient[]>(ingredientsData);

  useEffect(() => {
    setIngredients(ingredientsData);
  }, [ingredientsData]);

  useEffect(() => {
    if (search.length > 2) {
      const filtered = ingredientsData.filter((item: any) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
      setIngredients(filtered);
    } else {
      setIngredients(ingredientsData);
    }
  }, [search]);

  const onQuantChange = (quant: number, id: string) => {
    dispatch({
      type: types.ingredient.CHANGE_QUANT,
      payload: {
        id: id,
        quantity: quant,
      },
    });
  };

  return (
    <S.Safe>
      <Header
        title="Pantry"
        leftIcon="back"
        onRightPress={() => navigation.navigate('AddIngredient')}
        rightIcon="add"
        onLeftPress={navigation.goBack}
      />
      <S.Scroll showsVerticalScrollIndicator={false}>
        <S.SearchInput
          placeholder="Search ingredients"
          onChangeText={text => setSearch(text)}
        />

        <S.Content>
          {ingredients.length ? (
            ingredients.map((ingredient: IIngredient) => (
              <Item
                key={ingredient.id}
                title={ingredient.name}
                image={ingredient.image}
                quant={ingredient.quantity.value}
                metric={ingredient.quantity.metric}
                onChange={quant => onQuantChange(quant, ingredient.id)}
              />
            ))
          ) : (
            <S.EmptyText>No ingredients found</S.EmptyText>
          )}
        </S.Content>
      </S.Scroll>
    </S.Safe>
  );
};

export default Pantry;
