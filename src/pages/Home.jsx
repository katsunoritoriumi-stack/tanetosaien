import RevealOnScroll from '../components/RevealOnScroll';
import { ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: 'url("/hero.png")' }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <RevealOnScroll className="hero-text-wrap" delay={0.2}>
            <h2 className="en-text hero-subtitle">Organic Modern &amp; High-End Nature</h2>
            <h1 className="hero-title">
              種から、<br />
              <span className="accent-text">土</span>へと還る。<br />
              命をつなぐ野菜たち。
            </h1>
            <p className="hero-description">
              八ヶ岳山麓の高冷地、標高1100m。<br />
              澄んだ空気と土の温もりが育む、シードマイスターの安心野菜。
            </p>
            <a href="https://tanetosaien.stores.jp" target="_blank" rel="noopener noreferrer" className="btn btn-accent mt-8 inline-flex items-center gap-2">
              直営ショップを見る <ArrowRight size={18} />
            </a>
          </RevealOnScroll>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy section">
        <div className="container">
          <RevealOnScroll className="philosophy-grid">
            <div className="philosophy-text">
              <span className="en-text section-label">Our Philosophy</span>
              <h2 className="section-title">土づくりへの想い</h2>
              <div className="philosophy-content">
                <p>
                  農薬・化学肥料・家畜肥料などは使わずに、自然環境にもなるべく負担をかけないように配慮し、種からこだわってシードマイスターが野菜を栽培しています。
                </p>
                <p>
                  季節の野菜をあれこれ数種類詰め込んで、ご家庭用にも発送しています。一般的なお野菜も勿論ありますが、ちょっと変わった西洋野菜や、色や形の変わったお馴染みの野菜、地方伝統野菜などを多数栽培し販売しています。
                </p>
              </div>
            </div>
            <div className="philosophy-visual">
              <img src="/philosophy.jpg" alt="土づくりに関わる両手" className="visual-box" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Products / Gallery Section */}
      <section className="gallery section bg-green-light">
        <div className="container">
          <RevealOnScroll className="text-center mb-12">
            <span className="en-text section-label">Fresh Vegetables</span>
            <h2 className="section-title">生命力あふれる野菜たち</h2>
            <p className="section-subtitle">まるでギャラリーのように彩る、旬の恵み。</p>
          </RevealOnScroll>

          <div className="gallery-grid">
            <RevealOnScroll delay={0.1} className="gallery-item large">
              <div className="gallery-img-wrap">
                <img src="/vegetable_set.jpg" alt="鮮やかな野菜のギャラリー" />
              </div>
              <div className="gallery-info">
                <h3>季節の野菜セット</h3>
                <p>夏から秋にかけての7月下旬～10月下旬頃までが発送可能期間となります。玉ねぎ、ジャガイモ各種、ズッキーニ、モロッコインゲンなど、その日の収穫から10種類前後を箱に詰めてお送りします。</p>
                <p className="mt-4"><strong>【栽培野菜をザックリ紹介】</strong><br />
                トマト、茄子、ピーマン、ジャガイモ、スイスチャード・空芯菜などの葉物、インゲン豆、シシトウ、パプリカ、ニンニク、カボチャ、玉ねぎ、コールラビ、ビーツ、きゅうり、ズッキーニ、サツマイモ、落花生、人参、大根、ヤーコン、キクイモ…他</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3} className="gallery-item">
              <div className="gallery-img-wrap">
                <img src="/sweet_corn.png" alt="Sweet Corn" />
              </div>
              <div className="gallery-info">
                <h3>無農薬トウモロコシ</h3>
                <p>毎年大好評！自然の旨み豊かなトウモロコシを8月上旬頃から発送します。無農薬栽培の難しさから先端を切り落とした物などが入る場合もあります。希に虫が入ってしまうこともありますが、ご了承下さい。</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.5} className="gallery-item">
              <div className="gallery-img-wrap">
                <img src="/rhubarb_dressing.png" alt="Rhubarb Dressing" />
              </div>
              <div className="gallery-info">
                <h3>ルバーブドレッシング</h3>
                <p>当菜園のルバーブ、玉ねぎ、ニンニク、バジルを使用。酸っぱさがクセになる、ノンオイルドレッシングです。毎年7月頃からの販売です。</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Farmers Section */}
      <section className="farmers section">
        <div className="container">
          <RevealOnScroll className="farmers-grid">
            <div className="farmers-visual">
              <img src="/farmers.jpg" alt="生産者" className="farmers-img" />
            </div>
            <div className="farmers-text">
              <span className="en-text section-label">Our Farmers</span>
              <h2 className="section-title">生産者のご紹介</h2>
              <p>八ヶ岳山麓の大自然の中で、土と向き合いながら野菜を育てています。無農薬・無化学肥料にこだわり、種の選択から収穫まで、丁寧に手をかけた野菜をお届けしています。</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Information / Action Section */}
      <section className="information section">
        <div className="container info-container">
          <RevealOnScroll className="info-box">
            <h3 className="en-text mb-4">News &amp; Benefits</h3>
            <ul className="info-list">
              <li>
                <strong>《お知らせ》</strong> 直営ショップでご購入頂くとお得です。野菜セットご注文の方には、もれなく通常より1品多くお野菜をお入れ致します！
              </li>
              <li>「季節の野菜セット」の販売は7月末頃開始いたします。</li>
              <li>トウモロコシの販売は8月上旬頃を予定しております。</li>
            </ul>
            <div className="mt-8">
              <a href="https://tanetosaien.stores.jp" target="_blank" rel="noopener noreferrer" className="btn btn-outline">直営ショップへ</a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Home;
