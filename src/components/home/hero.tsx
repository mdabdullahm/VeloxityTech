import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-full mx-auto px-4 md:px-8">
        
        {/* Top Tag & Main Heading */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Digital Agency Tag */}
          <span className="inline-block text-xs md:text-sm font-semibold tracking-widest uppercase bg-gray-100 text-gray-800 px-4 py-1.5 rounded-full mb-6 border border-gray-200">
            Digital Agency
          </span>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-black tracking-tight uppercase mb-6 leading-tight">
            We Build. <span className="font-semibold text-gray-900">We Create.</span> We Grow.
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base md:text-xl font-serif text-[#4b5563] mb-10 max-w-2xl mx-auto leading-relaxed">
            We help businesses build a powerful digital presence through professional web development, creative design, and strategic social media marketing.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#02f75a] text-black text-sm font-medium tracking-wide rounded-lg hover:bg-green-400 transition-all shadow-lg hover:shadow-xl text-center"
            >
              Get a Quote
            </Link>
            <Link
              href="/Work"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black text-sm font-medium tracking-wide rounded-lg border border-gray-300 hover:bg-[#02f75a] transition-all text-center"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* 3 Core Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          {/* Service 1 */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-all group">
            <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6 font-serif text-lg group-hover:bg-green-500 transition-colors">
              01
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">
              Web Development
            </h3>
            <p className="text-[#4b5563] text-sm leading-relaxed font-serif">
              Modern, responsive, and high-performing websites designed for your business.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-all group">
            <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6 font-serif text-lg group-hover:bg-green-500 transition-colors">
              02
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">
              Creative Design
            </h3>
            <p className="text-[#4b5563] text-sm leading-relaxed font-serif">
              Creative and engaging designs that make your brand stand out.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-all group">
            <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6 font-serif text-lg group-hover:bg-green-500 transition-colors">
              03
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">
              Social Media Marketing
            </h3>
            <p className="text-[#4b5563] text-sm leading-relaxed font-serif">
              Strategic social media solutions that help your brand reach and engage the right audience.
            </p>
          </div>

        </div>

        {/* Bottom Closing Banner / Slogan */}
        <div className="text-center border-t border-gray-100 pt-12">
          <h4 className="text-2xl md:text-3xl font-extralight text-black tracking-wide">
            Let’s Build <span className="font-normal italic">Something Great</span> Together.
          </h4>
        </div>

      </div>
    </section>
  );
};

export default Hero;