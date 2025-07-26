"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LoginForm from './components/LoginForm';
import SocialLogin from '@/app/components/SocialLogin';

const LogIn = () => {
    return (
        <div>
            <div className="hero bg-gradient-to-br from-base-200 to-primary/10 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl hover:shadow-primary/40 transition-all duration-500 transform hover:-translate-y-1">
                        <div className="card-body">
                            <p className='text-center text-3xl font-bold animate-fadeIn'>Log In</p>
                            <div className="animate-slideUp">
                                <LoginForm></LoginForm>
                            </div>
                            <div className='divider before:bg-gray-300 after:bg-gray-300 animate-fadeIn'>Or</div>
                            <div className="animate-slideUp">
                                <SocialLogin></SocialLogin>
                            </div>
                            <div className="mt-4 text-center animate-fadeIn">
                                <span>Don't have an account? </span>
                                <Link href="/register" className="text-blue-600 hover:underline font-semibold hover:text-blue-700 transition-colors duration-300">Register here</Link>
                            </div>
                        </div>
                    </div>
                    <div className="text-center lg:text-left animate-float">
                        <Image 
                            src='/assets/images/login/login.svg' 
                            width={600} 
                            height={600} 
                            className="drop-shadow-xl"
                            alt="Login illustration"
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

export default LogIn;