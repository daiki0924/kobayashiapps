import Link from "next/link"

function FurusatoNHIPrivacyPolicyPage() {
    return (
      <main>
        <h1>ふるさと&国保ナビ プライバシーポリシー</h1>

        <p>
          ふるさと&国保ナビ（以下、「本アプリ」といいます。）は、kobayashi daiki（以下、「開発者」といいます。）が提供する
          ふるさと納税の控除上限額および国民健康保険料の概算アプリです。本アプリは、ユーザーのプライバシーを尊重し、
          個人情報および関連情報を適切に取り扱います。本ポリシーでは、
          本アプリにおける情報の取得、利用、管理について説明します。
        </p>

        <section>
          <h2>1. 取得する情報</h2>
          <p>本アプリで入力する情報は以下のとおりです。これらは計算のためにのみ端末内で使用します。</p>
          <ul>
            <li>年収・給与以外の所得・公的年金収入・社会保険料などの金額</li>
            <li>働き方、配偶者の有無と年収、扶養している家族の人数</li>
            <li>お住まいの地域、国民健康保険の加入者ごとの年齢区分</li>
          </ul>
          <p>
            また、本アプリが利用する外部サービスにより、以下の情報が取得される場合があります。
          </p>
          <ul>
            <li>
              Google AdMob（広告配信）：端末情報、IPアドレス、広告の表示・操作に関する利用状況など
            </li>
            <li>
              Firebase Analytics（利用状況の分析）：画面の操作（計算ボタンのタップ、選択した地域・寄附年・働き方・加入者数など）、
              端末・OSの種類、アプリのバージョンなど
            </li>
          </ul>
          <p>入力した金額は、上記の外部サービスを含め、外部に送信しません。</p>
        </section>

        <section>
          <h2>2. 利用目的</h2>
          <ul>
            <li>ふるさと納税の控除上限額、国民健康保険料の計算など本アプリの機能提供のため</li>
            <li>本アプリの改善のため（利用状況の分析）</li>
            <li>広告の配信のため</li>
          </ul>
        </section>

        <section>
          <h2>3. 情報の管理</h2>
          <p>
            入力した情報は端末内でのみ計算に使用し、開発者を含め、外部サーバーへの送信は行いません。
            また、入力した情報は保存されず、アプリを終了すると消去されます。
          </p>
          <p>
            計算結果は、ユーザーが共有操作を行った場合に限り、
            ユーザーが選択した共有先（メッセージ、メールなど）へ渡されます。
          </p>
        </section>

        <section>
          <h2>4. 端末の権限</h2>
          <p>本アプリは、連絡先・位置情報・写真などの端末の権限を要求しません。</p>
        </section>

        <section>
          <h2>5. 第三者提供</h2>
          <p>
            本アプリは以下のサードパーティSDKを使用しており、
            各社のプライバシーポリシーに基づいてデータが処理されます。
          </p>
          <ul>
            <li>
              Google AdMob（Google LLC）
              https://policies.google.com/privacy
            </li>
            <li>
              Firebase Analytics（Google LLC）
              https://firebase.google.com/support/privacy
            </li>
          </ul>
          <p>
            上記以外に、法令に基づく場合を除き、ユーザーの同意なく取得した情報を
            第三者に提供しません。
          </p>
        </section>

        <section>
          <h2>6. お問い合わせ時の情報</h2>
          <p>
            お問い合わせの際にユーザーが任意で提供したメールアドレス・お問い合わせ内容は、
            お問い合わせへの対応のためにのみ利用します。
          </p>
        </section>

        <section>
          <h2>7. プライバシーポリシーの変更</h2>
          <p>
            本ポリシーは、必要に応じて内容を変更することがあります。変更後の内容は、
            本ページに掲載した時点から適用されます。
          </p>
        </section>

        <section>
          <h2>8. お問い合わせ</h2>
          <p>メールアドレス: nissy.kobayashi@gmail.com</p>
        </section>

        <section>
          <p>制定日: 2026年10月2日</p>
        </section>

        <section>
          <ul>
            <li>
              <Link href="/furusatonhi">ふるさと&国保ナビ のページへ戻る</Link>
            </li>
            <li>
              <Link href="/">トップページへ戻る</Link>
            </li>
          </ul>
        </section>
      </main>
    )
  }

  export default FurusatoNHIPrivacyPolicyPage
