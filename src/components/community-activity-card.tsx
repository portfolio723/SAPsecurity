import type { CommunityActivity } from "@/lib/community-data";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import { MessageSquare, ThumbsUp, Bookmark } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type CommunityActivityCardProps = {
  activity: CommunityActivity;
};

export function CommunityActivityCard({ activity }: CommunityActivityCardProps) {
  return (
      <Card className="flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg text-left p-6 group">
        <div className="flex gap-4">
          <Avatar>
            <AvatarFallback>{activity.author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold">{activity.author}</p>
                <p className="text-xs text-muted-foreground">{activity.authorRole}</p>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MessageSquare className="mr-1 h-4 w-4" />
                  <span>{activity.replies}</span>
                </div>
                <div className="flex items-center">
                  <ThumbsUp className="mr-1 h-4 w-4" />
                  <span>{activity.likes}</span>
                </div>
                <div className="flex items-center">
                  <Bookmark className="mr-1 h-4 w-4" />
                  <span>0</span>
                </div>
              </div>
            </div>
            <CardContent className="p-0 pt-4">
                <Link href="#" className="font-bold group-hover:text-primary mb-2 block">{activity.title}</Link>
              <p className="text-sm text-muted-foreground line-clamp-2">{activity.excerpt}</p>
              <div className="mt-4 text-xs text-muted-foreground">
                <span>{activity.postedTime}</span> | Posted in <Link href="#" className="text-primary hover:underline">{activity.category}</Link>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
  );
}
