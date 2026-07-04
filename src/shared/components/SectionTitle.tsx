interface Props {

  title:string;

  subtitle?:string;

}

export default function SectionTitle({

  title,

  subtitle,

}:Props){

  return(

    <div className="text-center mb-14">

      <h2 className="text-4xl font-extrabold">

        {title}

      </h2>

      {subtitle && (

        <p className="mt-3 text-gray-500">

          {subtitle}

        </p>

      )}

    </div>

  );

}