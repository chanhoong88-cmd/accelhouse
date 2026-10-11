import ContactForm from '../components/ContactForm';

export const metadata = {
  title: 'Contact us',
  description: 'Write to the team at Accel House, Ritchie Clubhouse, Kuala Lumpur.'
};

export default function ContactPage() {
  return (
<main>
<section className="band on-brown hero">
  <div className="inner stack">
    <p className="eyebrow">Contact us</p>
    <h1>Write to the house</h1>
    <p className="tagline">Every message is read by the team at Accel House and answered in confidence.</p>
    <p className="place">Ritchie Clubhouse, Kuala Lumpur</p>
  </div>
</section>
<section className="band on-cream">
  <div className="inner">
    <p className="eyebrow">Who to write to</p>
    <h2 className="h-lg" style={{ marginTop: '14px' }}>Two addresses, one team</h2>
    <dl className="ledger" style={{ maxWidth: '820px', marginTop: '40px' }}>
      <div><dt>Membership</dt><dd><b className="addr">membership@accel-elite.asia</b><br />Invitations, applications and anything about your Accel Elite membership.</dd></div>
      <div><dt>General enquiries</dt><dd><b className="addr">enquiry@accel-elite.asia</b><br />Events, partnerships, press and everything else.</dd></div>
      <div><dt>The house</dt><dd>Accel House, Ritchie Clubhouse, Kuala Lumpur.<br />Visits are by appointment.</dd></div>
    </dl>
  </div>
</section>
<section className="band on-brown" id="write">
  <div className="inner invite">
    <div className="stack">
      <p className="eyebrow">Send a message</p>
      <h2 className="h-lg">Tell us what you need</h2>
      <p className="lede">Choose the subject closest to your enquiry and it will reach the right person. To apply for membership, request an invitation instead.</p>
      <p><a className="btn btn-quiet" href="/#invitation">Request an invitation</a></p>
    </div>
    <ContactForm />
  </div>
</section>
</main>
  );
}
