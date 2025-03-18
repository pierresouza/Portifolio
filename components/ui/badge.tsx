import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-xl border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "flex max-w-64 text-nowrap rounded-full border border-green-400 bg-green-400/25 px-2 py-1 text-xs text-green-500 dark:border-green-300 dark:bg-green-300/25 dark:text-green-300 sm:text-sm md:max-w-72 md:text-base",
        secondary:
          "flex max-w-64 text-nowrap border border-gray-400 bg-gray-400/25 px-2 py-1 text-xs text-gray-500 dark:border-gray-300 dark:bg-gray-300/25 dark:text-gray-300 sm:text-sm md:max-w-72 md:text-base",
        destructive:
          "flex max-w-64 text-nowrap rounded-full border border-red-400 bg-red-400/25 px-2 py-1 text-xs text-red-500 dark:border-red-300 dark:bg-red-300/25 dark:text-red-300 sm:text-sm md:max-w-72 md:text-base",
        outline:
          "flex max-w-64 text-nowrap rounded-full border border-gray-400 px-2 py-1 text-xs text-foreground dark:border-gray-300 sm:text-sm md:max-w-72 md:text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
