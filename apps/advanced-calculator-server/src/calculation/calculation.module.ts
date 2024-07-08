import { Module } from "@nestjs/common";
import { CalculationModuleBase } from "./base/calculation.module.base";
import { CalculationService } from "./calculation.service";
import { CalculationController } from "./calculation.controller";
import { CalculationResolver } from "./calculation.resolver";

@Module({
  imports: [CalculationModuleBase],
  controllers: [CalculationController],
  providers: [CalculationService, CalculationResolver],
  exports: [CalculationService],
})
export class CalculationModule {}
