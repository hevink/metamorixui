import { Play } from "lucide-react";

const stats = [
  {
    value: "400+",
    label: "Projects completed",
    description: "We've helped build over 400 amazing projects.",
  },
  {
    value: "600%",
    label: "Return on investment",
    description: "Our customers have reported an average of ~600% ROI.",
  },
  {
    value: "10k",
    label: "Global downloads",
    description: "Our free UI kit has been downloaded over 10k times.",
  },
  {
    value: "200+",
    label: "5-star reviews",
    description: "We're proud of our 5-star rating with over 200 reviews.",
  },
];

const States = () => {
  return (
    <div className="flex my-10 items-center justify-center p-4">
      <div className="w-full max-w-6xl space-y-8">
        <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
          <div>
            <h1 className="mb-2 text-4xl font-bold">Build something great</h1>
            <p className="text-gray-400">
              Everything you need to build modern UI and great products.
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 rounded bg-gray-800 px-4 py-2 font-bold text-white hover:bg-gray-700">
              <Play size={16} />
              <span>Demo</span>
            </button>
            <button className="rounded bg-purple-600 px-4 py-2 font-bold text-white hover:bg-purple-700">
              Get started
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="text-lg font-semibold">{stat.label}</p>
              <p className="text-sm text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default States;
