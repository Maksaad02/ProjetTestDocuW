import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { floatAddition } from './components/addition';
import divid from './components/division';
import  multiply from './components/multiplication';
import subtract from './components/subtract';

export default function App() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');


 
  function b() { }


  function wiz() { }

  const addition = ()=> {
    const res = floatAddition(num1, num2);
    if (!isNaN(res)) {
      setResult(res);
    } else {
      setResult('Please enter valid numbers');
    }
  };

  const subtraction = () => {
    const res = sub(num1, num2);
    if (!isNaN(res)) {
      setResult(res);
    } else {
      setResult('Please enter valid numbers');
    }
  };

  const multiplication = () => {
    const res = multiply(num1, num2);
    if (!isNaN(res)) {
      setResult(res);
    } else {
      setResult('please enter valid numbers');
    }
  };

  const division = () => {
    const res = divid(num1, num2);
    if (!isNaN(res)) {
      setResult(res);
    } else {
      setResult('Please enter valid numbers');
    }
  };


  //type buttonType = '+' | '-' | '*' | '/';

 
  const handleButton = (btnType) => {
    switch (btnType) {
      case '+':
        addition();
        break;
      case '-':
        subtraction();
        break;
      case '*':
        multiplication();
        break;
      case '/':
        division();
        break;
      default:
        console.error('Invalid button type');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Calculator</Text>
      <View style={styles.calculForm}>
        <Text style={styles.text}>Enter the first number:</Text>
        <TextInput
          style={styles.input}
          placeholder="number one"
          value={num1}
          onChangeText={setNum1}
          keyboardType="numeric"
        />
        <Text style={styles.text}>Enter the second number:</Text>
        <TextInput
          style={styles.input}
          placeholder="number two"
          value={num2}
          onChangeText={setNum2}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttons}>
        <View style={styles.button}>
        <Button title="-" onPress={() => handleButton('-')} /></View>
        <View style={styles.button}>
        <Button title="+" onPress={() => handleButton('+')} /></View>
        <View style={styles.button}>
        <Button  title="/" onPress={() => handleButton('/')} /></View>
        <View style={styles.button}>
        <Button  title="*" onPress={() => handleButton('*')} /></View>

      </View>
      {result !== '' && (
        <Text style={styles.text}>Result: {result}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    color: '#000',
  },
  headerText: {
    fontSize: 36,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  calculForm: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'grey',
    borderRadius: 2,
    borderWidth: 1,
    color: 'black',
  },
  buttons: {
    margin: 30,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  button: {
    backgroundColor: 'green',
    justifyContent: 'space-between',
    margin:5,
    padding: 10,
    borderRadius: 5,
    width: 50,
    height: 50,
    flex:1,
    alignItems: 'center',
  },
});
