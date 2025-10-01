import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 소개 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">김지은</h3>
            <p className="text-gray-300 text-sm">
              사용자 경험을 중시하는 프론트엔드 개발자입니다.
            </p>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <div className="space-y-2">
              <a
                href="mailto:your-email@example.com"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail size={16} className="mr-2" />
                your-email@example.com
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Github size={16} className="mr-2" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={16} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* 기술 스택 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">기술 스택</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 김지은. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
