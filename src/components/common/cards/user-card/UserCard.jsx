import PropTypes from 'prop-types';
import user from '../../../../assets/images/userIcon.png';

import './UserCard.css';
import Button from '../../../basic/button/Button';

export default function UserCard({ item = {}, onClick = () => {} }) {
  return (
    <div className='w-full aspect-[1/.7] p-6 shadow-lg rounded-lg'>
      <div onClick={() => onClick(item)} className='cursor-pointer'>
        <img src={item.image || user} alt='' className=' rounded-full w-1/2 h-auto m-auto' />
        <hgroup className='leading-8 mt-4 mb-6 text-center '>
          <h2 className='text-primary-950 text-2xl text-ellipsis whitespace-nowrap overflow-hidden'>{item.name}</h2>
          <h4 className='text-base'>{item.email}</h4>
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
