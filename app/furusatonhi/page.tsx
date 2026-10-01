import Link from "next/link"

function FurusatoNHIPage() {
    return (
      <main>
        <h1>ふるさと&国保ナビ</h1>

        <p>
          ふるさと&国保ナビ は kobayashi daiki が提供する、ふるさと納税の控除上限額と
          国民健康保険料を概算するアプリです。
          このページは ふるさと&国保ナビ の公式ホームページです。
        </p>

        <section>
          <h2>ふるさと&国保ナビ について</h2>
          <p>
            ふるさと&国保ナビ は、源泉徴収票や確定申告書の金額を入力するだけで、
            ふるさと納税の控除上限額と国民健康保険料の目安を確認できることを目的としたアプリです。
          </p>
          <p>
            計算はすべて端末内で行われ、入力した金額が外部のサーバーへ送信されることはありません。
          </p>
        </section>

        <section>
          <h2>主な機能</h2>
          <ul>
            <li>働き方（会社員・自営業・会社員＋副業）に応じたふるさと納税の控除上限額の計算</li>
            <li>配偶者控除・配偶者特別控除、扶養控除の自動反映</li>
            <li>社会保険料の自動概算</li>
            <li>東京23区の国民健康保険料の計算（医療分・後期高齢者支援金分・介護分・子ども・子育て支援金分）</li>
            <li>7割・5割・2割軽減の自動判定</li>
            <li>計算結果の共有</li>
          </ul>
        </section>

        <section>
          <h2>関連リンク</h2>
          <ul>
            <li>
              <Link href="/furusatonhi/privacy">プライバシーポリシー</Link>
            </li>
            <li>
              <Link href="/furusatonhi/support">サポートページ</Link>
            </li>
            <li>
              <Link href="/">トップページへ戻る</Link>
            </li>
          </ul>
        </section>
      </main>
    )
  }

  export default FurusatoNHIPage
