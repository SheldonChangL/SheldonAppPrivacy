import './PrivacyPolicy.css'
import {
  APP_NAME,
  CONTACT_EMAIL,
  DEVELOPER_NAME,
  LAST_UPDATED,
  PACKAGE_NAME,
  PLAY_STORE_URL,
} from '../constants'

/* ── TOC entries ─────────────────────────────────────────────────────────── */
const TOC_ITEMS = [
  { id: 'overview',     label: 'Overview' },
  { id: 'data',         label: 'Information We Collect' },
  { id: 'local-data',   label: 'Locally Stored Data' },
  { id: 'permissions',  label: 'Device Permissions' },
  { id: 'security',     label: 'Data Security' },
  { id: 'third-party',  label: 'Third-Party Services' },
  { id: 'retention',    label: 'Data Retention' },
  { id: 'rights',       label: 'Your Rights' },
  { id: 'children',     label: "Children's Privacy" },
  { id: 'changes',      label: 'Policy Changes' },
  { id: 'contact',      label: 'Contact Us' },
]

/* ── Reusable sub-components ─────────────────────────────────────────────── */
function SectionCard({
  id,
  icon,
  title,
  children,
}: {
  id: string
  icon: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="pp-section" id={id}>
      <div className="pp-section__head">
        <span className="pp-section__icon">{icon}</span>
        <h2 className="pp-section__title">{title}</h2>
      </div>
      <div className="pp-section__body">{children}</div>
    </section>
  )
}

function Highlight({
  variant,
  icon,
  children,
}: {
  variant: 'success' | 'warning' | 'info'
  icon: string
  children: React.ReactNode
}) {
  return (
    <div className={`pp-highlight pp-highlight--${variant}`}>
      <span className="pp-highlight__icon">{icon}</span>
      <span className="pp-highlight__text">{children}</span>
    </div>
  )
}

/* ── Main component ──────────────────────────────────────────────────────── */
export default function PrivacyPolicy() {
  return (
    <div className="pp-page">
      {/* ── Hero ── */}
      <header className="pp-hero">
        <div className="pp-hero__icon">🏠</div>
        <h1 className="pp-hero__title">Privacy Policy</h1>
        <p className="pp-hero__subtitle">{APP_NAME}</p>
        <div className="pp-hero__meta">
          <span>📅</span>
          <span>Last updated: {LAST_UPDATED}</span>
        </div>
      </header>

      {/* ── Offline badges ── */}
      <div className="pp-badge-row">
        <span className="pp-badge">🔒 100% Offline</span>
        <span className="pp-badge">📵 No Internet Required</span>
        <span className="pp-badge">🚫 No Data Collection</span>
        <span className="pp-badge">🔐 Encrypted Storage</span>
      </div>

      {/* ── Body: TOC + Content ── */}
      <div className="pp-body">

        {/* ── Sidebar TOC ── */}
        <nav className="pp-toc" aria-label="Table of contents">
          <div className="pp-toc__header">Contents</div>
          <ul className="pp-toc__list">
            {TOC_ITEMS.map(item => (
              <li key={item.id} className="pp-toc__item">
                <a href={`#${item.id}`} className="pp-toc__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Main content ── */}
        <main className="pp-content">

          {/* Intro card */}
          <div className="pp-intro-card">
            <p>
              This Privacy Policy describes how <strong>{DEVELOPER_NAME}</strong> ("we", "us",
              or "our") handles information in connection with the <strong>{APP_NAME}</strong>{' '}
              Android application (the "App").
            </p>
            <p>
              By using the App, you agree to the practices described in this policy. If you do
              not agree, please uninstall the App and discontinue use.
            </p>
          </div>

          {/* 1 — Overview */}
          <SectionCard id="overview" icon="🔒" title="Overview — Your Privacy First">
            <Highlight variant="success" icon="✅">
              <strong>{APP_NAME} is designed to be 100% offline.</strong> It requires{' '}
              <strong>no Internet connection</strong> and does not transmit any data to any
              server, cloud service, or third party — ever.
            </Highlight>
            <p>
              All data you enter — item names, purchase records, warranty dates, photos, and
              specifications — is stored exclusively on your device in an encrypted local
              database. Nothing leaves your phone.
            </p>
          </SectionCard>

          {/* 2 — Information We Collect */}
          <SectionCard id="data" icon="📋" title="Information We Collect">
            <Highlight variant="success" icon="✅">
              <strong>We do not collect any personal information.</strong> The App has no
              analytics, no crash-reporting SDK, no advertising network, and no telemetry of
              any kind.
            </Highlight>
            <p>
              The App does not collect, transmit, store remotely, or share any of the following:
            </p>
            <ul className="pp-list">
              <li>Your name, email address, or any contact information</li>
              <li>Device identifiers (IMEI, advertising ID, Android ID)</li>
              <li>Location data (GPS or network-based)</li>
              <li>Usage analytics or behavioral data</li>
              <li>Crash reports or diagnostic logs</li>
              <li>Photos, images, or files beyond what is stored locally on your device</li>
            </ul>
          </SectionCard>

          {/* 3 — Locally Stored Data */}
          <SectionCard id="local-data" icon="💾" title="Locally Stored Data">
            <p>
              All data created within the App is stored <strong>locally on your device only</strong>.
              This includes:
            </p>
            <ul className="pp-list">
              <li>Home asset records (name, category, brand, model, serial number, location)</li>
              <li>Purchase information (date, price, retailer)</li>
              <li>Warranty details and expiry dates</li>
              <li>Maintenance logs and service history</li>
              <li>Asset specifications and custom fields</li>
              <li>Photos captured or imported for each asset</li>
              <li>Backup ZIP files you export manually via the Settings screen</li>
            </ul>
            <Highlight variant="info" icon="📁">
              Photos and database files are stored in the App's private external storage
              directory (<code>getExternalFilesDir()</code>), which is accessible only to this
              App and is removed when you uninstall the App.
            </Highlight>
          </SectionCard>

          {/* 4 — Device Permissions */}
          <SectionCard id="permissions" icon="🔑" title="Device Permissions">
            <p>
              The App requests only the minimum permissions required to function. All
              permissions are used <strong>solely on-device</strong>.
            </p>

            <table className="pp-perm-table">
              <thead>
                <tr>
                  <th>Permission</th>
                  <th>Purpose</th>
                  <th>Optional?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="pp-perm-name">CAMERA</span></td>
                  <td>Capture photos of your assets and receipts for local storage</td>
                  <td>Yes — you can use the App without taking photos</td>
                </tr>
                <tr>
                  <td><span className="pp-perm-name">POST_NOTIFICATIONS</span></td>
                  <td>Display local reminders for upcoming warranty expirations and maintenance schedules</td>
                  <td>Yes — reminders are disabled if denied</td>
                </tr>
                <tr>
                  <td><span className="pp-perm-name">READ_MEDIA_IMAGES</span><br /><span className="pp-perm-name">READ_EXTERNAL_STORAGE</span></td>
                  <td>Select existing photos from your gallery to attach to an asset record</td>
                  <td>Yes — camera capture can be used instead</td>
                </tr>
              </tbody>
            </table>

            <Highlight variant="warning" icon="⚠️">
              The App <strong>does not</strong> declare the{' '}
              <code>INTERNET</code> permission and therefore{' '}
              <strong>cannot make any network requests</strong>, regardless of App behavior.
              This is enforced at the OS level by Android.
            </Highlight>
          </SectionCard>

          {/* 5 — Data Security */}
          <SectionCard id="security" icon="🛡️" title="Data Security">
            <p>
              We take security seriously. The local database is protected using
              industry-standard encryption:
            </p>
            <ul className="pp-list">
              <li>
                <strong>SQLCipher encryption</strong> — the local Room database is encrypted
                using AES-256 via the SQLCipher library
              </li>
              <li>
                <strong>Android Keystore</strong> — the encryption key is generated and stored
                in the Android Keystore, a hardware-backed secure enclave on supported devices,
                making it inaccessible to other apps
              </li>
              <li>
                <strong>No network attack surface</strong> — because the App has no Internet
                permission, your data cannot be exfiltrated remotely
              </li>
            </ul>
            <Highlight variant="info" icon="🔐">
              While no system is 100% secure, our air-gapped architecture significantly reduces
              the risk of unauthorized access compared to cloud-connected apps.
            </Highlight>
          </SectionCard>

          {/* 6 — Third-Party Services */}
          <SectionCard id="third-party" icon="🔗" title="Third-Party Services">
            <Highlight variant="success" icon="✅">
              <strong>{APP_NAME} uses no third-party analytics, advertising, or cloud SDKs.</strong>{' '}
              There are no Firebase, Google Analytics, Crashlytics, or similar services integrated
              into the App.
            </Highlight>
            <p>
              The only third-party libraries used are <strong>open-source, on-device only</strong>:
            </p>
            <ul className="pp-list">
              <li>
                <strong>Room</strong> (Google / Apache 2.0) — local database ORM; no network
                access
              </li>
              <li>
                <strong>SQLCipher for Android</strong> (Zetetic LLC / BSD) — database
                encryption; no network access
              </li>
              <li>
                <strong>CameraX</strong> (Google / Apache 2.0) — camera capture; images saved
                locally only
              </li>
              <li>
                <strong>WorkManager</strong> (Google / Apache 2.0) — background scheduling for
                local notifications only
              </li>
              <li>
                <strong>Coil</strong> (Coil Contributors / Apache 2.0) — image loading from
                local files only
              </li>
              <li>
                <strong>Hilt</strong> (Google / Apache 2.0) — dependency injection; no network
                access
              </li>
            </ul>
            <p>
              This App is distributed through the{' '}
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                Google Play Store
              </a>
              . Google Play's own privacy policy governs data collected by the Play Store
              platform itself, which is outside our control.
            </p>
          </SectionCard>

          {/* 7 — Data Retention */}
          <SectionCard id="retention" icon="🗂️" title="Data Retention">
            <p>
              All data is retained <strong>solely on your device</strong> for as long as you
              use the App. We have no access to your data and therefore no ability to retain or
              delete it on your behalf.
            </p>
            <p>
              Your data is <strong>automatically deleted</strong> in the following circumstances:
            </p>
            <ul className="pp-list">
              <li>You uninstall the App (Android removes the App's private storage)</li>
              <li>
                You manually delete records within the App (individual items or maintenance
                logs)
              </li>
              <li>
                You perform a factory reset or use Android's "Clear app data" option in
                Settings
              </li>
            </ul>
          </SectionCard>

          {/* 8 — Your Rights & Data Deletion */}
          <SectionCard id="rights" icon="⚖️" title="Your Rights &amp; Data Deletion">
            <p>
              Because all data is stored exclusively on your device, <strong>you have full
              control</strong> over your data at all times. You can:
            </p>
            <ul className="pp-list">
              <li>View all data you have entered directly within the App</li>
              <li>Edit or delete individual records at any time</li>
              <li>Export all your data as a ZIP backup or CSV via Settings</li>
              <li>Delete all App data by uninstalling the App</li>
            </ul>

            <h3>To delete all your data:</h3>
            <ol className="pp-steps">
              <li>
                Open your device's <strong>Settings</strong> app
              </li>
              <li>
                Navigate to <strong>Apps</strong> (or Application Manager)
              </li>
              <li>
                Find and tap <strong>{APP_NAME}</strong>
              </li>
              <li>
                Tap <strong>Storage &amp; cache</strong> → <strong>Clear storage</strong>
              </li>
              <li>
                Or simply <strong>Uninstall</strong> the App to remove all data permanently
              </li>
            </ol>

            <Highlight variant="info" icon="ℹ️">
              Alternatively, you can find {APP_NAME} on the{' '}
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                Google Play Store
              </a>{' '}
              and use the "Request app data deletion" feature in the App's data safety section.
              Since all data is local, deleting the App fully satisfies any deletion request.
            </Highlight>
          </SectionCard>

          {/* 9 — Children's Privacy */}
          <SectionCard id="children" icon="👶" title="Children's Privacy">
            <p>
              {APP_NAME} is a general-purpose home inventory application intended for adult
              homeowners and renters. It is <strong>not directed at children under the age
              of 13</strong>.
            </p>
            <p>
              We do not knowingly collect personal information from children. Because the App
              collects no personal information from any user, no special handling is required.
              If you believe a child has provided data through the App in a way that concerns
              you, please contact us at the address below.
            </p>
          </SectionCard>

          {/* 10 — Policy Changes */}
          <SectionCard id="changes" icon="📝" title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted
              on this page with an updated "Last updated" date. We encourage you to review this
              policy periodically.
            </p>
            <p>
              Continued use of the App after changes are posted constitutes your acceptance of
              the updated policy. For significant changes, we will endeavor to provide a
              prominent notice within the App.
            </p>
            <p>
              The current policy is always available at the URL linked from the App's Google
              Play Store listing.
            </p>
          </SectionCard>

          {/* 11 — Contact Us */}
          <SectionCard id="contact" icon="✉️" title="Contact Us">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or
              the handling of your data, please contact us:
            </p>

            <div className="pp-contact-card">
              <span className="pp-contact-card__icon">📧</span>
              <div>
                <div className="pp-contact-card__label">Privacy Inquiries</div>
                <div className="pp-contact-card__email">
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </div>
              </div>
            </div>

            <p style={{ marginTop: '16px' }}>
              <strong>Developer:</strong> {DEVELOPER_NAME}
              <br />
              <strong>App Package:</strong> <code>{PACKAGE_NAME}</code>
            </p>

            <p>
              We aim to respond to all legitimate privacy inquiries within{' '}
              <strong>30 days</strong>.
            </p>
          </SectionCard>

        </main>
      </div>

      {/* ── Footer ── */}
      <footer className="pp-footer">
        <p>
          <strong>{APP_NAME}</strong> — Privacy Policy
        </p>
        <p>
          Last updated: {LAST_UPDATED} · Developer: {DEVELOPER_NAME}
        </p>
        <p style={{ marginTop: '8px', fontSize: '0.78rem' }}>
          This app is 100% offline. No personal data is ever collected or transmitted.
        </p>
      </footer>
    </div>
  )
}
