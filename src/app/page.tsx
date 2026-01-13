
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { ArticleCard } from '@/components/article-card';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { articles, expertise, testimonials } from '@/lib/data';
import { communityActivity, topContributors, announcements, communityGroups } from '@/lib/community-data';
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
  Play,
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
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  MessageCircle,
  Pencil,
  BrainCircuit,
  Eye,
  MessageSquare,
  ThumbsUp,
  HelpCircle,
  Book,
  Hand,
  Tag,
  Search,
  PlusCircle,
  Rss,
  Users2,
  Clock,
  MessageCircle as MessageCircleIcon,
  Bookmark,
  Hash,
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
import { CommunityActivityCard } from '@/components/community-activity-card';
import { TopContributorItem } from '@/components/top-contributor-item';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">
      <Header />
      <main className="flex-1">
        
        <section className="w-full py-12 md:py-20 lg:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
                  Trusted by 10,000+ SAP Professionals
                </div>
                <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  The Definitive Resource for
                  <br />
                  <span className="text-primary">SAP Security</span> Excellence
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Expert insights, actionable frameworks, and practical tools for SAP GRC, IAM, cybersecurity, and compliance professionals worldwide.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Button>
                  Post Insight
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">
                  <Play className="mr-2 h-4 w-4 fill-current" />
                  Explore Insights
                </Button>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
              {articles.slice(0, 3).map(article => (
                <ArticleCard key={article.id} article={article} isTopArticle={true} />
              ))}
            </div>
          </div>
        </section>

        <section id="community" className="w-full bg-muted/50 py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-12 gap-8">
              {/* Left Column */}
              <div className="col-span-12 lg:col-span-3 space-y-8">
                <Card className="shadow-lg rounded-none">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold tracking-tight flex items-center gap-2 font-headline text-lg">
                        <Users2 /> Active Members
                      </h3>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">● 6 online</Badge>
                    </div>
                    <Tabs defaultValue="active" className="w-full">
                      <TabsList className="grid w-full grid-cols-3 h-auto">
                        <TabsTrigger value="newest">Newest</TabsTrigger>
                        <TabsTrigger value="active">Active</TabsTrigger>
                        <TabsTrigger value="top">Top</TabsTrigger>
                      </TabsList>
                      <TabsContent value="active" className="mt-4 space-y-4">
                         {topContributors.map(contributor => (
                           <div key={contributor.name} className="flex items-center gap-3">
                              <Avatar className="h-10 w-10">
                                <AvatarImage src={contributor.avatarUrl} alt={contributor.name} />
                                <AvatarFallback>{contributor.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-semibold text-sm">{contributor.name}</p>
                                <p className="text-xs text-muted-foreground">{contributor.role}</p>
                              </div>
                           </div>
                         ))}
                      </TabsContent>
                    </Tabs>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="link" className="w-full text-primary">View All Members <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </CardFooter>
                </Card>

                <Card className="shadow-lg rounded-none">
                  <CardHeader>
                    <h3 className="font-semibold tracking-tight flex items-center gap-2 font-headline text-lg">
                      <Hash /> Recent Topics
                    </h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {communityActivity.map(item => (
                       <div key={item.id} className="flex items-start gap-3 text-sm">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>{item.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold hover:text-primary cursor-pointer">{item.title.substring(0, 30)}...</p>
                            <p className="text-xs text-muted-foreground">By {item.author}</p>
                          </div>
                       </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                     <Button variant="link" className="w-full text-primary">Browse All Topics <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Center Column */}
              <div className="col-span-12 lg:col-span-6 space-y-8">
                <Card className="border bg-card shadow-lg overflow-hidden relative text-white rounded-none">
                  <Image src="/banner.jpg" alt="Featured Insight" width={1200} height={500} className="w-full object-cover h-[500px]"/>
                  <div className="absolute inset-0 bg-sap-blue/70 bg-gradient-to-t from-sap-blue/90 to-transparent"/>
                  <CardContent className="absolute bottom-0 p-6 space-y-3">
                     <Badge variant="secondary" className="bg-primary/80 text-primary-foreground">Featured Insight</Badge>
                     <h2 className="text-2xl font-bold font-headline">Optimizing SAP License Compliance: STAR vs LAW Explained</h2>
                     <p className="text-sm text-white/80">Understand how SAP licensing measurements actually work in real audits and how to reduce compliance risk without over-licensing.</p>
                     <div className="flex items-center gap-4 text-xs text-white/80">
                       <span className="flex items-center gap-1"><Clock size={14} /> 6 min read</span>
                       <span className="flex items-center gap-1"><ThumbsUp size={14} /> 48</span>
                       <span className="flex items-center gap-1"><MessageCircleIcon size={14} /> 12</span>
                     </div>
                      <Button variant="default" className="bg-primary">Read Full Insight <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <h3 className="font-semibold tracking-tight font-headline text-lg text-left">Recent Activity</h3>
                  {communityActivity.map(item => (
                    <Card key={item.id} className="shadow-lg flex rounded-none">
                       <div className="w-1/4">
                          <Image src={`https://picsum.photos/seed/${item.id}/200/200`} alt={item.title} width={200} height={200} className="object-cover h-full w-full"/>
                       </div>
                       <div className="w-3/4 p-4 flex flex-col">
                          <Badge variant="outline" className="w-fit mb-2">{item.category === 'SAP GRC' ? 'Security Q&A' : 'Community Insight'}</Badge>
                          <h3 className="font-bold font-headline">{item.title}</h3>
                          <p className="text-sm text-muted-foreground flex-grow my-2">{item.excerpt}</p>
                          <div className="text-xs text-muted-foreground flex items-center justify-between">
                            <span>👤 {item.author} • {item.postedTime}</span>
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1"><ThumbsUp size={14} /> {item.likes}</span>
                              <span className="flex items-center gap-1"><MessageCircleIcon size={14} /> {item.replies}</span>
                            </div>
                          </div>
                          <Button variant="link" className="p-0 h-auto justify-start mt-2 text-primary">
                            {item.category === 'SAP GRC' ? 'View Answers' : 'Read & Join Discussion'}
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                       </div>
                    </Card>
                  ))}
                </div>
                 <div className="text-center">
                    <Button variant="outline">
                      View All Community Activity
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
              </div>

              {/* Right Column */}
              <div className="col-span-12 lg:col-span-3 space-y-8">
                 <Card className="shadow-lg rounded-none">
                    <CardHeader>
                      <h3 className="font-semibold tracking-tight flex items-center gap-2 font-headline text-lg">
                        <Rss/> Announcements
                      </h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {announcements.map((ann) => (
                        <div key={ann.title} className="text-sm">
                           <p className="font-semibold hover:text-primary cursor-pointer">{ann.title}</p>
                           <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                             <span>{ann.date}</span>
                             <span className="flex items-center gap-1"><ThumbsUp size={12} /> {ann.likes}</span>
                             <span className="flex items-center gap-1"><MessageCircleIcon size={12} /> {ann.comments}</span>
                           </div>
                        </div>
                      ))}
                    </CardContent>
                    <CardFooter>
                       <Button variant="link" className="w-full text-primary">View All Announcements <ArrowRight className="ml-2 h-4 w-4" /></Button>
                    </CardFooter>
                 </Card>

                 <Card className="shadow-lg rounded-none">
                    <CardHeader>
                       <h3 className="font-semibold tracking-tight flex items-center gap-2 font-headline text-lg">
                         <Users /> Community Groups
                       </h3>
                       <Tabs defaultValue="popular" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 h-auto">
                          <TabsTrigger value="newest">Newest</TabsTrigger>
                          <TabsTrigger value="active">Active</TabsTrigger>
                          <TabsTrigger value="popular">Popular</TabsTrigger>
                        </TabsList>
                        <TabsContent value="popular" className="mt-4 space-y-4">
                          {communityGroups.map(group => (
                            <div key={group.name} className="flex items-center gap-3">
                              <Avatar className="h-10 w-10">
                                <AvatarImage src={group.avatarUrl} alt={group.name} />
                                <AvatarFallback>{group.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-semibold text-sm">{group.name}</p>
                              </div>
                            </div>
                          ))}
                        </TabsContent>
                       </Tabs>
                    </CardHeader>
                    <CardFooter>
                      <Button variant="link" className="w-full text-primary">View All Groups <ArrowRight className="ml-2 h-4 w-4" /></Button>
                    </CardFooter>
                 </Card>
              </div>
            </div>
          </div>
        </section>
      
        <section
          id="featured-insights"
          className="w-full bg-muted/50 py-12 md:py-20 lg:py-28"
        >
          <div className="container px-4 md:px-6">
            <div className="mb-8 text-center md:mb-12">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Featured Insights
              </h2>
              <p className="mx-auto mt-2 max-w-[700px] text-muted-foreground md:text-xl">
                Curated articles & videos to help you stay ahead of the curve.
              </p>
            </div>
            <Tabs defaultValue="all" className="w-full text-center">
              <TabsList className="mb-8 inline-flex h-auto flex-wrap justify-center md:mb-12">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="grc">GRC</TabsTrigger>
                <TabsTrigger value="iam">IAM</TabsTrigger>
                <TabsTrigger value="compliance">Compliance</TabsTrigger>
                <TabsTrigger value="cloud">Cloud</TabsTrigger>
                <TabsTrigger value="hardening">Hardening</TabsTrigger>
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
              <Button variant="outline">View All Insights</Button>
            </div>
          </div>
        </section>

        <section
          id="articles"
          className="w-full py-12 md:py-20 lg:py-28"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Latest Blogs & Activity
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Stay updated with the newest insights from our community of SAP security experts.
                </p>
                 <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Lock className="h-4 w-4" />
                  <span>Login required to read full articles</span>
                </div>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 sm:grid-cols-2 md:py-12 lg:max-w-none lg:grid-cols-3 lg:gap-8">
              {articles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="expertise"
          className="w-full bg-muted/50 py-12 md:py-20 lg:py-28"
        >
          <div className="container px-4 md:px-6">
            <div className="mb-8 text-center md:mb-12">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Explore by Expertise
              </h2>
              <p className="mx-auto mt-2 max-w-[700px] text-muted-foreground md:text-xl">
                Deep-dive into specialized SAP security domains with expert-curated content.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {expertise.map(item => (
                <Card
                  key={item.title}
                  className="flex flex-col items-start p-6 transition-shadow duration-300 hover:shadow-lg"
                >
                  <CardHeader className="flex flex-row items-center gap-4 p-0">
                    <div className="rounded-lg bg-primary/10 p-3 text-primary">
                      {item.icon === 'Shield' && <Shield size={24} />}
                      {item.icon === 'Network' && <Network size={24} />}
                      {item.icon === 'Lock' && <Lock size={24} />}
                      {item.icon === 'FileCheck' && <FileCheck size={24} />}
                      {item.icon === 'Cloud' && <Cloud size={24} />}
                      {item.icon === 'KeyRound' && <KeyRound size={24} />}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-headline">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow p-0 pt-4">
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter className="p-0 pt-4">
                    <Link
                      href="#"
                      className="flex items-center text-sm font-semibold text-primary hover:underline"
                    >
                      {item.articles} articles
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="w-full bg-gray-800 py-12 text-white md:py-20 lg:py-28"
        >
          <div className="container px-4 md:px-6">
            <div className="mb-8 text-center md:mb-12">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why SAP Professionals Trust Us
              </h2>
              <p className="mx-auto mt-2 max-w-[700px] text-gray-400 md:text-xl">
                Built by SAP security experts, for SAP security experts.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map(testimonial => (
                <Card
                  key={testimonial.name}
                  className="flex flex-col items-start bg-gray-900 p-6 text-left text-white md:p-8"
                >
                  <div className="mb-4 rounded-full bg-primary/20 p-3 text-primary">
                    {testimonial.icon === 'CheckCircle' && <CheckCircle size={28} />}
                    {testimonial.icon === 'Award' && <Award size={28} />}
                    {testimonial.icon === 'Target' && <Target size={28} />}
                  </div>
                  <CardHeader className="p-0">
                    <CardTitle className="text-xl font-headline">{testimonial.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow p-0 pt-4">
                    <p className="text-gray-300">{testimonial.quote}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <NewsletterSignup />
      </main>

      <footer className="w-full shrink-0 border-t bg-gray-900 py-8 text-gray-400 md:py-12">
        <div className="container grid grid-cols-2 gap-8 px-4 md:grid-cols-5 md:px-6">
          <div className="col-span-2 space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-white">SAP Security Expert</span>
            </Link>
            <p>
              The definitive resource for SAP Security excellence.
            </p>
            <div className="flex space-x-2">
              <Link href="#" className="p-2 rounded-md hover:bg-gray-700"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="p-2 rounded-md hover:bg-gray-700"><Linkedin className="h-5 w-5" /></Link>
              <Link href="#" className="p-2 rounded-md hover:bg-gray-700"><Youtube className="h-5 w-5" /></Link>
              <Link href="#" className="p-2 rounded-md hover:bg-gray-700"><Mail className="h-5 w-5" /></Link>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Threat Detection</Link></li>
              <li><Link href="#" className="hover:text-white">Access Governance</Link></li>
              <li><Link href="#" className="hover:text-white">Code Security</Link></li>
              <li><Link href="#" className="hover:text-white">Compliance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Platform</h4>
             <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Platform Overview</Link></li>
              <li><Link href="#" className="hover:text-white">Integrations</Link></li>
              <li><Link href="#" className="hover:text-white">Customers</Link></li>
              <li><Link href="#" className="hover:text-white">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Resources</h4>
             <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Blog</Link></li>
              <li><Link href="#" className="hover:text-white">Webinars</Link></li>
              <li><Link href="#" className="hover:text-white">Whitepapers</Link></li>
              <li><Link href="#" className="hover:text-white">Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>
             <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">About Us</Link></li>
              <li><Link href="#" className="hover:text-white">Careers</Link></li>
              <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-6 px-4 md:flex-row md:px-6">
            <p className="text-xs">
            © 2026 SAP Security Expert. All rights reserved.
            </p>
            <p className="text-xs">Developed by @Web Anatomy</p>
            <nav className="flex gap-4 text-xs sm:gap-6">
                <Link href="#" className="hover:underline">Privacy Policy</Link>
                <Link href="#" className="hover:underline">Terms of Service</Link>
                <Link href="#" className="hover:underline">Cookie Policy</Link>
            </nav>
        </div>
      </footer>
    </div>
  );
}
