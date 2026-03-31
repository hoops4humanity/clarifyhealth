import { createContext, useContext, useState, useEffect, useRef, type ReactNode } from "react";
import { trackLanguageChange } from "@/lib/analytics";

export type Language = "en" | "es";

interface LanguageContextValue {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
}

const STORAGE_KEY = "clarify_language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

// ── Translations ────────────────────────────────────────────────────────────

const strings: Record<Language, Record<string, string>> = {
  en: {
    // Nav / global
    "nav.topics": "Topics",
    "nav.ask": "Ask",
    "nav.about": "About",
    "footer.copyright": `© ${new Date().getFullYear()} Clarify Health`,

    // Homepage
    "home.hero.line1": "Your health,",
    "home.hero.line2": "finally",
    "home.hero.line3": "makes sense.",
    "home.hero.sub": "Clear, trustworthy explanations of common health conditions — written so anyone can understand.",
    "home.search.placeholder": "Search a condition or ask a question...",
    "home.search.button": "Search",
    "home.stat.topics": "Health topics explained",
    "home.stat.sections": "Sections of plain-language content",
    "home.stat.jargon": "Jargon-free",
    "home.stat1.value": "88%",
    "home.stat1.label": "of American adults lack the skills to navigate the healthcare system",
    "home.stat2.value": "9 in 10",
    "home.stat2.label": "people struggle to understand everyday health information",
    "home.stat3.value": "$238 Billion",
    "home.stat3.label": "lost annually in the US due to low health literacy",
    "home.stat.source": "Sources: National Assessment of Adult Literacy (NAAL) · CDC · American Journal of Health Behavior",
    "home.explore": "Explore Topics",
    "home.readMore": "Read more",
    "home.meta.title": "Clarify Health — Your Health, in Plain English",
    "home.meta.desc": "Clear, trustworthy health education written in plain English. Understand diabetes, blood pressure, cholesterol, and more — no jargon, no confusion.",

    // Topics index
    "topics.title": "Health Topics",
    "topics.sub": "Tap any topic to read a clear, jargon-free explanation.",
    "topics.meta.title": "Health Topics | Clarify Health",
    "topics.meta.desc": "Browse 10 common health conditions explained in plain English. Diabetes, blood pressure, cholesterol, asthma, anxiety, and more.",

    // Topic detail
    "topic.backToTopics": "Topics",
    "topic.doctorQuestions": "5 questions to ask your doctor",
    "topic.copy": "Copy these questions",
    "topic.copied": "Copied!",
    "topic.sourcesDisclaimer": "Clarify Health simplifies information from trusted medical sources. Always consult your doctor.",
    "topic.sourcesTitle": "Sources & Further Reading",
    "topic.disclaimer": "This information is for educational purposes only and is not a substitute for professional medical advice. Always consult your doctor or a qualified health provider.",
    "topic.stillHaveQuestions": "Still have questions?",
    "topic.cta.sub": "Type any health question and get a clear, jargon-free answer.",
    "topic.cta.button": "Ask a question",
    "topic.notFound": "Topic not found",
    "topic.backLink": "← Back to Topics",

    // Ask page
    "ask.heading.ask1": "Ask anything about",
    "ask.heading.ask2": "your health.",
    "ask.heading.diag1": "Understand your",
    "ask.heading.diag2": "diagnosis.",
    "ask.sub.ask": "Get a plain-English answer in seconds. No jargon, no judgment.",
    "ask.sub.diag": "Paste what your doctor told you. We'll explain it in plain English.",
    "ask.tab.ask": "Ask a Question",
    "ask.tab.diagnosis": "Understand My Diagnosis",
    "ask.placeholder.ask": "Type your health question here...",
    "ask.placeholder.diag": "Paste your diagnosis, lab results, or doctor's notes here...",
    "ask.submit.ask": "Get your answer",
    "ask.submit.diag": "Explain this to me",
    "ask.loading": "Finding a clear answer...",
    "ask.rateLimit": "You've reached the hourly limit. Come back soon.",
    "ask.recentQuestions": "Recent questions",
    "ask.meta.title": "Ask a Health Question | Clarify Health",
    "ask.meta.desc": "Type any health question and get a clear, plain-English answer in seconds. No jargon, no judgment — just trustworthy information.",
    "ask.example.cholesterol": "What does high cholesterol mean?",
    "ask.example.anxiety": "How is anxiety treated?",
    "ask.example.sleep": "How can I sleep better?",
    "ask.example.a1c": "My A1C is 7.2%",
    "ask.example.hypertension": "Doctor said I have Stage 1 hypertension",
    "ask.example.tsh": "Lab results show TSH of 6.5",

    // About
    "about.title": "About",
    "about.p1": "Clarify Health was built by a high school student in New Jersey who noticed something troubling: when people get a new diagnosis, the information available online is often confusing, full of medical jargon, and sometimes downright scary.",
    "about.p2": "This site exists because everyone deserves to understand their own health. Not just doctors and nurses — everyone. Your grandmother. Your neighbor. The person sitting in a waiting room right now, worried about what the doctor just told them.",
    "about.p3": "Every article on this site is written in plain, everyday language. No medical terminology without an explanation. No assumptions about what you already know. Just clear, honest information to help you feel less confused and more in control.",
    "about.disclaimer": "Clarify Health is an educational resource, not a substitute for professional medical advice. Always consult your doctor or a qualified healthcare provider.",
    "about.meta.title": "About Clarify Health — Our Mission",
    "about.meta.desc": "Built by a high school student in NJ to help people understand their health. Clear, honest information written so anyone can understand.",

    // 404
    "404.title": "404",
    "404.message": "Oops! Page not found",
    "404.link": "Return to Home",

    // Floating button
    "fab.label": "Ask a question",
  },
  es: {
    // Nav / global
    "nav.topics": "Temas",
    "nav.ask": "Preguntar",
    "nav.about": "Acerca de",
    "footer.copyright": `© ${new Date().getFullYear()} Clarify Health`,

    // Homepage
    "home.hero.line1": "Tu salud,",
    "home.hero.line2": "por fin",
    "home.hero.line3": "tiene sentido.",
    "home.hero.sub": "Explicaciones claras y confiables de condiciones de salud comunes — escritas para que cualquiera las entienda.",
    "home.search.placeholder": "Busca una condición o haz una pregunta...",
    "home.search.button": "Buscar",
    "home.stat.topics": "Temas de salud explicados",
    "home.stat.sections": "Secciones en lenguaje sencillo",
    "home.stat.jargon": "Sin jerga médica",
    "home.stat1.value": "88%",
    "home.stat1.label": "de los adultos estadounidenses carecen de habilidades para navegar el sistema de salud",
    "home.stat2.value": "9 de 10",
    "home.stat2.label": "personas tienen dificultades para comprender la información de salud cotidiana",
    "home.stat3.value": "$238B",
    "home.stat3.label": "se pierden anualmente en EE.UU. debido a la baja alfabetización en salud",
    "home.stat.source": "Fuente: CDC / Evaluación Nacional de Alfabetización de Adultos",
    "home.explore": "Explorar temas",
    "home.readMore": "Leer más",
    "home.meta.title": "Clarify Health — Tu salud, en español sencillo",
    "home.meta.desc": "Educación de salud clara y confiable escrita en español sencillo. Entiende la diabetes, presión arterial, colesterol y más — sin jerga ni confusión.",

    // Topics index
    "topics.title": "Temas de salud",
    "topics.sub": "Toca cualquier tema para leer una explicación clara y sin jerga.",
    "topics.meta.title": "Temas de salud | Clarify Health",
    "topics.meta.desc": "Explora 10 condiciones de salud comunes explicadas en español sencillo. Diabetes, presión arterial, colesterol, asma, ansiedad y más.",

    // Topic detail
    "topic.backToTopics": "Temas",
    "topic.doctorQuestions": "5 preguntas para tu doctor",
    "topic.copy": "Copiar estas preguntas",
    "topic.copied": "¡Copiado!",
    "topic.sourcesDisclaimer": "Clarify Health simplifica información de fuentes médicas confiables. Siempre consulta a tu doctor.",
    "topic.sourcesTitle": "Fuentes y lecturas adicionales",
    "topic.disclaimer": "Esta información es solo con fines educativos y no sustituye el consejo médico profesional. Siempre consulta a tu doctor o a un profesional de salud.",
    "topic.stillHaveQuestions": "¿Aún tienes preguntas?",
    "topic.cta.sub": "Escribe cualquier pregunta de salud y recibe una respuesta clara y sin jerga.",
    "topic.cta.button": "Haz una pregunta",
    "topic.notFound": "Tema no encontrado",
    "topic.backLink": "← Volver a Temas",

    // Ask page
    "ask.heading.ask1": "Pregunta lo que quieras",
    "ask.heading.ask2": "sobre tu salud.",
    "ask.heading.diag1": "Entiende tu",
    "ask.heading.diag2": "diagnóstico.",
    "ask.sub.ask": "Recibe una respuesta en español sencillo en segundos. Sin jerga, sin juicios.",
    "ask.sub.diag": "Pega lo que tu doctor te dijo. Te lo explicamos en español sencillo.",
    "ask.tab.ask": "Haz una pregunta",
    "ask.tab.diagnosis": "Entiende tu diagnóstico",
    "ask.placeholder.ask": "Escribe tu pregunta de salud aquí...",
    "ask.placeholder.diag": "Pega tu diagnóstico, resultados de laboratorio o notas del doctor aquí...",
    "ask.submit.ask": "Obtener respuesta",
    "ask.submit.diag": "Explícame esto",
    "ask.loading": "Buscando una respuesta clara...",
    "ask.rateLimit": "Has alcanzado el límite por hora. Vuelve pronto.",
    "ask.recentQuestions": "Preguntas recientes",
    "ask.meta.title": "Haz una pregunta de salud | Clarify Health",
    "ask.meta.desc": "Escribe cualquier pregunta de salud y recibe una respuesta clara en español sencillo. Sin jerga, sin juicios — solo información confiable.",
    "ask.example.cholesterol": "¿Qué significa colesterol alto?",
    "ask.example.anxiety": "¿Cómo se trata la ansiedad?",
    "ask.example.sleep": "¿Cómo puedo dormir mejor?",
    "ask.example.a1c": "Mi A1C es 7.2%",
    "ask.example.hypertension": "El doctor dijo que tengo hipertensión etapa 1",
    "ask.example.tsh": "Mis resultados muestran TSH de 6.5",

    // About
    "about.title": "Acerca de",
    "about.p1": "Clarify Health fue creado por un estudiante de secundaria en Nueva Jersey que notó algo preocupante: cuando las personas reciben un nuevo diagnóstico, la información disponible en línea suele ser confusa, llena de jerga médica y a veces francamente aterradora.",
    "about.p2": "Este sitio existe porque todos merecen entender su propia salud. No solo los doctores y enfermeras — todos. Tu abuela. Tu vecino. La persona que está sentada en una sala de espera ahora mismo, preocupada por lo que el doctor le acaba de decir.",
    "about.p3": "Cada artículo en este sitio está escrito en lenguaje sencillo y cotidiano. Sin terminología médica sin explicación. Sin suposiciones sobre lo que ya sabes. Solo información clara y honesta para ayudarte a sentir menos confusión y más control.",
    "about.disclaimer": "Clarify Health es un recurso educativo, no un sustituto del consejo médico profesional. Siempre consulta a tu doctor o a un profesional de salud.",
    "about.meta.title": "Acerca de Clarify Health — Nuestra misión",
    "about.meta.desc": "Creado por un estudiante de secundaria en NJ para ayudar a las personas a entender su salud. Información clara y honesta escrita para que cualquiera la entienda.",

    // 404
    "404.title": "404",
    "404.message": "¡Ups! Página no encontrada",
    "404.link": "Volver al inicio",

    // Floating button
    "fab.label": "Haz una pregunta",
  },
};

// ── Provider ────────────────────────────────────────────────────────────────

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "es") return "es";
    } catch { /* noop */ }
    return "en";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const isInitial = useRef(true);
  const setLang = (l: Language) => {
    setLangState(l);
    if (!isInitial.current) trackLanguageChange(l);
  };
  useEffect(() => { isInitial.current = false; }, []);

  const t = (key: string): string => strings[lang][key] ?? strings.en[key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
