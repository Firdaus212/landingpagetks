export default function BlogSection() {
  const blogs = [
    'How to improve communication...',
    'Tips & tricks for efficiency...',
    'Student favorite place to hang out...'
  ];
  return (
    <section className="py-12 px-4 bg-pink-50">
      <h2 className="text-2xl font-bold text-center mb-6">Increase Your Knowledge</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {blogs.map((title, i) => (
          <div key={i} className="p-4 bg-red-200 rounded">
            <p className="text-sm text-gray-700">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}