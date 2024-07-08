import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const UserPreferencesCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="decimalPrecision"
          source="decimalPrecision"
        />
        <BooleanInput label="showHistory" source="showHistory" />
        <TextInput label="theme" source="theme" />
      </SimpleForm>
    </Create>
  );
};
