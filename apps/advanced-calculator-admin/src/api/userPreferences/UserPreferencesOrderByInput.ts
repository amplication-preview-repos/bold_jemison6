import { SortOrder } from "../../util/SortOrder";

export type UserPreferencesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  decimalPrecision?: SortOrder;
  showHistory?: SortOrder;
  theme?: SortOrder;
};
