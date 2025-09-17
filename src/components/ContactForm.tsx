"use client"; 
import styles from "./ContactForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from '../schema/validations/contactSchema'

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactFormData) => {
    toast.success("Message sent successfully! We'll get back to you soon.", {
      duration: 4000,
      position: "top-right",
      style: {
        background: "#fff",
        color: "#5c616b",
        borderRadius: "16px",
        padding: "16px",
        fontSize: "14px",
        fontWeight: "500",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
      },
      icon: <img src="/Sent.webp" className="w-6 h-6" alt="sent" />
    });
    reset();
  };

  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto py-10 flex flex-col justify-start items-start">
        <div className="flex flex-col justify-start items-start mb-8">
          <div className="font-bold text-5xl md:text-6xl">CONTACT</div>
          <div className="font-normal text-xs text-gray-600 mt-2">
            Have a project in mind or just want to say hello? I'd love to hear from you. Let's create something amazing together!
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-5 mb-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-3">
            {/* Name */}
            <div className="relative">
               <label className="absolute -top-2 left-4 bg-white px-1 text-xs text-gray-600">Your Name</label>
               <input 
               type="text" 
               {...register("name")}
               className={`w-full md:h-12 text-xs border rounded-full py-3 px-4 focus:outline-none focus:ring-1 focus:ring-gray-300
                  border-gray-600`} 
               />
               <p className={`${styles["error-validate"]}`}>{errors.name?.message}</p>
            </div>

            {/* Email */}
            <div className="relative">
               <label className="absolute -top-2 left-4 bg-white px-1 text-xs text-gray-600">Your Email</label>
               <input 
               type="email" 
               {...register("email")}
               className={`w-full md:h-12 text-xs border rounded-full py-3 px-4 focus:outline-none focus:ring-1 focus:ring-gray-300
                border-gray-600`} 
               />
               <p className={`${styles["error-validate"]}`}>{errors.email?.message}</p>
            </div>

            {/* Subject */}
            <div className="relative">
               <label className="absolute -top-2 left-4 bg-white px-1 text-xs text-gray-600">Subject</label>
               <input 
               type="text" 
               {...register("subject")}
               className={`w-full  md:h-12 text-xs border rounded-full py-3 px-4 focus:outline-none focus:ring-1 focus:ring-gray-300
               border-gray-600`} 
               />
               <p className={`${styles["error-validate"]}`}>{errors.subject?.message}</p>
            </div>

            {/* Message */}
            <div className={`${styles['field-message']} relative`}>
               <label className="absolute -top-2 left-4 bg-white px-1 text-xs text-gray-600">Message</label>
                           <textarea
               {...register("message")}
               className={`w-full h-32 border text-xs rounded-3xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-gray-300
               border-gray-600`}
               />
               <p className={`${styles["error-validate"]}`}>{errors.message?.message}</p>
            </div>

            <button 
               type="submit" 
               className=" md:h-12 relative transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-400/50 w-full rounded-full bg-black text-white flex justify-between items-center px-6 py-3 md:py-0 cursor-pointer"
            >
               <p className={`${styles["btn-send"]}`}>Send Message</p>
               <FontAwesomeIcon icon={faArrowRight} className={`${styles["arrow-contact"]}`}/>
            </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
}
