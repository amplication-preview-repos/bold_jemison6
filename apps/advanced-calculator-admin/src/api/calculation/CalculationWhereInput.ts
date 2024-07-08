import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CalculationWhereInput = {
  id?: StringFilter;
  result?: StringNullableFilter;
  expression?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
