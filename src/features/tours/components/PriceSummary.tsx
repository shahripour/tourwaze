interface Props {

  basePrice:number;

  servicePrice:number;

  tax:number;

  discount:number;

}

export default function PriceSummary({

  basePrice,

  servicePrice,

  tax,

  discount,

}:Props){

  const total=

    basePrice+

    servicePrice+

    tax-

    discount;

  return(

    <div className="luxury-card p-8">

      <h3 className="text-xl font-bold mb-6">

        خلاصه قیمت

      </h3>

      <div className="space-y-5">

        <div className="flex justify-between">

          <span>

            قیمت پایه

          </span>

          <span>

            {basePrice.toLocaleString("fa-IR")}

          </span>

        </div>

        <div className="flex justify-between">

          <span>

            خدمات انتخابی

          </span>

          <span>

            {servicePrice.toLocaleString("fa-IR")}

          </span>

        </div>

        <div className="flex justify-between">

          <span>

            مالیات

          </span>

          <span>

            {tax.toLocaleString("fa-IR")}

          </span>

        </div>

        <div className="flex justify-between">

          <span>

            تخفیف

          </span>

          <span>

            -

            {discount.toLocaleString("fa-IR")}

          </span>

        </div>

      </div>

      <hr className="my-8"/>

      <div className="flex justify-between text-2xl font-bold">

        <span>

          مبلغ نهایی

        </span>

        <span className="text-yellow-600">

          {total.toLocaleString("fa-IR")}

          {" "}

          تومان

        </span>

      </div>

    </div>

  );

}