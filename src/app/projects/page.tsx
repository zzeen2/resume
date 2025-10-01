'use client';

import { motion } from 'framer-motion';
import { Calendar, Code } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  // 임시로 팀 프로젝트 3개, 개인 프로젝트 2개로 나눔
  const teamProjects = portfolioData.portfolioList.slice(0, 3);
  const personalProjects = portfolioData.portfolioList.slice(3, 5);

  return (
    <div className="min-h-screen bg-stone-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Projects</h1>
        </motion.div>

        {/* Team Projects */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8"
          >
            Team Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/projects/${index}`} className="group block">
                <div className="bg-stone-900 rounded-2xl overflow-hidden ring-1 ring-stone-800 hover:ring-fuchsia-500/50 transition-all duration-300">
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
                        <Code className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform duration-300 relative z-10" />
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
                    <div className="flex items-center text-stone-500 text-xs mb-3">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.period}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-stone-800 text-stone-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-stone-800 text-stone-400 text-xs rounded-full">
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
        </section>

        {/* Personal Projects */}
        <section>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-bold mb-8"
          >
            Personal Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personalProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                    <Link href={`/projects/${index + 3}`} className="group block">
                    <div className="bg-stone-900 rounded-2xl overflow-hidden ring-1 ring-stone-800 hover:ring-fuchsia-500/50 transition-all duration-300">
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
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600"></div>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300"></div>
                            <Code className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform duration-300 relative z-10" />
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
                    <div className="flex items-center text-stone-500 text-xs mb-3">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.period}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-stone-800 text-stone-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-stone-800 text-stone-400 text-xs rounded-full">
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
        </section>
      </div>
    </div>
  );
}
