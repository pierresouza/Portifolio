import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-xl border px-2.5 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "flex max-w-64 text-nowrap rounded-full border border-emerald-600/30 bg-emerald-50 text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-950/50 dark:text-emerald-300 sm:text-sm md:max-w-72 md:text-base",
        secondary:
          "flex max-w-64 text-nowrap rounded-md border border-border bg-secondary text-secondary-foreground dark:bg-secondary dark:text-secondary-foreground sm:text-sm md:max-w-72 md:text-base",
        destructive:
          "flex max-w-64 text-nowrap rounded-full border border-red-600/30 bg-red-50 text-red-800 dark:border-red-400/30 dark:bg-red-950/50 dark:text-red-300 sm:text-sm md:max-w-72 md:text-base",
        outline:
          "flex max-w-64 text-nowrap rounded-full border border-border text-foreground hover:bg-muted/50 sm:text-sm md:max-w-72 md:text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
