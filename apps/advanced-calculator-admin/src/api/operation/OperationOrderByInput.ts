import { SortOrder } from "../../util/SortOrder";

export type OperationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  typeField?: SortOrder;
  description?: SortOrder;
  symbolField?: SortOrder;
};
