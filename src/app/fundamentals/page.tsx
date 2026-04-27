'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowRight, 
  BookOpen, 
  ShieldCheck, 
  Users, 
  FileCheck, 
  Lock,
  Search,
  Target,
  Trophy,
  Clock,
  Cpu,
  UserPlus,
  Settings,
  Info,
  UserCircle,
  HardHat,
  ShieldAlert,
  CheckCircle2,
  Lightbulb,
  FlaskConical,
  ClipboardCheck,
  ChevronDown,
  Monitor,
  Database,
  Terminal
} from 'lucide-react';
import { cn } from '@/lib/utils';

type Persona = 'beginner' | 'basis' | 'cyber';

export default function FundamentalsPage() {
  const [persona, setPersona] = useState<Persona>('beginner');
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      if (hero) {
        setIsScrolledPastHero(window.scrollY > hero.offsetHeight - 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const personaContent = {
    beginner: {
      title: "New to IT / SAP",
      desc: "Focus on understanding the landscape first. Don't worry about technical code yet.",
      strategy: "Full Path: Start with Step 1.",
      startStep: 1
    },
    basis: {
      title: "SAP Basis Admin",
      desc: "You know the system; now learn to secure it. Pivot your career to GRC.",
      strategy: "Skip Basics: Start from Step 3 (Core Security).",
      startStep: 3
    },
    cyber: {
      title: "Cybersecurity Pro",
      desc: "Apply your security knowledge to the SAP stack. Bridge the gap.",
      strategy: "Bridge Gap: Jump to Step 2 (SAP Layer).",
      startStep: 2
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 140; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] text-foreground">
      <Header />
      
      {/* 1. STICKY LEARNING BAR */}
      <div className={cn(
        "fixed top-16 md:top-20 left-0 w-full z-40 bg-white/95 backdrop-blur-md border-b shadow-md transition-all duration-500 transform",
        isScrolledPastHero ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      )}>
        <div className="container px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
             <Badge className="bg-primary px-3 py-1 font-black">STEP {personaContent[persona].startStep}</Badge>
             <div className="hidden sm:block">
                <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">Current Action</p>
                <p className="text-sm font-bold truncate">Mastering SAP Navigation</p>
             </div>
          </div>
          <div className="flex items-center gap-6 flex-1 max-w-md mx-8">
            <div className="flex-1 hidden md:block">
              <Progress value={progress} className="h-2 bg-muted" />
            </div>
            <span className="text-xs font-black whitespace-nowrap text-primary">{progress}% JOURNEY COMPLETE</span>
          </div>
          <Button size="sm" onClick={() => scrollToSection('step-1-content')} className="bg-primary font-bold">
            Resume <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>

      <main className="flex-1">
        {/* 2. DYNAMIC HERO */}
        <section id="hero" className="w-full bg-sap-blue py-20 md:py-32 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
          <div className="container px-4 md:px-6 text-center relative z-10">
            <Badge className="mb-6 bg-primary/20 text-white border-primary/30 px-4 py-1 uppercase tracking-widest text-xs font-bold">Expert-Led Roadmap</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-headline font-bold mb-6 tracking-tighter leading-tight">
              From Zero to <span className="text-primary">SAP Expert</span>
            </h1>
            <p className="mx-auto mt-2 max-w-[800px] text-white/70 md:text-xl leading-relaxed mb-10">
              Tired of scattered tutorials? We built the single, outcome-driven path to your career in SAP Security.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={() => scrollToSection('path-selector')} className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg font-black uppercase tracking-widest text-white transition-all hover:scale-105">
                Get Started <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg" 
                onClick={() => scrollToSection('roadmap')} 
                className="px-8 py-6 border-2 border-white bg-white text-sap-blue hover:bg-transparent hover:text-white text-lg font-black uppercase tracking-widest transition-all"
              >
                View Roadmap
              </Button>
            </div>
          </div>
        </section>

        {/* 3. PERSONA SELECTOR */}
        <section id="path-selector" className="w-full py-16 md:py-24 bg-white border-b scroll-mt-20">
          <div className="container px-4 md:px-6 text-center">
            <div className="mb-12 max-w-2xl mx-auto">
              <Badge className="mb-4 bg-muted text-muted-foreground font-black px-3 py-1">ONBOARDING</Badge>
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Choose Your Starting Point</h2>
              <p className="mx-auto mt-2 max-w-[700px] text-muted-foreground md:text-lg">Select the profile that best describes your background to unlock a custom learning strategy.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {(['beginner', 'basis', 'cyber'] as Persona[]).map((pKey) => {
                const active = persona === pKey;
                const Icon = pKey === 'beginner' ? UserCircle : pKey === 'basis' ? HardHat : ShieldAlert;
                
                return (
                  <button 
                    key={pKey}
                    onClick={() => {
                      setPersona(pKey);
                      setProgress(pKey === 'beginner' ? 0 : pKey === 'cyber' ? 25 : 50);
                    }}
                    className={cn(
                      "p-8 border-2 text-left transition-all flex flex-col items-center text-center gap-6 group rounded-lg",
                      active ? "border-primary bg-primary/5 shadow-xl scale-105 ring-4 ring-primary/10" : "border-muted hover:border-primary/50 bg-white hover:scale-[1.02]"
                    )}
                  >
                    <div className={cn(
                      "p-5 rounded-full transition-all duration-500",
                      active ? "bg-primary text-white scale-110" : "bg-muted text-muted-foreground group-hover:bg-primary/10"
                    )}>
                      <Icon className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1 uppercase tracking-tight">{personaContent[pKey].title}</h3>
                      <p className="text-xs text-muted-foreground font-bold">{active ? "Profile Active" : "Click to select this profile"}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-16 p-10 bg-sap-blue text-white max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center animate-fade-in shadow-2xl relative overflow-hidden rounded-lg">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
              <div className="flex-1 text-left space-y-3">
                <Badge className="bg-primary text-white font-black uppercase px-3 py-0.5">Strategy Unlocked</Badge>
                <h4 className="text-2xl font-bold">Welcome, {personaContent[persona].title}</h4>
                <p className="text-white/70 text-lg leading-relaxed">
                  {personaContent[persona].desc} <span className="text-white font-bold underline decoration-primary underline-offset-4">{personaContent[persona].strategy}</span>
                </p>
              </div>
              <Button size="lg" onClick={() => scrollToSection('roadmap')} className="bg-white text-sap-blue hover:bg-primary hover:text-white font-black px-8 py-6 text-base uppercase transition-all rounded-lg">
                View My Roadmap <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* 4. ROADMAP WITH PROGRESS */}
        <section id="roadmap" className="w-full py-16 md:py-24 bg-[#F1F5F9] relative scroll-mt-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">The Expert Path</h2>
              <p className="mx-auto mt-2 max-w-[700px] text-muted-foreground md:text-xl">Follow this sequence to transform from an outsider to a certified SAP Security Architect.</p>
              
              <div className="mt-10 max-w-md mx-auto space-y-2">
                 <div className="flex justify-between text-xs font-black uppercase tracking-widest text-primary">
                    <span>Journey Progress</span>
                    <span>{progress}% Complete</span>
                 </div>
                 <Progress value={progress} className="h-3 bg-white" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              <div className="md:col-span-1 relative">
                <Card 
                  className={cn(
                    "border-t-8 border-t-primary shadow-2xl z-20 relative bg-white flex flex-col transition-all hover:-translate-y-2 cursor-pointer group h-full rounded-lg",
                    personaContent[persona].startStep === 1 ? "scale-105 border-4 border-primary ring-8 ring-primary/10" : "opacity-70 grayscale"
                  )}
                  onClick={() => scrollToSection('step-1-content')}
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30">
                    <Badge className="bg-primary text-white px-4 py-1.5 font-black uppercase text-[10px] tracking-widest shadow-xl ring-2 ring-white">
                      {personaContent[persona].startStep === 1 ? "YOU ARE HERE" : "STEP 1"}
                    </Badge>
                  </div>
                  <CardHeader className="pt-12 pb-4 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-black mb-6 text-2xl shadow-lg mx-auto transition-transform group-hover:scale-105">1</div>
                    <CardTitle className="text-xl font-bold uppercase tracking-tighter">SAP Basics</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4 pb-8">
                    <p className="text-muted-foreground text-sm font-bold leading-snug">Master navigation, S/4HANA UI, and system core.</p>
                    <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                       <div className="flex items-center justify-center gap-1.5 text-[10px] font-black uppercase text-primary">
                         <Clock className="w-3.5 h-3.5" />
                         <span>2.5h Total</span>
                       </div>
                       <div className="text-[10px] font-black uppercase text-primary text-center">
                         Outcome: SAP Navigator
                       </div>
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto p-0">
                    <Button className="w-full rounded-t-none rounded-b-lg py-7 bg-primary hover:bg-primary/90 font-black text-white uppercase tracking-widest text-xs">
                      Start Step 1 <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </CardFooter>
                </Card>
                <div className="hidden md:block absolute top-1/2 -right-8 w-8 h-0.5 bg-muted-foreground/20 z-0" />
              </div>

              {[
                { n: 2, title: "Cybersecurity 101", desc: "Security architecture and network concepts.", outcome: "Foundation", time: "6h" },
                { n: 3, title: "Core Security", desc: "PFCG, Auth Objects, and User Admin.", outcome: "Security Admin", time: "12h" },
                { n: 4, title: "Hands-On Labs", desc: "Real system role building and auditing.", outcome: "Consultant Ready", time: "20h" },
                { n: 5, title: "Certifications", desc: "Get certified and land your first role.", outcome: "Certified Architect", time: "Ongoing" }
              ].map((step, idx) => {
                const isCurrent = personaContent[persona].startStep === step.n;
                const isLocked = personaContent[persona].startStep < step.n;
                
                return (
                  <div key={step.n} className="relative">
                    <Card className={cn(
                      "h-full flex flex-col bg-white transition-all border-t-8 group relative rounded-lg",
                      isCurrent ? "scale-105 border-t-primary shadow-xl border-4 border-primary" : "border-t-muted opacity-60",
                      isLocked ? "grayscale" : ""
                    )}>
                      {isLocked && (
                         <div className="absolute inset-0 flex items-center justify-center z-30 bg-white/40 backdrop-blur-[1px]">
                            <div className="bg-white p-3 rounded-full shadow-lg border border-muted ring-4 ring-muted/10">
                              <Lock className="w-5 h-5 text-muted-foreground/50" />
                            </div>
                         </div>
                      )}
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30">
                        <Badge className={cn("px-4 py-1.5 font-black text-[10px] uppercase tracking-widest", isCurrent ? "bg-primary text-white shadow-xl ring-2 ring-white" : "bg-muted text-muted-foreground")}>
                          {isCurrent ? "YOU ARE HERE" : `STEP ${step.n}`}
                        </Badge>
                      </div>
                      <CardHeader className="pt-12 text-center">
                        <div className={cn("w-12 h-12 rounded-full flex items-center justify-center font-black mb-4 mx-auto text-lg shadow-md", isCurrent ? "bg-primary text-white" : "bg-muted text-muted-foreground")}>{step.n}</div>
                        <CardTitle className="text-lg font-bold uppercase tracking-tighter">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center pb-8 space-y-4">
                        <p className="text-xs font-medium text-muted-foreground leading-snug">{step.desc}</p>
                        {isCurrent && (
                          <div className="bg-muted/50 p-3 rounded-lg space-y-1.5">
                            <div className="flex items-center justify-center gap-1.5 text-[9px] font-black uppercase text-primary">
                              <Clock className="w-3 h-3" />
                              <span>{step.time} Total</span>
                            </div>
                            <div className="text-[9px] font-black uppercase text-primary text-center">
                              Outcome: {step.outcome}
                            </div>
                          </div>
                        )}
                      </CardContent>
                      <CardFooter className="mt-auto p-0">
                         <Button variant={isCurrent ? "default" : "outline"} className={cn("w-full rounded-t-none rounded-b-lg py-5 font-black uppercase text-[10px] tracking-widest", isCurrent ? "bg-primary text-white border-none" : "")}>
                           {isLocked ? "Locked" : `Start Step ${step.n}`}
                         </Button>
                      </CardFooter>
                    </Card>
                    {idx < 3 && <div className="hidden md:block absolute top-1/2 -right-8 w-8 h-0.5 bg-muted-foreground/20 z-0" />}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. SIMPLIFIED CORE CONCEPTS */}
        <section id="step-1-content" className="w-full py-16 md:py-24 bg-white scroll-mt-24">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-primary/10 text-primary border-none px-3 py-1 font-black mb-4 uppercase">Phase 1: Foundations</Badge>
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">Master the Core</h2>
              <p className="mx-auto mt-4 text-muted-foreground md:text-xl">
                We've broken down Step 1 into three high-impact modules. Complete these to build your foundational SAP knowledge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border shadow-lg hover:shadow-xl transition-all group flex flex-col h-full rounded-lg">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-primary text-white font-black uppercase text-[9px] px-2">LEARN</Badge>
                    <span className="text-[10px] font-black text-muted-foreground">⏱ 45m</span>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">SAP Architecture (SAPTEC)</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-medium">Understand how SAP systems work behind the scenes, from the database to the UI.</p>
                  <ul className="text-xs font-bold space-y-2">
                    <li className="flex items-center gap-2 text-primary"><CheckCircle2 className="w-4 h-4" /> Three-Tier Architecture</li>
                    <li className="flex items-center gap-2 text-primary"><CheckCircle2 className="w-4 h-4" /> Client Concept & SID</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button className="w-full py-6 font-black text-base bg-primary hover:bg-primary/90 text-white rounded-lg group">
                    Start Learning <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border shadow-lg hover:shadow-xl transition-all group flex flex-col h-full rounded-lg">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-sap-blue text-white font-black uppercase text-[9px] px-2">UNDERSTAND</Badge>
                    <span className="text-[10px] font-black text-muted-foreground">⏱ 1h 15m</span>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-sap-blue transition-colors">S/4HANA Navigation</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-medium">Master the SAP GUI and Fiori Launchpad. Learn the shortcuts the experts use.</p>
                  <ul className="text-xs font-bold space-y-2">
                    <li className="flex items-center gap-2 text-sap-blue"><CheckCircle2 className="w-4 h-4" /> T-Code Mastery</li>
                    <li className="flex items-center gap-2 text-sap-blue"><CheckCircle2 className="w-4 h-4" /> Personalizing User Settings</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button className="w-full py-6 font-black text-base bg-sap-blue hover:bg-sap-blue/90 text-white rounded-lg group">
                    Explore Navigation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border shadow-lg hover:shadow-xl transition-all group flex flex-col h-full rounded-lg">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-foreground text-background font-black uppercase text-[9px] px-2">TEST</Badge>
                    <span className="text-[10px] font-black text-muted-foreground">⏱ 15m Quiz</span>
                  </div>
                  <CardTitle className="text-xl font-bold">Foundations Quiz</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-medium">Verify your knowledge. A score of 80% or higher is required to unlock Step 2.</p>
                  <div className="bg-muted/30 p-4 rounded-lg flex items-center gap-3 border">
                     <Trophy className="w-8 h-8 text-primary" />
                     <p className="text-[11px] font-bold text-muted-foreground leading-snug">Passing unlocks the <span className="text-foreground">Security Roadmap</span> preview.</p>
                  </div>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button className="w-full py-6 font-black text-base bg-foreground hover:bg-foreground/90 text-white rounded-lg group">
                    Take Quiz <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* 6. PRACTICE SECTION */}
        <section id="practice" className="w-full py-20 md:py-32 bg-foreground text-white relative overflow-hidden scroll-mt-20">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/2 pointer-events-none" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-8 text-left">
                <Badge className="bg-primary text-white px-5 py-1 uppercase text-[10px] font-black tracking-widest shadow-xl ring-2 ring-primary/20">TRANSFORMATION</Badge>
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl leading-none">From Theory to Real Work.</h2>
                <p className="mx-auto mt-2 text-white/60 md:text-xl/relaxed max-w-xl">
                  In the real world, you build roles, troubleshoot access, and audit users. We provide the sandbox and the scenarios.
                </p>
                <div className="flex gap-3 items-center">
                   <div className="p-3 bg-white/5 border border-white/10 rounded-lg flex items-center gap-3">
                      <Monitor className="text-primary w-5 h-5" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Sandbox Access Included</span>
                   </div>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-7 text-xl font-black uppercase tracking-widest transition-all hover:scale-105 rounded-lg">
                  Enter The Lab
                </Button>
              </div>
              <div className="lg:w-1/2 w-full space-y-4">
                {[
                  { n: "01", title: "Create Your First User (SU01)", desc: "Outcome: Manage user lifecycle effectively.", icon: <UserPlus /> },
                  { n: "02", title: "Build Your First Role (PFCG)", desc: "Outcome: Generate technical auth profiles.", icon: <Settings /> },
                  { n: "03", title: "The Security Audit (SM20)", desc: "Outcome: Track critical system access.", icon: <Database /> }
                ].map((lab, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-8 flex gap-6 hover:bg-white/10 transition-all group backdrop-blur-sm cursor-pointer hover:-translate-x-1 rounded-lg">
                    <div className="text-primary font-black text-4xl opacity-30 group-hover:opacity-100 transition-opacity leading-none">{lab.n}</div>
                    <div className="space-y-1">
                       <h3 className="text-xl font-bold flex items-center gap-3 group-hover:text-primary transition-colors uppercase tracking-tight">
                         <div className="w-6 h-6 text-white group-hover:text-primary transition-colors">{lab.icon}</div>
                         {lab.title}
                       </h3>
                       <p className="text-white/50 text-sm font-medium leading-tight">{lab.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. VISUAL CONCEPTS */}
        <section className="w-full py-16 md:py-24 bg-white scroll-mt-20 border-b">
          <div className="container px-4 md:px-6">
             <div className="text-center mb-16 max-w-3xl mx-auto">
                <Badge className="bg-muted text-muted-foreground px-3 py-1 font-black mb-4">KNOWLEDGE PILLARS</Badge>
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Expert Concepts</h2>
                <p className="mx-auto mt-2 max-w-[700px] text-muted-foreground md:text-xl">Master these four fundamental pillars. They represent 80% of daily security operations.</p>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "RBAC Model", desc: "Standard way to manage permissions via roles.", icon: <ShieldCheck className="text-primary" />, example: "Purchasing Manager Role" },
                  { title: "SoD Controls", desc: "Preventing fraud by splitting critical tasks.", icon: <Users className="text-sap-blue" />, example: "P2P Process Separation" },
                  { title: "Profiles/Roles", desc: "The technical runtime connection for auth.", icon: <FileCheck className="text-foreground" />, example: "Runtime Profile Generation" },
                  { title: "Audit Logs", desc: "Tracking system events for compliance.", icon: <Search className="text-primary" />, example: "Critical T-Code Monitoring" }
                ].map((concept, idx) => (
                  <Card key={idx} className="border shadow-lg hover:shadow-xl transition-all p-6 flex flex-col group rounded-lg">
                     <div className="mb-6 w-12 h-12 bg-muted/30 flex items-center justify-center group-hover:scale-105 transition-transform rounded-md">{concept.icon}</div>
                     <CardTitle className="text-xl font-bold mb-3 uppercase tracking-tighter">{concept.title}</CardTitle>
                     <CardContent className="p-0 flex-grow">
                        <p className="text-muted-foreground text-sm font-bold mb-6 leading-snug">{concept.desc}</p>
                        <div className="bg-muted/50 p-3 border-l-4 border-primary rounded-r-md">
                           <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mb-1">Real Example</p>
                           <p className="text-xs font-black text-foreground">{concept.example}</p>
                        </div>
                     </CardContent>
                  </Card>
                ))}
             </div>
          </div>
        </section>

        {/* 8. CERTIFICATIONS */}
        <section id="certifications" className="w-full py-16 md:py-24 bg-[#F8FAFC] scroll-mt-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 border-b-4 border-sap-blue pb-8">
              <div className="space-y-3 text-left">
                <Badge className="bg-sap-blue text-white px-3 py-1 font-black">THE END GOAL</Badge>
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">Certification Path</h2>
                <p className="mx-auto mt-2 text-muted-foreground md:text-xl max-w-xl">Validate your expertise with recognized credentials. Recommended <span className="text-primary font-black underline decoration-primary underline-offset-4">after completing Step 4</span>.</p>
              </div>
              <Button size="lg" variant="outline" className="border-2 border-sap-blue text-sap-blue font-black hover:bg-sap-blue hover:text-white px-8 py-6 rounded-lg">View Exam Details</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Associate Level", level: "Entry", border: "border-l-primary", desc: "Essential first step for System Security Architects." },
                { title: "Specialist Level", level: "Specialist", border: "border-l-sap-blue", desc: "Focus on Authorization and Audit management." },
                { title: "Professional Level", level: "Advanced", border: "border-l-foreground", desc: "For lead enterprise-wide security positions." }
              ].map((cert, idx) => (
                <div key={idx} className={cn("p-10 border-l-8 bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl flex flex-col group rounded-r-lg", cert.border)}>
                  <Badge className="mb-6 bg-muted text-muted-foreground font-black uppercase text-[9px] w-fit">LEVEL: {cert.level}</Badge>
                  <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors uppercase tracking-tighter">{cert.title}</h3>
                  <p className="text-muted-foreground font-bold mb-8 leading-relaxed text-base">{cert.desc}</p>
                  <Link href="#" className="mt-auto text-primary font-black text-xs inline-flex items-center group-hover:translate-x-1 transition-transform uppercase tracking-widest">View Details <ArrowRight className="ml-1.5 w-4 h-4" /></Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. RESOURCES */}
        <section id="resources" className="w-full py-16 md:py-24 bg-white scroll-mt-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Expert Extensions</h2>
              <p className="mx-auto mt-2 max-w-[700px] text-muted-foreground md:text-xl">Curated insights specifically mapped to your proficiency level.</p>
            </div>
            
            <div className="space-y-16">
              <div className="space-y-8">
                 <div className="flex items-center gap-3">
                    <div className="h-0.5 w-10 bg-primary" />
                    <h3 className="text-xl font-bold uppercase tracking-widest text-left">For Step 1 Learners</h3>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      { title: "Intro to SAP Landscape", desc: "Understand DEV, QAS, and PRD hierarchy.", tag: "Beginner" },
                      { title: "Top 10 Security T-Codes", desc: "Essential transactions for every beginner.", tag: "Beginner" },
                      { title: "SAP GRC Access Control", desc: "Why businesses need automation.", tag: "Beginner" }
                    ].map((res, i) => (
                      <Card key={i} className="border shadow-md hover:shadow-lg transition-all group cursor-pointer h-full rounded-lg">
                         <CardHeader className="pb-2">
                            <Badge className="bg-green-500 text-white font-black mb-3 w-fit text-[9px]">BEGINNER</Badge>
                            <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">{res.title}</CardTitle>
                         </CardHeader>
                         <CardContent>
                            <p className="text-muted-foreground text-sm font-bold leading-tight">{res.desc}</p>
                         </CardContent>
                      </Card>
                    ))}
                 </div>
              </div>

              <div className="space-y-8">
                 <div className="flex items-center gap-3">
                    <div className="h-0.5 w-10 bg-sap-blue" />
                    <h3 className="text-xl font-bold uppercase tracking-widest text-left">For Step 3+ Learners</h3>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      { title: "Advanced Role Design", desc: "Managing Derived and Composite roles.", tag: "Intermediate" },
                      { title: "SAP BTP Security Checklist", desc: "Hardening your cloud technology platform.", tag: "Advanced" },
                      { title: "First Audit Checklist", desc: "How to prepare for your first security audit.", tag: "Advanced" }
                    ].map((res, i) => (
                      <Card key={i} className="border shadow-md hover:shadow-lg transition-all group cursor-pointer h-full rounded-lg">
                         <CardHeader className="pb-2">
                            <Badge className={cn("text-white font-black mb-3 w-fit text-[9px]", res.tag === 'Intermediate' ? 'bg-sap-blue' : 'bg-primary')}>{res.tag.toUpperCase()}</Badge>
                            <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">{res.title}</CardTitle>
                         </CardHeader>
                         <CardContent>
                            <p className="text-muted-foreground text-sm font-bold leading-tight">{res.desc}</p>
                         </CardContent>
                      </Card>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </section>

        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
}
