import type { Article } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Eye, MessageSquare, ThumbsUp } from "lucide-react";

type ArticleCardProps = {
  article: Article;
  isTopArticle?: boolean;
};

export function ArticleCard({ article, isTopArticle }: ArticleCardProps) {
  return (
    <Link href="#" className="group">
      <Card className="flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg text-left">
        <div className="relative">
          <Image
            src={article.imageUrl}
            alt={article.title}
            width={600}
            height={400}
            className="w-full object-cover"
            data-ai-hint="article image"
          />
           <div className="absolute top-4 left-4 flex gap-2">
            <Badge variant="secondary" className="bg-blue-600 text-white">{article.category}</Badge>
            {isTopArticle && (
              <Badge style={{ backgroundColor: '#F25140', color: 'white' }}>
                Top Article
              </Badge>
            )}
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <CardTitle className="font-headline pt-4 text-lg font-bold">{article.title}</CardTitle>
          <CardContent className="flex-grow p-0 pt-4 text-left">
            <CardDescription>{article.description}</CardDescription>
            <div className="mt-4 flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                    <Eye className="mr-1 h-4 w-4" />
                    <span>{article.stats.views}</span>
                </div>
                 <div className="flex items-center">
                    <MessageSquare className="mr-1 h-4 w-4" />
                    <span>{article.stats.comments}</span>
                </div>
                 <div className="flex items-center">
                    <ThumbsUp className="mr-1 h-4 w-4" />
                    <span>{article.stats.likes}</span>
                </div>
            </div>
          </CardContent>
          <CardFooter className="p-0 pt-4 flex justify-between items-center">
             <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                <span>{article.time}</span>
             </div>
            <div className="flex items-center text-sm font-semibold text-primary">
              Read More
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
}
