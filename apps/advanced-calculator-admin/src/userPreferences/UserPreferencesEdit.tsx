import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const UserPreferencesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="decimalPrecision"
          source="decimalPrecision"
        />
        <BooleanInput label="showHistory" source="showHistory" />
        <TextInput label="theme" source="theme" />
      </SimpleForm>
    </Edit>
  );
};
