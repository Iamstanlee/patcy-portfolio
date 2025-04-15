"use client"

import Image from "next/image"
import Link from "next/link"
import {Instagram, Linkedin, Twitter} from "lucide-react"
import {Button} from "@/components/ui/button"
import {useIsMobile} from "@/lib/utils";

export default function Portfolio() {
    const isMobile = useIsMobile();
    return (
        <div className="min-h-screen bg-black text-white p-6">
            <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
                {/* Left Sidebar */}
                <div className="space-y-8">
                    {/* Profile Header */}
                    <div className="flex items-center gap-4">
                        <Image src="/Avatar.jpg" alt="Profile" width={60} height={60} className="rounded-full"/>
                        <div>
                            <h1 className="text-2xl font-mono">PATIENCE UGBESHE</h1>
                            <p className="text-gray-400">SOCIAL MEDIA MANAGER / GRAPHIC DESIGNER / COPYWRITER</p>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="space-y-6">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I specialize in creating engaging social media content, managing brand presence, and
                            crafting compelling
                            copy. With expertise in graphic design and content creation, I help businesses increase
                            their online
                            visibility and engagement across multiple platforms.
                        </p>
                        <div className="space-y-2">
                            <p className="text-gray-400">
                                <span className="text-white">Phone:</span> <Link href='tel:+2347031791421'>(+234)
                                7031791421</Link>
                            </p>
                            <p className="text-gray-400">
                                <span className="text-white">Email:</span> <Link
                                href='mailto:patiencewilfred595@gmail.com'>
                                patiencewilfred595@gmail.com
                            </Link>
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <Button variant="ghost" size="icon" asChild
                                        className="text-white hover:text-blue-400 hover:bg-gray-900">
                                    <Link href="https://x.com/patcy_wilfred">
                                        <Twitter className="w-5 h-5"/>
                                    </Link>
                                </Button>
                                <Button variant="ghost" size="icon" asChild
                                        className="text-white hover:text-blue-400 hover:bg-gray-900">
                                    <Link href="https://www.linkedin.com/in/patience-ugbeshe-198735335">
                                        <Linkedin className="w-5 h-5"/>
                                    </Link>
                                </Button>
                                <Button variant="ghost" size="icon" asChild
                                        className="text-white hover:text-blue-400 hover:bg-gray-900">
                                    <Link href="https://www.instagram.com/patcy_ibong_wilfred">
                                        <Instagram className="w-5 h-5"/>
                                    </Link>
                                </Button>
                            </div>
                            <Button className="rounded-full border-white hover:bg-white hover:text-black">
                                <Link href='https://wa.me/2347031791421' target="_blank">
                                    Contact Me
                                </Link>
                            </Button>

                        </div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-mono">SKILLS</h2>
                        <div className="grid grid-cols-2 gap-2">
                            {[
                                "Social Media Strategy",
                                "Content Creation & Curation",
                                "Analytics & Reporting",
                                "Community Engagement",
                                "Influencer Partnerships",
                                "Campaign Management",
                                "Brand Development",
                                "Paid Advertising",
                                "SEO & SEM",
                                "Graphic Design",
                                "Copy Writing",
                                "Voiceover",
                            ].map((skill, index) => (
                                <div key={index} className="bg-gray-900 px-3 py-2 rounded-md text-sm">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-mono">LANGUAGES</h2>
                        <div className="flex gap-2">
                            <div className="bg-gray-900 px-3 py-2 rounded-md text-sm">English</div>
                            <div className="bg-gray-900 px-3 py-2 rounded-md text-sm">Yoruba</div>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="space-y-8">
                    {/* Work Experience Section */}
                    <section>
                        <div className="mb-6">
                            <h2 className="text-2xl font-mono">Work Experience</h2>
                        </div>
                        <div className="space-y-6">
                            {[
                                {
                                    company: "LandnKitchen",
                                    role: "Social Media Manager",
                                    period: "February 2025 - Present",
                                    handle: "https://www.instagram.com/landnkitchen",
                                    description:
                                        "Developed creative social media strategies that increased followers by 45% in less than a month. Created engaging video content, voiceovers, and graphic designs.",
                                },
                                {
                                    company: "Fidelam Homes",
                                    role: "Social Media & Digital Marketing Manager",
                                    period: "January 2025 - Present",
                                    handle: "https://www.instagram.com/fidelamhomesltd",
                                    description:
                                        "Managed paid advertising campaigns to drive leads, increase sales by 25%, and boost brand visibility. Created high-quality content including graphics, videos, and engaging copywriting.",
                                },
                                {
                                    company: "Nizamiye Hospital & Nizamiye Beauty",
                                    role: "Content & Social Media Manager",
                                    period: "January 2024 - October 2024",
                                    handle: "https://www.instagram.com/nizamiye_hospital",
                                    description:
                                        "Enhanced online visibility, increased followers by 30%. Created engaging and educative video and graphic content.",
                                },
                                {
                                    company: "L AND N Interiors",
                                    role: "Content & Social Media Manager",
                                    period: "April 2024 - March 2025",
                                    handle: "https://www.instagram.com/landninteriordesignschool",
                                    description:
                                        "Increased followers by 45% and engagement by 50%. Implemented social media advertising campaigns.",
                                },
                                {
                                    company: "Chayim Diagnostics",
                                    role: "Social Media Manager/Copywriter",
                                    period: "January 2024 - September 2024",
                                    handle: "https://www.instagram.com/chayim_diagnostic",
                                    description:
                                        "Boosted patient engagement, increased Facebook and Instagram followers by 40%, and incorporated educational content created with healthcare professionals.",
                                },
                            ].map((job, index) => (
                                <div key={index} className="bg-gray-900 rounded-lg p-5 space-y-3">
                                    <div className="flex flex-col md:flex-row justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-semibold">{job.company}</h3>
                                            <Link href={job.handle}
                                                  className="text-sm text-gray-300">
                                                <p>{job.handle}</p>
                                            </Link>
                                            <p className="text-blue-400 pt-3">{job.role}</p>
                                        </div>
                                        <div className="text-gray-400 text-sm">{job.period}</div>
                                    </div>
                                    <p className="text-gray-300">{job.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Projects Section - Social Media Content */}
                    <section>
                        <div className="mb-4">
                            <h2 className="text-2xl font-mono">Social Media Content</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                {
                                    platform: "Instagram",
                                    client: "Fidelam Homes",
                                    thumbnail: "https://www.instagram.com/reel/DF5Ezn5TPSV/?igsh=Y2cyYnZoNHhjejZ3",
                                },
                                {
                                    platform: "Instagram",
                                    client: "Chayim Diagnostics",
                                    thumbnail: "https://www.instagram.com/reel/C7USFzUM83x/?igsh=MXRhbjA4eGJldnoyOA==",
                                },
                                {
                                    platform: "Instagram",
                                    client: "Nizamiye Hospital",
                                    thumbnail: "https://www.instagram.com/reel/DA2_MTJIRHU/?igsh=MW8ybGY3YzAwOHNjNA==",
                                },
                                {
                                    platform: "Instagram",
                                    client: "Nizamiye Hospital",
                                    thumbnail: "https://www.instagram.com/reel/DAYLKoGIK8s/?igsh=MXR6NHBiODF2bWxzaw==",
                                },
                                {
                                    platform: "Instagram",
                                    client: "L&N KITCHEN",
                                    thumbnail: "https://www.instagram.com/reel/DHDdtPNAFDk/?igsh=NjR4bjNnMHBrcHZ0",
                                },
                            ].map((project, i) => (
                                <Link href={project.thumbnail} key={i} target='_blank'
                                      className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden group">
                                    <Image src="/Video-Placeholder.png" alt={project.client} width={100} height={100}
                                           className="w-auto aspect-video"/>
                                    <div
                                        className={`absolute inset-0 bg-black bg-opacity-60 ${!isMobile && 'opacity-0'} group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center`}>
                                        <p className="text-lg font-semibold">{project.client}</p>
                                        <p className="text-blue-400">{project.platform}</p>
                                        <Button
                                            size="sm"
                                            className="mt-2 text-white border-white hover:bg-white hover:text-black"
                                        >
                                            View
                                        </Button>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Stack Section - Tools */}
                    <section className="bg-blue-600 rounded-xl p-6">
                        <div className="mb-4">
                            <h2 className="text-2xl font-mono">My Tools</h2>
                        </div>
                        <div className="grid grid-cols-4 md:grid-cols-10 gap-4">
                            {[
                                {name: "Canva", icon: "📱"},
                                {name: "Instagram", icon: "📷"},
                                {name: "TikTok", icon: "🎵"},
                                {name: "Figma", icon: "🎨"},
                                {name: "Facebook", icon: "👥"},
                            ].map((tool, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div
                                        className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl">
                                        {tool.icon}
                                    </div>
                                    <p className="text-xs mt-1 text-center">{tool.name}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Education and Achievements */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Education Section */}
                        <section
                            className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6">
                            <h2 className="text-2xl font-mono mb-4">Education</h2>
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">Federal University Lafia, Nassarawa State</h3>
                                <p className="text-gray-300">BSC Zoology</p>
                                <p className="text-gray-400">November 2018 - November 2023</p>
                            </div>
                        </section>

                        {/* Achievements Section */}
                        <section className="bg-gray-900 rounded-xl p-6">
                            <h2 className="text-2xl font-mono mb-4">Achievements</h2>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current"
                                             viewBox="0 0 20 20">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    ))}
                                </div>
                                <h3 className="text-4xl font-bold mb-2">75%</h3>
                                <p className="text-gray-400">Average Engagement Rate</p>
                                <p className="text-sm text-gray-300 mt-2">Across multiple social media accounts for
                                    various clients</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className="text-gray-400 text-sm pt-4">
                <p>© 2025 Patience Ugbeshe</p>
            </div>
        </div>
    )
}
