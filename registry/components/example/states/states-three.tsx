import Image from "next/image";

const States = () => {
  return (
    <div className="block md:flex items-center">
      <Image
        src="/public/dashboard.png"
        alt="dashboard"
        height={500}
        width={500}
      />
    </div>
  );
};

export default States;
