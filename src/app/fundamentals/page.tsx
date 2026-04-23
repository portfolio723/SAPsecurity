'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
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
  Mail,
  Target,
  Trophy,
  Clock,
  Cpu,
  UserPlus,
  Settings,
  Info,
  UserCircle,
  HardHat,
  ShieldAlert
} from 'lucide-react';
import { Logo } from '@/components/icons';

type Persona = 'beginner' | 'basis' | 'cyber';

export default function FundamentalsPage() {
  const [persona, setPersona] = useState<Persona>('beginner');

  const personaContent = {
    beginner: {
      title: "New to IT / SAP",
      desc: "Focus on understanding the landscape first. Don't worry about technical code yet.",
      strategy: "Start with SAP Basics and Cybersecurity 101."
    },
    basis: {
      title: "SAP Basis Admin",
      desc: "You know the system; now learn to secure it. Pivot your career to GRC.",
      strategy: "Focus on Step 3: Core SAP Security and PFCG management."
    },
    cyber: {
      title: "Cybersecurity Pro",
      desc: "Apply your security knowledge to the SAP stack. Bridge the gap.",
      strategy: "Learn how SAP's proprietary authorization model works in Step 3."
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">
      <Header />
      <main className="flex-1">
        {/* 1. Hero Section - Strong & Clear */}
        <section className="w-full bg-sap-blue py-20 md:py-32 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-7xl font-headline font-bold mb-6 tracking-tight">
              Master SAP Security
            </h1>
            <p className="max-w-[800px] mx-auto text-lg md:text-2xl text-white/80 mb-10 leading-relaxed">
              Your structured journey from novice to SAP Security expert. One stop, zero clutter.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-none px-10 py-8 text-lg font-bold uppercase tracking-wider" asChild>
                <a href="#path-selector">Start Learning Now</a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-none px-10 py-8 border-white text-white hover:bg-white hover:text-sap-blue text-lg" asChild>
                <a href="#roadmap">View Roadmap</a>
              </Button>
            </div>
          </div>
        </section>

        {/* 2. Choose Your Path - Personalization First */}
        <section id="path-selector" className="w-full py-20 bg-white border-b">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">👉 Step 0: Choose Your Persona</h2>
              <p className="text-muted-foreground text-lg">Tell us who you are so we can tailor your starting point.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <button 
                onClick={() => setPersona('beginner')}
                className={`p-8 border-2 text-left transition-all hover:shadow-xl flex flex-col items-center text-center gap-6 ${persona === 'beginner' ? 'border-primary bg-primary/5 shadow-lg' : 'border-muted hover:border-primary/50'}`}
              >
                <div className={`p-5 rounded-full ${persona === 'beginner' ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
                  <UserCircle className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">I am a Beginner</h3>
                  <p className="text-sm text-muted-foreground">New to IT or SAP environment</p>
                </div>
              </button>

              <button 
                onClick={() => setPersona('basis')}
                className={`p-8 border-2 text-left transition-all hover:shadow-xl flex flex-col items-center text-center gap-6 ${persona === 'basis' ? 'border-primary bg-primary/5 shadow-lg' : 'border-muted hover:border-primary/50'}`}
              >
                <div className={`p-5 rounded-full ${persona === 'basis' ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
                  <HardHat className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">I am Basis Admin</h3>
                  <p className="text-sm text-muted-foreground">Experienced in SAP Operations</p>
                </div>
              </button>

              <button 
                onClick={() => setPersona('cyber')}
                className={`p-8 border-2 text-left transition-all hover:shadow-xl flex flex-col items-center text-center gap-6 ${persona === 'cyber' ? 'border-primary bg-primary/5 shadow-lg' : 'border-muted hover:border-primary/50'}`}
              >
                <div className={`p-5 rounded-full ${persona === 'cyber' ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
                  <ShieldAlert className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">I am Cyber Pro</h3>
                  <p className="text-sm text-muted-foreground">New to SAP specific security</p>
                </div>
              </button>
            </div>

            <div className="mt-16 p-10 bg-muted/30 border-l-8 border-primary max-w-5xl mx-auto animate-fade-in shadow-sm">
              <div className="flex gap-6 items-start">
                <div className="mt-1">
                  <Badge variant="outline" className="rounded-none border-primary text-primary uppercase font-black text-xs px-3 py-1">Your Recommended Strategy</Badge>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3">Welcome, {personaContent[persona].title}</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {personaContent[persona].desc} <span className="text-foreground font-bold">{personaContent[persona].strategy}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Learning Roadmap - Progress & Sequence */}
        <section id="roadmap" className="w-full py-20 md:py-28 bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-headline font-bold mb-6">Your Step-by-Step Roadmap</h2>
              
              {/* Progress System Card */}
              <div className="max-w-2xl mx-auto mb-20 bg-white p-8 border shadow-xl relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Trophy className="w-32 h-32" />
                </div>
                <div className="flex items-center justify-between text-xs font-black uppercase tracking-widest mb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Current Milestone:</span>
                    <span className="text-foreground">Step 1 — SAP Basics</span>
                  </div>
                  <span className="text-primary font-mono text-sm">20% COMPLETE</span>
                </div>
                <Progress value={20} className="h-4 rounded-none bg-muted mb-6" />
                <div className="flex justify-between items-center relative z-10">
                   <p className="text-sm text-muted-foreground font-semibold">
                     You are here: <span className="text-primary font-bold">Step 1</span>
                   </p>
                   <p className="text-sm font-bold text-foreground flex items-center gap-2">
                     Goal: <span className="text-muted-foreground font-normal">Cybersecurity 101</span> <ArrowRight className="w-4 h-4 text-primary" />
                   </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
              {/* Step 1 - DOMINANT START */}
              <Card className="rounded-none border-4 border-primary shadow-[0_0_40px_rgba(242,81,64,0.25)] scale-110 z-20 relative bg-white flex flex-col">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-white border-none px-6 py-2 rounded-none uppercase text-xs font-black tracking-widest shadow-xl">
                    START HERE
                  </Badge>
                </div>
                <CardHeader className="pb-4 pt-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-black mb-6 text-2xl shadow-lg mx-auto">
                    1
                  </div>
                  <CardTitle className="text-2xl font-headline font-bold">SAP Basics</CardTitle>
                </CardHeader>
                <CardContent className="text-base font-medium flex-grow text-center px-6 leading-relaxed">
                  Understand navigation, system architecture and core business modules.
                  <div className="mt-6 p-3 bg-muted/50 border-l-2 border-primary text-xs text-muted-foreground text-left italic">
                    <Clock className="w-3 h-3 inline mr-1" /> Est: 4 Hours
                  </div>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button className="w-full bg-primary hover:bg-primary/90 rounded-none group py-8 text-lg font-black uppercase tracking-tight shadow-md">
                    Action: Enroll <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>

              {/* Step 2+ Locked Preview */}
              {[
                { n: 2, title: "Cybersecurity 101", desc: "Fundamental security concepts that underpin SAP protection." },
                { n: 3, title: "Core SAP Security", desc: "PFCG roles, authorizations, and user administration." },
                { n: 4, title: "Hands-On Labs", desc: "Practice role configuration and audits in a sandbox." },
                { n: 5, title: "Certifications", desc: "Validate your skills with official SAP Security exams." }
              ].map((step) => (
                <Card key={step.n} className="rounded-none border-dashed border-2 opacity-60 bg-white/50 flex flex-col grayscale pointer-events-none relative group transition-opacity hover:opacity-100">
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="bg-white/90 p-4 rounded-full shadow-md border">
                      <Lock className="w-8 h-8 text-muted-foreground/50" />
                    </div>
                  </div>
                  <CardHeader className="pb-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-bold mb-4 mx-auto">{step.n}</div>
                    <CardTitle className="text-xl font-headline">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground flex-grow text-center px-4">
                    {step.desc}
                  </CardContent>
                  <CardFooter className="pt-6 opacity-30">
                    <Button variant="outline" className="w-full rounded-none" disabled>Locked</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Foundational Courses - Next Action Content */}
        <section className="w-full py-24 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b pb-8">
              <div className="space-y-4">
                <Badge variant="outline" className="rounded-none border-primary text-primary font-black uppercase tracking-[0.2em] text-xs px-4 py-1">
                  Phase 1 Content
                </Badge>
                <h2 className="text-4xl md:text-5xl font-headline font-black flex items-center gap-4">
                  <BookOpen className="text-primary w-12 h-12" /> Foundational Courses
                </h2>
              </div>
              <p className="max-w-[400px] text-muted-foreground font-medium text-lg leading-relaxed">
                Start these two courses immediately to complete Step 1 of your journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Course 1 - HIGHLIGHTED */}
              <Card className="rounded-none hover:shadow-2xl transition-all border-t-8 border-t-primary flex flex-col group scale-105 shadow-lg bg-white relative z-10">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-primary text-white rounded-none uppercase text-[10px] font-black px-3 py-1">Highly Recommended</Badge>
                    <span className="flex items-center text-xs font-black text-muted-foreground uppercase tracking-widest">
                      <Clock className="w-4 h-4 mr-1 text-primary" /> 4h 30m
                    </span>
                  </div>
                  <CardTitle className="font-headline text-2xl font-black group-hover:text-primary transition-colors mb-2">SAP Overview (SAPTEC)</CardTitle>
                  <CardDescription className="text-sm font-semibold uppercase tracking-tight text-muted-foreground">The Absolute First Step</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-8 pt-6 border-t border-muted/50">
                  <div className="space-y-4">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" /> Core Outcome
                    </p>
                    <p className="text-lg font-bold leading-tight">
                      Master S/4HANA navigation and understand how modules talk to each other.
                    </p>
                  </div>
                  <div className="p-5 bg-muted/30 text-sm font-medium italic border-l-4 border-primary leading-relaxed shadow-inner">
                    "Enroll in this first. It provides the essential context for all security work."
                  </div>
                </CardContent>
                <CardFooter className="pt-8 bg-muted/5">
                  <Button className="w-full rounded-none font-black py-8 text-lg group bg-primary" variant="default">
                    Start Course <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>

              {/* Course 2 */}
              <Card className="rounded-none hover:shadow-xl transition-all border-t-8 border-t-sap-blue flex flex-col group">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-sap-blue text-white rounded-none uppercase text-[10px] font-black px-3 py-1">Intermediate</Badge>
                    <span className="flex items-center text-xs font-black text-muted-foreground uppercase tracking-widest">
                      <Clock className="w-4 h-4 mr-1 text-primary" /> 8h 00m
                    </span>
                  </div>
                  <CardTitle className="font-headline text-2xl font-black group-hover:text-sap-blue transition-colors mb-2">Security & Authorizations</CardTitle>
                  <CardDescription className="text-sm font-semibold uppercase tracking-tight text-muted-foreground">Technical Foundation</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-8 pt-6 border-t border-muted/50">
                  <div className="space-y-4">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                      <Target className="w-4 h-4 text-sap-blue" /> Core Outcome
                    </p>
                    <p className="text-lg font-bold leading-tight">
                      Deep dive into PFCG transactions, authorization objects, and role maintenance.
                    </p>
                  </div>
                  <div className="p-5 bg-muted/30 text-sm font-medium italic border-l-4 border-sap-blue leading-relaxed">
                    "Take this after SAPTEC. This is where you learn the technical knobs."
                  </div>
                </CardContent>
                <CardFooter className="pt-8">
                  <Button className="w-full rounded-none font-black py-8 text-lg group bg-sap-blue hover:bg-sap-blue/90" variant="default">
                    Start Course <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>

              {/* Course 3 */}
              <Card className="rounded-none hover:shadow-xl transition-all border-t-8 border-t-foreground flex flex-col group opacity-90">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-foreground text-background rounded-none uppercase text-[10px] font-black px-3 py-1">Fundamental</Badge>
                    <span className="flex items-center text-xs font-black text-muted-foreground uppercase tracking-widest">
                      <Clock className="w-4 h-4 mr-1 text-primary" /> 3h 15m
                    </span>
                  </div>
                  <CardTitle className="font-headline text-2xl font-black group-hover:text-primary transition-colors mb-2">Cybersecurity 101</CardTitle>
                  <CardDescription className="text-sm font-semibold uppercase tracking-tight text-muted-foreground">General Context</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-8 pt-6 border-t border-muted/50">
                  <div className="space-y-4">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                      <Target className="w-4 h-4 text-foreground" /> Core Outcome
                    </p>
                    <p className="text-lg font-bold leading-tight">
                      Understand encryption, firewalls, and network security to protect the whole landscape.
                    </p>
                  </div>
                  <div className="p-5 bg-muted/30 text-sm font-medium italic border-l-4 border-foreground leading-relaxed">
                    "Crucial for context. Understand what's happening outside the SAP application."
                  </div>
                </CardContent>
                <CardFooter className="pt-8">
                  <Button className="w-full rounded-none font-black py-8 text-lg group bg-foreground hover:bg-foreground/90" variant="default">
                    Start Course <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* 5. Core Concepts - Visual Discovery */}
        <section className="w-full py-24 md:py-32 bg-muted/10">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl font-headline font-black mb-6">Core SAP Security Concepts</h2>
              <p className="text-muted-foreground text-xl leading-relaxed">
                Master these four fundamental pillars. They represent 80% of daily security operations in the SAP ecosystem.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  title: "Role-Based Access Control (RBAC)",
                  desc: "The standard way to manage permissions. Users are assigned roles containing authorization objects.",
                  icon: <ShieldCheck className="w-12 h-12 text-primary" />,
                  color: "border-t-primary"
                },
                {
                  title: "Segregation of Duties (SoD)",
                  desc: "Internal controls preventing fraud by splitting critical tasks between multiple users.",
                  icon: <Users className="w-12 h-12 text-sap-blue" />,
                  color: "border-t-sap-blue"
                },
                {
                  title: "Profiles vs Roles",
                  desc: "Technical relationship between PFCG roles and the runtime profiles checked by the system.",
                  icon: <FileCheck className="w-12 h-12 text-foreground" />,
                  color: "border-t-foreground"
                },
                {
                  title: "System Auditing (SM19/SM20)",
                  desc: "Setting up security audit logs to track logins, transaction executions, and critical events.",
                  icon: <Search className="w-12 h-12 text-primary" />,
                  color: "border-t-primary"
                }
              ].map((concept, idx) => (
                <Card key={idx} className={`rounded-none border-t-8 ${concept.color} hover:shadow-2xl transition-all p-4`}>
                  <CardHeader>
                    <div className="mb-6">{concept.icon}</div>
                    <CardTitle className="text-xl font-headline font-black leading-tight">{concept.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {concept.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Hands-On Mastery - Full Width High Impact */}
        <section className="w-full py-28 md:py-40 bg-foreground text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/2" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-10">
                <Badge className="bg-primary text-white rounded-none px-6 py-2 uppercase text-xs font-black tracking-widest mb-2 shadow-xl">The Differentiator</Badge>
                <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tight">Practice Like a Real SAP Consultant</h2>
                <p className="text-xl text-white/70 leading-relaxed font-medium">
                  Theory is only half the battle. To be hired, you must build, break, and audit in a live environment. We guide you through three critical real-world milestones.
                </p>
                <div className="pt-6">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-none px-12 py-10 text-xl font-black uppercase tracking-widest shadow-[0_10px_40px_rgba(242,81,64,0.4)]">
                    Access Lab Guide
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 gap-6 w-full">
                {[
                  {
                    step: "01",
                    title: "Environment Setup",
                    desc: "Access the SAP Developer Edition or setup a Trial Cloud instance for your personal sandbox.",
                    icon: <Cpu className="w-8 h-8" />
                  },
                  {
                    step: "02",
                    title: "User Administration (SU01)",
                    desc: "Learn to create users, manage passwords, and understand user types (Dialog, System, Service).",
                    icon: <UserPlus className="w-8 h-8" />
                  },
                  {
                    step: "03",
                    title: "Role Maintenance (PFCG)",
                    desc: "Build professional role models, manage authorization objects, and generate runtime profiles.",
                    icon: <Settings className="w-8 h-8" />
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/20 p-8 flex gap-8 hover:bg-white/10 transition-all group backdrop-blur-sm">
                    <div className="text-primary font-mono text-5xl font-black opacity-30 group-hover:opacity-100 transition-opacity">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black mb-3 flex items-center gap-4">
                        {item.icon} {item.title}
                      </h3>
                      <p className="text-lg text-white/60 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Certification Paths - The End Goal */}
        <section className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 border-b pb-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-headline font-black">Certification Paths</h2>
                <p className="text-muted-foreground text-xl">Validate your expertise with industry-recognized credentials.</p>
              </div>
              <div className="flex flex-col items-end gap-4">
                <Badge variant="outline" className="rounded-none border-primary text-primary flex items-center gap-2 py-2 px-6 font-bold uppercase text-xs">
                  <Info className="w-4 h-4" /> Recommended after Step 4
                </Badge>
                <Button variant="outline" className="rounded-none border-sap-blue text-sap-blue hover:bg-sap-blue hover:text-white px-8 font-black">View Official Exam Schedule</Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-10 border-l-8 border-l-primary bg-muted/30 shadow-sm hover:shadow-md transition-shadow">
                <Badge variant="secondary" className="mb-6 rounded-none font-black px-3 py-1 uppercase text-[10px]">Entry Level</Badge>
                <h3 className="text-2xl font-black mb-4">Associate Level</h3>
                <p className="text-base text-muted-foreground mb-8 leading-relaxed font-medium">SAP Certified Technology Associate - System Security Architect. The essential first step for all security pros.</p>
                <Link href="#" className="text-primary font-black text-sm inline-flex items-center hover:underline uppercase tracking-widest">Exam Details <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </div>
              <div className="p-10 border-l-8 border-l-sap-blue bg-muted/30 shadow-sm hover:shadow-md transition-shadow">
                <Badge variant="secondary" className="mb-6 rounded-none font-black px-3 py-1 uppercase text-[10px]">Specialist</Badge>
                <h3 className="text-2xl font-black mb-4">Specialist Level</h3>
                <p className="text-base text-muted-foreground mb-8 leading-relaxed font-medium">SAP Certified Technology Associate - Authorization and Auditing. Focus on role management and compliance.</p>
                <Link href="#" className="text-sap-blue font-black text-sm inline-flex items-center hover:underline uppercase tracking-widest">Exam Details <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </div>
              <div className="p-10 border-l-8 border-l-foreground bg-muted/30 shadow-sm hover:shadow-md transition-shadow">
                <Badge variant="secondary" className="mb-6 rounded-none font-black px-3 py-1 uppercase text-[10px]">Advanced</Badge>
                <h3 className="text-2xl font-black mb-4">Professional Level</h3>
                <p className="text-base text-muted-foreground mb-8 leading-relaxed font-medium">SAP Certified Technology Professional - System Security Architect. For those managing enterprise-wide security.</p>
                <Link href="#" className="text-foreground font-black text-sm inline-flex items-center hover:underline uppercase tracking-widest">Exam Details <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Recommended Resources - Tagged Visual Cards */}
        <section className="w-full py-24 md:py-32 bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-headline font-black mb-4">Recommended Reading</h2>
              <p className="text-muted-foreground text-xl">Curated insights mapped to your current proficiency level.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Introduction to SAP GRC Access Control", desc: "Understand how GRC automates compliance and SoD checks.", tag: "Beginner" },
                { title: "Top 10 Security Transactions Every Admin Should Know", desc: "A curated list of essential T-Codes like PFCG, SU01, and SM20.", tag: "Beginner" },
                { title: "Understanding SAP NetWeaver Security Gateway", desc: "How SAP handles external connections and API security.", tag: "Intermediate" },
                { title: "Best Practices for SAP Fiori Role Design", desc: "A guide to modern authorization concepts for the web interface.", tag: "Intermediate" },
                { title: "How to Prepare for Your First SAP Audit", desc: "Checklists and common pitfalls to avoid during a security audit.", tag: "Advanced" },
                { title: "The Future of SAP IAM: Cloud vs On-Premise", desc: "Comparing classic GRC with the new SAP Identity Access Governance.", tag: "Advanced" }
              ].map((res, i) => (
                <Card key={i} className="rounded-none border-none bg-white hover:bg-muted/50 transition-all cursor-pointer group shadow-lg flex flex-col h-full hover:-translate-y-2">
                  <CardHeader className="p-8 pb-4">
                    <Badge 
                      variant="outline" 
                      className={`w-fit mb-6 rounded-none text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 ${
                        res.tag === 'Beginner' ? 'border-green-500 text-green-600' : 
                        res.tag === 'Intermediate' ? 'border-sap-blue text-sap-blue' : 
                        'border-primary text-primary'
                      }`}
                    >
                      {res.tag}
                    </Badge>
                    <CardTitle className="text-2xl font-headline font-black group-hover:text-primary transition-colors leading-tight">{res.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 flex-grow">
                    <p className="text-base text-muted-foreground leading-relaxed font-medium">{res.desc}</p>
                  </CardContent>
                  <CardFooter className="p-8 pt-0">
                    <span className="text-sm font-black text-primary flex items-center gap-2 group-hover:translate-x-2 transition-transform uppercase tracking-widest">
                      Read Article <ArrowRight className="w-5 h-5" />
                    </span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="w-full py-24 md:py-32 bg-gray-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-16">
              <div className="space-y-8 max-w-[600px]">
                <h2 className="text-4xl md:text-5xl font-headline font-black tracking-tight">Join the SAP Security Community</h2>
                <p className="text-xl text-gray-400 font-medium leading-relaxed">
                  New learners benefit from guidance and Q&A. Don't learn in isolation; join thousands of experts sharing insights daily.
                </p>
              </div>
              <div className="w-full md:w-2/5 bg-gray-800 p-12 rounded-none border border-gray-700 shadow-2xl relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary flex items-center justify-center font-black text-2xl">?</div>
                <h3 className="text-2xl font-black mb-6">Have a Question?</h3>
                <p className="text-lg text-gray-400 mb-10 font-medium">Our experts are here to help you navigate your first steps in SAP Security.</p>
                <Button className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-none py-10 text-lg font-black uppercase tracking-widest transition-all duration-300">
                  Ask an Expert
                </Button>
              </div>
            </div>
          </div>
        </section>

        <NewsletterSignup />
      </main>

      <footer className="w-full shrink-0 border-t bg-gray-900 py-12 text-gray-400 md:py-20">
        <div className="container grid grid-cols-2 gap-12 px-4 md:grid-cols-5 md:px-6">
          <div className="col-span-2 space-y-6 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Logo width={220} height={220} />
            </Link>
            <p className="text-base font-medium">
              The definitive resource for SAP Security excellence.
            </p>
          </div>
          <div>
            <h4 className="mb-6 font-black text-white uppercase tracking-widest text-xs">Solutions</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">Threat Detection</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Access Governance</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Code Security</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Compliance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-black text-white uppercase tracking-widest text-xs">Platform</h4>
             <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/fundamentals" className="hover:text-white transition-colors">Fundamentals</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Integrations</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Customers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-black text-white uppercase tracking-widest text-xs">Resources</h4>
             <ul className="space-y-3 text-sm font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Webinars</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Whitepapers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-black text-white uppercase tracking-widest text-xs">Company</h4>
             <ul className="space-y-3 text-sm font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mt-16 flex flex-col items-center justify-between gap-6 border-t border-gray-700 pt-10 px-4 md:flex-row md:px-6">
            <p className="text-xs font-medium uppercase tracking-widest">
            © 2026 SAP Security Expert. All rights reserved.
            </p>
            <nav className="flex gap-6 text-xs font-black uppercase tracking-widest">
                <Link href="#" className="hover:underline">Privacy</Link>
                <Link href="#" className="hover:underline">Terms</Link>
                <Link href="#" className="hover:underline">Cookies</Link>
            </nav>
        </div>
      </footer>
    </div>
  );
}