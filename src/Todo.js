import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const Todo = ({ todo: { id, title, isChecked }, onRemove, onPress }) => {
  const longPressHandler = () => {
    onRemove(id)
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onPress(id)}
      onLongPress={longPressHandler}
    >
      <View style={styles.todo}>
        <Text style={isChecked ? styles.text : {}}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    textDecorationLine: 'line-through',
  },
})
