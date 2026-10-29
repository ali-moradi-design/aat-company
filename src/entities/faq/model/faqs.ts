export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  label: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    label: "How we work",
    items: [
      {
        question: "How does a collaboration with AAT|Architecten work?",
        answer:
          "We guide your project from sketch design through to provisional handover. One architect stays your fixed point of contact throughout, both towards you as the client and towards the contractors. We deliberately take on a limited number of projects so that we can carry out the whole commission ourselves and keep quality and follow-up in our own hands.",
      },
      {
        question: "Who is my point of contact during the project?",
        answer:
          "Luc Vaes or An Belmans is your point of contact for the entire trajectory, from sketch design to handover. AAT|Architecten acts as the link between client and contractors.",
      },
      {
        question:
          "Can you design a project for me, or do you also manage the construction?",
        answer:
          "We carry out the full commission ourselves, from sketch design to provisional handover. You cannot come to AAT|Architecten for a set of drawings alone.",
      },
      {
        question: "Why do you limit the number of projects you take on?",
        answer:
          "By limiting the number of projects, AAT|Architecten keeps the reins in its own hands and we guarantee thorough follow-up on every project.",
      },
      {
        question: "Do you also do interiors?",
        answer:
          "We work out the fixed, construction-bound elements of the interior, such as kitchens. Wallpaper, carpets and colour choices fall outside our specialisation, but you are welcome to come to us to look at the possibilities and feasibility of a project.",
      },
    ],
  },
  {
    label: "Permits",
    items: [
      {
        question: "Do you help with applying for an environmental permit?",
        answer:
          "Yes. We prepare the permit application, the drawings and the motivation note, and we follow the file up with the competent authority until a decision has been taken. For larger or more sensitive files we bring in the necessary specialists.",
      },
      {
        question: "What if a permit is refused?",
        answer:
          "If a permit is refused we look together at which adjustments are needed to obtain one after all, or we lodge a reasoned appeal with the competent authority. Every refusal is motivated in writing, so it is clear where the file needs to be adjusted.",
      },
      {
        question: "Do you take EPB standards into account?",
        answer:
          "Yes. Every building project in Flanders must comply with the energy performance regulations (EPB). AAT|Architecten takes this into account from the design onwards, in line with our focus on sustainability and circular building.",
      },
    ],
  },
  {
    label: "Project types",
    items: [
      {
        question: "What kind of projects can I come to you with?",
        answer:
          "We work mainly for public authorities, schools, SMEs and companies, large and small. We also realise residential projects for private clients.",
      },
      {
        question: "Do you also work on renovations with heritage value?",
        answer:
          "Yes. When a renovation involves heritage value, AAT|Architecten works together with a specialised practice to preserve the original character.",
      },
      {
        question: "In which region is AAT|Architecten active?",
        answer:
          "AAT|Architecten is based in Turnhout and active throughout the province of Antwerp.",
      },
    ],
  },
];
