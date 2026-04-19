// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
// } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function App() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   // Load saved tasks
//   useEffect(() => {
//     loadTasks();
//   }, []);

//   const loadTasks = async () => {
//     const data = await AsyncStorage.getItem("tasks");
//     if (data) setTasks(JSON.parse(data));
//   };

//   const saveTasks = async (newTasks) => {
//     await AsyncStorage.setItem("tasks", JSON.stringify(newTasks));
//   };

//   const addTask = () => {
//     if (task.trim() === "") return;

//     const newTasks = [
//       ...tasks,
//       { id: Date.now().toString(), text: task, completed: false },
//     ];

//     setTasks(newTasks);
//     saveTasks(newTasks);
//     setTask("");
//   };

//   const deleteTask = (id) => {
//     const newTasks = tasks.filter((item) => item.id !== id);
//     setTasks(newTasks);
//     saveTasks(newTasks);
//   };

//   const toggleTask = (id) => {
//     const newTasks = tasks.map((item) =>
//       item.id === id ? { ...item, completed: !item.completed } : item,
//     );

//     setTasks(newTasks);
//     saveTasks(newTasks);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>JaysTodo App</Text>

//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="Enter task..."
//           value={task}
//           onChangeText={setTask}
//           style={styles.input}
//         />
//         <TouchableOpacity onPress={addTask} style={styles.addBtn}>
//           <Text style={{ color: "#fff" }}>Add</Text>
//         </TouchableOpacity>
//       </View>

//       <FlatList
//         ListEmptyComponent={
//           <Text style={{ textAlign: "center", marginTop: 20 }}>
//             No tasks yet 😴
//           </Text>
//         }
//         data={tasks}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => toggleTask(item.id)}>
//             <View style={styles.task}>
//               <Text
//                 style={[
//                   styles.taskText,
//                   item.completed && styles.completedText,
//                 ]}
//               >
//                 {item.text}
//               </Text>

//               <TouchableOpacity onPress={() => deleteTask(item.id)}>
//                 <Text style={styles.delete}>Delete</Text>
//               </TouchableOpacity>
//             </View>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     marginTop: 40,
//     backgroundColor: "#fff",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   inputContainer: {
//     flexDirection: "row",
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     flex: 1,
//     padding: 10,
//     marginRight: 10,
//     borderRadius: 5,
//   },
//   addBtn: {
//     backgroundColor: "#007BFF",
//     padding: 15,
//     borderRadius: 8,
//   },
//   task: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 10,
//     backgroundColor: "#f2f2f2",
//   },

//   taskText: {
//     fontSize: 16,
//   },

//   completedText: {
//     textDecorationLine: "line-through",
//     color: "gray",
//   },

//   delete: {
//     color: "red",
//     fontWeight: "bold",
//   },
// });

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { LightColors, DarkColors } from "@/constants/colors";

export default function HomeScreen() {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? DarkColors : LightColors;
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await AsyncStorage.getItem("tasks");
    if (data) setTasks(JSON.parse(data));
  };

  const saveTasks = async (newTasks) => {
    await AsyncStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const addTask = () => {
    if (task.trim() === "") return;

    const newTasks = [
      ...tasks,
      { id: Date.now().toString(), text: task, completed: false },
    ];

    setTasks(newTasks);
    saveTasks(newTasks);
    setTask("");
  };

  const deleteTask = (id: string) => {
    const newTasks = tasks.filter((item: any) => item.id !== id);
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const toggleTask = (id: string) => {
    const newTasks = tasks.map((item: any) =>
      item.id === id ? { ...item, completed: !item.completed } : item,
    );

    setTasks(newTasks);
    saveTasks(newTasks);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>JaysTodo App</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter task..."
          placeholderTextColor={scheme === "dark" ? "#aaa" : "#555"}
          value={task}
          onChangeText={setTask}
          style={[
            styles.input,
            { backgroundColor: theme.input, color: theme.text },
          ]}
        />
        <TouchableOpacity onPress={addTask} style={styles.addBtn}>
          <Text style={{ color: "#fff" }}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        ListEmptyComponent={
          <Text
            style={{
              textAlign: "center",
              marginTop: 20,
              color: theme.text,
            }}
          >
            No tasks yet 😴
          </Text>
        }
        data={tasks}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <TouchableOpacity onPress={() => toggleTask(item.id)}>
            <View style={[styles.task, { backgroundColor: theme.card }]}>
              <Text
                style={[
                  styles.taskText,
                  { color: theme.text },
                  item.completed && styles.completedText,
                ]}
              >
                {item.text}
              </Text>

              <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <Text style={styles.delete}>Delete</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    flex: 1,
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  addBtn: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 8,
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#f2f2f2",
  },
  taskText: {
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  delete: {
    color: "red",
    fontWeight: "bold",
  },
});
