import { CodeBracketSquareIcon, GlobeAltIcon } from '@heroicons/react/20/solid'
import ExultBanner from "../resources/exult.png"
import KerberusBanner from "../resources/kerberus.png"
import AndehBanner from "../resources/horizon.png"
import RefreshBanner from "../resources/refresh.png"

const projects = [
	{
		name: 'Exult Bot',
		description: 'A feature-rich discord bot used by 150,000+ users!',
		tags: [
			{"name": "Python", "colour": "text-python border-python"},
			{"name": "PSQL", "colour": "text-psql border-psql"},
			{"name": "Redis", "colour": "text-redis border-redis"}
		],
		source: null,
		website: 'https://exultbot.com/',
		imageUrl: ExultBanner,
		ctaText: "Website"
	},
	{
		name: 'Andeh UK',
		description: 'The website you\'re currently looking at!',
		tags: [
			{"name": "React", "colour": "text-react border-react"},
			{"name": "Tailwind", "colour": "text-tailwind border-tailwind"},
		],
		source: "https://github.com/ExHiraku/Personal-website/tree/react-1",
		website: null,
		imageUrl: AndehBanner,
		ctaText: "Source"
	},
	{
		name: 'Kerberus',
		description: 'A full-stack website for the Minecraft Modded Network called Kerberus!',
		tags: [
			{"name": "PHP", "colour": "text-php border-php"},
			{"name": "PSQL", "colour": "text-psql border-psql"},
			{"name": "Blade", "colour": "text-blade border-blade"}
		],
		source: null,
		website: 'https://discord.gg/kerberus',
		imageUrl: KerberusBanner,
		ctaText: "Coming Soon!"
	},
	{
		name: 'Refresh',
		description: 'React website for the Minecraft Agency called Refresh Studios!',
		tags: [
			{"name": "React", "colour": "text-react border-react"},
			{"name": "Tailwind", "colour": "text-tailwind border-tailwind"},
		],
		source: null,
		website: 'https://twitter.com/refresh_studios',
		imageUrl: RefreshBanner,
		ctaText: "Coming Soon!"
	},
]

export default function Projects() {
	return (
		<div className="bg-bg py-24" id="projects">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="text-2xl sm:text-4xl text-white font-bold mb-8">My Top Development Projects</div>
				<ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{projects.map((project) => (
						<li
							key={project.email}
							className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-xl bg-[#161A1D] text-center shadow"
						>
							<div className="flex flex-1 flex-col">
								<img className="mx-auto w-full h-28 flex-shrink-0 rounded-t-xl border-b border-brand-red" src={project.imageUrl} alt="" />
								<h3 className="mt-6 text-3xl font-bold text-white">{project.name}</h3>
								<dl className="mt-1 flex flex-grow flex-col justify-between">
									<dt className="sr-only">Title</dt>
									<dd className="text-sm text-gray-300 px-4">{project.description}</dd>
									<dt className="sr-only">Tags</dt>
									<dd className="my-3">
										{project.tags.map((tag) => (
											<span className={`rounded-md px-2 mx-2 py-1 text-xs font-medium uppercase bg-bg border-b border-white ${tag.colour}`}
											>
		                                        {tag.name}
											</span>
										))}
									</dd>
								</dl>
								<div className="mt-3 flex bg-brand-red opacity-70 rounded-b-xl">
									{project.source &&
										<div className="-ml-px flex w-0 flex-1">
											<a
											href={project.source}
											className="relative inline-flex w-0 flex-1 items-center justify-center
											rounded-br-lg border border-transparent py-4 text-sm
											text-white font-bold hover:text-gray-200"
											target="_blank"
											>
											<CodeBracketSquareIcon className="h-5 w-5 text-white"
											                       aria-hidden="true"
											/>
											<span className="ml-3">Source</span>
											</a>
										</div>
									}
									{project.website &&
										<div className="-ml-px flex w-0 flex-1">
											<a
												href={project.website}
												className="relative inline-flex w-0 flex-1 items-center justify-center
											rounded-br-lg border border-transparent py-4 text-sm
											text-white font-bold hover:text-gray-200"
												target="_blank"
											>
												<GlobeAltIcon className="h-5 w-5 text-white"
												                       aria-hidden="true"
												/>
												<span className="ml-3">
													{project.ctaText}
												</span>
											</a>
										</div>
									}
								</div>
							</div>
						</li>
					))}
				</ul>
				<div className="text-center mt-12 inline-block flex justify-center">
					<a href="https://github.com/ExHiraku?tab=repositories"
					   className="text-white font-bold border border-white/30 uppercase px-4 py-2 rounded-lg"
					   target="_blank"
					>
						View all projects <span aria-hidden="true">→</span>
					</a>
				</div>
			</div>
		</div>
	)
}