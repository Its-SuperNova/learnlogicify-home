import { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  preferredLanguage: string;
  message: string;
}

const schema = yup.object({
  fullName: yup.string().required().label("Full Name"),
  email: yup.string().required().email().label("Email"),
  phone: yup.string().required().label("Phone"),
  preferredLanguage: yup.string().required().label("Preferred Language"),
  message: yup.string().required().label("Message")
}).required();

const ContactFormHomeFour = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [status, setStatus] = useState('');

  const onSubmit = async (data: FormData) => {
    setStatus('Sending...');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('Email sent successfully');
        reset();
      } else {
        setStatus('Failed to send email');
      }
    } catch (error) {
      setStatus('Failed to send email');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="tpcontact-from-wrapper">
          <div className="row gx-6">
            <div className="col-lg-6">
              <div className="tpcontact-form-input mb-20">
                <input type="text" {...register("fullName")} placeholder="Full name" />
                <p className="form_error">{errors.fullName?.message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tpcontact-form-input mb-20">
                <input type="email" {...register("email")} placeholder="Email Address" />
                <p className="form_error">{errors.email?.message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tpcontact-form-input mb-20">
                <input type="text" {...register("phone")} placeholder="Phone number" />
                <p className="form_error">{errors.phone?.message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tpcontact-form-input mb-20">
                <input type="text" {...register("preferredLanguage")} placeholder="Preferred Language" />
                <p className="form_error">{errors.preferredLanguage?.message}</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="tpcontact-form-textarea mb-25">
                <textarea placeholder="Message" {...register("message")}></textarea>
                <p className="form_error">{errors.message?.message}</p>
              </div>
            </div>
          </div>
          <div className="tpcontact-form-submit">
            <button type="submit">Send Message</button>
          </div>
          {status && <p>{status}</p>}
        </div>
      </form>
    </>
  );
};

export default ContactFormHomeFour;
