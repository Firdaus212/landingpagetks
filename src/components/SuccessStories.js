export default function SuccessStories() {
  const stories = [
    { name: 'Sheryln Moriarty', country: 'Japan' },
    { name: 'Edwina Edwards', country: 'USA' },
    { name: 'Bernadette Gustav', country: 'Czech' },
  ];
  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Inspiring Success Story</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {stories.map((story, i) => (
          <div key={i} className="bg-purple-300 p-4 rounded text-center">
            <p className="font-semibold">{story.name}</p>
            <p className="text-sm text-gray-600">Scholarship winner in {story.country}, 2022</p>
          </div>
        ))}
      </div>
    </section>
  );
}