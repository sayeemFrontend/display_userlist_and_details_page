import { useContext } from 'react';
import { MyselfContext } from '../../../context';
import plus from '../../../assets/icons/plusIcon.svg';
import minus from '../../../assets/icons/minusIcon.svg';

export default function MySelf() {
  const { myself, increment, decrement } = useContext(MyselfContext);

  return (
    <div className='w-fit flex flex-col items-center'>
      <img src={myself.image || ''} alt='profile' width={40} height={40} className='rounded-full' />
      <h4>{myself.name}</h4>
      <h5>score</h5>
      <ul className='w-20 flex items-center justify-between'>
        <img onClick={increment} src={plus} alt='plus' width={20} height={20} className='cursor-pointer border border-primary-950' />
        <h2>{myself.score}</h2>
        <img onClick={decrement} src={minus} alt='minus' width={20} height={20} className='cursor-pointer border border-[red]' />
      </ul>
    </div>
  );
}
