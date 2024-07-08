export type Calculation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  result: string | null;
  expression: string | null;
  timestamp: Date | null;
};
