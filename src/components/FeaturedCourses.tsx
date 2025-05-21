import React, { useState } from 'react';
import { Star, Users, Clock, Award, BarChart } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  students: number;
  rating: number;
  instructor: string;
  price: number;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Certified Ethical Hacker (CEH)",
    description: "Learn ethical hacking techniques and tools to help organizations secure their systems.",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Ethical Hacking",
    level: "Intermediate",
    duration: "12 weeks",
    students: 1245,
    rating: 4.8,
    instructor: "John Doe",
    price: 299
  },
  {
    id: 2,
    title: "Cybersecurity Fundamentals",
    description: "A comprehensive introduction to the core concepts and practices of cybersecurity.",
    image: "https://images.pexels.com/photos/4560083/pexels-photo-4560083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Fundamentals",
    level: "Beginner",
    duration: "8 weeks",
    students: 2345,
    rating: 4.9,
    instructor: "Sara Johnson",
    price: 199
  },
  {
    id: 3,
    title: "Network Security Specialist",
    description: "Master the techniques to secure network infrastructure against modern threats.",
    image: "https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Network Security",
    level: "Intermediate",
    duration: "10 weeks",
    students: 950,
    rating: 4.7,
    instructor: "Michael Chen",
    price: 249
  },
  {
    id: 4,
    title: "Advanced Penetration Testing",
    description: "Advanced techniques for identifying and exploiting vulnerabilities in computer systems.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Penetration Testing",
    level: "Advanced",
    duration: "14 weeks",
    students: 780,
    rating: 4.9,
    instructor: "Alex Williams",
    price: 349
  },
  {
    id: 5,
    title: "Digital Forensics & Incident Response",
    description: "Learn to investigate cybersecurity incidents and collect digital evidence.",
    image: "https://images.pexels.com/photos/5380651/pexels-photo-5380651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Forensics",
    level: "Advanced",
    duration: "12 weeks",
    students: 620,
    rating: 4.8,
    instructor: "Emma Thompson",
    price: 299
  },
  {
    id: 6,
    title: "Security Operations Center (SOC) Analyst",
    description: "Prepare for a career as a SOC analyst with hands-on training in threat detection and incident response.",
    image: "https://images.pexels.com/photos/60504/security-protection-hackerat-keyboard-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Security Operations",
    level: "Intermediate",
    duration: "10 weeks",
    students: 890,
    rating: 4.7,
    instructor: "David Miller",
    price: 279
  }
];

const categories = ['All', 'Ethical Hacking', 'Fundamentals', 'Network Security', 'Penetration Testing', 'Forensics', 'Security Operations'];
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export const FeaturedCourses = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLevel, setActiveLevel] = useState('All');
  
  const filteredCourses = courses.filter(course => {
    const categoryMatch = activeCategory === 'All' || course.category === activeCategory;
    const levelMatch = activeLevel === 'All' || course.level === activeLevel;
    return categoryMatch && levelMatch;
  });
  
  return (
    <section id="courses" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-heading">
            Featured <span className="text-secondary-500">Courses</span>
          </h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto mb-6"></div>
          <p className="text-white/70 text-lg">
            From beginner to advanced levels, our meticulously curated courses are designed to 
            enhance your cybersecurity knowledge and skills.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-secondary-500 text-white'
                      : 'bg-dark-700 text-white/70 hover:bg-dark-600'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {levels.map(level => (
                <button
                  key={level}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeLevel === level
                      ? 'bg-primary-500 text-white'
                      : 'bg-dark-700 text-white/70 hover:bg-dark-600'
                  }`}
                  onClick={() => setActiveLevel(level)}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center px-6 py-3 bg-secondary-500 text-white font-medium rounded-md hover:bg-secondary-600 transition-colors shadow-md">
            View All Courses
          </a>
        </div>
      </div>
    </section>
  );
};

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="bg-dark-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-0 right-0 bg-secondary-500 text-white px-3 py-1 m-2 rounded-full text-xs font-medium">
          {course.category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-2 py-1 rounded text-xs font-medium ${
            course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
            course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
            'bg-red-500/20 text-red-400'
          }`}>
            {course.level}
          </span>
          
          <div className="flex items-center">
            <Star size={14} className="text-yellow-500 fill-current" />
            <span className="text-white ml-1 text-sm">{course.rating}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-white mb-2">{course.title}</h3>
        <p className="text-white/70 text-sm mb-4 flex-grow">{course.description}</p>
        
        <div className="flex flex-wrap justify-between text-sm text-white/70 mb-4">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <Users size={14} className="mr-1" />
            <span>{course.students.toLocaleString()} students</span>
          </div>
        </div>
        
        <div className="border-t border-dark-600 pt-4 mt-auto flex justify-between items-center">
          <div className="text-xl font-bold text-white">${course.price}</div>
          <a 
            href="#" 
            className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors text-sm font-medium"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};