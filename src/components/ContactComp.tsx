import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { useI18n } from '../i18n';

const ContactComp = () => {
  const { messages } = useI18n();

  const emailTo = messages.contact.emailValue;
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [paypalHeight, setPaypalHeight] = useState(260);
  const paypalContainerId = 'paypal-container-A2AJHLHX4XPMU';
  const paypalHostedButtonId = 'A2AJHLHX4XPMU';
  const paypalSdkSrc =
    'https://www.paypal.com/sdk/js?client-id=BAASKeTmjp4PSGZq3cran8FREhj81yaIeThZJlCP82njsIwMTCSnKT0REvcu_p39s-DR0Sey_sujHu8oMs&components=hosted-buttons&disable-funding=venmo&currency=USD';

  const paypalIframeSrcDoc = `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style>
        html, body { margin: 0; padding: 0; background: #ffffff; min-height: 240px; }
        body { padding: 16px; box-sizing: border-box; border-radius: 12px; overflow: hidden; }
        #${paypalContainerId} { min-height: 220px; }
      </style>
    </head>
    <body>
      <div id="${paypalContainerId}"></div>
      <script src="${paypalSdkSrc}" crossorigin="anonymous" async></script>
      <script>
        (function () {
          function postHeight() {
            var h = document.documentElement.scrollHeight || document.body.scrollHeight || 0;
            window.parent && window.parent.postMessage({ type: 'paypal-height', height: h }, '*');
          }
          var attempts = 0;
          var timer = window.setInterval(function () {
            var paypalSdk = window.paypal;
            if (paypalSdk && paypalSdk.HostedButtons) {
              paypalSdk.HostedButtons({ hostedButtonId: "${paypalHostedButtonId}" })
                .render("#${paypalContainerId}")
                .then(function () {
                  postHeight();
                });
              window.clearInterval(timer);
              setTimeout(postHeight, 500);
              return;
            }
            attempts += 1;
            if (attempts >= 30) {
              window.clearInterval(timer);
            }
          }, 300);
          window.addEventListener('load', postHeight);
          var observer = new MutationObserver(postHeight);
          observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true });
        })();
      <\/script>
    </body>
  </html>`;

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (event?.data?.type === 'paypal-height' && typeof event.data.height === 'number') {
        const nextHeight = Math.max(260, Math.ceil(event.data.height));
        setPaypalHeight(nextHeight);
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-900 text-white" data-cmp="ContactComp">
      <div className="container-1440 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-4xl md:text-4xl font-bold mb-8">{messages.contact.heading}</h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-lg">
              {messages.contact.intro}
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-2">{messages.contact.emailLabel}</h4>
                  <p className="text-gray-400 text-sm">{messages.contact.emailValue}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-2">{messages.contact.timeLabel}</h4>
                  <p className="text-gray-400 text-sm">{messages.contact.timeValue}</p>
                </div>
              </div>
              <div className="mt-4" id="donate">
                <iframe
                  title="PayPal Hosted Button"
                  ref={iframeRef}
                  className="w-full max-w-[320px] border-0"
                  style={{ height: paypalHeight }}
                  srcDoc={paypalIframeSrcDoc}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                  allow="payment *"
                />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-lg p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{messages.contact.formTitle}</h3>
            <form className="space-y-6" onSubmit={e => {
              e.preventDefault();
              const email = (document.getElementById('email') as HTMLInputElement)?.value.trim();
              const message = (document.getElementById('message') as HTMLTextAreaElement)?.value.trim();
              if (!email || !message) {
                alert(messages.contact.alertMissing);
                return;
              }
              const subject = encodeURIComponent(messages.contact.mailSubject);
              const body = encodeURIComponent(
                messages.contact.mailBodyTemplate
                  .replace('{email}', email)
                  .replace('{message}', message)
              );
              window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{messages.contact.form.nameLabel}</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder={messages.contact.form.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{messages.contact.form.emailLabel}</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder={messages.contact.form.emailPlaceholder}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">{messages.contact.form.companyLabel}</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder={messages.contact.form.companyPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{messages.contact.form.messageLabel}</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                  placeholder={messages.contact.form.messagePlaceholder}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                {messages.contact.submit} <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComp;