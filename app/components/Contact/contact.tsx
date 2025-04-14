"use client"
import React, { useState, FormEvent } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Using Email.js or a similar service would be ideal for production
      // This is a simplified example showing the intended flow
      await sendEmail(formData);
      
      // Show success message
      setSubmitStatus({
        success: true,
        message: "Thank you! Your message has been sent successfully."
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      // Show error message
      setSubmitStatus({
        success: false,
        message: "There was a problem sending your message. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to send email - in a real application, this would use an email service
  const sendEmail = async (data: ContactFormData) => {
  
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Email sent to Bhante@pameditation.org with data:', data);
        resolve(true);
      }, 1000);
    });
  };

  return (
    <section className="text-green-900 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-green-50 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe 
            width="100%" 
            height="100%" 
            className="absolute inset-0" 
            frameBorder="0" 
            title="map" 
            marginHeight={0} 
            marginWidth={0} 
            scrolling="no" 
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Pennsylvania+Meditation+Center,+1999+South+Valley+Rd,Crystal+Spring,+PA+15536&ie=UTF8&t=&z=14&iwloc=B&output=embed" 
            style={{
              filter: 'contrast(1.4) opacity(0.4)'
            }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-green-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">Pennsylvania Meditation Center, 1999 South Valley Rd, Crystal Spring, PA 15536</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-green-900 tracking-widest text-xs">EMAIL</h2>
              <a href="mailto:Bhante@pameditation.org" className="text-green-600 leading-relaxed">Bhante@pameditation.org</a>
              <h2 className="title-font font-semibold text-green-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">TEL: +1 (814) 735-4458</p>
              <p className="leading-relaxed">MOBILE: +1 (814) 954-9011</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <form onSubmit={handleSubmit}>
            <h2 className="text-green-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
            <p className="leading-relaxed mb-5 text-green-600">We&lsquo;ll get back to you as soon as possible.</p>
            
            {submitStatus && (
              <div className={`p-4 mb-4 rounded ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-green-600">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-white rounded border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-green-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-green-600">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-white rounded border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-green-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-green-600">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-white rounded border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-green-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;