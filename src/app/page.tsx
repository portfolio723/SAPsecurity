import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { ArticleCard } from '@/components/article-card';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { articles, expertise, tools, testimonials } from '@/lib/data';
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
  Briefcase,
  Cloud,
  Code,
  ShieldCheck,
  UserCheck,
  Users,
  Play,
  ArrowRight
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/icons';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                  <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
                  Trusted by 10,000+ SAP Professionals
                </div>
                <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  The Definitive Resource for
                  <br />
                  <span className="text-blue-600">SAP</span>{' '}
                  <span className="text-cyan-500">Security</span> Excellence
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Expert insights, actionable frameworks, and practical tools for SAP GRC, IAM, cybersecurity, and compliance professionals worldwide.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Button>
                  Subscribe Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">
                  <Play className="mr-2 h-4 w-4 fill-current" />
                  Explore Insights
                </Button>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t pt-8 text-center md:grid-cols-4">
              <div>
                <p className="text-4xl font-bold">500+</p>
                <p className="text-muted-foreground">Expert Articles</p>
              </div>
              <div>
                <p className="text-4xl font-bold">50K+</p>
                <p className="text-muted-foreground">Monthly Readers</p>
              </div>
              <div>
                <p className="text-4xl font-bold">15+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold">100%</p>
                <p className="text-muted-foreground">Vendor Neutral</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="featured-insights"
          className="w-full bg-muted/50 py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
                Featured Insights
              </h2>
              <p className="mx-auto mt-2 max-w-[700px] text-muted-foreground md:text-xl">
                Curated articles & videos to help you stay ahead of the curve.
              </p>
            </div>
            <Tabs defaultValue="all" className="w-full text-center">
              <TabsList className="mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="grc">GRC</TabsTrigger>
                <TabsTrigger value="iam">IAM</TabsTrigger>
                <TabsTrigger value="compliance">Compliance</TabsTrigger>
                <TabsTrigger value="cloud">Cloud</TabsTrigger>
                <TabsTrigger value="hardening">Hardening</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:max-w-7xl lg:grid-cols-4 lg:gap-8">
                  {articles.slice(0, 4).map(article => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            <div className="text-center">
              <Button variant="outline">View All Insights</Button>
            </div>
          </div>
        </section>

        <section
          id="articles"
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
                  Latest Blogs & Activity
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay up-to-date with the latest research, trends and activity from
                  our team of experts.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:max-w-7xl lg:grid-cols-3 lg:gap-8">
              {articles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            <div className="text-center">
                <Button variant="outline">Load More</Button>
            </div>
          </div>
        </section>

        <section
          id="expertise"
          className="w-full bg-muted/50 py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
                Explore by Expertise
              </h2>
              <p className="mx-auto mt-2 max-w-[700px] text-muted-foreground md:text-xl">
                Find the right solutions for your specific SAP security needs.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {expertise.map(item => (
                <Card
                  key={item.title}
                  className="flex flex-col items-start p-6"
                >
                  <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                    {item.icon === 'UserCheck' && <UserCheck size={24} />}
                    {item.icon === 'ShieldCheck' && <ShieldCheck size={24} />}
                    {item.icon === 'Briefcase' && <Briefcase size={24} />}
                    {item.icon === 'Cloud' && <Cloud size={24} />}
                    {item.icon === 'Code' && <Code size={24} />}
                    {item.icon === 'Users' && <Users size={24} />}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="mb-4 text-muted-foreground">
                    {item.description}
                  </p>
                  <Button variant="link" className="p-0">
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="w-full bg-gray-800 py-12 text-white md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
                Why SAP Professionals Trust Us
              </h2>
              <p className="mx-auto mt-2 max-w-[700px] text-gray-400 md:text-xl">
                Real feedback from real customers.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map(testimonial => (
                <Card
                  key={testimonial.name}
                  className="bg-gray-900 text-white"
                >
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="rounded-full bg-primary p-3">
                        <Users size={20} />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                        <CardDescription className="text-gray-400">
                          {testimonial.title}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{testimonial.quote}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="starter-kit"
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-12 text-white md:py-24 lg:py-32"
        >
          <div className="container flex flex-col items-center justify-between gap-8 px-4 text-center md:flex-row md:px-6 md:text-left">
            <div className="max-w-xl">
              <p className="font-semibold text-white/80">
                <span className="mr-2 rounded-full bg-white/20 px-3 py-1">
                  Free Download
                </span>
                SAP Security Starter Kit
              </p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                Get a comprehensive guide to kickstart your SAP security journey
                and learn how to manage your risk and compliance.
              </h2>
            </div>
            <form className="w-full max-w-sm space-y-2">
              <div className="flex flex-col gap-2 sm:flex-row">
                <Input
                  type="email"
                  placeholder="email@company.com"
                  className="max-w-lg flex-1 text-black"
                />
                <Button type="submit" variant="secondary" className='text-black'>
                  Download Kit
                </Button>
              </div>
              <p className="text-xs text-white/80">
                No credit card required. For professional use only.
              </p>
            </form>
          </div>
        </section>

        <section
          id="free-tools"
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
                Free Tools for SAP Security
              </h2>
              <p className="mx-auto mt-2 max-w-[700px] text-muted-foreground md:text-xl">
                A selection of free tools to help you analyze and secure your SAP landscape.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {tools.map(tool => (
                <Card key={tool.title}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">{tool.title}</h3>
                      <span className={`rounded-full px-3 py-1 text-sm ${tool.tag === 'Available' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>{tool.tag}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{tool.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button>Try Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <NewsletterSignup />
      </main>

      <footer className="w-full shrink-0 border-t bg-gray-900 py-12 text-gray-400">
        <div className="container grid grid-cols-2 gap-8 px-4 md:grid-cols-5 md:px-6">
          <div className="col-span-2 space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-bold text-white">SAP Security Expert Hub</span>
            </Link>
            <p>
              The definitive resource for SAP Security excellence.
            </p>
            <div className="flex space-x-4">
              <Link href="#"><Users className="h-5 w-5" /></Link>
              <Link href="#"><Users className="h-5 w-5" /></Link>
              <Link href="#"><Users className="h-5 w-5" /></Link>
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
            &copy; 2024 SAP Security Expert Hub. All rights reserved.
            </p>
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
