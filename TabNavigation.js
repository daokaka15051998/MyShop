import * as React from 'react';
import { Text, View, Button, StyleSheet, Image,WebView,
   TextInput, SafeAreaView, TouchableOpacity, ScrollView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


function CustomHearder({ title, }) {
  return (
    <View style={{ flexDirection: 'row', height: 50, backgroundColor: '#FF6600' }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Image style={{ width: 30, height: 30, marginLeft: 0 }}
          source={require('./list.png')}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 1.5, justifyContent: 'center' }} >
        <Text style={{ textAlign: 'center' }}>{title}</Text>
      </View>
      <View style={{ flex: 1 }}>
      </View>
    </View>
  )
}
function HomeScreen({ navigation }) {
  return (

    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <CustomHearder title="Home" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#990099' }}>

        <Image style={{ width: 150, height: 150, marginLeft: 0, marginBottom: 20 }}
          source={require('./shopping-cart.png')}
          resizeMode="contain"
        />
        <View style={{ flexDirection: 'row' }}>
          <Image style={{ width: 30, height: 50, marginLeft: 0 }}
            source={require('./profile-user.png')}
            resizeMode="contain"
          />
          <TextInput placeholder={"UserName"} style={{
            alignItems: 'center', borderWidth: 1, textAlign: 'center',
            backgroundColor: 'white', height: 50, width: 200, borderRadius: 16, marginBottom: 10,

          }} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image style={{ width: 30, height: 50, marginLeft: 0 }}
            source={require('./padlock.png')}
            resizeMode="contain"
          />
          <TextInput placeholder={"PassWord"} style={{
            alignItems: 'center', borderWidth: 1, textAlign: 'center',
            backgroundColor: 'white', height: 50, width: 200, borderRadius: 16, marginBottom: 10
          }} />
        </View>

        <TouchableOpacity>
          <Button title="Login"
            color="black"
            alignItems="center"
            onPress={() => navigation.navigate('HomeDetails')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
}

function HomeScreenDetail({ navigation }) {
  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHearder title="Home Detail" navigation={navigation} />
        <View style={{ flex: 1, alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', marginBottom: 10, margin: 5 }}>
            <Image source={require('./ao1.png')}
              style={{ width: 100, height: 100, marginBottom: 5 }}
            />
            <Image source={require('./ao2.png')}
              style={{ width: 100, height: 100 }}
            />
          </View>
          <Button title="Mua" />
          <View style={{ flexDirection: 'row', marginBottom: 10, margin: 5 }}>
            <Image source={require('./ao1.png')}
              style={{ width: 100, height: 100, marginBottom: 5 }}
            />
            <Image source={require('./ao2.png')}
              style={{ width: 100, height: 100 }}
            />
          </View>

          <Button title="Mua" />
          <View style={{ flexDirection: 'row', marginBottom: 10, margin: 5 }}>
            <Image source={require('./ao1.png')}
              style={{ width: 100, height: 100, marginBottom: 5 }}
            />
            <Image source={require('./ao2.png')}
              style={{ width: 100, height: 100 }}
            />
          </View>
          <Button title="Mua" />
          <View style={{ flexDirection: 'row', marginBottom: 10, margin: 5 }}>
            <Image source={require('./ao1.png')}
              style={{ width: 100, height: 100, marginBottom: 5 }}
            />
            <Image source={require('./ao2.png')}
              style={{ width: 100, height: 100 }}
            />
          </View>
          <Button title="Mua" />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHearder title="Setting" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate('SettingDetail')}
        >
          <Text>Go to Setting</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function SettingsScreenDetail({ navigation }) {
  return (

    <SafeAreaView style={{ flex: 1 }}>
      <CustomHearder title="Setting Detail" navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Setting Detail!</Text>
      </View>
    </SafeAreaView>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', marginBottom: 10, margin: 5 }}>
          <Image source={require('./ao1.png')}
            style={{ width: 100, height: 100, marginBottom: 5 }}
          />
          <Image source={require('./ao2.png')}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <View style={{ flexDirection: 'row', marginBottom: 10, margin: 5 }}>
          <Image source={require('./ao1.png')}
            style={{ width: 100, height: 100, marginBottom: 5 }}
          />
          <Image source={require('./ao2.png')}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <View style={{ flexDirection: 'row', marginBottom: 10, margin: 5 }}>
          <Image source={require('./ao1.png')}
            style={{ width: 100, height: 100, marginBottom: 5 }}
          />
          <Image source={require('./ao2.png')}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <View style={{ flexDirection: 'row', marginBottom: 10, margin: 5 }}>
          <Image source={require('./ao1.png')}
            style={{ width: 100, height: 100, marginBottom: 5 }}
          />
          <Image source={require('./ao2.png')}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <View style={{ flexDirection: 'row', marginBottom: 10, margin: 5 }}>
          <Image source={require('./ao1.png')}
            style={{ width: 100, height: 100, marginBottom: 5 }}
          />
          <Image source={require('./ao2.png')}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    </ScrollView>
  );
}

function SearchScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <View style={{ flexDirection: 'row', marginBottom: 10, margin: 5 }}>
        <Image source={require('./ao1.png')}
          style={{ width: 100, height: 100, marginBottom: 5 }}
        />
        <Image source={require('./ao2.png')}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


function FacebookScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', alignContent: 'center' }}>
      <Image style={{ width: 100, height: 100, marginLeft: 0, marginBottom: 20 }}
        source={require('./facebook.png')}
        resizeMode="contain"
      />
      <View style={{ flexDirection: 'row' }}>
        <Image style={{ width: 30, height: 50, marginLeft: 0 }}
          source={require('./profile-user.png')}
          resizeMode="contain"
        />
        <TextInput
          placeholder={"Phone"}
          style={{
            alignItems: 'center', borderWidth: 1, textAlign: 'center',
            backgroundColor: 'white', height: 50, width: 200, borderRadius: 16, marginBottom: 10
          }} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Image style={{ width: 30, height: 50, marginLeft: 0 }}
          source={require('./padlock.png')}
          resizeMode="contain"
        />
        <TextInput
          placeholder={"PassWord"}
          style={{
            alignItems: 'center', borderWidth: 1, textAlign: 'center',
            backgroundColor: 'white', height: 50, width: 200, borderRadius: 16, marginBottom: 10
          }} />
      </View>
      <Text style={{ marginBottom: 20 }} > Quên Mật Khẩu </Text>
      <Button style={{ borderRadius: 15 }} onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function HoSoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#660099' }}>
      <Image source={require('./daonv1.png')}
        style={{ width: 300, height: 300 }}
      />
      <Text>Họ tên : Nguyễn Viết Đạo</Text>
      <Text>Tuổi : 23</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
const HomeStack1 = createStackNavigator();

const navOptionHander = () => ({
  headerShow: false
})

function HomeStack() {
  return (
    <HomeStack1.Navigator initialRouteName="Home">
      <HomeStack1.Screen name="Home" component={HomeScreen} options={navOptionHander} />
      <HomeStack1.Screen name="HomeDetails" component={HomeScreenDetail} options={navOptionHander} />
    </HomeStack1.Navigator>
  );
}

const StackSetting = createStackNavigator();

function SettingsStack() {
  return (
    <StackSetting.Navigator initialRouteName="Setting">
      <StackSetting.Screen name="Setting" component={SettingsScreen} options={navOptionHander} />
      <StackSetting.Screen name="SettingDetail" component={SettingsScreenDetail} options={navOptionHander} />
    </StackSetting.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigation() {

  return (
    <Tab.Navigator style={{ backgroundColor: '#660099' }}>
      <Tab.Screen name="Home" component={HomeStack}
        options={{
          tabBarIcon: () => < FontAwesome name='home' size={30} />
        }}
      />
      <Tab.Screen name="Settings" component={SettingsStack}
        options={{
          tabBarIcon: () => < FontAwesome name='gear' size={30} />
        }}
      />
      <Tab.Screen name="HoSo" component={HoSoScreen}
        options={{
          tabBarIcon: () => < FontAwesome name='address-book' size={30} />
        }}
      />
    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (

    <NavigationContainer style={styles.DrawerNavigator}>

      <Drawer.Navigator initialRouteName="MenuTab" >
        <Drawer.Screen name="MenuTab" component={TabNavigation} />

        <Drawer.Screen name="Notifications" component={NotificationsScreen}
          options={{
            drawerIcon: ({
              size
            }) => (
              <FontAwesome name='home' size={20} />
            ),
          }}
        />

        <Drawer.Screen name="Search" component={SearchScreen}
          options={{
            drawerIcon: ({
              size
            }) => (
              <FontAwesome name='search' size={20} />
            ),
          }}

        />
        <Drawer.Screen name="Facebook" component={FacebookScreen}
          options={{
            drawerIcon: ({
              size
            }) => (
              <FontAwesome name='facebook' size={20} />
            ),
          }}
        />
      </Drawer.Navigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  DrawerNavigator: {
    backgroundColor: 'red'
  }
})