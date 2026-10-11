
export const metadata = {
  title: 'Questions, answered',
  description: 'What prospective members ask most about Accel Elite and Accel House.'
};

export default function FaqPage() {
  return (
<main>
<section className="band on-brown hero">
  <div className="inner stack">
    <p className="eyebrow">Before you apply</p>
    <h1>Questions, answered</h1>
    <p className="tagline">What prospective members ask most about Accel Elite and Accel House.</p>
  </div>
</section>
<section className="band on-cream">
  <div className="inner">
    <div className="faq-group"><p className="eyebrow">Joining</p>
    <div className="faq">
      <details><summary>Is Accel Elite open to anyone, or by invitation?</summary><p className="ans">By invitation only. Every request is vetted personally by the membership team, usually within 7 to 14 working days. Membership is capped, and once every place is filled new requests join a waitlist.</p></details>
      <details><summary>What is the difference between Accel Elite and Accel House?</summary><p className="ans">Accel Elite is the membership. Accel House is the clubhouse it opens, at Ritchie Clubhouse in Kuala Lumpur.</p></details>
      <details><summary>What is Founding membership?</summary><p className="ans">Founding membership is offered by special invitation to the first members of the house, in limited number. Founding standing stays with you for the life of your membership, and carries a further allocation of club credits each year and privileges reserved for Founding Members.</p></details>
      <details><summary>Is membership a one-time payment?</summary><p className="ans">There is a one-time joining fee and an annual subscription. Both are shared privately with invited applicants, and are not refundable once membership is approved.</p></details>
    </div></div>
    <div className="faq-group"><p className="eyebrow">Using the house</p>
    <div className="faq">
      <details><summary>What is included with my membership?</summary><p className="ans">The members lounge, the cigar bar and terrace, the dining rooms and the private lounges are yours whenever the house is open. The board room, meeting rooms, private dining, golf simulator and recovery suites are reserved through the host.</p></details>
      <details><summary>How do club credits work?</summary><p className="ans">Club credits come with your membership each year and are used to reserve the rooms that are not included. With partner venues, members enjoy preferred rates instead of spending credits. Unused credits do not carry past your membership anniversary.</p></details>
      <details><summary>Can I bring guests?</summary><p className="ans">Yes. Members may bring up to four accompanying guests into the house. Founding Members may bring five.</p></details>
      <details><summary>How do I book a room, a table or a recovery suite?</summary><p className="ans">Through the membership host, who arranges rooms, tables, recovery suites and drivers for you.</p></details>
    </div></div>
    <div className="faq-group"><p className="eyebrow">Beyond the house</p>
    <div className="faq">
      <details><summary>What is the Accel Collection?</summary><p className="ans">A set of private residences in Kuala Lumpur, Genting Highlands and Fraser's Hill. Members have priority access and preferential rates.</p></details>
      <details><summary>What is Accel Reserve?</summary><p className="ans">A private collection that sits apart from the Accel Collection. Access is strictly by invitation.</p></details>
    </div></div>
  </div>
</section>
<section className="band on-brown">
  <div className="inner stack">
    <p className="eyebrow">Still deciding</p>
    <h2 className="h-lg">Ask the membership team</h2>
    <p className="lede">Anything not covered here is best answered in person. Write to us and the team will reply in confidence.</p>
    <p><a className="btn" href="/#invitation">Request an invitation</a> &nbsp; <a className="btn btn-quiet" href="/contact">Contact us</a></p>
  </div>
</section>
</main>
  );
}
