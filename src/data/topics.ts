export interface TopicSection {
  title: string;
  content: string;
}

export interface Topic {
  id: string;
  title: string;
  emoji: string;
  description: string;
  sections: TopicSection[];
}

export const topics: Topic[] = [
  {
    id: "diabetes",
    title: "Diabetes",
    emoji: "🩸",
    description: "Understanding blood sugar and how your body uses energy",
    sections: [
      {
        title: "What is it?",
        content:
          "Diabetes is a condition where your body has trouble managing sugar (glucose) in your blood. Normally, a hormone called insulin helps sugar move from your blood into your cells, where it's used for energy. With diabetes, either your body doesn't make enough insulin, or it can't use insulin properly. This causes sugar to build up in your blood, which can cause problems over time.",
      },
      {
        title: "What causes it?",
        content:
          "Type 1 diabetes happens when your immune system mistakenly attacks the cells in your pancreas that make insulin. Doctors aren't entirely sure why this happens. Type 2 diabetes — the most common kind — develops when your body becomes resistant to insulin, often due to factors like being overweight, not getting enough physical activity, or genetics. It can also run in families.",
      },
      {
        title: "What are the symptoms?",
        content:
          "You might feel very thirsty, need to urinate often (especially at night), feel unusually tired, have blurry vision, or notice that cuts and wounds heal slowly. Some people lose weight without trying. Many people with Type 2 diabetes don't notice symptoms right away, which is why regular check-ups are so important.",
      },
      {
        title: "What should I ask my doctor?",
        content:
          "\"What type of diabetes do I have?\" \"What should my blood sugar levels be?\" \"Do I need medication, or can I manage this with diet and exercise?\" \"How often should I check my blood sugar?\" \"Are there any complications I should watch for?\" \"Can you refer me to a diabetes educator?\"",
      },
    ],
  },
  {
    id: "high-blood-pressure",
    title: "High Blood Pressure",
    emoji: "❤️",
    description: "What it means when the pressure in your blood vessels is too high",
    sections: [
      {
        title: "What is it?",
        content:
          "Blood pressure is the force of blood pushing against the walls of your arteries as your heart pumps. When that force stays too high over time, it's called high blood pressure (or hypertension). Think of it like a garden hose — if the water pressure is too high for too long, the hose can get damaged. The same thing can happen to your blood vessels, heart, and kidneys.",
      },
      {
        title: "What causes it?",
        content:
          "For most people, there's no single cause. It usually develops over years and is influenced by things like eating too much salt, not exercising enough, being overweight, drinking too much alcohol, stress, and family history. Some medical conditions and medications can also raise blood pressure.",
      },
      {
        title: "What are the symptoms?",
        content:
          "High blood pressure is often called the \"silent killer\" because most people don't feel any symptoms at all. That's what makes it so dangerous. Rarely, very high blood pressure can cause headaches, shortness of breath, or nosebleeds. The only way to know if you have it is to get it checked.",
      },
      {
        title: "What should I ask my doctor?",
        content:
          "\"What do my blood pressure numbers mean?\" \"How often should I check my blood pressure?\" \"What lifestyle changes can help?\" \"Do I need medication?\" \"Can high blood pressure affect other parts of my health?\" \"What's a healthy blood pressure goal for me?\"",
      },
    ],
  },
  {
    id: "cholesterol",
    title: "Cholesterol",
    emoji: "🫀",
    description: "The fats in your blood and why they matter",
    sections: [
      {
        title: "What is it?",
        content:
          "Cholesterol is a waxy, fat-like substance found in your blood. Your body actually needs some cholesterol to build cells and make hormones. But when you have too much — especially the \"bad\" kind (LDL) — it can build up in your arteries like plaque in a pipe, making them narrower and stiffer. This raises your risk of heart attack and stroke.",
      },
      {
        title: "What causes it?",
        content:
          "High cholesterol can come from eating a lot of saturated fats (like fried foods, red meat, and full-fat dairy), not exercising, smoking, and being overweight. Genetics play a big role too — some people inherit high cholesterol from their parents even if they eat well and exercise.",
      },
      {
        title: "What are the symptoms?",
        content:
          "High cholesterol has no symptoms on its own. You can feel perfectly fine and still have dangerously high levels. The only way to know is through a blood test called a lipid panel. That's why doctors recommend regular cholesterol checks, especially after age 35 or if you have risk factors.",
      },
      {
        title: "What should I ask my doctor?",
        content:
          "\"What are my cholesterol numbers and what do they mean?\" \"Is my LDL ('bad' cholesterol) too high?\" \"What changes to my diet would help most?\" \"Do I need a statin or other medication?\" \"How often should I get tested?\" \"Does my family history put me at higher risk?\"",
      },
    ],
  },
  {
    id: "asthma",
    title: "Asthma",
    emoji: "🌬️",
    description: "When your airways get tight and breathing becomes difficult",
    sections: [
      {
        title: "What is it?",
        content:
          "Asthma is a condition where the airways in your lungs become inflamed and narrow, making it harder to breathe. During an asthma attack, the muscles around your airways tighten, the lining swells, and extra mucus can clog things up. It can feel like trying to breathe through a straw.",
      },
      {
        title: "What causes it?",
        content:
          "Asthma often starts in childhood and may be linked to allergies or family history. Common triggers include pollen, dust mites, pet dander, mold, cold air, exercise, smoke, stress, and respiratory infections. Different people have different triggers.",
      },
      {
        title: "What are the symptoms?",
        content:
          "Wheezing (a whistling sound when you breathe), coughing (especially at night or early morning), shortness of breath, and chest tightness. Symptoms can range from mild and occasional to severe and daily. Some people only have symptoms during exercise or allergy season.",
      },
      {
        title: "What should I ask my doctor?",
        content:
          "\"What triggers my asthma?\" \"What's the difference between my rescue inhaler and my daily controller?\" \"How do I use my inhaler correctly?\" \"What should I do during an asthma attack?\" \"Should I see an allergist?\" \"Can my asthma get better over time?\"",
      },
    ],
  },
  {
    id: "mental-health",
    title: "Mental Health",
    emoji: "🧠",
    description: "Understanding anxiety, depression, and emotional well-being",
    sections: [
      {
        title: "What is it?",
        content:
          "Mental health includes your emotional, psychological, and social well-being. It affects how you think, feel, and act. Conditions like anxiety and depression are very common — they're medical conditions, not personal failures. Just like your body can get sick, so can the part of you that manages emotions and thoughts.",
      },
      {
        title: "What causes it?",
        content:
          "Mental health conditions are caused by a combination of factors: brain chemistry, life experiences (like trauma or stress), and family history. Major life changes — losing a job, a health diagnosis, grief, or even retirement — can trigger or worsen symptoms. It's never just \"in your head\" — these are real, treatable conditions.",
      },
      {
        title: "What are the symptoms?",
        content:
          "For depression: persistent sadness, loss of interest in things you used to enjoy, changes in sleep or appetite, fatigue, difficulty concentrating, or feelings of worthlessness. For anxiety: constant worry, restlessness, racing heart, trouble sleeping, or avoiding situations that make you nervous. Everyone experiences these differently.",
      },
      {
        title: "What should I ask my doctor?",
        content:
          "\"Could what I'm feeling be anxiety or depression?\" \"What treatment options are available — therapy, medication, or both?\" \"Is this something that can get better?\" \"Can you refer me to a therapist or counselor?\" \"Are there things I can do at home to feel better?\" \"How long does treatment usually take?\"",
      },
    ],
  },
  {
    id: "medications",
    title: "Medications",
    emoji: "💊",
    description: "Making sense of prescriptions, side effects, and how medicines work",
    sections: [
      {
        title: "What is it?",
        content:
          "When your doctor prescribes a medication, it can feel overwhelming — especially if it's your first time or you're taking multiple drugs. Medications are tools that help your body fight disease, manage symptoms, or prevent problems. They come in many forms: pills, liquids, inhalers, patches, and injections.",
      },
      {
        title: "What causes confusion?",
        content:
          "Medical names can be intimidating. Every drug has a brand name and a generic name (like Tylenol vs. acetaminophen). Side effect lists can be scary, but they include everything that happened during testing — even rare events. Your pharmacist and doctor can help you understand what's truly likely vs. extremely rare.",
      },
      {
        title: "What should I watch for?",
        content:
          "Pay attention to how you feel after starting a new medication. Common side effects (like mild nausea or drowsiness) often go away after a few days. But if you experience anything severe — difficulty breathing, swelling, rash, or extreme dizziness — contact your doctor right away. Never stop a medication suddenly without talking to your doctor first.",
      },
      {
        title: "What should I ask my doctor?",
        content:
          "\"What does this medication do?\" \"When and how should I take it?\" \"Are there foods or other medications I should avoid while taking this?\" \"What side effects are most common?\" \"How will I know if it's working?\" \"Is there a generic version available?\" \"What happens if I miss a dose?\"",
      },
    ],
  },
];
