import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { ArticleCard } from '@/components/article-card';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { articles, expertise, testimonials } from '@/lib/data';
import { communityActivity, topContributors, trendingTopics } from '@/lib/community-data';
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
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { CommunityActivityCard } from '@/components/community-activity-card';
import { TopContributorItem } from '@/components/top-contributor-item';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


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

        <section id="community-spotlight" className="w-full bg-muted/50 py-12 md:py-20 lg:py-28">
          <div className="container px-4 md:px-6">
            <div className="mb-8 text-center md:mb-12">
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    SAP Security Community Live
                </h2>
                <p className="mx-auto mt-2 max-w-[700px] text-muted-foreground md:text-xl">
                    Live discussions from SAP security practitioners worldwide
                </p>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              {/* Left Column */}
              <div className="lg:col-span-8">
                <h3 className="mb-2 text-xl font-bold font-headline">Recent Community Activity</h3>
                <p className="mb-6 text-muted-foreground">Ask questions, share insights, and learn from real SAP security scenarios.</p>
                <div className="space-y-6">
                  {communityActivity.map(activity => (
                    <CommunityActivityCard key={activity.id} activity={activity} />
                  ))}
                </div>
                <div className="mt-8 text-center lg:text-left">
                  <Button variant="outline">View All Community Discussions <ArrowRight className="ml-2" /></Button>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-4">
                <div className="sticky top-24 space-y-8">
                    {/* Welcome Block */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-lg">Welcome to the SAP Security Community</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">A professional space to ask questions, share experiences, and collaborate with SAP security experts across GRC, IAG, and Cybersecurity.</p>
                        </CardContent>
                        <CardFooter className="flex-col items-stretch gap-2">
                             <Button style={{ backgroundColor: '#003472', color: 'white' }}>Sign in to Join the Discussion</Button>
                             <Button variant="outline">Create Free Account</Button>
                        </CardFooter>
                    </Card>

                    {/* Quick Actions */}
                    <Card>
                         <CardHeader>
                            <CardTitle className="font-headline text-lg">Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2">
                            <Button variant="outline"><MessageCircle className="mr-2"/>Ask a Question</Button>
                            <Button variant="outline"><Pencil className="mr-2"/>Share an Insight</Button>
                            <Button variant="outline"><BrainCircuit className="mr-2"/>Start a Discussion</Button>
                        </CardContent>
                    </Card>

                    {/* Trending Topics */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-lg">Trending Topics</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                           {trendingTopics.map(topic => (
                                <Badge key={topic} variant="secondary">{topic}</Badge>
                           ))}
                        </CardContent>
                        <CardFooter>
                            <Link href="#" className="text-sm font-semibold text-primary hover:underline flex items-center">
                                Browse All Topics <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </CardFooter>
                    </Card>
                    
                    {/* Top Contributors */}
                    <Card>
                         <CardHeader>
                            <CardTitle className="font-headline text-lg">Top Contributors This Week</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                           {topContributors.map(contributor => (
                               <TopContributorItem key={contributor.name} contributor={contributor} />
                           ))}
                        </CardContent>
                         <CardFooter>
                            <Link href="#" className="text-sm font-semibold text-primary hover:underline flex items-center">
                                View Leaderboard <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
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

    