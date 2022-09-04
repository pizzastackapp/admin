import { theme } from '@app/core/theme';
import { FinanceChart } from '@app/modules/dashboard/components/finance-chart/finance-chart.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'react-admin';

export default {
  title: 'Dashboard/Finance chart',
  component: FinanceChart,
} as ComponentMeta<typeof FinanceChart>;

const Template: ComponentStory<typeof FinanceChart> = (args) => (
  <ThemeProvider theme={theme}>
    <FinanceChart {...args} />
  </ThemeProvider>
);

export const View = Template.bind({});
View.args = {
  data: [
    {
      date: '04/09',
      total: 4000,
    },
    {
      date: '03/09',
      total: 3000,
    },
    {
      date: '02/09',
      total: 2000,
    },
    {
      date: '01/09',
      total: 2780,
    },
    {
      date: '31/08',
      total: 1890,
    },
    {
      date: '30/08',
      total: 2390,
    },
    {
      date: '29/08',
      total: 3490,
    },
  ].reverse(),
};
