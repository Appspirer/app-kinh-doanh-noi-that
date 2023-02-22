import React, { useState } from "react";
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import Colors from "../../themes/Colors";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const dataMenu = [
    {
        id: 0,
        title: "Trending"
    },
    {
        id: 1,
        title: "New"
    },
    {
        id: 2,
        title: "Sale"
    },
    {
        id: 3,
        title: "Most orderd"
    },
    {
        id: 4,
        title: "For you"
    },
]

const data = [
    {
        id: 0,
        name: "Classic Chair",
        newPrice: 45,
        oldPrice: 45,
        rate: 4.7,
        status: 1,
        img: Images.item1
    },
    {
        id: 1,
        name: "Comfert Chair",
        newPrice: 42,
        oldPrice: 45,
        rate: 4.7,
        status: 0,
        img: Images.item2
    },
    {
        id: 2,
        name: "High Chair",
        newPrice: 35,
        oldPrice: 45,
        rate: 4.7,
        status: 0,
        img: Images.item3
    },
    {
        id: 3,
        name: "Elegant Chair",
        newPrice: 35,
        oldPrice: 45,
        rate: 4.7,
        status: 1,
        img: Images.item4
    },
    {
        id: 4,
        name: "Classic Chair",
        newPrice: 45,
        oldPrice: 45,
        rate: 4.7,
        status: 1,
        img: Images.item5
    },
    {
        id: 5,
        name: "Classic Chair",
        newPrice: 45,
        oldPrice: 45,
        rate: 4.7,
        status: 1,
        img: Images.item6
    },

]

export default function Home({ navigation }) {

    const [valueSearch, setValueSearch] = useState("")
    const [menuIndex, setMenuIndex] = useState(0)

    const renderMenu = () => {
        return (
            <ScrollView horizontal={true} style={styles.menu_container} showsHorizontalScrollIndicator={false}>
                {dataMenu.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} style={[styles.menu_item, {
                            borderBottomWidth: menuIndex === index ? 3 : 0,
                            borderBottomColor: Colors.blue,
                            marginRight: index === dataMenu.length - 1 ? 48 : 0
                        }]} onPress={() => setMenuIndex(item.id)}>
                            <Text style={[styles.menu_text, {
                                color: menuIndex === index ? Colors.blue : Colors.blue_gray
                            }]}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <View style={styles.header}>
                    <Image source={Images.logo} style={styles.logo} />
                    <View style={styles.search_container}>
                        <TextInput
                            value={valueSearch}
                            onChangeText={setValueSearch}
                            placeholder="What you are looking for…"
                        />
                        {Icons.Icons({ name: "search", height: 14, width: 14 })}
                    </View>
                    {Icons.Icons({ name: 'cart', height: 23, width: 20 })}
                </View>
                {renderMenu()}
            </View>
            <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
                <View style={styles.container_list}>
                    {data.filter((_, i) => i % 2 === 0).map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.item} onPress={() => navigation.navigate('Details')}>
                                <Image source={item.img} style={styles.img} />
                                <TouchableOpacity style={styles.heart}>
                                    {Icons.Icons({ name: item.status === 1 ? 'heart_focus' : 'heart', height: 18, width: 18 })}
                                </TouchableOpacity>
                                <Text style={styles.name}>{item.name}</Text>
                                <View style={styles.row}>
                                    <View style={styles.row_container}>
                                        <Text style={styles.new_price}>${item.newPrice}</Text>
                                        <Text style={styles.old_price}>${item.oldPrice}</Text>
                                    </View>
                                    <View style={styles.row_container}>
                                        {Icons.Icons({ name: 'star', height: 12, width: 12 })}
                                        <Text style={styles.rate}>{item.rate}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <View style={styles.container_list}>
                    {data.filter((_, i) => i % 2 !== 0).map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.item} onPress={() => navigation.navigate('Details')}>
                                <Image source={item.img} style={styles.img} />
                                <TouchableOpacity style={styles.heart}>
                                    {Icons.Icons({ name: item.status === 1 ? 'heart_focus' : 'heart', height: 18, width: 18 })}
                                </TouchableOpacity>
                                <Text style={styles.name}>{item.name}</Text>
                                <View style={styles.row}>
                                    <View style={styles.row_container}>
                                        <Text style={styles.new_price}>${item.newPrice}</Text>
                                        <Text style={styles.old_price}>${item.oldPrice}</Text>
                                    </View>
                                    <View style={styles.row_container}>
                                        {Icons.Icons({ name: 'star', height: 12, width: 12 })}
                                        <Text style={styles.rate}>{item.rate}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}