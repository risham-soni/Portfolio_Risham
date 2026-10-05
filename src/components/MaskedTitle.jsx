export default function MaskedTitle({ number, text, className = 'section-title uppercase' }) {
  return (
    <h2 className={className}>
      {number && <span className="text-dark-gray" style={{ marginRight: '0.5rem' }}>{number}</span>}
      {text}
    </h2>
  );
}
