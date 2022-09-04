import { Card, CardContent, Typography } from '@mui/material';

export const Dashboard = () => {
  return (
    <Card sx={{ marginTop: '64px' }}>
      <CardContent>
        <Typography variant="h5">Вітаємо в адмінці 🍕 PizzaStack</Typography>
      </CardContent>
    </Card>
  );
};
