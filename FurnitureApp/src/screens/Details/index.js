import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const dataColor = [
    {
        id: 0,
        color: "#E5BCBE"
    },
    {
        id: 1,
        color: "#DEC369"
    },
    {
        id: 2,
        color: "#55AECC"
    },
    {
        id: 3,
        color: "#994C90"
    },
    {
        id: 4,
        color: "#3D3D98"
    },
]

export default function Details({ navigation }) {

    const [colorSelected, setColorSelected] = useState(0)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    {Icons.Icons({ name: 'back', height: 20, width: 11 })}
                </TouchableOpacity>
                <TouchableOpacity>
                    {Icons.Icons({ name: "vr", height: 16, width: 24 })}
                </TouchableOpacity>
            </View>
            <Image source={Images.details} style={styles.img} />
            <View style={styles.info}>
                <View style={styles.row}>
                    <Text style={styles.name}>Classic Chair</Text>
                    <TouchableOpacity>
                        {Icons.Icons({ name: "share", height: 18, width: 18 })}
                    </TouchableOpacity>
                </View>
                <View style={[styles.row, { marginTop: 16 }]}>
                    <View style={styles.price}>
                        <Text style={styles.new_price}>42$</Text>
                        <Text style={styles.old_price}>45$</Text>
                    </View>
                    <View style={styles.price}>
                        {Icons.Icons({ name: "star", height: 12, width: 12 })}
                        <Text style={styles.rate}>4.7</Text>
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>COLOR</Text>
                <View style={styles.color_container}>
                    {dataColor.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={[styles.color, { backgroundColor: item.color }]}
                                onPress={() => setColorSelected(item.id)}>
                                {colorSelected === index ? Icons.Icons({ name: "check", height: 9, width: 12 }) : <></>}
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <Text style={[styles.title,{marginTop:30}]}>DETAILS</Text>
                <Text style={styles.description}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est</Text>
                <View style={styles.bottom_container}>
                    <TouchableOpacity style={styles.heart}>
                        {Icons.Icons({name:"heart_blue", height:24, width:24})}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cart_button}>
                        <Text style={styles.cart_text}>Add to my cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}