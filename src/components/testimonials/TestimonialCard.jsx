export default function TestimonialCard({ testimonial }) {
  return (
    <div className="ph-card h-full p-6">
      <div className="ph-stars mb-3">
        {Array.from({ length: 5 }, (_, i) => (
          <i key={i} className={`bi ${i < testimonial.rating ? 'bi-star-fill' : 'bi-star'}`} />
        ))}
      </div>
      <p className="mb-6 italic">&ldquo;{testimonial.review}&rdquo;</p>
      <div className="flex items-center gap-3">
        <img
          src={
            testimonial.photo ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.patientName)}&background=001b52&color=fff`
          }
          alt={testimonial.patientName}
          className="ph-avatar"
        />
        <div>
          <div className="font-semibold">{testimonial.patientName}</div>
          <div className="text-sm" style={{ color: 'var(--ph-muted)' }}>
            Verified Patient
          </div>
        </div>
      </div>
    </div>
  );
}
