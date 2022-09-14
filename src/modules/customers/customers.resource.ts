import { CustomerList } from '@app/modules/customers/components/customer-list/customer-list.component';
import PersonIcon from '@mui/icons-material/Person';

export const customerResource = {
  name: 'customers',
  list: CustomerList,
  options: { label: 'Користувачі' },
  icon: PersonIcon,
};
