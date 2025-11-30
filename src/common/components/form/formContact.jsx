const FormContact = () => {
  return (
    <div className='w-full px-4 lg:w-5/12 xl:w-4/12'>
      <div
        className='wow fadeInUp rounded-lg bg-white dark:bg-dark-2 py-10 px-8 shadow-testimonial dark:shadow-none sm:py-12 sm:px-10 md:p-[60px] lg:p-10 lg:py-12 lg:px-10 2xl:p-[60px]'
        data-wow-delay='.2s
                '
      >
        <h3 className='mb-8 text-2xl font-semibold md:text-[28px] md:leading-[1.42] text-dark dark:text-white'>
          Send us a Message
        </h3>
        <form>
          <div className='mb-[22px]'>
            <label
              for='fullName'
              className='block mb-4 text-sm text-body-color dark:text-dark-6'
            >
              Full Name*
            </label>
            <input
              type='text'
              name='fullName'
              placeholder='Adam Gelius'
              className='bg-transparent w-full text-body-color dark:text-dark-6 placeholder:text-body-color/60 border-0 border-b border-[#f1f1f1] dark:border-dark-3 pb-3 focus:border-primary focus:outline-hidden'
            />
          </div>
          <div className='mb-[22px]'>
            <label
              for='email'
              className='block mb-4 text-sm text-body-color dark:text-dark-6'
            >
              Email*
            </label>
            <input
              type='email'
              name='email'
              placeholder='example@yourmail.com'
              className='bg-transparent w-full text-body-color dark:text-dark-6 placeholder:text-body-color/60 border-0 border-b border-[#f1f1f1] dark:border-dark-3 pb-3 focus:border-primary focus:outline-hidden'
            />
          </div>
          <div className='mb-[22px]'>
            <label
              for='phone'
              className='block mb-4 text-sm text-body-color dark:text-dark-6'
            >
              Phone*
            </label>
            <input
              type='text'
              name='phone'
              placeholder='+885 1254 5211 552'
              className='bg-transparent w-full text-body-color dark:text-dark-6 placeholder:text-body-color/60 border-0 border-b border-[#f1f1f1] dark:border-dark-3 pb-3 focus:border-primary focus:outline-hidden'
            />
          </div>
          <div className='mb-[30px]'>
            <label
              for='message'
              className='block mb-4 text-sm text-body-color dark:text-dark-6'
            >
              Message*
            </label>
            <textarea
              name='message'
              rows='1'
              placeholder='type your message here'
              className='bg-transparent w-full text-body-color dark:text-dark-6 placeholder:text-body-color/60 resize-none border-0 border-b border-[#f1f1f1] dark:border-dark-3 pb-3 focus:border-primary focus:outline-hidden'
            ></textarea>
          </div>
          <div className='mb-0'>
            <button
              type='submit'
              className='inline-flex items-center justify-center px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out rounded-md bg-primary hover:bg-blue-dark'
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
