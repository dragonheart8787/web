import Hero from '@/components/Hero'
import FeatureCard from '@/components/FeatureCard'
import DownloadSection from '@/components/DownloadSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero
        title="AI 股票與加密貨幣分析系統"
        subtitle="科技感十足，GitHub 俐落設計，跨平台一鍵下載"
        bgImage="/ai-hero.png"
      />

      <section className="max-w-6xl mx-auto py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {[
          { icon: '⚙️', title: '多模型 & 深度學習', desc: 'VotingClassifier + LSTM，準確率 > 80%' },
          { icon: '🌐', title: '即時圖表整合', desc: 'TradingView & TopOne 雙重展示' },
          { icon: '📰', title: '智慧事件分析', desc: 'GPT 事件邏輯 + 地緣風險' },
        ].map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </section>

      <DownloadSection />
      <Footer />
    </>
  )
}
