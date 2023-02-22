import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    header: {
        marginHorizontal: 16,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    img: {
        marginTop: 30,
        alignSelf: 'center'
    },
    info: {
        marginTop: -10,
        backgroundColor: Colors.white,
        borderRadius: 30,
        alignSelf: 'center',
        width: width - 48 * 2,
        paddingHorizontal: 16,
        paddingVertical: 20,
        shadowColor: Colors.black,
        shadowOpacity: 0.2,
        shadowOffset: {
            height: 2
        },
        zIndex: 1
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    price: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    new_price: {
        fontSize: 20,
        color: Colors.blue,
        marginRight: 10
    },
    old_price: {
        fontSize: 12,
        color: Colors.blue_gray,
        textDecorationLine: 'line-through'
    },
    rate: {
        fontSize: 12,
        color: Colors.gray_text,
        marginLeft: 3
    },
    content: {
        backgroundColor: Colors.transparent,
        flex: 1,
        marginTop: -50,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        paddingTop: 80,
        paddingHorizontal: 16
    },
    title: {
        fontSize: 12,
        color: Colors.black_text,
        fontWeight: '600'
    },
    color_container: {
        flexDirection: 'row'
    },
    color: {
        height: 30,
        width: 30,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
        marginTop: 12
    },
    description: {
        fontSize: 12,
        color: Colors.blue_gray,
        marginTop: 12
    },
    bottom_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:30,
        position:'absolute',
        bottom:10,
        width:width-32,
        alignSelf:'center'
    },
    cart_text: {
        fontSize: 14,
        fontWeight: '400',
        color: Colors.white,
        textTransform: 'uppercase'
    },
    cart_button: {
        backgroundColor: Colors.blue,
        width: width - 80,
        paddingVertical:12,
        alignItems:'center',
        borderRadius:8
    },
    heart:{
        backgroundColor: Colors.white,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        height:40,
        width:40,
        shadowColor: Colors.black,
        shadowOffset:{
            height:2
        },
        shadowOpacity:0.3
    }
})