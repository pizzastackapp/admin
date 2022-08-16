import { CloudinaryInput } from '@app/common/components/cloudinary-input/cloudinary-input.component';
import { MenuEditTitle } from '@app/modules/menu/components/menu-edit-title/menu-edit-title.component';
import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const MenuEdit = () => (
  <Edit title={<MenuEditTitle />} mutationMode="pessimistic">
    <SimpleForm>
      <TextInput source="title" fullWidth label="Назва" />
      <CloudinaryInput source="image" label="Фото" />
      <TextInput source="ingredients" fullWidth label="Інгридієнти" />
      <NumberInput source="price" label="Ціна в грн." />
      <NumberInput source="weight" label="Вага в гр." />
    </SimpleForm>
  </Edit>
);
