import { Menu, Orders } from '@app/core/types';
import {
  Datagrid,
  FunctionField,
  ReferenceField,
  ReferenceManyField,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin';

export const OrderShow = () => (
  <Show>
    <SimpleShowLayout>
      <FunctionField
        label="Сума"
        source="sum"
        render={(record: Orders) => `${record.sum} грн.`}
      />
      <TextField source="client_address" label="Адреса" />
      <TextField source="client_name" label="Ім'я" />
      <TextField source="client_phone" label="Телефон" />
      <ReferenceField
        reference="order_status"
        source="status"
        label="Статус замовлення"
        link={false}
      >
        <TextField source="label" />
      </ReferenceField>
      <ReferenceManyField
        reference="orders_menu"
        target="order_id"
        label="Список замовлення"
      >
        <Datagrid bulkActionButtons={false}>
          <ReferenceField
            reference="menu"
            source="menu_id"
            link={false}
            label="Назва"
          >
            <TextField source="title" />
          </ReferenceField>
          <ReferenceField
            reference="menu"
            source="menu_id"
            link={false}
            label="Ціна"
          >
            <FunctionField
              label="Ціна"
              render={(record: Menu) => `${record.price} грн.`}
            />
          </ReferenceField>
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);
