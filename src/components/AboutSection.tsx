import React from 'react';
import { ShieldCheck, BookOpen, Award, Users, CheckCircle2 } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
                About <span className="text-secondary-500">CyberON</span>
              </h2>
              <div className="w-20 h-1 bg-secondary-500 mt-4"></div>
            </div>
            
            <p className="text-white/80 text-lg mb-6">
              CyberON is a comprehensive online platform offering a wide array of cybersecurity courses and services. From beginner to advanced levels, our meticulously curated courses cater to individuals seeking to enhance their cybersecurity knowledge and skills.
            </p>
            
            <p className="text-white/80 text-lg mb-6">
              Additionally, CyberON serves as a trusted cybersecurity services center, providing expert consultation, risk assessment, penetration testing, and incident response services to businesses and organizations of all sizes.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Stat icon={<BookOpen className="text-secondary-500" />} value="50+" label="Courses" />
              <Stat icon={<Users className="text-secondary-500" />} value="10K+" label="Students" />
              <Stat icon={<Award className="text-secondary-500" />} value="25+" label="Awards" />
              <Stat icon={<ShieldCheck className="text-secondary-500" />} value="100+" label="Clients" />
            </div>
            
            <a href="#" className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-medium rounded-md hover:bg-primary-600 transition-colors shadow-md">
              Learn More About Us
            </a>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 rounded-2xl transform -rotate-3"></div>
            <div className="relative bg-dark-800 p-8 rounded-2xl border border-dark-400">
              <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Us?</h3>
              
              <div className="space-y-6">
                <FeatureItem 
                  title="Expert Instructors" 
                  description="Learn from industry professionals with real-world experience in cybersecurity."
                />
                
                <FeatureItem 
                  title="Hands-on Learning" 
                  description="Practical labs and exercises to apply security concepts in real scenarios."
                />
                
                <FeatureItem 
                  title="Industry Recognized" 
                  description="Courses aligned with industry certifications and standards."
                />
                
                <FeatureItem 
                  title="24/7 Support" 
                  description="Dedicated support team to assist you throughout your learning journey."
                />
                
                <FeatureItem 
                  title="Flexible Learning" 
                  description="Learn at your own pace with lifetime access to course materials."
                />
              </div>
              
              <div className="mt-8 p-4 bg-dark-700 rounded-lg border border-dark-500">
                <div className="flex items-center">
                  <div className="bg-secondary-500 p-2 rounded-full">
                    <Award size={20} className="text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white">ISO 27001 Certified</h4>
                    <p className="text-white/70 text-sm">Information Security Management</p>
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

const Stat: React.FC<{ icon: React.ReactNode; value: string; label: string }> = ({ icon, value, label }) => (
  <div className="flex items-center space-x-3">
    <div className="text-white">
      {icon}
    </div>
    <div>
      <div className="text-xl font-bold text-white">{value}</div>
      <div className="text-white/70 text-sm">{label}</div>
    </div>
  </div>
);

const FeatureItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="flex">
    <div className="flex-shrink-0">
      <CheckCircle2 size={20} className="text-secondary-500 mt-0.5" />
    </div>
    <div className="ml-4">
      <h4 className="font-semibold text-white">{title}</h4>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  </div>
);