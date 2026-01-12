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
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href="#" className="group">
      <Card className="flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg">
        <Image
          src={article.imageUrl}
          alt={article.title}
          width={600}
          height={400}
          className="w-full object-cover"
          data-ai-hint="article image"
        />
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center justify-between">
            <Badge variant="secondary">{article.category}</Badge>
            <span className="text-sm text-muted-foreground">{article.readTime}</span>
          </div>
          <CardTitle className="font-headline pt-4">{article.title}</CardTitle>
          <CardContent className="flex-grow p-0 pt-4">
            <CardDescription>{article.description}</CardDescription>
          </CardContent>
          <CardFooter className="p-0 pt-4">
            <div className="flex items-center text-sm font-semibold text-primary">
              Read More
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
}
