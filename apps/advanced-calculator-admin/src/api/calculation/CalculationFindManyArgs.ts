import { CalculationWhereInput } from "./CalculationWhereInput";
import { CalculationOrderByInput } from "./CalculationOrderByInput";

export type CalculationFindManyArgs = {
  where?: CalculationWhereInput;
  orderBy?: Array<CalculationOrderByInput>;
  skip?: number;
  take?: number;
};
