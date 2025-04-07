import { motion } from "framer-motion";

export default function AboutUs() {
  const items = [
    {
      title: "Visi",
      desc: "Talenta Indonesia yang berkompetensi dan berbudaya melalui pendidikan tinggi sebagai katalisator, agen perubahan bagi individu, keluarga, komunitas, dan bangsa.",
    },
    {
      title: "Misi",
      desc: "Mengenali dan mengembangkan talenta Indonesia yang berpotensi membangun daerahnya.",
    },
    {
      title: "Tujuan",
      desc: "Beasiswa Talenta Karya Santosa diberikan kepada pelajar muda dalam keadaan kurang mampu di daerah rural Indonesia, dengan tujuan untuk membantu mereka berfokus pada studi dengan sikap yang benar dan dengan demikian tumbuh menjadi anggota masyarakat yang luar biasa dan kembali membangun daerahnya.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 from-white via-orange-50 to-yellow-50 pt-[120px]">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#FA541C] tracking-tight">
          Tentang Kami
        </h2>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Mengenal lebih dekat visi, misi, dan tujuan Beasiswa Talenta Karya Santosa
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-t-8 border-[#FA541C] w-full md:w-1/3"
          >
            <div className="flex flex-col items-center">
              <div className="bg-[#FA541C] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-md">
                {item.title.charAt(0)}
              </div>
              <h3 className="text-2xl font-semibold text-[#FA541C] mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
