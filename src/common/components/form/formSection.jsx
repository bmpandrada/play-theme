import FormContact from "./formContact";
import FormDetails from "./formDetails";

const FormSection = () => {
  return (
    <section id='contact' className='relative py-20 md:py-[120px]'>
      <div className='absolute top-0 left-0 w-full h-full -z-1 dark:bg-dark'></div>
      <div className='absolute top-0 left-0 -z-1 h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2'></div>
      <div className='container px-4 mx-auto'>
        <div className='flex flex-wrap items-center -mx-4'>
          <FormDetails />
          <FormContact />
        </div>
      </div>
    </section>
  );
};

export default FormSection;
