const navigation = {
	main: [
		{name: 'Home', href: '#home'},
		{name: 'About', href: '#about'},
		{name: 'Projects', href: '#projects'},
		{name: 'Testimonials', href: '#testimonials'},
	],
}

export default function Footer() {
	return (
		<div className="bg-bg">
			<footer className="bg-brand-red opacity-70">
				<div className="mx-auto max-w-7xl overflow-hidden py-10 px-6 sm:py-12 lg:px-8">
					<nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
						{navigation.main.map((item) => (
							<div key={item.name} className="pb-6 text-center">
								<a href={item.href} className="text-sm leading-6 text-white hover:text-gray-300">
									{item.name}
								</a>
							</div>
						))}
					</nav>
					<p className="mt-5 text-center text-xs leading-5 text-gray-200">
						&copy; 2023 Andeh UK. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	)
}