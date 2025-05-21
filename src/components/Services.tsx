import React from 'react';
import { Shield, Lock, AlertTriangle, Search, Code, FileCode } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <div 
      className="flex flex-col bg-dark-800 p-6 rounded-lg border border-dark-600 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary-500/30 group"
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      <div className="p-3 bg-dark-700 rounded-full w-16 h-16 flex items-center justify-center mb-5 text-secondary-500 group-hover:text-white group-hover:bg-secondary-500 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-white/70 flex-grow">{description}</p>
      <a href="#" className="mt-4 inline-flex items-center text-secondary-500 hover:text-secondary-400 transition">
        Learn more
        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </a>
    </div>
  );
};

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-heading">
            Our <span className="text-secondary-500">Cybersecurity</span> Services
          </h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto mb-6"></div>
          <p className="text-white/70 text-lg">
            Comprehensive security solutions tailored to protect your organization's digital assets, reputation, and business continuity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Penetration Testing" 
            description="Identify vulnerabilities in your systems before hackers do with our thorough penetration testing services."
            icon={<Lock size={28} />}
            delay={100}
          />
          
          <ServiceCard 
            title="Risk Assessment" 
            description="Comprehensive analysis of your security posture to identify, evaluate, and prioritize potential risks."
            icon={<AlertTriangle size={28} />}
            delay={200}
          />
          
          <ServiceCard 
            title="Security Audits" 
            description="Systematic evaluation of your security measures against industry standards and best practices."
            icon={<Search size={28} />}
            delay={300}
          />
          
          <ServiceCard 
            title="Incident Response" 
            description="24/7 support to effectively manage and mitigate the impact of security breaches."
            icon={<Shield size={28} />}
            delay={400}
          />
          
          <ServiceCard 
            title="Secure Code Review" 
            description="Expert analysis of your source code to identify security flaws and vulnerabilities."
            icon={<Code size={28} />}
            delay={500}
          />
          
          <ServiceCard 
            title="Compliance Consulting" 
            description="Guidance to help your organization meet regulatory requirements and industry standards."
            icon={<FileCode size={28} />}
            delay={600}
          />
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-medium rounded-md hover:bg-primary-600 transition-colors shadow-md">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};