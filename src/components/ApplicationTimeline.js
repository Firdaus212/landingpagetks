import { motion } from "framer-motion";

export function ApplicationTimeline() {
  const timeline = [
    "Pembukaan pendaftaran beasiswa (Online/website)",
    "Asesmen dari komite",
    "Interview dengan komite",
    "Hasil asesmen dan interview",
    "Administrasi perkuliahan",
    "Perkuliahan dimulai",
  ];

  return (
    <section id="timeline" className="bg-gradient-to-b from-[#FFF3E0] via-[#FFF8F0] to-[#FFF3E0] py-24 px-6 pt-[120px]">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#D35400] tracking-tight">
          Timeline Aplikasi
        </h2>
        <p className="text-gray-700 mt-4 text-lg max-w-3xl mx-auto">
          Berikut adalah urutan proses seleksi hingga dimulainya perkuliahan.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#F5CBA7]"></div>

        <div className="space-y-12">
          {timeline.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center w-full ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <div className="w-1/2 px-4">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-[#FAD7A0]">
                  <p className="text-gray-800 font-medium leading-relaxed">
                    {event}
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#D35400] rounded-full border-4 border-white z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
