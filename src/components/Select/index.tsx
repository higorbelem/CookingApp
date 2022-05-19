/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {useAnimationState} from 'moti';

import * as S from './styles';

type ItemType = {
  label: string;
  value: any;
};

interface IProps {
  placeholder: string;
  data: ItemType[];
  onChange?: (item: ItemType) => any;
  small?: boolean;
  halfSize?: boolean;
  paddingLeft?: number;
  value?: any;
  error?: string;
  errorColor?: string;
  hideFilter?: boolean;
  disabled?: boolean;
  style?: any;
}

export const Select = ({
  data,
  placeholder,
  onChange = () => '',
  value,
  small,
  halfSize,
  paddingLeft,
  error,
  errorColor,
  hideFilter,
  disabled,
  style,
}: IProps) => {
  const [showList, setShowList] = useState<boolean>(false);
  const [label, setLabel] = useState<string>();
  const [filteredData, setFilteredData] = useState<[]>([]);

  const animationState = useAnimationState({
    from: {opacity: 0, translateY: -50, height: 0},
    to: {opacity: 1, translateY: 0, height: small ? 80 : 150},
  });

  useEffect(() => {
    if (value !== undefined) {
      setLabel(value?.label);
    }
  }, []);

  useEffect(() => {
    if (showList) {
      animationState.transitionTo('to');
    } else {
      animationState.transitionTo('from');
    }
  }, [showList]);

  useEffect(() => {
    const filterData = data.map((value: any) => {
      return value;
    });

    const filterLabel = filterData?.filter(
      (item: any) => item?.value === value,
    );

    if (filterLabel.length > 0) {
      setLabel(filterLabel?.[0].value?.label);
    }

    setFilteredData(filterData);
  }, [data]);

  const noAccent = (text: string) =>
    text
      ? text
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
      : text;

  const handleSelect = (item: any) => {
    setLabel(item?.label);
    setShowList(!showList);
    onChange(item);
  };

  const onChangeSearch = (text: string) => {
    const regex = new RegExp(`${noAccent(text)}`);

    const newData = data.filter((item: any) => {
      return noAccent(item?.label).match(regex)?.length;
    });

    setFilteredData(newData);
  };

  const renderFilter = () => {
    if (!hideFilter) {
      return (
        <S.SearchContainer>
          <S.Search
            autoCapitalize="none"
            placeholder={'Search'}
            returnKeyType="done"
            onChange={e => onChangeSearch(e.nativeEvent.text)}
          />
          <S.SearchIcon />
        </S.SearchContainer>
      );
    }
  };

  const Item = ({item, onSelect}: any) => {
    return (
      <S.LabelButton onPress={() => onSelect(item)} disabled={disabled}>
        {<S.Label>{item?.label}</S.Label>}
      </S.LabelButton>
    );
  };

  return (
    <>
      <S.Container
        style={style}
        paddingLeft={paddingLeft}
        halfSize={halfSize}
        enabledList={showList}>
        <S.InputContainer
          enabledList={showList}
          onPress={() => setShowList(!showList)}
          activeOpacity={0.8}
          error={error}
          selectionMade={!!label}>
          {label ? (
            <S.LabelPlaceHolder>{label}</S.LabelPlaceHolder>
          ) : (
            <S.PlaceHolder>{placeholder}</S.PlaceHolder>
          )}

          <S.Icon />
        </S.InputContainer>

        <S.Animated state={animationState}>
          <S.ListContainer enabledList={showList} small={small}>
            {!small && renderFilter()}

            {filteredData.length > 0 ? (
              <S.List nestedScrollEnabled>
                {filteredData.map((item, index) => (
                  <Item
                    key={index.toString()}
                    item={item}
                    onSelect={handleSelect}
                  />
                ))}
              </S.List>
            ) : (
              <S.LabelSearch>Not found</S.LabelSearch>
            )}
          </S.ListContainer>
        </S.Animated>
        {error && <S.Error errorColor={errorColor}>{error}</S.Error>}
      </S.Container>

      <S.Back
        onPress={() => {
          setShowList(false);
        }}
        enabledList={showList}
      />
    </>
  );
};

export default Select;
