import { useEffect } from 'react';
import { Section, FadeIn, Button, SectionHeading } from './components/Shared';
import { Clock, Eye, Activity, Filter, Box, Crosshair, Map, ShieldAlert } from 'lucide-react';

export function App() {
  useEffect(() => {
    document.title = "Retention Architect | Narrative Design";
  }, []);

  return (
    <main className="bg-[#0D0D0F] min-h-screen text-[#F2F2F2] font-sans antialiased overflow-x-hidden relative">
      {/* Subtle background light */}
      <div className="fixed top-[-50%] left-[-10%] w-[120vw] h-[150vh] bg-[radial-gradient(circle_at_50%_0%,_rgba(140,43,43,0.06)_0%,_rgba(13,13,15,1)_60%)] pointer-events-none z-[-1]"></div>

      <Hero />
      <Statement />
      <Manifesto />
      <Framework />
      <Failures />
      <CaseStudies />
      <Process />
      <Deliverables />
      <WhoThisIsFor />
      <ClosingCTA />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 relative w-full pt-20">
      <FadeIn delay={0.2} className="w-full max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-8 text-[#F2F2F2] drop-shadow-sm">
          Structure Dictates<br/>Attention.
        </h1>
      </FadeIn>
      <FadeIn delay={0.6} className="w-full max-w-2xl mx-auto mb-16">
        <p className="text-zinc-400 text-lg md:text-xl font-light tracking-wide leading-relaxed">
          Engineering psychological retention for long-form documentary through narrative architecture, not algorithms.
        </p>
      </FadeIn>
      <FadeIn delay={1.0} className="flex flex-col sm:flex-row items-center gap-6">
        <Button href="#diagnosis" variant="primary">Begin a Retention Diagnosis</Button>
        <Button href="#studies" variant="secondary">View Narrative Studies</Button>
      </FadeIn>
      
      {/* Scroll indicator */}
      <FadeIn delay={1.5} className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-50">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-zinc-500 to-transparent animate-pulse"></div>
      </FadeIn>
    </section>
  );
}

function Statement() {
  return (
    <Section className="py-24 md:py-32 flex items-center justify-center border-t border-zinc-900/50 relative">
      <FadeIn className="text-center max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-zinc-300 font-normal leading-snug tracking-wide">
          Retention is not storytelling.<br className="hidden md:block"/>
          <span className="text-white mt-4 block">Retention is sustained tension.</span>
        </h2>
      </FadeIn>
    </Section>
  );
}

function Manifesto() {
  return (
    <Section id="manifesto" className="bg-zinc-950/30 border-y border-zinc-900/50">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl text-[#F2F2F2] leading-tight mb-8">
            Most creators confuse information with engagement.
          </h2>
          <div className="w-12 h-[1px] bg-[#8c2b2b] mb-8"></div>
          <p className="text-zinc-400 text-lg font-light leading-relaxed mb-6">
            Documentary audiences crave depth, but depth without architecture collapses into noise. 
            I design structures that transform passive viewing into active psychological investment.
          </p>
          <p className="text-zinc-400 text-lg font-light leading-relaxed">
            I do not write scripts. I engineer architecture.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.2} className="space-y-8 pl-0 md:pl-12 border-l-0 md:border-l border-zinc-900">
          <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6 font-medium">The Architectural Impact</h3>
          <ul className="space-y-6">
            {[
              { text: "Extends Average View Duration structurally", icon: Clock },
              { text: "Reduces early drop-offs through calibrated pacing", icon: Activity },
              { text: "Sustains psychological engagement for 45+ minutes", icon: Eye },
              { text: "Engineers curiosity loops that bridge act breaks", icon: Filter },
              { text: "Creates emotional residue long after the video ends", icon: Box }
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <item.icon className="w-5 h-5 text-[#8c2b2b] mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300 font-light">{item.text}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </Section>
  );
}

function Framework() {
  const principles = [
    {
      title: "Information Gap Calibration",
      desc: "Precision timing of what the audience knows versus what they need to know.",
      effect: "Creates an unscratchable itch. Forces continued viewing to resolve cognitive dissonance.",
      intent: "Preventing premature satisfaction."
    },
    {
      title: "Escalation Mapping",
      desc: "Plotting the rising stakes so the climax is structurally inevitable.",
      effect: "Ensures the 30-minute mark feels just as urgent as the 3-minute mark.",
      intent: "Neutralizing mid-video fatigue."
    },
    {
      title: "Pattern Interrupt Placement",
      desc: "Strategic disruption of visual and narrative rhythms at the precise moment attention wanes.",
      effect: "Resets the brain's habituation mechanism. Restores full focus.",
      intent: "Combating algorithmic conditioning."
    },
    {
      title: "Emotional Mirror Technique",
      desc: "Aligning the subject's internal state with the viewer's real-time psychological experience.",
      effect: "Builds deep parasocial resonance. The story stops being external.",
      intent: "Anchoring logical facts in visceral feeling."
    },
    {
      title: "Controlled Ambiguity Layering",
      desc: "Leaving carefully designed spaces for the viewer's imagination to do the heavy lifting.",
      effect: "Transforms passive consumption into active participation.",
      intent: "Engineering emotional residue."
    }
  ];

  return (
    <Section id="framework" className="py-32">
      <FadeIn>
        <SectionHeading>The Retention Architecture Framework</SectionHeading>
      </FadeIn>
      
      <div className="grid gap-12">
        {principles.map((p, idx) => (
          <FadeIn key={idx} delay={idx * 0.1} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-xl"></div>
            <div className="p-8 md:p-10 border border-zinc-800/50 group-hover:border-zinc-700/50 transition-colors duration-500 rounded-xl bg-[#0D0D0F]/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-1/3">
                  <div className="text-[#8c2b2b] text-sm font-mono tracking-wider mb-3">0{idx + 1}</div>
                  <h3 className="font-serif text-2xl text-white mb-4">{p.title}</h3>
                  <p className="text-zinc-400 font-light text-sm md:text-base">{p.desc}</p>
                </div>
                
                <div className="md:w-2/3 grid sm:grid-cols-2 gap-8 border-t md:border-t-0 md:border-l border-zinc-800/50 pt-8 md:pt-0 md:pl-16">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Psychological Effect</h4>
                    <p className="text-zinc-300 font-light text-sm">{p.effect}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Strategic Intention</h4>
                    <p className="text-zinc-300 font-light text-sm">{p.intent}</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function Failures() {
  return (
    <Section className="bg-zinc-950/50 border-y border-zinc-900/50">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <FadeIn>
          <SectionHeading className="mb-6">Why Most Documentary Scripts Fail</SectionHeading>
          <p className="text-zinc-400 text-lg font-light max-w-2xl mx-auto">
            Information without architecture is just a Wikipedia article read aloud.
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: ShieldAlert,
            title: "Premature Resolution",
            desc: "Answering the primary narrative question too early, destroying the structural need to continue watching."
          },
          {
            icon: Map,
            title: "Flat Escalation",
            desc: "Treating all evidence as equally important. Without a hierarchy of revelation, tension plateaus."
          },
          {
            icon: Crosshair,
            title: "Chronological Trap",
            desc: "Following timelines strictly instead of following the emotional logic of the mystery."
          }
        ].map((f, i) => (
          <FadeIn key={i} delay={i * 0.15} className="border border-zinc-800/50 p-8 rounded-xl bg-[#0D0D0F]">
            <f.icon className="w-8 h-8 text-[#8c2b2b] mb-6 opacity-80" strokeWidth={1.5} />
            <h3 className="text-xl font-serif text-white mb-4">{f.title}</h3>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">{f.desc}</p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function CaseStudies() {
  const cases = [
    {
      title: "Case 01: The Vanishing",
      type: "Unsolved Disappearance",
      problem: "The timeline was entirely known within the first 10 minutes. Early drop-off was catastrophic because the audience felt they already possessed the facts.",
      strategy: "Controlled Ambiguity. We fractured the timeline, presenting the aftermath before the inciting incident, forcing the viewer to piece together the psychological state of the subject.",
      mechanism: "Cognitive Dissonance Resolution",
      impact: "Sustained a 68% retention rate past the 35-minute mark by turning a known timeline into an unknown psychological puzzle."
    },
    {
      title: "Case 02: The Buried Archive",
      type: "Hidden Historical Program",
      problem: "Heavy, dense informational blocks describing bureaucratic systems caused mid-video fatigue. The stakes felt historical, not immediate.",
      strategy: "Escalation Mapping. We anchored the systemic history to a single, escalating human consequence. Every document revealed increased the danger for one specific individual.",
      mechanism: "Parasocial Transference",
      impact: "Eliminated the traditional Act II dip entirely. View duration extended by 42% relative to channel average."
    },
    {
      title: "Case 03: The Architect's Mind",
      type: "Psychological Mystery",
      problem: "The motive was obvious, making the investigation feel like a foregone conclusion. The tension was flat.",
      strategy: "Information Gap Calibration. We withheld the true motive, instead presenting three equally plausible, contradicting psychological profiles, systematically eliminating them.",
      mechanism: "Curiosity Loop Engineering",
      impact: "Created the highest audience engagement (comments/theories) in channel history, driven by structural debate."
    }
  ];

  return (
    <Section id="studies" className="py-32">
      <FadeIn>
        <SectionHeading>Narrative Studies</SectionHeading>
        <p className="text-zinc-400 mb-16 max-w-2xl font-light">Structural logic, not fabricated metrics. These are architectural interventions designed to fundamentally alter audience behavior.</p>
      </FadeIn>

      <div className="space-y-12">
        {cases.map((c, i) => (
          <FadeIn key={i} delay={i * 0.1} className="border-t border-zinc-800/50 pt-12">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
              <div>
                <h3 className="font-serif text-2xl text-white mb-2">{c.title}</h3>
                <span className="text-[#8c2b2b] text-xs uppercase tracking-widest font-medium">{c.type}</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-3">The Narrative Problem</h4>
                    <p className="text-zinc-300 font-light text-sm leading-relaxed">{c.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-3">The Strategy</h4>
                    <p className="text-zinc-300 font-light text-sm leading-relaxed">{c.strategy}</p>
                  </div>
                </div>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-3">Psychological Mechanism</h4>
                    <p className="text-[#8c2b2b] font-serif text-lg">{c.mechanism}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-3">Retention Impact</h4>
                    <p className="text-zinc-300 font-light text-sm leading-relaxed">{c.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function Process() {
  const steps = [
    { num: "01", title: "Narrative Diagnosis", desc: "A forensic breakdown of your existing structure, identifying pacing collapsed, tension leaks, and premature resolutions." },
    { num: "02", title: "Structural Blueprint", desc: "Mapping the psychological journey. Defining the escalating stakes, the curiosity loops, and the precise moments of pattern interruption." },
    { num: "03", title: "Script Engineering", desc: "Translating the blueprint into actual language. Calibrating the white space, the rhythm of revelation, and the tension of the unseen." },
    { num: "04", title: "Refinement & Calibration", desc: "The final polish. Ensuring the voice remains singular, the tone remains restrained, and the architecture is invisible to the audience." }
  ];

  return (
    <Section className="bg-[#121214] border-y border-zinc-900/50 py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,_rgba(140,43,43,0.03)_0%,_transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <SectionHeading className="mb-20 text-center">The Architecture Process</SectionHeading>
        </FadeIn>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-zinc-800/50 z-0"></div>
          
          {steps.map((s, i) => (
            <FadeIn key={i} delay={i * 0.15} className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-[#0D0D0F] border border-zinc-800 flex items-center justify-center text-[#8c2b2b] font-serif text-xl mb-8 shadow-[0_0_20px_rgba(13,13,15,1)]">
                {s.num}
              </div>
              <h3 className="text-xl font-serif text-white mb-4">{s.title}</h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">{s.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Deliverables() {
  const deliverables = [
    {
      title: "The Structural Diagnostic",
      desc: "A brutal, objective breakdown of your current storytelling architecture. Identifying exactly where your audience habituates and drops off."
    },
    {
      title: "The Narrative Blueprint",
      desc: "A custom 20+ page architectural framework for your next documentary. Plotting the tension curve, escalation map, and curiosity hooks before a single word is scripted."
    },
    {
      title: "Psychological Script Review",
      desc: "A line-by-line calibration of your drafted script to ensure pacing alignment, tension preservation, and strategic ambiguity."
    }
  ];

  return (
    <Section className="py-32">
      <FadeIn>
        <SectionHeading className="mb-16">What You Receive</SectionHeading>
      </FadeIn>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 border-t border-zinc-800/50 pt-16">
        {deliverables.map((d, i) => (
          <FadeIn key={i} delay={i * 0.15}>
            <div className="text-[#8c2b2b] text-sm font-mono tracking-wider mb-4">0{i + 1}</div>
            <h3 className="font-serif text-2xl text-white mb-4">{d.title}</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">{d.desc}</p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function WhoThisIsFor() {
  return (
    <Section className="py-32">
      <div className="grid md:grid-cols-2 gap-16 lg:gap-32 max-w-5xl mx-auto">
        <FadeIn>
          <h3 className="font-serif text-2xl text-white mb-8 pb-4 border-b border-zinc-900">This is for creators who...</h3>
          <ul className="space-y-6">
            {["Understand that retention is a psychological metric, not an algorithmic one.", "Produce long-form documentaries (30m+) in true crime, history, or investigation.", "Value depth, nuance, and structural elegance over cheap virality.", "Have the production quality, but lack the narrative architecture to hold attention."].map((item, i) => (
              <li key={i} className="flex gap-4 text-zinc-400 font-light text-sm leading-relaxed">
                <span className="text-[#8c2b2b] mt-1">✓</span> {item}
              </li>
            ))}
          </ul>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h3 className="font-serif text-2xl text-zinc-500 mb-8 pb-4 border-b border-zinc-900">This is not for creators who...</h3>
          <ul className="space-y-6">
            {["Rely on fast-paced editing and loud sound effects to mask a weak story.", "Believe MRBEAST-style retention tactics work for serious documentaries.", "Want a freelance writer to quickly churn out a script from Wikipedia.", "Are looking for algorithmic growth hacks instead of narrative mastery."].map((item, i) => (
              <li key={i} className="flex gap-4 text-zinc-600 font-light text-sm leading-relaxed">
                <span className="text-zinc-800 mt-1">✕</span> {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </Section>
  );
}

function ClosingCTA() {
  return (
    <Section id="diagnosis" className="py-40 text-center relative border-t border-zinc-900/50 bg-[#0D0D0F]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(140,43,43,0.08)_0%,_transparent_60%)]"></div>
      
      <FadeIn className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight">
          The story is already there.<br />
          <span className="text-zinc-500">The tension must be built.</span>
        </h2>
        <p className="text-zinc-400 text-lg font-light mb-12">
          If your long-form documentaries deserve structural rigor, we should talk.
        </p>
        <Button variant="primary" className="px-12 py-4 text-base">Request a Diagnosis</Button>
      </FadeIn>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-900 text-center bg-[#09090A]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-serif text-xl tracking-wide text-zinc-300">RETENTION ARCHITECT</span>
        <div className="text-zinc-600 text-xs tracking-widest uppercase">
          Narrative Design • Psychological Engineering
        </div>
        <div className="text-zinc-600 text-sm">
          © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
