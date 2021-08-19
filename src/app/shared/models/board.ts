export interface IBoard {
  row?: string;
  status?: string;
  tile?: number;
  used?: boolean;
}

export interface ITile {
  col?: number;
  letter?: string;
  row?: number;
}
