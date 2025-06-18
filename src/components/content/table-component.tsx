
import type { FC } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from "@/components/ui/badge";

const mockData = [
  { id: 'TRX001', item: 'Tesla Stock (TSLA)', amount: '$2,500.00', status: 'Completed', date: '2024-07-28' },
  { id: 'TRX002', item: 'Apple Stock (AAPL)', amount: '$1,200.50', status: 'Pending', date: '2024-07-28' },
  { id: 'TRX003', item: 'Vanguard Bond Fund (BND)', amount: '$5,000.00', status: 'Completed', date: '2024-07-27' },
  { id: 'TRX004', item: 'Microsoft Options (MSFT)', amount: '$750.00', status: 'Failed', date: '2024-07-27' },
  { id: 'TRX005', item: 'Dividend Reinvestment (JNJ)', amount: '$50.25', status: 'Completed', date: '2024-07-26' },
  { id: 'TRX006', item: 'Bitcoin Purchase (BTC)', amount: '$1000.00', status: 'Processing', date: '2024-07-29' },
  { id: 'TRX007', item: 'Fidelity Mutual Fund (FZROX)', amount: '$300.00', status: 'Completed', date: '2024-07-25' },
  { id: 'TRX008', item: 'Ethereum Sale (ETH)', amount: '$1500.00', status: 'Pending', date: '2024-07-29' },
  { id: 'TRX009', item: 'Amazon Stock (AMZN)', amount: '$850.75', status: 'Completed', date: '2024-07-24' },
  { id: 'TRX010', item: 'Withdrawal to Bank', amount: '$200.00', status: 'Processing', date: '2024-07-29' },
];

const TableComponent: FC = () => {
  return (
    <Card className="shadow-lg h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl font-headline text-primary">Recent Transactions</CardTitle>
        <CardDescription className="text-foreground/80">Overview of your latest financial activities.</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden">
        <ScrollArea className="h-[300px] lg:h-full"> 
          <Table>
            <TableCaption className="text-xs text-muted-foreground mt-2 sr-only">A list of your recent transactions.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Item</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockData.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium text-xs">{transaction.id}</TableCell>
                  <TableCell className="text-sm">{transaction.item}</TableCell>
                  <TableCell>
                    <Badge variant={
                      transaction.status === 'Completed' ? 'default' :
                      transaction.status === 'Pending' ? 'secondary' :
                      transaction.status === 'Failed' ? 'destructive' :
                      'outline' 
                    }
                    className="text-xs py-0.5 px-1.5 h-auto leading-tight" 
                    >
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs">{transaction.date}</TableCell>
                  <TableCell className="text-right text-sm">{transaction.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default TableComponent;
