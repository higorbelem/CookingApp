export type IMetric = 'Kg' | 'g' | 'ml' | 'L' | 'un';

export type IIngredient = {
  id: string;
  name: string;
  image: string;
  quantity: {
    value: number;
    metric: IMetric;
  };
};
