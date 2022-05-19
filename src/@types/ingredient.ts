import {metrics} from '../static/metrics';

export type IMetric = typeof metrics[number];

export type IIngredient = {
  id: string;
  name: string;
  image: string;
  quantity: {
    value: number;
    metric: IMetric;
  };
};
