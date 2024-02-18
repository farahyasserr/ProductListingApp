import { StyleSheet } from "react-native";
import { colors } from "../../../../theme/Colors";

const styles = StyleSheet.create({
mainContainer:{ 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 20 , 
    backgroundColor: 
    colors.white, 
    borderRadius: 10, 
    padding: 10
},
   title: { 
    fontWeight: 'bold',
    maxWidth: 130,
},
   image:{
    width: 60,
    height: 60,
    borderRadius: 10,
    marginEnd: 18
},
price:{
    fontWeight: 'bold', 
    color: colors.gray 
},
iconsContainer:{
    flexDirection: 'row'
},
cartIcon:{
    marginEnd: 10
},
imageAndTextContainer:{
    flexDirection: 'row', 
    alignItems: 'center' 
}



})

export default styles