import { ConsultasPendientes } from '@/app/ui/ConsultasPendientes';

export default function misConsultas() {
  return (
    <>
      <div className="items-center justify-center md:mx-auto mt-10 md:mt-0 space-y-10 md:w-full max-w-[340px] xl:max-w-[1250px] 2xl:max-w-[1930px] md:mr-6 md:space-y-6 mb-4 md:mb-0 select-none">
        <section className="container md:px-4 mx-auto">
          <div className="rounded-xl bg-white py-2 sticky top-0">
            <h1 className="font-bold text-lg text-center border-b-2 mb-1 mx-2">
              Consultas pendientes
            </h1>
          </div>
          <ConsultasPendientes />
        </section>
      </div>
    </>
  );
}
