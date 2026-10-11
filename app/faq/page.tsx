import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Membership Questions | Accel House, Kuala Lumpur' },
  description:
    'How Accel Elite membership works: joining by invitation, what is included at Accel House, club credits, guests, and the Accel Collection.',
  alternates: { canonical: '/faq' }
};

// Edit questions and answers here. The same list is shown on the page and
// given to Google as structured FAQ data, so the two can never disagree.
const groups: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "Joining",
    items: [
      {
        q: "Is Accel Elite open to anyone, or by invitation?",
        a: "By invitation only. Every request is vetted personally by the membership team, usually within 7 to 14 working days. Membership is capped, and once every place is filled new requests join a waitlist."
      },
      {
        q: "What is the difference between Accel Elite and Accel House?",
        a: "Accel Elite is the membership. Accel House is the clubhouse it opens, at Ritchie Clubhouse in Kuala Lumpur."
      },
      {
        q: "What is Founding membership?",
        a: "Founding membership is offered by special invitation to the first members of the house, in limited number. Founding standing stays with you for the life of your membership, and carries a further allocation of club credits each year and privileges reserved for Founding Members."
      },
      {
        q: "Is membership a one-time payment?",
        a: "There is a one-time joining fee and an annual subscription. Both are shared privately with invited applicants, and are not refundable once membership is approved."
      },
    ]
  },
  {
    title: "Using the house",
    items: [
      {
        q: "What is included with my membership?",
        a: "The members lounge, the cigar bar and terrace, the dining rooms and the private lounges are yours whenever the house is open. The board room, meeting rooms, private dining, golf simulator and recovery suites are reserved through the host."
      },
      {
        q: "How do club credits work?",
        a: "Club credits come with your membership each year and are used to reserve the rooms that are not included. With partner venues, members enjoy preferred rates instead of spending credits. Unused credits do not carry past your membership anniversary."
      },
      {
        q: "Can I bring guests?",
        a: "Yes. Members may bring up to four accompanying guests into the house. Founding Members may bring five."
      },
      {
        q: "How do I book a room, a table or a recovery suite?",
        a: "Through the membership host, who arranges rooms, tables, recovery suites and drivers for you."
      },
    ]
  },
  {
    title: "Beyond the house",
    items: [
      {
        q: "What is the Accel Collection?",
        a: "A set of private residences in Kuala Lumpur, Genting Highlands and Fraser's Hill. Members have priority access and preferential rates."
      },
      {
        q: "What is Accel Reserve?",
        a: "A private collection that sits apart from the Accel Collection. Access is strictly by invitation."
      },
    ]
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: groups.flatMap((g) =>
    g.items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } }))
  )
};

export default function FaqPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <section className="band on-brown hero">
        <div className="inner stack">
          <p className="eyebrow">Before you apply</p>
          <h1>Questions, answered</h1>
          <p className="tagline">What prospective members ask most about Accel Elite and Accel House.</p>
        </div>
      </section>
      <section className="band on-cream">
        <div className="inner">
          {groups.map((g) => (
            <div className="faq-group" key={g.title}>
              <p className="eyebrow">{g.title}</p>
              <div className="faq">
                {g.items.map((i) => (
                  <details key={i.q}>
                    <summary>{i.q}</summary>
                    <p className="ans">{i.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
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
