import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { Home, Categories, Favorite, List } from '../screens';
import Colors from '../themes/Colors';
import Icons from '../themes/Icons';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle:{
                paddingHorizontal:10,
                paddingTop:20
            }
        }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ flexDirection: 'row' }}>
                            {Icons.Icons({ name: focused ? "home_focus" : "home", height: 16, width: 16 })}
                            {focused && <Text style={{ fontSize: 12, color: Colors.blue, fontWeight: '700', marginLeft: 10 }}>Home</Text>}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Categories"
                component={Categories}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ flexDirection: 'row' }}>
                            {Icons.Icons({ name: focused ? "categories_focus" : "categories", height: 16, width: 16 })}
                            {focused && <Text style={{ fontSize: 12, color: Colors.blue, fontWeight: '700', marginLeft: 10 }}>Categories</Text>}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={Favorite}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ flexDirection: 'row' }}>
                            {Icons.Icons({ name: focused ? "heart_focus" : "heart", height: 16, width: 16 })}
                            {focused && <Text style={{ fontSize: 12, color: Colors.blue, fontWeight: '700', marginLeft: 10 }}>Favorite</Text>}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="List"
                component={List}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ flexDirection: 'row' }}>
                            {Icons.Icons({ name: focused ? "list_focus" : "list", height: 16, width: 16 })}
                            {focused && <Text style={{ fontSize: 12, color: Colors.blue, fontWeight: '700', marginLeft: 10 }}>List</Text>}
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
}