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
        "relative w-96 h-96 cursor-pointer overflow-hidden rounded-md",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <img
        className="rounded-md object-cover w-full h-full"
        width="96"
        height="72"
        alt=""
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
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
