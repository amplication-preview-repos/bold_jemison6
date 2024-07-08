import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const OperationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="type" source="typeField" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="symbol" source="symbolField" />
      </SimpleForm>
    </Create>
  );
};
