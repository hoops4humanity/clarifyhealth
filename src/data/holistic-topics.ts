export interface HolisticSection {
  label: string;
  title: string;
  content: string;
}

export interface HolisticSource {
  name: string;
  url: string;
}

export interface HolisticTopic {
  id: string;
  title: string;
  definition: string;
  description: string;
  sections: HolisticSection[];
  takeaways: string[];
  sources: HolisticSource[];
}

import type { Language } from "@/contexts/LanguageContext";
import { holisticTopicsEs } from "./holistic-topics-es";

export function getHolisticTopics(lang: Language): HolisticTopic[] {
  return lang === "es" ? holisticTopicsEs : holisticTopics;
}

export const HOLISTIC_DISCLAIMER_EN = "These approaches may complement — but should never replace — medical treatment. Results vary. Always consult your doctor before making changes to your health routine. No guarantees are made about the effectiveness of any approach described here.";
export const HOLISTIC_DISCLAIMER_ES = "Estos enfoques pueden complementar — pero nunca deben reemplazar — el tratamiento médico. Los resultados varían. Siempre consulta a tu doctor antes de hacer cambios en tu rutina de salud. No se hacen garantías sobre la efectividad de ningún enfoque descrito aquí.";

export const holisticTopics: HolisticTopic[] = [
  {
    id: "anti-inflammatory-foods",
    title: "Anti-Inflammatory Foods",
    definition: "Certain foods contain compounds that can help reduce chronic inflammation in your body — a key driver of many diseases.",
    description: "What anti-inflammatory foods actually do and which ones have evidence behind them",
    sections: [
      { label: "THE BASICS", title: "What is inflammation, and why does food matter?", content: "Inflammation is your body's natural response to injury or infection — it's how you heal. But when inflammation becomes chronic (lasting months or years), it contributes to heart disease, diabetes, cancer, arthritis, and Alzheimer's. Your diet directly affects inflammation levels. Certain foods contain antioxidants, polyphenols, and omega-3 fatty acids that can dial down inflammatory markers like C-reactive protein (CRP) and interleukin-6 (IL-6). This doesn't mean food replaces medicine, but research shows dietary patterns play a meaningful role in managing chronic inflammation." },
      { label: "WHAT THE RESEARCH SAYS", title: "Which foods have evidence behind them?", content: "The Mediterranean diet has the strongest evidence for reducing inflammation — multiple randomized controlled trials show it lowers CRP and other inflammatory markers. Key anti-inflammatory foods include: fatty fish (salmon, sardines, mackerel) rich in omega-3s; berries (blueberries, strawberries) packed with anthocyanins; leafy greens (spinach, kale) high in antioxidants; nuts (walnuts, almonds); olive oil (extra virgin, which contains oleocanthal — a compound with effects similar to ibuprofen); turmeric (curcumin is its active compound, though absorption is limited without black pepper); and tomatoes (rich in lycopene). Whole grains, beans, and green tea also show anti-inflammatory properties in studies." },
      { label: "WHAT TO LIMIT", title: "Foods that promote inflammation", content: "Research consistently links certain foods to increased inflammation: highly processed foods (chips, packaged snacks, fast food), refined sugars and sugary drinks, refined carbohydrates (white bread, pastries), excess red meat and processed meats (bacon, hot dogs, sausage), trans fats (partially hydrogenated oils, still found in some margarine and baked goods), and excessive alcohol. The Western diet — high in processed foods, sugar, and unhealthy fats — is associated with higher levels of inflammatory markers. You don't need to eliminate these entirely, but shifting the balance toward whole, minimally processed foods makes a measurable difference." },
      { label: "PRACTICAL TAKEAWAY", title: "How to actually eat this way", content: "You don't need exotic superfoods or expensive supplements. The anti-inflammatory approach is really just good nutrition: eat more fruits and vegetables (aim for variety and color), choose whole grains over refined ones, eat fish twice a week, use olive oil as your primary cooking fat, snack on nuts instead of processed snacks, and add herbs and spices liberally. The Mediterranean diet is a practical framework. No single food is magic — it's the overall pattern that matters. Changes don't need to be dramatic. Start by adding one more serving of vegetables daily and swapping one processed snack for a handful of nuts. Small, consistent changes add up." },
    ],
    takeaways: [
      "The Mediterranean diet has the strongest evidence for reducing chronic inflammation.",
      "No single \"superfood\" fights inflammation — it's your overall dietary pattern that matters.",
      "Highly processed foods, sugar, and trans fats consistently increase inflammatory markers.",
      "Omega-3 fatty acids (from fish, walnuts, flaxseed) have well-documented anti-inflammatory effects.",
      "Dietary changes complement but never replace prescribed medical treatments.",
    ],
    sources: [
      { name: "Harvard Health — Foods that fight inflammation", url: "https://www.health.harvard.edu/staying-healthy/foods-that-fight-inflammation" },
      { name: "PubMed — Mediterranean diet and inflammation (meta-analysis)", url: "https://pubmed.ncbi.nlm.nih.gov/32060516/" },
      { name: "NIH — Anti-Inflammatory Diet", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7766680/" },
      { name: "Mayo Clinic — How to use food to help your body fight inflammation", url: "https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/how-to-use-food-to-help-your-body-fight-inflammation/art-20457586" },
    ],
  },
  {
    id: "stress-reduction",
    title: "Stress Reduction Techniques",
    definition: "Evidence-based methods like meditation and breathing exercises that can measurably reduce your body's stress response.",
    description: "Meditation, breathing, and relaxation — what the research actually says",
    sections: [
      { label: "THE BASICS", title: "Why does stress reduction matter for health?", content: "Chronic stress isn't just uncomfortable — it's measurably harmful. When your body stays in \"fight or flight\" mode, stress hormones like cortisol remain elevated. Over time, this contributes to high blood pressure, weakened immunity, digestive problems, insomnia, weight gain, anxiety, and depression. The good news: research shows that specific stress reduction techniques can lower cortisol levels, reduce blood pressure, decrease anxiety symptoms, and improve immune function. These aren't just feelings — they're measurable physiological changes documented in peer-reviewed studies." },
      { label: "WHAT THE RESEARCH SAYS", title: "Techniques with strong evidence", content: "Mindfulness meditation has the most research behind it. A 2014 meta-analysis in JAMA Internal Medicine found that mindfulness meditation programs show moderate evidence for improving anxiety, depression, and pain. Mindfulness-Based Stress Reduction (MBSR), an 8-week program developed at UMass Medical School, has been studied in over 800 peer-reviewed papers. Deep breathing exercises (diaphragmatic breathing) activate your parasympathetic nervous system, measurably lowering heart rate and blood pressure. Progressive muscle relaxation has evidence for reducing anxiety and improving sleep. Yoga combines physical movement with breathing and mindfulness — studies show it reduces cortisol and inflammatory markers. Even brief practices (10-15 minutes daily) show benefits in clinical trials." },
      { label: "WHAT'S OVERHYPED", title: "Separating evidence from marketing", content: "While stress reduction techniques have real benefits, be skeptical of claims that meditation can cure diseases, replace therapy for serious mental health conditions, or produce results overnight. Meditation apps and wellness influencers sometimes overstate the evidence. Meditation is not a substitute for professional treatment of clinical anxiety, depression, PTSD, or other mental health disorders. It works best as a complement to evidence-based care. Also, some people experience increased anxiety during meditation (especially those with trauma history) — this is normal and doesn't mean you're doing it wrong. Working with a trained instructor can help." },
      { label: "PRACTICAL TAKEAWAY", title: "How to start", content: "Start small — even 5 minutes daily is beneficial. Try box breathing: inhale for 4 counts, hold for 4, exhale for 4, hold for 4. Repeat for 5 minutes. For mindfulness, sit quietly and focus on your breath. When your mind wanders (it will), gently bring attention back without judgment. That's it — the wandering and returning IS the practice. Body scan meditation involves slowly focusing attention on each part of your body, noticing sensations without trying to change them. Free, evidence-based resources include the UCLA Mindful Awareness Research Center app and the VA's Mindfulness Coach app. Consistency matters more than duration — daily practice of any length outperforms occasional longer sessions." },
    ],
    takeaways: [
      "Mindfulness meditation has moderate evidence for reducing anxiety, depression, and pain (JAMA Internal Medicine).",
      "Deep breathing exercises measurably activate your body's relaxation response.",
      "Even 5-10 minutes of daily practice shows benefits in clinical studies.",
      "Stress reduction complements but does not replace treatment for clinical mental health conditions.",
      "Consistency matters more than session length — daily practice yields the best results.",
    ],
    sources: [
      { name: "JAMA Internal Medicine — Meditation Programs for Psychological Stress", url: "https://pubmed.ncbi.nlm.nih.gov/24395196/" },
      { name: "Harvard Health — Relaxation techniques: Breath control helps quell stress response", url: "https://www.health.harvard.edu/mind-and-mood/relaxation-techniques-breath-control-helps-quell-errant-stress-response" },
      { name: "NIH — Meditation and Mindfulness", url: "https://www.nccih.nih.gov/health/meditation-and-mindfulness-what-you-need-to-know" },
      { name: "Mayo Clinic — Meditation: A simple, fast way to reduce stress", url: "https://www.mayoclinic.org/tests-procedures/meditation/in-depth/meditation/art-20045858" },
    ],
  },
  {
    id: "sleep-hygiene",
    title: "Sleep Hygiene",
    definition: "The habits and environment that set you up for consistent, high-quality sleep — a pillar of physical and mental health.",
    description: "Why sleep matters more than you think and how to actually improve it",
    sections: [
      { label: "THE BASICS", title: "Why is sleep so important?", content: "Sleep isn't just rest — it's when your body does critical maintenance. During sleep, your brain consolidates memories, clears toxic waste products (including beta-amyloid, linked to Alzheimer's), and processes emotions. Your body repairs tissues, releases growth hormones, and regulates metabolism and immune function. Chronic sleep deprivation (consistently getting less than 7 hours) is linked to increased risk of heart disease, obesity, type 2 diabetes, depression, weakened immunity, and even premature death. The CDC considers insufficient sleep a public health epidemic. Yet one-third of American adults don't get enough." },
      { label: "WHAT THE RESEARCH SAYS", title: "Evidence-based sleep strategies", content: "Sleep research points to several consistent findings. Your circadian rhythm (internal clock) responds most strongly to light — morning sunlight exposure helps set your clock, while blue light from screens in the evening suppresses melatonin production. A cool room (65-68°F / 18-20°C) promotes better sleep because your core body temperature needs to drop to initiate sleep. Consistent sleep and wake times — even on weekends — are more important than total hours. Cognitive behavioral therapy for insomnia (CBT-I) is considered the gold standard treatment for chronic insomnia, more effective than sleeping pills long-term. Caffeine has a half-life of 5-6 hours, meaning half the caffeine from your 2 PM coffee is still in your system at 8 PM." },
      { label: "COMMON MYTHS", title: "What doesn't work as well as you'd think", content: "Alcohol may help you fall asleep faster, but it significantly reduces sleep quality — it disrupts REM sleep and causes more nighttime awakenings. \"Catching up\" on sleep on weekends doesn't fully reverse the effects of weeknight sleep deprivation. Melatonin supplements can help with jet lag and circadian rhythm disorders, but evidence for general insomnia is weaker than most people think — and quality/dosing varies wildly between brands. Sleep tracking devices can cause anxiety about sleep (\"orthosomnia\") and aren't always accurate. Naps longer than 20-30 minutes can interfere with nighttime sleep and leave you feeling groggier (sleep inertia)." },
      { label: "PRACTICAL TAKEAWAY", title: "Building better sleep habits", content: "Set a consistent wake time 7 days a week — this is the single most impactful change you can make. Get bright light exposure within 30 minutes of waking. Stop caffeine by early afternoon. Create a wind-down routine 30-60 minutes before bed: dim lights, put away screens (or use blue-light filters), and do something calming. Keep your bedroom cool, dark, and quiet. If you're awake in bed for more than 20 minutes, get up and do something boring in dim light until you feel sleepy — this prevents your brain from associating bed with wakefulness. If insomnia persists beyond a few weeks, ask your doctor about CBT-I — it addresses the root causes rather than masking symptoms." },
    ],
    takeaways: [
      "Consistent sleep and wake times matter more than total hours of sleep.",
      "CBT-I (cognitive behavioral therapy for insomnia) is more effective than sleeping pills long-term.",
      "Caffeine has a 5-6 hour half-life — afternoon coffee genuinely affects nighttime sleep.",
      "Alcohol helps you fall asleep but significantly worsens sleep quality.",
      "Morning light exposure is one of the most powerful tools for regulating your sleep cycle.",
    ],
    sources: [
      { name: "NIH — Sleep Deprivation and Deficiency", url: "https://www.nhlbi.nih.gov/health/sleep-deprivation" },
      { name: "Harvard Health — Blue light has a dark side", url: "https://www.health.harvard.edu/staying-healthy/blue-light-has-a-dark-side" },
      { name: "Mayo Clinic — Insomnia", url: "https://www.mayoclinic.org/diseases-conditions/insomnia/symptoms-causes/syc-20355167" },
      { name: "CDC — Sleep and Sleep Disorders", url: "https://www.cdc.gov/sleep/index.html" },
    ],
  },
  {
    id: "herbal-supplements",
    title: "Herbal Supplements",
    definition: "Plant-based products marketed for health benefits — some with promising research, many without, and important safety concerns to know.",
    description: "What's studied, what isn't, and what you need to know before taking them",
    sections: [
      { label: "THE BASICS", title: "What are herbal supplements?", content: "Herbal supplements are products made from plants (roots, leaves, flowers, seeds) that are taken for their potential health effects. Here's the critical thing most people don't know: in the United States, herbal supplements are regulated as food, not as drugs. This means manufacturers don't need to prove they work or that they're safe before selling them. They can't legally claim to treat or cure diseases, but they can make vague \"structure/function\" claims like \"supports immune health.\" The FDA only steps in after a product has been shown to cause harm. Quality control varies enormously between brands — independent testing has found that some supplements don't contain what's on the label, and some contain contaminants." },
      { label: "WHAT THE RESEARCH SAYS", title: "Supplements with some evidence", content: "A few herbal supplements have meaningful research behind them. St. John's Wort has been studied for mild to moderate depression — some trials show effects comparable to SSRIs, but it has serious drug interactions (including with birth control, blood thinners, and other antidepressants). Ginger has moderate evidence for reducing nausea (especially pregnancy-related and chemotherapy-induced). Turmeric/curcumin shows anti-inflammatory properties in studies, but absorption is very poor without piperine (black pepper extract), and most studies use concentrated extracts far beyond what you'd get from cooking. Saw palmetto has been studied for benign prostate enlargement with mixed results. Valerian root has some evidence for sleep, though results are inconsistent." },
      { label: "RED FLAGS", title: "What to watch out for", content: "Be cautious of supplements that: claim to cure or treat diseases (this is illegal and a red flag), contain proprietary blends that don't list individual ingredient amounts, are marketed with before-and-after photos or testimonials instead of research citations, come from companies without third-party testing certifications (look for USP, NSF, or ConsumerLab seals), or are dramatically cheaper than competitors (quality costs money). Herbal supplements can interact dangerously with prescription medications — St. John's Wort alone interacts with over 500 drugs. Always tell your doctor about everything you're taking. Some supplements can affect surgery outcomes, so surgeons recommend stopping all supplements 2-3 weeks before procedures." },
      { label: "PRACTICAL TAKEAWAY", title: "Making informed decisions", content: "If you're considering an herbal supplement: first, ask your doctor (especially if you take any medications). Look for products with third-party testing seals (USP, NSF International, ConsumerLab). Check the NIH's Office of Dietary Supplements fact sheets for evidence-based information on specific supplements. Start with one supplement at a time so you can identify any effects or side effects. Be skeptical of dramatic claims — if something sounds too good to be true, it probably is. Remember that 'natural' doesn't mean 'safe' — arsenic and poison ivy are natural too. Finally, no supplement can compensate for poor diet, inadequate sleep, or lack of exercise." },
    ],
    takeaways: [
      "Herbal supplements are regulated as food, not drugs — manufacturers don't need to prove they work.",
      "A few supplements (St. John's Wort, ginger, curcumin) have meaningful research, but most do not.",
      "Herbal supplements can interact dangerously with prescription medications — always inform your doctor.",
      "Look for third-party testing seals (USP, NSF, ConsumerLab) for quality assurance.",
      "\"Natural\" does not mean \"safe\" or \"effective\" — evaluate each product based on evidence.",
    ],
    sources: [
      { name: "NIH — Dietary Supplements: What You Need to Know", url: "https://ods.od.nih.gov/factsheets/WYNTK-Consumer/" },
      { name: "Mayo Clinic — Herbal supplements: What to know before you buy", url: "https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/herbal-supplements/art-20046714" },
      { name: "Harvard Health — Herbal remedies", url: "https://www.health.harvard.edu/staying-healthy/herbal-remedies" },
      { name: "NIH — Herb-Drug Interactions", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3991026/" },
    ],
  },
  {
    id: "exercise-as-medicine",
    title: "Exercise as Medicine",
    definition: "Physical activity is one of the most powerful, evidence-based tools for preventing and managing chronic disease.",
    description: "The evidence that movement is one of the best medicines we have",
    sections: [
      { label: "THE BASICS", title: "Why is exercise considered medicine?", content: "If exercise were a pill, it would be the most prescribed medication in the world. Regular physical activity reduces the risk of heart disease by up to 35%, type 2 diabetes by up to 40%, colon cancer by 30%, breast cancer by 20%, and depression by up to 30%. It lowers blood pressure, improves cholesterol, strengthens bones, boosts immune function, improves sleep, and enhances cognitive function. Exercise triggers the release of endorphins, serotonin, and BDNF (brain-derived neurotrophic factor) — a protein that supports brain cell growth. No medication on earth matches the breadth of exercise's benefits with so few side effects." },
      { label: "WHAT THE RESEARCH SAYS", title: "How much exercise do you actually need?", content: "The WHO and CDC both recommend at least 150 minutes of moderate-intensity aerobic activity per week (like brisk walking) or 75 minutes of vigorous activity (like running), plus muscle-strengthening activities on 2 or more days per week. But here's the key finding: any increase in activity provides benefits. A landmark 2019 study in the BMJ found that even light physical activity (gentle walking) was associated with substantially lower risk of death. Moving from no exercise to some exercise produces the biggest health gain — bigger than going from some exercise to a lot. For mental health, exercise has been shown in randomized trials to be as effective as antidepressants for mild to moderate depression." },
      { label: "SPECIFIC CONDITIONS", title: "Exercise prescriptions for common conditions", content: "For heart disease: aerobic exercise (walking, cycling, swimming) 30 minutes, 5 days a week, at moderate intensity. For type 2 diabetes: both aerobic and resistance training improve blood sugar control — combined exercise reduces A1C by about 0.66%. For arthritis: low-impact exercise (swimming, cycling, tai chi) reduces pain and improves function — contrary to the old advice to \"rest\" painful joints. For depression and anxiety: 30 minutes of moderate exercise 3-5 times per week has antidepressant and anti-anxiety effects. For osteoporosis: weight-bearing exercise (walking, dancing) and resistance training stimulate bone growth. For chronic pain: gentle, progressive exercise often reduces pain over time, even though it may feel counterintuitive." },
      { label: "PRACTICAL TAKEAWAY", title: "Getting started and staying consistent", content: "The best exercise is the one you'll actually do. Walking is the most accessible, safest form of exercise — and it works. Start with 10-minute walks and build from there. You don't need a gym membership, expensive equipment, or athletic ability. Break exercise into shorter bouts if needed — three 10-minute walks provide similar benefits to one 30-minute walk. Find something you enjoy: dancing, gardening, swimming, cycling, hiking, playing with your kids. Social exercise (walking with a friend, group classes) improves adherence. Track your activity — even a simple step counter increases motivation. If you have a chronic condition, ask your doctor before starting, but know that there are very few conditions where some form of exercise isn't beneficial." },
    ],
    takeaways: [
      "Regular exercise reduces risk of heart disease (35%), diabetes (40%), and depression (30%).",
      "The biggest health gain comes from going from no exercise to some — any amount helps.",
      "Exercise has been shown to be as effective as antidepressants for mild to moderate depression.",
      "Walking is one of the most effective and accessible forms of exercise — it genuinely works.",
      "150 minutes per week of moderate activity is the recommended target, but less still provides benefits.",
    ],
    sources: [
      { name: "CDC — Physical Activity Basics", url: "https://www.cdc.gov/physicalactivity/basics/index.htm" },
      { name: "Harvard Health — Exercise is medicine", url: "https://www.health.harvard.edu/topics/exercise-and-fitness" },
      { name: "PubMed — Exercise as Medicine (BMJ 2019)", url: "https://pubmed.ncbi.nlm.nih.gov/30842107/" },
      { name: "Mayo Clinic — Exercise: 7 benefits of regular physical activity", url: "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389" },
    ],
  },
  {
    id: "gut-health",
    title: "Gut Health & the Microbiome",
    definition: "The trillions of bacteria living in your digestive system play a surprising role in immunity, mood, weight, and overall health.",
    description: "Your microbiome — what science actually knows and what's still hype",
    sections: [
      { label: "THE BASICS", title: "What is the gut microbiome?", content: "Your gut is home to trillions of microorganisms — bacteria, viruses, fungi, and other microbes — collectively called the gut microbiome. You have roughly as many bacterial cells as human cells in your body. These microbes aren't just passengers; they perform essential functions. They help digest food (especially fiber your body can't break down), produce vitamins (K, B12, folate), train your immune system, produce neurotransmitters (about 95% of your serotonin is made in the gut), maintain the gut lining, and fight off harmful bacteria. A diverse microbiome — one with many different species — is generally associated with better health." },
      { label: "WHAT THE RESEARCH SAYS", title: "What science actually knows", content: "Gut microbiome research is one of the fastest-growing fields in medicine, but it's important to separate established findings from speculation. What's well-supported: antibiotic use disrupts the microbiome (sometimes significantly), and recovery can take weeks to months. Fiber feeds beneficial gut bacteria and increases microbial diversity. The gut-brain axis is real — gut bacteria communicate with the brain via the vagus nerve and by producing neurotransmitters. Dysbiosis (an imbalanced microbiome) is associated with conditions like IBD, obesity, type 2 diabetes, and depression — though whether it's a cause or consequence is often unclear. Fecal microbiota transplants (FMT) are effective for recurrent C. difficile infections, an FDA-approved use." },
      { label: "WHAT'S OVERHYPED", title: "Claims that outrun the science", content: "The microbiome has become a marketing goldmine, and many claims go far beyond the evidence. Most commercial probiotic supplements have limited evidence for specific health conditions — the strains in most off-the-shelf products often don't match what was used in clinical trials. \"Gut health\" tests sold directly to consumers have limited clinical utility — your microbiome changes daily based on what you eat, and we don't yet have a clear definition of what an \"ideal\" microbiome looks like. Claims that specific foods \"heal\" your gut or that leaky gut syndrome causes everything from acne to autoimmune disease are overstated. The science is promising but still early — be cautious about products that cite \"emerging research\" to sell expensive supplements." },
      { label: "PRACTICAL TAKEAWAY", title: "Evidence-based ways to support gut health", content: "Eat a diverse, fiber-rich diet — this is the single most impactful thing you can do. Different types of fiber feed different beneficial bacteria. Aim for 25-30 grams of fiber daily from various sources: vegetables, fruits, whole grains, beans, lentils, nuts, and seeds. Eat fermented foods regularly: yogurt (with live cultures), kefir, sauerkraut, kimchi, miso, and kombucha contain live beneficial bacteria. Limit unnecessary antibiotic use (but always take prescribed antibiotics). Avoid highly processed foods, which are associated with reduced microbial diversity. Exercise has been shown to independently improve microbiome diversity. If you're considering probiotics, look for specific strains studied for your condition, not generic formulations. The field is evolving rapidly — stay curious but skeptical." },
    ],
    takeaways: [
      "A diverse, fiber-rich diet is the strongest evidence-based way to support gut health.",
      "The gut-brain connection is real — gut bacteria produce neurotransmitters including most of your serotonin.",
      "Most commercial probiotic supplements lack strong evidence for general health benefits.",
      "Fermented foods (yogurt, kimchi, sauerkraut) naturally introduce beneficial bacteria.",
      "Microbiome science is promising but still early — be cautious of products that overstate the evidence.",
    ],
    sources: [
      { name: "Harvard Health — The gut-brain connection", url: "https://www.health.harvard.edu/diseases-and-conditions/the-gut-brain-connection" },
      { name: "NIH — The Human Microbiome", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3426293/" },
      { name: "Mayo Clinic — Prebiotics, probiotics and your health", url: "https://www.mayoclinic.org/prebiotics-probiotics-and-your-health/art-20390058" },
      { name: "PubMed — Diet and the gut microbiome", url: "https://pubmed.ncbi.nlm.nih.gov/30150677/" },
    ],
  },
];
