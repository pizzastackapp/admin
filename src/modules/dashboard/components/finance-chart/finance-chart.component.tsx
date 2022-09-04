import { FC } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';

interface FinanceChartProps {
  data: any[];
}

export const FinanceChart: FC<FinanceChartProps> = ({ data }) => {
  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="total" fill="#fbbf24" />
    </BarChart>
  );
};
