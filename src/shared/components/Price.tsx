interface Props {
  price: number;
}

export default function Price({ price }: Props) {

  return (

    <div>

      <div className="text-xs text-gray-400">
        شروع قیمت
      </div>

      <div className="text-2xl font-bold text-yellow-600">

        {price.toLocaleString("fa-IR")}

        {" "}

        تومان

      </div>

    </div>

  );

}