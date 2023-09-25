export default function NotFound() {
  const backTo = () => window.history.back();
  return (
    <div className='text-center centerXY  h-screen w-full text-xl text-primary-800'>
      <div className=''>
        <div className='mb-10'>
          Oops.... <br />
          <span className='mb-5 opacity-75'>Page Not Found</span>
        </div>
        <p className=' w-fit m-auto cursor-pointer text-secondary-700 border py-1 px-2' onClick={backTo}>
          Go back
        </p>
      </div>
    </div>
  );
}
