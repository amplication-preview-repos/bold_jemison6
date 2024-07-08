import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OperationWhereInput = {
  id?: StringFilter;
  typeField?: StringNullableFilter;
  description?: StringNullableFilter;
  symbolField?: StringNullableFilter;
};
