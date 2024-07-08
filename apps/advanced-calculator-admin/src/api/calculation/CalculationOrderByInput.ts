import { SortOrder } from "../../util/SortOrder";

export type CalculationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  result?: SortOrder;
  expression?: SortOrder;
  timestamp?: SortOrder;
};
