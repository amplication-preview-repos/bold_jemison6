import { UserPreferences as TUserPreferences } from "../api/userPreferences/UserPreferences";

export const USERPREFERENCES_TITLE_FIELD = "theme";

export const UserPreferencesTitle = (record: TUserPreferences): string => {
  return record.theme?.toString() || String(record.id);
};
