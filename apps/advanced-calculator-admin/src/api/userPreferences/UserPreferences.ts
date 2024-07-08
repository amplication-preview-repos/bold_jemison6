export type UserPreferences = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  decimalPrecision: number | null;
  showHistory: boolean | null;
  theme: string | null;
};
