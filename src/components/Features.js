export default function Features() {
  const data = [
    { title: 'Lots Of Choices', desc: 'Choose from various types of scholarships available' },
    { title: 'Easy Claim Process', desc: 'The process of getting a scholarship is easy to understand' },
    { title: 'Our Full Support', desc: 'Our full support is given to you in achieving your dream' },
  ];
  return (
    <section id="scholarships" className="py-12 px-4 pt-[120px]">
      <h2 className="text-2xl font-bold text-center mb-6">Easy To Find Scholarship</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {data.map((item, i) => (
          <div key={i} className="p-6 bg-white shadow rounded">
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}