export default function Scholarships() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Top Choice Scholarship</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {['S2 College', 'University of Tokyo', 'Scholarship for Children'].map((name, i) => (
          <div key={i} className="p-4 bg-red-200 rounded shadow">
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-gray-700 mt-2">Description of {name} scholarship goes here.</p>
          </div>
        ))}
      </div>
    </section>
  );
}