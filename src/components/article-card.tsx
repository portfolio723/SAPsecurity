import type { Article } from "@/lib/data";
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
import { ArrowUpRight } from "lucide-react";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href="#" className="group">
      <Card className="flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Badge variant="secondary">{article.category}</Badge>
            <span className="text-sm text-muted-foreground">{article.readTime}</span>
          </div>
          <CardTitle className="font-headline pt-4">{article.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription>{article.description}</CardDescription>
        </CardContent>
        <CardFooter>
          <div className="flex items-center text-sm font-semibold text-primary">
            Read More
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
