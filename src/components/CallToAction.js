import { FaPlay } from "react-icons/fa";

export default function CallToAction() {
 return (
    <section
      className="relative mx-auto w-[1200px] bg-[#FFF9F4] flex items-center justify-center"
      style={{
        height: '456px',
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
      }}
    >
      <div className="mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
        {/* Left Text Section */}
        <div className="text-left">
          <h2 className="text-4xl font-semibold text-[#1E1E1E] leading-tight">
            Start <span className="text-[#FD6D63]">Looking</span><br />
            For Your <span className="font-bold">Scholarship</span>
          </h2>
          <p className="text-gray-600 mt-4 text-base">
            We have a wide selection of scholarships for you to apply for, so join now and find your best
          </p>

          <div className="flex items-center mt-6 gap-4">
            <button className="bg-[#FD6D63] hover:bg-[#e6554e] text-white font-medium py-3 px-6 rounded-lg shadow-md">
              Get Started
            </button>

            <button className="flex items-center gap-2 text-sm text-[#1E1E1E] hover:underline font-medium">
              <span className="bg-yellow-400 p-2 rounded-full">
                <FaPlay size={12} color="white" />
              </span>
              Play Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}