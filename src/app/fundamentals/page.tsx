import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  BookOpen, 
  ShieldCheck, 
  Users, 
  FileCheck, 
  Award, 
  GraduationCap, 
  Globe, 
  Laptop, 
  CheckCircle2,
  Lock,
  Search,
  MessageCircle,
  Linkedin,
  Youtube,
  Twitter,
  Mail
} from 'lucide-react';
import { Logo } from '@/components/icons';

export default function FundamentalsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-sap-blue py-16 md:py-24 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">
              SAP Security Fundamentals
            </h1>
            <p className="max-w-[800px] mx-auto text-lg md:text-xl text-white/80 mb-8">
              Start your journey to becoming an SAP Security expert. A structured, one-stop resource for novices and IT professionals pivoting to the SAP ecosystem.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-none px-8" asChild>
              <a href="#roadmap">Get Started</a>
            </Button>
          </div>
        </section>

        {/* Learning Roadmap */}
        <section id="roadmap" className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-headline font-bold mb-4">Your Learning Roadmap</h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Follow this step-by-step path to build your SAP Security knowledge from the ground up.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {/* Step 1 */}
              <Card className="rounded-none border-t-4 border-t-blue-500 shadow-md">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-4">1</div>
                  <CardTitle className="text-lg font-headline">SAP Basics</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Understand SAP system concepts, navigation, and core business modules.
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="rounded-none border-t-4 border-t-green-500 shadow-md">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold mb-4">2</div>
                  <CardTitle className="text-lg font-headline">Cybersecurity 101</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Learn fundamental security concepts that underpin SAP system protection.
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="rounded-none border-t-4 border-t-primary shadow-md">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-primary flex items-center justify-center font-bold mb-4">3</div>
                  <CardTitle className="text-lg font-headline">Core SAP Security</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Dive into PFCG roles, authorizations, user administration, and profiles.
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card className="rounded-none border-t-4 border-t-purple-500 shadow-md">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold mb-4">4</div>
                  <CardTitle className="text-lg font-headline">Hands-On Labs</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Practice role configuration and audits in a safe sandbox environment.
                </CardContent>
              </Card>

              {/* Step 5 */}
              <Card className="rounded-none border-t-4 border-t-yellow-500 shadow-md">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center font-bold mb-4">5</div>
                  <CardTitle className="text-lg font-headline">Certifications</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Validate your skills with official SAP Security and GRC exams.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Foundational Courses */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-headline font-bold mb-8 flex items-center gap-2">
              < BookOpen className="text-primary" /> Foundational Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="rounded-none hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">Level: Beginner</Badge>
                  <CardTitle className="font-headline">SAP Overview (SAPTEC)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">A free introduction covering S/4HANA fundamentals, system landscape, and basic navigation tools.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="p-0 text-primary">View Course <ArrowRight className="ml-1 h-4 w-4" /></Button>
                </CardFooter>
              </Card>

              <Card className="rounded-none hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">Level: Intermediate</Badge>
                  <CardTitle className="font-headline">SAP Security & Authorizations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">Deep dive into the PFCG transaction, authorization objects, and role maintenance best practices.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="p-0 text-primary">View Course <ArrowRight className="ml-1 h-4 w-4" /></Button>
                </CardFooter>
              </Card>

              <Card className="rounded-none hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">Level: Fundamental</Badge>
                  <CardTitle className="font-headline">Cybersecurity Essentials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">General security principles including encryption, firewalls, and IDS/IPS to provide context for SAP security.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="p-0 text-primary">View Course <ArrowRight className="ml-1 h-4 w-4" /></Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Concepts */}
        <section className="w-full py-16 md:py-24 bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-headline font-bold mb-6">Dive Into Core Concepts</h2>
                <p className="text-muted-foreground mb-8">
                  Understand the essential mechanisms that keep SAP systems secure. Master these foundations before moving to advanced GRC topics.
                </p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="font-headline text-lg">Role-Based Access Control (RBAC)</AccordionTrigger>
                    <AccordionContent>
                      The standard way to manage permissions in SAP. Users are assigned roles, which contain authorization objects that define what they can see and do.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="font-headline text-lg">Segregation of Duties (SoD)</AccordionTrigger>
                    <AccordionContent>
                      A key internal control designed to prevent error and fraud by ensuring that at least two individuals are responsible for the separate parts of any task.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="font-headline text-lg">Profiles vs Roles</AccordionTrigger>
                    <AccordionContent>
                      Understanding the technical relationship between PFCG roles and the generated profiles that reside in the database and are checked at runtime.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="font-headline text-lg">System Auditing (SM19/SM20)</AccordionTrigger>
                    <AccordionContent>
                      Setting up security audit logs to track critical activities like login failures, transaction execution, and role changes.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="space-y-6">
                <Card className="rounded-none border-l-4 border-l-primary p-6">
                  <h3 className="text-xl font-headline font-bold mb-4 flex items-center gap-2">
                    <Laptop className="text-primary" /> Hands-On Practice
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Theory is not enough. To truly learn, you need a sandbox environment to practice role creation and user administration.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-600" /> Use SAP Developer Edition</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-600" /> Set up an SAP Trial Cloud instance</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-600" /> Practice user creation in transaction SU01</li>
                  </ul>
                  <Button className="w-full bg-sap-blue rounded-none">Access Demo Environment</Button>
                </Card>
                <Card className="rounded-none border-l-4 border-l-blue-600 p-6">
                  <h3 className="text-xl font-headline font-bold mb-4 flex items-center gap-2">
                    <Award className="text-blue-600" /> Certification Paths
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-bold">Associate Level</p>
                      <p className="text-muted-foreground">SAP Certified Technology Associate - System Security Architect</p>
                    </div>
                    <div>
                      <p className="font-bold">Specialist Level</p>
                      <p className="text-muted-foreground">SAP Certified Technology Associate - Authorization and Auditing</p>
                    </div>
                    <div>
                      <p className="font-bold">Professional Level</p>
                      <p className="text-muted-foreground">SAP Certified Technology Professional - System Security Architect</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-6 rounded-none">View All Certifications</Button>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Resources */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-headline font-bold mb-8 text-center">Recommended Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Introduction to SAP GRC Access Control", desc: "Understand how GRC automates compliance and SoD checks." },
                { title: "Top 10 Security Transactions Every Admin Should Know", desc: "A curated list of essential T-Codes like PFCG, SU01, and SM20." },
                { title: "Understanding SAP NetWeaver Security Gateway", desc: "How SAP handles external connections and API security." },
                { title: "Best Practices for SAP Fiori Role Design", desc: "A guide to modern authorization concepts for the web interface." },
                { title: "How to Prepare for Your First SAP Audit", desc: "Checklists and common pitfalls to avoid during a security audit." },
                { title: "The Future of SAP IAM: Cloud vs On-Premise", desc: "Comparing classic GRC with the new SAP Identity Access Governance." }
              ].map((res, i) => (
                <Card key={i} className="rounded-none border-none bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer">
                  <CardHeader className="p-4">
                    <CardTitle className="text-base font-headline font-bold">{res.title}</CardTitle>
                    <CardDescription className="text-xs line-clamp-2">{res.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="w-full py-16 md:py-24 bg-gray-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-[600px]">
                <h2 className="text-3xl font-headline font-bold">Join the SAP Security Community</h2>
                <p className="text-gray-400">
                  New learners benefit from guidance and Q&A. Don't learn in isolation; join thousands of experts sharing insights daily.
                </p>
              </div>
              <div className="w-full md:w-1/3 bg-gray-800 p-8 rounded-none border border-gray-700">
                <h3 className="text-xl font-bold mb-4">Have a Question?</h3>
                <p className="text-sm text-gray-400 mb-6">Our experts are here to help you navigate your first steps in SAP Security.</p>
                <Button className="w-full bg-primary hover:bg-primary/90 rounded-none">Ask an Expert</Button>
              </div>
            </div>
          </div>
        </section>

        <NewsletterSignup />
      </main>

      <footer className="w-full shrink-0 border-t bg-gray-900 py-8 text-gray-400 md:py-12">
        <div className="container grid grid-cols-2 gap-8 px-4 md:grid-cols-5 md:px-6">
          <div className="col-span-2 space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Logo width={180} height={180} />
            </Link>
            <p className="text-sm">
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
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">Threat Detection</Link></li>
              <li><Link href="#" className="hover:text-white">Access Governance</Link></li>
              <li><Link href="#" className="hover:text-white">Code Security</Link></li>
              <li><Link href="#" className="hover:text-white">Compliance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Platform</h4>
             <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">Fundamentals</Link></li>
              <li><Link href="#" className="hover:text-white">Integrations</Link></li>
              <li><Link href="#" className="hover:text-white">Customers</Link></li>
              <li><Link href="#" className="hover:text-white">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Resources</h4>
             <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">Blog</Link></li>
              <li><Link href="#" className="hover:text-white">Webinars</Link></li>
              <li><Link href="#" className="hover:text-white">Whitepapers</Link></li>
              <li><Link href="#" className="hover:text-white">Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>
             <ul className="space-y-2 text-sm">
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
