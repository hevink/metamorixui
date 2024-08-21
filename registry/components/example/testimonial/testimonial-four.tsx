import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const data = [
  {
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    testimonial: "Amazing UI! It's simple and effective.",
  },
  {
    avatar: "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a",
    testimonial: "Love the animations, really brings the app to life.",
  },
  {
    avatar: "https://images.unsplash.com/photo-1645830166230-187caf791b90",
    testimonial: "The design is sleek and modern, highly recommend.",
  },
  {
    avatar: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa",
    testimonial: "A game changer for my projects, super easy to use.",
  },
  {
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    testimonial: "The best UI library I’ve worked with so far!",
  },
  {
    avatar: "https://images.unsplash.com/photo-1569913486515-b74bf7751574",
    testimonial: "Great support and easy to customize!",
  },
];

function AvatarCarousel({
  avatarSize = 48,
  avatarSpacing = 8,
  items = data,
}: {
  avatarSize?: number;
  avatarSpacing?: number;
  items?: { avatar: string; testimonial: string }[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAvatarClick = (index: number) => {
    setActiveIndex(index);
  };

  const getPlacementIndex = (index: number) => {
    const half = Math.floor(items.length / 2);
    const diff = index - activeIndex;
    if (diff > half) {
      return diff - items.length;
    } else if (diff < -half) {
      return diff + items.length;
    } else {
      return diff;
    }
  };

  const isAtEnd = (placementIndex: number) => {
    const half = Math.floor(items.length / 2);
    return placementIndex === -half || placementIndex === half;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((index) => (index + 1) % items.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative flex size-full flex-col items-center gap-6">
      <div
        className="relative flex size-full justify-center gap-2"
        style={{
          minHeight: `${avatarSize}px`,
          maxWidth: `${(avatarSize + avatarSpacing) * 5}px`,
          maskImage:
            "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
        }}
      >
        {items.map((item, index) => {
          const placement = getPlacementIndex(index);
          const left = placement * (avatarSize + avatarSpacing);
          const shouldHide = isAtEnd(placement);
          const isActive = activeIndex === index;
          return (
            <Image
              key={index}
              className={`absolute m-0 size-12 flex-none cursor-pointer rounded-full object-cover transition-opacity duration-300 ${
                isActive ? "opacity-100" : "opacity-40"
              }`}
              src={item.avatar}
              alt={`Avatar ${index + 1}`}
              width={avatarSize}
              height={avatarSize}
              onClick={() => handleAvatarClick(index)}
              style={{
                top: "50%",
                left: `calc(50% + ${left}px)`,
                transform: "translate(-50%, -50%)",
                zIndex: isActive ? 1 : 0,
                opacity: shouldHide ? 0 : isActive ? 1 : 0.6,
                scale: 1 - Math.abs(placement) * 0.1,
                transformOrigin: "top left",
                transition: "left 0.5s, opacity 0.5s, scale 0.5s",
                border: isActive ? "2px solid grey" : "none",
              }}
            />
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center text-lg font-medium"
        >
          {items[activeIndex].testimonial}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const Avatar = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-6 py-10">
      <h2 className="text-center text-xl font-bold">What our users say</h2>
      <AvatarCarousel />
    </div>
  );
};

export default Avatar;
