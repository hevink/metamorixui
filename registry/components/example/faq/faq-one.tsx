const faqItems = [
  {
    question: "What is artificial intelligence?",
    answer:
      "AI simulates human intelligence in machines, allowing them to perform tasks like recognizing speech, making decisions, and identifying patterns..",
  },
  {
    question: "How does machine learning differ from AI?",
    answer:
      "Machine learning, a subset of AI, uses algorithms to learn from data. AI is broader, encompassing various techniques, including machine learning. ",
  },
  {
    question: "Can AI create music?",
    answer:
      "Yes, AI can analyze and generate music in various styles. For example, OpenAI's MuseNet composes music in different genres.",
  },
  {
    question: "Who is Dua Lipa?",
    answer:
      "Dua Lipa is a British singer known for hits like 'Levitating' and 'Don't Start Now'. ",
  },
  {
    question: "What are some popular songs by Dua Lipa?",
    answer:
      '"Levitating", "Don\'t Start Now", and "Physical" are some of her popular songs. ',
  },
  {
    question: "Has Dua Lipa collaborated with any AI projects?",
    answer:
      "While she hasn't directly collaborated with AI, AI is used in the music industry to analyze trends and create sounds.",
  },
];

const FAQ: React.FC = () => {
  return (
    <div className="mx-auto max-w-2xl divide-y divide-gray-900/10 pb-8 dark:divide-gray-100/10 sm:px-6 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-32">
      <h2 className="text-2xl leading-10 text-gray-900 dark:text-gray-100">
        Frequently asked questions
      </h2>
      <dl className="mt-10 space-y-8 divide-y divide-gray-900/10 dark:divide-gray-100/10">
        {faqItems.map((item, index) => (
          <div key={index} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 lg:col-span-5">
              {item.question}
            </dt>
            <dd className="mt-4 lg:col-span-7 lg:mt-0">
              <p
                className="text-base leading-7 text-gray-600 dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default FAQ;
