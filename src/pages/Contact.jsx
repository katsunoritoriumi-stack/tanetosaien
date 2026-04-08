import RevealOnScroll from '../components/RevealOnScroll';
import './Contact.css';
import { Mail, MapPin, Store } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact pt-main">
      <div className="container contact-container">
        
        <RevealOnScroll className="contact-header text-center mb-16">
          <span className="en-text section-label">Contact Us</span>
          <h1 className="section-title">お問い合わせ・ご注文</h1>
          <p className="section-subtitle mt-4">お気軽にお問い合わせください。</p>
        </RevealOnScroll>

        <div className="contact-grid">
          <RevealOnScroll delay={0.1} className="contact-card border-card">
            <div className="card-icon">
              <Store size={32} />
            </div>
            <h3>ご注文方法</h3>
            <p className="card-desc">オンライン決済をご希望の方は、ショップより直接ご購入いただけます。</p>
            <div className="mt-8">
              <a href="https://tanetosaien.stores.jp" target="_blank" rel="noopener noreferrer" className="btn btn-accent block text-center">
                直営ショップへ
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3} className="contact-card bg-text-color text-white">
            <div className="card-icon">
              <Mail size={32} />
            </div>
            <h3 className="text-white">その他のお問い合わせ</h3>
            <p className="card-desc">
              お電話での対応は承っておりません。<br />
              銀行振込や代金引換をご希望の方、またはご質問は下記メールアドレスまでお願いいたします。
            </p>
            <div className="contact-email mt-8">
              <a href="mailto:tanetosaien-kb@yahoo.co.jp" className="en-text email-link">
                tanetosaien-kb@yahoo.co.jp
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.5} className="contact-card border-card card-full">
            <div className="card-icon">
              <MapPin size={32} />
            </div>
            <h3>農地のご案内</h3>
            <div className="farm-info">
              <p>種to菜園（たねとさいえん）</p>
              <p>〒391-0111</p>
              <p>長野県諏訪郡原村18082-8</p>
              <p className="mt-4">担当: 小林</p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Contact;
