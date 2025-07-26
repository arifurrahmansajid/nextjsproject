"use client"
import { registerUser } from '@/app/actions/auth/registerUser';
import SocialLogin from '@/app/components/SocialLogin';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import Swal from 'sweetalert2';

const Registration = () => {
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        const response = await registerUser({ name, email, password })
        console.log(response)
        if (response?.success && response?.data?.insertedId) {
            Swal.fire({
                title: "SuccessFully Sign Up",
                icon: "success",
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                },
                draggable: true
            });
            router.push('/logIn')
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: response?.message,
                showClass: {
                    popup: 'animate__animated animate__headShake'
                }
            });
        }
    }
    return (
        <div>
            <div className="hero bg-gradient-to-br from-base-200 to-primary/10 min-h-screen px-4 py-8">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-8">

                    {/* Sign Up Card */}
                    <div className="card bg-base-100 w-full max-w-sm shadow-2xl hover:shadow-primary/40 transition-all duration-500 transform hover:-translate-y-1">
                        <div className="card-body">
                            <p className="text-center text-2xl font-bold mb-4 animate-fadeIn">Sign Up</p>
                            <form onSubmit={handleSubmit} className="animate-slideUp">
                                <fieldset>
                                    <label className="label font-bold">Name</label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full mb-3 focus:ring-2 focus:ring-primary transition-all"
                                        name="name"
                                        placeholder="Name"
                                        required
                                    />
                                    <label className="label font-bold">Email</label>
                                    <input
                                        type="email"
                                        className="input input-bordered w-full mb-3 focus:ring-2 focus:ring-primary transition-all"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                    <label className="label font-bold">Password</label>
                                    <input
                                        type="password"
                                        className="input input-bordered w-full mb-3 focus:ring-2 focus:ring-primary transition-all"
                                        name="password"
                                        placeholder="Password"
                                        required
                                    />
                                    <div>
                                        <a className="link link-hover text-sm text-right block hover:text-primary transition-colors">
                                            Forgot password?
                                        </a>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn bg-[#FF3811] hover:bg-[#ff4d29] mt-4 w-full text-white transform hover:scale-[1.02] transition-transform"
                                    >
                                        Sign Up
                                    </button>
                                </fieldset>
                            </form>

                            {/* Divider */}
                            <div className="divider before:bg-gray-300 after:bg-gray-300 animate-fadeIn">Or</div>

                            {/* Social Buttons */}
                            <div className="animate-slideUp">
                                <SocialLogin></SocialLogin>
                            </div>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="w-full lg:w-1/2 flex justify-center animate-float">
                        <Image
                            src="/assets/images/login/login.svg"
                            width={600}
                            height={600}
                            alt="Login illustration"
                            className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-auto drop-shadow-xl"
                        />
                    </div>
                </div>
            </div>

            {/* Add these to your global CSS or Tailwind config */}
            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { 
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                    100% { transform: translateY(0px); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                .animate-slideUp {
                    animation: slideUp 0.6s ease-out forwards;
                    animation-delay: 0.2s;
                    opacity: 0;
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default Registration;