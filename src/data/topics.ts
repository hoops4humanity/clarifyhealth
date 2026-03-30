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

export const topics: Topic[] = [
  {
    id: "type-2-diabetes",
    title: "Type 2 Diabetes",
    definition: "A condition where your body struggles to use insulin properly, causing blood sugar to stay too high.",
    description: "Understanding blood sugar and how your body uses energy",
    sections: [
      {
        label: "WHAT IS IT",
        title: "What is Type 2 Diabetes?",
        content: "Your body turns food into sugar (glucose) and releases it into your blood. A hormone called insulin acts like a key, letting that sugar into your cells so they can use it for energy. With Type 2 diabetes, your body either doesn't make enough insulin or can't use it well. Sugar builds up in your blood instead of reaching your cells. Over time, high blood sugar can damage your heart, kidneys, eyes, and nerves. Type 2 is the most common form of diabetes — about 90% of people with diabetes have this type. It usually develops in adults, but it's becoming more common in younger people too.",
      },
      {
        label: "WHAT CAUSES IT",
        title: "What causes it?",
        content: "Type 2 diabetes develops when your body becomes resistant to insulin. This often happens gradually. Being overweight — especially carrying extra weight around your belly — is the biggest risk factor. Not getting enough physical activity, eating a lot of processed or sugary foods, and having a family history of diabetes all increase your risk. Your age, ethnicity, and even a history of gestational diabetes (diabetes during pregnancy) can also play a role. It's not caused by eating too much sugar alone — it's a combination of genetics, lifestyle, and biology.",
      },
      {
        label: "WARNING SIGNS",
        title: "What are the warning signs?",
        content: "Many people with Type 2 diabetes don't notice symptoms at first. That's why it can go undiagnosed for years. When symptoms do show up, they can include feeling very thirsty all the time, needing to urinate frequently (especially at night), feeling unusually tired, blurry vision, slow-healing cuts or bruises, tingling or numbness in your hands or feet, and unexplained weight loss. If you're over 45 or have risk factors, ask your doctor about getting tested — even if you feel fine.",
      },
      {
        label: "HOW IT'S TREATED",
        title: "How is it treated?",
        content: "Treatment usually starts with lifestyle changes: eating more whole foods, moving your body regularly, and losing a modest amount of weight if needed — even losing 5-7% of your body weight can make a big difference. Your doctor may also prescribe medication like metformin to help your body use insulin better. Some people eventually need insulin injections. You'll likely need to check your blood sugar regularly and see your doctor for A1C tests, which show your average blood sugar over the past 2-3 months. The goal is to keep blood sugar in a healthy range to prevent long-term complications.",
      },
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
      {
        label: "WHAT IS IT",
        title: "What is high blood pressure?",
        content: "Every time your heart beats, it pumps blood through your arteries. Blood pressure is the force of that blood pushing against the artery walls. When that force stays too high over time, it's called high blood pressure — or hypertension. Think of it like a garden hose: if the water pressure is too high for too long, the hose gets damaged. The same thing happens to your blood vessels, heart, and kidneys. Blood pressure is measured with two numbers — like 120/80. The top number (systolic) measures pressure when your heart beats. The bottom number (diastolic) measures pressure between beats. High blood pressure is generally 130/80 or above.",
      },
      {
        label: "WHAT CAUSES IT",
        title: "What causes it?",
        content: "For most people, there's no single cause. It usually develops gradually over years. Eating too much salt, not exercising enough, being overweight, drinking too much alcohol, and chronic stress all contribute. Family history plays a significant role — if your parents had high blood pressure, you're more likely to develop it too. Certain conditions like kidney disease, sleep apnea, and thyroid problems can also raise blood pressure. Some medications, including birth control pills and decongestants, can increase it as well.",
      },
      {
        label: "WARNING SIGNS",
        title: "What are the warning signs?",
        content: "High blood pressure is called the \"silent killer\" for a reason — most people feel perfectly fine while it quietly damages their body. There are usually no symptoms at all. In rare cases, extremely high blood pressure can cause headaches, shortness of breath, nosebleeds, or a feeling of pounding in your chest or head. The only reliable way to know if you have high blood pressure is to get it measured. That's why regular check-ups are so important, even when you feel healthy.",
      },
      {
        label: "HOW IT'S TREATED",
        title: "How is it treated?",
        content: "Treatment often starts with lifestyle changes: reducing salt intake, eating more fruits and vegetables, exercising regularly, maintaining a healthy weight, limiting alcohol, and managing stress. If lifestyle changes aren't enough, your doctor may prescribe medication. There are several types — diuretics, ACE inhibitors, calcium channel blockers, and others. You may need to try a few to find what works best. Many people need more than one medication. The goal is to bring your numbers below 130/80 and keep them there to protect your heart, kidneys, and brain.",
      },
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
      {
        label: "WHAT IS IT",
        title: "What is high cholesterol?",
        content: "Cholesterol is a waxy, fat-like substance that your body actually needs — it helps build cells, make vitamins, and produce hormones. Your liver makes all the cholesterol you need. Problems start when you have too much, especially the \"bad\" kind called LDL. Extra LDL cholesterol sticks to the walls of your arteries and builds up over time, like grease in a pipe. This buildup is called plaque, and it makes your arteries narrower and stiffer. HDL cholesterol is the \"good\" kind — it helps carry bad cholesterol away from your arteries. You want LDL low and HDL high.",
      },
      {
        label: "WHAT CAUSES IT",
        title: "What causes it?",
        content: "Diet plays a big role — eating a lot of saturated fats (found in red meat, full-fat dairy, fried foods, and baked goods) raises your LDL cholesterol. Trans fats, found in some processed foods, are even worse. But diet isn't the whole story. Your genetics matter a lot. Some people inherit a tendency toward high cholesterol from their parents, a condition called familial hypercholesterolemia. Being overweight, not exercising, smoking, and aging all raise your risk too. Even people who eat well and exercise can have high cholesterol because of their genes.",
      },
      {
        label: "WARNING SIGNS",
        title: "What are the warning signs?",
        content: "High cholesterol has no symptoms at all. You can feel perfectly healthy and have dangerously high levels. That's why it's sometimes called a \"silent\" condition. The only way to know your cholesterol levels is through a blood test called a lipid panel. Doctors generally recommend getting your first test by age 20, then every 4-6 years if your levels are normal. If you have risk factors — family history, diabetes, obesity, or smoking — you should be tested more often. By the time symptoms appear (like chest pain or a heart attack), damage has already been done.",
      },
      {
        label: "HOW IT'S TREATED",
        title: "How is it treated?",
        content: "The first step is usually lifestyle changes: eating more fiber-rich foods (oats, beans, fruits), choosing healthy fats (olive oil, nuts, fish), exercising at least 150 minutes per week, losing excess weight, and quitting smoking. If lifestyle changes aren't enough — or if your levels are very high — your doctor may prescribe a statin medication. Statins are one of the most studied drugs in medicine and are very effective at lowering LDL. Some people need additional medications. Regular blood tests monitor your progress. The goal is to reduce your risk of heart attack and stroke.",
      },
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
    title: "Asthma",
    definition: "A condition where your airways become inflamed and narrow, making breathing difficult — especially during flare-ups.",
    description: "When your airways get tight and breathing becomes difficult",
    sections: [
      {
        label: "WHAT IS IT",
        title: "What is asthma?",
        content: "Asthma is a chronic condition that affects the airways in your lungs. These airways are the tubes that carry air in and out. When you have asthma, the lining of your airways is constantly a little inflamed. When something irritates them further, three things happen: the muscles around the airways tighten, the lining swells even more, and extra mucus fills the narrowed passages. This is an asthma attack — and it can feel like trying to breathe through a coffee stirrer. Asthma can range from a minor nuisance to a life-threatening condition, but with the right treatment, most people manage it well.",
      },
      {
        label: "WHAT CAUSES IT",
        title: "What causes it?",
        content: "Doctors don't know exactly why some people develop asthma and others don't, but it's likely a combination of genetics and environment. If asthma, allergies, or eczema run in your family, you're more likely to develop it. Common triggers include pollen, dust mites, pet dander, mold, cigarette smoke, cold air, exercise, air pollution, strong emotions, and respiratory infections like colds. Workplace chemicals and fumes can also cause asthma in adults. Importantly, triggers are different for each person — what sets off one person's asthma may not affect another at all.",
      },
      {
        label: "WARNING SIGNS",
        title: "What are the warning signs?",
        content: "The most common symptoms are wheezing (a whistling sound when you breathe), coughing — especially at night or early in the morning — shortness of breath, and a tight feeling in your chest. Some people only experience symptoms during exercise, in cold weather, or during allergy season. Others have symptoms every day. Pay attention to patterns: if you're using your rescue inhaler more than twice a week, waking up at night from coughing, or avoiding activities because of breathing problems, your asthma may not be well controlled.",
      },
      {
        label: "HOW IT'S TREATED",
        title: "How is it treated?",
        content: "Asthma treatment has two main parts: quick-relief and long-term control. A rescue inhaler (like albuterol) relaxes your airway muscles fast during an attack. Controller medications (usually inhaled corticosteroids) reduce inflammation daily to prevent attacks from happening. Your doctor will create an asthma action plan that tells you what to take daily, what to do when symptoms worsen, and when to seek emergency care. Avoiding your personal triggers is also key. With proper treatment, most people with asthma can live active, normal lives — including professional athletes.",
      },
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
    title: "Anxiety",
    definition: "More than just worry — a condition where your body's alarm system fires too often, making daily life feel overwhelming.",
    description: "When worry becomes constant and hard to control",
    sections: [
      {
        label: "WHAT IS IT",
        title: "What is anxiety?",
        content: "Everyone feels anxious sometimes — before a job interview, during a health scare, or when facing a big decision. That's normal. Anxiety becomes a medical condition when the worry is constant, out of proportion to the situation, and hard to control. It can take over your thoughts, affect your sleep, and make everyday activities feel overwhelming. There are several types: generalized anxiety disorder (ongoing worry about many things), social anxiety (intense fear of social situations), panic disorder (sudden intense fear with physical symptoms), and others. Anxiety disorders are the most common mental health condition — they affect about 40 million adults in the U.S.",
      },
      {
        label: "WHAT CAUSES IT",
        title: "What causes it?",
        content: "Anxiety isn't caused by weakness or a character flaw — it's a real medical condition with biological roots. Brain chemistry plays a major role: the parts of your brain that process fear and danger can become overactive. Genetics matter too — if anxiety runs in your family, you're more likely to develop it. Life experiences like trauma, abuse, major stress, or a serious health diagnosis can trigger anxiety. Personality traits, like being naturally more cautious or sensitive, also increase risk. Sometimes anxiety develops alongside other conditions like depression, chronic pain, or thyroid problems.",
      },
      {
        label: "WARNING SIGNS",
        title: "What are the warning signs?",
        content: "Anxiety shows up in both your mind and your body. Mental signs include constant worrying, racing thoughts, difficulty concentrating, expecting the worst, irritability, and feeling restless or on edge. Physical signs can include a racing or pounding heart, muscle tension (especially in your jaw, neck, or shoulders), stomach problems, sweating, trembling, headaches, fatigue, and trouble sleeping. Some people experience panic attacks — sudden episodes of intense fear with chest pain, shortness of breath, dizziness, and a feeling that something terrible is about to happen. If anxiety is interfering with your daily life, it's worth talking to a doctor.",
      },
      {
        label: "HOW IT'S TREATED",
        title: "How is it treated?",
        content: "Anxiety is very treatable. The most effective approaches include therapy, medication, or both. Cognitive behavioral therapy (CBT) is considered the gold standard — it helps you identify and change the thought patterns that fuel anxiety. Medications like SSRIs and SNRIs can help balance brain chemistry. Anti-anxiety medications may be used short-term for severe symptoms. Lifestyle changes also help: regular exercise, good sleep habits, reducing caffeine and alcohol, mindfulness or meditation, and deep breathing exercises. Treatment takes time, but most people see real improvement. The first step is simply talking to your doctor about what you're experiencing.",
      },
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
    title: "Depression",
    definition: "A medical condition that causes persistent sadness and loss of interest, affecting how you think, feel, and handle daily life.",
    description: "When sadness won't lift and everything feels heavy",
    sections: [
      {
        label: "WHAT IS IT",
        title: "What is depression?",
        content: "Depression is more than just feeling sad or having a bad week. It's a medical condition — also called major depressive disorder — that affects how your brain works. It changes the way you think, feel, and handle everyday activities like sleeping, eating, and working. Depression makes everything feel heavier. Activities you used to enjoy feel pointless. Getting out of bed can feel impossible. It's not something you can just \"snap out of\" — any more than you could snap out of a broken leg. Depression is one of the most common medical conditions in the world, affecting more than 280 million people globally. It can happen to anyone, at any age.",
      },
      {
        label: "WHAT CAUSES IT",
        title: "What causes it?",
        content: "Depression is caused by a combination of factors working together. Brain chemistry is a big one — the chemicals that regulate mood, sleep, and energy (like serotonin and norepinephrine) can become imbalanced. Genetics play a role: depression often runs in families. Stressful life events — losing a loved one, going through a divorce, financial problems, a health diagnosis, or even major positive changes — can trigger an episode. Chronic illnesses, certain medications, hormonal changes (like after childbirth or during menopause), and substance use can also contribute. There's rarely a single cause. And it's never your fault.",
      },
      {
        label: "WARNING SIGNS",
        title: "What are the warning signs?",
        content: "Depression looks different for different people, but common signs include: persistent sadness or feeling \"empty\" for most of the day, nearly every day. Losing interest or pleasure in activities you used to enjoy. Changes in appetite — eating much more or much less than usual. Sleeping too much or being unable to sleep. Feeling exhausted even after rest. Difficulty concentrating or making decisions. Feeling worthless, guilty, or hopeless. Withdrawing from friends and family. Physical symptoms like headaches or body aches with no clear cause. In severe cases, thoughts of death or suicide. If you or someone you know is in crisis, call or text 988 (Suicide & Crisis Lifeline) anytime.",
      },
      {
        label: "HOW IT'S TREATED",
        title: "How is it treated?",
        content: "Depression is one of the most treatable mental health conditions. About 80-90% of people eventually respond well to treatment. The main approaches are therapy and medication, often used together. Cognitive behavioral therapy (CBT) and interpersonal therapy are especially effective. Antidepressant medications (like SSRIs) help restore balance to brain chemistry — they typically take 2-4 weeks to start working. Lifestyle changes support treatment: regular physical activity, consistent sleep, social connection, and a healthy diet all help. For treatment-resistant depression, options like transcranial magnetic stimulation (TMS) or ketamine therapy are available. Recovery is real and possible — the hardest part is often taking the first step to ask for help.",
      },
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
    title: "Heart Disease",
    definition: "A group of conditions that affect your heart's structure and function, often developing silently over decades.",
    description: "How heart problems develop and what you can do about them",
    sections: [
      {
        label: "WHAT IS IT",
        title: "What is heart disease?",
        content: "Heart disease is actually a group of conditions that affect your heart. The most common type is coronary artery disease (CAD), where the arteries that supply blood to your heart muscle become narrowed or blocked by a buildup of plaque — a mix of cholesterol, fat, calcium, and other substances. This process, called atherosclerosis, develops slowly over decades. When blood flow to the heart is reduced, you can experience chest pain (angina). If an artery becomes completely blocked, it causes a heart attack. Heart disease is the leading cause of death in the United States for both men and women, but much of it is preventable.",
      },
      {
        label: "WHAT CAUSES IT",
        title: "What causes it?",
        content: "Heart disease usually develops from a combination of risk factors working together over time. The major ones are high blood pressure, high cholesterol, smoking, diabetes, obesity, physical inactivity, and an unhealthy diet — especially one high in saturated fat, trans fat, salt, and sugar. Family history matters: if a close relative had heart disease at a young age (before 55 for men, 65 for women), your risk is higher. Age is a factor — risk increases as you get older. Chronic stress, excessive alcohol use, and conditions like sleep apnea also contribute. Many of these risk factors are connected and tend to cluster together.",
      },
      {
        label: "WARNING SIGNS",
        title: "What are the warning signs?",
        content: "Heart disease can develop for years without symptoms. When signs do appear, they may include: chest pain or discomfort (pressure, squeezing, or fullness), shortness of breath during activity or at rest, pain or discomfort in your arms, back, neck, jaw, or stomach. Fatigue, dizziness, nausea, and cold sweats can also be signs. Women are more likely to experience unusual symptoms like extreme fatigue, nausea, and back or jaw pain. A heart attack can strike suddenly: crushing chest pain, difficulty breathing, cold sweat, and lightheadedness. If you suspect a heart attack, call 911 immediately — every minute matters.",
      },
      {
        label: "HOW IT'S TREATED",
        title: "How is it treated?",
        content: "Treatment depends on how advanced the disease is. For many people, it starts with aggressive lifestyle changes: heart-healthy eating (like the Mediterranean or DASH diet), regular exercise, quitting smoking, managing stress, and losing excess weight. Medications are often needed: statins for cholesterol, blood pressure medications, blood thinners, and sometimes nitroglycerin for chest pain. If arteries are significantly blocked, procedures like angioplasty (inserting a stent to open the artery) or bypass surgery may be necessary. Cardiac rehabilitation — a supervised program of exercise and education — helps people recover after a heart event. Prevention is always better than treatment.",
      },
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
    title: "Kidney Disease",
    definition: "When your kidneys gradually lose their ability to filter waste and excess fluid from your blood.",
    description: "Understanding how your kidneys work and what happens when they don't",
    sections: [
      {
        label: "WHAT IS IT",
        title: "What is kidney disease?",
        content: "Your kidneys are two fist-sized organs near your lower back. They're your body's filtration system — every day, they filter about 200 quarts of blood, removing waste products and extra fluid that become urine. They also help control blood pressure, make red blood cells, and keep your bones strong. Chronic kidney disease (CKD) means your kidneys are damaged and gradually losing their ability to do these jobs. It's measured in stages 1 through 5, with stage 5 being kidney failure. CKD affects about 37 million Americans, and most of them don't know they have it because symptoms don't appear until significant damage has occurred.",
      },
      {
        label: "WHAT CAUSES IT",
        title: "What causes it?",
        content: "The two most common causes of kidney disease are diabetes and high blood pressure — together they account for about two-thirds of all cases. High blood sugar from diabetes damages the tiny blood vessels in your kidneys over time. High blood pressure damages those same blood vessels by forcing blood through them too hard. Other causes include glomerulonephritis (inflammation of the kidney's filtering units), polycystic kidney disease (an inherited condition), prolonged use of certain pain medications like ibuprofen, recurring kidney infections, and blockages from kidney stones or an enlarged prostate. Family history and age (over 60) also increase your risk.",
      },
      {
        label: "WARNING SIGNS",
        title: "What are the warning signs?",
        content: "Kidney disease is often called a \"silent\" condition because you can lose up to 90% of kidney function before feeling sick. Early stages typically have no symptoms at all. As it progresses, signs may include: swelling in your feet, ankles, or hands (from fluid your kidneys can't remove), feeling more tired than usual, urinating more or less than normal, foamy or bubbly urine (a sign of protein), persistent itching, nausea or vomiting, loss of appetite, muscle cramps, and trouble concentrating. A simple blood test (measuring creatinine and GFR) and a urine test can detect kidney disease early, which is why screening is so important if you have risk factors.",
      },
      {
        label: "HOW IT'S TREATED",
        title: "How is it treated?",
        content: "There's no cure for chronic kidney disease, but treatment can slow its progression significantly — sometimes by decades. The most important step is controlling the conditions that caused it: keeping blood sugar in range (if you have diabetes) and keeping blood pressure below 130/80. Medications like ACE inhibitors or ARBs protect the kidneys. Newer drugs called SGLT2 inhibitors have shown remarkable benefits for kidney protection. Diet changes may be needed: limiting salt, potassium, phosphorus, and protein depending on your stage. If kidneys eventually fail (stage 5), treatment options are dialysis — a machine that filters your blood — or a kidney transplant. Early detection makes a huge difference in outcomes.",
      },
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
    title: "Thyroid Disease",
    definition: "When the small gland in your neck makes too much or too little hormone, throwing your body's metabolism off balance.",
    description: "How a tiny gland controls your energy, weight, and mood",
    sections: [
      {
        label: "WHAT IS IT",
        title: "What is thyroid disease?",
        content: "Your thyroid is a small, butterfly-shaped gland at the front of your neck. Despite its size, it controls some of your body's most important functions — your metabolism, heart rate, body temperature, and energy levels. It does this by producing thyroid hormones (T3 and T4) that tell your cells how fast to work. Thyroid disease happens when this gland makes too much hormone (hyperthyroidism) or too little (hypothyroidism). Both conditions throw your body out of balance. Thyroid disease is very common — about 20 million Americans have some form of it, and women are 5-8 times more likely to develop it than men.",
      },
      {
        label: "WHAT CAUSES IT",
        title: "What causes it?",
        content: "The most common cause of hypothyroidism (underactive thyroid) is Hashimoto's disease, an autoimmune condition where your immune system mistakenly attacks your thyroid. The most common cause of hyperthyroidism (overactive thyroid) is Graves' disease, another autoimmune condition that causes the thyroid to produce too much hormone. Other causes include thyroid nodules (lumps that develop on the gland), inflammation of the thyroid (thyroiditis), iodine imbalance, certain medications, radiation treatment to the head or neck, and — rarely — thyroid cancer. Pregnancy can also trigger thyroid problems. Family history of autoimmune disease increases your risk significantly.",
      },
      {
        label: "WARNING SIGNS",
        title: "What are the warning signs?",
        content: "Hypothyroidism (too little hormone) tends to slow everything down: fatigue, weight gain, feeling cold when others don't, constipation, dry skin, thinning hair, depression, brain fog, and heavy or irregular periods. Hyperthyroidism (too much hormone) speeds things up: unexplained weight loss, rapid heartbeat, anxiety and nervousness, trembling hands, sweating, difficulty sleeping, frequent bowel movements, and bulging eyes (in Graves' disease). Both conditions can develop gradually, and symptoms are easy to blame on aging, stress, or other conditions. A simple blood test measuring TSH (thyroid-stimulating hormone) can detect thyroid problems quickly.",
      },
      {
        label: "HOW IT'S TREATED",
        title: "How is it treated?",
        content: "Hypothyroidism is treated with a daily synthetic thyroid hormone pill (levothyroxine). It replaces the hormone your thyroid isn't making and is usually taken for life. The dose is adjusted through blood tests until your levels stabilize. Most people feel significantly better within a few weeks. Hyperthyroidism has more treatment options: anti-thyroid medications, radioactive iodine therapy (which gradually reduces thyroid function), or surgery to remove part or all of the thyroid. After treatment for hyperthyroidism, many people eventually need thyroid hormone replacement. Thyroid nodules are usually monitored with ultrasound; most are benign. The key is regular monitoring — thyroid levels can fluctuate, so periodic blood tests ensure your treatment stays on track.",
      },
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
    title: "Acid Reflux",
    definition: "When stomach acid flows backward into your esophagus, causing a burning sensation and potential damage over time.",
    description: "That burning feeling in your chest and how to manage it",
    sections: [
      {
        label: "WHAT IS IT",
        title: "What is acid reflux?",
        content: "At the bottom of your esophagus (the tube that carries food from your mouth to your stomach) there's a ring of muscle called the lower esophageal sphincter (LES). It opens to let food into your stomach and closes to keep stomach acid where it belongs. Acid reflux happens when this muscle relaxes at the wrong time or doesn't close tightly enough, allowing acidic stomach contents to flow back up into your esophagus. The occasional episode is normal. But when it happens frequently — twice a week or more — it's called gastroesophageal reflux disease (GERD). Over time, repeated acid exposure can damage the lining of your esophagus.",
      },
      {
        label: "WHAT CAUSES IT",
        title: "What causes it?",
        content: "Several factors can weaken or relax the muscle that keeps acid in your stomach. Being overweight puts extra pressure on your abdomen, pushing stomach contents upward. Eating large meals, eating late at night, or lying down right after eating all increase the chance of reflux. Certain foods are common triggers: citrus, tomatoes, chocolate, mint, garlic, onions, spicy foods, and fatty or fried foods. Drinks like coffee, alcohol, and carbonated beverages can contribute. Smoking weakens the LES. Pregnancy commonly causes reflux due to pressure and hormonal changes. A hiatal hernia — where part of your stomach pushes through your diaphragm — also increases risk.",
      },
      {
        label: "WARNING SIGNS",
        title: "What are the warning signs?",
        content: "The most recognizable symptom is heartburn — a burning pain in the center of your chest that often worsens after eating or when lying down. Despite the name, it has nothing to do with your heart. Other symptoms include regurgitation (a sour or bitter taste in your mouth from acid backing up), difficulty swallowing, the feeling of a lump in your throat, chronic cough, hoarseness or sore throat (especially in the morning), and worsening asthma symptoms. If you experience chest pain, it's important to make sure it's reflux and not a heart problem — especially if you also have shortness of breath, arm pain, or dizziness. See a doctor if symptoms occur more than twice weekly or over-the-counter medications don't help.",
      },
      {
        label: "HOW IT'S TREATED",
        title: "How is it treated?",
        content: "Lifestyle changes are the foundation of treatment: eat smaller meals, don't eat within 3 hours of lying down, elevate the head of your bed 6-8 inches, maintain a healthy weight, quit smoking, and identify and avoid your personal trigger foods. Over-the-counter antacids (like Tums) provide quick relief for occasional heartburn. H2 blockers (like famotidine) reduce acid production for hours. For frequent GERD, proton pump inhibitors (PPIs) like omeprazole are the most effective at reducing acid and allowing the esophagus to heal. Long-term PPI use should be discussed with your doctor. If medications don't work, surgical options can strengthen the LES. Untreated GERD can lead to complications like esophageal strictures or Barrett's esophagus, so consistent management matters.",
      },
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
