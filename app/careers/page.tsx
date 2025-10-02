"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Clock, DollarSign, Users, Zap, Heart, Trophy, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const openPositions = [
	{
		id: 1,
		title: "Senior AI Engineer",
		department: "Engineering",
		location: "Remote",
		type: "Full-time",
		salary: "$120k - $180k",
		description:
			"Lead the development of cutting-edge AI solutions for business automation. Work with machine learning, natural language processing, and computer vision technologies.",
		requirements: [
			"5+ years of experience in AI/ML development",
			"Strong proficiency in Python, TensorFlow, PyTorch",
			"Experience with cloud platforms (AWS, GCP, Azure)",
			"Knowledge of MLOps and model deployment",
			"Strong problem-solving and communication skills",
		],
		benefits: [
			"Competitive salary and equity",
			"Health, dental, and vision insurance",
			"Flexible work arrangements",
			"Professional development budget",
			"Latest tech equipment",
		],
	},
	{
		id: 2,
		title: "Automation Specialist",
		department: "Operations",
		location: "Remote",
		type: "Full-time",
		salary: "$80k - $120k",
		description:
			"Design and implement business process automation solutions for our clients. Work closely with clients to understand their needs and deliver efficient automation workflows.",
		requirements: [
			"3+ years of experience in process automation",
			"Knowledge of automation tools (Zapier, Power Automate, etc.)",
			"Strong analytical and problem-solving skills",
			"Experience with API integrations",
			"Excellent client communication skills",
		],
		benefits: [
			"Competitive salary and bonuses",
			"Health and wellness benefits",
			"Remote work flexibility",
			"Career growth opportunities",
			"Team building events",
		],
	},
	{
		id: 3,
		title: "Product Manager",
		department: "Product",
		location: "Remote",
		type: "Full-time",
		salary: "$100k - $150k",
		description:
			"Drive product strategy and roadmap for our automation platform. Work with engineering, design, and business teams to deliver exceptional products.",
		requirements: [
			"4+ years of product management experience",
			"Experience with B2B SaaS products",
			"Strong analytical and strategic thinking",
			"Knowledge of automation and AI technologies",
			"Excellent leadership and communication skills",
		],
		benefits: [
			"Competitive compensation package",
			"Stock options",
			"Comprehensive health benefits",
			"Flexible PTO policy",
			"Professional development opportunities",
		],
	},
	{
		id: 4,
		title: "UX/UI Designer",
		department: "Design",
		location: "Remote",
		type: "Full-time",
		salary: "$70k - $110k",
		description:
			"Create intuitive and beautiful user experiences for our automation platform. Work on complex workflows and make them simple and accessible.",
		requirements: [
			"3+ years of UX/UI design experience",
			"Proficiency in Figma, Sketch, or similar tools",
			"Experience with design systems",
			"Understanding of user research methods",
			"Portfolio demonstrating strong design skills",
		],
		benefits: [
			"Competitive salary",
			"Health and dental insurance",
			"Remote work setup allowance",
			"Design conference attendance",
			"Creative freedom and autonomy",
		],
	},
]

const benefits = [
	{
		icon: <DollarSign className="w-8 h-8" />,
		title: "Competitive Compensation",
		description: "Market-leading salaries, equity packages, and performance bonuses",
	},
	{
		icon: <Heart className="w-8 h-8" />,
		title: "Health & Wellness",
		description: "Comprehensive health, dental, vision insurance and wellness programs",
	},
	{
		icon: <Users className="w-8 h-8" />,
		title: "Remote-First Culture",
		description: "Work from anywhere with flexible hours and collaborative tools",
	},
	{
		icon: <Zap className="w-8 h-8" />,
		title: "Growth Opportunities",
		description: "Professional development budget, mentorship, and career advancement",
	},
	{
		icon: <Trophy className="w-8 h-8" />,
		title: "Cutting-Edge Tech",
		description: "Work with the latest AI and automation technologies",
	},
	{
		icon: <Clock className="w-8 h-8" />,
		title: "Work-Life Balance",
		description: "Flexible PTO, sabbatical options, and family-friendly policies",
	},
]

export default function CareersPage() {
	const [expandedJob, setExpandedJob] = useState<number | null>(null)

	const toggleJobExpansion = (jobId: number) => {
		setExpandedJob(expandedJob === jobId ? null : jobId)
	}

	return (
		<div className="min-h-screen bg-white pt-16">
			{/* Header */}
			<section className="py-20 bg-gradient-to-r from-black to-gray-900">
				<div className="container mx-auto px-6 text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
							Join <span className="text-[#ff8e00]">dondev</span>
						</h1>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto">
							Be part of the team that's revolutionizing business automation. Build
							the future with us.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Culture Section */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
							Why Work at <span className="text-[#ff8e00]">dondev ?</span>
						</h2>
						<p className="text-xl text-gray-600 max-w-4xl mx-auto">
							We're building the future of business automation, and we want you to be
							part of it. Join a team of passionate innovators who are making a real
							impact on businesses worldwide.
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{benefits.map((benefit, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
							>
								<Card className="text-center p-8 h-full transition-all duration-300 hover:shadow-[0_5px_20px_rgba(255,142,0,0.6)] ">
									<CardContent className="p-0">
										<div className="text-gray-900 mb-4 flex justify-center">
											{benefit.icon}
										</div>
										<h3 className="text-xl font-bold text-[#ff8e00] mb-4">
											{benefit.title}
										</h3>
										<p className="text-gray-600">{benefit.description}</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Open Positions */}
			<section className="py-20">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
							Current <span className="text-[#ff8e00]">Openings</span>
						</h2>
						<div className="bg-gray-50 border-l-4 border-[#ff8e00] p-6 rounded-lg max-w-4xl mx-auto">
							<h3 className="text-2xl font-bold text-black mb-4">
								No Open Positions at the Moment
							</h3>
							<p className="text-lg text-gray-600 mb-4">
								We're currently not hiring, but we're always growing! We'd love to keep you in our talent network for future opportunities.
							</p>
							<p className="text-md text-gray-600">
								<strong>Stay Connected:</strong> Follow us on social media or send us your resume to be the first to know about new openings that match your skills and interests.
							</p>
						</div>
					</motion.div>

					{/* Future Job Templates - Hidden but preserved */}
					<div className="hidden max-w-4xl mx-auto space-y-6">
						{openPositions.map((job, index) => (
							<motion.div
								key={job.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
							>
								<Card className="hover:shadow-lg transition-shadow">
									<CardContent className="p-6">
										<div className="flex justify-between items-start mb-4">
											<div>
												<h3 className="text-2xl font-bold text-black mb-2">
													{job.title}
												</h3>
												<div className="flex flex-wrap gap-4 text-sm text-gray-600">
													<div className="flex items-center">
														<Users className="w-4 h-4 mr-1" />
														{job.department}
													</div>
													<div className="flex items-center">
														<MapPin className="w-4 h-4 mr-1" />
														{job.location}
													</div>
													<div className="flex items-center">
														<Clock className="w-4 h-4 mr-1" />
														{job.type}
													</div>
													<div className="flex items-center">
														<DollarSign className="w-4 h-4 mr-1" />
														{job.salary}
													</div>
												</div>
											</div>
											<Button
												variant="ghost"
												onClick={() => toggleJobExpansion(job.id)}
												className="text-ff8e00 hover:text-orange-600"
											>
												{expandedJob === job.id ? <ChevronUp /> : <ChevronDown />}
											</Button>
										</div>

										<p className="text-gray-600 mb-4">{job.description}</p>

										{expandedJob === job.id && (
											<motion.div
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: "auto" }}
												exit={{ opacity: 0, height: 0 }}
												className="border-t pt-6 mt-6"
											>
												<div className="grid md:grid-cols-2 gap-8">
													<div>
														<h4 className="text-lg font-bold text-black mb-3">
															Requirements
														</h4>
														<ul className="space-y-2">
															{job.requirements.map((req, idx) => (
																<li
																	key={idx}
																	className="text-gray-600 text-sm flex items-start"
																>
																	<span className="text-ff8e00 mr-2">•</span>
																	{req}
																</li>
															))}
														</ul>
													</div>
													<div>
														<h4 className="text-lg font-bold text-black mb-3">
															Benefits
														</h4>
														<ul className="space-y-2">
															{job.benefits.map((benefit, idx) => (
																<li
																	key={idx}
																	className="text-gray-600 text-sm flex items-start"
																>
																	<span className="text-ff8e00 mr-2">•</span>
																	{benefit}
																</li>
															))}
														</ul>
													</div>
												</div>
												<div className="mt-6 pt-6 border-t">
													<Button className="bg-ff8e00 hover:bg-orange-600 text-white">
														Apply Now
													</Button>
												</div>
											</motion.div>
										)}

										{expandedJob !== job.id && (
											<div className="flex justify-between items-center">
												<div className="flex gap-2">
													<Badge variant="outline">{job.department}</Badge>
													<Badge variant="outline">{job.type}</Badge>
												</div>
												<Button className="bg-ff8e00 hover:bg-orange-600 text-white">
													Apply Now
												</Button>
											</div>
										)}
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Application Process */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
							Application <span className="text-[#ff8e00]">Process</span>
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Our hiring process is structured to give every candidate a fair and clear experience. From the moment you apply, we keep you informed at each stage with timely updates. The process is designed to respect your time, provide clarity on expectations, and create a smooth journey from application to onboarding.
						</p>
					</motion.div>

					<div className="grid md:grid-cols-4 gap-8">
						{[
							{
								step: "1",
								title: "Apply",
								description:
									"Submit your application and resume through our portal",
							},
							{
								step: "2",
								title: "Screen",
								description:
									"Initial phone/video screening with our HR team",
							},
							{
								step: "3",
								title: "Interview",
								description:
									"Technical and cultural fit interviews with the team",
							},
							{
								step: "4",
								title: "Offer",
								description:
									"Reference checks and job offer for successful candidates",
							},
						].map((process, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								className="text-center"
							>
								<div className="w-16 h-16 bg-white text-[#ff8e00] border-2 border-[#ff8e00] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
									{process.step}
								</div>
								<h3 className="text-xl font-bold text-black mb-3">
									{process.title}
								</h3>
								<p className="text-gray-600">{process.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-black to-gray-900">
				<div className="container mx-auto px-6 text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
							Stay <span className="text-ff8e00">Connected</span>
						</h2>
						<p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
							While we don't have any open positions right now, we're always interested in hearing from 
							talented individuals who share our passion for automation and innovation. Send us your resume 
							and we'll reach out when the right opportunity becomes available.
						</p>
						<a
							href="mailto:dondevofficial@gmail.com?subject=Join Talent Network - [Your Name]&body=Hi dondev team,%0D%0A%0D%0AI'm interested in joining your talent network and would like to be considered for future opportunities.%0D%0A%0D%0AHere's a brief overview about me:%0D%0A%0D%0AName: [Your Full Name]%0D%0APosition of Interest: [e.g., AI Engineer, Automation Specialist, etc.]%0D%0AExperience: [Brief summary of your experience]%0D%0ASkills: [Key skills relevant to automation/AI]%0D%0A%0D%0AI have attached my resume for your review. Please let me know if you need any additional information.%0D%0A%0D%0AThank you for your time and consideration.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block"
						>
							<Button
								size="lg"
								className="bg-ff8e00 hover:bg-orange-600 text-white px-8 py-4 text-lg"
							>
								Join Our Talent Network
							</Button>
						</a>
					</motion.div>
				</div>
			</section>
		</div>
	)
}
