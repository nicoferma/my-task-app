import { Modal,View, Pressable,Text,StyleSheet } from "react-native"


const CustomModal = ({ isVisibleProp, animationTypeProp,itemSelectedToDeleteProp, onCancelModalHandlerEvent, onDeleteModalHandlerEvent }) => {
    return (
        <Modal animationType={animationTypeProp} transparent={true} visible={isVisibleProp}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.modalMessageContainer}>
                        <Text>Se eliminará: </Text>
                        <Text>{itemSelectedToDeleteProp.value}</Text>
                    </View>
                    <View style={styles.modalButtonContainer}>
                        <Pressable
                            style={[styles.button, styles.buttonCancel]}
                            onPress={onCancelModalHandlerEvent}>
                            <Text style={styles.textStyle}>Cancelar</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonDelete]}
                            onPress={onDeleteModalHandlerEvent}>
                            <Text style={styles.textStyle}>Si, eliminar</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default CustomModal

const styles = StyleSheet.create({
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
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})