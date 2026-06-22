import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ArticleCard } from '@/components/article-card';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { articles, expertise, testimonials } from '@/lib/data';
import { communityActivity, topContributors, announcements, communityGroups, trendingTopics } from '@/lib/community-data';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import {
  ArrowRight,
  Lock,
  Shield,
  Users,
  FileCheck,
  Cloud,
  KeyRound,
  Network,
  CheckCircle,
  Award,
  Target,
  Mail,
  Search,
  PlusCircle,
  Users2,
  Clock,
  MessageCircle as MessageCircleIcon,
  Hash,
  Megaphone,
  TrendingUp,
  ThumbsUp,
  Eye,
  ArrowUpRight,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { AdsensePlaceholder } from '@/components/adsense-placeholder';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">
      <Header />
      <main className="flex-1">
        
        {/* SAP Security Intelligence Center */}
        <section id="intelligence-center" className="w-full bg-[#F8FAFC] py-8 md:py-12 border-b">
          <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
            
            <div className="grid grid-cols-12 gap-6 items-start">
              
              {/* Column 1 (Left Rail) - 280px */}
              <div className="col-span-12 lg:col-span-3 space-y-6">
                
                {/* Recent Topics */}
                <Card className="rounded-[16px] border-slate-200 shadow-sm overflow-hidden bg-white">
                  <CardHeader className="pb-3 border-b border-slate-50">
                    <h3 className="text-[14px] font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <Hash className="h-4 w-4 text-primary" /> Recent Topics
                    </h3>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex flex-col">
                      {communityActivity.slice(0, 4).map((item) => (
                        <Link key={item.id} href="#" className="p-4 hover:bg-[#F8FAFC] transition-colors border-b border-slate-50 last:border-0 group">
                          <div className="flex gap-3">
                            <Avatar className="h-10 w-10 border border-slate-100 shrink-0">
                              <AvatarFallback className="bg-slate-50 text-slate-500 font-bold text-xs">{item.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                              <p className="font-semibold text-[15px] leading-snug text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                                {item.title}
                              </p>
                              <p className="text-[13px] text-slate-500 font-medium">By {item.author}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 bg-slate-50/50 justify-center">
                    <Button variant="link" className="text-slate-600 hover:text-primary font-bold text-xs p-0 h-auto">
                      View All Topics <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Sponsored Ad */}
                <div className="relative rounded-[16px] overflow-hidden border border-slate-200 shadow-md group">
                  <Badge className="absolute top-3 left-3 z-10 bg-black/60 text-white text-[9px] uppercase tracking-widest border-none backdrop-blur-md">Sponsored</Badge>
                  <Link href="#">
                    <div className="relative h-[220px] w-full">
                      <Image 
                        src="https://picsum.photos/seed/ad1/300/400" 
                        alt="Sponsored Guide" 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-bold text-sm leading-tight">Mastering SAP BTP Security: The 2026 Implementation Guide</p>
                        <p className="text-white/60 text-[10px] mt-1 font-bold uppercase tracking-widest">Download Now →</p>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Top Contributors */}
                <Card className="rounded-[16px] border-slate-200 shadow-sm bg-white">
                  <CardHeader className="pb-3 border-b border-slate-50">
                    <h3 className="text-[14px] font-semibold text-slate-900 uppercase tracking-wider">Top Contributors</h3>
                  </CardHeader>
                  <CardContent className="p-4 space-y-4">
                    {topContributors.slice(0, 5).map(contributor => (
                      <div key={contributor.name} className="flex items-center gap-3">
                        <Avatar className="h-9 w-9 border border-slate-100">
                          <AvatarImage src={contributor.avatarUrl} />
                          <AvatarFallback className="bg-slate-100 text-slate-600 font-bold text-xs">{contributor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold text-[14px] text-slate-900 leading-none">{contributor.name}</p>
                          <p className="text-[12px] text-slate-500 mt-1">{contributor.role}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter className="p-4 pt-0 justify-center">
                    <Button variant="link" className="text-slate-600 hover:text-primary font-bold text-xs p-0 h-auto">
                      View All <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardFooter>
                </Card>

              </div>

              {/* Column 2 (Main Content) - 540px */}
              <div className="col-span-12 lg:col-span-6 space-y-8">
                
                {/* Featured Insight Hero Card */}
                <Card className="border-none rounded-[16px] overflow-hidden shadow-2xl relative h-[420px] flex flex-col justify-end group">
                  {/* Background Image & Gradient */}
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src="https://picsum.photos/seed/hero/1200/800" 
                      alt="Featured Research" 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    {/* PRD Gradient: #3B5998 to #284B86 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#284B86] via-[#3B5998]/80 to-transparent" />
                    
                    {/* Subtle Wave Pattern (Using CSS Pattern) */}
                    <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay" 
                         style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
                  </div>

                  <CardContent className="relative z-10 p-8 md:p-10 space-y-6">
                    <Badge className="bg-primary text-white font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Featured Insight</Badge>
                    
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-[40px] font-bold text-white leading-[1.1] tracking-tight font-headline">
                        How SAP SSCUI Lists Resolve Authorization Errors Faster
                      </h2>
                      <p className="text-white/80 text-[18px] leading-[1.7] line-clamp-2 max-w-2xl font-medium">
                        Understand the technical architecture of SSCUI and how to leverage standard lists to streamline your S/4HANA cloud migration security.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 pt-2">
                       <div className="flex items-center gap-4 text-xs font-bold text-white/70 tracking-widest uppercase">
                         <span className="flex items-center gap-1.5"><Clock size={14} className="text-primary" /> 8 MIN READ</span>
                         <span className="flex items-center gap-1.5"><Shield size={14} className="text-primary" /> SAP GRC</span>
                       </div>
                       <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-black px-8 h-[52px] shadow-xl group/btn">
                         Read Full Insight <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                       </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity Stream */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[14px] font-semibold text-slate-900 uppercase tracking-wider">Recent Activity Stream</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {communityActivity.map(item => (
                      <Card key={item.id} className="rounded-[16px] border-slate-200 shadow-sm bg-white overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
                        <div className="flex flex-col sm:flex-row h-auto sm:h-[120px]">
                          <div className="relative w-full sm:w-[110px] sm:h-full h-32 shrink-0">
                            <Image 
                              src={`https://picsum.photos/seed/act${item.id}/220/140`} 
                              alt={item.title} 
                              fill 
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                          </div>
                          <div className="flex-grow p-4 flex flex-col justify-center min-w-0">
                            <h4 className="font-semibold text-[18px] text-slate-900 leading-tight truncate group-hover:text-primary transition-colors">{item.title}</h4>
                            <p className="text-[13px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                              {item.excerpt}
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mt-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                              <span>{item.author}</span>
                              <span>• {item.postedTime}</span>
                              <span className="flex items-center gap-1"><Eye size={12} /> {item.views}</span>
                              <span className="flex items-center gap-1"><MessageCircleIcon size={12} /> {item.replies}</span>
                              <Link href="#" className="ml-auto text-primary flex items-center gap-1 hover:underline">
                                Join Discussion <ArrowRight className="h-3 w-3" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                  <div className="text-center pt-4">
                    <Button variant="outline" className="rounded-full px-8 border-slate-300 font-bold text-slate-600">
                      Load More Insights
                    </Button>
                  </div>
                </div>

              </div>

              {/* Column 3 (Right Rail) - 280px */}
              <div className="col-span-12 lg:col-span-3 space-y-6">
                
                {/* Announcements Timeline */}
                <Card className="rounded-[16px] border-slate-200 shadow-sm bg-white">
                  <CardHeader className="pb-3 border-b border-slate-50">
                    <h3 className="text-[14px] font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <Megaphone className="h-4 w-4 text-primary" /> Announcements
                    </h3>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6 relative before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-slate-100">
                      {announcements.map((ann, idx) => (
                        <div key={idx} className="relative pl-6">
                          <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-white shadow-sm ring-4 ring-primary/5" />
                          <p className="text-[14px] font-bold text-slate-900 leading-tight hover:text-primary cursor-pointer transition-colors">{ann.title}</p>
                          <p className="text-[12px] text-slate-400 mt-1 font-medium">{ann.date}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 bg-slate-50/50 justify-center">
                    <Button variant="link" className="text-slate-600 hover:text-primary font-bold text-xs p-0 h-auto">
                      View All Updates <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Sponsored Ad 2 */}
                <div className="relative rounded-[16px] overflow-hidden border border-slate-200 shadow-md group">
                  <Badge className="absolute top-3 left-3 z-10 bg-black/60 text-white text-[9px] uppercase tracking-widest border-none backdrop-blur-md">Sponsored</Badge>
                  <Link href="#">
                    <div className="relative h-[220px] w-full">
                      <Image 
                        src="https://picsum.photos/seed/ad2/300/400" 
                        alt="Sponsored Tool" 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-bold text-sm leading-tight">Advanced SoD Review Dashboard (Demo)</p>
                        <p className="text-white/60 text-[10px] mt-1 font-bold uppercase tracking-widest">Try Free Tool →</p>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Community Stats */}
                <Card className="rounded-[16px] border-slate-200 shadow-sm bg-white">
                  <CardContent className="p-6 space-y-6">
                    <div className="text-center space-y-1">
                      <p className="text-4xl font-bold text-slate-900 font-headline tracking-tighter">369</p>
                      <p className="text-[13px] font-bold text-slate-500 uppercase tracking-wider">Active Members</p>
                      <Badge variant="outline" className="text-[10px] border-primary/20 bg-primary/5 text-primary font-bold">+14 this month</Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="text-xl font-bold text-slate-900">45</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase">Discussions</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="text-xl font-bold text-slate-900">12</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase">New Articles</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 col-span-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xl font-bold text-slate-900">24</p>
                            <p className="text-[10px] text-slate-500 font-bold uppercase">Weekly Contributions</p>
                          </div>
                          <TrendingUp className="text-primary h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Small Card */}
                <Card className="rounded-[16px] border-none bg-slate-900 text-white shadow-xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -mr-12 -mt-12 blur-2xl" />
                  <CardHeader className="pb-2">
                    <h3 className="text-[16px] font-bold">Stay Ahead of SAP Security</h3>
                    <p className="text-xs text-white/60 leading-relaxed mt-1">
                      Weekly research, implementation guides, and expert insights.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-2 pb-6">
                    <Input 
                      placeholder="Email Address" 
                      className="bg-white/10 border-white/20 h-10 text-white placeholder:text-white/40 focus:ring-primary h-[48px] rounded-lg" 
                    />
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-black h-[48px] rounded-lg shadow-lg">
                      Subscribe Now
                    </Button>
                    <p className="text-[9px] text-white/30 text-center font-medium">Join 2,400+ SAP Professionals</p>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </section>
      
        <section
          id="featured-insights"
          className="w-full bg-white py-12 md:py-20 lg:py-28 border-b"
        >
          <div className="container px-4 md:px-6">
            <div className="mb-8 text-center md:mb-12">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Research Library
              </h2>
              <p className="mx-auto mt-2 max-w-[700px] text-muted-foreground md:text-xl">
                Curated articles & technical frameworks to help you stay ahead of the curve.
              </p>
            </div>
            <Tabs defaultValue="all" className="w-full text-center">
              <TabsList className="mb-8 inline-flex h-auto flex-wrap justify-center md:mb-12 bg-slate-50 p-1 rounded-full border">
                <TabsTrigger value="all" className="rounded-full px-6">All Research</TabsTrigger>
                <TabsTrigger value="grc" className="rounded-full px-6">GRC & IAG</TabsTrigger>
                <TabsTrigger value="security" className="rounded-full px-6">Security</TabsTrigger>
                <TabsTrigger value="cyber" className="rounded-full px-6">Cybersecurity</TabsTrigger>
                <TabsTrigger value="cloud" className="rounded-full px-6">BTP & Cloud</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-6 sm:grid-cols-2 md:py-8 lg:max-w-none lg:grid-cols-4 lg:gap-8">
                  {articles.slice(0, 4).map(article => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            <div className="mt-8 text-center md:mt-12">
              <Button variant="outline" className="rounded-full px-8">View Research Repository</Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <AdsensePlaceholder height={100} />
          </div>
        </section>

        <section
          id="expertise"
          className="w-full bg-slate-50 py-12 md:py-20 lg:py-28"
        >
          <div className="container px-4 md:px-6">
            <div className="mb-8 text-center md:mb-12">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                Knowledge Domains
              </h2>
              <p className="mx-auto mt-2 max-w-[700px] text-slate-500 md:text-xl">
                Deep-dive into specialized SAP security domains with practitioner-curated content.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {expertise.map(item => (
                <Card
                  key={item.title}
                  className="flex flex-col items-start p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-[16px] border-slate-200"
                >
                  <CardHeader className="flex flex-row items-center gap-4 p-0">
                    <div className="rounded-xl bg-primary/10 p-3 text-primary shadow-sm">
                      {item.icon === 'Shield' && <Shield size={24} />}
                      {item.icon === 'Network' && <Network size={24} />}
                      {item.icon === 'Lock' && <Lock size={24} />}
                      {item.icon === 'FileCheck' && <FileCheck size={24} />}
                      {item.icon === 'Cloud' && <Cloud size={24} />}
                      {item.icon === 'KeyRound' && <KeyRound size={24} />}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-headline font-bold">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow p-0 pt-4">
                    <p className="text-slate-500 leading-relaxed">{item.description}</p>
                  </CardContent>
                  <CardFooter className="p-0 pt-6 w-full border-t border-slate-50 mt-4">
                    <Link
                      href="#"
                      className="flex items-center text-sm font-bold text-primary hover:underline group"
                    >
                      {item.articles} Research Papers
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="trust"
          className="w-full bg-slate-900 py-12 text-white md:py-20 lg:py-28"
        >
          <div className="container px-4 md:px-6">
            <div className="mb-8 text-center md:mb-12">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Expert-Led Intelligence
              </h2>
              <p className="mx-auto mt-2 max-w-[700px] text-white/50 md:text-xl">
                Built by SAP security architects, for the global security community.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map(testimonial => (
                <Card
                  key={testimonial.name}
                  className="flex flex-col items-start bg-white/5 border-white/10 p-6 text-left text-white md:p-8 rounded-[16px] backdrop-blur-sm"
                >
                  <div className="mb-4 rounded-full bg-primary/20 p-3 text-primary ring-8 ring-primary/5">
                    {testimonial.icon === 'CheckCircle' && <CheckCircle size={28} />}
                    {testimonial.icon === 'Award' && <Award size={28} />}
                    {testimonial.icon === 'Target' && <Target size={28} />}
                  </div>
                  <CardHeader className="p-0">
                    <CardTitle className="text-xl font-headline font-bold">{testimonial.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow p-0 pt-4 text-white/70 leading-relaxed font-medium">
                    <p>{testimonial.quote}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
}
