import RefreshBanner from "../resources/refresh.png"
import KerberusBanner from "../resources/kerberus.png"
import RLHBanner from "../resources/rlh.png"

const clients = {
	client: [
		{ name: 'Refresh Studios', banner: RefreshBanner, href: 'https://twitter.com/refresh_studios'},
		{ name: 'Kerberus', banner: KerberusBanner, href: 'https://playkerberus.com' },
		{ name: 'Rocket League Hub', banner: RLHBanner, href: 'https://rocketleaguehub.com' },
	],
}

export default function Clients() {
	return (
		<div className="bg-bg" id="clients">
			<div className="flex flex-col mx-auto max-w-7xl px-6">
				<h1 className="text-3xl font-bold mt-20 text-white text-center">
					Some clients I have had the pleasure of working with!
				</h1>
				<div className="flex flex-wrap mt-12 mb-10 justify-center">
					{clients.client.map((c) => (
						<div key={c.name} className="p-2 mb-10 text-black mx-auto justify-center">
							<a href={c.href} className="hover:cursor-default">
								<img src={c.banner} className="max-w-xs" alt={c.banner} />
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}