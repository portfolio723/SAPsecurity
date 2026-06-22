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
import { ArrowRight, Eye, MessageSquare, Lock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href="#" className="group">
      <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl border-[#E8ECF2] bg-white text-left">
        {/* Image Section */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint="article image"
          />
          {article.isExclusive && (
            <div className="absolute top-3 right-3 z-10">
              <Badge className="bg-[#F25140] hover:bg-[#F25140] text-white text-[10px] font-bold px-3 py-1 rounded-[4px] flex items-center gap-1 shadow-md border-none uppercase tracking-wider">
                <Lock size={10} fill="white" /> EXCLUSIVE
              </Badge>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col p-6">
          <span className="text-[11px] font-black text-[#64748B] uppercase tracking-widest mb-3">
            {article.category}
          </span>
          
          <CardTitle className="font-headline text-[18px] font-bold text-[#0F172A] leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-3">
            {article.title}
          </CardTitle>

          <CardContent className="p-0 flex-grow mb-6">
            <p className="text-[14px] text-[#64748B] font-medium leading-relaxed line-clamp-3">
              {article.description}
            </p>
          </CardContent>

          {/* Author & Stats Meta */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-50 mb-6">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={article.authorAvatar} />
                <AvatarFallback className="text-[10px] font-bold bg-slate-100 text-slate-500">
                  {article.author.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <span className="text-[13px] text-[#64748B] font-bold">{article.author}</span>
            </div>
            
            <div className="flex items-center gap-4 text-[#64748B]">
              <div className="flex items-center gap-1.5">
                <Eye className="h-4 w-4 opacity-50" />
                <span className="text-[13px] font-medium">{article.stats.views}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MessageSquare className="h-4 w-4 opacity-50" />
                <span className="text-[13px] font-medium">{article.stats.comments}</span>
              </div>
            </div>
          </div>

          {/* Bottom Link & Date */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
            <div className="flex items-center text-[13px] text-[#64748B] font-medium">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-[2px] border border-slate-200 flex items-center justify-center">
                  <div className="w-2 h-[2px] bg-slate-200" />
                </div>
                <span>{article.date}</span>
              </div>
            </div>
            <div className="text-[14px] font-bold text-[#F25140] flex items-center gap-1 hover:underline">
              Read More <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
