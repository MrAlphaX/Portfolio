import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { profile } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, SectionHeading, Tilt } from './fx';

const ICONS: Record<(typeof profile.about.pillars)[number]['icon'], ReactNode> = {
  code: <path d="M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16" />,
  spark: <path d="M12 3l1.9 5.6L19.5 10.5l-5.6 1.9L12 18l-1.9-5.6L4.5 10.5l5.6-1.9L12 3zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z" />,
  layers: <path d="M12 3 3 8l9 5 9-5-9-5zM3 12.5l9 5 9-5M3 17l9 5 9-5" />,
};

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function About() {
  const { scrollTo } = useSmoothScroll();
  const { headline, headlineAccent, bio, education, pillars } = profile.about;

  return (
    <>
      <SectionHeading kicker="The Pilot" title="About Me" />
      <div className="gutter grid items-center gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-14 xl:gap-20">
        {/* portrait */}
        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <div aria-hidden className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(60%_55%_at_50%_45%,rgba(229,19,43,0.38),transparent_75%)] blur-2xl" />
          <Tilt max={5} className="relative rounded-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/15">
              <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,#5a0b1b,#14060a_60%,#07070a)]" />
              <div className="absolute inset-0 opacity-50 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_28px)]" />
              <img
                src={profile.portrait.src}
                srcSet={profile.portrait.srcSet}
                sizes="(max-width: 1024px) 90vw, 36vw"
                alt={profile.portrait.alt}
                loading="lazy"
                className="absolute bottom-0 left-1/2 h-[92%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[10px] font-bold tracking-[0.3em] text-crimson-2">STARRING</p>
                <p className="mt-1 font-display text-[clamp(1.9rem,3vw,2.6rem)] leading-none tracking-wide text-bone">{profile.displayName}</p>
                <p className="mt-2 text-xs font-medium text-bone/75">{profile.about.role}</p>
              </div>
            </div>
          </Tilt>
          <div className="glass relative mt-4 flex items-center gap-3 rounded-xl px-4 py-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-crimson/15 text-crimson-2">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M2 9.5 12 5l10 4.5L12 14 2 9.5zM6 11.5V16c0 1.2 2.7 3 6 3s6-1.8 6-3v-4.5" />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-tight text-bone">{education.degree}</p>
              <p className="mt-0.5 text-xs text-mist">{education.school}</p>
            </div>
          </div>
        </motion.div>

        {/* story */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-8% 0px' }} transition={{ staggerChildren: 0.1 }}>
          <motion.h3 variants={rise} className="font-display text-[clamp(2.5rem,5.2vw,4.75rem)] leading-[0.98] tracking-wide text-bone">
            {headline}{' '}
            <span className="font-serif text-[0.84em] italic tracking-normal text-crimson-2 lg:block">{headlineAccent}</span>
          </motion.h3>

          <motion.p variants={rise} className="mt-5 max-w-2xl text-base leading-relaxed text-bone/75 sm:text-lg">
            {bio}
          </motion.p>

          <motion.ul variants={rise} className="mt-8 grid gap-3 sm:grid-cols-3">
            {pillars.map((p) => (
              <li
                key={p.title}
                className="group relative overflow-hidden rounded-xl bg-ink-3 p-5 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:ring-crimson-2/60"
              >
                <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson-2 to-transparent opacity-60 transition group-hover:opacity-100" />
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-crimson/15 text-crimson-2">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {ICONS[p.icon]}
                  </svg>
                </span>
                <p className="mt-4 text-[15px] font-semibold leading-snug text-bone">{p.title}</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-mist">{p.text}</p>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={rise} className="mt-7">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">Core Skills</p>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((s) => (
                <span key={s} className="glass rounded-full px-3 py-1.5 text-xs font-medium text-bone transition hover:bg-white/15">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={rise} className="mt-8 flex flex-wrap gap-3">
            <Magnetic>
              <button
                type="button"
                onClick={() => scrollTo('#originals')}
                data-cursor="link"
                className="flex min-h-12 items-center gap-2 rounded-md bg-bone px-6 text-[15px] font-bold text-ink transition hover:bg-white"
              >
                View My Work
              </button>
            </Magnetic>
            <Magnetic>
              <a
                href={`mailto:${profile.email}`}
                data-cursor="link"
                className="flex min-h-12 items-center gap-2 rounded-md border border-white/25 px-6 text-[15px] font-semibold text-bone transition hover:border-bone"
              >
                Get in Touch
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
