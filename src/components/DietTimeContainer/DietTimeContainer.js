import React, {useState, useEffect} from 'react';
import styles from './DietTimeContainer.style';
import {View, Text, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {sizes, colors} from '../../styles';
import firestore from '@react-native-firebase/firestore';
import notifee, {
  TriggerType,
  RepeatFrequency,
  AndroidImportance,
  AndroidVisibility,
} from '@notifee/react-native';
import {useSelector} from 'react-redux';

export default function DietTimeContainer({item, userSub}) {
  const [isEnabled, setIsEnabled] = useState(item.data.isActive);
  const notificationList = useSelector(
    state => state.store.notification.notifications,
  );

  const toggleSwitch = async () => {
    await firestore()
      .collection('users')
      .doc(userSub)
      .collection('diets')
      .doc(item.title)
      .update({
        isActive: !isEnabled,
      });

    setIsEnabled(previousState => !previousState);
  };

  useEffect(() => {
    const notificationPiece = notificationList.find(notification =>
      item.title === notification.title ? true : false,
    ) || {time: item.data.time};

    const getTimestamp = () => {
      const timestampDate = new Date();
      const hour =
        notificationPiece.time.split(':')[0] || item.data.time.split(':')[0];
      const minute =
        notificationPiece.time.split(':')[1] || item.data.time.split(':')[1];
      timestampDate.setHours(hour);
      timestampDate.setMinutes(minute);
      const currentTime = new Date(Date.now());
      if (currentTime.getTime() > timestampDate.getTime()) {
        timestampDate.setDate(timestampDate.getDate() + 1);
      }
      return timestampDate.getTime() + 1000;
    };

    const onTriggerNotificationPress = async () => {
      const channel = await notifee.getChannel('Diyetim');
      if (channel === null) {
        console.log('NEW');
        await notifee.createChannel({
          id: 'Diyetim',
          name: 'Diyetim',
          importance: AndroidImportance.HIGH,
          visibility: AndroidVisibility.PUBLIC,
          vibration: true,
          sound: 'default',
        });
      }
      /* Change the trigger */
      const trigger = {
        timestamp: getTimestamp(),
        type: TriggerType.TIMESTAMP,
        alarmManager: {
          allowWhileIdle: true,
        },
        repeatFrequency: RepeatFrequency.DAILY,
      };

      const notification = {
        id: item.title,
        title: 'Eating Time!',
        body: `it is time to eat your ${item.title} diet!`,
        android: {
          channelId: 'Diyetim',
          pressAction: {
            id: 'Diyetim',
          },
        },
        ios: {
          sound: 'default',
        },
      };
      await notifee.createTriggerNotification(notification, trigger);
    };

    const seeTriggeredNotifications = async () => {
      try {
        const idList = await notifee.getTriggerNotificationIds();
        return idList.indexOf(item.title) !== -1 ? true : false;
      } catch (err) {
        console.log(err);
      }
    };

    const cancelTriggeredNotifications = async () => {
      try {
        await notifee.cancelNotification(item.title);
        console.log('cancelled');
      } catch (err) {
        console.log(err);
      }
    };

    const handleAlarm = async () => {
      try {
        const isSetted = await seeTriggeredNotifications();
        if (isEnabled && !isSetted) {
          console.log('1--->');
          onTriggerNotificationPress();
        } else if (
          isEnabled &&
          isSetted &&
          item.data.time !== notificationPiece.time
        ) {
          console.log('2--->');
          console.log(item.data.time, notificationPiece.time);
          cancelTriggeredNotifications();
          onTriggerNotificationPress();
        } else if (!isEnabled && isSetted) {
          console.log('3--->');
          cancelTriggeredNotifications();
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleAlarm();
  }, [isEnabled, item, notificationList]);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}> {item.title} </Text>
      <View style={styles.informationContainer}>
        <Text style={styles.calText}> {item.data.kcal} Kcal </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Icon
          name="alarm"
          size={sizes.fontSize.Standart}
          color={colors.textColor.Primary}
        />
      </View>
    </View>
  );
}
