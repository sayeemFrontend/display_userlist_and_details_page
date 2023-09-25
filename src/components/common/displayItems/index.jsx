import PropTypes from 'prop-types';

export default function DisplayItems({ items = [], child: View, itemClass = 'col-span-12 sm:col-span-6 md:col-span-4 2xl:col-span-3 4xl:col-span-2' }) {
  return (
    <div className='grid grid-flow-row grid-cols-12 gap-4'>
      {items?.map((item, i) => (
        <div key={i} className={`${itemClass}`}>
          <View item={item} />
        </div>
      ))}
    </div>
  );
}

DisplayItems.propTypes = {
  items: PropTypes.array.isRequired,
  child: PropTypes.func.isRequired,
  itemClass: PropTypes.string,
};
