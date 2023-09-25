import { useParams } from 'react-router-dom';
import { getUserDetails } from '../../apis';
import { useFetchFun } from '../../hooks/hooks';
import { useSelector } from 'react-redux';
import Suspender from '../../components/common/suspender/Suspender';
import userIcon from '../../assets/images/userIcon.png';
import MySelf from '../../components/common/my-self/MySelf';

export default function UserDetails() {
  const { isLoading, isError, response } = useSelector((state) => state.userDetails);
  const user = response.data;
  const params = useParams();
  useFetchFun(getUserDetails, { user_id: params.id });
  const { company = {}, address = {} } = user || {};

  return (
    <>
      <section className='w-fit sm:absolute p-2 ml-auto right-4 top-1'>
        <MySelf />
      </section>
      <Suspender isError={isError} isLoading={isLoading} preRender={false}>
        <div className='min-h-screen list-none flex flex-wrap flex-row items-center justify-center gap-24 shadow-2xl p-12'>
          <div className='text-center lg:text-start'>
            <img src={user.image || userIcon} alt='user_png' width={320} height={320} className=' rounded-full m-auto' />
            <hgroup className='leading-4 mt-4 text-center'>
              <h2 className='text-primary-950 text-4xl'>{user.name}</h2>
              <h5>({user.username})</h5>
            </hgroup>
            <ul className='mt-10 text-base text-primary-700 font-bold'>
              <li>
                <span className='text-black mr-1'>Email:</span> {user.email || '-'}
              </li>
              <li>
                <span className='text-black mr-1'>Phone:</span> {user.phone || '-'}
              </li>
              <li>
                <span className='text-black mr-1'>Email:</span> {user.website || '-'}
              </li>
            </ul>
          </div>
          <div className='text-center lg:text-start'>
            <div>
              <h2 className='text-xl'>Address</h2>
              <address className='text-base text-primary-700 font-bold'>
                <li>
                  <span className='text-black mr-1'>Street:</span> {address.street || '-'}
                </li>
                <li>
                  <span className='text-black mr-1'>Suite(pin):</span> {address.suite || '-'}
                </li>
                <li>
                  <span className='text-black mr-1'>City(pin):</span> {address.city || '-'}
                </li>
                <li>
                  <span className='text-black mr-1'>ZipCode(pin):</span> {address.zipcode || '-'}
                </li>
                <li>
                  <span className='text-black mr-1 text-start hidden lg:inline'>Geo:</span>
                </li>
                <ul className='ml-10 text-base text-primary-700 font-bold'>
                  <li>
                    <span className='text-black mr-1'>Lat:</span>
                    {address.geo?.lat || '-'}
                  </li>
                  <li>
                    <span className='text-black mr-1'>Lag:</span>
                    {address.geo?.lng || '-'}
                  </li>
                </ul>
              </address>
            </div>
            <div>
              <h2 className='mt-10 text-xl'>Company</h2>
              <ul className='text-base text-primary-700 font-bold'>
                <li>
                  <span className='text-black mr-1'>Name:</span>
                  {company.name || '-'}
                </li>
                <li>
                  <span className='text-black mr-1'>CatchPhrase(pin):</span>
                  {company.catchPhrase || '-'}
                </li>
                <li>
                  <span className='text-black mr-1'>BS:</span>
                  {company.bs | '-'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Suspender>
    </>
  );
}
