import { Landmark } from 'lucide-react';

export default function Logo({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-primary ${className || ''}`} aria-label="Finance Flash Logo">
      <Landmark size={size} strokeWidth={2.5} />
      <span className="font-headline text-2xl font-semibold text-primary">Finance Flash</span>
    </div>
  );
}
