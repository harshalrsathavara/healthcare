import { useState } from 'react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_RE = /^[0-9+()\-\s]{7,16}$/;

const initialValues = { name: '', mobile: '', email: '', subject: '', message: '' };

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Full name is required.';
  } else if (values.name.trim().length < 2) {
    errors.name = 'Please enter your full name.';
  }

  if (!values.mobile.trim()) {
    errors.mobile = 'Mobile number is required.';
  } else if (!MOBILE_RE.test(values.mobile.trim())) {
    errors.mobile = 'Enter a valid mobile number.';
  }

  if (!values.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  if (!values.message.trim()) {
    errors.message = 'Please tell us how we can help.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }

  return errors;
}

export default function InquiryForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    try {
      // TODO: wire up to the Laravel API, e.g.
      // await fetch('/api/inquiries', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(values),
      // });
      await new Promise((resolve) => setTimeout(resolve, 500));
      setSubmitted(true);
      setValues(initialValues);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="ph-card p-6 lg:p-10">
      <h2 className="text-2xl mb-6">Send Us a Message</h2>

      {submitted && (
        <div className="ph-alert-success">Thanks for reaching out! Our care team will get back to you shortly.</div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="ph-form-label" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              className={`ph-form-control ${errors.name ? 'is-invalid' : ''}`}
              aria-invalid={!!errors.name}
            />
            {errors.name && <p className="ph-form-error">{errors.name}</p>}
          </div>

          <div>
            <label className="ph-form-label" htmlFor="mobile">
              Mobile Number
            </label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              value={values.mobile}
              onChange={handleChange}
              className={`ph-form-control ${errors.mobile ? 'is-invalid' : ''}`}
              aria-invalid={!!errors.mobile}
            />
            {errors.mobile && <p className="ph-form-error">{errors.mobile}</p>}
          </div>

          <div>
            <label className="ph-form-label" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              className={`ph-form-control ${errors.email ? 'is-invalid' : ''}`}
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="ph-form-error">{errors.email}</p>}
          </div>

          <div>
            <label className="ph-form-label" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={values.subject}
              onChange={handleChange}
              className="ph-form-control"
            />
          </div>

          <div className="md:col-span-2">
            <label className="ph-form-label" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={handleChange}
              className={`ph-form-control ${errors.message ? 'is-invalid' : ''}`}
              aria-invalid={!!errors.message}
            />
            {errors.message && <p className="ph-form-error">{errors.message}</p>}
          </div>

          <div className="md:col-span-2">
            <button type="submit" disabled={submitting} className="btn btn-ph-primary w-full justify-center">
              {submitting ? 'Sending…' : 'Send Message'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
