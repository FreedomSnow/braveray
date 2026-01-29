import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-12 border-t border-gray-200" data-cmp="Footer">
      <div className="pt-4 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2026 北锐科技. 保留所有权利。
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900 transition-colors">隐私政策</a>
            <a href="#" className="hover:text-gray-900 transition-colors">使用条款</a>
            <a href="#" className="hover:text-gray-900 transition-colors">联系我们</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;