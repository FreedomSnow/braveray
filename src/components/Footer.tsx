import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-12 border-t border-gray-200" data-cmp="Footer">
      <div className="container-1440 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/braveray/logo.png" alt="北锐科技" className="h-8 w-8" />
              <span className="text-lg font-bold text-gray-900 tracking-tight">
                北锐科技
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              专业软件开发服务商，专注移动应用、车机应用、上位机及嵌入式开发，致力于与每位客户建立长期合作关系。
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-100 rounded hover:bg-gray-900 hover:text-white transition-colors">
                <Github size={16} />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded hover:bg-gray-900 hover:text-white transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded hover:bg-gray-900 hover:text-white transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6">开发服务</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition-colors">移动应用开发</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">车机应用开发</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">上位机开发</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">嵌入式开发</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">应用定制</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6">关于我们</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition-colors">公司简介</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">加入我们</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">新闻中心</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">合作伙伴</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6">法律</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition-colors">隐私政策</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">用户条款</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Cookie 政策</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
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
      </div>
    </footer>
  );
};

export default Footer;