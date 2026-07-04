interface Props {
  message?: string;
}

export default function ErrorState({
  message = "خطایی رخ داده است",
}: Props) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
      <p className="font-bold text-red-600">
        {message}
      </p>
    </div>
  );
}