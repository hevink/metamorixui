import Image from "next/image";

const States = () => {
  return (
    <div className="block md:flex items-center">
      <Image
        src="/dashboard.png"
        alt="dashboard"
        height={500}
        width={500}
        quality={100}
      />
    </div>
  );
};

export default States;
