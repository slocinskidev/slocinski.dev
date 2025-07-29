"use client";
import { motion } from "motion/react";

type SpotlightProps = {
	gradientFirst?: string;
	gradientSecond?: string;
	gradientThird?: string;
	lightGradientFirst?: string;
	lightGradientSecond?: string;
	lightGradientThird?: string;
	translateY?: number;
	width?: number;
	height?: number;
	smallWidth?: number;
	duration?: number;
	xOffset?: number;
};

export const Spotlight = ({
	gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(220, 100%, 85%, .12) 0, hsla(220, 100%, 55%, .04) 50%, hsla(220, 100%, 45%, 0) 80%)",
	gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(220, 100%, 85%, .08) 0, hsla(220, 100%, 55%, .03) 80%, transparent 100%)",
	gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(220, 100%, 85%, .06) 0, hsla(220, 100%, 45%, .02) 80%, transparent 100%)",
	lightGradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(220, 100%, 85%, .15) 0, hsla(220, 100%, 55%, .08) 50%, hsla(220, 100%, 45%, 0) 80%)",
	lightGradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(220, 100%, 85%, .12) 0, hsla(220, 100%, 55%, .06) 80%, transparent 100%)",
	lightGradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(220, 100%, 85%, .10) 0, hsla(220, 100%, 45%, .04) 80%, transparent 100%)",
	translateY = -350,
	width = 560,
	height = 1380,
	smallWidth = 240,
	duration = 7,
	xOffset = 100,
}: SpotlightProps = {}) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			transition={{
				duration: 1.5,
			}}
			className="pointer-events-none absolute inset-0 h-full w-full"
		>
			<motion.div
				animate={{
					x: [0, xOffset, 0],
				}}
				transition={{
					duration,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "reverse",
					ease: "easeInOut",
				}}
				className="absolute top-0 left-0 w-screen h-screen z-0 pointer-events-none"
			>
				<div
					style={{
						transform: `translateY(${translateY}px) rotate(-45deg)`,
						background: gradientFirst,
						width: `${width}px`,
						height: `${height}px`,
					}}
					className={`absolute top-0 left-0 dark:block hidden`}
				/>
				<div
					style={{
						transform: `translateY(${translateY}px) rotate(-45deg)`,
						background: lightGradientFirst,
						width: `${width}px`,
						height: `${height}px`,
					}}
					className={`absolute top-0 left-0 block dark:hidden`}
				/>
				<div
					style={{
						transform: "rotate(-45deg) translate(5%, -50%)",
						background: gradientSecond,
						width: `${smallWidth}px`,
						height: `${height}px`,
					}}
					className={`absolute top-0 left-0 origin-top-left dark:block hidden`}
				/>
				<div
					style={{
						transform: "rotate(-45deg) translate(5%, -50%)",
						background: lightGradientSecond,
						width: `${smallWidth}px`,
						height: `${height}px`,
					}}
					className={`absolute top-0 left-0 origin-top-left block dark:hidden`}
				/>
				<div
					style={{
						transform: "rotate(-45deg) translate(-180%, -70%)",
						background: gradientThird,
						width: `${smallWidth}px`,
						height: `${height}px`,
					}}
					className={`absolute top-0 left-0 origin-top-left dark:block hidden`}
				/>
				<div
					style={{
						transform: "rotate(-45deg) translate(-180%, -70%)",
						background: lightGradientThird,
						width: `${smallWidth}px`,
						height: `${height}px`,
					}}
					className={`absolute top-0 left-0 origin-top-left block dark:hidden`}
				/>
			</motion.div>
			<motion.div
				animate={{
					x: [0, -xOffset, 0],
				}}
				transition={{
					duration,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "reverse",
					ease: "easeInOut",
				}}
				className="absolute top-0 right-0 w-screen h-screen z-0 pointer-events-none"
			>
				<div
					style={{
						transform: `translateY(${translateY}px) rotate(45deg)`,
						background: gradientFirst,
						width: `${width}px`,
						height: `${height}px`,
					}}
					className={`absolute top-0 right-0 dark:block hidden`}
				/>
				<div
					style={{
						transform: `translateY(${translateY}px) rotate(45deg)`,
						background: lightGradientFirst,
						width: `${width}px`,
						height: `${height}px`,
					}}
					className={`absolute top-0 right-0 block dark:hidden`}
				/>
				<div
					style={{
						transform: "rotate(45deg) translate(-5%, -50%)",
						background: gradientSecond,
						width: `${smallWidth}px`,
						height: `${height}px`,
					}}
					className={`absolute top-0 right-0 origin-top-right dark:block hidden`}
				/>
				<div
					style={{
						transform: "rotate(45deg) translate(-5%, -50%)",
						background: lightGradientSecond,
						width: `${smallWidth}px`,
						height: `${height}px`,
					}}
					className={`absolute top-0 right-0 origin-top-right block dark:hidden`}
				/>
				<div
					style={{
						transform: "rotate(45deg) translate(180%, -70%)",
						background: gradientThird,
						width: `${smallWidth}px`,
						height: `${height}px`,
					}}
					className={`absolute top-0 right-0 origin-top-right dark:block hidden`}
				/>
				<div
					style={{
						transform: "rotate(45deg) translate(180%, -70%)",
						background: lightGradientThird,
						width: `${smallWidth}px`,
						height: `${height}px`,
					}}
					className={`absolute top-0 right-0 origin-top-right block dark:hidden`}
				/>
			</motion.div>
		</motion.div>
	);
};
