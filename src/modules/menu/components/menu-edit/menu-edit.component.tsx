import { MenuEditTitle } from '@app/modules/menu/components/menu-edit-title/menu-edit-title.component';
import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const MenuEdit = () => (
  <Edit title={<MenuEditTitle />}>
    <SimpleForm>
      <TextInput source="title" fullWidth label="Назва" />
      <TextInput source="image" fullWidth label="Фото" />
      <TextInput source="ingredients" fullWidth label="Інгридієнти" />
      <NumberInput source="price" label="Ціна в грн." />
      <NumberInput source="weight" label="Вага в гр." />
    </SimpleForm>
  </Edit>
);
