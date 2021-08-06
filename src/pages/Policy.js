// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Container } from '@material-ui/core';
// components
import { MotionContainer } from '../components/animate';
import Page from '../components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

// ----------------------------------------------------------------------

export default function Policy() {
  return (
    <RootStyle title="Policy">
      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            <h1>Privacy Policy</h1>
            <br />
            <h3>広告の配信について</h3>
            <div>
              当ページでは、
              <a href="https://www.google.co.jp/adsense/start/">第三者配信の広告サービス</a>
              を利用しています。このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用しております。クッキーを使用することで当ページはお客様のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。
            </div>
            <br />
            <div>
              Cookie（クッキー）を無効にする設定およびGoogleアドセンスに関する詳細は
              <a href="https://policies.google.com/technologies/ads?hl=ja">
                広告 – ポリシーと規約 – Google
              </a>
              をご覧ください。
              注記）クッキー（Cookie）とは：当ページや他サイトへのアクセスに関する情報で、氏名、住所、メールアドレス、電話番号は含まれていません。
            </div>
            <br />
            <h3>Ad serving</h3>
            <div>
              This page uses <a href="https://www.google.co.jp/adsense/start/">this</a> a
              third-party ad serving service. These ad-serving companies use cookies in order to
              display advertisements for products and services that match the interests of users.
              The use of cookies enables this page to identify your computer, but it does not
              identify you personally.
            </div>
            <br />
            <div>
              For more information about disabling cookies and Google Adsense, please visit
              <a href="https://policies.google.com/technologies/ads?hl=ja For more information on disabling">
                {' '}
                here
              </a>
              cookies and Google AdSense, please visit "Advertising - Policies and Terms - Google".
            </div>
            <br />
            <div>
              For more information about Google Adsense and how to disable cookies, please visit the
              "Advertising - Policy - Terms and Conditions - Google" page.
            </div>
            <br />
            <h3>アクセス解析ツールについて</h3>
            <div>
              当ページでは、Googleによるアクセス解析ツール
              <a href="https://marketingplatform.google.com/intl/ja/about/analytics/">
                Googleアナリティクス
              </a>
              を利用しています。
              <br />
              このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はクッキー（Cookie）を無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
              <br />
              <br />
              この規約に関して、詳しくは
              <a href="https://marketingplatform.google.com/about/analytics/terms/jp/">こちら</a>
              をクリックしてください。
            </div>
            <br />
            <h3>Access analysis tools</h3>
            <div>
              This page uses Google Analytics, an access analysis tool by Google.
              <a href="https://marketingplatform.google.com/intl/ja/about/analytics/">here</a>
              <br />
              This Google Analytics uses cookies to collect traffic data. This traffic data is
              collected anonymously and is not personally identifiable. You can refuse this
              collection by disabling cookies, so please check your browser settings. For more
              information about these terms and conditions, please click on
              <a href="https://marketingplatform.google.com/about/analytics/terms/jp/">here</a>
            </div>
            <br />
            <h3>リンクについて</h3>
            <div>基本的にリンクフリーです。</div>
            <br />
            <h3>Links</h3>
            <div>Basically, links are free. </div>
            <br />
            <h2>免責事項</h2>
            <div>
              当ページのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、必ずしもそれらの正確性や安全性等を保証するものではありません。誤情報が入り込んだり、情報が古くなっていることもございます。万が一、当ページに掲載された内容によって発生したトラブルや損害等の一切の責任を負いかねます。あらかじめご了承くださいますようお願いいたします。
              また、本免責事項、および当ページに掲載しているすべての記事は、予告なしに変更・削除されることがあります。
              予めご了承下さい。
            </div>
            <br />
            <h2>Disclaimer</h2>.
            <div>
              While we strive to provide the most accurate information possible, we do not
              necessarily guarantee the accuracy or safety of the content or information on this
              page. However, we cannot necessarily guarantee the accuracy or safety of such
              information, and it may contain erroneous or outdated information. We cannot be held
              responsible for any problems or damages caused by the contents of this page. We ask
              for your understanding in advance. In addition, this disclaimer and all articles on
              this page are subject to change or deletion without notice. Please be forewarned.
            </div>
            <br />
            <h2>ライバシーポリシー・免責事項の変更について</h2>
            <div>
              当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシー及び免責事項の内容を適宜見直しその改善に努めます。修正された最新のプライバシーポリシーと免責事項は常に本ページにて開示されます。
            </div>
            <br />
            <h2>Changes to our Privacy Policy and Disclaimer</h2>.
            <div>
              In addition to complying with the Japanese laws and regulations applicable to personal
              information, this website will review and improve the contents of this Privacy Policy
              and Disclaimer from time to time. The latest revised privacy policy and disclaimer
              will always be disclosed on this page.
            </div>
            <br />
            <div>
              運営者(author)：@196Ikuchil <br />
              連絡先(mailto)：196Ikuchil@gmail.com
            </div>
            <br />
          </Box>
        </MotionContainer>
      </Container>
    </RootStyle>
  );
}
