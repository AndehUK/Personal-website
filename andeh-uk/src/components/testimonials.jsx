import YungPFP from "../resources/testimonials/yungnickyoung.jpg"
import PerzPFP from "../resources/testimonials/perz.png"

const testimonials = [
	{
		body: 'As a project manager and senior developer who\'s worked with many developers over the years, I can ' +
			'confidently say Andy is one of the most competent developers I\'ve had the pleasure of working with. ' +
			'His excellent communication and ability to learn new skills & technology on the fly makes him an ' +
			'invaluable member of any team. I can always rely on him to create a beautiful product. It\'s been a ' +
			'real pleasure working with him.',
		author: {
			name: 'YUNGNICKYOUNG',
			handle: 'yungnickyoung',
			imageUrl: YungPFP,
			role: 'Owner of Refresh Studios',
		},
	},
	{
		body: 'Working with Andy has been an amazing experience. His proficiency in various programming languages ' +
			'and ability to solve complex problems is truly impressive. Andy\'s key strength would be his ability ' +
			'to learn and adapt his skill-set for the project and going the extra mile to overcome hurdles. His ' +
			'attention to detail and commitment to delivering quality work is exemplary. I have no doubt he ' +
			'would be an invaluable asset to any team.',
		author: {
			name: 'Perz',
			handle: 'PerzTV',
			imageUrl: PerzPFP,
			role: 'Owner of Kerberus',
		},
	},
]

export default function Testimonials() {
	return (
		<div className="bg-bg" id="testimonials">
			<div className="bg-gradient-to-b from-brand-red/70 to-bg text-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 opacity-100 lg:px-8">
					<div className="mx-auto max-w-xl text-center">
						<div className="text-4xl font-semibold text-white">Testimonials</div>
					</div>
					<div className="mx-auto mt-16 flex flex-row max-w-2xl opacity-100 sm:mt-20 lg:mx-0 lg:max-w-none">
						<div className="-mt-8 sm:-mx-4 sm:columns-1 sm:text-[0] lg:columns-1">
							{testimonials.map((testimonial) => (
								<div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
									<figure className="rounded-2xl bg-[#202731] text-opacity-90 ring-1 ring-inset ring-white/50 p-8 text-sm leading-6">
										<blockquote className="text-gray-200">
											<p>{`“${testimonial.body}”`}</p>
										</blockquote>
										<figcaption className="mt-6 flex items-center gap-x-4">
											<img className="h-10 w-10 rounded-full bg-white" src={testimonial.author.imageUrl} alt="" />
											<div>
												<div className="font-semibold text-gray-100">{testimonial.author.name}</div>
												<div className="text-gray-400">
													<a href={`https://twitter.com/${testimonial.author.handle}`}>
														{`@${testimonial.author.handle}`}
													</a>
													<span> ~ {testimonial.author.role}</span>
												</div>
											</div>
										</figcaption>
									</figure>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}