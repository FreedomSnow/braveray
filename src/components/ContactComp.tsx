import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactComp = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-900 text-white" data-cmp="ContactComp">
      <div className="container-1440 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-4xl md:text-4xl font-bold mb-8">准备好开始您的软件开发项目了吗？</h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-lg">
              无论您需要移动应用、车机应用、上位机还是嵌入式开发，我们都将全力以赴，为您提供专业可靠的定制化服务。
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-2">发送邮件</h4>
                  <p className="text-gray-400 text-sm">support@braveray.top</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-2">咨询时间</h4>
                  <p className="text-gray-400 text-sm">周一至周五 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-lg p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">联系我们</h3>
            <form className="space-y-6" onSubmit={e => {
              e.preventDefault();
              const email = (document.getElementById('email') as HTMLInputElement)?.value.trim();
              const message = (document.getElementById('message') as HTMLTextAreaElement)?.value.trim();
              if (!email || !message) {
                alert('请填写电子邮箱和需求描述');
                return;
              }
              const subject = encodeURIComponent('开发服务咨询');
              const body = encodeURIComponent(`${email} 发来消息：\n${message}`);
              window.location.href = `mailto:support@braveray.top?subject=${subject}&body=${body}`;
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">电子邮箱*</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="name@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">公司名称</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="您的公司名称"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">需求描述*</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                  placeholder="请简要描述您的项目需求..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                发送信息 <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComp;