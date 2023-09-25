import icon from './noDataIcon.svg';
export default function NoData() {
  return (
    <div className='my-10 mx-auto flex items-center flex-col'>
      <img src={icon} className='w-10 h-auto' />
      <p className='text-base'>No Data Found</p>
    </div>
  );
}
