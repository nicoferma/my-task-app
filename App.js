import { StyleSheet, Text, View, TextInput, Button, FlatList, Modal, Pressable, Alert } from 'react-native'
import { useState } from 'react'

export default function App() {
  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])
  const [itemSelectedToDelete, setItemSelectedToDelete] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const onChangeTextHandler = (text) => {
    setTextItem(text)
  }

  const addItemToList = () => {
    if (textItem.trim().length > 0) {
      setItemList(prevState => [...prevState, { id: Math.random().toString(), value: textItem }])
      setTextItem('')
    }
  }

  const onDeleteModalHandler = () => {
    //setItemList(itemList.filter(item => (item != itemSelectedToDelete)) || {}) //Lo habia implementado de esta manera,
    //pero lo dejo como lo hizo Pablo. Es por una cuestion de velocidad en la comparacion de solo el id? en vez de comparar todo el objeto?
    setItemList(itemList.filter(item => item.id !== itemSelectedToDelete.id));
    setModalVisible(!modalVisible)
  }

  const onCancelModalHandler = () => {
    setModalVisible(!modalVisible)
  }

  const onSelectItemHandler = (id) => {
    setItemSelectedToDelete(itemList.find(item => item.id === id))
    setModalVisible(!modalVisible)
  }

  const onDeleteLongPress = (id) => {
    setItemList(itemList.filter(item => item.id !== id));
  }

  const renderListItem = ({ item }) => (
    <View style={styles.itemList}>
      <Text>{item.value}</Text>
      <Pressable
        style={[styles.button, styles.buttonDeleteInItem]}
        onPress={() => onSelectItemHandler(item.id)}
        onLongPress={() => onDeleteLongPress(item.id)}
      >
        <Text style={styles.textStyle}>X</Text>
      </Pressable>
    </View>
  )


  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Ingresar tarea"
            onChangeText={onChangeTextHandler}
            value={textItem}
          />
          <Pressable
            style={[styles.button, styles.buttonAdd]}
            onPress={addItemToList}>
            <Text style={styles.textStyle}>Add</Text>
          </Pressable>
        </View>

        <FlatList
          data={itemList}
          renderItem={renderListItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalMessageContainer}>
              <Text>Se eliminará: </Text>
              <Text>{itemSelectedToDelete.value}</Text>
            </View>
            <View style={styles.modalButtonContainer}>
              <Pressable
                style={[styles.button, styles.buttonCancel]}
                onPress={onCancelModalHandler}>
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
              
              <Pressable
                style={[styles.button, styles.buttonDelete]}
                onPress={onDeleteModalHandler}>
                <Text style={styles.textStyle}>Si, eliminar</Text>
              </Pressable>
            </View>

          </View>
        </View>


      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  textInput: {
    width: 230,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  itemList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: "#C2C3C4",
    borderRadius: 10,
  },
  modalMessageContainer: {
    marginTop: 35,
    alignItems: "center"
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonDelete: {
    backgroundColor: '#992600',
    margin: 2
  },
  buttonCancel: {
    backgroundColor: '#3C414C',
    margin: 2
  },
  buttonAdd: {
    backgroundColor: '#3C414C',
  },
  buttonDeleteInItem: {
    backgroundColor: '#3C414C',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});