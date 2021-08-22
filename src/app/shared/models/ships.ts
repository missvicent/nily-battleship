import { IBoard } from './board';

export interface IShip {
  name?: string;
  hit?: number;
  size?: number;
  destroyed?: boolean;
  tiles?: IBoard[];
}
