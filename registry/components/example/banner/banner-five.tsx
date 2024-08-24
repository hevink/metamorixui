import { ChevronRight } from "lucide-react";

const Banner = () => {
  return (
    <section>
      <div className="flex h-auto w-full flex-col gap-2 bg-orange-600 px-4 py-3 md:flex-row md:items-center md:justify-center md:gap-4 md:px-6">
        <a href="#">
          <p className="flex items-center gap-2 text-base font-semibold text-white">
            🚀&nbsp;&nbsp; Get Premium Components for your next project on
            Metamorix UI <ChevronRight className="hidden size-5 md:block" />
          </p>
        </a>
      </div>
    </section>
  );
};

export default Banner;
