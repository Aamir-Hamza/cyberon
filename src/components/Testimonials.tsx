import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CISO",
    company: "TechCorp Inc.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "The cybersecurity training from CyberON has been instrumental in strengthening our organization's security posture. The courses are comprehensive, up-to-date, and delivered in an engaging format. Our team now has the skills to identify and mitigate potential threats effectively."
  },
  {
    id: 2,
    name: "David Miller",
    position: "IT Security Manager",
    company: "Financial Systems Ltd.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "CyberON's penetration testing services uncovered critical vulnerabilities that had been overlooked by our previous security assessments. Their team provided clear explanations and practical recommendations that helped us address these issues promptly. I highly recommend their services."
  },
  {
    id: 3,
    name: "Emily Chen",
    position: "Network Security Specialist",
    company: "DataTech Solutions",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "As someone transitioning into cybersecurity, CyberON's courses provided the perfect foundation for my career change. The hands-on labs and real-world scenarios helped me develop practical skills that I could immediately apply in my new role. Two months after completing their Security Analyst program, I landed my dream job."
  },
  {
    id: 4,
    name: "Michael Roberts",
    position: "CTO",
    company: "HealthSecure Systems",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Following a security incident, we engaged CyberON for incident response and subsequent security improvements. Their team was professional, responsive, and provided exceptional guidance throughout the process. Their expertise helped us not only recover but also implement robust measures to prevent future incidents."
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-20 bg-dark-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-heading">
            What Our <span className="text-secondary-500">Clients</span> Say
          </h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto mb-6"></div>
          <p className="text-white/70 text-lg">
            Hear from individuals and organizations who have transformed their security posture through our training and services.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="relative z-20">
            <div className="relative overflow-hidden py-8">
              <div 
                className={`transition-transform duration-500 ease-in-out flex ${isAnimating ? 'opacity-80' : 'opacity-100'}`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map(testimonial => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="p-1">
                      <div className="bg-dark-700 rounded-xl p-8 md:p-12 shadow-lg border border-dark-600">
                        <Quote size={40} className="text-secondary-500/30 mb-6" />
                        <p className="text-white/90 text-lg md:text-xl italic mb-8">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="w-14 h-14 rounded-full object-cover border-2 border-secondary-500"
                          />
                          <div className="ml-4">
                            <h4 className="font-bold text-white">{testimonial.name}</h4>
                            <p className="text-white/70">
                              {testimonial.position}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-dark-700 border border-dark-600 flex items-center justify-center text-white hover:bg-dark-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex
                        ? 'bg-secondary-500'
                        : 'bg-dark-600 hover:bg-dark-500'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-dark-700 border border-dark-600 flex items-center justify-center text-white hover:bg-dark-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-secondary-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>
        </div>
      </div>
    </section>
  );
};