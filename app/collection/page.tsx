
export const metadata = {
  title: 'The Accel Collection',
  description: 'Private residences held for Accel Elite members first, and Accel Reserve, by invitation only.'
};

export default function CollectionPage() {
  return (
<main>
<section className="band on-brown hero">
  <div className="inner stack">
    <p className="eyebrow">Beyond the house</p>
    <h1>The Accel Collection</h1>
    <p className="tagline">Private residences with your own host, chef and chauffeur. Work when you must. Restore in between.</p>
    <p className="place">Held for Accel Elite members first</p>
  </div>
</section>
<section className="band on-cream">
  <div className="inner">
    <p className="eyebrow">The residences</p>
    <h2 className="h-lg" style={{ marginTop: '14px' }}>Five addresses your membership reaches</h2>
    <div className="props">
      <article className="prop big">
        <div className="prop-photo photo"><img src="/img/p-rompin.jpg" alt="Rompin House" style={{ objectPosition: 'center' }} /></div>
        <p className="eyebrow">Fraser's Hill</p>
        <h3 className="h-md">Rompin House</h3>
        <p>A colonial cottage with a garden-to-table kitchen.</p>
        <ul className="tags"><li>Cottage stay</li><li>Highland</li><li>Slow living</li></ul>
      </article>
      <article className="prop big">
        <div className="prop-photo photo"><img src="/img/p-dani.jpg" alt="Villa Dani" style={{ objectPosition: 'center' }} /></div>
        <p className="eyebrow">Dani Hill, Genting Highlands</p>
        <h3 className="h-md">Villa Dani</h3>
        <p>A highland estate for celebrations and stays.</p>
        <ul className="tags"><li>Heritage</li><li>Privacy</li><li>Celebration</li><li>Retreat</li></ul>
      </article>
      <article className="prop ">
        <div className="prop-photo photo"><img src="/img/p-mansion.jpg" alt="The Mansion" style={{ objectPosition: '70% 62%' }} /></div>
        <p className="eyebrow">Dani Hill, Genting Highlands</p>
        <h3 className="h-md">The Mansion</h3>
        <p>A heritage residence for private celebrations and retreats.</p>
        <ul className="tags"><li>Heritage</li><li>Privacy</li><li>Celebration</li><li>Retreat</li></ul>
      </article>
      <article className="prop ">
        <div className="prop-photo photo"><img src="/img/p-ritchie.jpg" alt="Ritchie House" style={{ objectPosition: 'center' }} /></div>
        <p className="eyebrow">Kuala Lumpur</p>
        <h3 className="h-md">Ritchie House</h3>
        <p>A private sanctuary in the hills of the city.</p>
        <ul className="tags"><li>Private estate</li><li>Business lounges</li><li>Wellness sanctuary</li></ul>
      </article>
      <article className="prop ">
        <div className="prop-photo photo"><img src="/img/p-pool.jpg" alt="The Crest" style={{ objectPosition: 'center' }} /></div>
        <p className="eyebrow">Taman U-Thant, Kuala Lumpur</p>
        <h3 className="h-md">The Crest</h3>
        <p>A sky residence with a penthouse lounge and pool above the city.</p>
        <ul className="tags"><li>Skydeck</li><li>Infinity pool</li><li>Penthouse lounge</li></ul>
      </article>
    </div>
  </div>
</section>
<section className="band on-brown" id="reserve">
  <div className="inner reserve">
    <div className="reserve-mark"><img src="/img/c-prive8.jpg" alt="Privé 8 emblem" /></div>
    <div className="stack">
      <p className="eyebrow">Accel Reserve</p>
      <h2 className="h-xl">Privé 8</h2>
      <p className="aside">A private collection. Access is strictly by invitation.</p>
      <p className="lede">Accel Reserve sits apart from the Collection. Privé 8 is its first residence: a skydeck with an oval pool and a penthouse lounge. It is not offered for booking, and invitations are extended by the house.</p>
      <ul className="tags"><li>Skydeck</li><li>Oval pool</li><li>Penthouse lounge</li><li>By invitation only</li></ul>
    </div>
  </div>
</section>
<section className="band on-cream">
  <div className="inner stack">
    <p className="eyebrow">For members</p>
    <h2 className="h-lg">Priority access, arranged by your host</h2>
    <dl className="ledger" style={{ maxWidth: '760px' }}>
      <div><dt>Priority</dt><dd>First call on dates across the Collection, ahead of general release</dd></div>
      <div><dt>Member rates</dt><dd>Preferential rates on every stay</dd></div>
      <div><dt>Arranged</dt><dd>Your host books the residence, the table and the driver</dd></div>
    </dl>
    <p><a className="btn" href="/#invitation">Request an invitation</a></p>
  </div>
</section>
</main>
  );
}
