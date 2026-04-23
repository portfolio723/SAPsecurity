import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
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
  Mail,
  Zap,
  ChevronRight,
  Target,
  Trophy,
  Clock,
  CheckCircle
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
              <p className="text-muted-foreground max-w-[600px] mx-auto mb-10">
                Follow this guided sequence to build your knowledge. Complete each phase to unlock the next level of expertise.
              </p>
              
              {/* Progress & Milestone Tracker */}
              <div className="max-w-xl mx-auto mb-16 space-y-4 bg-white p-6 border shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-5">
                   <Trophy className="w-24 h-24" />
                </div>
                <div className="flex items-center justify-between text-sm font-bold uppercase tracking-tight relative z-10">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Current Goal:</span>
                    <span className="text-foreground">Step 1 — SAP Basics</span>
                  </div>
                  <span className="text-primary font-mono">20% COMPLETE</span>
                </div>
                <Progress value={20} className="h-3 rounded-none bg-muted" />
                <div className="flex justify-between items-center pt-2 relative z-10">
                   <p className="text-xs text-muted-foreground font-medium">
                     You are here: <span className="text-primary">Phase 1</span>
                   </p>
                   <p className="text-xs font-bold text-foreground flex items-center gap-1">
                     Next Milestone: <span className="text-muted-foreground font-normal">Cybersecurity 101</span> <ArrowRight className="w-3 h-3 text-primary" />
                   </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative items-stretch">
              {/* Step 1 - ACTIVE/UNLOCKED */}
              <Card className="rounded-none border-2 border-primary shadow-[0_0_25px_rgba(242,81,64,0.3)] scale-105 z-10 relative bg-white flex flex-col">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-white border-none px-4 py-1 rounded-none uppercase text-[10px] font-bold tracking-widest shadow-lg">
                    CURRENT STEP
                  </Badge>
                </div>
                <CardHeader className="pb-2 pt-8">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4 text-xl shadow-md">
                    1
                  </div>
                  <CardTitle className="text-xl font-headline font-bold">SAP Basics</CardTitle>
                </CardHeader>
                <CardContent className="text-sm font-medium flex-grow">
                  Understand SAP system concepts, navigation, and core business modules. This is the bedrock of your career.
                  <div className="mt-4 p-2 bg-muted/50 border-l-2 border-primary text-[11px] text-muted-foreground">
                    Estimated Time: 4 Hours
                  </div>
                </CardContent>
                <CardFooter className="pt-4 flex flex-col gap-2">
                  <Button className="w-full bg-primary hover:bg-primary/90 rounded-none group py-6 text-base font-bold">
                    Start Here <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <p className="text-[10px] text-center text-muted-foreground uppercase tracking-tighter">
                    Unlocks Step 2: Cybersecurity 101
                  </p>
                </CardFooter>
              </Card>

              {/* Step 2 - LOCKED */}
              <Card className="rounded-none border-dashed border-2 opacity-60 bg-muted/50 flex flex-col grayscale pointer-events-none relative group">
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="bg-white/90 p-2 rounded-full shadow-sm">
                    <Lock className="w-6 h-6 text-muted-foreground" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-bold mb-4">2</div>
                  <CardTitle className="text-lg font-headline">Cybersecurity 101</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground flex-grow">
                  Learn fundamental security concepts that underpin SAP system protection.
                </CardContent>
                <CardFooter className="pt-4 opacity-50">
                  <Button variant="outline" className="w-full rounded-none" disabled>Locked</Button>
                </CardFooter>
              </Card>

              {/* Step 3 - LOCKED */}
              <Card className="rounded-none border-dashed border-2 opacity-60 bg-muted/50 flex flex-col grayscale pointer-events-none relative group">
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="bg-white/90 p-2 rounded-full shadow-sm">
                    <Lock className="w-6 h-6 text-muted-foreground" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-bold mb-4">3</div>
                  <CardTitle className="text-lg font-headline">Core SAP Security</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground flex-grow">
                  Dive into PFCG roles, authorizations, user administration, and profiles.
                </CardContent>
                <CardFooter className="pt-4 opacity-50">
                  <Button variant="outline" className="w-full rounded-none" disabled>Locked</Button>
                </CardFooter>
              </Card>

              {/* Step 4 - LOCKED */}
              <Card className="rounded-none border-dashed border-2 opacity-60 bg-muted/50 flex flex-col grayscale pointer-events-none relative group">
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="bg-white/90 p-2 rounded-full shadow-sm">
                    <Lock className="w-6 h-6 text-muted-foreground" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-bold mb-4">4</div>
                  <CardTitle className="text-lg font-headline">Hands-On Labs</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground flex-grow">
                  Practice role configuration and audits in a safe sandbox environment.
                </CardContent>
                <CardFooter className="pt-4 opacity-50">
                  <Button variant="outline" className="w-full rounded-none" disabled>Locked</Button>
                </CardFooter>
              </Card>

              {/* Step 5 - LOCKED */}
              <Card className="rounded-none border-dashed border-2 opacity-60 bg-muted/50 flex flex-col grayscale pointer-events-none relative group">
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="bg-white/90 p-2 rounded-full shadow-sm">
                    <Lock className="w-6 h-6 text-muted-foreground" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-bold mb-4">5</div>
                  <CardTitle className="text-lg font-headline">Certifications</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground flex-grow">
                  Validate your skills with official SAP Security and GRC exams.
                </CardContent>
                <CardFooter className="pt-4 opacity-50">
                  <Button variant="outline" className="w-full rounded-none" disabled>Locked</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Foundational Courses */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
              <h2 className="text-3xl font-headline font-bold flex items-center gap-2">
                <BookOpen className="text-primary" /> Foundational Courses
              </h2>
              <Badge variant="outline" className="w-fit rounded-none border-primary text-primary font-bold uppercase tracking-widest text-[10px] px-3">
                Recommended for Phase 1
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Course 1 */}
              <Card className="rounded-none hover:shadow-xl transition-all border-t-4 border-t-primary flex flex-col group">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-3">
                    <Badge className="bg-sap-blue rounded-none uppercase text-[10px] font-bold">Beginner</Badge>
                    <span className="flex items-center text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">
                      <Clock className="w-3 h-3 mr-1 text-primary" /> 4h 30m
                    </span>
                  </div>
                  <CardTitle className="font-headline text-xl font-bold group-hover:text-primary transition-colors">SAP Overview (SAPTEC)</CardTitle>
                  <CardDescription className="text-xs font-medium">The essential starting point for all SAP professionals.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-5 pt-4">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1">
                      <Target className="w-3 h-3" /> Outcome
                    </p>
                    <p className="text-sm font-medium leading-relaxed">
                      Master S/4HANA navigation, understand system architecture and core business modules.
                    </p>
                  </div>
                  <div className="p-3 bg-muted/30 text-[11px] font-medium italic border-l-2 border-primary leading-snug">
                    "Enroll in this first to understand the landscape you'll be securing."
                  </div>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button className="w-full rounded-none font-bold py-6 text-sm group" variant="default">
                    Start Course <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>

              {/* Course 2 */}
              <Card className="rounded-none hover:shadow-xl transition-all border-t-4 border-t-sap-blue flex flex-col group">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-3">
                    <Badge className="bg-muted text-foreground rounded-none uppercase text-[10px] font-bold">Intermediate</Badge>
                    <span className="flex items-center text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">
                      <Clock className="w-3 h-3 mr-1 text-primary" /> 8h 00m
                    </span>
                  </div>
                  <CardTitle className="font-headline text-xl font-bold group-hover:text-sap-blue transition-colors">Security & Authorizations</CardTitle>
                  <CardDescription className="text-xs font-medium">Core technical training for SAP Security admins.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-5 pt-4">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1">
                      <Target className="w-3 h-3" /> Outcome
                    </p>
                    <p className="text-sm font-medium leading-relaxed">
                      Deep dive into PFCG transactions, authorization objects, and role maintenance best practices.
                    </p>
                  </div>
                  <div className="p-3 bg-muted/30 text-[11px] font-medium italic border-l-2 border-sap-blue leading-snug">
                    "Follows Phase 1. Learn to translate business needs into technical roles."
                  </div>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button className="w-full rounded-none font-bold py-6 text-sm group bg-sap-blue hover:bg-sap-blue/90" variant="default">
                    Start Course <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>

              {/* Course 3 */}
              <Card className="rounded-none hover:shadow-xl transition-all border-t-4 border-t-foreground flex flex-col group">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-3">
                    <Badge className="bg-foreground text-background rounded-none uppercase text-[10px] font-bold">Fundamental</Badge>
                    <span className="flex items-center text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">
                      <Clock className="w-3 h-3 mr-1 text-primary" /> 3h 15m
                    </span>
                  </div>
                  <CardTitle className="font-headline text-xl font-bold group-hover:text-primary transition-colors">Cybersecurity 101</CardTitle>
                  <CardDescription className="text-xs font-medium">Contextual security knowledge for IT professionals.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-5 pt-4">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1">
                      <Target className="w-3 h-3" /> Outcome
                    </p>
                    <p className="text-sm font-medium leading-relaxed">
                      Understand encryption, firewalls, and network security to protect the whole landscape.
                    </p>
                  </div>
                  <div className="p-3 bg-muted/30 text-[11px] font-medium italic border-l-2 border-foreground leading-snug">
                    "Crucial context. Understand what's happening outside the SAP application."
                  </div>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button className="w-full rounded-none font-bold py-6 text-sm group bg-foreground hover:bg-foreground/90" variant="default">
                    Start Course <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
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
                <Card className="rounded-none border-l-4 border-l-primary p-6 shadow-sm">
                  <h3 className="text-xl font-headline font-bold mb-4 flex items-center gap-2">
                    <Laptop className="text-primary" /> Hands-On Practice
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Theory is not enough. To truly learn, you need a sandbox environment to practice role creation and user administration.
                  </p>
                  <ul className="space-y-3 mb-6 text-sm">
                    <li className="flex items-center gap-2 font-medium"><CheckCircle size={16} className="text-primary" /> Use SAP Developer Edition</li>
                    <li className="flex items-center gap-2 font-medium"><CheckCircle size={16} className="text-primary" /> Set up an SAP Trial Cloud instance</li>
                    <li className="flex items-center gap-2 font-medium"><CheckCircle size={16} className="text-primary" /> Practice user creation in transaction SU01</li>
                  </ul>
                  <Button className="w-full bg-sap-blue rounded-none py-6 font-bold uppercase tracking-wider text-xs">Access Demo Environment</Button>
                </Card>
                <Card className="rounded-none border-l-4 border-l-blue-600 p-6 shadow-sm">
                  <h3 className="text-xl font-headline font-bold mb-4 flex items-center gap-2">
                    <Award className="text-blue-600" /> Certification Paths
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div className="border-b pb-2">
                      <p className="font-bold">Associate Level</p>
                      <p className="text-muted-foreground text-xs font-medium">SAP Certified Technology Associate - System Security Architect</p>
                    </div>
                    <div className="border-b pb-2">
                      <p className="font-bold">Specialist Level</p>
                      <p className="text-muted-foreground text-xs font-medium">SAP Certified Technology Associate - Authorization and Auditing</p>
                    </div>
                    <div>
                      <p className="font-bold">Professional Level</p>
                      <p className="text-muted-foreground text-xs font-medium">SAP Certified Technology Professional - System Security Architect</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-6 rounded-none py-6 font-bold uppercase tracking-wider text-xs border-blue-600 text-blue-600 hover:bg-blue-50">View All Certifications</Button>
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
                <Card key={i} className="rounded-none border-none bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group">
                  <CardHeader className="p-4">
                    <CardTitle className="text-base font-headline font-bold group-hover:text-primary transition-colors">{res.title}</CardTitle>
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
                <p className="text-gray-400 font-medium">
                  New learners benefit from guidance and Q&A. Don't learn in isolation; join thousands of experts sharing insights daily.
                </p>
              </div>
              <div className="w-full md:w-1/3 bg-gray-800 p-8 rounded-none border border-gray-700 shadow-xl">
                <h3 className="text-xl font-bold mb-4">Have a Question?</h3>
                <p className="text-sm text-gray-400 mb-8 font-medium">Our experts are here to help you navigate your first steps in SAP Security.</p>
                <Button className="w-full bg-primary hover:bg-primary/90 rounded-none py-6 font-bold uppercase tracking-widest">Ask an Expert</Button>
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
