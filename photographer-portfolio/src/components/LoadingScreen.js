import { useEffect, useState } from 'react';

export const LoadingScreen = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(timer);
                    onLoadingComplete();
                    return 100;
                }
                return prevProgress + 1;
            });
        }, 30); // Adjust speed of loading here (lower number = faster)

        return () => clearInterval(timer);
    }, [onLoadingComplete]);

    return (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col items-center justify-center transition-colors duration-300">
            <div className="relative w-64 h-64 flex items-center justify-center">
                {/* Outer loading circle */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                    {/* Background circle */}
                    <circle
                        className="stroke-gray-200 dark:stroke-gray-700"
                        strokeWidth="4"
                        fill="none"
                        cx="128"
                        cy="128"
                        r="120"
                    />
                    {/* Progress circle */}
                    <circle
                        className="stroke-blue-600 dark:stroke-blue-500 transition-all duration-300 ease-in-out"
                        strokeWidth="4"
                        strokeLinecap="round"
                        fill="none"
                        cx="128"
                        cy="128"
                        r="120"
                        strokeDasharray={`${progress * 7.54} 753.6`}
                    />
                </svg>

                {/* Logo container */}
                <div className="relative w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 border-2 border-blue-200 dark:border-blue-700 flex items-center justify-center">
                    <div className="w-44 h-44 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-800 dark:to-purple-800 flex items-center justify-center animate-pulse">
                        {/* Camera Icon */}
                        <svg 
                            className="w-20 h-20 text-blue-600 dark:text-blue-400" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={1.5} 
                                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" 
                            />
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={1.5} 
                                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" 
                            />
                        </svg>
                    </div>
                </div>

                {/* Percentage text */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {progress}%
                    </span>
                </div>
            </div>

            {/* Name and tagline */}
            <div className="mt-16 text-center space-y-2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white animate-fade-in">
                    Harish Pampaana
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 animate-pulse">
                    Loading Portfolio...
                </p>
                <div className="flex items-center justify-center space-x-2 mt-4">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-20 left-20 w-4 h-4 bg-blue-200 dark:bg-blue-800 rounded-full animate-float opacity-60"></div>
            <div className="absolute top-40 right-32 w-6 h-6 bg-purple-200 dark:bg-purple-800 rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-40 left-40 w-3 h-3 bg-pink-200 dark:bg-pink-800 rounded-full animate-float opacity-50" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 right-20 w-5 h-5 bg-blue-200 dark:bg-blue-800 rounded-full animate-float opacity-30" style={{animationDelay: '1.5s'}}></div>
        </div>
    );
};