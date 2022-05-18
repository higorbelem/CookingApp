import React, {FC} from 'react';

import {IRecipe} from '../../@types/recipe';
import Header from '../../components/Header';
import FavoriteList from './FavoritesList';
import OthersList from './OthersList';
import * as S from './styles';

type Props = {
  navigation: any;
};

const Main: FC<Props> = ({navigation}) => {
  const tmpFavorites: IRecipe[] = [
    {
      id: '1',
      name: 'Macarronada',
      ingredients: [
        {
          image:
            'https://www.collinsdictionary.com/images/full/carrot_125262134.jpg',
          name: 'Carrot',
          quantity: {
            metric: 'un',
            value: 2,
          },
        },
      ],
      image:
        'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
      method:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum lacus at porttitor lobortis. Mauris nulla eros, blandit ut libero et, pretium aliquet magna. Mauris blandit metus sit amet orci eleifend, sit amet dictum ex efficitur. Sed porta nunc eu nunc iaculis, eu accumsan augue fermentum. Sed iaculis dictum massa in sollicitudin. Morbi eu malesuada diam. Donec ultrices dictum eleifend. Sed mollis purus mi, ut scelerisque justo sollicitudin ac. Aenean ac tortor consequat, elementum erat non, facilisis est. Pellentesque luctus, odio at laoreet auctor, enim dui eleifend velit, pellentesque tempor mi quam eget nunc. Morbi sit amet mauris dignissim mauris venenatis ultricies at at risus. Quisque suscipit et ipsum vel auctor. Vivamus eleifend nisi quis libero interdum, id gravida magna convallis. Aenean vulputate, felis in pretium pellentesque, enim enim eleifend eros, non sollicitudin lorem leo in nisl. Phasellus pharetra commodo lobortis. ',
    },
    {
      id: '2',
      name: 'Macarronada',
      ingredients: [
        {
          image:
            'https://www.collinsdictionary.com/images/full/carrot_125262134.jpg',
          name: 'Carrot',
          quantity: {
            metric: 'un',
            value: 2,
          },
        },
      ],
      image:
        'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
      method:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum lacus at porttitor lobortis. Mauris nulla eros, blandit ut libero et, pretium aliquet magna. Mauris blandit metus sit amet orci eleifend, sit amet dictum ex efficitur. Sed porta nunc eu nunc iaculis, eu accumsan augue fermentum. Sed iaculis dictum massa in sollicitudin. Morbi eu malesuada diam. Donec ultrices dictum eleifend. Sed mollis purus mi, ut scelerisque justo sollicitudin ac. Aenean ac tortor consequat, elementum erat non, facilisis est. Pellentesque luctus, odio at laoreet auctor, enim dui eleifend velit, pellentesque tempor mi quam eget nunc. Morbi sit amet mauris dignissim mauris venenatis ultricies at at risus. Quisque suscipit et ipsum vel auctor. Vivamus eleifend nisi quis libero interdum, id gravida magna convallis. Aenean vulputate, felis in pretium pellentesque, enim enim eleifend eros, non sollicitudin lorem leo in nisl. Phasellus pharetra commodo lobortis. ',
    },
    {
      id: '3',
      name: 'Macarronada',
      ingredients: [
        {
          image:
            'https://www.collinsdictionary.com/images/full/carrot_125262134.jpg',
          name: 'Carrot',
          quantity: {
            metric: 'un',
            value: 2,
          },
        },
        {
          image:
            'https://www.collinsdictionary.com/images/full/carrot_125262134.jpg',
          name: 'Carrot',
          quantity: {
            metric: 'un',
            value: 2,
          },
        },
      ],
      image:
        'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
      method:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum lacus at porttitor lobortis. Mauris nulla eros, blandit ut libero et, pretium aliquet magna. Mauris blandit metus sit amet orci eleifend, sit amet dictum ex efficitur. Sed porta nunc eu nunc iaculis, eu accumsan augue fermentum. Sed iaculis dictum massa in sollicitudin. Morbi eu malesuada diam. Donec ultrices dictum eleifend. Sed mollis purus mi, ut scelerisque justo sollicitudin ac. Aenean ac tortor consequat, elementum erat non, facilisis est. Pellentesque luctus, odio at laoreet auctor, enim dui eleifend velit, pellentesque tempor mi quam eget nunc. Morbi sit amet mauris dignissim mauris venenatis ultricies at at risus. Quisque suscipit et ipsum vel auctor. Vivamus eleifend nisi quis libero interdum, id gravida magna convallis. Aenean vulputate, felis in pretium pellentesque, enim enim eleifend eros, non sollicitudin lorem leo in nisl. Phasellus pharetra commodo lobortis. ',
    },
  ];

  const onPressFavorite = (recipe: IRecipe) => {
    navigation.navigate('Recipe', {recipe});
  };

  const onPressOthers = (recipe: IRecipe) => {
    navigation.navigate('Recipe', {recipe});
  };

  return (
    <>
      <S.BackgroundCircle scale={1} xOffset={-100} yOffset={0} />
      <S.BackgroundCircle scale={0.8} xOffset={-100} yOffset={100} />
      <S.BackgroundCircle scale={1.1} xOffset={-100} yOffset={100} />

      <S.Safe>
        <Header
          title="Main"
          leftIcon="history"
          onLeftPress={() => {}}
          onRightPress={() => navigation.navigate('AddRecipe')}
        />
        <S.Container>
          <FavoriteList data={tmpFavorites} onPress={onPressFavorite} />

          <OthersList
            data={tmpFavorites}
            onPress={onPressOthers}
            onAddRecipePress={() => navigation.navigate('AddRecipe')}
          />
        </S.Container>
      </S.Safe>

      <S.PantryTray activeOpacity={0.9}>
        <S.TrayArrowIcon />
        <S.PantryTrayText>Pantry</S.PantryTrayText>
      </S.PantryTray>
    </>
  );
};

export default Main;
