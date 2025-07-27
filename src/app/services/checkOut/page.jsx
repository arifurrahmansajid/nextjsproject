"use client"
import Image from 'next/image';
import React, { useRef, useState } from 'react';


const CheckOut = () => {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const profileRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const [confirmMsg, setConfirmMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const handleOrderConfirm = async () => {
        setLoading(true);
        setConfirmMsg("");
        const payload = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            profile: profileRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
        };
        const res = await fetch("/api/appointments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (data.success) {
            setConfirmMsg("Your appointment has been confirmed!");
            // Clear form
            firstNameRef.current.value = "";
            lastNameRef.current.value = "";
            profileRef.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";
        } else {
            setConfirmMsg("Failed to confirm appointment. Please try again.");
        }
        setLoading(false);
    };

    return (
        <div className='max-w-7xl mx-auto'>
            <section className="flex justify-center ">
                <div className="relative w-full max-w-screen-xl">
                    <figure>
                        <Image
                            src="/assets/images/checkout/checkout.png"
                            width={1137}
                            height={300}
                            alt="banner"
                            className="w-full h-auto object-cover max-h-[300px] sm:max-h-[400px]"
                            priority
                        />
                    </figure>

                    <div className="absolute bottom-10 left-4 sm:bottom-30 sm:left-6">
                        <p className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
                            Check Out
                        </p>
                    </div>
                </div>
            </section>
            <div className='bg-[#F3F3F3] mt-10'>
                <div className='p-10'>
                    {confirmMsg && (
                        <div className={`mb-4 p-3 rounded text-center font-semibold ${confirmMsg.includes('confirmed') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {confirmMsg}
                        </div>
                    )}
                    <div className='flex gap-5 mt-5' >
                        <input ref={firstNameRef} type="text" placeholder="First Name" className="input w-full rounded" />
                        <input ref={lastNameRef} type="text" placeholder="Last Name" className="input w-full rounded" />
                    </div>
                    <div className='flex gap-5 mt-5 '>
                        <input ref={profileRef} type="text" placeholder="Your Profile" className="input w-full rounded" />
                        <input ref={emailRef} type="text" placeholder="Your E-mail" className="input w-full rounded" />
                    </div>
                    <textarea ref={messageRef} placeholder="Your Message" className="textarea textarea-xl w-full mt-5"></textarea>
                    <button
                        className='btn text-white bg-[#FF3811] w-full mt-5 rounded-md hover:translate-y-1 duration-300 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700'
                        onClick={handleOrderConfirm}
                        disabled={loading}
                    >
                        {loading ? 'Confirming...' : 'Order Confirm'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;