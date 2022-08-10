import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native'
import { AddTodo, Navbar, Todo } from './src'

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: '1',
      title: 'test 1',
      isChecked: true,
    },
    {
      id: '2',
      title: 'test 2',
      isChecked: false,
    },
    {
      id: '3',
      title: 'test 3',
      isChecked: false,
    },
    {
      id: '4',
      title: 'test 4',
      isChecked: false,
    },
    {
      id: '5',
      title: 'test 5',
      isChecked: false,
    },
    {
      id: '6',
      title: 'test 6',
      isChecked: false,
    },
    {
      id: '7',
      title: 'test 7',
      isChecked: false,
    },
    {
      id: '8',
      title: 'test 8',
      isChecked: false,
    },
    {
      id: '9',
      title: 'test 9',
      isChecked: false,
    },
    {
      id: '10',
      title: 'test 10',
      isChecked: false,
    },
    {
      id: '11',
      title: 'test 11',
      isChecked: false,
    },
    {
      id: '12',
      title: 'test 12',
      isChecked: false,
    },
    {
      id: '13',
      title: 'test 13',
      isChecked: false,
    },
    {
      id: '14',
      title: 'test 14',
      isChecked: false,
    },
    {
      id: '15',
      title: 'test 15',
      isChecked: false,
    },
  ])

  const addTodo = (title) =>
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now().toString(), title, isChecked: false },
    ])

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((el) => el.id !== id))
  }

  const checkTodo = (id) => {
    setTodos((prev) =>
      prev.map((el) => (el.id === id ? { ...el, isChecked: !el.isChecked } : el))
    )
  }

  return (
    <View>
      <Navbar title={'Todo App'} />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        {/* <ScrollView>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ScrollView> */}

        <SafeAreaView>
          <FlatList
            data={todos}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index, separators }) => (
              <Todo todo={item} onRemove={removeTodo} onPress={checkTodo} />
            )}
          />
        </SafeAreaView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
})

// export default function App() {
//   const [flag, setFlag] = useState(true)

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text} onPress={() => setFlag(!flag)}>
//         {flag ? 'Some text' : 'Another text'}
//       </Text>

//       <Text style={styles.text}>
//         sadasda
//       </Text>

//       <StatusBar style='auto' />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // flexDirection: 'row', // column by default
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: '#fff',
//     fontSize: 24,
//     lineHeight: 28,
//   },
// })

/*
  - View === div; Text === span/p
  - Can't use html tags 
  - This is not CSS => it will be transformed to something else (repeated not all properties, bit added few)
  - Everything will be transformed according to platforms API's (web, android, ios)
  - View has display: flex; by default
  - 
*/
