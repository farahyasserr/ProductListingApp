import { StyleSheet } from "react-native";
import { colors } from "../../theme/Colors";

const styles = StyleSheet.create({
    title:{
        fontWeight: 'bold',
        marginTop: 20
    },
    button:{
        marginTop: 20,
    },
    mainContainer:{
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: colors.white
    }
})

export default styles