import * as graphql from "@nestjs/graphql";
import { CalculationResolverBase } from "./base/calculation.resolver.base";
import { Calculation } from "./base/Calculation";
import { CalculationService } from "./calculation.service";

@graphql.Resolver(() => Calculation)
export class CalculationResolver extends CalculationResolverBase {
  constructor(protected readonly service: CalculationService) {
    super(service);
  }
}
