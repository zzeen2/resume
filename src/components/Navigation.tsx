'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Home, User, FolderOpen, Github } from 'lucide-react';

export default function Navigation() {
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Projects', href: '/projects', icon: FolderOpen },
  ];

  return (
    <nav className={`fixed right-5 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-850 ${
      isLoaded ? 'opacity-100' : 'opacity-0 translate-x-4'
    }`}>
      <ul className="flex flex-col items-end space-y-5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <li key={item.name} className="relative group">
              <Link
                href={item.href}
                className={`relative inline-flex items-center rounded-full transition-all duration-200 overflow-hidden ${
                  isActive 
                    ? 'w-auto pl-6 pr-4 py-4 bg-fuchsia-600 justify-between' 
                    : 'w-14 h-14 bg-stone-800 justify-center group-hover:w-auto group-hover:pl-6 group-hover:pr-4 group-hover:justify-between group-hover:bg-fuchsia-600'
                }`}
              >
                <span className={`text-white font-semibold text-sm uppercase tracking-wide whitespace-nowrap overflow-hidden transition-all duration-300 ${
                  isActive ? 'opacity-100 w-auto mr-3' : 'opacity-0 w-0 mr-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-3'
                }`}>
                  {item.name}
                </span>
                <div className={`flex items-center justify-center ${isActive ? 'ml-auto' : 'group-hover:ml-auto'}`}>
                  <Icon size={20} className="text-white flex-shrink-0" />
                </div>
              </Link>
            </li>
          );
        })}
        
        {/* GitHub 링크 */}
        <li className="relative group">
          <a
            href="https://github.com/zzeen2"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center rounded-full transition-all duration-200 overflow-hidden w-14 h-14 bg-stone-800 justify-center group-hover:w-auto group-hover:pl-6 group-hover:pr-4 group-hover:bg-stone-700"
          >
            <span className="text-white font-semibold text-sm uppercase tracking-wide whitespace-nowrap overflow-hidden transition-all duration-300 opacity-0 w-0 mr-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-3">
              Github
            </span>
            <div className="flex items-center justify-center group-hover:ml-auto">
              <Github size={20} className="text-white flex-shrink-0" />
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
}
