import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'

export const AddTodo = ({ onSubmit }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = () => {
    if (title.trim()) {
      onSubmit(title)
    } else {
      Alert.alert('Todo can`t be empty')
    }
    setTitle('')
  }

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder='Enter todo...'
        autoCorrect  // default
        autoCapitalize='sentences'  // default
        // keyboardType='number-pad'
      />

      <Button style={styles.button} title='Add Todo' onPress={handleSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949AB',
    padding: 10,
  },
  button: {
    // width: '30%',
  },
})
