import cn from "@/lib/utils/cn";

export default function Divider({ className }: { className?: string }) {
  return (
    <div className={cn("bg-teal h-[2px] w-full rounded-lg", className)}></div>
  );
}
