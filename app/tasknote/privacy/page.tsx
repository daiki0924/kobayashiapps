import Link from "next/link"

function TaskNotePrivacyPolicyPage() {
  return (
    <main>
      <h1>TaskNote プライバシーポリシー</h1>

      <p>
        TaskNote（以下、「本アプリ」といいます。）は、ユーザーのプライバシーを尊重し、
        個人情報および関連情報を適切に取り扱います。本ポリシーでは、
        本アプリにおける情報の取得、利用、管理について説明します。
      </p>

      <section>
        <h2>1. 取得する情報</h2>
        <ul>
          <li>Google アカウントに関連する基本情報</li>
          <li>ユーザーが連携を許可した Google サービス上の情報</li>
          <li>お問い合わせ時にユーザーが提供する情報</li>
          <li>アプリの利用状況に関する情報</li>
        </ul>
      </section>

      <section>
        <h2>2. 利用目的</h2>
        <ul>
          <li>本アプリの機能提供のため</li>
          <li>ユーザー認証およびアカウント連携のため</li>
          <li>ユーザーが利用する連携機能の実現のため</li>
          <li>サービス改善、不具合対応、サポート対応のため</li>
        </ul>
      </section>

      <section>
        <h2>3. Googleユーザーデータの取り扱い</h2>
        <p>
          本アプリは、Google API を通じて取得した情報を、ユーザーが明示的に
          利用する機能の提供に必要な範囲でのみ利用します。取得した Google
          ユーザーデータを、広告、販売、またはユーザーの同意なく第三者提供の
          目的では利用しません。
        </p>
      </section>

      <section>
        <h2>4. 第三者提供</h2>
        <p>
          本アプリは、法令に基づく場合を除き、ユーザーの同意なく取得した情報を
          第三者に提供しません。
        </p>
      </section>

      <section>
        <h2>5. 情報の管理</h2>
        <p>
          本アプリは、取得した情報について、不正アクセス、漏えい、改ざん等を
          防止するため、適切な管理に努めます。
        </p>
      </section>

      <section>
        <h2>6. ユーザーによる削除・連携解除</h2>
        <p>
          ユーザーは、Google アカウントとの連携解除や、必要に応じた情報削除の
          申請を行うことができます。ご希望の場合は、下記お問い合わせ先まで
          ご連絡ください。
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
        <p>制定日: 2026年3月15日</p>
      </section>

      <section>
        <ul>
          <li>
            <Link href="/tasknote">TaskNote へ戻る</Link>
          </li>
          <li>
            <Link href="/">トップページへ戻る</Link>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default TaskNotePrivacyPolicyPage