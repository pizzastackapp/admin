import { useGetLastWeekOrdersStatisticQuery } from '@app/core/types';
import { FinanceChart } from '@app/modules/dashboard/components/finance-chart/finance-chart.component';
import { Card, CardContent, Typography } from '@mui/material';
import { Loading } from 'react-admin';

export const Dashboard = () => {
  const { data, loading } = useGetLastWeekOrdersStatisticQuery();

  if (loading) {
    return <Loading />;
  }

  return (
    <Card sx={{ marginTop: '64px' }}>
      <CardContent>
        <Typography variant="h5">Вітаємо в адмінці 🍕 PizzaStack</Typography>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6">Продажі за останній тиждень</Typography>
            <FinanceChart data={data?.last_week_orders ?? []} />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};
