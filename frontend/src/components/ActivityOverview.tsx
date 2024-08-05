import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useCallback, useState} from 'react';
import {BarChart} from 'react-native-gifted-charts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PRIMARY_COLOR} from '../helper/Theme';
import MonthPicker from 'react-native-month-year-picker';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import {User} from '../type';

const ActivityOverview = ({user}: {user: User | undefined}) => {
  const backgroundStyle = {
    //backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    backgroundColor: PRIMARY_COLOR,
  };

  const data = [
    {
      value: 25,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 1,
      label: 'Jan',
    },
    {value: 24, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

    {
      value: 35,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 1,
      label: 'Feb',
    },
    {value: 30, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

    {
      value: 45,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 1,
      label: 'Mar',
    },
    {value: 40, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

    {
      value: 52,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 1,
      label: 'Apr',
    },
    {value: 49, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

    {
      value: 30,
      frontColor: '#006DFF',
      gradientColor: '#009FFF',
      spacing: 1,
      label: 'May',
    },
    {value: 28, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},
  ];

  const totalViews = 10;
  const totalReads = 20;

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const showPicker = useCallback(value => setShow(value), []);

  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || date;

      showPicker(false);
      setDate(selectedDate);
    },
    [date, showPicker],
  );

  console.log(user);

  return (
    <SafeAreaView style={styles.scrollViewContentContainer}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
        Monthly
      </Text>
      <Text style={{fontSize: 12, fontFamily: '500'}}>
        Date - Date Updated hourly
      </Text>

      <TouchableOpacity onPress={() => showPicker(true)}>
        <View style={styles.dateContainer}>
          <Text style={styles.margin}>{`${moment(date).format(
            'MMMM',
          )} - ${moment(date).format('YYYY')}`}</Text>
          <Icon
            name="caret-down-outline"
            size={20}
            // color={isDarkMode ? 'white' : 'black'}
          />
        </View>
      </TouchableOpacity>

      {show && (
        <MonthPicker
          onChange={onValueChange}
          value={date}
          mode="full"
          // minimumDate={new Date()}
          // maximumDate={new Date(2025, 5)}
          locale="ko"
        />
      )}

      <View style={styles.statsContainer}>
        <View style={styles.statsView}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            {totalViews}
          </Text>
          <Text style={{fontSize: 12, color: 'black'}}>Total Views</Text>
        </View>
        <View style={styles.statsView}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            {totalReads}
          </Text>
          <Text style={{fontSize: 12, color: 'black'}}>Total Reads</Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <BarChart data={data} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  margin: {
    marginHorizontal: 8,
  },
  dateContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'thistle',
    borderRadius: 50,
    padding: 5,
    marginVertical: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 6,
  },
  chartContainer: {
    marginVertical: 5,
    overflow: 'scroll',
  },
  scrollViewContentContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    gap: 10,
  },
  statsView: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  button: {
    height: 40,
    width: 100,
    borderRadius: 14,
    marginHorizontal: 4,
    marginVertical: 4,
    padding: 6,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'capitalize',
  },
});

export default ActivityOverview;
