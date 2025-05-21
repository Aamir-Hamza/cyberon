import React, { useEffect, useState } from 'react';
import { ShieldCheck, Lock, Database, Server } from 'lucide-react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-secondary-500/10 to-transparent opacity-50 animate-pulse-slow"></div>
        <div className="grid grid-cols-12 gap-2 opacity-10 absolute inset-0">
          {Array.from({ length: 120 }).map((_, i) => (
            <div key={i} className="h-8 bg-secondary-500/10 rounded-sm animate-float" style={{ animationDelay: `${i * 0.1}s` }}></div>
          ))}
        </div>
        
        {/* Animated SVG elements */}
        <div className="absolute top-20 right-10 opacity-20 animate-float">
          <Lock size={80} className="text-secondary-400 animate-rotate-3d" />
        </div>
        <div className="absolute bottom-40 left-10 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <Database size={60} className="text-secondary-400 animate-morph" />
        </div>
        <div className="absolute top-1/3 left-1/4 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <Server size={70} className="text-secondary-300 animate-scale-pulse" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 leading-tight font-heading mb-6 animate-slide-up">
              <span className="text-secondary-500 animate-text-shimmer bg-gradient-to-r from-secondary-500 via-white to-secondary-500 bg-clip-text text-transparent bg-[length:200%_auto]">Best</span> Cyber Security<br /> 
              Training And Services
            </h1>
            <p className="text-lg text-dark-700 mb-8 max-w-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Comprehensive cybersecurity solutions to protect, train, and empower your organization in an increasingly digital world.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <a href="#courses" className="px-6 py-3 bg-secondary-500 text-white font-medium rounded-md hover:bg-secondary-600 transition-all duration-300 shadow-soft hover:shadow-glow-xl hover:scale-105 relative overflow-hidden group">
                <span className="relative z-10">Explore Courses</span>
                <div className="absolute inset-0 bg-gradient-shimmer animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="#services" className="px-6 py-3 bg-transparent border border-secondary-400 text-secondary-600 font-medium rounded-md hover:bg-secondary-50 transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                <span className="relative z-10">Our Services</span>
                <div className="absolute inset-0 bg-gradient-shimmer animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
          
          <div className="relative hidden md:block animate-slide-left" style={{ animationDelay: '0.6s' }}>
            <div className="absolute inset-0 bg-gradient-conic from-secondary-500/20 via-secondary-500/20 to-secondary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-secondary-100 shadow-soft-lg hover:shadow-glow-xl transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-flow rounded-2xl"></div>
              <div className="relative space-y-6">
                <div className="flex items-center space-x-4 group/item hover:scale-105 transition-transform duration-300">
                  <div className="bg-secondary-500/10 p-3 rounded-lg group-hover/item:bg-secondary-500/20 transition-colors duration-300">
                    <ShieldCheck className="text-secondary-500 animate-bounce-slow" size={24} />
                  </div>
                  <div>
                    <h3 className="text-dark-900 font-semibold group-hover/item:text-secondary-500 transition-colors duration-300">Expert Training</h3>
                    <p className="text-dark-600 text-sm">Learn from industry professionals</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group/item hover:scale-105 transition-transform duration-300">
                  <div className="bg-secondary-500/10 p-3 rounded-lg group-hover/item:bg-secondary-500/20 transition-colors duration-300">
                    <Lock className="text-secondary-500 animate-float" size={24} />
                  </div>
                  <div>
                    <h3 className="text-dark-900 font-semibold group-hover/item:text-secondary-500 transition-colors duration-300">Secure Solutions</h3>
                    <p className="text-dark-600 text-sm">Enterprise-grade security</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group/item hover:scale-105 transition-transform duration-300">
                  <div className="bg-secondary-500/10 p-3 rounded-lg group-hover/item:bg-secondary-500/20 transition-colors duration-300">
                    <Database className="text-secondary-500 animate-wiggle" size={24} />
                  </div>
                  <div>
                    <h3 className="text-dark-900 font-semibold group-hover/item:text-secondary-500 transition-colors duration-300">Data Protection</h3>
                    <p className="text-dark-600 text-sm">Advanced security measures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatItemProps {
  label: string;
  value: string;
  unit: string;
}

const StatItem: React.FC<StatItemProps> = ({ label, value, unit }) => (
  <div className="flex items-center justify-between group hover:scale-105 transition-transform duration-300">
    <span className="text-dark-600 group-hover:text-secondary-500 transition-colors duration-300">{label}</span>
    <div className="flex items-baseline space-x-1">
      <span className="text-2xl font-bold text-secondary-500 animate-text-shimmer bg-gradient-to-r from-secondary-500 via-white to-secondary-500 bg-clip-text text-transparent bg-[length:200%_auto]">{value}</span>
      <span className="text-dark-600 text-sm">{unit}</span>
    </div>
  </div>
);