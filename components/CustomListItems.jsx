import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'

const CustomListItems = ({ itemListProp, onSelectItemHandlerEvent, onDeleteLongPressEvent }) => {

    const renderListItem = ({ item }) => (
        <View style={styles.itemList}>
            <Text>{item.value}</Text>
            <Pressable
                style={[styles.button, styles.buttonDeleteInItem]}
                onPress={() => onSelectItemHandlerEvent(item.id)}
                onLongPress={() => onDeleteLongPressEvent(item.id)}
            >
                <Text style={styles.textStyle}>X</Text>
            </Pressable>

        </View>
    )

    return (
        <FlatList
            data={itemListProp}
            renderItem={renderListItem}
            keyExtractor={item => item.id}
        />
    )
}

export default CustomListItems

const styles = StyleSheet.create({

    itemList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        backgroundColor: "#C2C3C4",
        borderRadius: 10,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})