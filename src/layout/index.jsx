import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { store } from '../store';
import { useContext, useState } from 'react';
import { MyselfContext } from '../context';

export default function Layout() {
  const context = useContext(MyselfContext);
  const [myself, updateMyself] = useState(context);
  const increment = () => updateMyself((prev) => ({ ...prev, score: prev.score + 1 }));
  const decrement = () => updateMyself((prev) => ({ ...prev, score: prev.score - 1 }));

  return (
    <>
      <div className='layout container mx-auto relative '>
        <div className='main-section'>
          {
            <Provider store={store}>
              <MyselfContext.Provider value={{ myself, increment, decrement }}>
                <Outlet />
              </MyselfContext.Provider>
            </Provider>
          }
        </div>
      </div>
    </>
  );
}
