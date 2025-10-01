'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Home, User, FolderOpen, Mail, Github, Menu, X } from 'lucide-react';

export default function NavigationIsland() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { name: '홈', href: '/', icon: Home },
    { name: '소개', href: '/about', icon: User },
    { name: '프로젝트', href: '/projects', icon: FolderOpen },
    { name: '연락처', href: '/contact', icon: Mail },
  ];

  return (
    <>
      {/* 데스크톱 아일랜드 네비게이션 */}
      <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-850 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      } hidden md:block`}>
        <div className="bg-gray-900/80 backdrop-blur-md rounded-full px-6 py-3 border border-gray-700">
          <ul className="flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                      isActive 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                </li>
              );
            })}
            
            {/* GitHub 링크 */}
            <li>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-full text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200"
              >
                <Github size={18} />
                <span className="text-sm font-medium">Github</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* 모바일 네비게이션 */}
      <nav className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-12 h-12 bg-gray-900/80 backdrop-blur-md rounded-full flex items-center justify-center border border-gray-700"
        >
          {isMobileOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
        </button>

        {/* 모바일 메뉴 */}
        {isMobileOpen && (
          <div className="absolute top-16 right-0 bg-gray-900/95 backdrop-blur-md rounded-2xl p-4 border border-gray-700 min-w-[200px]">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive 
                          ? 'bg-blue-600 text-white' 
                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
              
              <li>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200"
                >
                  <Github size={18} />
                  <span className="font-medium">Github</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
