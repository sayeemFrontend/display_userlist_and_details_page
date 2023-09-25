import { getUsers } from '../../apis';
import { useFetchFun } from '../../hooks/hooks';
import Users from './sections/Users';
import MySelf from '../../components/common/my-self/MySelf';

export default function Home() {
  useFetchFun(getUsers);
  return (
    <>
      <section className='p-2 ml-auto w-fit'>
        <MySelf />
      </section>
      <Users />;
    </>
  );
}
