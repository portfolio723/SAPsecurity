import { Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function NewsletterSignup() {
  return (
    <section id="newsletter" className="w-full py-20 md:py-32 border-t bg-white">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-[#3B5998] flex items-center justify-center text-white shadow-xl mb-8">
          <Mail className="h-10 w-10" />
        </div>
        <div className="space-y-3 mb-10">
          <h2 className="text-3xl font-bold font-headline tracking-tighter md:text-4xl/tight text-[#0F172A]">
            Subscribe for Expert Insights
          </h2>
          <p className="mx-auto max-w-[600px] text-[#64748B] md:text-xl font-medium font-body">
            Check Latest Updates
          </p>
        </div>
        <div className="mx-auto w-full max-w-md space-y-6">
          <form className="flex w-full rounded-xl overflow-hidden border-2 border-[#F25140] shadow-md group focus-within:ring-4 focus-within:ring-[#F25140]/10 transition-all">
            <input
              type="email"
              placeholder="Type your email..."
              className="flex-1 bg-[#F8FAFC] px-5 py-4 text-base outline-none placeholder:text-slate-400 h-14 min-w-0"
              required
            />
            <Button 
              type="submit" 
              className="rounded-none h-14 px-8 bg-[#F25140] text-white hover:bg-[#D94436] font-black text-base md:text-lg transition-colors border-none"
            >
              Subscribe
            </Button>
          </form>
          <div className="space-y-8">
            <p className="text-[12px] text-[#64748B] leading-relaxed max-w-[360px] mx-auto font-medium">
              By subscribing you agree to <Link href="#" className="underline hover:text-primary transition-colors">Substack's Terms of Use</Link>, <Link href="#" className="underline hover:text-primary transition-colors">our Privacy Policy</Link> and our <Link href="#" className="underline hover:text-primary transition-colors">Information collection notice</Link>
            </p>
            <div className="flex justify-center items-center gap-1 opacity-20 grayscale pb-2 transition-opacity hover:opacity-40">
               <div className="flex flex-col gap-[1px]">
                 <div className="w-3.5 h-2.5 bg-black rounded-[1px]" />
                 <div className="w-3.5 h-[2px] bg-black rounded-[1px]" />
                 <div className="w-3.5 h-[1px] bg-black rounded-[1px]" />
               </div>
               <span className="text-[14px] font-black uppercase tracking-tighter ml-1">substack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
