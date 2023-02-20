const navigation = [
	{name: 'Home', href: '#'},
	{name: 'About', href: '#'},
	{name: 'Projects', href: '#'},
	{name: 'Contact', href: '#'},
]

export default function NavBar() {
	return (
		<header className="bg-nav">
			<nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
				<div
					className="flex w-full items-center justify-between border-b border-brand-red py-6 lg:border-none">
					<div className="flex items-center">
						<div>
							<span className="sr-only">Andeh UK</span>
							<img className="h-10 w-auto rounded-full" src="/images/logo.png" alt=""/>
						</div>
						<div className="ml-10 hidden space-x-8 lg:block">
							{navigation.map((link) => (
								<a key={link.name} href={link.href}
								   className="text-base font-medium text-white hover:text-brand-red">
									{link.name}
								</a>
							))}
						</div>
					</div>
					<div className="ml-10 space-x-4">
						<a href="/discord"
						   className="inline-block px-2 text-xl font-medium text-white hover:text-brand-red">
							<i className="fa-brands fa-discord"></i>
						</a>
						<a href="/twitter"
						   className="inline-block px-2 text-xl font-medium text-white hover:text-brand-red">
							<i className="fa-brands fa-twitter"></i>
						</a>
						<a href="/github"
						   className="inline-block px-2 text-xl font-medium text-white hover:text-brand-red">
							<i className="fa-brands fa-github"></i>
						</a>
						<a href="/twitch"
						   className="inline-block px-2 text-xl font-medium text-white hover:text-brand-red">
							<i className="fa-brands fa-twitch"></i>
						</a>
					</div>
				</div>
				<div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
					{navigation.map((link) => (
						<a key={link.name} href={link.href}
						   className="text-base font-medium text-white hover:text-brand-red">
							{link.name}
						</a>
					))}
				</div>
			</nav>
		</header>
	)
}