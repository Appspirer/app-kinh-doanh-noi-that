import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1
    },
    header_container: {
        backgroundColor: Colors.white,
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logo: {
        height: 30,
        width: 30
    },
    search_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.7,
        borderWidth: 1,
        borderColor: Colors.border,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    menu_item: {

    },
    menu_text: {
        paddingHorizontal: 20,
        paddingBottom: 5
    },
    menu_container: {
        paddingHorizontal: 16
    },
    container_list: {
        width: (width - 48) / 2,
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        paddingTop:16
    },
    item:{
        backgroundColor: Colors.white,
        borderRadius:8,
        marginBottom:16,
        paddingHorizontal:12,
        paddingVertical:16,
        shadowColor:Colors.black,
        shadowOffset:{
            height:2
        },
        shadowOpacity:0.2
    },
    img:{
        alignSelf:'center',
    },
    row_container:{
        flexDirection:'row',
        alignItems:'center'
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:8
    },
    heart:{
        position:'absolute',
        top:15,
        right:15
    },
    name:{
        marginTop: 15,
        fontSize:14,
        color: Colors.black_text
    },
    new_price:{
        fontSize:16,
        color:Colors.blue,
        marginRight:8
    },
    old_price:{
        fontSize:12,
        color:Colors.blue_gray,
        textDecorationLine:'line-through'
    },
    rate:{
        fontSize:12,
        color: Colors.gray_text,
        marginLeft:3
    }
})