import React, {useState, useEffect} from 'react';
import styles from './DietTimeContainer.style';
import {
  View,
  Text,
  Switch,
  NativeEventEmitter,
  NativeModules,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {sizes, colors} from '../../styles';
import firestore from '@react-native-firebase/firestore';
import ReactNativeAN from 'react-native-alarm-notification';

const {RNAlarmNotification} = NativeModules;
const RNAlarmEmitter = new NativeEventEmitter(RNAlarmNotification);

export default function DietTimeContainer({item, userSub}) {
  const [isEnabled, setIsEnabled] = useState(item.data.isActive);
  // const [alarm, setAlarm] = useState({});
  const date = new Date();
  const hour = item.data.time.split(':')[0];
  const minute = item.data.time.split(':')[1];
  date.setHours(hour);
  date.setMinutes(minute);

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
    const alarmNotifData = {
      title: item.title,
      message: `It is time to your ${item.title} diet!`,
      channel: 'PatikDiyetim',
      small_icon: 'ic_launcher',
      schedule_type: 'repeat',
      repeat_interval: 'daily',
      interval_value: 1,
      auto_cancel: true,
      has_button: true,
    };

    const setAlarm = async () => {
      const fireDate = ReactNativeAN.parseDate(new Date(Date.now() + 1000)); // set the fire date for 1 second from now
      await ReactNativeAN.scheduleAlarm({
        ...alarmNotifData,
        fire_date: fireDate,
      });
      console.log('setted');
    };

    const deleteRepeatingAlarms = async id => {
      ReactNativeAN.deleteAlarm(id);
      ReactNativeAN.deleteRepeatingAlarm(id);
      console.log('deleted');
    };

    const handleAlarms = async () => {
      const alarms = await ReactNativeAN.getScheduledAlarms();
      let alarm = alarms.filter(alarmP => {
        return alarmP.title === item.title ? true : false;
      })[0];
      if (alarm === undefined && isEnabled) {
        setAlarm();
      } else if (alarm !== undefined && !isEnabled) {
        deleteRepeatingAlarms(alarm.id);
      }
    };

    handleAlarms();
  }, [isEnabled, item]);

  useEffect(() => {
    const dismissSubscription = RNAlarmEmitter.addListener(
      'OnNotificationDismissed',
      data => {
        console.log('dismissed');
        ReactNativeAN.stopAlarmSound(data.id);
        ReactNativeAN.removeFiredNotification(data.id);
      },
    );

    const openedSubscription = RNAlarmEmitter.addListener(
      'OnNotificationOpened',
      data => {
        console.log('opened');
        ReactNativeAN.stopAlarmSound(data.id);
        ReactNativeAN.removeFiredNotification(data.id);
      },
    );

    return () => {
      dismissSubscription.remove();
      openedSubscription.remove();
    };
  }, []);

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
