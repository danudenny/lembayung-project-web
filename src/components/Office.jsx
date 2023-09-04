import clsx from "clsx";

function OfficeAddress({ name, children, invert = false }) {
	return (
		<address
			className={clsx(
				"text-sm not-italic",
				invert ? "text-neutral-300" : "text-neutral-600"
			)}>
			<strong className={invert ? "text-white" : "text-neutral-950"}>
				{name}
			</strong>
			<br />
			{children}
		</address>
	);
}

const Office = ({ invert = false, ...props }) => {
	return (
		<ul role="list" {...props}>
			<li>
				<OfficeAddress name="Indonesia" invert={invert}>
					East Jakarta
					<br />
					Cipayung
				</OfficeAddress>
			</li>
		</ul>
	);
};

export default Office;
