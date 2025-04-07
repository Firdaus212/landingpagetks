import { motion } from "framer-motion";

export function RegistrationProcedure() {
  const sections = [
    {
      title: "Dokumen dan Persyaratan Awal",
      steps: [
        "Mengisi form pendaftaran beasiswa",
        "Menyerahkan fotokopi KTP dan KK",
        "Menyerahkan fotokopi Ijasah",
        "Menyerahkan foto 3x4 : 1 lembar",
        "Tes kesehatan",
        "SKCK",
        "BI Check/SLIK yang di KK - internal review",
      ],
    },
    {
      title: "Personal Statement & Komitmen",
      steps: [
        "Jurusan yang akan diambil",
        "Career plan",
        "Mengapa kamu berhak menerima ini",
        "Menulis komitmen pasca studi",
        "Menulis rencana kontribusi di daerahnya",
      ],
    },
    {
      title: "Evaluasi & Tahap Lanjutan",
      steps: [
        "Evaluasi Beasiswa untuk semua jenjang pendidikan akan dievaluasi per semester",
        "Syarat Pengajuan pembaharuan yaitu Submit IPK (min 3) dan menulis rencana perkuliahan",
        "Pembayaran langsung ke kampus",
        "Interview",
        "Test Personality",
        "Cavlent",
        "Menandatangani perjanjian pulang ke daerahnya untuk membangun",
      ],
    },
  ];

  return (
    <section id="registration" className="from-orange-50 via-white to-yellow-50 py-24 px-6 pt-[120px]">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#FA541C] tracking-tight">
          Prosedur Pendaftaran
        </h2>
        <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
          Ikuti langkah-langkah di bawah ini untuk menyelesaikan proses pendaftaran beasiswa dengan benar.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {sections.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: sectionIndex * 0.3 }}
            className="bg-white border border-orange-200 p-6 rounded-3xl shadow-lg hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-bold text-[#FA541C] mb-4 text-center">
              {section.title}
            </h3>
            <ul className="space-y-3 text-sm text-gray-800">
              {section.steps.map((step, stepIndex) => (
                <li key={stepIndex} className="flex items-start gap-3">
                    <div className="bg-[#FA541C] text-white w-6 aspect-square rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                        {stepIndex + 1}
                    </div>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}