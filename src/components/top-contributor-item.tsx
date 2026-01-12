import type { TopContributor } from "@/lib/community-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThumbsUp } from "lucide-react";

type TopContributorItemProps = {
  contributor: TopContributor;
};

export function TopContributorItem({ contributor }: TopContributorItemProps) {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src={contributor.avatarUrl} alt={contributor.name} />
        <AvatarFallback>{contributor.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <p className="font-semibold text-sm">{contributor.name}</p>
      </div>
      <div className="flex items-center text-sm text-muted-foreground">
        <ThumbsUp className="mr-1 h-4 w-4 text-muted-foreground" />
        <span>{contributor.likes}</span>
      </div>
    </div>
  );
}
