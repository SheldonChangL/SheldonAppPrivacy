import './KoreanCoach.css'
import { useNavigate } from 'react-router-dom'
import {
  APP_NAME,
  CONTACT_EMAIL,
  DEVELOPER_NAME,
  LAST_UPDATED,
  PACKAGE_NAME,
  PLAY_STORE_URL,
} from '../korean-coach-constants'

const TOC_ITEMS = [
  { id: 'overview',    label: 'Overview' },
  { id: 'data',        label: 'Information We Collect' },
  { id: 'local-data',  label: 'Locally Stored Data' },
  { id: 'permissions', label: 'Device Permissions' },
  { id: 'speech',      label: 'Speech Recognition' },
  { id: 'security',    label: 'Data Security' },
  { id: 'third-party', label: 'Third-Party Services' },
  { id: 'retention',   label: 'Data Retention' },
  { id: 'rights',      label: 'Your Rights' },
  { id: 'children',    label: "Children's Privacy" },
  { id: 'changes',     label: 'Policy Changes' },
  { id: 'contact',     label: 'Contact Us' },
]

function Section({ id, icon, title, children }: {
  id: string; icon: string; title: string; children: React.ReactNode
}) {
  return (
    <section className="kc-section" id={id}>
      <div className="kc-section__head">
        <span className="kc-section__icon">{icon}</span>
        <h2 className="kc-section__title">{title}</h2>
      </div>
      <div className="kc-section__body">{children}</div>
    </section>
  )
}

function Hi({ v, icon, children }: {
  v: 'success' | 'warning' | 'info'; icon: string; children: React.ReactNode
}) {
  return (
    <div className={`kc-highlight kc-highlight--${v}`}>
      <span className="kc-highlight__icon">{icon}</span>
      <span className="kc-highlight__text">{children}</span>
    </div>
  )
}

export default function KoreanCoachPrivacyPolicy() {
  const navigate = useNavigate()
  return (
    <div className="kc-page">

      {/* ── Back link ── */}
      <a className="kc-back" href="#/" onClick={e => { e.preventDefault(); navigate('/') }}>
        ← All Apps
      </a>

      {/* ── Hero ── */}
      <header className="kc-hero">
        <div className="kc-hero__icon-wrap">
          가
          <span className="kc-hero__star">✨</span>
        </div>
        <h1 className="kc-hero__title">Privacy Policy</h1>
        <p className="kc-hero__subtitle">{APP_NAME}</p>
        <div className="kc-hero__meta">
          <span>📅</span>
          <span>Last updated: {LAST_UPDATED}</span>
        </div>
      </header>

      {/* ── Badges ── */}
      <div className="kc-badge-row">
        <span className="kc-badge">💾 Local-First Storage</span>
        <span className="kc-badge">🚫 No Analytics</span>
        <span className="kc-badge">🔐 No Account Required</span>
        <span className="kc-badge">🎙️ Mic for Pronunciation Only</span>
      </div>

      {/* ── Body ── */}
      <div className="kc-body">

        {/* TOC */}
        <nav className="kc-toc" aria-label="Table of contents">
          <div className="kc-toc__header">Contents</div>
          <ul className="kc-toc__list">
            {TOC_ITEMS.map(item => (
              <li key={item.id} className="kc-toc__item">
                <a href={`#${item.id}`} className="kc-toc__link">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content */}
        <main className="kc-content">

          <div className="kc-intro-card">
            <p>
              This Privacy Policy describes how <strong>{DEVELOPER_NAME}</strong> handles
              information in connection with the <strong>{APP_NAME}</strong> Android application.
            </p>
            <p>
              By using the App, you agree to the practices described here. If you do not agree,
              please uninstall the App and discontinue use.
            </p>
          </div>

          {/* 1 */}
          <Section id="overview" icon="🔒" title="Overview — Your Privacy First">
            <Hi v="success" icon="✅">
              <strong>{APP_NAME} stores all your learning progress locally on your device.</strong>{' '}
              We do not run servers, do not require an account, and do not transmit your personal
              information anywhere.
            </Hi>
            <p>
              The only external communication the App makes is through Android's built-in speech
              recognition service for pronunciation practice — this is disclosed in full below.
            </p>
          </Section>

          {/* 2 */}
          <Section id="data" icon="📋" title="Information We Collect">
            <Hi v="success" icon="✅">
              <strong>We do not collect any personal information.</strong> The App has no analytics
              SDK, no crash-reporting backend, no advertising network, and no telemetry.
            </Hi>
            <p>The App does not collect, transmit, or share:</p>
            <ul className="kc-list">
              <li>Your name, email address, or contact information</li>
              <li>Device identifiers (IMEI, advertising ID, Android ID)</li>
              <li>Location data</li>
              <li>Usage analytics or behavioral data</li>
              <li>Crash reports or diagnostic logs</li>
            </ul>
            <p>
              The name you enter during onboarding is stored <strong>locally only</strong> and used
              solely to personalise in-app greetings.
            </p>
          </Section>

          {/* 3 */}
          <Section id="local-data" icon="💾" title="Locally Stored Data">
            <p>All data created within the App is stored <strong>locally on your device</strong>. This includes:</p>
            <ul className="kc-list">
              <li>Display name and learning preferences (Hangul level, learning goal)</li>
              <li>Lesson completion and unlock status</li>
              <li>Quiz results and flashcard review history</li>
              <li>Study session records (date, duration)</li>
              <li>Daily challenge completion records</li>
              <li>Achievement unlock records</li>
              <li>Pronunciation attempt records (score and recognised text — no audio stored)</li>
            </ul>
            <Hi v="info" icon="📁">
              The database is stored in the App's private internal storage, accessible only to this
              App. It is removed automatically when you uninstall the App.
            </Hi>
          </Section>

          {/* 4 */}
          <Section id="permissions" icon="🔑" title="Device Permissions">
            <p>The App requests only the permissions required to function.</p>
            <table className="kc-perm-table">
              <thead>
                <tr>
                  <th>Permission</th>
                  <th>Purpose</th>
                  <th>Optional?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="kc-perm-name">RECORD_AUDIO</span></td>
                  <td>
                    Capture your voice during dialogue role-play exercises so Android's speech
                    recognition can score your pronunciation. Audio is not stored by the App.
                  </td>
                  <td>
                    Yes — all lesson content remains accessible without this permission; only
                    pronunciation practice is unavailable.
                  </td>
                </tr>
                <tr>
                  <td><span className="kc-perm-name">POST_NOTIFICATIONS</span></td>
                  <td>
                    Display local notifications for achievement unlocks and streak reminders.
                    All notifications are generated on-device.
                  </td>
                  <td>Yes — notifications are disabled if denied.</td>
                </tr>
              </tbody>
            </table>
            <Hi v="info" icon="ℹ️">
              The App does <strong>not</strong> declare the <code>INTERNET</code> permission and
              therefore cannot make network requests directly. The only external data flow is audio
              sent to Android's speech recognition service (see below).
            </Hi>
          </Section>

          {/* 5 */}
          <Section id="speech" icon="🎙️" title="Speech Recognition">
            <Hi v="warning" icon="⚠️">
              When you use pronunciation practice, your voice is processed by{' '}
              <strong>Android's built-in Speech Recognition service</strong> (typically Google
              Speech Recognition). This service may send audio to Google's servers for processing.
            </Hi>
            <ul className="kc-list">
              <li>
                The App uses Android's <code>SpeechRecognizer</code> API with the Korean language
                model (<code>ko-KR</code>).
              </li>
              <li>
                The recognised text is used only to calculate a pronunciation score locally. Neither
                the audio nor the recognised text is sent to our servers — we have none.
              </li>
              <li>
                Google's handling of speech data is governed by{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  Google's Privacy Policy
                </a>.
              </li>
              <li><strong>No audio is ever stored</strong> by the App.</li>
            </ul>
            <Hi v="info" icon="ℹ️">
              If speech recognition is unavailable on your device, the App automatically falls back
              to an on-device scoring method that requires no microphone access.
            </Hi>
          </Section>

          {/* 6 */}
          <Section id="security" icon="🛡️" title="Data Security">
            <ul className="kc-list">
              <li>
                <strong>Private storage</strong> — the Room database is stored in the App's private
                internal storage, inaccessible to other apps without root access.
              </li>
              <li>
                <strong>No network attack surface</strong> — without the <code>INTERNET</code>{' '}
                permission, your data cannot be exfiltrated remotely by the App.
              </li>
              <li>
                <strong>No cloud backup</strong> — the App does not opt in to Android's automatic
                cloud backup for its database.
              </li>
            </ul>
          </Section>

          {/* 7 */}
          <Section id="third-party" icon="🔗" title="Third-Party Services">
            <Hi v="success" icon="✅">
              <strong>{APP_NAME} uses no third-party analytics, advertising, or crash-reporting SDKs.</strong>
            </Hi>
            <p>Open-source libraries used (all on-device only):</p>
            <ul className="kc-list">
              <li><strong>Room</strong> (Google / Apache 2.0) — local database ORM</li>
              <li><strong>Hilt</strong> (Google / Apache 2.0) — dependency injection</li>
              <li><strong>WorkManager</strong> (Google / Apache 2.0) — local notification scheduling</li>
              <li><strong>Jetpack Compose</strong> (Google / Apache 2.0) — UI framework</li>
            </ul>
            <p>
              <strong>Android Speech Recognition (Google)</strong> is used for pronunciation
              scoring as described above. This is the only external service the App interacts with,
              and only when you actively use pronunciation practice.
            </p>
            <p>
              This App is distributed through the{' '}
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">Google Play Store</a>.
              Google Play's own privacy policy governs data collected by the platform itself.
            </p>
          </Section>

          {/* 8 */}
          <Section id="retention" icon="🗂️" title="Data Retention">
            <p>
              All data is retained <strong>solely on your device</strong> for as long as you use the
              App. We have no access to your data.
            </p>
            <p>Your data is automatically deleted when you:</p>
            <ul className="kc-list">
              <li>Uninstall the App</li>
              <li>Use "Clear app data" in Android Settings</li>
              <li>Perform a factory reset</li>
            </ul>
          </Section>

          {/* 9 */}
          <Section id="rights" icon="⚖️" title="Your Rights &amp; Data Deletion">
            <p>Because all data is stored on your device, <strong>you have full control</strong> at all times.</p>
            <h3>To delete all your data:</h3>
            <ol className="kc-steps">
              <li>Open your device's <strong>Settings</strong></li>
              <li>Navigate to <strong>Apps</strong></li>
              <li>Find and tap <strong>{APP_NAME}</strong></li>
              <li>Tap <strong>Storage &amp; cache → Clear storage</strong></li>
              <li>Or simply <strong>Uninstall</strong> the App</li>
            </ol>
            <Hi v="info" icon="ℹ️">
              You can also use the "Request app data deletion" feature on the{' '}
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">Google Play Store listing</a>.
              Since all data is local, uninstalling the App fully satisfies any deletion request.
            </Hi>
          </Section>

          {/* 10 */}
          <Section id="children" icon="👶" title="Children's Privacy">
            <p>
              {APP_NAME} is a language learning app intended for general audiences. It is{' '}
              <strong>not directed at children under 13</strong>. We do not knowingly collect
              personal information from children.
            </p>
          </Section>

          {/* 11 */}
          <Section id="changes" icon="📝" title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated "Last updated" date. Continued use of the App after changes
              constitutes acceptance of the updated policy.
            </p>
          </Section>

          {/* 12 */}
          <Section id="contact" icon="✉️" title="Contact Us">
            <div className="kc-contact-card">
              <span className="kc-contact-card__icon">📧</span>
              <div>
                <div className="kc-contact-card__label">Privacy Inquiries</div>
                <div className="kc-contact-card__email">
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </div>
              </div>
            </div>
            <p style={{ marginTop: '16px', fontSize: '0.9rem', color: 'var(--kc-text-sec)' }}>
              <strong style={{ color: 'var(--kc-text)' }}>Developer:</strong> {DEVELOPER_NAME}<br />
              <strong style={{ color: 'var(--kc-text)' }}>App Package:</strong>{' '}
              <code>{PACKAGE_NAME}</code>
            </p>
            <p style={{ fontSize: '0.9rem' }}>
              We aim to respond to all legitimate privacy inquiries within <strong>30 days</strong>.
            </p>
          </Section>

        </main>
      </div>

      {/* ── Footer ── */}
      <footer className="kc-footer">
        <p><strong>{APP_NAME}</strong> — Privacy Policy</p>
        <p>Last updated: {LAST_UPDATED} · Developer: {DEVELOPER_NAME}</p>
        <p style={{ marginTop: '8px', fontSize: '0.76rem' }}>
          Your learning progress is stored locally on your device. We do not collect personal data.
        </p>
      </footer>

    </div>
  )
}
