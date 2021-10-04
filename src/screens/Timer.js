import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = time => {
  const mins = Math.floor(time / 60);
  const secs = time - mins * 60;
  return {mins: formatNumber(mins), secs: formatNumber(secs)};
};

function Timer() {
  const [remainingSecs, setRemainingSecs] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const {mins, secs} = getRemaining(remainingSecs);

  toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setRemainingSecs(0), setIsActive(false);
  };
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setRemainingSecs(remainingSecs => remainingSecs + 1);
      }, 1000);
    } else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text style={{fontSize: 30}}>{`${mins}:${secs}`}</Text>
      </View>
      <TouchableOpacity onPress={toggle}>
        <Text style={{fontSize: 20}}>{isActive ? 'Pause' : 'Start'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={reset}>
        <Text style={{fontSize: 20}}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Timer;
