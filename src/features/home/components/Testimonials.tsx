export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      name: "مهسا رضایی",
      rating: 5,
      comment: "تجربه فوق‌العاده‌ای بود! همه چیز سر وقت و با کیفیت بود.",
    },
    {
      id: 2,
      name: "علی محمدی",
      rating: 4,
      comment: "خدمات خوب بود، فقط زمان پاسخگویی کمی طول کشید.",
    },
    {
      id: 3,
      name: "سمیرا احمدی",
      rating: 5,
      comment: "بهترین تجربه سفر من بود، حتماً دوباره استفاده می‌کنم.",
    },
  ];

  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="text-4xl font-bold text-center mb-12">نظرات مشتریان</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl shadow-xl p-6 border hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-bold mb-2">{review.name}</h3>
              <p className="mb-4 text-gray-600">"{review.comment}"</p>
              <div className="flex justify-center">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}