import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CalculationServiceBase } from "./base/calculation.service.base";

@Injectable()
export class CalculationService extends CalculationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
