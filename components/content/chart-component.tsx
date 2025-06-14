"use client"

import type { FC } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { ChartConfig } from "@/components/ui/chart";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
  { month: "Jan", revenue: 1860, expenses: 800 },
  { month: "Feb", revenue: 2050, expenses: 950 },
  { month: "Mar", revenue: 2370, expenses: 1100 },
  { month: "Apr", revenue: 1980, expenses: 1200 },
  { month: "May", revenue: 2510, expenses: 1050 },
  { month: "Jun", revenue: 2790, expenses: 1300 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
  expenses: {
    label: "Expenses",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const ChartComponent: FC = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-headline text-primary">Monthly Performance</CardTitle>
        <CardDescription className="text-foreground/80">Revenue vs Expenses Overview</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="month" 
                tickLine={false} 
                axisLine={false} 
                tickMargin={8} 
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis 
                tickLine={false} 
                axisLine={false} 
                tickMargin={8}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip cursor={{ fill: 'hsl(var(--accent))', radius: 4 }} content={<ChartTooltipContent />} />
              <Legend content={({ payload }) => (
                <div className="flex justify-center space-x-4 mt-4">
                  {payload?.map((entry, index) => (
                    <div key={`item-${index}`} className="flex items-center space-x-1 text-sm">
                      <span style={{ backgroundColor: entry.color }} className="h-2.5 w-2.5 rounded-full"></span>
                      <span>{entry.value}</span>
                    </div>
                  ))}
                </div>
              )} />
              <Bar dataKey="revenue" fill="var(--color-revenue)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="expenses" fill="var(--color-expenses)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ChartComponent;
