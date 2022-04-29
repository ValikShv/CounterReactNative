import * as React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import Actions from "../redux/Actions";
import {minus, plus} from "../helpers/CounterFunc";


export default () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.sum);

  return (
    <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Text>{counter}</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>dispatch(Actions.Counter.Update(plus(counter)))}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>dispatch(Actions.Counter.Update(minus(counter)))}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
