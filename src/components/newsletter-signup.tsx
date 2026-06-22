import { Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function NewsletterSignup() {
  return (
    <section id="newsletter" className="w-full py-20 md:py-32 border-t bg-white">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        {/* Blue Circle Icon */}
        <div className="w-[72px] h-[72px] rounded-full bg-[#3B5998] flex items-center justify-center text-white mb-8 shadow-sm">
          <Mail className="h-9 w-9" />
        </div>
        
        <div className="space-y-3 mb-12">
          <h2 className="text-2xl md:text-[32px] font-bold tracking-tight text-[#0F172A] font-headline">
            Subscribe for Expert Insights
          </h2>
          <p className="text-[#64748B] text-lg font-medium font-body">
            Check Latest Updates
          </p>
        </div>

        <div className="mx-auto w-full max-w-md">
          <form className="flex w-full rounded-xl overflow-hidden border border-[#F25140] bg-[#F8FAFC] shadow-sm mb-8 transition-all focus-within:ring-4 focus-within:ring-[#F25140]/10">
            <input
              type="email"
              placeholder="Type your email..."
              className="flex-1 bg-transparent px-5 py-4 text-base outline-none placeholder:text-slate-400 h-14 min-w-0"
              required
            />
            <Button 
              type="submit" 
              className="rounded-none h-14 px-8 bg-[#F25140] text-white hover:bg-[#D94436] font-bold text-lg transition-colors border-none"
            >
              Subscribe
            </Button>
          </form>
          
          <div className="space-y-6">
            <p className="text-[13px] text-[#64748B] leading-relaxed max-w-[360px] mx-auto font-medium font-body">
              By subscribing you agree to <Link href="#" className="underline hover:text-[#F25140] transition-colors">Substack's Terms of Use</Link>, <Link href="#" className="underline hover:text-[#F25140] transition-colors">our Privacy Policy</Link> and our <Link href="#" className="underline hover:text-[#F25140] transition-colors">Information collection notice</Link>
            </p>
            
            {/* Substack Footer Style */}
            <div className="flex justify-center items-center gap-1.5 opacity-30 grayscale select-none">
               <div className="flex flex-col gap-[1px]">
                 <div className="w-4 h-[3px] bg-black rounded-[0.5px]" />
                 <div className="w-4 h-[2px] bg-black rounded-[0.5px]" />
                 <div className="w-4 h-[1px] bg-black rounded-[0.5px]" />
               </div>
               <span className="text-[16px] font-black uppercase tracking-tighter leading-none">substack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
