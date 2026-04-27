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
        <section id="hero" className="w-full bg-sap-blue py-24 md:py-36 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
          <div className="container px-4 md:px-6 text-center relative z-10">
            <Badge className="mb-6 bg-primary/20 text-white border-primary/30 px-4 py-1 uppercase tracking-widest text-xs font-bold">Expert-Led Roadmap</Badge>
            <h1 className="text-5xl md:text-8xl font-headline font-black mb-8 tracking-tighter leading-tight">
              From Zero to <span className="text-primary">SAP Expert</span>
            </h1>
            <p className="max-w-[800px] mx-auto text-xl md:text-2xl text-white/70 mb-12 font-medium leading-relaxed">
              Tired of scattered tutorials? We built the single, outcome-driven path to your career in SAP Security.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" onClick={() => scrollToSection('path-selector')} className="bg-primary hover:bg-primary/90 px-12 py-8 text-xl font-black uppercase tracking-widest text-white shadow-[0_10px_50px_rgba(242,81,64,0.4)] transition-all hover:scale-105">
                Get Started <ChevronDown className="ml-2 h-6 w-6" />
              </Button>
              <Button 
                variant="outline"
                size="lg" 
                onClick={() => scrollToSection('roadmap')} 
                className="px-12 py-8 border-2 border-white bg-white text-sap-blue hover:bg-transparent hover:text-white text-xl font-black uppercase tracking-widest transition-all"
              >
                View Roadmap
              </Button>
            </div>
          </div>
        </section>

        {/* 3. PERSONA SELECTOR (SMART) */}
        <section id="path-selector" className="w-full py-24 bg-white border-b scroll-mt-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-headline font-black mb-6">Choose Your Persona</h2>
              <p className="text-muted-foreground text-lg font-medium leading-relaxed">We customize your starting point based on your current background. Select the option that best describes you.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                      "p-10 border-2 text-left transition-all flex flex-col items-center text-center gap-8 group rounded-none",
                      active ? "border-primary bg-primary/5 shadow-2xl scale-105" : "border-muted hover:border-primary/50 bg-white"
                    )}
                  >
                    <div className={cn(
                      "p-6 rounded-full transition-all duration-500",
                      active ? "bg-primary text-white scale-110 rotate-6" : "bg-muted text-muted-foreground group-hover:bg-primary/10"
                    )}>
                      <Icon className="w-12 h-12" />
                    </div>
                    <div>
                      <h3 className="font-black text-2xl mb-2 uppercase tracking-tight">{personaContent[pKey].title}</h3>
                      <p className="text-sm text-muted-foreground font-bold leading-tight">Click to select this profile</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-20 p-12 bg-sap-blue text-white max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center animate-fade-in shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
              <div className="flex-1 space-y-4">
                <Badge className="bg-primary text-white font-black uppercase px-4 py-1">Custom Strategy Unlocked</Badge>
                <h4 className="text-3xl font-black">Welcome, {personaContent[persona].title}</h4>
                <p className="text-white/70 text-lg leading-relaxed font-medium">
                  {personaContent[persona].desc} <span className="text-white font-bold underline decoration-primary underline-offset-8">{personaContent[persona].strategy}</span>
                </p>
              </div>
              <Button size="lg" onClick={() => scrollToSection('roadmap')} className="bg-white text-sap-blue hover:bg-primary hover:text-white font-black px-10 py-8 text-lg uppercase transition-all shadow-xl">
                Continue to Roadmap <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* 4. DOMINANT ROADMAP */}
        <section id="roadmap" className="w-full py-28 md:py-40 bg-[#F1F5F9] relative scroll-mt-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-headline font-black mb-8">The Professional Path</h2>
              <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">Follow this sequence to transform from an outsider to a certified SAP Security Architect.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 relative">
              {/* STEP 1: THE DOMINANT START */}
              <div className="md:col-span-1 relative">
                <Card 
                  className={cn(
                    "border-t-8 border-t-primary shadow-2xl z-20 relative bg-white flex flex-col transition-all hover:-translate-y-4 cursor-pointer group h-full",
                    personaContent[persona].startStep === 1 ? "scale-110 border-4 border-primary" : "opacity-70 grayscale"
                  )}
                  onClick={() => scrollToSection('step-1-content')}
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1.5 font-black uppercase text-[10px] tracking-widest shadow-xl ring-4 ring-white">
                      {personaContent[persona].startStep === 1 ? "YOU ARE HERE" : "STEP 1"}
                    </Badge>
                  </div>
                  <CardHeader className="pt-12 pb-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center font-black mb-6 text-4xl shadow-lg mx-auto transition-transform group-hover:scale-110">1</div>
                    <CardTitle className="text-2xl font-black uppercase tracking-tighter">SAP Basics</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-6 pb-10">
                    <p className="text-muted-foreground font-bold leading-tight">Master navigation, S/4HANA UI, and system core.</p>
                    <div className="flex items-center justify-center gap-4 text-[10px] font-black uppercase text-muted-foreground bg-muted/50 py-3">
                      <Clock className="w-3.5 h-3.5 text-primary" /> 4h 30m
                      <Target className="w-3.5 h-3.5 text-primary" /> Outcome: Navigation
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto p-0">
                    <Button className="w-full rounded-none py-8 bg-primary hover:bg-primary/90 font-black text-white uppercase tracking-widest">
                      Start Lesson <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </CardFooter>
                </Card>
                {/* Visual Connector */}
                <div className="hidden md:block absolute top-1/2 -right-10 w-10 h-1 bg-muted-foreground/20 z-0" />
              </div>

              {/* OTHER STEPS */}
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
                      "h-full flex flex-col bg-white transition-all border-t-8 rounded-none group relative",
                      isCurrent ? "scale-105 border-t-primary shadow-xl border-4 border-primary" : "border-t-muted opacity-60",
                      isLocked ? "grayscale" : ""
                    )}>
                      {isLocked && (
                         <div className="absolute inset-0 flex items-center justify-center z-30 bg-white/40 backdrop-blur-[2px]">
                            <div className="bg-white p-4 rounded-full shadow-2xl border border-muted ring-8 ring-muted/10">
                              <Lock className="w-6 h-6 text-muted-foreground/50" />
                            </div>
                         </div>
                      )}
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                        <Badge className={cn("px-4 py-1 font-black", isCurrent ? "bg-primary text-white" : "bg-muted text-muted-foreground")}>
                          {isCurrent ? "YOU ARE HERE" : `STEP ${step.n}`}
                        </Badge>
                      </div>
                      <CardHeader className="pt-12 text-center">
                        <div className={cn("w-14 h-14 rounded-full flex items-center justify-center font-black mb-4 mx-auto", isCurrent ? "bg-primary text-white" : "bg-muted text-muted-foreground")}>{step.n}</div>
                        <CardTitle className="text-xl font-black uppercase tracking-tighter">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center text-sm font-medium text-muted-foreground pb-10">
                        {step.desc}
                      </CardContent>
                      <CardFooter className="mt-auto p-0">
                         <Button variant={isCurrent ? "default" : "outline"} className={cn("w-full rounded-none py-6 font-black uppercase text-xs", isCurrent ? "bg-primary text-white border-none" : "")}>
                           {isLocked ? "Locked" : "Continue"}
                         </Button>
                      </CardFooter>
                    </Card>
                    {idx < 3 && <div className="hidden md:block absolute top-1/2 -right-10 w-10 h-1 bg-muted-foreground/20 z-0" />}
                  </div>
                );
              })}
            </div>
            
            {/* TRANSITION CUE */}
            <div className="mt-24 text-center">
               <div className="inline-flex flex-col items-center animate-bounce">
                  <span className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-2">Dive into Step 1</span>
                  <ChevronDown className="w-10 h-10 text-primary" />
               </div>
            </div>
          </div>
        </section>

        {/* 5. THE LEARNING LOOP (CONTENT) */}
        <section id="step-1-content" className="w-full py-28 md:py-40 bg-white scroll-mt-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
              <div className="md:w-1/2 space-y-6">
                <Badge className="bg-primary/10 text-primary border-none px-4 py-1 font-black">PHASE 1: THE LOOP</Badge>
                <h2 className="text-4xl md:text-6xl font-headline font-black">Master the Core</h2>
                <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                  Our unique <span className="text-foreground font-black">Learning Loop</span> ensures you don't just watch videos—you understand concepts and validate your knowledge.
                </p>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                 {[
                   { icon: <Lightbulb />, label: "LEARN", color: "text-yellow-500 bg-yellow-50" },
                   { icon: <FlaskConical />, label: "UNDERSTAND", color: "text-blue-500 bg-blue-50" },
                   { icon: <Monitor />, label: "PRACTICE", color: "text-primary bg-primary/5" },
                   { icon: <ClipboardCheck />, label: "TEST", color: "text-green-500 bg-green-50" }
                 ].map((loop, idx) => (
                   <div key={idx} className={cn("p-6 flex flex-col items-center gap-3 border shadow-sm", loop.color)}>
                      <div className="w-10 h-10">{loop.icon}</div>
                      <span className="text-xs font-black tracking-widest">{loop.label}</span>
                   </div>
                 ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Course Card 1 */}
              <Card className="border-t-8 border-t-primary shadow-lg hover:shadow-2xl transition-all group flex flex-col h-full rounded-none">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-6">
                    <Badge className="bg-primary text-white font-black uppercase text-[10px] px-3">LEARN</Badge>
                    <span className="text-xs font-black text-muted-foreground">⏱ 4h 30m</span>
                  </div>
                  <CardTitle className="text-2xl font-black group-hover:text-primary transition-colors">SAP Overview (SAPTEC)</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-6">
                  <p className="text-muted-foreground font-bold text-lg leading-tight">Master S/4HANA navigation, business processes, and core architecture.</p>
                  <div className="space-y-3 pt-4 border-t border-muted/50">
                     <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Key Outcome</p>
                     <ul className="text-sm font-bold space-y-2">
                        <li className="flex items-center gap-2 text-primary"><CheckCircle2 className="w-4 h-4" /> Full Navigation Mastery</li>
                        <li className="flex items-center gap-2 text-primary"><CheckCircle2 className="w-4 h-4" /> System Landscape Discovery</li>
                     </ul>
                  </div>
                </CardContent>
                <CardFooter className="pt-8">
                  <Button className="w-full py-8 font-black text-lg bg-primary hover:bg-primary/90 text-white group rounded-none">
                    Start Learning <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>

              {/* Course Card 2 */}
              <Card className="border-t-8 border-t-sap-blue shadow-lg hover:shadow-2xl transition-all group flex flex-col h-full rounded-none">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-6">
                    <Badge className="bg-sap-blue text-white font-black uppercase text-[10px] px-3">UNDERSTAND</Badge>
                    <span className="text-xs font-black text-muted-foreground">⏱ 8h 00m</span>
                  </div>
                  <CardTitle className="text-2xl font-black group-hover:text-sap-blue transition-colors">Security & Auth</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-6">
                  <p className="text-muted-foreground font-bold text-lg leading-tight">Deep dive into the Profile Generator (PFCG) and the Authorization concept.</p>
                  <div className="space-y-3 pt-4 border-t border-muted/50">
                     <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Key Outcome</p>
                     <ul className="text-sm font-bold space-y-2">
                        <li className="flex items-center gap-2 text-sap-blue"><CheckCircle2 className="w-4 h-4" /> Build Advanced Roles</li>
                        <li className="flex items-center gap-2 text-sap-blue"><CheckCircle2 className="w-4 h-4" /> Manage Auth Objects</li>
                     </ul>
                  </div>
                </CardContent>
                <CardFooter className="pt-8">
                  <Button className="w-full py-8 font-black text-lg bg-sap-blue hover:bg-sap-blue/90 text-white group rounded-none">
                    Start Dive <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>

              {/* Course Card 3 */}
              <Card className="border-t-8 border-t-foreground shadow-lg hover:shadow-2xl transition-all group flex flex-col h-full rounded-none">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-6">
                    <Badge className="bg-foreground text-background font-black uppercase text-[10px] px-3">TEST</Badge>
                    <span className="text-xs font-black text-muted-foreground">⏱ 15m Quiz</span>
                  </div>
                  <CardTitle className="text-2xl font-black">Step 1 Assessment</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-6">
                  <p className="text-muted-foreground font-bold text-lg leading-tight">Validate your foundational knowledge before moving to Step 2.</p>
                  <div className="bg-muted/30 p-6 flex items-center gap-4 border">
                     <Trophy className="w-10 h-10 text-primary" />
                     <p className="text-xs font-bold text-muted-foreground leading-snug">Passing unlocks the <span className="text-foreground">Official Preview</span> for Cybersecurity 101.</p>
                  </div>
                </CardContent>
                <CardFooter className="pt-8">
                  <Button className="w-full py-8 font-black text-lg bg-foreground hover:bg-foreground/90 text-white group rounded-none">
                    Start Quiz <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* 6. EMOTIONAL PRACTICE SECTION */}
        <section id="practice" className="w-full py-28 md:py-48 bg-foreground text-white relative overflow-hidden scroll-mt-20">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/2 pointer-events-none" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2 space-y-10">
                <Badge className="bg-primary text-white px-6 py-2 uppercase text-xs font-black tracking-widest shadow-2xl ring-4 ring-primary/20">FROM THEORY TO REAL WORK</Badge>
                <h2 className="text-5xl md:text-8xl font-headline font-black tracking-tight leading-none">Practice Like a <span className="text-primary italic">Consultant.</span></h2>
                <p className="text-xl text-white/60 font-medium leading-relaxed max-w-xl">
                  Learning isn't enough. In the real world, you build roles, troubleshoot access, and audit users. We provide the sandbox and the scenarios.
                </p>
                <div className="flex gap-4 items-center">
                   <div className="p-4 bg-white/5 border border-white/10 rounded-lg flex items-center gap-3">
                      <Monitor className="text-primary" />
                      <span className="text-xs font-black uppercase tracking-widest">Sandbox Access Included</span>
                   </div>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-10 text-2xl font-black uppercase tracking-widest shadow-[0_15px_60px_rgba(242,81,64,0.5)] transition-all hover:scale-105 rounded-none">
                  Enter The Lab
                </Button>
              </div>
              <div className="lg:w-1/2 w-full space-y-6">
                {[
                  { n: "01", title: "Create Your First User (SU01)", desc: "Learn user types, password management, and system access logic.", icon: <UserPlus /> },
                  { n: "02", title: "Build Your First Role (PFCG)", desc: "Maintain menu objects, manage authorizations, and generate profiles.", icon: <Settings /> },
                  { n: "03", title: "The Security Audit (SM20)", desc: "Track system access, login failures, and critical transaction execution.", icon: <Database /> }
                ].map((lab, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-10 flex gap-8 hover:bg-white/10 transition-all group backdrop-blur-sm cursor-pointer hover:-translate-x-2">
                    <div className="text-primary font-black text-6xl opacity-30 group-hover:opacity-100 transition-opacity leading-none">{lab.n}</div>
                    <div className="space-y-3">
                       <h3 className="text-2xl font-black flex items-center gap-4 group-hover:text-primary transition-colors uppercase tracking-tight">
                         <div className="w-8 h-8 text-white group-hover:text-primary transition-colors">{lab.icon}</div>
                         {lab.title}
                       </h3>
                       <p className="text-white/50 text-lg font-medium leading-tight">{lab.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. VISUAL CONCEPTS Discovery */}
        <section className="w-full py-28 md:py-40 bg-white scroll-mt-20">
          <div className="container px-4 md:px-6">
             <div className="text-center mb-24 max-w-3xl mx-auto">
                <Badge className="bg-muted text-muted-foreground px-4 py-1 font-black mb-6">KNOWLEDGE PILLARS</Badge>
                <h2 className="text-4xl md:text-5xl font-headline font-black mb-6">Core SAP Security Concepts</h2>
                <p className="text-xl text-muted-foreground font-medium">Master these four fundamental pillars. They represent 80% of daily security operations.</p>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "RBAC Model", desc: "The standard way to manage permissions via roles.", icon: <ShieldCheck className="text-primary" />, example: "Purchasing Manager Role" },
                  { title: "SoD Controls", desc: "Preventing fraud by splitting critical tasks.", icon: <Users className="text-sap-blue" />, example: "P2P Process Separation" },
                  { title: "Profiles/Roles", desc: "The technical runtime connection for auth.", icon: <FileCheck className="text-foreground" />, example: "Runtime Profile Generation" },
                  { title: "Audit Logs", desc: "Tracking system events for compliance.", icon: <Search className="text-primary" />, example: "Critical T-Code Monitoring" }
                ].map((concept, idx) => (
                  <Card key={idx} className="border shadow-lg hover:shadow-2xl transition-all p-8 flex flex-col group rounded-none">
                     <div className="mb-8 w-16 h-16 bg-muted/30 flex items-center justify-center group-hover:scale-110 transition-transform">{concept.icon}</div>
                     <CardTitle className="text-2xl font-black mb-4 uppercase tracking-tighter">{concept.title}</CardTitle>
                     <CardContent className="p-0 flex-grow">
                        <p className="text-muted-foreground font-bold mb-8 leading-snug">{concept.desc}</p>
                        <div className="bg-muted/50 p-4 border-l-4 border-primary">
                           <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Real Example</p>
                           <p className="text-sm font-black text-foreground">{concept.example}</p>
                        </div>
                     </CardContent>
                  </Card>
                ))}
             </div>
          </div>
        </section>

        {/* 8. CERTIFICATIONS WITH CONTEXT */}
        <section id="certifications" className="w-full py-28 md:py-40 bg-[#F8FAFC] scroll-mt-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-10 border-b-4 border-sap-blue pb-10">
              <div className="space-y-4">
                <Badge className="bg-sap-blue text-white px-4 py-1 font-black">THE END GOAL</Badge>
                <h2 className="text-4xl md:text-6xl font-headline font-black">Certification Paths</h2>
                <p className="text-xl text-muted-foreground font-medium max-w-xl">Validate your expertise with recognized credentials. Recommended <span className="text-primary font-black">after Step 4</span> of our roadmap.</p>
              </div>
              <Button size="lg" variant="outline" className="border-2 border-sap-blue text-sap-blue font-black hover:bg-sap-blue hover:text-white px-10 py-8 rounded-none">View Official Exams</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { title: "Associate Level", level: "Entry", border: "border-l-primary", desc: "Essential first step for System Security Architects." },
                { title: "Specialist Level", level: "Specialist", border: "border-l-sap-blue", desc: "Focus on Authorization and Audit management." },
                { title: "Professional Level", level: "Advanced", border: "border-l-foreground", desc: "For lead enterprise-wide security positions." }
              ].map((cert, idx) => (
                <div key={idx} className={cn("p-12 border-l-8 bg-white shadow-xl transition-all hover:-translate-y-4 hover:shadow-2xl flex flex-col group", cert.border)}>
                  <Badge className="mb-8 bg-muted text-muted-foreground font-black uppercase text-[10px] w-fit">LEVEL: {cert.level}</Badge>
                  <h3 className="text-3xl font-black mb-6 leading-tight group-hover:text-primary transition-colors uppercase tracking-tighter">{cert.title}</h3>
                  <p className="text-muted-foreground font-bold mb-10 leading-relaxed text-lg">{cert.desc}</p>
                  <Link href="#" className="mt-auto text-primary font-black text-sm inline-flex items-center group-hover:translate-x-2 transition-transform uppercase tracking-widest">View Details <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. RESOURCES BY LEARNER STEP */}
        <section id="resources" className="w-full py-28 md:py-40 bg-white scroll-mt-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-headline font-black mb-6">Learning Extensions</h2>
              <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">Curated insights specifically mapped to your current proficiency level.</p>
            </div>
            
            <div className="space-y-24">
              {/* Beginner Resources */}
              <div className="space-y-10">
                 <div className="flex items-center gap-4">
                    <div className="h-1 w-12 bg-primary" />
                    <h3 className="text-2xl font-black uppercase tracking-widest">For Step 1 Learners</h3>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                      { title: "Intro to SAP Landscape", desc: "Understand DEV, QAS, and PRD system hierarchy.", tag: "Beginner" },
                      { title: "Top 10 Security T-Codes", desc: "Essential transactions for every beginner to learn.", tag: "Beginner" },
                      { title: "SAP GRC Access Control", desc: "Why businesses need automation for security.", tag: "Beginner" }
                    ].map((res, i) => (
                      <Card key={i} className="border shadow-lg hover:shadow-2xl transition-all group cursor-pointer h-full rounded-none">
                         <CardHeader>
                            <Badge className="bg-green-500 text-white font-black mb-4 w-fit">BEGINNER</Badge>
                            <CardTitle className="text-2xl font-black group-hover:text-primary transition-colors">{res.title}</CardTitle>
                         </CardHeader>
                         <CardContent>
                            <p className="text-muted-foreground font-bold leading-tight">{res.desc}</p>
                         </CardContent>
                      </Card>
                    ))}
                 </div>
              </div>

              {/* Advanced Resources */}
              <div className="space-y-10">
                 <div className="flex items-center gap-4">
                    <div className="h-1 w-12 bg-sap-blue" />
                    <h3 className="text-2xl font-black uppercase tracking-widest">For Step 3+ Learners</h3>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                      { title: "Advanced Role Design", desc: "Managing Derived and Composite roles efficiently.", tag: "Intermediate" },
                      { title: "SAP BTP Security Checklist", desc: "Hardening your cloud technology platform.", tag: "Advanced" },
                      { title: "First Audit Checklist", desc: "How to prepare for your first security audit.", tag: "Advanced" }
                    ].map((res, i) => (
                      <Card key={i} className="border shadow-lg hover:shadow-2xl transition-all group cursor-pointer h-full rounded-none">
                         <CardHeader>
                            <Badge className={cn("text-white font-black mb-4 w-fit", res.tag === 'Intermediate' ? 'bg-sap-blue' : 'bg-primary')}>{res.tag.toUpperCase()}</Badge>
                            <CardTitle className="text-2xl font-black group-hover:text-primary transition-colors">{res.title}</CardTitle>
                         </CardHeader>
                         <CardContent>
                            <p className="text-muted-foreground font-bold leading-tight">{res.desc}</p>
                         </CardContent>
                      </Card>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. COMMUNITY TRANSITION */}
        <section className="w-full py-32 md:py-48 bg-sap-blue text-white overflow-hidden relative">
           <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
           <div className="container px-4 md:px-6 relative z-10 text-center">
              <h2 className="text-5xl md:text-8xl font-headline font-black mb-10 tracking-tighter">Don't Learn in Isolation.</h2>
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-16 font-medium">Join 5,000+ SAP Security professionals sharing insights and solving problems daily.</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-16 py-10 text-2xl font-black uppercase tracking-widest shadow-2xl transition-all hover:scale-110 rounded-none">
                Join The Hub
              </Button>
           </div>
        </section>

        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
}
