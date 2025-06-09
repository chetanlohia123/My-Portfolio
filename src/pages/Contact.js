import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  const form = useRef();

  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
    };

    // 1. Send to YOU
    emailjs.send('service_zpku65b', 'template_4igafye', formData, 'd7ZSLI9c7ylKA3to5')
      .then(() => {
        console.log('Message sent to you ✅');
      })
      .catch((error) => {
        console.error('Error sending to you ❌', error);
      });

    // 2. Send THANK YOU to VISITOR
    emailjs.send('service_zpku65b', 'template_6yv3ynk', formData, 'd7ZSLI9c7ylKA3to5')
      .then(() => {
        alert('Message sent! A confirmation email has been sent to your inbox.');
        form.current.reset();
      })
      .catch((error) => {
        alert('Something went wrong. Try again.');
        console.error('Error sending thank you ❌', error);
      });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10" data-aos="fade-down">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6" data-aos="zoom-in">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg mt-4 md:mt-0"
            />
          </div>
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border rounded-lg"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
