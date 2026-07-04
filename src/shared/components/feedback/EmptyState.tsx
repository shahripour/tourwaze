interface Props {
  title?: string;
}

export default function EmptyState({
  title = "اطلاعاتی وجود ندارد",
}: Props) {
  return (
    <div className="rounded-xl border border-dashed border-gray-300 p-10 text-center">
      <p className="text-gray-500">
        {title}
      </p>
    </div>
  );
}