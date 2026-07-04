interface Props {

  children: React.ReactNode;

}

export default function Badge({

  children,

}:Props){

  return(

    <div className="absolute top-4 right-4 rounded-full bg-yellow-500 px-4 py-2 text-white text-sm font-bold">

      {children}

    </div>

  );

}