export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-700 mb-8">
          پنل مدیریت TOURWAZE
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          <AdminCard title="افزودن تور" />
          <AdminCard title="ویرایش قیمت" />
          <AdminCard title="حذف تور" />
        </div>
      </div>
    </main>
  );
}

function AdminCard({ title }: { title: string }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <button className="mt-6 bg-black text-white px-5 py-3 rounded-xl">
        ورود
      </button>
    </div>
  );
}