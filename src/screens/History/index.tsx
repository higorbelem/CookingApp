import moment from 'moment';
import React, {FC} from 'react';
import {useSelector} from 'react-redux';

import {IHistory} from '../../@types/history';
import {IIngredient} from '../../@types/ingredient';
import Header from '../../components/Header';
import Item from './Item';
import * as S from './styles';

type Props = {
  navigation: any;
};

const History: FC<Props> = ({navigation}) => {
  const history: IHistory[] = useSelector(
    (state: any) => state.ingredient.history,
  );

  const getDateFormated = (date: moment.Moment) => {
    if (moment().diff(date, 'days') > 0) {
      return date.format('D/M/YY');
    } else if (moment().diff(date, 'hours') > 0) {
      return `${moment().diff(date, 'hours')}h ago`;
    } else if (moment().diff(date, 'minutes') > 0) {
      return `${moment().diff(date, 'minutes')}min ago`;
    } else {
      return 'now';
    }
  };

  return (
    <S.Safe>
      <Header title="History" leftIcon="back" onLeftPress={navigation.goBack} />
      <S.Scroll showsVerticalScrollIndicator={false}>
        {history.length ? (
          history.map((item: IHistory, index) => (
            <Item
              key={`${item.id}-${index}`}
              image={item.recipe.image}
              title={item.recipe.name}
              date={getDateFormated(item.date)}
              first={index === 0}
              description={item.recipe.ingredients
                .map(
                  (ingredient: IIngredient) =>
                    `${ingredient.quantity.value}${ingredient.quantity.metric} ${ingredient.name}`,
                )
                .join(', ')}
            />
          ))
        ) : (
          <S.EmptyText>No recipes cooked yet</S.EmptyText>
        )}
      </S.Scroll>
    </S.Safe>
  );
};

export default History;
