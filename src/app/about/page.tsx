'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { Calendar, Award, Code, Layers, Server, Wrench, Terminal, Database, Blocks } from 'lucide-react';
import { skillData } from '@/lib/data';

function AsIsCard() {
  const items: string[] = [
    'Next.js/React로 프론트엔드~백엔드 전체 서비스 개발',
    'REST API 설계, Node.js·NestJS 백엔드 구축',
    'PostgreSQL·MySQL 설계, 복잡한 SQL 최적화',
    'Solidity 스마트 컨트랙트, Hardhat 테스트·배포로 Web3 구현',
    '서비스 아키텍처 설계, DB 모델링·인덱싱',
  ];

  return (
    <div className="rounded-2xl p-6 bg-stone-900 ring-1 ring-stone-800">
      <ul className="space-y-3 text-stone-300 text-sm leading-relaxed list-disc pl-5">
        {items.map((text, idx) => (
          <li key={idx}>{text}</li>
        ))}
      </ul>
    </div>
  );
}

function ToBeCard() {
  const items: string[] = [
    '대규모 트래픽 확장형 백엔드 아키텍처 설계',
    'NestJS·TypeScript 엔터프라이즈 백엔드 역량',
    '클라우드 운영·CI/CD 파이프라인으로 안정적 배포',
    'MSA 서비스 분리·데이터 정합성 운영',
    '블록체인 노드 운영·온체인 데이터 동기화 전문성',
  ];

  return (
    <div className="rounded-2xl p-6 bg-stone-900 ring-1 ring-fuchsia-700/40">
      <ul className="space-y-3 text-stone-200 text-sm leading-relaxed list-disc pl-5">
        {items.map((text, idx) => (
          <li key={idx}>{text}</li>
        ))}
      </ul>
    </div>
  );
}

function SelectableStacks() {
  const categories = [
    { key: 'programming', title: 'Programming', icon: Code, stacks: ['TypeScript', 'JavaScript', 'Python', 'Solidity'] },
    { key: 'framework', title: 'Framework/Lib', icon: Layers, stacks: ['React', 'Next.js', 'React Native', 'Node.js', 'Express.js', 'NestJS', 'Redux', 'Expo', 'TailwindCSS', 'Styled-components'] },
    { key: 'server', title: 'Server', icon: Server, stacks: ['Node.js', 'Express.js', 'NestJS'] },
    { key: 'tooling', title: 'Tooling/DevOps', icon: Wrench, stacks: ['Git', 'GitHub', 'Notion'] },
    { key: 'environment', title: 'Environment', icon: Terminal, stacks: ['Linux (Ubuntu)'] },
    { key: 'database', title: 'Database', icon: Database, stacks: ['PostgreSQL', 'MySQL', 'Sequelize', 'Drizzle ORM'] },
    { key: 'blockchain', title: 'Blockchain', icon: Blocks, stacks: ['Solidity', 'Hardhat', 'ethers.js', 'Web3.js', 'OpenZeppelin'] },
  ] as const;

  const [active, setActive] = useState<(typeof categories)[number]['key']>('programming');
  const activeCat = categories.find(c => c.key === active)!;

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((c) => {
          const Icon = c.icon;
          const isActive = active === c.key;
          return (
            <button
              key={c.key}
              type="button"
              onClick={() => setActive(c.key)}
              className={`flex flex-col items-center rounded-xl px-3 py-3 ring-1 transition-all duration-200 ${
                isActive
                  ? 'bg-fuchsia-600/20 ring-fuchsia-500/40 text-fuchsia-300'
                  : 'bg-stone-800/60 ring-stone-700/60 hover:bg-stone-700/70'
              }`}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <span className="mt-2 text-xs text-center leading-snug">{c.title}</span>
            </button>
          );
        })}
      </div>

      <div className="rounded-2xl p-6 bg-stone-900 ring-1 ring-stone-800">
        <h4 className="text-lg font-semibold mb-4 text-center">{activeCat.title}</h4>
        <div className="flex flex-wrap justify-center gap-2">
          {activeCat.stacks.map((s) => (
            <span key={s} className="px-3 py-1 rounded-full text-sm bg-stone-800 text-stone-200 ring-1 ring-stone-700/60">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-stone-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About</h1>
          <div className="mx-auto h-1 w-16 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full" />
        </motion.div>

        {/* About Content */}
        <div className="space-y-16 mb-20">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">My Story</h2>
            <div className="space-y-6 text-stone-300 leading-relaxed max-w-3xl mx-auto text-center">
              <p>
                제가 개발을 시작하게 된 계기는 학부 연구에서 AI 모델로 실제 문제를 해결하며 느낀 성취감이었습니다. 하지만 연구 결과가 논문에만 머무르는 것이 아쉬웠고, 사용자가 직접 체험할 수 있는 서비스를 만들고 싶다는 열망이 커졌습니다.
              </p>
              <p>
                그렇게 시작한 웹 풀스택 개발 여정에서 블록체인 기술을 만났고, 투명성과 신뢰성을 기반으로 새로운 가치를 창출할 수 있다는 점에 매력을 느꼈습니다. 다양한 팀 프로젝트를 통해 스마트 컨트랙트부터 백엔드 시스템까지 직접 구현하며, 기술이 실제 비즈니스 문제를 어떻게 해결하는지 배워왔습니다.
              </p>
              <p>
                새로운 기술 앞에서 막막함보다 호기심이 앞서고, 신기술을 배우고 프로젝트에 적용해보는 것을 즐깁니다. 끝까지 파고들어 결과를 만들어내는 것이 제 강점입니다. 지금은 블록체인 백엔드 전문가로 성장하며, 사용자에게 실질적인 가치를 전달하는 서비스를 만드는 개발자가 되기 위해 달려가고 있습니다.
              </p>
            </div>
          </motion.div>

          {/* As-Is / To-Be */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold text-center mb-4">AS‑IS</h3>
                <AsIsCard />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-center mb-4 text-fuchsia-400">TO‑BE</h3>
                <ToBeCard />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-10">Skills & Tools</h2>
          <SkillsTabbar />
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
          <div className="relative pl-8 border-l-2 border-stone-700">
            {/* 대학 */}
            <div className="mb-12 relative">
              <div className="absolute -left-[37px] w-3 h-3 rounded-full bg-fuchsia-500 ring-4 ring-stone-950"></div>
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-stone-400 text-sm">2025.03 졸업</span>
                <h3 className="text-xl font-bold">세종대학교</h3>
              </div>
              <p className="text-stone-400 mb-1">대학교(4년) · 건축공학과</p>
              <p className="text-stone-500 text-sm">3.64 / 4.5</p>
            </div>

            {/* 부트캠프 */}
            <div className="mb-0 relative">
              <div className="absolute -left-[37px] w-3 h-3 rounded-full bg-fuchsia-500 ring-4 ring-stone-950"></div>
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-stone-400 text-sm">2024.12 - 2025.09</span>
                <h3 className="text-xl font-bold">차세대 블록체인 기반 웹 풀스택 개발자 부트캠프</h3>
              </div>
              <p className="text-stone-400 mb-1">경일게임아카데미</p>
              <p className="text-stone-500 text-sm">블록체인 기반 웹 풀스택 개발자 교육과정 수료(9개월)</p>
            </div>
          </div>
        </motion.div>

        {/* Activities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-16">Activities & Awards</h2>
          <div className="relative pl-8 border-l-2 border-stone-700">
            {/* 자격증 */}
            <div className="mb-12 relative">
              <div className="absolute -left-[37px] w-3 h-3 rounded-full bg-fuchsia-500 ring-4 ring-stone-950"></div>
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-stone-400 text-sm">2025.09</span>
                <h3 className="text-xl font-bold">정보처리기사</h3>
              </div>
              <p className="text-stone-400">자격증 · 한국산업인력공단</p>
            </div>

            {/* 학부연구생 */}
            <ResearchToggle />

            {/* 공학대학 학술제 */}
            <AwardToggle />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ResearchToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-12 relative">
      <div className="absolute -left-[37px] w-3 h-3 rounded-full bg-fuchsia-500 ring-4 ring-stone-950"></div>
      <div 
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-baseline gap-4 mb-3">
          <span className="text-stone-400 text-sm">2023.06 - 2024.12</span>
          <h3 className="text-xl font-bold flex items-center gap-2">
            학부연구생(SSAI Laboratory)
            <span className="text-stone-500 text-sm">
              {isOpen ? '▼' : '▶'}
            </span>
          </h3>
        </div>
        <p className="text-stone-400 mb-3">대외활동 · 세종대학교</p>
      </div>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4 text-stone-300 text-sm leading-relaxed mt-3"
        >
          <div>
            <p className="text-stone-400 mb-2">○ 국제학술지 논문 제출 (JPGT-Green Technology, 2024)</p>
            <ul className="list-disc pl-5 space-y-1 text-stone-400">
              <li>자전거도로 위험요소 탐지를 위한 인공지능 모델 및 데이터 전처리 프로세스 개발</li>
              <li>SCI(E)급 저널 International Journal of Precision Engineering and Manufacturing-Green Technology에 논문 제출</li>
            </ul>
          </div>

          <div>
            <p className="text-stone-400 mb-2">○ 도로노면 이미지 데이터 라벨링 참여 (한국지능정보사회진흥원, 2023.07 ~ 2023.12)</p>
            <ul className="list-disc pl-5 space-y-1 text-stone-400">
              <li>고해상도 도로노면 이미지 데이터셋 라벨링 작업 수행</li>
              <li>AI 기반 도로 위험 요소 탐지 모델 개발을 위한 학습 데이터 품질 확보 기여</li>
            </ul>
          </div>

          <div>
            <p className="text-stone-400 mb-2">○ 국토안전 빅데이터 플랫폼 구축 및 분석과제 (2024.08 ~ 2024.12)</p>
            <ul className="list-disc pl-5 space-y-1 text-stone-400">
              <li>국토안전관리원 정보화사업 참여</li>
              <li>시설물 진단/성능평가 세부지침을 기반으로 한 평가기준 서비스 모델 PoC 구현 및 검증</li>
              <li>과제 보고서 작성 및 연구 성과 정리 참여</li>
            </ul>
          </div>

          <div>
            <p className="text-stone-400 mb-2">○ AI 기반 도로 손상 및 위험요인 탐지 기술 개발 (중소기업기술정보진흥원)</p>
            <ul className="list-disc pl-5 space-y-1 text-stone-400">
              <li>자전거도로 이용자 안전 확보를 위한 인공지능 기반 탐지 기술 연구 참여</li>
              <li>모델 학습 및 도로 손상/위험요소 탐지 알고리즘 개발</li>
              <li>과제 보고서 작성 및 연구 성과 정리 주도</li>
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function AwardToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-0 relative">
      <div className="absolute -left-[37px] w-3 h-3 rounded-full bg-fuchsia-500 ring-4 ring-stone-950"></div>
      <div 
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-baseline gap-4 mb-3">
          <span className="text-stone-400 text-sm">2023.09</span>
          <h3 className="text-xl font-bold flex items-center gap-2">
            세종대학교 공학대학 학술제 (1위 수상)
            <span className="text-stone-500 text-sm">
              {isOpen ? '▼' : '▶'}
            </span>
          </h3>
        </div>
        <p className="text-stone-400 mb-3">수상이력 · 세종대학교</p>
      </div>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-3"
        >
          <ul className="list-disc pl-5 space-y-1 text-stone-300 text-sm">
            <li>3인 팀으로 낙후된 다자간 리모델링 프로젝트 수행</li>
            <li>친환경 건축 기술을 활용한 설계 제안</li>
            <li>CAD 설계 및 SketchUp 기반 3D 모델링 제작</li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}

function SkillsTabbar() {
  const categories = [
    { key: 'lang', title: 'Programming', icon: Code },
    { key: 'fw', title: 'Framework/Lib', icon: Layers },
    { key: 'server', title: 'Server', icon: Server },
    { key: 'tool', title: 'Tooling', icon: Wrench },
    { key: 'env', title: 'Environment', icon: Terminal },
    { key: 'db', title: 'Database', icon: Database },
    { key: 'bc', title: 'Blockchain', icon: Blocks },
  ] as const;

  const [active, setActive] = useState<(typeof categories)[number]['key'] | null>(null);

  const logosByKey: Record<string, { key: string; icon: string; color: string; label: string; level: string; desc: string }[]> = {
    lang: [
      { key: 'ts', icon: 'simple-icons:typescript', color: '#3178C6', label: 'TypeScript', level: '상', desc: '타입 안전성을 고려한 백엔드/NestJS 개발과 React 프로젝트에 적용, 인터페이스·유틸 타입으로 도메인 모델 관리 가능' },
      { key: 'js', icon: 'simple-icons:javascript', color: '#F7DF1E', label: 'JavaScript', level: '상', desc: 'Node/브라우저 전반 숙련. 비동기 흐름(Promise/async-await)과 모듈 패턴을 활용해 API/대시보드/유틸 구현 가능' },
      { key: 'py', icon: 'simple-icons:python', color: '#3776AB', label: 'Python', level: '중', desc: '연구·데이터 처리용으로 사용(Colab/Jupyter). 간단한 전처리·스크립트·분석 스크립트 작성 가능' },
      { key: 'sol', icon: 'simple-icons:solidity', color: '#AA6746', label: 'Solidity', level: '상', desc: 'ERC 표준과 접근 제어, 보상/등록/랜덤 로직 등 기능성 컨트랙트 작성·테스트·배포 가능(Hardhat)' },
    ],
    fw: [
      { key: 'react', icon: 'simple-icons:react', color: '#61DAFB', label: 'React', level: '상', desc: '상태/라우팅/컴포넌트 아키텍처 설계 가능. 대시보드·폼·차트·모달 등 실서비스 UI 구현 경험' },
      { key: 'next', icon: 'simple-icons:nextdotjs', color: '#FFFFFF', label: 'Next.js', level: '상', desc: 'App Router 기반 레이아웃 구성, 서버 컴포넌트/SSR·CSR 선택 적용, Vercel 배포 운영 가능' },
      { key: 'rn', icon: 'simple-icons:react', color: '#61DAFB', label: 'React Native', level: '상', desc: 'RN 앱 화면 설계, WebView 기반 카카오 OAuth, 캘린더/통계/리스트 UI 구현 가능' },
      { key: 'redux', icon: 'simple-icons:redux', color: '#764ABC', label: 'Redux', level: '상', desc: '슬라이스 분리·미들웨어 설계로 전역 상태 정리(핵심 상태 통일: user/streak/emotion)' },
      { key: 'expo', icon: 'simple-icons:expo', color: '#FFFFFF', label: 'Expo', level: '상', desc: '빌드/프로파일링 기본 세팅과 이미지 처리, expo-image-manipulator로 동적 리사이징·압축 구현 경험' },
      { key: 'tw', icon: 'simple-icons:tailwindcss', color: '#06B6D4', label: 'Tailwind', level: '중', desc: '반응형/그리드 레이아웃 신속 구현, 디자인 시스템 수준의 유틸 조합 가능' },
      { key: 'sc', icon: 'simple-icons:styledcomponents', color: '#DB7093', label: 'Styled-components', level: '중', desc: '테마·전역 스타일 구성 및 컴포넌트 단위 캡슐화 가능' },
    ],
    server: [
      { key: 'node', icon: 'simple-icons:nodedotjs', color: '#339933', label: 'Node.js', level: '상', desc: 'REST API·배치·실시간(WebSocket) 서비스 구성, 환경 분리/에러 핸들링/로깅 기본 체계화' },
      { key: 'express', icon: 'simple-icons:express', color: '#FFFFFF', label: 'Express.js', level: '상', desc: '라우팅·미들웨어·에러 처리, Multer 업로드, JWT 인증·카카오 OAuth 연동 구현 가능' },
      { key: 'nest', icon: 'simple-icons:nestjs', color: '#E0234E', label: 'NestJS', level: '상', desc: '모듈/DI/가드/파이프 등 프레임워크 패턴 적용하여 확장 가능한 API 설계 가능' },
    ],
    tool: [
      { key: 'git', icon: 'simple-icons:git', color: '#F05032', label: 'Git', level: '상', desc: '브랜치 전략과 PR 리뷰, 이슈·프로젝트 보드로 협업' },
      { key: 'github', icon: 'simple-icons:github', color: '#FFFFFF', label: 'GitHub', level: '상', desc: 'PR 리뷰, 이슈·프로젝트 보드로 협업. GitHub Actions로 기본 CI 세팅 경험' },
      { key: 'notion', icon: 'simple-icons:notion', color: '#FFFFFF', label: 'Notion', level: '상', desc: 'API 명세·연동 문서화, 테스트 컬렉션 관리' },
    ],
    env: [
      { key: 'linux', icon: 'simple-icons:linux', color: '#FCC624', label: 'Linux', level: '중', desc: '쉘 환경에서 포트/프로세스·파일 권한·빌드 스크립트 관리 가능' },
    ],
    db: [
      { key: 'pg', icon: 'simple-icons:postgresql', color: '#4169E1', label: 'PostgreSQL', level: '상', desc: '스키마/인덱스 설계, CTE·다중 JOIN 기반의 집계/통계 쿼리 작성 가능' },
      { key: 'mysql', icon: 'simple-icons:mysql', color: '#4479A1', label: 'MySQL', level: '상', desc: '기본 CRUD/인덱싱/조인 설계, 운영 스키마 관리 경험' },
      { key: 'seq', icon: 'simple-icons:sequelize', color: '#52B0E7', label: 'Sequelize', level: '상', desc: '연관관계(1:N, N:M, self-ref) 모델링과 마이그레이션, 트랜잭션/제약조건 관리 가능' },
      { key: 'drizzle', icon: 'simple-icons:drizzle', color: '#C5F74F', label: 'Drizzle ORM', level: '상', desc: '타입 안전 스키마·마이그레이션, 복잡 집계는 Raw Query 병행해 가독성과 성능 균형 유지' },
    ],
    bc: [
      { key: 'hardhat', icon: 'mdi:hammer-wrench', color: '#FFF04D', label: 'Hardhat', level: '상', desc: '테스트·디플로이 스크립트, 네트워크 설정(Sepolia), OpenZeppelin 통합 가능' },
      { key: 'ethers', icon: 'simple-icons:ethers', color: '#2534A3', label: 'ethers.js', level: '상', desc: '지갑 연결·트랜잭션/이벤트 처리, 컨트랙트 인터랙션 및 CREATE2 주소 계산 정합성 구현 경험' },
      { key: 'web3', icon: 'simple-icons:web3dotjs', color: '#F16822', label: 'Web3.js', level: '하', desc: '기본 개념·간단 호출 수준 이해(주 사용은 ethers.js)' },
      { key: 'oz', icon: 'simple-icons:openzeppelin', color: '#4E5EE4', label: 'OpenZeppelin', level: '상', desc: 'ERC 표준·Ownable/AccessControl 등 보안 베이스 활용해 컨트랙트 설계' },
    ],
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((c) => {
          const Icon = c.icon;
          const isActive = active === c.key;
          return (
            <button
              key={c.key}
              type="button"
              onClick={() => setActive(isActive ? null : c.key)}
              aria-label={c.title}
              className={`flex flex-col items-center justify-center gap-2 rounded-full w-28 h-28 ring-1 transition-all ${
                isActive ? 'bg-fuchsia-600/20 ring-fuchsia-500/40 text-fuchsia-300' : 'bg-stone-800/60 ring-stone-700/60 hover:bg-stone-700/70 text-stone-300'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs font-medium whitespace-nowrap">{c.title}</span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {(active === null 
          ? Object.values(logosByKey).flat()
          : logosByKey[active]
        ).map((logo) => (
          <div key={logo.key} className="group relative">
            <div className="w-16 h-16 rounded-full ring-1 ring-stone-700/60 bg-stone-800/60 flex items-center justify-center transition-all hover:ring-fuchsia-500/40 hover:bg-stone-700/70 cursor-pointer">
              <Icon icon={logo.icon} width={24} height={24} style={{ color: logo.color }} />
            </div>
            <div className="pointer-events-none absolute top-full mt-3 left-1/2 transform -translate-x-1/2 z-10 hidden group-hover:block">
              <div className="w-72 text-[13px] leading-relaxed bg-stone-900 text-stone-200 px-4 py-3 rounded-lg shadow-lg ring-1 ring-stone-700/60">
                <p className="font-semibold text-fuchsia-400 mb-1">{logo.label}</p>
                <p className="text-stone-300">{logo.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
