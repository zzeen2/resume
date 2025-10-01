'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

export default function Home() {
  const featuredProjects = portfolioData.portfolioList.slice(0, 3);
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ['Backend Developer', 'Blockchain\u00A0Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className="min-h-screen bg-stone-950 text-white overflow-hidden">
      {/* Hero Section - full height split layout */}
      <section className="relative min-h-screen flex items-stretch overflow-hidden">
        <div className="w-full h-screen flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left: Large Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-[45%] h-screen bg-stone-950 flex items-center justify-center lg:justify-end p-8 lg:pr-6"
          >
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full p-2 bg-gradient-to-br from-fuchsia-600 to-pink-700 shadow-2xl shadow-fuchsia-900/30">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 bg-stone-900">
                  <Image
                    src="/images/profile.jpg"
                    alt="김지은 프로필 사진"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              {/* subtle glow */}
              <div className="pointer-events-none absolute inset-0 rounded-full ring-8 ring-fuchsia-500/10 blur-2xl" />
            </div>
          </motion.div>

          {/* Right: Info */}
          <div className="lg:w-[55%] h-screen bg-stone-950 flex items-center justify-start p-8 lg:pl-6">
            <div className="max-w-xl w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <p className="text-sm text-stone-400 mb-2 tracking-wide">HI! HOW ARE YOU?</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8">
                  I&apos;M{' '}
                  <motion.span
                    key={titleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent"
                  >
                    {titles[titleIndex]}
                  </motion.span>
                </h1>
                
                <p className="text-base md:text-lg text-stone-300 mb-12 leading-relaxed">
                  AI 연구실에서 시작해 풀스택 개발까지 다양한 경험을 쌓아왔습니다. 기술이 실제 문제를 해결할 때 의미가 있다고 믿으며, 지금은 백엔드와 블록체인 영역으로 커리어를 확장하고 있습니다.
                </p>

                    <div className="mb-12">
                      <h2 className="text-xl font-bold mb-6">PERSONAL INFOS</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-stone-500 text-sm mb-1">Name</p>
                          <p className="text-fuchsia-400 font-semibold">김지은</p>
                        </div>
                        <div>
                          <p className="text-stone-500 text-sm mb-1">Email</p>
                          <p className="text-fuchsia-400 font-semibold">jking120393@gmail.com</p>
                        </div>
                        <div>
                          <p className="text-stone-500 text-sm mb-1">Phone</p>
                          <p className="text-fuchsia-400 font-semibold">010-7660-8020</p>
                        </div>
                        <div>
                          <p className="text-stone-500 text-sm mb-1">Address</p>
                          <p className="text-fuchsia-400 font-semibold">서울시 송파구</p>
                        </div>
                        <div>
                          <p className="text-stone-500 text-sm mb-1">Birth</p>
                          <p className="text-fuchsia-400 font-semibold">2001.12.03</p>
                        </div>
                        <div>
                          <p className="text-stone-500 text-sm mb-1">Links</p>
                          <div className="flex gap-3">
                            <a
                              href="https://github.com/zzeen2"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-9 h-9 rounded-full bg-fuchsia-500/20 hover:bg-stone-800 flex items-center justify-center transition-all duration-200 group ring-1 ring-fuchsia-500/40 hover:ring-stone-700"
                              aria-label="GitHub"
                            >
                              <Github className="w-5 h-5 text-fuchsia-400 group-hover:text-white transition-colors" />
                            </a>
                            <a
                              href="https://velog.io/@zzeen2/posts"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-9 h-9 rounded-full bg-fuchsia-500/20 hover:bg-[#20C997] flex items-center justify-center transition-all duration-200 group ring-1 ring-fuchsia-500/40 hover:ring-[#20C997]"
                              aria-label="Velog"
                            >
                              <Icon icon="simple-icons:velog" className="w-5 h-5 text-fuchsia-400 group-hover:text-white transition-colors" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/about"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-fuchsia-400 hover:to-pink-400 transition-all duration-200 shadow-lg shadow-fuchsia-600/20"
                  >
                    MORE ABOUT ME
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 border-2 border-fuchsia-500 text-fuchsia-400 px-8 py-3 rounded-full font-semibold hover:bg-fuchsia-500 hover:text-white transition-all duration-200"
                  >
                    이력서 다운로드
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
              <h2 className="text-4xl font-bold mb-4">Project Preview</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Link href={`/projects/${index}`} className="group block">
                  <div className="bg-stone-800 rounded-2xl overflow-hidden ring-1 ring-stone-700 hover:ring-fuchsia-500/50 transition-all duration-300">
                    {/* Thumbnail */}
                    <div className="h-48 bg-stone-950 flex items-center justify-center relative overflow-hidden">
                      {project.image && project.image.length > 0 ? (
                        <Image
                          src={`/images/projects/${project.image[0].name}`}
                          alt={project.name}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 to-pink-600"></div>
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300"></div>
                        </>
                      )}
                    </div>
                    
                    {/* Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-fuchsia-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-stone-400 text-sm mb-3 line-clamp-2">
                        {project.description.split('\n')[0]}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-stone-900 text-stone-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 bg-stone-900 text-stone-400 text-xs rounded-full">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 px-8 py-3 rounded-full font-semibold hover:bg-stone-200 transition-all duration-200"
            >
              View More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Tech Stack</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {[
              { name: 'TypeScript', icon: 'simple-icons:typescript', color: '#3178C6' },
              { name: 'Node.js', icon: 'simple-icons:nodedotjs', color: '#339933' },
              { name: 'NestJS', icon: 'simple-icons:nestjs', color: '#E0234E' },
              { name: 'PostgreSQL', icon: 'simple-icons:postgresql', color: '#4169E1' },
              { name: 'MySQL', icon: 'simple-icons:mysql', color: '#4479A1' },
              { name: 'Solidity', icon: 'simple-icons:solidity', color: '#363636' },
              { name: 'Next.js', icon: 'simple-icons:nextdotjs', color: '#000000' },
              { name: 'React', icon: 'simple-icons:react', color: '#61DAFB' },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group"
              >
                <div className="w-20 h-20 rounded-full ring-1 ring-stone-700/60 bg-stone-800/60 flex items-center justify-center transition-all hover:ring-fuchsia-500/40 hover:bg-stone-700/70 cursor-pointer">
                  <Icon icon={skill.icon} className="w-10 h-10" style={{ color: skill.color }} />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/about"
              className="border-2 border-fuchsia-500 text-fuchsia-400 px-8 py-3 rounded-full font-semibold hover:bg-fuchsia-500 hover:text-white transition-all duration-200"
            >
              View More
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
