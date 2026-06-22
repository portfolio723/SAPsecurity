'use client';

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowRight, Clock, Shield } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "How SAP SSCUI Lists Resolve Authorization Issues Faster",
    description: "Understand the technical architecture of SSCUI and how to leverage standard lists to streamline cloud migrations.",
    category: "SAP GRC",
    readTime: "8 MIN READ",
    image: "https://sapsecurityexpert.com/uploads/blogs/blog_22180632c7ed0cea.png"
  },
  {
    title: "Protecting SAP Systems from Ransomware: Best Practices",
    description: "Learn essential strategies to safeguard your SAP infrastructure against modern cyber threats and automated attacks.",
    category: "CORE SECURITY",
    readTime: "12 MIN READ",
    image: "/2.jpg"
  },
  {
    title: "Role Mining Strategies for Large Scale Environments",
    description: "Data-driven approaches to optimize your SAP authorization model and reduce maintenance overhead.",
    category: "IAM & IAG",
    readTime: "10 MIN READ",
    image: "/3.jpg"
  }
];

export function FeaturedCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative group overflow-hidden rounded-[16px]">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[420px] w-full">
                <Link href="#" className="block h-full">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-[#3B5998]/65 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B193C]/95 via-[#0B193C]/40 to-transparent z-20" />

                  <div className="absolute inset-0 z-30 p-8 flex flex-col justify-between">
                    <Badge className="w-fit bg-primary text-white font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-lg border-none">
                      FEATURED INSIGHT
                    </Badge>

                    <div className="space-y-6">
                       <div className="backdrop-blur-[4px] bg-white/5 border border-white/10 p-6 rounded-xl">
                         <h2 className="text-2xl md:text-3xl font-bold text-white leading-[1.1] tracking-tight mb-4 font-headline line-clamp-3">
                           {item.title}
                         </h2>
                         <p className="text-white/80 text-base line-clamp-2 font-medium font-body leading-relaxed">
                           {item.description}
                         </p>
                       </div>

                       <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6 text-[10px] font-bold text-white/70 tracking-widest uppercase">
                            <span className="flex items-center gap-1.5"><Clock size={12} className="text-primary" /> {item.readTime}</span>
                            <span className="flex items-center gap-1.5"><Shield size={12} className="text-primary" /> {item.category}</span>
                          </div>
                          <span className="text-white font-black text-xs inline-flex items-center gap-1 hover:text-primary transition-colors">
                            READ INSIGHT <ArrowRight className="h-4 w-4" />
                          </span>
                       </div>
                    </div>
                  </div>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Three Dots Pagination */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              current === i ? "bg-primary w-8" : "bg-white/40 hover:bg-white/80 w-2"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
