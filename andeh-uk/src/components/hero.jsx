export default function Hero() {

	return (
		<div className="relative bg-bg">
			<div className="mx-auto max-w-7xl">
				<div className="relative z-10 lg:w-full lg:max-w-2xl">
					<svg
						className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-bg lg:block"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
						aria-hidden="true"
					>
						<polygon points="0,0 90,0 50,100 0,100" />
					</svg>

					<div className="relative py-32 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
						<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
							<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
								Hey! I'm
								<span className="text-brand-red"> Andrew</span>
							</h1>
							<p className="mt-6 text-lg leading-8 text-gray-400">
								Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
								fugiat veniam occaecat fugiat aliqua.
							</p>
							<div className="mt-10 flex items-center gap-x-6">
								<a
									href="#"
									className="rounded-md bg-brand-red px-3.5 py-1.5 text-base font-semibold leading-7
									text-white shadow-sm hover:
									focus-visible:outline-2 focus-visible:outline-offset-2
									focus-visible:outline-indigo-600"
								>
									Get started
								</a>
								<a href="#" className="text-base font-semibold leading-7 text-gray-300">
									Learn more <span aria-hidden="true">→</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="hidden lg:block bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
				<img
					className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
					src="/images/hero.png"
					alt=""
				/>
			</div>
		</div>
	)
}