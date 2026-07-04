export default function BrandSection() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-r from-black to-yellow-900 text-white">
      <h1 className="text-6xl md:text-8xl font-bold mb-6 text-center">
        Tourwaze
      </h1>
      <p className="text-lg md:text-2xl max-w-2xl text-center mb-10">
        سفر لوکس شما، مقصدی که شما انتخاب می‌کنید
      </p>
      {/* مزایا */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-10 text-center">
        <div>
          <h3 className="text-3xl font-bold mb-2">بهترین قیمت</h3>
          <p className="text-lg">با تضمین بهترین قیمت برای تورهای لوکس</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-2">پشتیبانی 24/7</h3>
          <p className="text-lg">تیم پشتیبانی ما همیشه کنار شماست</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-2">رزرو سریع</h3>
          <p className="text-lg">رزرو تور شما در کمترین زمان ممکن</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-2">پرداخت امن</h3>
          <p className="text-lg">پرداخت آنلاین امن و راحت با درگاه‌های معتبر</p>
        </div>
      </div>
    </section>
  );
}