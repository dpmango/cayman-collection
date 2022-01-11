import React, { useEffect, useContext, useCallback } from 'react';
import { observer } from 'mobx-react';
import { ToastProvider } from 'react-toast-notifications';

import { Toast, Loader, LoaderContextProvider } from '@ui';
import { useEventListener } from '@hooks';
import { SessionStoreContext } from '@store';
import { LOCAL_STORAGE_SESSION } from '@config/localStorage';

import Routes from '@c/Routes';

const App = observer(() => {
  const sessionContext = useContext(SessionStoreContext);

  const persistTabsStore = useCallback((e) => {
    if (e.key === LOCAL_STORAGE_SESSION) {
      sessionContext.hydrateStore();
    }
  }, []);

  useEventListener('storage', persistTabsStore);

  return (
    <>
      <ToastProvider autoDismiss={true} placement="top-center" autoDismissTimeout={10000} components={{ Toast: Toast }}>
        <Routes />
      </ToastProvider>
    </>
  );
});

export default App;
