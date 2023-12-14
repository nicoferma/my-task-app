import { StyleSheet, View } from 'react-native'
import { useState } from 'react'
import CustomModal from './components/CustomModal'
import CustomInputItem from './components/CustomInputItem'
import CustomListItems from './components/CustomListItems'

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

  return (
    <>
      <View style={styles.container}>
        <CustomInputItem
          placeHolderProp={'Ingresar tarea'}
          textItemProp={textItem}
          onChangeTextHandlerEvent={onChangeTextHandler}
          addItemToListEvent={addItemToList}
        />

        <CustomListItems
          itemListProp={itemList}
          onSelectItemHandlerEvent={onSelectItemHandler}
          onDeleteLongPressEvent={onDeleteLongPress}
        />
      </View>
      <CustomModal
        isVisibleProp={modalVisible}
        animationTypeProp={'fade'}
        itemSelectedToDeleteProp={itemSelectedToDelete}
        onCancelModalHandlerEvent={onCancelModalHandler}
        onDeleteModalHandlerEvent={onDeleteModalHandler}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30
  },
});