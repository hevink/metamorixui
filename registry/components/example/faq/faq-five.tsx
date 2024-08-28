import { ReactNode, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CollapsibleProps {
  title: string;
  children: ReactNode;
}

interface Item {
  id: number;
  title: string;
  content: string;
}

const items: Item[] = [
  {
    id: 1,
    title: "What is the capital of France?",
    content: "The capital of France is Paris.",
  },
  {
    id: 2,
    title: "What is the population of Japan?",
    content: "The population of Japan is approximately 126 million people.",
  },
  {
    id: 3,
    title: "What is the largest mammal?",
    content: "The blue whale is the largest mammal on Earth.",
  },
  {
    id: 4,
    title: "What is the tallest mountain?",
    content: "Mount Everest is the tallest mountain in the world.",
  },
  {
    id: 5,
    title: "What is the largest ocean?",
    content: "The Pacific Ocean is the largest ocean on Earth.",
  },
];

const FAQ: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl space-y-4 sm:p-6">
      <h1 className="mb-4 bg-gradient-to-b from-[#434343] to-[#494949] bg-clip-text text-center text-3xl font-bold text-[#F4FFFA00] dark:from-[#fafafa] dark:to-[#b4b4b4]">
        Frequently asked questions
      </h1>
      <p className="mb-10 text-center text-gray-600 dark:text-gray-400">
        Need help with something? Here are our most frequently asked questions.
      </p>
      {items.map((item) => (
        <Collapsible key={item.id} title={item.title}>
          <p>{item.content}</p>
        </Collapsible>
      ))}
    </div>
  );
};

export default FAQ;

const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-md border shadow-md">
      <button
        onClick={toggleCollapse}
        className={`flex w-full items-center justify-between px-4 py-2 text-left ${
          isOpen && "border-b"
        }`}
      >
        <span>{title}</span>
        {isOpen ? (
          <ChevronUp className="size-5 transition-transform duration-200" />
        ) : (
          <ChevronDown className="size-5 transition-transform duration-200" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-transform duration-200 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="p-4 text-neutral-600 dark:text-neutral-300">{children}</div>
      </div>
    </div>
  );
};
