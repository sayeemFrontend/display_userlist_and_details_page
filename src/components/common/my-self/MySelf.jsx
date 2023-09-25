import { useContext } from 'react';
import { MyselfContext } from '../../../context';
// import plus from '../../../assets/icons/plusIcon.svg';
// import minus from '../../../assets/icons/minusIcon.svg';

export default function MySelf() {
  const { myself } = useContext(MyselfContext);

  return (
    <div className='w-fit flex flex-col items-center'>
      <img src={myself.image || ''} alt='profile' className='rounded-full w-10 h-10 ' />
      <h4>{myself.name}</h4>
      {/* <h5>score</h5>
      <ul className='w-20 flex items-center justify-between'>
        <img onClick={increment} src={plus} alt='plus' className='w-5 h-5 cursor-pointer border border-primary-950' />
        <h2>{myself.score}</h2>
        <img onClick={decrement} src={minus} alt='minus' className='w-5 h-5 cursor-pointer border border-[red]' />
      </ul> */}
    </div>
  );
}
