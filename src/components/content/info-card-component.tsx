
import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
  details?: string;
}

const InfoCardComponent: FC<InfoCardProps> = ({ title, value, description, icon: Icon, className, details }) => {
  return (
    <Card className={cn("shadow-lg h-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {description && <p className="text-xs text-muted-foreground pt-1">{description}</p>}
        {details && <p className="text-sm text-foreground/80 mt-2">{details}</p>}
      </CardContent>
    </Card>
  );
};

export default InfoCardComponent;
