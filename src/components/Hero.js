export default function Hero() {
   return (
    <section id="home" className="relative bg-[#FFF9F4] px-[120px] pt-[120px] pb-20 overflow-hidden"  
    style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero-bg.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right top',
        backgroundSize: 'contain',
    }}
    >
      {/* Content */}
      <div className="pt-[186px] w-[620px]">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Get A <span className="text-[#FC624C]">Chance</span> To
          <br />
          Make Happen <br /> Your Dream
        </h1>

        <p className="text-gray-600 text-lg mt-6 mb-8 leading-relaxed">
          We support those who want to have the opportunity to study at their
          dream college for a better future, and the development of our young
          people for a better world.
        </p>

        <div className="flex gap-6">
          <button className="flex items-center text-[#FDA79B] hover:underline font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Play Video
          </button>
        </div>
      </div>
    </section>
  );
}