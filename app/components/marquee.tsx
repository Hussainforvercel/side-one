"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    img: "/murquee/baumex.png",
  },
  {
    name: "Jill",
    username: "@jill",
    img: "murquee/criminals-adil.png",
  },
  {
    name: "John",
    username: "@john",
    img: "murquee/Extraspace-screenshot.png",
  },
  {
    name: "Jane",
    username: "@jane",
    img: "murquee/flyttevaskpris.png",
  },
  {
    name: "Jenny",
    username: "@jenny",
    img: "murquee/instacruit.png",
  },
  {
    name: "James",
    username: "@james",
    img: "murquee/ntror.png",
  },
  {
    name: "James",
    username: "@james",
    img: "murquee/sariglam-screenshot.png",
  },
];

// We will only use one row, so we can map over the entire reviews array
const firstRow = reviews;

// Scroll reveal animation variants for Framer Motion
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <motion.figure
      className={cn(
        "relative w-96 h-72 cursor-pointer overflow-hidden rounded-md",
        "border-transparent bg-transparent hover:bg-transparent",
        "dark:border-transparent dark:bg-transparent dark:hover:bg-transparent"
      )}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <img
        className="rounded-md object-contain w-full h-full" // Use object-contain to show full image
        alt="review"
        src={img}
      />
    </motion.figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex mt-8 h-[300px] w-full items-center justify-center overflow-hidden rounded-lg bg-background">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} img={review.img} />
        ))}
      </Marquee>
      {/* Removed the left and right gradients */}
    </div>
  );
}
