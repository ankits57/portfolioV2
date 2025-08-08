'use client'

import Link from "next/link"
import {ArrowRight, Github, Instagram, Linkedin, Mail} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import {useRouter} from "next/navigation";

export default function Portfolio() {
  const router = useRouter();
  return (
      <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden pt-2">
        {/*<MouseFollower />*/}
        <ScrollProgress />
        <FloatingNav />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                  <span className="relative z-10">Software Engineer & Full Stack Developer</span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="block">Hi, I&apos;m</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">
                Ankit Saurabh
              </span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-[600px]">
                I craft exceptional digital experiences with code, creativity, and a passion for innovation.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button onClick={() => router.push('#projects')} className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-teal-500 border-0">
                <span className="relative z-10 flex items-center">
                  View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
                <Button onClick={() => router.push('#contact')}
                    variant="outline"
                    className="border-zinc-700 bg-gradient-to-r from-violet-500 to-blue-500 text-zinc-300 hover:text-black hover:border-zinc-500"
                >
                  Contact Me
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <Link href="https://github.com/ankits57" target="_blank" rel="noopener noreferrer">
                  <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/ankit57/" target="_blank" rel="noopener noreferrer">
                  <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://www.instagram.com/ankitish/" target="_blank" rel="noopener noreferrer">
                  <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </Link>
                <Link href="mailto:ankitsaurabh57@gmail.com">
                  <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <CreativeHero />
            </div>
          </div>

          {/*<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">*/}
          {/*  <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">*/}
          {/*    <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </section>

        {/* About Section */}
        <section id="about" className="py-32 relative md:ml-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          </div>

          <div className="container relative z-10">
            <SectionHeading title="About Me" subtitle="My background and journey" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
                <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                  <img
                      src="/IMG_0789.png?height=600&width=600"
                      alt="Ankit Saurabh"
                      className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-sm font-medium">Available for work</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <GlassmorphicCard>
                  <p className="text-lg text-zinc-300">
                    I&apos;m a software engineer with a strong foundation in computer science and a passion for building clean, high-performing systems. Whether it&apos;s designing scalable backend architectures or crafting intuitive user interfaces, I aim for elegant solutions that solve real problems. With experience in full-stack development and a focus on Java and Spring Boot, I’ve contributed to platforms that demand performance, security, and reliability.
                  </p>
                  <p className="text-lg text-zinc-300 mt-4">
                    My journey in tech started with a strong foundation in software development. I&apos;ve worked with various
                    companies to create intuitive, performant, and accessible digital experiences.
                  </p>
                  <p className="text-lg text-zinc-300 mt-4">
                    When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
                    and staying up-to-date with the latest industry trends.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="space-y-1">
                      <div className="text-sm text-zinc-500">Name</div>
                      <div className="font-medium">Ankit Saurabh</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-zinc-500">Email</div>
                      <div className="font-medium">ankitsaurabh57@gmail.com</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-zinc-500">Location</div>
                      <div className="font-medium">India</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-zinc-500">Availability</div>
                      <div className="font-medium text-green-500">Open to opportunities</div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">Download Resume</Button>
                  </div>
                </GlassmorphicCard>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 md:ml-20 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          </div>

          <div className="container relative z-10">
            <SectionHeading title="My Skills" subtitle="Technologies I work with" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
              <SkillBadge name="Java" level={85} />
              <SkillBadge name="SpringBoot" level={80} />
              <SkillBadge name="React" level={90} />
              <SkillBadge name="Next.js" level={90} />
              <SkillBadge name="PL/SQL" level={90} />
              <SkillBadge name="MySQL" level={85} />
              <SkillBadge name="Tailwind CSS" level={90} />
              <SkillBadge name="AWS" level={65} />
              <SkillBadge name="Git" level={85} />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 md:ml-20 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          </div>

          <div className="container relative z-10">
            <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <ProjectCard
                  title="Portfolio Website"
                  description="Portfolio Website built using Next.js and Tailwind CSS"
                  tags={["Next.js", "TypeScript", "Tailwind", "Vercel", "Framer Motion"]}
                  image="/Project1.png?height=400&width=600"
                  demoUrl="https://ankitsaurabh.vercel.app"
                  repoUrl="https://github.com/ankits57/portfolioV2"
              />
              <ProjectCard
                  title="Car Rental"
                  description="Car Rental Webiste built using MERN, hosted on Vercel."
                  tags={["React", "MongoDB","ImageKit", "Tailwind CSS", "Express", "Node.js"]}
                  image="/Project2.png?height=400&width=600"
                  demoUrl="https://car-rental-seven-coral.vercel.app"
                  repoUrl="https://github.com/ankits57/carRental"
              />
              <ProjectCard
                  title="Adding Project soon..."
                  description="Adding Description Soon..."
                  tags={["Next.js", "OpenAI API", "Node.js", "MongoDB"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="https://example.com"
                  repoUrl="https://github.com"
              />
              <ProjectCard
                  title="Adding Project soon..."
                  description="Adding Description Soon..."
                  tags={["React Native", "TypeScript", "D3.js", "Firebase"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="https://example.com"
                  repoUrl="https://github.com"
              />
              <ProjectCard
                  title="Adding Project soon..."
                  description="Adding Description Soon..."
                  tags={["React", "Weather API", "Chart.js", "Styled Components"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="https://example.com"
                  repoUrl="https://github.com"
              />
              <ProjectCard
                  title="Adding Project soon..."
                  description="Adding Description Soon..."
                  tags={["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]}
                  image="/placeholder.svg?height=400&width=600"
                  demoUrl="https://example.com"
                  repoUrl="https://github.com"
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 md:ml-20 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          </div>

          <div className="container relative z-10">
            <SectionHeading title="Work Experience" subtitle="My professional journey" />

            <div className="mt-16">
              <Timeline />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 md:ml-20 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          </div>

          <div className="container relative z-10">
            <SectionHeading title="Get In Touch" subtitle="Let's work together" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
              <GlassmorphicCard>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500">Email</div>
                      <div className="font-medium">ankitsaurabh57@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                      <Linkedin className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500">LinkedIn</div>
                      <div className="font-medium">https://www.linkedin.com/in/ankit57/</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                      <Github className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500">GitHub</div>
                      <div className="font-medium">https://github.com/ankits57</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-zinc-800">
                  <h4 className="text-lg font-medium mb-4">Current Status</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span>Available for freelance work and full-time opportunities</span>
                  </div>
                </div>
              </GlassmorphicCard>

              <ContactForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-800 py-12">
          <div className="container md:ml-20 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <Link href="/" className="font-bold text-xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">Ankit</span>
                <span className="text-white">&nbsp;Saurabh</span>
              </Link>
              <p className="text-sm text-zinc-500 mt-2">
                © {new Date().getFullYear()} Ankit Saurabh. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="https://github.com/ankits57" target="_blank" rel="noopener noreferrer">
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/ankit57/" target="_blank" rel="noopener noreferrer">
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://www.instagram.com/ankitish/" target="_blank" rel="noopener noreferrer">
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link href="mailto:ankitsaurabh57@gmail.com">
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </footer>
      </div>
  )
}
