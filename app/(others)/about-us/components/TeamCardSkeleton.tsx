import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function TeamCardSkeleton() {
  return (
    <Card className="h-full rounded-2xl border border-border/70 text-center shadow-sm">
      <CardContent className="flex h-full flex-col gap-3">
        <Skeleton className="aspect-[498/562] w-full rounded-xl" />
        <div className="flex w-full flex-col items-center gap-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
          <Skeleton className="h-3 w-2/5" />
        </div>
      </CardContent>
    </Card>
  );
}
