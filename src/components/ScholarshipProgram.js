import { motion } from "framer-motion";

export default function ScholarshipProgram() {
  const sections = [
    {
      title: "Syarat Umum",
      items: [
        "Diberikan kepada siswa yang kurang mampu dan berdedikasi tinggi untuk menuntut ilmu",
        "Diberikan kepada pemohon yang berniat tinggi untuk melanjutkan pendidikan ke jenjang yang lebih tinggi",
      ],
    },
    {
      title: "Jenjang Pendidikan",
      items: [
        "SMA/SMK (Bila belum ada Program Wajib Belajar di daerahnya)",
        "Vokasi",
        "S1, S2",
      ],
    },
    {
      title: "Kampus Tujuan",
      items: [
        "Kampus Indonesia",
        "Kampus yang sudah bekerja sama",
      ],
      sub: {
        label: "Contoh Kampus: UWIKA",
        list: [
          "Teknik Elektro",
          "Teknik Sipil",
          "Sastra Inggris",
          "Sastra Mandarin",
          "Akuntansi",
          "Manajemen",
        ],
      },
    },
  ];

  const extras = [
    {
      title: "Komponen Beasiswa",
      items: [
        "Biaya Pendaftaran",
        "Biaya Ujian",
        "Biaya SPP/Tuition Fee",
        "Biaya Wisuda",
        "BPJS Kesehatan",
      ],
    },
    {
      title: "Tidak berlaku untuk : ",
      items: [
        "Kelas Eksekutif",
        "Kelas Khusus",
        "Kelas Karyawan",
        "Kelas Jarak Jauh",
      ],
    },
  ];

  return (
    <section id="program" className="bg-[#FFF9F4] py-24 px-6 pt-[120px]">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#FA541C] mb-16 tracking-tight">
        Program Beasiswa
      </h2>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {sections.map((sec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-t-8 border-[#FA541C]"
          >
            <h3 className="text-2xl font-bold text-[#FA541C] mb-4 text-center">
              {sec.title}
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
              {sec.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {sec.sub && (
              <div className="mt-6 bg-orange-50 p-4 rounded-xl border-l-4 border-[#FA541C]">
                <p className="font-semibold text-gray-800 mb-2">
                  {sec.sub.label}
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  {sec.sub.list.map((subItem, i) => (
                    <li key={i}>{subItem}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-20 flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
        {extras.map((extra, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#FA541C] w-full lg:w-1/2"
          >
            <h3 className="text-2xl font-bold text-[#FA541C] mb-4 text-center">
              {extra.title}
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {extra.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}