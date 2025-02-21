import { cn } from "@/lib/utils";

export default function EmptyList({heading = 'no items found',className}:{heading?:string,className?:string}) {
  return (
    <div>
      <h2 className={cn('text-xl',className)}>{heading}</h2>
    </div>
  )
}