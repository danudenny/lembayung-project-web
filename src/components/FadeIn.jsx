"use client";
import { createContext, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";
const FadeInStaggerContext = createContext(false);

const viewPort = {
	once: true,
	margin: "0 0 -200px",
};

const FadeIn = (props) => {
	const shouldReduceMotion = useReducedMotion();
	const isInStaggerGroup = useContext(FadeInStaggerContext);

	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
				visible: { opacity: 1, y: 0 },
			}}
			transition={{
				duration: 0.5,
			}}
			{...(isInStaggerGroup
				? {}
				: {
						initial: "hidden",
						whileInView: "visible",
						viewPort,
				  })}
			{...props}
		/>
	);
};

export const FadeInStagger = ({ faster = false, ...props }) => {
	return (
		<FadeInStaggerContext.Provider value={true}>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={viewPort}
				transition={{
					staggerChildren: faster ? 0.12 : 0.2,
				}}
				{...props}
			/>
		</FadeInStaggerContext.Provider>
	);
};

export default FadeIn;
