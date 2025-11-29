import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Hammer, Target, Flag } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-golf-900 text-white overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-20">
             <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#22c55e" />
             </svg>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6 drop-shadow-lg">
            Welcome to the <span className="text-golf-400">Backyard 9</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 max-w-2xl mb-10 font-light">
            Tee Time in a Tiny Space: A dad's guide to building the backyard golf simulator.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/planning" 
              className="px-8 py-3 bg-golf-500 hover:bg-golf-600 text-white font-semibold rounded-full shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center"
            >
              See the Plan <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/building" 
              className="px-8 py-3 bg-white hover:bg-stone-100 text-golf-900 font-semibold rounded-full shadow-lg transition-all flex items-center justify-center"
            >
              View Progress
            </Link>
          </div>
        </div>
      </div>

      {/* Features / Sections */}
      <div className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Goals */}
            <Link to="/goals" className="group p-8 bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md hover:border-golf-200 transition-all">
              <div className="w-12 h-12 bg-golf-100 rounded-xl flex items-center justify-center text-golf-600 mb-6 group-hover:scale-110 transition-transform">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-3 group-hover:text-golf-700">The Goals</h3>
              <p className="text-stone-600">
                Understanding the vision. From drainage solutions to green speeds, see what we are aiming to achieve.
              </p>
            </Link>

            {/* Building */}
            <Link to="/building" className="group p-8 bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md hover:border-golf-200 transition-all">
              <div className="w-12 h-12 bg-golf-100 rounded-xl flex items-center justify-center text-golf-600 mb-6 group-hover:scale-110 transition-transform">
                <Hammer size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-3 group-hover:text-golf-700">The Build</h3>
              <p className="text-stone-600">
                Blood, sweat, and bentgrass. Follow the construction progress with weekly updates and photos.
              </p>
            </Link>

            {/* Playing */}
            <Link to="/playing" className="group p-8 bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md hover:border-golf-200 transition-all">
              <div className="w-12 h-12 bg-golf-100 rounded-xl flex items-center justify-center text-golf-600 mb-6 group-hover:scale-110 transition-transform">
                <Flag size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-3 group-hover:text-golf-700">The Course</h3>
              <p className="text-stone-600">
                The final result. Course layout, scorecard, and local rules for the Backyard 9.
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Update Banner */}
      <div className="bg-white border-t border-stone-200 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Want to get in touch?</h2>
          <p className="text-stone-600 mb-8">
            Have questions about turf management, irrigation, or just want to say hi?
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-3 border-2 border-stone-900 text-stone-900 font-semibold rounded-full hover:bg-stone-900 hover:text-white transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;