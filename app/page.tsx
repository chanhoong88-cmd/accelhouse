import type { Metadata } from 'next';
import InviteForm from './components/InviteForm';

export const metadata: Metadata = {
  title: { absolute: "Accel House | Private Members' Club in Kuala Lumpur" },
  description:
    "A private members' club in Kuala Lumpur for founders and CEOs. Board room, private dining, cigar bar, golf simulator and recovery suites. By invitation.",
  alternates: { canonical: '/' }
};

export default function HomePage() {
  return (
<main id="top">


<section className="split on-brown hero">
  <div className="split-words">
    <p className="eyebrow">A private members' house</p>
    <h1>Accel House</h1>
    <p className="tagline">Where established business people work, connect, host and belong.</p>
    <div className="hero-foot">
      <a className="btn" href="#invitation">Request an invitation</a>
      <ul className="pillars-line"><li>Business</li><li>Social</li><li>Recovery</li></ul>
    </div>
    <p className="place">A private members&apos; club at Ritchie Clubhouse, Kuala Lumpur</p>
  </div>
  <div className="split-photo"><img src="/img/door.jpg" alt="The bronze lattice doors at the entrance to Accel House" /></div>
</section>


<section className="split on-cream" id="house">
  <div className="split-words">
    <p className="eyebrow">The idea</p>
    <h2 className="h-xl">One house.<br />Three reasons to return.</h2>
    <p className="lede">Accel House is a private members' club in Kuala Lumpur that brings private business space, considered hospitality and dedicated recovery into one setting. A meeting can become a meal, an introduction or an hour to recharge, without leaving the building.</p>
    <p className="aside">Every visit ends with a reason for the next one.</p>
  </div>
  <div className="split-photo"><img src="/img/lounge.jpg" alt="The members lounge" /></div>
</section>


<section className="band on-brown">
  <div className="inner">
    <h2 className="h-lg">The three pillars</h2>
    <div className="trio">
      <a href="#business"><img src="/img/business.jpg" alt="A meeting in the board room" />
        <p className="eyebrow">Business</p><h3 className="h-md">Meet with purpose</h3>
        <p>Board room, meeting rooms and the CEO Roundtable.</p></a>
      <a href="#social"><img src="/img/social.jpg" alt="The bar in the members lounge" />
        <p className="eyebrow">Social</p><h3 className="h-md">Gather and connect</h3>
        <p>Members lounge, private dining, cigar bar, wine cellar and golf.</p></a>
      <a href="#recovery"><img src="/img/recovery.jpg" alt="A private recovery suite" />
        <p className="eyebrow">Recovery</p><h3 className="h-md">Make room to recharge</h3>
        <p>Three private recovery suites and therapy.</p></a>
    </div>
  </div>
</section>


<section className="split photo-left on-cream" id="business">
  <div className="split-photo"><img src="/img/boardroom.jpg" alt="The board room" /></div>
  <div className="split-words">
    <p className="eyebrow">Business</p>
    <h2 className="h-lg">Impress your distinguished guests</h2>
    <p className="lede">Bring a guest, partner or principal into a space that speaks for you, and sets the tone before the meeting begins.</p>
    <dl className="ledger">
      <div><dt>Board room</dt><dd>Presentations, negotiations and signings</dd></div>
      <div><dt>Meeting rooms</dt><dd>Two rooms for working sessions, with display and video conferencing</dd></div>
      <div><dt>Private lounges</dt><dd>Quiet corners and enclosed rooms for a confidential conversation</dd></div>
      <div><dt>Arrival</dt><dd>Chauffeured pickup by the Accel ground fleet</dd></div>
    </dl>
  </div>
</section>

<section className="band on-brown">
  <div className="inner">
    <div className="panel" style={{ marginTop: '0' }}>
      <div className="stack">
        <p className="eyebrow">Business, monthly</p>
        <h2 className="h-lg">The CEO Roundtable</h2>
        <p className="lede">A closed-door session where members bring real decisions to a small table of peers who have faced them before.</p>
        <dl className="ledger">
          <div><dt>Who</dt><dd>Ten to twelve CEOs and founders, matched across industries</dd></div>
          <div><dt>How often</dt><dd>Monthly, on a fixed date members plan around</dd></div>
          <div><dt>Format</dt><dd>One theme, guided by a host-moderator</dd></div>
          <div><dt>After</dt><dd>The table moves straight into private dining</dd></div>
        </dl>
      </div>
      <img src="/img/roundtable.jpg" alt="A host addressing members at a round table" />
    </div>
  </div>
</section>


<section className="split on-cream" id="social">
  <div className="split-words">
    <p className="eyebrow">Social</p>
    <h2 className="h-lg">Where the conversation continues</h2>
    <p className="lede">Business rarely ends at the board room door. Private dining gives members a discreet table to carry a discussion forward, host a client or meet someone new.</p>
    <dl className="ledger">
      <div><dt>Members lounge</dt><dd>A bar, lounge seating and quiet nooks, open to every member</dd></div>
      <div><dt>Dining rooms</dt><dd>Three dining rooms, each seating one hosted table</dd></div>
      <div><dt>Introductions</dt><dd>The host seats members who should know each other</dd></div>
    </dl>
  </div>
  <div className="split-photo"><img src="/img/dining.jpg" alt="A curved banquette in the dining room" /></div>
</section>

<section className="band on-brown">
  <div className="inner">
    <p className="eyebrow">Social</p>
    <h2 className="h-lg" style={{ marginTop: '14px' }}>Spaces that keep members in the house</h2>
    <div className="trio">
      <figure><img src="/img/cigar.jpg" alt="The cigar bar with its walk-in humidor" />
        <h3 className="h-md">Cigar bar and terrace</h3>
        <p>A walk-in humidor, member lockers, a barber and an open-air terrace for long conversations.</p></figure>
      <figure><img src="/img/golf.jpg" alt="The golf simulator suite" />
        <h3 className="h-md">Golf simulator</h3>
        <p>A relaxed way to host a client or settle a rivalry.</p></figure>
      <figure><img src="/img/winecellar.jpg" alt="The glass-fronted wine cellar" style={{ objectPosition: '50% 42%' }} />
        <h3 className="h-md">Wine cellar</h3>
        <p>A glass-fronted cellar at the heart of the clubhouse, kept at temperature.</p></figure>
    </div>
  </div>
</section>


<section className="band on-cream" id="recovery">
  <div className="inner">
    <p className="eyebrow">Recovery</p>
    <h2 className="h-lg" style={{ marginTop: '14px' }}>Recovery keeps leaders coming back</h2>
    <div className="mosaic">
      <div className="mosaic-photos">
        <img src="/img/suite1.jpg" alt="A recovery suite with soaking pool, sauna and steam room" />
        <img src="/img/well2.jpg" alt="A relaxation lounge beside the pool" />
        <img src="/img/well3.jpg" alt="Treatment rooms and daybeds" />
      </div>
      <div className="stack">
        <p className="lede">A quieter part of the house to restore focus. There are three suites, each private and reserved ahead for one member, a couple or a small group.</p>
        <dl className="ledger">
          <div><dt>Suites</dt><dd>Soaking pool, sauna and steam room, with a private shower and changing area</dd></div>
          <div><dt>Therapy</dt><dd>Massage and treatments by the house team, booked around the day</dd></div>
          <div><dt>Lounge</dt><dd>Daybeds and refreshments before and after</dd></div>
          <div><dt>Ritual</dt><dd>A recovery slot after each roundtable</dd></div>
        </dl>
      </div>
    </div>
  </div>
</section>


<section className="split photo-left on-brown" id="circle">
  <div className="split-photo"><img src="/img/community.jpg" alt="Members in conversation over lunch" /></div>
  <div className="split-words">
    <p className="eyebrow">The community</p>
    <h2 className="h-lg">A room of established peers</h2>
    <p className="lede">Built for founders, CEOs and senior decision-makers who value discretion and the calibre of the people around them.</p>
    <dl className="ledger">
      <div><dt>By invitation</dt><dd>Members are proposed and vetted, so every introduction starts from trust.</dd></div>
      <div><dt>Hosted</dt><dd>A membership host knows members' interests and makes the right introductions.</dd></div>
      <div><dt>Limited</dt><dd>Membership is capped, so the circle stays known and trusted.</dd></div>
      <div><dt>Guests</dt><dd>Members may bring up to four accompanying guests.</dd></div>
    </dl>
  </div>
</section>


<section className="band on-brown" style={{ borderTop: '1px solid var(--line-brown)' }}>
  <div className="inner">
    <p className="eyebrow">The members' calendar</p>
    <h2 className="h-lg" style={{ marginTop: '14px' }}>A year-round rhythm</h2>
    <div className="calendar">
      <div><span>Rhythm</span><span>What happens</span><span>Why members return</span></div>
      <div><span className="when">Weekly</span><span>Lounge hours, recovery bookings, cigar and golf evenings</span><span className="why">A routine that fits the working week</span></div>
      <div><span className="when">Monthly</span><span>CEO Roundtable followed by private dinner</span><span className="why">A fixed date peers plan around</span></div>
      <div><span className="when">Quarterly</span><span>Industry dinners and guest-speaker evenings</span><span className="why">New faces and new introductions</span></div>
      <div><span className="when">Annually</span><span>Members' gathering and Accel Collection escapes</span><span className="why">A shared milestone for the community</span></div>
    </div>
  </div>
</section>


<section className="band on-cream" id="privileges">
  <div className="inner">
    <p className="eyebrow">Privileges</p>
    <h2 className="h-lg" style={{ marginTop: '14px' }}>What a member holds</h2>
    <div className="privs">
      <div className="priv"><h3 className="h-md">The CEO Roundtable</h3><p>A monthly closed-door table of ten to twelve peers, followed by dinner.</p></div>
      <div className="priv"><h3 className="h-md">Business networking</h3><p>Members' dinners and evenings where introductions are made deliberately.</p></div>
      <div className="priv"><h3 className="h-md">Industry matching</h3><p>The membership team pairs you with the members and industries you want to reach.</p></div>
      <div className="priv"><h3 className="h-md">Priority access to the Accel Collection</h3><p>First call on stays across the Collection's private residences.</p><a href="/collection">View the Collection</a></div>
      <div className="priv"><h3 className="h-md">Partner privileges</h3><p>Member rates with a circle of partners in dining, fitness, cigars and wellness.</p></div>
      <div className="priv"><h3 className="h-md">Private dining events and meetings</h3><p>Host your own table or meeting at the house, arranged by the team.</p></div>
    </div>
    <div className="guest"><p className="eyebrow">Guest privilege</p><p>Bring up to four accompanying guests into the house. Founding Members bring five.</p></div>
  </div>
</section>


<section className="band on-cream" id="membership" style={{ borderTop: '1px solid var(--line-cream)' }}>
  <div className="inner">
    <p className="eyebrow">Accel Elite membership</p>
    <h2 className="h-xl" style={{ marginTop: '14px' }}>What your membership opens</h2>
    <p className="lede" style={{ marginTop: '22px' }}>Accel Elite is the membership. Accel House is where it lives. Four parts of the house are yours whenever it is open. The others are reserved through the membership host using the club credits that come with your membership.</p>

    <div className="directory">
      <div><span className="room">Members lounge with bar</span><span className="pillar">Social</span><span className="access included">Included</span></div>
      <div><span className="room">Cigar bar and terrace</span><span className="pillar">Social</span><span className="access included">Included</span></div>
      <div><span className="room">Dining rooms</span><span className="pillar">Social</span><span className="access included">Included</span></div>
      <div><span className="room">Private lounges</span><span className="pillar">Business</span><span className="access included">Included</span></div>
      <div><span className="room">Private dining, hosted table</span><span className="pillar">Social</span><span className="access">Reserved with club credits</span></div>
      <div><span className="room">Golf simulator</span><span className="pillar">Social</span><span className="access">Reserved with club credits</span></div>
      <div><span className="room">Board room</span><span className="pillar">Business</span><span className="access">Reserved with club credits</span></div>
      <div><span className="room">Meeting rooms</span><span className="pillar">Business</span><span className="access">Reserved with club credits</span></div>
      <div><span className="room">Recovery suites and therapy</span><span className="pillar">Recovery</span><span className="access">Reserved with club credits</span></div>
    </div>
    <p className="fine">Members also have the concierge, valet parking, the Founders Table, business networking dinners, the members' calendar, the ground fleet and preferential rates across the Accel Collection.</p>

    <div className="tiers">
      <div className="tier founding">
        <p className="eyebrow">By special invitation</p>
        <h3 className="h-lg">Founding Member</h3>
        <p>For the first members of the house. Founding standing stays with you for the life of your membership.</p>
        <ul>
          <li>Everything in Elite membership</li>
          <li>A further allocation of club credits every year</li>
          <li>Five accompanying guests</li>
          <li>A limited number of places</li>
        </ul>
      </div>
      <div className="tier">
        <p className="eyebrow">By invitation</p>
        <h3 className="h-lg">Elite Member</h3>
        <p>Full membership of Accel House and a place in the members' calendar.</p>
        <ul>
          <li>The lounge, cigar bar, dining rooms and private lounges, included</li>
          <li>Club credits each year for the reserved rooms</li>
          <li>Four accompanying guests</li>
          <li>Priority access to the Accel Collection</li>
        </ul>
      </div>
    </div>
    <p className="fine">Joining fee and annual subscription are shared privately with invited applicants.</p>

    <ol className="steps">
      <li><h3 className="h-md">Request an invitation</h3><p>Tell us who you are and which member is proposing you.</p></li>
      <li><h3 className="h-md">The membership team reviews</h3><p>Every request is vetted by the membership team, usually within 7 to 14 working days.</p></li>
      <li><h3 className="h-md">Receive your invitation</h3><p>The membership team replies in writing with your terms.</p></li>
    </ol>
  </div>
</section>


<section className="split photo-left on-cream" style={{ borderTop: '1px solid var(--line-cream)' }}>
  <div className="split-photo"><img src="/img/fleet.jpg" alt="A chauffeur opening the door of a member's car" /></div>
  <div className="split-words">
    <p className="eyebrow">Beyond the house</p>
    <h2 className="h-lg">Membership that travels with you</h2>
    <dl className="ledger">
      <div><dt>Accel Collection</dt><dd>Priority access and preferential rates at the Collection's private residences</dd></div>
      <div><dt>Ground fleet</dt><dd>Private driver arrangements for members and their guests</dd></div>
      <div><dt>Concierge</dt><dd>One host to arrange rooms, tables and introductions</dd></div>
    </dl>
    <p><a className="btn" href="/collection">View the Accel Collection</a></p>
  </div>
</section>


<section className="band on-brown" id="invitation">
  <div className="inner invite">
    <div className="stack">
      <img src="/img/logo.png" alt="" style={{ height: '86px', width: 'auto', alignSelf: 'flex-start' }} />
      <h2 className="h-xl">Meet with purpose.<br />Dine with peers.<br />Recover, and return.</h2>
      <p className="lede">Membership is by invitation. Leave your details and the membership team will reply in confidence, usually within 7 to 14 working days.</p>
      <p className="contact-line">Membership: <b>membership@accel-elite.asia</b><br />General enquiries: <b>enquiry@accel-elite.asia</b></p>
    </div>
    <InviteForm />
  </div>
</section>
</main>
  );
}
