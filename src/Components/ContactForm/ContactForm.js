import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("form data : ", formData)
            const response = await axios.post("http://10.0.0.38:8080/api/mailSend", formData);
            setResponseMessage(response.data.message || "Message sent successfully!");
        } catch (error) {
            console.error("Error sending message:", error); // Log the error for debugging
            setResponseMessage(
                error.response?.data?.message || "An error occurred. Please try again later."
            );
        }
    };
    
    return (
        <>
            <section className='contactForm'>
                <h1>Contact Me</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <section>
                        <label className="block text-sm font-medium" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </section>

                    <section>
                        <label className="block text-sm font-medium" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </section>

                    <section>
                        <label className="block text-sm font-medium" htmlFor="phone">
                            phone
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </section>

                    <section>
                        <label className="block text-sm font-medium" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg"
                        ></textarea>
                    </section>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
                    >
                        Send
                    </button>
                </form>
            </section>
        </>
    )
}

export default ContactForm