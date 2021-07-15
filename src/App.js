import React, {useEffect} from 'react';
import Router from './pages/Router';
import {Provider} from 'react-redux';
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import notifee, {
  EventType,
  IOSAuthorizationStatus,
} from '@notifee/react-native';

function App() {
  const requestUserPermission = async () => {
    const settings = await notifee.requestPermission();

    if (settings.authorizationStatus >= IOSAuthorizationStatus.AUTHORIZED) {
      console.log('Permission settings:', settings);
    } else {
      console.log('User declined permissions');
    }
  };

  // Subscribe to events
  useEffect(() => {
    return notifee.onForegroundEvent(async ({type, detail}) => {
      const {notification, pressAction} = detail;
      const pressActionLabel = pressAction
        ? `, press action: ${pressAction?.id}`
        : '';
      console.log(
        `[onForegroundEvent] notification id: ${notification?.id},  event type: ${EventType[type]}${pressActionLabel}`,
      );

      switch (type) {
        case EventType.DISMISSED:
          console.log(
            '[onForegroundEvent] User dismissed notification',
            notification,
          );
          break;
        case EventType.PRESS:
          console.log(
            '[onForegroundEvent] User pressed notification',
            notification,
          );
          break;
        case EventType.ACTION_PRESS:
          console.log(
            '[onForegroundEvent] User pressed an action',
            notification,
            detail.pressAction,
          );

          if (detail.pressAction?.id === 'first_action_reply') {
            // perform any server calls here and cancel notification
            if (notification?.id) {
              await notifee.cancelDisplayedNotification(notification.id);
            }
          }
          break;
      }
    });
  }, []);

  useEffect(() => {
    (async () => {
      await requestUserPermission();
    })();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}

export default App;
