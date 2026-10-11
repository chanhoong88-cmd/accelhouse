import { ENQUIRY_EMAIL, MEMBERSHIP_EMAIL, MEMBER_LOGIN_URL } from '@/lib/site';

export default function Footer() {
  return (
    <footer>
      <div className="foot">
        <div className="foot-brand">
          <img src="/img/logo.png" alt="Accel Elite" />
          <p>
            Accel House is the private clubhouse of Accel Elite, entered by invitation only. Membership is personal and
            non-transferable.
          </p>
        </div>
        <nav className="foot-col" aria-label="Explore">
          <h2>Explore</h2>
          <a href="/#house">The House</a>
          <a href="/#privileges">Privileges</a>
          <a href="/#membership">Membership</a>
          <a href="/collection">Accel Collection</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact us</a>
          <a href={MEMBER_LOGIN_URL}>Member sign in</a>
        </nav>
        <div className="foot-col">
          <h2>Contact</h2>
          <span className="k">Membership</span>
          <a className="v" href={`mailto:${MEMBERSHIP_EMAIL}`}>{MEMBERSHIP_EMAIL}</a>
          <span className="k">General enquiries</span>
          <a className="v" href={`mailto:${ENQUIRY_EMAIL}`}>{ENQUIRY_EMAIL}</a>
        </div>
        <div className="foot-col">
          <h2>Address</h2>
          <span>Accel House</span>
          <span>Ritchie Clubhouse</span>
          <span>Persiaran Ritchie, Taman U-Thant</span>
          <span>Kuala Lumpur</span>
          <span className="k" style={{ marginTop: 10 }}>Visits by appointment</span>
        </div>
      </div>
      <div className="foot-bottom">
        <span>Accel House is managed by Accel Elite Sdn. Bhd. · Registration No. 202601035372 (1697467-P)</span>
      </div>
    </footer>
  );
}
