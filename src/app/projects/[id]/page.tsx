'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, User, ArrowLeft, X, Smartphone } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { useState } from 'react';

// 기술 스택별 아이콘 매핑
const techIcons: { [key: string]: { icon: string; color: string } } = {
  JavaScript: { icon: 'simple-icons:javascript', color: '#F7DF1E' },
  TypeScript: { icon: 'simple-icons:typescript', color: '#3178C6' },
  'Node.js': { icon: 'simple-icons:nodedotjs', color: '#339933' },
  'Express.js': { icon: 'simple-icons:express', color: '#000000' },
  'NestJS': { icon: 'simple-icons:nestjs', color: '#E0234E' },
  React: { icon: 'simple-icons:react', color: '#61DAFB' },
  'Next.js': { icon: 'simple-icons:nextdotjs', color: '#000000' },
  MySQL: { icon: 'simple-icons:mysql', color: '#4479A1' },
  PostgreSQL: { icon: 'simple-icons:postgresql', color: '#4169E1' },
  Sequelize: { icon: 'simple-icons:sequelize', color: '#52B0E7' },
  'Drizzle ORM': { icon: 'simple-icons:drizzle', color: '#C5F74F' },
  EJS: { icon: 'mdi:language-html5', color: '#A91E50' },
  'HTML/CSS': { icon: 'simple-icons:html5', color: '#E34F26' },
  'Tailwind CSS': { icon: 'simple-icons:tailwindcss', color: '#06B6D4' },
  Solidity: { icon: 'simple-icons:solidity', color: '#363636' },
  Hardhat: { icon: 'simple-icons:ethereum', color: '#F0CDC2' },
  'ethers.js': { icon: 'simple-icons:ethereum', color: '#627EEA' },
  'Web3.js': { icon: 'simple-icons:web3dotjs', color: '#F16822' },
  OpenZeppelin: { icon: 'simple-icons:openzeppelin', color: '#4E5EE4' },
  'Kakao Map API': { icon: 'simple-icons:kakao', color: '#FFCD00' },
  'Kakao OAuth': { icon: 'simple-icons:kakao', color: '#FFCD00' },
  FullCalendar: { icon: 'mdi:calendar', color: '#4CAF50' },
  Redux: { icon: 'simple-icons:redux', color: '#764ABC' },
  'TanStack Query': { icon: 'simple-icons:reactquery', color: '#FF4154' },
  Expo: { icon: 'simple-icons:expo', color: '#000020' },
  'styled-components': { icon: 'simple-icons:styledcomponents', color: '#DB7093' },
  Vercel: { icon: 'simple-icons:vercel', color: '#000000' },
  AWS: { icon: 'simple-icons:amazonaws', color: '#FF9900' },
  Git: { icon: 'simple-icons:git', color: '#F05032' },
  GitHub: { icon: 'simple-icons:github', color: '#181717' },
  Notion: { icon: 'simple-icons:notion', color: '#000000' },
  Postman: { icon: 'simple-icons:postman', color: '#FF6C37' },
};

export default function ProjectDetail() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const project = portfolioData.portfolioList[id];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen bg-stone-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">프로젝트를 찾을 수 없습니다</h1>
          <Link href="/projects" className="text-fuchsia-400 hover:underline">
          List
          </Link>
        </div>
      </div>
    );
  }

  // description을 섹션별로 파싱
  const parseDescription = (desc: string) => {
    const sections: { [key: string]: string[] } = {
      intro: [],
      features: [],
      role: [],
      roleBackend: [],
      roleFrontend: [],
      roleEtc: [],
    };

    const lines = desc.split('\n');
    let currentSection = 'intro';

    lines.forEach((line) => {
      if (line.includes('🎯 **핵심 기능**') || line.includes('🎯 **구현 기능**')) {
        currentSection = 'features';
      } else if (line.includes('👨‍💻 **담당 역할')) {
        currentSection = 'role';
      } else if (line.includes('**Backend**') || line.includes('**스마트 컨트랙트')) {
        currentSection = 'roleBackend';
      } else if (line.includes('**Frontend**')) {
        currentSection = 'roleFrontend';
      } else if (line.includes('**Other**') || line.includes('**기타**') || line.includes('**문제 해결 및 최적화**') || line.includes('**Etc**')) {
        currentSection = 'roleEtc';
      } else if (line.trim() && !line.includes('🎯') && !line.includes('👨‍💻') && !line.includes('**Backend**') && !line.includes('**Frontend**') && !line.includes('**Other**') && !line.includes('**기타**') && !line.includes('**문제 해결 및 최적화**') && !line.includes('**Etc**') && !line.includes('**스마트 컨트랙트')) {
        sections[currentSection].push(line);
      }
    });

    return sections;
  };

  const sections = parseDescription(project.description);

  return (
    <div className="min-h-screen bg-stone-950 text-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center text-stone-400 hover:text-fuchsia-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            List
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">{project.name}</h1>
          <p className="text-2xl text-fuchsia-400 mb-6">{project.project}</p>

          <div className="flex items-center space-x-6 mb-8 text-stone-400 text-sm">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {project.period}
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {project.percent}
            </div>
          </div>

          {/* Links - 상단으로 이동 */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-stone-300 hover:text-fuchsia-400 transition-colors"
            >
              <Github className="w-4 h-4 mr-2" />
              <span className="font-mono">{project.github}</span>
            </a>
            <span className="text-stone-700">|</span>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-stone-300 hover:text-fuchsia-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              <span className="font-mono">{project.link}</span>
            </a>
                {(project as { appLink?: string }).appLink && (
              <>
                <span className="text-stone-700">|</span>
                <a
                  href={(project as { appLink?: string }).appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-stone-300 hover:text-fuchsia-400 transition-colors"
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  <span className="font-mono">Expo App (iOS/Android)</span>
                </a>
              </>
            )}
          </div>
        </motion.div>

        {/* Project Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-16"
        >
          {/* Project Overview */}
          <div className="pb-12 border-b border-stone-800">
            <h2 className="text-2xl font-bold mb-6">프로젝트 소개</h2>
            <div className="text-stone-300 leading-relaxed space-y-2">
              {sections.intro.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>

          {/* My Role / Implementation Features */}
          <div className="pb-12 border-b border-stone-800">
            <h2 className="text-2xl font-bold mb-6">
              {sections.roleBackend.length > 0 ? '구현 기능' : '담당 역할'} {sections.roleBackend.length > 0 && sections.roleFrontend.length > 0 && '(풀스택)'}
            </h2>
            
            {sections.roleBackend.length > 0 ? (
              <div className="space-y-8">
                {/* Backend / Smart Contract */}
                {sections.roleBackend.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-fuchsia-400 mb-3">
                      {project.description.includes('스마트 컨트랙트') ? '스마트 컨트랙트 (Blockchain)' : 'Backend'}
                    </h3>
                    <ul className="space-y-3 text-stone-300">
                      {sections.roleBackend.map((role, idx) => {
                        const cleanRole = role.replace(/^•\s*/, '');
                        return (
                          <li key={idx} className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-fuchsia-500 mt-2 mr-3 flex-shrink-0"></span>
                            <span className="leading-relaxed">{cleanRole}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                
                {/* Frontend */}
                {sections.roleFrontend.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-fuchsia-400 mb-3">Frontend</h3>
                    <ul className="space-y-3 text-stone-300">
                      {sections.roleFrontend.map((role, idx) => {
                        const cleanRole = role.replace(/^•\s*/, '');
                        return (
                          <li key={idx} className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-fuchsia-500 mt-2 mr-3 flex-shrink-0"></span>
                            <span className="leading-relaxed">{cleanRole}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                
                {/* 문제 해결 및 최적화 */}
                {sections.roleEtc.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-fuchsia-400 mb-3">문제 해결 및 최적화</h3>
                    <ul className="space-y-3 text-stone-300">
                      {sections.roleEtc.map((role, idx) => {
                        const cleanRole = role.replace(/^•\s*/, '');
                        return (
                          <li key={idx} className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-fuchsia-500 mt-2 mr-3 flex-shrink-0"></span>
                            <span className="leading-relaxed">{cleanRole}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <ul className="space-y-3 text-stone-300">
                {sections.role.map((role, idx) => {
                  const cleanRole = role.replace(/^•\s*/, '');
                  return (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-fuchsia-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="leading-relaxed">{cleanRole}</span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Tech Stack with Icons */}
          <div className="pb-12 border-b border-stone-800">
            <h2 className="text-2xl font-bold mb-6">사용 기술</h2>
            <div className="flex flex-wrap gap-4">
              {project.tech.map((tech) => {
                const techInfo = techIcons[tech] || { icon: 'mdi:code-tags', color: '#888888' };
                return (
                  <div
                    key={tech}
                    className="group relative flex items-center gap-2 px-4 py-3 bg-stone-800/60 rounded-lg ring-1 ring-stone-700/60 hover:ring-fuchsia-500/40 hover:bg-stone-700/70 transition-all cursor-pointer"
                  >
                    <Icon icon={techInfo.icon} className="w-6 h-6" style={{ color: techInfo.color }} />
                    <span className="text-sm text-stone-300">{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Implementation Features */}
          {project.image && project.image.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-8">구현 기능</h2>
              <div className="space-y-10">
                    {/* Full width images */}
                    {project.image
                      .filter((img: { layout?: string }) => img.layout === 'full')
                  .map((img: { name: string; tit: string; desc: string }, idx: number) => (
                    <div key={`full-${idx}`} className="space-y-4">
                      {/* Image */}
                      <div 
                        className="relative w-full h-[28rem] rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => setSelectedImage(`/images/projects/${img.name}`)}
                      >
                        <Image
                          src={`/images/projects/${img.name}`}
                          alt={img.tit}
                          fill
                          className="object-contain"
                        />
                      </div>
                      {/* Description */}
                      <div>
                        <h3 className="text-xl font-bold text-fuchsia-400 mb-2">{img.tit}</h3>
                        <p className="text-stone-300 text-base leading-relaxed">{img.desc}</p>
                      </div>
                    </div>
                  ))}

                    {/* Half width images - grid layout */}
                    {(() => {
                      const halfImages = project.image.filter((img: { layout?: string }) => img.layout === 'half');
                  const rows = [];
                  for (let i = 0; i < halfImages.length; i += 2) {
                    rows.push(halfImages.slice(i, i + 2));
                  }
                  return rows.map((row, rowIdx) => (
                    <div key={`row-${rowIdx}`} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {row.map((img: { name: string; tit: string; desc: string }, colIdx: number) => (
                        <div key={`half-${rowIdx}-${colIdx}`} className="space-y-4">
                          {/* Image */}
                          <div 
                            className="relative w-full h-[28rem] rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => setSelectedImage(`/images/projects/${img.name}`)}
                          >
                            <Image
                              src={`/images/projects/${img.name}`}
                              alt={img.tit}
                              fill
                              className="object-contain"
                            />
                          </div>
                          {/* Description */}
                          <div>
                            <h3 className="text-xl font-bold text-fuchsia-400 mb-2">{img.tit}</h3>
                            <p className="text-stone-300 text-base leading-relaxed">{img.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ));
                })()}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="확대된 이미지"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

