import { View, TextInput, Pressable, Text, StyleSheet } from "react-native"


const CustomInputItem = ({ placeholderProp, textItemProp, onChangeTextHandlerEvent, addItemToListEvent }) => {

    return (

        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder={placeholderProp}
                onChangeText={onChangeTextHandlerEvent}
                value={textItemProp}
            />
            <Pressable
                style={[styles.button, styles.buttonAdd]}
                onPress={addItemToListEvent}>
                <Text style={styles.textStyle}>Add</Text>
            </Pressable>
        </View>
    )
}

export default CustomInputItem

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    textInput: {
        width: 230,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    buttonAdd: {
        backgroundColor: '#3C414C',
    },
})