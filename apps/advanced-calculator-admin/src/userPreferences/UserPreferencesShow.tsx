import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const UserPreferencesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="decimalPrecision" source="decimalPrecision" />
        <BooleanField label="showHistory" source="showHistory" />
        <TextField label="theme" source="theme" />
      </SimpleShowLayout>
    </Show>
  );
};
