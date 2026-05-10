import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const form = useRef(null);

    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    /* =====================
       VISIBILITY ON SCROLL
    ===================== */
    useEffect(() => {
        const onScroll = () => {
            const section = document.getElementById("contact-form");
            if (
                section &&
                window.scrollY + window.innerHeight >= section.offsetTop + 100
            ) {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", onScroll);
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* =====================
       VALIDATION
    ===================== */
    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        else if (formData.name.trim().length < 2)
            newErrors.name = "Name must be at least 2 characters";

        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = "Invalid email address";

        if (!formData.message.trim()) newErrors.message = "Message is required";
        else if (formData.message.trim().length < 10)
            newErrors.message = "Message must be at least 10 characters";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /* =====================
       INPUT HANDLER
    ===================== */
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    /* =====================
       SEND EMAIL
    ===================== */
    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateForm() || !form.current) return;

        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setSubmitStatus({
                    success: true,
                    message: "Message sent successfully! I'll reply soon.",
                });
                setFormData({ name: "", email: "", message: "" });
                setErrors({});
            })
            .catch(() => {
                setSubmitStatus({
                    success: false,
                    message: "Failed to send message. Please try again later.",
                });
            })
            .finally(() => setIsSubmitting(false));

    };

    return (
        <section id="contact" className="max-w-4xl mx-auto px-4">
            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-12 text-center
                   bg-gradient-to-r from-red-500 to-purple-500
                   bg-clip-text text-transparent"
            >
                Get In Touch
            </motion.h2>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* LEFT CARD */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="h-full flex flex-col
                     bg-gray-800/30 backdrop-blur-sm
                     p-8 rounded-xl border border-gray-700/50"
                >
                    <div className="flex-grow">
                        <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                            Contact Information
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <p className="text-gray-400 mb-1">Email</p>
                                <a
                                    href="mailto:priyasha.yadav.cg@gmail.com"
                                    className="text-white hover:text-purple-300"
                                >
                                    priyasha.yadav.cg@gmail.com
                                </a>
                            </div>

                            <div>
                                <p className="text-gray-400 mb-1">Location</p>
                                <p className="text-white">Gujarat, India</p>
                            </div>

                            <div>
                                <p className="text-gray-400 mb-3">Social Profiles</p>
                                <div className="flex gap-4">

                                    <a href="https://github.com/Priyasha-Yadav" target="_blank" rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-600 transition-colors">
                                        {/* GitHub Icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                    </a>


                                    <a href="https://www.linkedin.com/in/priyasha-yadav/" target="_blank" rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-600 transition-colors">
                                        {/* LinkedIn Icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                    </a>
                                    <a href="https://x.com/YadavPriyasha" target="_blank" rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-600 transition-colors">
                                        {/* X (Twitter) Icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                                    </a>
                                    <a href="https://www.youtube.com/@experimental-coder" target="_blank" rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-600 transition-colors">
                                        {/* YouTube Icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.8 15.5v-7l6.2 3.5-6.2 3.5z" /></svg>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        {/* Primary CTA */}
                        <a
                            href="https://drive.google.com/file/d/1X-ywnlvdlmxgGRpJcSH4vdU9M7k_ukJC/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center py-3 rounded-lg
    bg-gradient-to-r from-red-500 to-purple-600
    text-white font-semibold"
                        >
                            View Resume
                        </a>

                        {/* Secondary CTA with tooltip */}
                        <div className="relative ml-3 group">
                            <a
                                href="https://drive.google.com/uc?export=download&id=1X-ywnlvdlmxgGRpJcSH4vdU9M7k_ukJC"
                                className="flex items-center justify-center"
                            >
                                <span
                                    className="h-8 w-8 rounded-full
        bg-purple-600
        flex items-center justify-center
        transition transform group-hover:scale-110"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2"
                                    >
                                        <path d="M12 5v14"></path>
                                        <path d="M19 12l-7 7-7-7"></path>
                                    </svg>
                                </span>
                            </a>

                            {/* Tooltip */}
                            <div
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
      px-2 py-1 text-xs rounded-md
      bg-gray-900 text-white whitespace-nowrap
      opacity-0 group-hover:opacity-100
      transition pointer-events-none"
                            >
                                Download Resume
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT CARD */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-full flex flex-col
                     bg-gray-800/30 backdrop-blur-sm
                     p-8 rounded-xl border border-gray-700/50"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                        Send a Message
                    </h3>

                    {submitStatus && (
                        <div
                            className={`mb-6 p-4 rounded-lg ${submitStatus.success
                                ? "bg-green-500/20 text-green-200"
                                : "bg-red-500/20 text-red-200"
                                }`}
                        >
                            {submitStatus.message}
                        </div>
                    )}

                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="space-y-4 flex-grow"
                        noValidate
                    >
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Name"
                            className="w-full px-4 py-2 rounded-lg bg-gray-700/50
                         border border-gray-600 text-white"
                        />
                        {errors.name && (
                            <p className="text-red-400 text-sm">{errors.name}</p>
                        )}

                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Your Email"
                            className="w-full px-4 py-2 rounded-lg bg-gray-700/50
                         border border-gray-600 text-white"
                        />
                        {errors.email && (
                            <p className="text-red-400 text-sm">{errors.email}</p>
                        )}

                        <textarea
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Your Message"
                            className="w-full px-4 py-2 rounded-lg bg-gray-700/50
                         border border-gray-600 text-white resize-none"
                        />
                        {errors.message && (
                            <p className="text-red-400 text-sm">{errors.message}</p>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-auto w-full py-3 rounded-lg
                         bg-gradient-to-r from-red-500 to-purple-600
                         text-white font-semibold"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;



