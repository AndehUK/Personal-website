import Logo from "../resources/logo.png"

const navigation = {
	main: [
		{name: 'Home', href: '#home'},
		{name: 'About', href: '#about'},
		{name: 'Projects', href: '#projects'},
		{name: 'Clients', href: '#testimonials'},
	],
	socials: [
		{name: "Discord", icon: <i className="fa-brands fa-discord"></i>, href: "https://discord.gg/ycCeBFjQeK"},
		{name: "Discord", icon: <i className="fa-brands fa-twitter"></i>, href: "https://twitter.com/exhiraku"},
		{name: "Discord", icon: <i className="fa-brands fa-github"></i>, href: "https://github.com/ExHiraku"},
		{name: "Discord", icon: <i className="fa-brands fa-twitch"></i>, href: "https://twitch.tv/exhiraku"},
	],
}

export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 bg-nav drop-shadow shadow-sm shadow-bg">
			<nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
				<div
					className="flex w-full items-center justify-between border-b border-brand-red py-6 lg:border-none">
					<div className="flex items-center">
						<div>
							<span className="sr-only">Andeh UK</span>
							<img className="h-10 w-auto rounded-full" src={Logo} alt=""/>
						</div>
						<div className="ml-10 hidden space-x-8 lg:block">
							{navigation.main.map((link) => (
								<a key={link.name} href={link.href}
								   className="text-base font-medium text-white hover:text-brand-red">
									{link.name}
								</a>
							))}
						</div>
					</div>
					<div className="ml-10 space-x-4">
						{navigation.socials.map((social) => (
							<a key={social.name} href={social.href} target="_blank"
							   className="inline-block px-2 text-xl font-medium text-white hover:text-brand-red">
								{social.icon}
							</a>
						))}
					</div>
				</div>
				<div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
					{navigation.main.map((link) => (
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