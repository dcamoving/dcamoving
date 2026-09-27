import Image from 'next/image';
import ConsultativeForm from '@/components/ConsultativeForm';

export default function WhiteGloveHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950" aria-label="White-Glove Introduction">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          alt="Luxury estate interior"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
      </div>

      {/* Gradients for depth and readability */}
      <div className="absolute inset-0 z-10 bg-slate-950/80 md:bg-gradient-to-r md:from-slate-950/95 md:via-slate-900/80 md:to-slate-900/40"></div>
      
      <div className="container relative z-20 flex flex-col lg:flex-row items-center justify-between gap-12 pt-32 pb-24">
        
        {/* Left Column: Premium Typography & Narrative */}
        <div className="flex-1 text-white w-full lg:pr-8">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-amber-500"></div>
            <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold">Private Client Services</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8">
            Uncompromising Logistics for <br className="hidden md:block" />
            <span className="font-serif italic text-amber-400">High-Value Assets</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-12 max-w-2xl">
            We partner with estate managers and private collectors to mitigate the risks of complex transitions. Enjoy flawless relocations through museum-grade protection, secure transport, and dedicated executive oversight.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-slate-900/80 border border-amber-500/30">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-amber-400" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Dedicated</p>
                <p className="text-lg font-semibold text-white">Relocation Director</p>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-14 bg-white/10"></div>
            
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-slate-900/80 border border-amber-500/30">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-amber-400" strokeWidth="1.5">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Absolute</p>
                <p className="text-lg font-semibold text-white">Discretion & Privacy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Consultative Form */}
        <div className="w-full lg:w-[480px] flex-shrink-0 mt-12 lg:mt-0">
          <ConsultativeForm />
        </div>

      </div>
    </section>
  );
}
