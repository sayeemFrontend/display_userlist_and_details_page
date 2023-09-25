import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Suspender from '../../../components/common/suspender/Suspender';
import DisplayItems from '../../../components/common/displayItems';
import NoData from '../../../components/common/no-data/NoData';
import UserCard from '../../../components/common/cards/user-card/UserCard';

export default function Users() {
  const navigate = useNavigate();
  const { isLoading, isError, response } = useSelector((state) => state.users);
  const deviceList = response.data;

  return (
    <section>
      <h1 className='text-2xl w-fit mb-10 mt-4 py-1 px-20 mx-auto text-primary-950 rounded-sm bg-primary-100 text-center'>User List</h1>
      <Suspender isError={isError} isLoading={isLoading}>
        <DisplayItems itemClass='col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3 4xl:col-span-2' items={deviceList || []} child={(props) => <UserCard {...props} onClick={(user) => navigate(`user/${user.id}`)} />} />
        {deviceList?.length === 0 && !isLoading && <NoData />}
      </Suspender>
    </section>
  );
}
