import {
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const OrderEdit = () => (
  <Edit mutationMode="pessimistic">
    <SimpleForm>
      <TextInput source="client_address" label="Адреса" fullWidth />
      <TextInput source="client_name" label="Ім'я" />
      <TextInput source="client_phone" label="Телефон" />
      <ReferenceInput source="status" reference="order_status">
        <SelectInput optionText="label" label="Статус замовлення" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
