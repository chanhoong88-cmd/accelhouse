// The entrance: two lattice doors that part once when a visitor first arrives.
export default function Curtain() {
  return (
    <div className="curtain" aria-hidden="true">
      <div className="leaf l" />
      <div className="leaf r" />
      <img className="curtain-mark" src="/img/logo.png" alt="" />
    </div>
  );
}
