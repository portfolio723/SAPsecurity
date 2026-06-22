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
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">
      <Header />
      <main className="flex-1">
        
        {/* Intelligence Center */}
        <section id="intelligence-center" className="w-full bg-[#F8FAFC] py-12 md:py-16 border-b">
          <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
            
            <div className="grid grid-cols-12 gap-6 items-start">
              
              {/* Column 1 (Left Rail) - 280px */}
              <div className="col-span-12 lg:col-span-3 space-y-8">
                
                {/* Recent Topics */}
                <Card className="rounded-[16px] border-[#E8ECF2] shadow-sm overflow-hidden bg-white">
                  <CardHeader className="p-6 pb-3 border-b border-slate-50">
                    <h3 className="text-[14px] font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-2">
                      Recent Topics
                    </h3>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex flex-col">
                      {communityActivity.slice(0, 3).map((item) => (
                        <Link key={item.id} href="#" className="p-6 hover:bg-[#F8FAFC] transition-colors border-b border-slate-50 last:border-0 group">
                          <div className="flex gap-4">
                            <Avatar className="h-10 w-10 border border-slate-100 shrink-0">
                              <AvatarFallback className="bg-slate-50 text-slate-500 font-bold text-xs">{item.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                              <p className="font-semibold text-[15px] leading-snug text-[#0F172A] group-hover:text-primary transition-colors line-clamp-2">
                                {item.title}
                              </p>
                              <p className="text-[13px] text-[#64748B] font-medium">By {item.author}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 bg-slate-50/50 justify-center">
                    <Button variant="link" className="text-[#64748B] hover:text-primary font-bold text-xs p-0 h-auto">
                      View All Topics <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Sponsored Ad 1 */}
                <Card className="rounded-[16px] border-[#E8ECF2] shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden bg-white aspect-square relative group">
                   <Badge className="absolute top-4 left-4 z-10 bg-slate-100 text-slate-500 text-[8px] uppercase tracking-widest border-none font-bold rounded-[4px]">Sponsored</Badge>
                   <CardContent className="h-full p-4 flex items-center justify-center">
                    <div className="w-full h-full border-[3px] border-dashed border-black flex flex-col items-center justify-center text-center px-4 bg-white">
                      <div className="space-y-0.5 mb-6">
                        <p className="text-[28px] font-black leading-none tracking-tighter text-black">PLACE</p>
                        <p className="text-[28px] font-black leading-none tracking-tighter text-black">YOUR</p>
                        <p className="text-[28px] font-black leading-none tracking-tighter text-black">AD</p>
                        <p className="text-[28px] font-black leading-none tracking-tighter text-black">HERE</p>
                      </div>
                      <p className="text-[9px] font-bold text-black uppercase tracking-tight">Mail to hello@sapsecurityexpert.com</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Top Contributors */}
                <Card className="rounded-[16px] border-[#E8ECF2] shadow-sm bg-white overflow-hidden">
                  <CardHeader className="p-6 pb-3 border-b border-slate-50">
                    <h3 className="text-[14px] font-bold text-[#0F172A] uppercase tracking-wider">Top Contributors</h3>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    {topContributors.slice(0, 3).map(contributor => (
                      <div key={contributor.name} className="flex items-center gap-4">
                        <Avatar className="h-10 w-10 border border-slate-100">
                          <AvatarImage src={contributor.avatarUrl} />
                          <AvatarFallback className="bg-slate-100 text-slate-600 font-bold text-xs">{contributor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-0.5">
                          <p className="font-bold text-[14px] text-[#0F172A] leading-none">{contributor.name}</p>
                          <p className="text-[12px] text-[#64748B] font-medium">{contributor.role}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter className="p-4 pt-0 justify-center">
                    <Button variant="link" className="text-[#64748B] hover:text-primary font-bold text-xs p-0 h-auto">
                      View All <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardFooter>
                </Card>

              </div>

              {/* Column 2 (Main Content) - 540px */}
              <div className="col-span-12 lg:col-span-6 space-y-8">
                
                {/* Featured Insight Hero Card */}
                <Card className="border-none rounded-[16px] overflow-hidden shadow-2xl relative h-[420px] flex flex-col justify-end group">
                  {/* Background Gradient & Pattern (Image Removed as requested) */}
                  <div className="absolute inset-0 z-0">
                    {/* PRD Gradient: #3B5998 to #284B86 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#284B86] via-[#3B5998]/80 to-[#3B5998]" />
                    
                    {/* Subtle Wave Pattern */}
                    <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay" 
                         style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
                  </div>

                  <CardContent className="relative z-10 p-8 md:p-10 space-y-6">
                    <Badge className="bg-primary text-white font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Featured Insight</Badge>
                    
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-[40px] font-bold text-white leading-[1.1] tracking-tight font-headline">
                        How SAP SSCUI Lists Resolve Authorization Errors Faster
                      </h2>
                      <p className="text-white/80 text-[18px] leading-[1.7] line-clamp-2 max-w-2xl font-medium font-body">
                        Understand the technical architecture of SSCUI and how to leverage standard lists to streamline your S/4HANA cloud migration security.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 pt-2">
                       <div className="flex items-center gap-4 text-xs font-bold text-white/70 tracking-widest uppercase">
                         <span className="flex items-center gap-1.5"><Clock size={14} className="text-primary" /> 8 MIN READ</span>
                         <span className="flex items-center gap-1.5"><Shield size={14} className="text-primary" /> SAP GRC</span>
                       </div>
                       <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-black px-8 h-[52px] shadow-xl group/btn rounded-[4px]">
                         Read Full Insight <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                       </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity Feed */}
                <Card className="rounded-[16px] border-[#E8ECF2] shadow-sm bg-white overflow-hidden">
                  <CardHeader className="p-6 border-b border-slate-50">
                    <h3 className="text-[18px] font-bold text-[#0F172A]">Recent Activity</h3>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex flex-col">
                      {communityActivity.map((item, idx) => (
                        <div key={item.id} className={cn(
                          "p-6 flex flex-col md:flex-row gap-6 hover:bg-[#F8FAFC] transition-colors group cursor-pointer",
                          idx !== communityActivity.length - 1 && "border-b border-slate-100"
                        )}>
                          <div className="relative w-full md:w-[130px] h-[85px] shrink-0 rounded-[4px] overflow-hidden border border-slate-100 shadow-sm bg-slate-50">
                            <Image 
                              src={item.imageUrl || `https://picsum.photos/seed/${item.id + 100}/260/170`} 
                              alt={item.title} 
                              fill 
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                          </div>
                          
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2">
                               <Badge className="bg-[#4169E1] hover:bg-[#4169E1] text-white text-[10px] rounded-[2px] px-2 py-0.5 font-bold uppercase tracking-tight border-none">
                                 {item.category}
                               </Badge>
                               {item.isExclusive && (
                                 <Badge className="bg-[#F25140] hover:bg-[#F25140] text-white text-[10px] rounded-[2px] px-2 py-0.5 font-bold uppercase tracking-tight flex items-center gap-1 border-none">
                                   <Lock size={10} fill="currentColor" /> EXCLUSIVE
                                 </Badge>
                               )}
                            </div>
                            
                            <h4 className="text-[18px] font-bold text-[#0F172A] leading-tight group-hover:text-primary transition-colors">
                              {item.title}
                            </h4>
                            
                            <p className="text-[14px] text-[#64748B] line-clamp-2 leading-relaxed font-medium font-body">
                              {item.excerpt}
                            </p>
                            
                            <div className="flex items-center gap-3 pt-1">
                               <Avatar className="h-6 w-6">
                                 <AvatarFallback className="text-[10px] font-bold bg-slate-100 text-slate-500">RB</AvatarFallback>
                               </Avatar>
                               <span className="text-[13px] text-[#64748B] font-medium">{item.author}</span>
                               <span className="text-[13px] text-[#64748B] font-medium tracking-tight opacity-70">{item.postedTime}</span>
                            </div>
                            
                            <div className="pt-2">
                              <Link href="#" className="text-[#F25140] text-[14px] font-bold hover:underline flex items-center gap-1 group/link">
                                Read & Join Discussion <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 border-t border-slate-50">
                    <Link href="#" className="text-[#3B5998] hover:text-[#284B86] font-bold text-[15px] flex items-center gap-2 group">
                      Join the Community <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardFooter>
                </Card>

              </div>

              {/* Column 3 (Right Rail) - 280px */}
              <div className="col-span-12 lg:col-span-3 space-y-8">
                
                {/* Announcements Timeline */}
                <Card className="rounded-[16px] border-[#E8ECF2] shadow-sm bg-white overflow-hidden">
                  <CardHeader className="p-6 pb-3 border-b border-slate-50">
                    <h3 className="text-[14px] font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-2">
                      <Megaphone className="h-4 w-4 text-primary" /> Announcements
                    </h3>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-8 relative before:absolute before:left-1 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
                      {announcements.map((ann, idx) => (
                        <div key={idx} className="relative pl-6 group cursor-pointer">
                          <div className="absolute left-[-3px] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-white shadow-sm ring-4 ring-primary/5 transition-transform group-hover:scale-125" />
                          <p className="text-[14px] font-bold text-[#0F172A] leading-tight group-hover:text-primary transition-colors">{ann.title}</p>
                          <p className="text-[12px] text-[#64748B] mt-1.5 font-bold uppercase tracking-tight">{ann.date}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 bg-slate-50/50 justify-center">
                    <Button variant="link" className="text-[#64748B] hover:text-primary font-bold text-xs p-0 h-auto">
                      View All Updates <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Sponsored Ad 2 */}
                <Card className="rounded-[16px] border-[#E8ECF2] shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden bg-white aspect-square relative group">
                   <Badge className="absolute top-4 left-4 z-10 bg-slate-100 text-slate-500 text-[8px] uppercase tracking-widest border-none font-bold rounded-[4px]">Sponsored</Badge>
                   <CardContent className="h-full p-4 flex items-center justify-center">
                    <div className="w-full h-full border-[3px] border-dashed border-black flex flex-col items-center justify-center text-center px-4 bg-white">
                      <div className="space-y-0.5 mb-6">
                        <p className="text-[28px] font-black leading-none tracking-tighter text-black">PLACE</p>
                        <p className="text-[28px] font-black leading-none tracking-tighter text-black">YOUR</p>
                        <p className="text-[28px] font-black leading-none tracking-tighter text-black">AD</p>
                        <p className="text-[28px] font-black leading-none tracking-tighter text-black">HERE</p>
                      </div>
                      <p className="text-[9px] font-bold text-black uppercase tracking-tight">Mail to hello@sapsecurityexpert.com</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Community Stats */}
                <Card className="rounded-[16px] border-[#E8ECF2] shadow-sm bg-white overflow-hidden">
                  <CardContent className="p-6 space-y-8">
                    <div className="text-center space-y-1.5">
                      <p className="text-[42px] font-bold text-[#0F172A] font-headline tracking-tighter leading-none">369</p>
                      <p className="text-[13px] font-bold text-[#64748B] uppercase tracking-wider">Active Community Members</p>
                      <Badge variant="outline" className="text-[10px] border-primary/20 bg-primary/5 text-primary font-black px-2 py-0.5">+14 this month</Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-100 flex flex-col items-center justify-center text-center">
                        <p className="text-2xl font-bold text-[#0F172A]">45</p>
                        <p className="text-[10px] text-[#64748B] font-bold uppercase tracking-tight">Discussions</p>
                      </div>
                      <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-100 flex flex-col items-center justify-center text-center">
                        <p className="text-2xl font-bold text-[#0F172A]">12</p>
                        <p className="text-[10px] text-[#64748B] font-bold uppercase tracking-tight">New Articles</p>
                      </div>
                      <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-100 col-span-2 flex items-center justify-between px-6">
                        <div className="space-y-0.5">
                          <p className="text-2xl font-bold text-[#0F172A]">24</p>
                          <p className="text-[10px] text-[#64748B] font-bold uppercase tracking-tight">Weekly Contributions</p>
                        </div>
                        <TrendingUp className="text-primary h-6 w-6 opacity-80" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Card */}
                <Card className="rounded-[16px] border-[#E8ECF2] bg-white shadow-sm overflow-hidden p-8 flex flex-col items-center text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#3B5998] flex items-center justify-center text-white shadow-lg">
                    <Mail className="h-7 w-7" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[22px] font-bold text-[#0F172A] leading-tight font-headline">Subscribe for Expert Insights</h3>
                    <p className="text-[14px] text-[#64748B] font-medium font-body">Check Latest Updates</p>
                  </div>
                  <div className="w-full space-y-4">
                    <div className="flex w-full rounded-[8px] overflow-hidden border border-[#F25140] shadow-sm">
                      <input 
                        placeholder="Type your email..." 
                        className="flex-1 px-4 py-3 bg-[#F8FAFC] text-[14px] outline-none placeholder:text-slate-400 min-w-0" 
                      />
                      <button className="bg-[#F25140] hover:bg-[#D94436] text-white px-6 py-3 text-[14px] font-black transition-colors whitespace-nowrap">
                        Subscribe
                      </button>
                    </div>
                    <div className="space-y-5">
                      <p className="text-[11px] text-[#64748B] leading-relaxed font-medium">
                        By subscribing you agree to <Link href="#" className="underline hover:text-primary">Substack's Terms of Use</Link>, <Link href="#" className="underline hover:text-primary">our Privacy Policy</Link> and our <Link href="#" className="underline hover:text-primary">Information collection notice</Link>
                      </p>
                      <div className="flex justify-center items-center gap-1 opacity-20 grayscale">
                         <div className="flex flex-col gap-[2px]">
                           <div className="w-3 h-2 bg-black rounded-[1px]" />
                           <div className="w-3 h-0.5 bg-black rounded-[1px]" />
                         </div>
                         <span className="text-[12px] font-black uppercase tracking-tighter ml-1">substack</span>
                      </div>
                    </div>
                  </div>
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
              <p className="mx-auto mt-2 max-w-[700px] text-muted-foreground md:text-xl font-body">
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
              <Button variant="outline" className="rounded-full px-8 border-slate-300 font-bold text-slate-600">View Research Repository</Button>
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
              <p className="mx-auto mt-2 max-w-[700px] text-slate-500 md:text-xl font-body">
                Deep-dive into specialized SAP security domains with practitioner-curated content.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {expertise.map(item => (
                <Card
                  key={item.title}
                  className="flex flex-col items-start p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-[16px] border-[#E8ECF2]"
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
                    <p className="text-slate-500 leading-relaxed font-body">{item.description}</p>
                  </CardContent>
                  <CardFooter className="p-0 pt-6 w-full border-t border-slate-100 mt-4">
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
              <p className="mx-auto mt-2 max-w-[700px] text-white/50 md:text-xl font-body">
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
                  <CardContent className="flex-grow p-0 pt-4 text-white/70 leading-relaxed font-medium font-body">
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
