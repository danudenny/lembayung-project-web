import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
	{
		title: "Work",
		links: [
			{ title: "Amdalnet", href: "/work/amdalnet" },
			{ title: "Business Trip", href: "/work/business-trip" },
			{ title: "Attendance App", href: "/work/attendance" },
			{
				title: (
					<>
						See all <span aria-hidden="true">&rarr;</span>
					</>
				),
				href: "/work",
			},
		],
	},
	{
		title: "Company",
		links: [
			{ title: "About", href: "/about" },
			{ title: "Services", href: "/services" },
			{ title: "Blog", href: "/blog" },
			{ title: "Contact us", href: "/contact" },
		],
	},
	{
		title: "Connect",
		links: SocialMediaProfiles,
	},
];
