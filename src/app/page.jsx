import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";

export default function Home() {
	return (
		<main className="text-black">
			<Container className="mt-24 sm:mt-32">
				<FadeIn className="max-w-3xl">
					<h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
						Make your online presence a reality with us!
					</h1>
					<p className="mt-6 text-xl text-neutral-600">
						We are a group of developer working at the intersection
						of design and technology. It is a really busy
						intersection though — a lot of our staff have been
						involved in hit and runs.
					</p>
				</FadeIn>
			</Container>
		</main>
	);
}
