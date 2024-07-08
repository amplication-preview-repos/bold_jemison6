import { Calculation as TCalculation } from "../api/calculation/Calculation";

export const CALCULATION_TITLE_FIELD = "result";

export const CalculationTitle = (record: TCalculation): string => {
  return record.result?.toString() || String(record.id);
};
