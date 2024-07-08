import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const OperationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="type" source="typeField" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="symbol" source="symbolField" />
      </SimpleForm>
    </Edit>
  );
};
