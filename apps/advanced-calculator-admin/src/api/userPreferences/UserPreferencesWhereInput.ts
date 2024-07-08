import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserPreferencesWhereInput = {
  id?: StringFilter;
  decimalPrecision?: IntNullableFilter;
  showHistory?: BooleanNullableFilter;
  theme?: StringNullableFilter;
};
