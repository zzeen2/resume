'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

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
                  연구실의 실험을 넘어, 이제는 백엔드와 블록체인으로 아이디어를 실제 서비스로 증명합니다. 
                  풀스택 경험을 바탕으로, 지금은 백엔드와 블록체인 영역으로 커리어를 확장하고 있습니다.
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
                      <p className="text-fuchsia-400 font-semibold">your-email@example.com</p>
                    </div>
                    <div>
                      <p className="text-stone-500 text-sm mb-1">Phone</p>
                      <p className="text-fuchsia-400 font-semibold">010.0000.0000</p>
                    </div>
                    <div>
                      <p className="text-stone-500 text-sm mb-1">Address</p>
                      <p className="text-fuchsia-400 font-semibold">서울시</p>
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
              <h2 className="text-4xl font-bold mb-4">주요 프로젝트</h2>
              <p className="text-stone-400 text-lg">제가 작업한 대표적인 프로젝트들입니다</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-stone-800 rounded-lg overflow-hidden hover:bg-stone-700 transition-colors duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">{project.name}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.period}</p>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-stone-700 text-stone-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-stone-700 text-stone-300 text-xs rounded">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-white transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
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
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
            >
              모든 프로젝트 보기
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
            <h2 className="text-4xl font-bold mb-4">기술 스택</h2>
            <p className="text-stone-400 text-lg">현재 사용하고 있는 주요 기술들입니다</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Git'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-stone-700 transition-colors duration-300">
                  <span className="text-white font-bold text-sm">{skill}</span>
                </div>
                <p className="text-stone-400 text-sm">{skill}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="/about"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-200"
            >
              더 자세히 보기
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            찾아주셔서 감사합니다 😀
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-stone-400 mb-8"
          >
            새로운 도전과 성장의 기회를 찾고 있습니다.<br />
            함께 일할 수 있는 기회가 있다면 언제든 연락주세요!
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href="/contact"
            className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200 inline-block"
          >
            연락하기
          </motion.a>
        </div>
      </section>
    </div>
  );
}
