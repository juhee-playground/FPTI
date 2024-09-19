import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="icon" type="image/png" href="/icon-football.png" />
          <meta property="og:site_name" content="FPTI" />
          <meta property="og:title" content="내 풋살 성향 MBTI 테스트 - FPTI" />
          <meta property="twitter:title" content="내 풋살 성향 MBTI 테스트 - FPTI" />
          <meta property="og:description" content="풋살에서 당신의 플레이 스타일은? FPTI 테스트로 나의 성향을 알아보고 최적의 팀 역할을 찾아보세요" />
          <meta property="twitter:description" content="풋살에서 당신의 플레이 스타일은? FPTI 테스트로 나의 성향을 알아보고 최적의 팀 역할을 찾아보세요" />
          <meta property="twitter:label1" content="Category" />
          <meta property="twitter:data1" content="Funny" />
          <meta property="twitter:label2" content="Category" />
          <meta property="twitter:data2" content="축구/풋살" />
          <meta property="twitter:card" content="summary_image" />
          <meta property="twitter:image" content="/bg-landing.png" />
          <meta property="og:image" content="/bg-landing.png" />
          <script type="module" src="/src/main.tsx" dangerouslySetInnerHTML={{ __html: `` }} />
        </Head>
        
        <body>
          <Main />
          <NextScript />
          
        </body>
      </Html>
    )
  }
}

export default MyDocument      
