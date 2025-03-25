
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import WhatsAppButton from "@/components/WhatsAppButton";
import Chatbot from "@/components/Chatbot";
import BackToTop from "@/components/BackToTop";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-[#d0bc8f]" />,
      title: "Email Us",
      details: "info@fineeng.co.ke",
      link: "mailto:info@fineeng.co.ke",
    },
    {
      icon: <Phone className="h-6 w-6 text-[#d0bc8f]" />,
      title: "Call or WhatsApp",
      details: "+254 8520917090",
      link: "https://wa.me/8520917090",
    },
    {
      icon: <MapPin className="h-6 w-6 text-[#d0bc8f]" />,
      title: "Kenya Headquarters",
      details: "Tirupati Business Park, Warehouse No. 19, Nairobi",
      link: "https://maps.google.com/?q=Tirupati+Business+Park,+Nairobi,+Kenya",
    },
    {
      icon: <MapPin className="h-6 w-6 text-[#d0bc8f]" />,
      title: "Uganda Branch",
      details: "Kyebando, Kampala",
      link: "https://maps.google.com/?q=Kyebando,+Kampala,+Uganda",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-[#474454]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#474454]/90 to-[#474454]/60 z-10"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[#474454] opacity-70">
            <div className="w-full h-full bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Get in touch with our team for inquiries, quotes, or to discuss your
            project needs.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#474454] dark:text-white mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#474454] dark:text-white mb-1"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#474454] dark:text-white mb-1"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#474454] dark:text-white mb-1"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#d0bc8f] hover:bg-[#c0786a] text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-[#474454] dark:text-white mb-6">
                Contact Information
              </h2>
              <p className="text-[#76737c] dark:text-gray-300 mb-8">
                Feel free to reach out to us through any of the following
                channels. We're always ready to discuss your project needs and
                provide the engineering solutions you require.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <div className="mt-1">{info.icon}</div>
                    <div>
                      <h3 className="font-bold text-[#474454] dark:text-white">
                        {info.title}
                      </h3>
                      <p className="text-[#76737c] dark:text-gray-300">
                        {info.details}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-[#474454] dark:text-white mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-[#76737c] dark:text-gray-300">
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday & Public Holidays: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#474454] dark:text-white">
              Our Locations
            </h2>
          </div>
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
            {/* Map would be integrated here */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-[#76737c] dark:text-gray-300">
                Map integration would be placed here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Components */}
      <WhatsAppButton />
      <Chatbot />
      <BackToTop />
    </>
  );
};

export default Contact;
