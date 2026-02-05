import { useI18n } from '../i18n';

const Footer = () => {
  const { messages } = useI18n();

  return (
    <footer className="bg-white text-gray-600 py-12 border-t border-gray-200" data-cmp="Footer">
      <div className="pt-4 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            {messages.footer.copyright}
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900 transition-colors">{messages.footer.privacy}</a>
            <a href="#" className="hover:text-gray-900 transition-colors">{messages.footer.terms}</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">{messages.footer.contact}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;