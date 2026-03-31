export interface TopicSection {
  label: string;
  title: string;
  content: string;
}

export interface TopicSource {
  name: string;
  url: string;
}

export interface Topic {
  id: string;
  title: string;
  definition: string;
  description: string;
  sections: TopicSection[];
  doctorQuestions: string[];
  sources: TopicSource[];
}

import type { Language } from "@/contexts/LanguageContext";
import { topicsEs } from "./topics-es";
import { topicsUr } from "./topics-ur";
import { topicsHi } from "./topics-hi";
import { topicsAr } from "./topics-ar";

const topicsByLang: Record<Language, Topic[]> = {
  en: undefined as unknown as Topic[], // assigned after `topics` is declared
  es: topicsEs,
  ur: topicsUr,
  hi: topicsHi,
  ar: topicsAr,
};

export function getTopics(lang: Language): Topic[] {
  return topicsByLang[lang] ?? topics;
}

export const topics: Topic[] = [
  {
    id: "type-2-diabetes",
    title: "Type 2 Diabetes",
    definition: "A condition where your body struggles to use insulin properly, causing blood sugar to stay too high.",
    description: "Understanding blood sugar and how your body uses energy",
    sections: [
      { label: "WHAT IS IT", title: "What is Type 2 Diabetes?", content: "Your body turns food into sugar (glucose) and releases it into your blood. A hormone called insulin acts like a key, letting that sugar into your cells so they can use it for energy. With Type 2 diabetes, your body either doesn't make enough insulin or can't use it well. Sugar builds up in your blood instead of reaching your cells. Over time, high blood sugar can damage your heart, kidneys, eyes, and nerves. Type 2 is the most common form of diabetes — about 90% of people with diabetes have this type. It usually develops in adults, but it's becoming more common in younger people too." },
      { label: "WHAT CAUSES IT", title: "What causes it?", content: "Type 2 diabetes develops when your body becomes resistant to insulin. This often happens gradually. Being overweight — especially carrying extra weight around your belly — is the biggest risk factor. Not getting enough physical activity, eating a lot of processed or sugary foods, and having a family history of diabetes all increase your risk. Your age, ethnicity, and even a history of gestational diabetes (diabetes during pregnancy) can also play a role. It's not caused by eating too much sugar alone — it's a combination of genetics, lifestyle, and biology." },
      { label: "WARNING SIGNS", title: "What are the warning signs?", content: "Many people with Type 2 diabetes don't notice symptoms at first. That's why it can go undiagnosed for years. When symptoms do show up, they can include feeling very thirsty all the time, needing to urinate frequently (especially at night), feeling unusually tired, blurry vision, slow-healing cuts or bruises, tingling or numbness in your hands or feet, and unexplained weight loss. If you're over 45 or have risk factors, ask your doctor about getting tested — even if you feel fine." },
      { label: "HOW IT'S TREATED", title: "How is it treated?", content: "Treatment usually starts with lifestyle changes: eating more whole foods, moving your body regularly, and losing a modest amount of weight if needed — even losing 5-7% of your body weight can make a big difference. Your doctor may also prescribe medication like metformin to help your body use insulin better. Some people eventually need insulin injections. You'll likely need to check your blood sugar regularly and see your doctor for A1C tests, which show your average blood sugar over the past 2-3 months. The goal is to keep blood sugar in a healthy range to prevent long-term complications." },
    ],
    doctorQuestions: [
      "What are my blood sugar numbers, and what should they be?",
      "Do I need medication, or can I start with lifestyle changes?",
      "How often should I check my blood sugar at home?",
      "What complications should I watch for?",
      "Can you refer me to a diabetes educator or dietitian?",
    ],
    sources: [
      { name: "CDC — Type 2 Diabetes", url: "https://www.cdc.gov/diabetes/about/about-type-2-diabetes.html" },
      { name: "American Diabetes Association", url: "https://diabetes.org/about-diabetes/type-2" },
      { name: "Mayo Clinic — Type 2 Diabetes", url: "https://www.mayoclinic.org/diseases-conditions/type-2-diabetes/symptoms-causes/syc-20351193" },
      { name: "NIH MedlinePlus — Diabetes", url: "https://medlineplus.gov/diabetestype2.html" },
    ],
  },
  {
    id: "high-blood-pressure",
    title: "High Blood Pressure",
    definition: "When the force of blood pushing through your arteries stays too high, silently damaging your body over time.",
    description: "What it means when the pressure in your blood vessels is too high",
    sections: [
      { label: "WHAT IS IT", title: "What is high blood pressure?", content: "Every time your heart beats, it pumps blood through your arteries. Blood pressure is the force of that blood pushing against the artery walls. When that force stays too high over time, it's called high blood pressure — or hypertension. Think of it like a garden hose: if the water pressure is too high for too long, the hose gets damaged. The same thing happens to your blood vessels, heart, and kidneys. Blood pressure is measured with two numbers — like 120/80. The top number (systolic) measures pressure when your heart beats. The bottom number (diastolic) measures pressure between beats. High blood pressure is generally 130/80 or above." },
      { label: "WHAT CAUSES IT", title: "What causes it?", content: "For most people, there's no single cause. It usually develops gradually over years. Eating too much salt, not exercising enough, being overweight, drinking too much alcohol, and chronic stress all contribute. Family history plays a significant role — if your parents had high blood pressure, you're more likely to develop it too. Certain conditions like kidney disease, sleep apnea, and thyroid problems can also raise blood pressure. Some medications, including birth control pills and decongestants, can increase it as well." },
      { label: "WARNING SIGNS", title: "What are the warning signs?", content: "High blood pressure is called the \"silent killer\" for a reason — most people feel perfectly fine while it quietly damages their body. There are usually no symptoms at all. In rare cases, extremely high blood pressure can cause headaches, shortness of breath, nosebleeds, or a feeling of pounding in your chest or head. The only reliable way to know if you have high blood pressure is to get it measured. That's why regular check-ups are so important, even when you feel healthy." },
      { label: "HOW IT'S TREATED", title: "How is it treated?", content: "Treatment often starts with lifestyle changes: reducing salt intake, eating more fruits and vegetables, exercising regularly, maintaining a healthy weight, limiting alcohol, and managing stress. If lifestyle changes aren't enough, your doctor may prescribe medication. There are several types — diuretics, ACE inhibitors, calcium channel blockers, and others. You may need to try a few to find what works best. Many people need more than one medication. The goal is to bring your numbers below 130/80 and keep them there to protect your heart, kidneys, and brain." },
    ],
    doctorQuestions: [
      "What do my blood pressure numbers mean exactly?",
      "How often should I check my blood pressure at home?",
      "What lifestyle changes will have the biggest impact?",
      "Do I need medication, and what are the side effects?",
      "Can high blood pressure affect my other health conditions?",
    ],
    sources: [
      { name: "CDC — High Blood Pressure", url: "https://www.cdc.gov/high-blood-pressure/about/index.html" },
      { name: "American Heart Association — Hypertension", url: "https://www.heart.org/en/health-topics/high-blood-pressure" },
      { name: "Mayo Clinic — High Blood Pressure", url: "https://www.mayoclinic.org/diseases-conditions/high-blood-pressure/symptoms-causes/syc-20373410" },
      { name: "NIH MedlinePlus — High Blood Pressure", url: "https://medlineplus.gov/highbloodpressure.html" },
    ],
  },
  {
    id: "high-cholesterol",
    title: "High Cholesterol",
    definition: "When you have too much of a waxy substance in your blood that can clog your arteries and lead to heart disease.",
    description: "The fats in your blood and why they matter",
    sections: [
      { label: "WHAT IS IT", title: "What is high cholesterol?", content: "Cholesterol is a waxy, fat-like substance that your body actually needs — it helps build cells, make vitamins, and produce hormones. Your liver makes all the cholesterol you need. Problems start when you have too much, especially the \"bad\" kind called LDL. Extra LDL cholesterol sticks to the walls of your arteries and builds up over time, like grease in a pipe. This buildup is called plaque, and it makes your arteries narrower and stiffer. HDL cholesterol is the \"good\" kind — it helps carry bad cholesterol away from your arteries. You want LDL low and HDL high." },
      { label: "WHAT CAUSES IT", title: "What causes it?", content: "Diet plays a big role — eating a lot of saturated fats (found in red meat, full-fat dairy, fried foods, and baked goods) raises your LDL cholesterol. Trans fats, found in some processed foods, are even worse. But diet isn't the whole story. Your genetics matter a lot. Some people inherit a tendency toward high cholesterol from their parents, a condition called familial hypercholesterolemia. Being overweight, not exercising, smoking, and aging all raise your risk too. Even people who eat well and exercise can have high cholesterol because of their genes." },
      { label: "WARNING SIGNS", title: "What are the warning signs?", content: "High cholesterol has no symptoms at all. You can feel perfectly healthy and have dangerously high levels. That's why it's sometimes called a \"silent\" condition. The only way to know your cholesterol levels is through a blood test called a lipid panel. Doctors generally recommend getting your first test by age 20, then every 4-6 years if your levels are normal. If you have risk factors — family history, diabetes, obesity, or smoking — you should be tested more often. By the time symptoms appear (like chest pain or a heart attack), damage has already been done." },
      { label: "HOW IT'S TREATED", title: "How is it treated?", content: "The first step is usually lifestyle changes: eating more fiber-rich foods (oats, beans, fruits), choosing healthy fats (olive oil, nuts, fish), exercising at least 150 minutes per week, losing excess weight, and quitting smoking. If lifestyle changes aren't enough — or if your levels are very high — your doctor may prescribe a statin medication. Statins are one of the most studied drugs in medicine and are very effective at lowering LDL. Some people need additional medications. Regular blood tests monitor your progress. The goal is to reduce your risk of heart attack and stroke." },
    ],
    doctorQuestions: [
      "What are my LDL, HDL, and triglyceride numbers?",
      "Do I need a statin, and what are the risks and benefits?",
      "What dietary changes will help the most?",
      "How often should I get my cholesterol rechecked?",
      "Does my family history put me at higher risk for heart disease?",
    ],
    sources: [
      { name: "CDC — Cholesterol", url: "https://www.cdc.gov/cholesterol/about/index.html" },
      { name: "American Heart Association — Cholesterol", url: "https://www.heart.org/en/health-topics/cholesterol" },
      { name: "Mayo Clinic — High Cholesterol", url: "https://www.mayoclinic.org/diseases-conditions/high-blood-cholesterol/symptoms-causes/syc-20350800" },
      { name: "NIH MedlinePlus — Cholesterol", url: "https://medlineplus.gov/cholesterol.html" },
    ],
  },
  {
    id: "asthma",
    title: "Asthma",
    definition: "A condition where your airways become inflamed and narrow, making breathing difficult — especially during flare-ups.",
    description: "When your airways get tight and breathing becomes difficult",
    sections: [
      { label: "WHAT IS IT", title: "What is asthma?", content: "Asthma is a chronic condition that affects the airways in your lungs. These airways are the tubes that carry air in and out. When you have asthma, the lining of your airways is constantly a little inflamed. When something irritates them further, three things happen: the muscles around the airways tighten, the lining swells even more, and extra mucus fills the narrowed passages. This is an asthma attack — and it can feel like trying to breathe through a coffee stirrer. Asthma can range from a minor nuisance to a life-threatening condition, but with the right treatment, most people manage it well." },
      { label: "WHAT CAUSES IT", title: "What causes it?", content: "Doctors don't know exactly why some people develop asthma and others don't, but it's likely a combination of genetics and environment. If asthma, allergies, or eczema run in your family, you're more likely to develop it. Common triggers include pollen, dust mites, pet dander, mold, cigarette smoke, cold air, exercise, air pollution, strong emotions, and respiratory infections like colds. Workplace chemicals and fumes can also cause asthma in adults. Importantly, triggers are different for each person — what sets off one person's asthma may not affect another at all." },
      { label: "WARNING SIGNS", title: "What are the warning signs?", content: "The most common symptoms are wheezing (a whistling sound when you breathe), coughing — especially at night or early in the morning — shortness of breath, and a tight feeling in your chest. Some people only experience symptoms during exercise, in cold weather, or during allergy season. Others have symptoms every day. Pay attention to patterns: if you're using your rescue inhaler more than twice a week, waking up at night from coughing, or avoiding activities because of breathing problems, your asthma may not be well controlled." },
      { label: "HOW IT'S TREATED", title: "How is it treated?", content: "Asthma treatment has two main parts: quick-relief and long-term control. A rescue inhaler (like albuterol) relaxes your airway muscles fast during an attack. Controller medications (usually inhaled corticosteroids) reduce inflammation daily to prevent attacks from happening. Your doctor will create an asthma action plan that tells you what to take daily, what to do when symptoms worsen, and when to seek emergency care. Avoiding your personal triggers is also key. With proper treatment, most people with asthma can live active, normal lives — including professional athletes." },
    ],
    doctorQuestions: [
      "What are my specific triggers, and how can I avoid them?",
      "What's the difference between my rescue inhaler and my controller medication?",
      "Am I using my inhaler correctly — can you show me?",
      "What should I do during a severe asthma attack?",
      "Should I see an allergist for additional testing?",
    ],
    sources: [
      { name: "CDC — Asthma", url: "https://www.cdc.gov/asthma/default.htm" },
      { name: "Mayo Clinic — Asthma", url: "https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653" },
      { name: "NIH MedlinePlus — Asthma", url: "https://medlineplus.gov/asthma.html" },
    ],
  },
  {
    id: "anxiety",
    title: "Anxiety",
    definition: "More than just worry — a condition where your body's alarm system fires too often, making daily life feel overwhelming.",
    description: "When worry becomes constant and hard to control",
    sections: [
      { label: "WHAT IS IT", title: "What is anxiety?", content: "Everyone feels anxious sometimes — before a job interview, during a health scare, or when facing a big decision. That's normal. Anxiety becomes a medical condition when the worry is constant, out of proportion to the situation, and hard to control. It can take over your thoughts, affect your sleep, and make everyday activities feel overwhelming. There are several types: generalized anxiety disorder (ongoing worry about many things), social anxiety (intense fear of social situations), panic disorder (sudden intense fear with physical symptoms), and others. Anxiety disorders are the most common mental health condition — they affect about 40 million adults in the U.S." },
      { label: "WHAT CAUSES IT", title: "What causes it?", content: "Anxiety isn't caused by weakness or a character flaw — it's a real medical condition with biological roots. Brain chemistry plays a major role: the parts of your brain that process fear and danger can become overactive. Genetics matter too — if anxiety runs in your family, you're more likely to develop it. Life experiences like trauma, abuse, major stress, or a serious health diagnosis can trigger anxiety. Personality traits, like being naturally more cautious or sensitive, also increase risk. Sometimes anxiety develops alongside other conditions like depression, chronic pain, or thyroid problems." },
      { label: "WARNING SIGNS", title: "What are the warning signs?", content: "Anxiety shows up in both your mind and your body. Mental signs include constant worrying, racing thoughts, difficulty concentrating, expecting the worst, irritability, and feeling restless or on edge. Physical signs can include a racing or pounding heart, muscle tension (especially in your jaw, neck, or shoulders), stomach problems, sweating, trembling, headaches, fatigue, and trouble sleeping. Some people experience panic attacks — sudden episodes of intense fear with chest pain, shortness of breath, dizziness, and a feeling that something terrible is about to happen. If anxiety is interfering with your daily life, it's worth talking to a doctor." },
      { label: "HOW IT'S TREATED", title: "How is it treated?", content: "Anxiety is very treatable. The most effective approaches include therapy, medication, or both. Cognitive behavioral therapy (CBT) is considered the gold standard — it helps you identify and change the thought patterns that fuel anxiety. Medications like SSRIs and SNRIs can help balance brain chemistry. Anti-anxiety medications may be used short-term for severe symptoms. Lifestyle changes also help: regular exercise, good sleep habits, reducing caffeine and alcohol, mindfulness or meditation, and deep breathing exercises. Treatment takes time, but most people see real improvement. The first step is simply talking to your doctor about what you're experiencing." },
    ],
    doctorQuestions: [
      "Could what I'm feeling be an anxiety disorder?",
      "Would therapy, medication, or both be best for me?",
      "What type of therapy do you recommend?",
      "How long does treatment usually take to work?",
      "Are there things I can do right now at home to feel better?",
    ],
    sources: [
      { name: "NIH — Anxiety Disorders", url: "https://www.nimh.nih.gov/health/topics/anxiety-disorders" },
      { name: "Mayo Clinic — Anxiety", url: "https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961" },
      { name: "NIH MedlinePlus — Anxiety", url: "https://medlineplus.gov/anxiety.html" },
    ],
  },
  {
    id: "depression",
    title: "Depression",
    definition: "A medical condition that causes persistent sadness and loss of interest, affecting how you think, feel, and handle daily life.",
    description: "When sadness won't lift and everything feels heavy",
    sections: [
      { label: "WHAT IS IT", title: "What is depression?", content: "Depression is more than just feeling sad or having a bad week. It's a medical condition — also called major depressive disorder — that affects how your brain works. It changes the way you think, feel, and handle everyday activities like sleeping, eating, and working. Depression makes everything feel heavier. Activities you used to enjoy feel pointless. Getting out of bed can feel impossible. It's not something you can just \"snap out of\" — any more than you could snap out of a broken leg. Depression is one of the most common medical conditions in the world, affecting more than 280 million people globally. It can happen to anyone, at any age." },
      { label: "WHAT CAUSES IT", title: "What causes it?", content: "Depression is caused by a combination of factors working together. Brain chemistry is a big one — the chemicals that regulate mood, sleep, and energy (like serotonin and norepinephrine) can become imbalanced. Genetics play a role: depression often runs in families. Stressful life events — losing a loved one, going through a divorce, financial problems, a health diagnosis, or even major positive changes — can trigger an episode. Chronic illnesses, certain medications, hormonal changes (like after childbirth or during menopause), and substance use can also contribute. There's rarely a single cause. And it's never your fault." },
      { label: "WARNING SIGNS", title: "What are the warning signs?", content: "Depression looks different for different people, but common signs include: persistent sadness or feeling \"empty\" for most of the day, nearly every day. Losing interest or pleasure in activities you used to enjoy. Changes in appetite — eating much more or much less than usual. Sleeping too much or being unable to sleep. Feeling exhausted even after rest. Difficulty concentrating or making decisions. Feeling worthless, guilty, or hopeless. Withdrawing from friends and family. Physical symptoms like headaches or body aches with no clear cause. In severe cases, thoughts of death or suicide. If you or someone you know is in crisis, call or text 988 (Suicide & Crisis Lifeline) anytime." },
      { label: "HOW IT'S TREATED", title: "How is it treated?", content: "Depression is one of the most treatable mental health conditions. About 80-90% of people eventually respond well to treatment. The main approaches are therapy and medication, often used together. Cognitive behavioral therapy (CBT) and interpersonal therapy are especially effective. Antidepressant medications (like SSRIs) help restore balance to brain chemistry — they typically take 2-4 weeks to start working. Lifestyle changes support treatment: regular physical activity, consistent sleep, social connection, and a healthy diet all help. For treatment-resistant depression, options like transcranial magnetic stimulation (TMS) or ketamine therapy are available. Recovery is real and possible — the hardest part is often taking the first step to ask for help." },
    ],
    doctorQuestions: [
      "I've been feeling persistently sad — could this be depression?",
      "What treatment options do you recommend for me?",
      "How long will it take for medication to start working?",
      "Can you refer me to a therapist or counselor?",
      "What should I do if my symptoms get worse?",
    ],
    sources: [
      { name: "NIH — Depression", url: "https://www.nimh.nih.gov/health/topics/depression" },
      { name: "Mayo Clinic — Depression", url: "https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007" },
      { name: "NIH MedlinePlus — Depression", url: "https://medlineplus.gov/depression.html" },
    ],
  },
  {
    id: "heart-disease",
    title: "Heart Disease",
    definition: "A group of conditions that affect your heart's structure and function, often developing silently over decades.",
    description: "How heart problems develop and what you can do about them",
    sections: [
      { label: "WHAT IS IT", title: "What is heart disease?", content: "Heart disease is actually a group of conditions that affect your heart. The most common type is coronary artery disease (CAD), where the arteries that supply blood to your heart muscle become narrowed or blocked by a buildup of plaque — a mix of cholesterol, fat, calcium, and other substances. This process, called atherosclerosis, develops slowly over decades. When blood flow to the heart is reduced, you can experience chest pain (angina). If an artery becomes completely blocked, it causes a heart attack. Heart disease is the leading cause of death in the United States for both men and women, but much of it is preventable." },
      { label: "WHAT CAUSES IT", title: "What causes it?", content: "Heart disease usually develops from a combination of risk factors working together over time. The major ones are high blood pressure, high cholesterol, smoking, diabetes, obesity, physical inactivity, and an unhealthy diet — especially one high in saturated fat, trans fat, salt, and sugar. Family history matters: if a close relative had heart disease at a young age (before 55 for men, 65 for women), your risk is higher. Age is a factor — risk increases as you get older. Chronic stress, excessive alcohol use, and conditions like sleep apnea also contribute. Many of these risk factors are connected and tend to cluster together." },
      { label: "WARNING SIGNS", title: "What are the warning signs?", content: "Heart disease can develop for years without symptoms. When signs do appear, they may include: chest pain or discomfort (pressure, squeezing, or fullness), shortness of breath during activity or at rest, pain or discomfort in your arms, back, neck, jaw, or stomach. Fatigue, dizziness, nausea, and cold sweats can also be signs. Women are more likely to experience unusual symptoms like extreme fatigue, nausea, and back or jaw pain. A heart attack can strike suddenly: crushing chest pain, difficulty breathing, cold sweat, and lightheadedness. If you suspect a heart attack, call 911 immediately — every minute matters." },
      { label: "HOW IT'S TREATED", title: "How is it treated?", content: "Treatment depends on how advanced the disease is. For many people, it starts with aggressive lifestyle changes: heart-healthy eating (like the Mediterranean or DASH diet), regular exercise, quitting smoking, managing stress, and losing excess weight. Medications are often needed: statins for cholesterol, blood pressure medications, blood thinners, and sometimes nitroglycerin for chest pain. If arteries are significantly blocked, procedures like angioplasty (inserting a stent to open the artery) or bypass surgery may be necessary. Cardiac rehabilitation — a supervised program of exercise and education — helps people recover after a heart event. Prevention is always better than treatment." },
    ],
    doctorQuestions: [
      "What is my overall risk for heart disease?",
      "Should I be taking a statin or blood pressure medication?",
      "What tests can check the health of my heart and arteries?",
      "What diet and exercise plan do you recommend for heart health?",
      "What symptoms should send me to the emergency room?",
    ],
    sources: [
      { name: "CDC — Heart Disease", url: "https://www.cdc.gov/heart-disease/about/index.html" },
      { name: "American Heart Association — Heart Disease", url: "https://www.heart.org/en/health-topics/heart-attack" },
      { name: "Mayo Clinic — Heart Disease", url: "https://www.mayoclinic.org/diseases-conditions/heart-disease/symptoms-causes/syc-20353118" },
      { name: "NIH MedlinePlus — Heart Disease", url: "https://medlineplus.gov/heartdiseases.html" },
    ],
  },
  {
    id: "kidney-disease",
    title: "Kidney Disease",
    definition: "When your kidneys gradually lose their ability to filter waste and excess fluid from your blood.",
    description: "Understanding how your kidneys work and what happens when they don't",
    sections: [
      { label: "WHAT IS IT", title: "What is kidney disease?", content: "Your kidneys are two fist-sized organs near your lower back. They're your body's filtration system — every day, they filter about 200 quarts of blood, removing waste products and extra fluid that become urine. They also help control blood pressure, make red blood cells, and keep your bones strong. Chronic kidney disease (CKD) means your kidneys are damaged and gradually losing their ability to do these jobs. It's measured in stages 1 through 5, with stage 5 being kidney failure. CKD affects about 37 million Americans, and most of them don't know they have it because symptoms don't appear until significant damage has occurred." },
      { label: "WHAT CAUSES IT", title: "What causes it?", content: "The two most common causes of kidney disease are diabetes and high blood pressure — together they account for about two-thirds of all cases. High blood sugar from diabetes damages the tiny blood vessels in your kidneys over time. High blood pressure damages those same blood vessels by forcing blood through them too hard. Other causes include glomerulonephritis (inflammation of the kidney's filtering units), polycystic kidney disease (an inherited condition), prolonged use of certain pain medications like ibuprofen, recurring kidney infections, and blockages from kidney stones or an enlarged prostate. Family history and age (over 60) also increase your risk." },
      { label: "WARNING SIGNS", title: "What are the warning signs?", content: "Kidney disease is often called a \"silent\" condition because you can lose up to 90% of kidney function before feeling sick. Early stages typically have no symptoms at all. As it progresses, signs may include: swelling in your feet, ankles, or hands (from fluid your kidneys can't remove), feeling more tired than usual, urinating more or less than normal, foamy or bubbly urine (a sign of protein), persistent itching, nausea or vomiting, loss of appetite, muscle cramps, and trouble concentrating. A simple blood test (measuring creatinine and GFR) and a urine test can detect kidney disease early, which is why screening is so important if you have risk factors." },
      { label: "HOW IT'S TREATED", title: "How is it treated?", content: "There's no cure for chronic kidney disease, but treatment can slow its progression significantly — sometimes by decades. The most important step is controlling the conditions that caused it: keeping blood sugar in range (if you have diabetes) and keeping blood pressure below 130/80. Medications like ACE inhibitors or ARBs protect the kidneys. Newer drugs called SGLT2 inhibitors have shown remarkable benefits for kidney protection. Diet changes may be needed: limiting salt, potassium, phosphorus, and protein depending on your stage. If kidneys eventually fail (stage 5), treatment options are dialysis — a machine that filters your blood — or a kidney transplant. Early detection makes a huge difference in outcomes." },
    ],
    doctorQuestions: [
      "What stage of kidney disease do I have, and what does that mean?",
      "Is my diabetes or blood pressure causing kidney damage?",
      "Do I need to change my diet — and can I see a renal dietitian?",
      "What medications can protect my kidneys from further damage?",
      "How often should I get my kidney function tested?",
    ],
    sources: [
      { name: "CDC — Chronic Kidney Disease", url: "https://www.cdc.gov/kidney-disease/about/index.html" },
      { name: "Mayo Clinic — Chronic Kidney Disease", url: "https://www.mayoclinic.org/diseases-conditions/chronic-kidney-disease/symptoms-causes/syc-20354521" },
      { name: "NIH MedlinePlus — Kidney Disease", url: "https://medlineplus.gov/chronickidneydisease.html" },
    ],
  },
  {
    id: "thyroid-disease",
    title: "Thyroid Disease",
    definition: "When the small gland in your neck makes too much or too little hormone, throwing your body's metabolism off balance.",
    description: "How a tiny gland controls your energy, weight, and mood",
    sections: [
      { label: "WHAT IS IT", title: "What is thyroid disease?", content: "Your thyroid is a small, butterfly-shaped gland at the front of your neck. Despite its size, it controls some of your body's most important functions — your metabolism, heart rate, body temperature, and energy levels. It does this by producing thyroid hormones (T3 and T4) that tell your cells how fast to work. Thyroid disease happens when this gland makes too much hormone (hyperthyroidism) or too little (hypothyroidism). Both conditions throw your body out of balance. Thyroid disease is very common — about 20 million Americans have some form of it, and women are 5-8 times more likely to develop it than men." },
      { label: "WHAT CAUSES IT", title: "What causes it?", content: "The most common cause of hypothyroidism (underactive thyroid) is Hashimoto's disease, an autoimmune condition where your immune system mistakenly attacks your thyroid. The most common cause of hyperthyroidism (overactive thyroid) is Graves' disease, another autoimmune condition that causes the thyroid to produce too much hormone. Other causes include thyroid nodules (lumps that develop on the gland), inflammation of the thyroid (thyroiditis), iodine imbalance, certain medications, radiation treatment to the head or neck, and — rarely — thyroid cancer. Pregnancy can also trigger thyroid problems. Family history of autoimmune disease increases your risk significantly." },
      { label: "WARNING SIGNS", title: "What are the warning signs?", content: "Hypothyroidism (too little hormone) tends to slow everything down: fatigue, weight gain, feeling cold when others don't, constipation, dry skin, thinning hair, depression, brain fog, and heavy or irregular periods. Hyperthyroidism (too much hormone) speeds things up: unexplained weight loss, rapid heartbeat, anxiety and nervousness, trembling hands, sweating, difficulty sleeping, frequent bowel movements, and bulging eyes (in Graves' disease). Both conditions can develop gradually, and symptoms are easy to blame on aging, stress, or other conditions. A simple blood test measuring TSH (thyroid-stimulating hormone) can detect thyroid problems quickly." },
      { label: "HOW IT'S TREATED", title: "How is it treated?", content: "Hypothyroidism is treated with a daily synthetic thyroid hormone pill (levothyroxine). It replaces the hormone your thyroid isn't making and is usually taken for life. The dose is adjusted through blood tests until your levels stabilize. Most people feel significantly better within a few weeks. Hyperthyroidism has more treatment options: anti-thyroid medications, radioactive iodine therapy (which gradually reduces thyroid function), or surgery to remove part or all of the thyroid. After treatment for hyperthyroidism, many people eventually need thyroid hormone replacement. Thyroid nodules are usually monitored with ultrasound; most are benign. The key is regular monitoring — thyroid levels can fluctuate, so periodic blood tests ensure your treatment stays on track." },
    ],
    doctorQuestions: [
      "Is my thyroid overactive or underactive, and what's causing it?",
      "What do my TSH and T4 levels mean?",
      "Will I need to take medication for the rest of my life?",
      "Could my symptoms be caused by something other than my thyroid?",
      "How often should I get my thyroid levels rechecked?",
    ],
    sources: [
      { name: "Mayo Clinic — Hypothyroidism", url: "https://www.mayoclinic.org/diseases-conditions/hypothyroidism/symptoms-causes/syc-20350284" },
      { name: "Mayo Clinic — Hyperthyroidism", url: "https://www.mayoclinic.org/diseases-conditions/hyperthyroidism/symptoms-causes/syc-20373659" },
      { name: "NIH MedlinePlus — Thyroid Diseases", url: "https://medlineplus.gov/thyroiddiseases.html" },
    ],
  },
  {
    id: "acid-reflux",
    title: "Acid Reflux",
    definition: "When stomach acid flows backward into your esophagus, causing a burning sensation and potential damage over time.",
    description: "That burning feeling in your chest and how to manage it",
    sections: [
      { label: "WHAT IS IT", title: "What is acid reflux?", content: "At the bottom of your esophagus (the tube that carries food from your mouth to your stomach) there's a ring of muscle called the lower esophageal sphincter (LES). It opens to let food into your stomach and closes to keep stomach acid where it belongs. Acid reflux happens when this muscle relaxes at the wrong time or doesn't close tightly enough, allowing acidic stomach contents to flow back up into your esophagus. The occasional episode is normal. But when it happens frequently — twice a week or more — it's called gastroesophageal reflux disease (GERD). Over time, repeated acid exposure can damage the lining of your esophagus." },
      { label: "WHAT CAUSES IT", title: "What causes it?", content: "Several factors can weaken or relax the muscle that keeps acid in your stomach. Being overweight puts extra pressure on your abdomen, pushing stomach contents upward. Eating large meals, eating late at night, or lying down right after eating all increase the chance of reflux. Certain foods are common triggers: citrus, tomatoes, chocolate, mint, garlic, onions, spicy foods, and fatty or fried foods. Drinks like coffee, alcohol, and carbonated beverages can contribute. Smoking weakens the LES. Pregnancy commonly causes reflux due to pressure and hormonal changes. A hiatal hernia — where part of your stomach pushes through your diaphragm — also increases risk." },
      { label: "WARNING SIGNS", title: "What are the warning signs?", content: "The most recognizable symptom is heartburn — a burning pain in the center of your chest that often worsens after eating or when lying down. Despite the name, it has nothing to do with your heart. Other symptoms include regurgitation (a sour or bitter taste in your mouth from acid backing up), difficulty swallowing, the feeling of a lump in your throat, chronic cough, hoarseness or sore throat (especially in the morning), and worsening asthma symptoms. If you experience chest pain, it's important to make sure it's reflux and not a heart problem — especially if you also have shortness of breath, arm pain, or dizziness. See a doctor if symptoms occur more than twice weekly or over-the-counter medications don't help." },
      { label: "HOW IT'S TREATED", title: "How is it treated?", content: "Lifestyle changes are the foundation of treatment: eat smaller meals, don't eat within 3 hours of lying down, elevate the head of your bed 6-8 inches, maintain a healthy weight, quit smoking, and identify and avoid your personal trigger foods. Over-the-counter antacids (like Tums) provide quick relief for occasional heartburn. H2 blockers (like famotidine) reduce acid production for hours. For frequent GERD, proton pump inhibitors (PPIs) like omeprazole are the most effective at reducing acid and allowing the esophagus to heal. Long-term PPI use should be discussed with your doctor. If medications don't work, surgical options can strengthen the LES. Untreated GERD can lead to complications like esophageal strictures or Barrett's esophagus, so consistent management matters." },
    ],
    doctorQuestions: [
      "Is what I'm experiencing regular heartburn or GERD?",
      "Should I be taking a PPI, and is it safe long-term?",
      "Could my symptoms be caused by something more serious?",
      "What specific foods and habits should I avoid?",
      "Do I need an endoscopy to check for damage?",
    ],
    sources: [
      { name: "Mayo Clinic — GERD", url: "https://www.mayoclinic.org/diseases-conditions/gerd/symptoms-causes/syc-20361940" },
      { name: "NIH MedlinePlus — GERD", url: "https://medlineplus.gov/gerd.html" },
      { name: "CDC — Digestive Diseases", url: "https://www.cdc.gov/nchs/fastats/digestive-diseases.htm" },
    ],
  },
  {
    id: "stroke",
    title: "Stroke",
    definition: "A medical emergency where blood flow to part of your brain is cut off, causing brain cells to die within minutes.",
    description: "When blood flow to the brain is suddenly blocked or a vessel bursts",
    sections: [
      { label: "WHAT IS IT", title: "What is a stroke?", content: "A stroke happens when blood flow to part of your brain is blocked or when a blood vessel in your brain bursts. Without blood, brain cells start dying within minutes. That's why a stroke is sometimes called a \"brain attack.\" There are two main types. An ischemic stroke (about 87% of strokes) happens when a blood clot blocks an artery going to the brain. A hemorrhagic stroke happens when a blood vessel in the brain leaks or bursts. There's also a transient ischemic attack (TIA), sometimes called a \"mini-stroke,\" where blood flow is temporarily blocked. A TIA is a serious warning sign that a full stroke may follow. Stroke is the fifth leading cause of death in the U.S. and a major cause of long-term disability." },
      { label: "WHAT CAUSES IT", title: "What causes it?", content: "Ischemic strokes are usually caused by atherosclerosis — the same plaque buildup in arteries that causes heart disease. A piece of plaque or a blood clot can break loose and travel to the brain, blocking a vessel. Atrial fibrillation (an irregular heartbeat) is another major cause — it allows blood to pool in the heart and form clots. Hemorrhagic strokes are usually caused by uncontrolled high blood pressure weakening artery walls until they burst. Other risk factors include diabetes, high cholesterol, smoking, obesity, heavy alcohol use, and a family history of stroke. Age increases risk, and strokes are more common in African Americans and Hispanics." },
      { label: "WARNING SIGNS", title: "What are the warning signs?", content: "Remember the acronym FAST: Face drooping (one side of the face droops or feels numb), Arm weakness (one arm drifts downward when you try to raise both), Speech difficulty (slurred speech or trouble speaking), Time to call 911 (if you see any of these signs, call immediately). Other symptoms include sudden confusion, trouble seeing in one or both eyes, sudden severe headache with no known cause, dizziness, and loss of balance or coordination. Every minute counts during a stroke — treatments like clot-busting drugs work best within the first few hours. Never wait to see if symptoms go away on their own." },
      { label: "HOW IT'S TREATED", title: "How is it treated?", content: "Treatment depends on the type of stroke. For ischemic strokes, a clot-busting drug called tPA can dissolve the clot if given within 4.5 hours of symptom onset — the sooner the better. In some cases, doctors perform a thrombectomy, physically removing the clot with a catheter. For hemorrhagic strokes, treatment focuses on controlling bleeding and reducing pressure in the brain, sometimes requiring surgery. After the acute phase, rehabilitation is critical: physical therapy, speech therapy, and occupational therapy help the brain rewire itself. Many stroke survivors regain significant function with consistent rehab. Prevention is key — managing blood pressure, cholesterol, diabetes, and quitting smoking dramatically reduce stroke risk." },
    ],
    doctorQuestions: [
      "What type of stroke did I have, and what caused it?",
      "What can I do to prevent another stroke?",
      "What rehabilitation services do I need?",
      "Should I be on blood thinners or other preventive medication?",
      "How will this affect my daily life going forward?",
    ],
    sources: [
      { name: "CDC — Stroke", url: "https://www.cdc.gov/stroke/about/index.html" },
      { name: "American Heart Association — Stroke", url: "https://www.heart.org/en/health-topics/stroke" },
      { name: "Mayo Clinic — Stroke", url: "https://www.mayoclinic.org/diseases-conditions/stroke/symptoms-causes/syc-20350113" },
      { name: "NIH MedlinePlus — Stroke", url: "https://medlineplus.gov/stroke.html" },
    ],
  },
  {
    id: "copd",
    title: "COPD",
    definition: "A group of lung diseases that block airflow and make breathing progressively harder over time.",
    description: "When your lungs lose their ability to move air freely",
    sections: [
      { label: "WHAT IS IT", title: "What is COPD?", content: "COPD stands for chronic obstructive pulmonary disease. It's actually a group of diseases — mainly emphysema and chronic bronchitis — that damage your lungs and make it increasingly hard to breathe. In emphysema, the tiny air sacs in your lungs (alveoli) are destroyed, reducing the surface area for oxygen exchange. In chronic bronchitis, the airways become inflamed and produce excess mucus. Most people with COPD have both conditions to some degree. The damage happens gradually over years, so many people don't notice symptoms until significant lung function is already lost. COPD is the fourth leading cause of death worldwide and affects about 16 million Americans." },
      { label: "WHAT CAUSES IT", title: "What causes it?", content: "The number one cause of COPD is cigarette smoking — it accounts for about 85-90% of cases. Long-term exposure to other lung irritants can also cause it: secondhand smoke, air pollution, chemical fumes, and dust from the workplace. In developing countries, indoor air pollution from cooking fires is a major cause. A rare genetic condition called alpha-1 antitrypsin deficiency makes some people more susceptible. Not every smoker develops COPD, and some nonsmokers do get it — genetics, childhood respiratory infections, and asthma history all play a role. The longer and more heavily you smoke, the greater your risk." },
      { label: "WARNING SIGNS", title: "What are the warning signs?", content: "COPD symptoms develop slowly and worsen over time. Early signs include a persistent cough that produces mucus (often called \"smoker's cough\"), shortness of breath during physical activities, wheezing, and chest tightness. As the disease progresses, you may feel breathless even during simple daily tasks like getting dressed or walking across a room. You might get frequent colds or respiratory infections, have swelling in your ankles or feet, and experience unintended weight loss. Blue-tinged lips or fingernails indicate low oxygen levels and require immediate medical attention. If you're a current or former smoker over 40 with breathing problems, ask about a spirometry test." },
      { label: "HOW IT'S TREATED", title: "How is it treated?", content: "There's no cure for COPD, but treatment can slow progression, relieve symptoms, and improve quality of life. The most important step is to stop smoking — this is the single most effective thing you can do at any stage. Bronchodilator inhalers relax airway muscles to improve airflow. Inhaled corticosteroids reduce inflammation. For moderate to severe COPD, combination inhalers are often prescribed. Pulmonary rehabilitation — a program of exercise training, nutrition counseling, and education — significantly improves daily functioning. Supplemental oxygen may be needed if blood oxygen levels drop too low. Severe cases may require surgery. Flu and pneumonia vaccinations are critical since infections can trigger dangerous flare-ups." },
    ],
    doctorQuestions: [
      "What stage of COPD do I have, and what does that mean?",
      "Am I using my inhalers correctly — can you check my technique?",
      "Would pulmonary rehabilitation help me?",
      "Do I need supplemental oxygen?",
      "What should I do during a COPD flare-up?",
    ],
    sources: [
      { name: "CDC — COPD", url: "https://www.cdc.gov/copd/about/index.html" },
      { name: "Mayo Clinic — COPD", url: "https://www.mayoclinic.org/diseases-conditions/copd/symptoms-causes/syc-20353679" },
      { name: "NIH MedlinePlus — COPD", url: "https://medlineplus.gov/copd.html" },
      { name: "American Lung Association — COPD", url: "https://www.lung.org/lung-health-diseases/lung-disease-lookup/copd" },
    ],
  },
  {
    id: "arthritis",
    title: "Arthritis",
    definition: "Inflammation and stiffness in your joints that can range from mild discomfort to debilitating pain.",
    description: "When your joints become painful, swollen, or hard to move",
    sections: [
      { label: "WHAT IS IT", title: "What is arthritis?", content: "Arthritis isn't a single disease — it's a term covering more than 100 conditions that affect your joints. The two most common types are osteoarthritis (OA) and rheumatoid arthritis (RA). Osteoarthritis is the \"wear and tear\" kind — the cartilage that cushions the ends of your bones breaks down over time, causing bones to rub against each other. Rheumatoid arthritis is an autoimmune disease where your immune system mistakenly attacks the lining of your joints, causing painful swelling. Arthritis affects about 54 million American adults and is the leading cause of disability in the U.S. It can affect any joint, but hips, knees, hands, and spine are most common." },
      { label: "WHAT CAUSES IT", title: "What causes it?", content: "The causes depend on the type. Osteoarthritis develops from years of joint use, previous joint injuries, excess weight (which puts extra stress on weight-bearing joints), and genetics. It's more common after age 50 and in women. Rheumatoid arthritis is caused by an immune system malfunction — your body attacks its own joint tissue. The exact trigger is unknown, but genetics, hormones, smoking, and certain infections may play a role. Other forms of arthritis include gout (caused by uric acid crystal buildup), psoriatic arthritis (linked to the skin condition psoriasis), and lupus-related arthritis. Obesity is a major modifiable risk factor for many types." },
      { label: "WARNING SIGNS", title: "What are the warning signs?", content: "The hallmark symptoms are joint pain, stiffness, and swelling. With osteoarthritis, pain typically worsens with activity and improves with rest. Stiffness is usually worst in the morning but eases within 30 minutes. You might notice a grating sensation or hear cracking when you move the joint. With rheumatoid arthritis, morning stiffness lasts longer (often over an hour), and symptoms usually affect both sides of the body symmetrically — both hands, both knees. You may also experience fatigue, low-grade fever, and loss of appetite. If you notice persistent joint pain or swelling lasting more than a few weeks, see your doctor — early treatment can prevent permanent joint damage." },
      { label: "HOW IT'S TREATED", title: "How is it treated?", content: "Treatment focuses on managing pain, reducing inflammation, and preserving joint function. For osteoarthritis, the first line is often physical activity (low-impact exercise like swimming or cycling), maintaining a healthy weight, physical therapy, and over-the-counter pain relievers like acetaminophen or NSAIDs. For rheumatoid arthritis, early treatment with disease-modifying drugs (DMARDs) like methotrexate can slow or stop joint damage. Biologic drugs target specific parts of the immune system. Both types may benefit from corticosteroid injections for flare-ups. Joint replacement surgery (hip or knee) is an option when damage is severe. Hot and cold therapy, assistive devices, and occupational therapy help manage daily life." },
    ],
    doctorQuestions: [
      "What type of arthritis do I have?",
      "Will my arthritis get worse, and can treatment slow it down?",
      "What exercises are safe for my joints?",
      "Should I see a rheumatologist?",
      "What pain management options are best for me?",
    ],
    sources: [
      { name: "CDC — Arthritis", url: "https://www.cdc.gov/arthritis/about/index.html" },
      { name: "Mayo Clinic — Arthritis", url: "https://www.mayoclinic.org/diseases-conditions/arthritis/symptoms-causes/syc-20350772" },
      { name: "NIH MedlinePlus — Arthritis", url: "https://medlineplus.gov/arthritis.html" },
    ],
  },
  {
    id: "osteoporosis",
    title: "Osteoporosis",
    definition: "A condition that weakens your bones, making them fragile and much more likely to break — often without warning.",
    description: "When your bones become thin, weak, and prone to fractures",
    sections: [
      { label: "WHAT IS IT", title: "What is osteoporosis?", content: "Your bones are living tissue that's constantly being broken down and rebuilt. Osteoporosis happens when your body loses too much bone, makes too little bone, or both. The result is bones that become porous and fragile — like a sponge with bigger holes. The word \"osteoporosis\" literally means \"porous bones.\" Healthy bone looks like a honeycomb under a microscope. Osteoporotic bone has much larger spaces in that honeycomb, making it weaker. About 10 million Americans have osteoporosis, and another 44 million have low bone density (osteopenia), putting them at risk. It's often called a \"silent disease\" because bone loss happens without symptoms until a fracture occurs." },
      { label: "WHAT CAUSES IT", title: "What causes it?", content: "Bone is at its densest around age 30. After that, you gradually lose more bone than you build. Several factors speed this process: being female (women lose bone faster after menopause due to dropping estrogen), aging, having a small thin body frame, family history of osteoporosis or fractures, low calcium and vitamin D intake, sedentary lifestyle, smoking, and excessive alcohol use. Certain medications — including long-term corticosteroids, some seizure drugs, and certain cancer treatments — can weaken bones. Medical conditions like rheumatoid arthritis, celiac disease, and overactive thyroid also increase risk. White and Asian women over 50 have the highest risk, but men get osteoporosis too." },
      { label: "WARNING SIGNS", title: "What are the warning signs?", content: "Osteoporosis is called a silent disease for good reason — there are usually no symptoms until a bone breaks. The first sign is often a fracture from a minor fall or bump that wouldn't normally cause a break, or even from bending over or coughing. Common fracture sites are the hip, spine, and wrist. Spinal compression fractures can cause gradual loss of height (losing more than 1.5 inches), a stooped or hunched posture (dowager's hump), and back pain. If you're over 50 and have broken a bone from a minor incident, ask about a bone density test (DEXA scan). Screening is recommended for all women over 65 and men over 70, or earlier if you have risk factors." },
      { label: "HOW IT'S TREATED", title: "How is it treated?", content: "Treatment aims to slow bone loss, build bone strength, and prevent fractures. Adequate calcium (1,000-1,200 mg daily) and vitamin D (600-800 IU daily, often more) are essential foundations. Weight-bearing exercise — walking, jogging, dancing, climbing stairs — stimulates bone growth. Resistance training strengthens the muscles that support bones. Several medications can help: bisphosphonates (like alendronate) are most commonly prescribed and slow bone breakdown. Other options include denosumab, hormone therapy for postmenopausal women, and newer bone-building drugs like romosozumab. Fall prevention is critical — removing tripping hazards at home, improving lighting, and balance exercises can prevent the fractures that make osteoporosis dangerous." },
    ],
    doctorQuestions: [
      "Should I get a bone density test, and what do my results mean?",
      "Do I need medication, or can lifestyle changes be enough?",
      "How much calcium and vitamin D should I be taking?",
      "What exercises are safe and helpful for my bones?",
      "What can I do to prevent falls and fractures?",
    ],
    sources: [
      { name: "CDC — Osteoporosis", url: "https://www.cdc.gov/osteoporosis/index.html" },
      { name: "Mayo Clinic — Osteoporosis", url: "https://www.mayoclinic.org/diseases-conditions/osteoporosis/symptoms-causes/syc-20351968" },
      { name: "NIH MedlinePlus — Osteoporosis", url: "https://medlineplus.gov/osteoporosis.html" },
    ],
  },
  {
    id: "sleep-apnea",
    title: "Sleep Apnea",
    definition: "A sleep disorder where your breathing repeatedly stops and starts during the night, preventing restful sleep.",
    description: "When your breathing stops and starts while you sleep",
    sections: [
      { label: "WHAT IS IT", title: "What is sleep apnea?", content: "Sleep apnea is a condition where your breathing repeatedly stops and restarts during sleep. These pauses can last from a few seconds to over a minute and may happen 30 times or more per hour. The most common type is obstructive sleep apnea (OSA), which occurs when the muscles in the back of your throat relax too much and temporarily collapse, blocking your airway. Central sleep apnea is less common and happens when your brain doesn't send proper signals to the muscles that control breathing. Complex sleep apnea is a combination of both. About 30 million Americans have sleep apnea, but most don't know it because it happens while they're asleep." },
      { label: "WHAT CAUSES IT", title: "What causes it?", content: "Obstructive sleep apnea occurs when the muscles that support the soft palate, tongue, and other throat structures relax during sleep, narrowing or closing the airway. The biggest risk factor is excess weight — fat deposits around the upper airway can obstruct breathing. Having a naturally narrow airway, large tonsils, or a recessed jaw increases risk. Men are two to three times more likely to develop sleep apnea, though risk increases for women after menopause. Other risk factors include aging, family history, smoking, nasal congestion, alcohol or sedative use (which relax throat muscles further), and certain medical conditions like hypothyroidism and heart failure." },
      { label: "WARNING SIGNS", title: "What are the warning signs?", content: "The most obvious sign is loud, chronic snoring — especially if it's punctuated by pauses and choking or gasping sounds. But not everyone who snores has sleep apnea. Other signs include waking up with a dry mouth or headache, excessive daytime sleepiness even after a full night's sleep, difficulty concentrating or memory problems, irritability and mood changes, waking up frequently to urinate, and restless sleep. A partner often notices the breathing pauses before you do. Left untreated, sleep apnea increases your risk of high blood pressure, heart disease, stroke, type 2 diabetes, and depression. If you're always tired despite sleeping enough, talk to your doctor." },
      { label: "HOW IT'S TREATED", title: "How is it treated?", content: "A sleep study (polysomnography) confirms the diagnosis. For mild cases, lifestyle changes may help: losing weight, sleeping on your side instead of your back, avoiding alcohol before bed, and treating nasal congestion. The most common and effective treatment for moderate to severe sleep apnea is a CPAP machine — it delivers continuous air pressure through a mask worn during sleep to keep your airway open. It takes some getting used to, but most people adjust within a few weeks and feel dramatically better. Oral appliances that reposition the jaw are an option for mild to moderate cases. Surgery to remove excess tissue or reposition the jaw is sometimes considered when other treatments fail." },
    ],
    doctorQuestions: [
      "Do I need a sleep study, and can I do it at home?",
      "How severe is my sleep apnea?",
      "Is a CPAP machine my best option, and how do I adjust to it?",
      "Could losing weight reduce or eliminate my sleep apnea?",
      "Is my sleep apnea putting me at risk for other health problems?",
    ],
    sources: [
      { name: "Mayo Clinic — Sleep Apnea", url: "https://www.mayoclinic.org/diseases-conditions/sleep-apnea/symptoms-causes/syc-20377631" },
      { name: "NIH MedlinePlus — Sleep Apnea", url: "https://medlineplus.gov/sleepapnea.html" },
      { name: "CDC — Sleep and Health", url: "https://www.cdc.gov/sleep/index.html" },
    ],
  },
  {
    id: "ibs",
    title: "IBS / Irritable Bowel Syndrome",
    definition: "A common digestive disorder that causes cramping, bloating, and changes in bowel habits without visible damage to the intestines.",
    description: "When your digestive system is overly sensitive and unpredictable",
    sections: [
      { label: "WHAT IS IT", title: "What is IBS?", content: "Irritable bowel syndrome (IBS) is a chronic condition affecting the large intestine. Unlike diseases like Crohn's or ulcerative colitis, IBS doesn't cause visible damage or inflammation in your intestines — but it can cause very real and disruptive symptoms. It's classified as a functional gastrointestinal disorder, meaning your gut looks normal but doesn't work quite right. The communication between your brain and gut is disrupted, making your intestines either move too fast (causing diarrhea) or too slow (causing constipation) — or alternate between both. IBS affects 10-15% of adults worldwide. It's twice as common in women as in men and often begins before age 50." },
      { label: "WHAT CAUSES IT", title: "What causes it?", content: "The exact cause of IBS isn't fully understood, but several factors contribute. The gut-brain connection plays a major role — stress, anxiety, and emotional distress can trigger or worsen symptoms. Your intestinal muscles may contract more strongly or more slowly than normal. The nerves in your gut may be oversensitive, interpreting normal digestive movements as pain. Changes in gut bacteria (the microbiome) appear to be involved. IBS sometimes develops after a severe bout of gastroenteritis (food poisoning or a stomach bug). Certain foods commonly trigger symptoms: dairy, wheat, carbonated drinks, alcohol, caffeine, and high-FODMAP foods. Hormonal changes may explain why IBS is more common in women." },
      { label: "WARNING SIGNS", title: "What are the warning signs?", content: "IBS symptoms vary from person to person but commonly include: crampy abdominal pain that improves after a bowel movement, bloating and excess gas, diarrhea, constipation, or alternating between both, mucus in the stool, and a feeling of incomplete evacuation. Symptoms often flare up during periods of stress or after eating certain foods. There are three IBS subtypes: IBS-D (predominantly diarrhea), IBS-C (predominantly constipation), and IBS-M (mixed). Important: some symptoms are NOT caused by IBS and need urgent attention — unexplained weight loss, blood in your stool, fever, persistent vomiting, or symptoms that wake you at night. These could signal a more serious condition." },
      { label: "HOW IT'S TREATED", title: "How is it treated?", content: "IBS management usually involves a combination of dietary changes, stress management, and sometimes medication. A low-FODMAP diet (reducing fermentable carbohydrates) has strong evidence for reducing symptoms — a dietitian can guide you through the elimination and reintroduction process. Regular exercise, good sleep habits, and stress reduction techniques (mindfulness, therapy) help manage the gut-brain connection. Fiber supplements can help with constipation. Medications include antispasmodics for cramping, loperamide for diarrhea, laxatives for constipation, and low-dose antidepressants that can calm overactive gut nerves. Probiotics may help some people. IBS doesn't damage your intestines or increase cancer risk, but it can significantly affect quality of life — finding the right management plan takes patience." },
    ],
    doctorQuestions: [
      "Is this IBS, or could it be something more serious?",
      "Should I try a low-FODMAP diet, and do I need a dietitian?",
      "Can stress really cause physical gut symptoms?",
      "What medications might help my specific type of IBS?",
      "Do I need a colonoscopy or other tests to rule out other conditions?",
    ],
    sources: [
      { name: "Mayo Clinic — IBS", url: "https://www.mayoclinic.org/diseases-conditions/irritable-bowel-syndrome/symptoms-causes/syc-20360016" },
      { name: "NIH MedlinePlus — IBS", url: "https://medlineplus.gov/irritablebowelsyndrome.html" },
      { name: "NIH — IBS", url: "https://www.niddk.nih.gov/health-information/digestive-diseases/irritable-bowel-syndrome" },
    ],
  },
  {
    id: "eczema-psoriasis",
    title: "Eczema & Psoriasis",
    definition: "Chronic skin conditions that cause inflammation, itching, and visible patches — driven by immune system overreaction.",
    description: "When your skin becomes inflamed, itchy, and won't stop flaring up",
    sections: [
      { label: "WHAT IS IT", title: "What are eczema and psoriasis?", content: "Eczema (atopic dermatitis) and psoriasis are both chronic inflammatory skin conditions, but they work differently. Eczema makes your skin red, itchy, and dry — the skin barrier doesn't work properly, letting moisture out and irritants in. It often appears in the creases of elbows, behind knees, and on the face. Psoriasis happens when your immune system speeds up skin cell production — cells build up in thick, scaly patches called plaques. Psoriasis commonly appears on elbows, knees, scalp, and lower back. Eczema is more common in children (though many carry it into adulthood), while psoriasis typically develops between ages 15 and 35. Both conditions go through cycles of flare-ups and remission." },
      { label: "WHAT CAUSES IT", title: "What causes it?", content: "Both conditions involve immune system dysfunction combined with genetics. Eczema is linked to a gene variation that affects the skin's ability to retain moisture and protect against bacteria and allergens. If eczema, asthma, or hay fever runs in your family, your risk is higher. Common eczema triggers include dry air, harsh soaps, certain fabrics (wool), stress, sweating, and food allergens. Psoriasis is an autoimmune condition where T-cells (immune cells) mistakenly attack healthy skin cells. This accelerates cell turnover from the normal 30-day cycle to just 3-4 days. Psoriasis triggers include stress, skin injuries (cuts, sunburn), infections (especially strep throat), cold weather, smoking, heavy alcohol use, and certain medications." },
      { label: "WARNING SIGNS", title: "What are the warning signs?", content: "Eczema typically appears as patches of dry, red, intensely itchy skin. The skin may crack, weep, or become raw from scratching. In darker skin tones, patches may appear brownish, purplish, or grayish rather than red. Eczema can significantly disrupt sleep because itching often worsens at night. Psoriasis appears as thick, raised, red patches covered with silvery-white scales. These plaques can be itchy and painful, and they may crack and bleed. Psoriasis can also affect nails (causing pitting, thickening, or separation from the nail bed) and joints (psoriatic arthritis causes joint pain and swelling). See a dermatologist if skin problems are persistent, covering large areas, affecting your sleep, or causing pain." },
      { label: "HOW IT'S TREATED", title: "How is it treated?", content: "Treatment for eczema focuses on restoring the skin barrier and reducing inflammation. Daily moisturizing (especially after bathing) is essential — look for thick creams or ointments without fragrance. Topical corticosteroids reduce inflammation during flare-ups. Newer options include topical calcineurin inhibitors and JAK inhibitors. For severe eczema, biologic drugs like dupilumab can be transformative. Psoriasis treatment depends on severity. Mild cases use topical corticosteroids, vitamin D analogs, and tar preparations. Phototherapy (controlled UV light) helps moderate cases. Severe psoriasis often requires systemic medications — traditional drugs like methotrexate or newer biologics that target specific immune pathways. Both conditions benefit from identifying and avoiding personal triggers, managing stress, and consistent skincare routines." },
    ],
    doctorQuestions: [
      "Is this eczema, psoriasis, or something else?",
      "What's triggering my flare-ups?",
      "Are there prescription-strength treatments beyond over-the-counter creams?",
      "Could this affect other parts of my body (joints, nails)?",
      "Should I see a dermatologist for specialized care?",
    ],
    sources: [
      { name: "Mayo Clinic — Atopic Dermatitis (Eczema)", url: "https://www.mayoclinic.org/diseases-conditions/atopic-dermatitis-eczema/symptoms-causes/syc-20353273" },
      { name: "Mayo Clinic — Psoriasis", url: "https://www.mayoclinic.org/diseases-conditions/psoriasis/symptoms-causes/syc-20355840" },
      { name: "NIH MedlinePlus — Eczema", url: "https://medlineplus.gov/eczema.html" },
      { name: "NIH MedlinePlus — Psoriasis", url: "https://medlineplus.gov/psoriasis.html" },
    ],
  },
  {
    id: "migraines",
    title: "Migraines",
    definition: "Intense, throbbing headaches that can last hours or days, often with nausea, light sensitivity, and visual disturbances.",
    description: "More than a headache — a neurological condition that can be debilitating",
    sections: [
      { label: "WHAT IS IT", title: "What are migraines?", content: "A migraine is not just a bad headache. It's a neurological condition that causes intense, throbbing pain — usually on one side of the head — along with other symptoms like nausea, vomiting, and extreme sensitivity to light, sound, and sometimes smell. Migraines can last anywhere from 4 hours to 72 hours. Some people experience an \"aura\" before the headache starts — visual disturbances like flashing lights, zigzag lines, or temporary blind spots. About 39 million Americans live with migraines, and women are three times more likely to get them than men. Migraines can be episodic (fewer than 15 per month) or chronic (15 or more days per month)." },
      { label: "WHAT CAUSES IT", title: "What causes it?", content: "Migraines involve changes in brain chemistry and nerve signaling, but the exact mechanism isn't fully understood. There's a strong genetic component — if a parent has migraines, you have a 50% chance of getting them. Common triggers include hormonal changes (many women get migraines around their period), stress, lack of sleep or too much sleep, certain foods and drinks (aged cheese, red wine, processed meats, artificial sweeteners), caffeine withdrawal, weather changes, bright or flickering lights, strong smells, and skipping meals. Triggers are highly individual — what causes a migraine in one person may have no effect on another. Keeping a headache diary can help identify your personal triggers." },
      { label: "WARNING SIGNS", title: "What are the warning signs?", content: "Migraines often progress through stages. The prodrome phase (1-2 days before) can include mood changes, food cravings, neck stiffness, increased thirst, and frequent yawning. The aura (if you get one) lasts 20-60 minutes and may include visual disturbances, tingling in your face or hands, or difficulty speaking. The headache phase brings intense throbbing pain (usually one side), nausea or vomiting, and extreme sensitivity to light and sound. Movement makes it worse. The postdrome phase (\"migraine hangover\") can leave you feeling drained and confused for up to a day after. Seek immediate medical attention if you have the worst headache of your life, a headache with fever, confusion, seizures, double vision, or headache after a head injury." },
      { label: "HOW IT'S TREATED", title: "How is it treated?", content: "Migraine treatment has two approaches: stopping attacks when they happen (acute treatment) and preventing them (preventive treatment). For acute attacks, triptans are the gold standard — they block pain pathways in the brain. Over-the-counter pain relievers (ibuprofen, aspirin) can work for mild migraines if taken early. Newer medications called gepants and ditans offer alternatives for people who can't take triptans. Anti-nausea medications help with vomiting. For prevention, if you have frequent migraines, options include beta-blockers, antidepressants, anti-seizure medications, and CGRP monoclonal antibodies — a newer class of drugs specifically designed to prevent migraines. Botox injections are FDA-approved for chronic migraines. Lifestyle management — regular sleep, consistent meals, stress reduction, and trigger avoidance — is foundational." },
    ],
    doctorQuestions: [
      "Are my headaches actually migraines, or could they be something else?",
      "Should I be on preventive medication?",
      "What's the best way to treat a migraine when it starts?",
      "Could my migraines be connected to hormones?",
      "When should I go to the ER for a headache?",
    ],
    sources: [
      { name: "Mayo Clinic — Migraine", url: "https://www.mayoclinic.org/diseases-conditions/migraine-headache/symptoms-causes/syc-20360201" },
      { name: "NIH MedlinePlus — Migraine", url: "https://medlineplus.gov/migraine.html" },
      { name: "NIH — Migraine", url: "https://www.ninds.nih.gov/health-information/disorders/migraine" },
    ],
  },
  {
    id: "anemia",
    title: "Anemia",
    definition: "A condition where you don't have enough healthy red blood cells to carry adequate oxygen to your body's tissues.",
    description: "When your blood can't carry enough oxygen to keep you energized",
    sections: [
      { label: "WHAT IS IT", title: "What is anemia?", content: "Anemia is a condition where your blood doesn't have enough healthy red blood cells or hemoglobin — the protein in red blood cells that carries oxygen from your lungs to the rest of your body. When your tissues don't get enough oxygen, you feel tired, weak, and short of breath. There are many types of anemia, but iron-deficiency anemia is by far the most common. Other types include vitamin B12 deficiency anemia, folate deficiency anemia, anemia of chronic disease, and sickle cell anemia. Anemia affects about 3 million Americans. It can be temporary or long-lasting, and it can range from mild to severe. It's especially common in women of childbearing age, pregnant women, and older adults." },
      { label: "WHAT CAUSES IT", title: "What causes it?", content: "The most common cause is iron deficiency — your body needs iron to make hemoglobin. This can happen from not getting enough iron in your diet, poor iron absorption (from conditions like celiac disease), blood loss (heavy periods are a leading cause in women), or increased iron needs during pregnancy. Vitamin B12 deficiency (from diet or absorption problems like pernicious anemia) and folate deficiency also cause anemia. Chronic diseases like kidney disease, cancer, and rheumatoid arthritis can interfere with red blood cell production. Some anemias are inherited, like sickle cell disease and thalassemia. Internal bleeding from ulcers, colon polyps, or other conditions can cause anemia slowly over time." },
      { label: "WARNING SIGNS", title: "What are the warning signs?", content: "Mild anemia may cause no noticeable symptoms. As it worsens, you may experience: persistent fatigue and weakness (the most common symptom), pale or yellowish skin, shortness of breath during activities that didn't used to wind you, dizziness or lightheadedness, cold hands and feet, headaches, brittle nails, unusual cravings for non-food items like ice or dirt (called pica), a sore or swollen tongue, and fast or irregular heartbeat. If you're constantly tired despite getting enough sleep, it's worth getting a simple blood test — a complete blood count (CBC) can detect anemia quickly. Severe anemia can strain your heart and needs prompt treatment." },
      { label: "HOW IT'S TREATED", title: "How is it treated?", content: "Treatment depends on the cause. Iron-deficiency anemia is treated with iron supplements (taken on an empty stomach with vitamin C for better absorption) and iron-rich foods: red meat, spinach, beans, fortified cereals, and lentils. Vitamin B12 anemia may require B12 injections or high-dose supplements. Folate deficiency is treated with folic acid supplements. If anemia is caused by chronic disease, treating the underlying condition often helps. Heavy menstrual bleeding may need hormonal treatment. Severe anemia may require blood transfusions or IV iron infusions. For inherited anemias like sickle cell disease, treatment is more complex and may include specialized medications, blood transfusions, or bone marrow transplant. Most nutritional anemias resolve within a few months of proper treatment." },
    ],
    doctorQuestions: [
      "What type of anemia do I have, and what's causing it?",
      "Do I need iron supplements, and how should I take them?",
      "Could my anemia be a sign of something more serious?",
      "What foods should I eat to help my anemia?",
      "How long until I start feeling better with treatment?",
    ],
    sources: [
      { name: "Mayo Clinic — Anemia", url: "https://www.mayoclinic.org/diseases-conditions/anemia/symptoms-causes/syc-20351360" },
      { name: "NIH MedlinePlus — Anemia", url: "https://medlineplus.gov/anemia.html" },
      { name: "CDC — Iron Deficiency", url: "https://www.cdc.gov/nutrition/micronutrient-malnutrition/micronutrients/iron.html" },
    ],
  },
  {
    id: "adhd",
    title: "ADHD",
    definition: "A neurodevelopmental condition affecting focus, impulse control, and executive function — not a lack of willpower.",
    description: "When your brain's attention and focus system works differently",
    sections: [
      { label: "WHAT IS IT", title: "What is ADHD?", content: "ADHD (attention deficit hyperactivity disorder) is a neurodevelopmental condition that affects how your brain regulates attention, impulses, and activity level. It's not about being lazy or lacking discipline — it's a real difference in brain structure and chemistry. There are three types: predominantly inattentive (difficulty focusing, easily distracted, disorganized), predominantly hyperactive-impulsive (fidgety, talks excessively, acts without thinking), and combined type (both). ADHD is one of the most common neurodevelopmental disorders, affecting about 6 million children in the U.S. and persisting into adulthood in the majority of cases. About 4-5% of adults have ADHD, though many remain undiagnosed." },
      { label: "WHAT CAUSES IT", title: "What causes it?", content: "ADHD is primarily a brain-based, genetic condition. Brain imaging studies show differences in the development and activity of areas controlling attention and executive function — particularly in the prefrontal cortex. Neurotransmitters like dopamine and norepinephrine don't function as efficiently. Genetics are the strongest factor — ADHD runs in families, and if a parent has it, a child has a 50% chance of having it too. Other contributing factors include premature birth, low birth weight, exposure to lead or other toxins during pregnancy, and maternal smoking or alcohol use during pregnancy. ADHD is NOT caused by too much screen time, bad parenting, sugar, or a lack of discipline — though these myths persist." },
      { label: "WARNING SIGNS", title: "What are the warning signs?", content: "In children, signs include difficulty paying attention in school, frequent careless mistakes, trouble following instructions, losing things often, being easily distracted, excessive talking or interrupting, inability to sit still, and difficulty waiting their turn. In adults, ADHD often looks different: chronic disorganization, difficulty managing time and meeting deadlines, starting many projects but finishing few, trouble focusing during conversations, impulsive spending or decision-making, restlessness, and emotional dysregulation (quick frustration, mood swings). Adults with undiagnosed ADHD often struggle with underperformance at work, relationship difficulties, and low self-esteem. If these patterns have been present since childhood and cause significant problems in daily life, an evaluation is worthwhile." },
      { label: "HOW IT'S TREATED", title: "How is it treated?", content: "ADHD treatment typically combines medication, behavioral strategies, and lifestyle adjustments. Stimulant medications (like methylphenidate and amphetamine-based drugs) are the most effective treatment — they increase dopamine and norepinephrine in the brain, improving focus and impulse control in about 70-80% of people. Non-stimulant options (atomoxetine, guanfacine) are alternatives for those who can't tolerate stimulants. Behavioral therapy helps develop organizational skills, time management, and coping strategies. For children, parent training is an important component. Adults benefit from coaching, cognitive behavioral therapy, and workplace accommodations. Regular exercise, consistent sleep schedules, breaking tasks into smaller steps, using timers and reminders, and reducing distractions all support treatment. ADHD is very manageable with the right combination of supports." },
    ],
    doctorQuestions: [
      "Could my difficulty focusing actually be ADHD?",
      "What type of ADHD do I (or my child) have?",
      "What are the benefits and side effects of ADHD medication?",
      "Are there non-medication treatments that work?",
      "How can I get workplace or school accommodations?",
    ],
    sources: [
      { name: "CDC — ADHD", url: "https://www.cdc.gov/adhd/about/index.html" },
      { name: "NIH — ADHD", url: "https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd" },
      { name: "Mayo Clinic — ADHD", url: "https://www.mayoclinic.org/diseases-conditions/adult-adhd/symptoms-causes/syc-20350878" },
      { name: "NIH MedlinePlus — ADHD", url: "https://medlineplus.gov/attentiondeficithyperactivitydisorder.html" },
    ],
  },
  {
    id: "chronic-kidney-disease",
    title: "Chronic Kidney Disease",
    definition: "A gradual loss of kidney function over months or years, often caused by diabetes or high blood pressure.",
    description: "Understanding the stages and slowing the progression of kidney damage",
    sections: [
      { label: "WHAT IS IT", title: "What is chronic kidney disease?", content: "Chronic kidney disease (CKD) is a condition where your kidneys are damaged and can't filter blood as well as they should. \"Chronic\" means the damage happens slowly over a long time. Your kidneys contain about a million tiny filters called nephrons. When nephrons are damaged, they stop working — and unlike some organs, kidneys can't regenerate lost filtering units. CKD is classified in five stages based on your glomerular filtration rate (GFR), which measures how well your kidneys filter. Stage 1 is mild damage with normal filtering. Stage 5 is kidney failure, requiring dialysis or transplant. About 37 million Americans have CKD, and 9 out of 10 don't know it because early stages have no symptoms." },
      { label: "WHAT CAUSES IT", title: "What causes it?", content: "Diabetes is the leading cause of CKD — high blood sugar damages the delicate blood vessels in the kidneys over time. High blood pressure is the second most common cause — the sustained force damages kidney blood vessels and reduces their ability to filter. Together, these two conditions cause about 3 out of 4 new cases of kidney failure. Other causes include glomerulonephritis (inflammation of the kidney's filtering units), polycystic kidney disease (inherited), frequent kidney infections, prolonged obstruction from kidney stones or enlarged prostate, and long-term use of NSAIDs like ibuprofen. Smoking, obesity, heart disease, and a family history of kidney disease increase your risk. African Americans, Hispanics, and Native Americans have higher rates of CKD." },
      { label: "WARNING SIGNS", title: "What are the warning signs?", content: "CKD is often called a \"silent\" disease because you can lose a significant amount of kidney function before feeling any symptoms. In early stages, there may be no signs at all — only blood and urine tests can detect it. As kidney function declines, symptoms may include: fatigue and low energy, trouble concentrating, poor appetite, difficulty sleeping, muscle cramps (especially at night), swollen feet and ankles, puffiness around the eyes (especially in the morning), dry and itchy skin, needing to urinate more often (especially at night), and foamy or bubbly urine. If you have diabetes or high blood pressure, regular kidney screening (a simple blood test for creatinine/GFR and a urine test for albumin) is essential." },
      { label: "HOW IT'S TREATED", title: "How is it treated?", content: "While CKD can't be reversed, treatment can dramatically slow its progression. The most critical steps are controlling blood pressure (target below 130/80) and blood sugar (if diabetic). ACE inhibitors or ARBs are preferred blood pressure medications because they also protect the kidneys. SGLT2 inhibitors are a newer class of drugs shown to significantly slow CKD progression — even in people without diabetes. Dietary changes become important: limiting sodium, potassium, and phosphorus as kidney function declines. A renal dietitian can create a personalized plan. Avoiding NSAIDs, staying hydrated, not smoking, and maintaining a healthy weight all help. If kidneys eventually fail, treatment options are hemodialysis, peritoneal dialysis, or kidney transplantation. Early detection and treatment make a profound difference in outcomes." },
    ],
    doctorQuestions: [
      "What stage of CKD am I in, and what does my GFR mean?",
      "Are my current medications safe for my kidneys?",
      "What dietary changes do I need to make?",
      "Should I be seeing a nephrologist (kidney specialist)?",
      "How can I slow down the progression of my kidney disease?",
    ],
    sources: [
      { name: "CDC — Chronic Kidney Disease", url: "https://www.cdc.gov/kidney-disease/about/index.html" },
      { name: "Mayo Clinic — Chronic Kidney Disease", url: "https://www.mayoclinic.org/diseases-conditions/chronic-kidney-disease/symptoms-causes/syc-20354521" },
      { name: "NIH — Kidney Disease", url: "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd" },
      { name: "NIH MedlinePlus — CKD", url: "https://medlineplus.gov/chronickidneydisease.html" },
    ],
  },
  {
    id: "pre-diabetes",
    title: "Pre-diabetes",
    definition: "A warning stage where your blood sugar is higher than normal but not yet high enough to be Type 2 diabetes — and it's reversible.",
    description: "The wake-up call that gives you a chance to prevent diabetes",
    sections: [
      { label: "WHAT IS IT", title: "What is pre-diabetes?", content: "Pre-diabetes means your blood sugar levels are higher than normal but not high enough to be diagnosed as Type 2 diabetes. Think of it as a warning sign — your body is starting to struggle with processing sugar, but you haven't crossed the line into diabetes yet. What makes pre-diabetes so important is that it's often reversible. Without changes, about 15-30% of people with pre-diabetes will develop Type 2 diabetes within five years. But with lifestyle modifications, you can bring your blood sugar back to normal and dramatically reduce your risk. An estimated 96 million American adults have pre-diabetes — that's more than 1 in 3 — and more than 80% of them don't know it." },
      { label: "WHAT CAUSES IT", title: "What causes it?", content: "Pre-diabetes develops when your body starts becoming resistant to insulin — the hormone that lets sugar enter your cells. Your pancreas tries to compensate by producing more insulin, but eventually it can't keep up, and blood sugar starts rising. The same risk factors that lead to Type 2 diabetes apply: being overweight (especially around the belly), physical inactivity, eating a diet high in processed foods and sugar, family history of diabetes, age over 45, and having had gestational diabetes. Certain ethnic groups have higher risk, including African Americans, Hispanic/Latino Americans, Native Americans, and Asian Americans. Polycystic ovary syndrome (PCOS) and sleep disorders also increase risk." },
      { label: "WARNING SIGNS", title: "What are the warning signs?", content: "Pre-diabetes usually has no clear symptoms — that's what makes it so sneaky. Most people don't feel any different. Some may notice slightly darkened skin on certain body parts (neck, armpits, elbows, knees, knuckles) — a condition called acanthosis nigricans that signals insulin resistance. You might feel slightly more thirsty than usual, urinate a bit more frequently, or feel more tired, but these changes are often too subtle to notice. That's why screening is so critical. The American Diabetes Association recommends testing for anyone over 35, or younger if you have risk factors. Three tests can identify pre-diabetes: fasting blood sugar (100-125 mg/dL), A1C (5.7-6.4%), or oral glucose tolerance test." },
      { label: "HOW IT'S TREATED", title: "How is it treated?", content: "The exciting thing about pre-diabetes is that lifestyle changes are incredibly effective — more effective than medication in many studies. The landmark Diabetes Prevention Program study showed that losing just 5-7% of body weight (that's 10-14 pounds for a 200-pound person) and getting 150 minutes of moderate exercise per week reduced the risk of developing diabetes by 58%. Focus on whole foods over processed ones, increase fiber intake, reduce sugary drinks and refined carbohydrates, and move your body regularly — walking counts. Sleep matters too: poor sleep worsens insulin resistance. Your doctor may prescribe metformin in some cases, particularly if lifestyle changes alone aren't bringing numbers down. Regular monitoring (every 3-6 months) tracks your progress. Pre-diabetes is your body giving you a second chance — take it." },
    ],
    doctorQuestions: [
      "Do my blood sugar numbers mean I have pre-diabetes?",
      "Can I reverse pre-diabetes with lifestyle changes alone?",
      "How much weight do I need to lose to make a difference?",
      "How often should I get my blood sugar rechecked?",
      "Should I be on metformin, or should I try diet and exercise first?",
    ],
    sources: [
      { name: "CDC — Prediabetes", url: "https://www.cdc.gov/diabetes/about/about-prediabetes.html" },
      { name: "Mayo Clinic — Prediabetes", url: "https://www.mayoclinic.org/diseases-conditions/prediabetes/symptoms-causes/syc-20355278" },
      { name: "NIH MedlinePlus — Prediabetes", url: "https://medlineplus.gov/prediabetes.html" },
      { name: "American Diabetes Association — Prediabetes", url: "https://diabetes.org/about-diabetes/prediabetes" },
    ],
  },
];

topicsByLang.en = topics;
