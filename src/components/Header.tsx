import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: '首页', href: '#home' },
    { name: '开发服务', href: '#services' },
    { name: '客户案例', href: '#cases' },
    { name: '开发团队', href: '#team' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200" data-cmp="Header">
      <div className="container-1440 px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/braveray/logo.png" alt="北锐科技" className="h-8 w-8" />
          <span className="text-lg font-semibold tracking-tight text-gray-900">
            北锐科技
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
          >
            联系我们
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-lg p-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-medium text-gray-900 py-3 border-b border-gray-100 last:border-b-0"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 w-full text-center px-6 py-3 bg-gray-900 text-white font-medium rounded"
            onClick={() => setIsOpen(false)}
          >
            联系我们
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;