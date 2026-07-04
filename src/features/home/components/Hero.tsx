import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-banner.png"
        alt="Hero Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-yellow-900/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center items-center text-center text-white">
        <p className="mb-4 text-yellow-400 tracking-[0.25em] uppercase text-sm font-semibold">
          Premium Travel Experience
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-5xl">
          سفر از اینجا شروع می‌شود،
          <br />
          دنیا منتظر توست
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
          رزرو آنلاین لوکس‌ترین تورهای داخلی و خارجی با بهترین قیمت
        </p>

        <div className="mt-12 w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-5">
          <div className="grid md:grid-cols-5 gap-3 text-black">
            <select className="border rounded-2xl p-4">
              <option>مبدا</option>
            </select>

            <select className="border rounded-2xl p-4">
              <option>مقصد</option>
            </select>

            <input type="date" className="border rounded-2xl p-4" />

            <select className="border rounded-2xl p-4">
              <option>تعداد نفرات</option>
            </select>

            <button className="premium-btn px-6 py-4 font-bold">
              جستجو
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}