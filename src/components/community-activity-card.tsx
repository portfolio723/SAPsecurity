import type { CommunityActivity } from "@/lib/community-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Eye, MessageSquare, ThumbsUp } from "lucide-react";

type CommunityActivityCardProps = {
  activity: CommunityActivity;
};

export function CommunityActivityCard({ activity }: CommunityActivityCardProps) {
  return (
    <Link href="#" className="group">
        <Card className="flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg text-left">
            <CardHeader>
                <CardTitle className="font-headline text-xl group-hover:text-primary">
                    {activity.title}
                </CardTitle>
                 <CardDescription>{activity.excerpt}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="text-sm text-muted-foreground">
                    By: <span className="font-semibold text-foreground">{activity.author}</span> • {activity.authorRole}
                </div>
                <div className="mt-2 flex items-center gap-2">
                    <Badge variant="secondary">{activity.category}</Badge>
                    <span className="text-xs text-muted-foreground">{activity.postedTime}</span>
                </div>
            </CardContent>
            <CardFooter className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                    <Eye className="mr-1 h-4 w-4" />
                    <span>{activity.views} views</span>
                </div>
                <div className="flex items-center">
                    <MessageSquare className="mr-1 h-4 w-4" />
                    <span>{activity.replies} replies</span>
                </div>
                <div className="flex items-center">
                    <ThumbsUp className="mr-1 h-4 w-4" />
                    <span>{activity.likes} likes</span>
                </div>
            </CardFooter>
        </Card>
    </Link>
  );
}

    