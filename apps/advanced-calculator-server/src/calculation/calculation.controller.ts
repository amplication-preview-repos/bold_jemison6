import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CalculationService } from "./calculation.service";
import { CalculationControllerBase } from "./base/calculation.controller.base";

@swagger.ApiTags("calculations")
@common.Controller("calculations")
export class CalculationController extends CalculationControllerBase {
  constructor(protected readonly service: CalculationService) {
    super(service);
  }
}
