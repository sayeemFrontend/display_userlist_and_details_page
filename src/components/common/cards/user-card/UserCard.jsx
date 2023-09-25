import PropTypes from 'prop-types';
import user from '../../../../assets/images/userIcon.png';

import './UserCard.css';
import Button from '../../../basic/button/Button';

export default function UserCard({ item = {}, onClick = () => {} }) {
  return (
    <div className='w-full aspect-[1/.7] p-6 shadow-lg rounded-lg'>
      <div onClick={() => onClick(item)} className='cursor-pointer'>
        <img src={item.image || user} alt='image' width={170} height={170} className=' rounded-full m-auto' />
        <hgroup className='leading-8 mt-4 mb-6 text-center '>
          <p className='text-primary-950 font-bold text-2xl text-ellipsis whitespace-nowrap overflow-hidden'>{item.name}</p>
          <p className='text-base font-medium'>{item.email}</p>
        </hgroup>
        <Button title='View' className='btn-success w-fit mx-auto px-14 py-1' />
      </div>
    </div>
  );
}

UserCard.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
};
