import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainPage from './Pages/Main';
import SearchPage from './Pages/Search';
import ProfilePage from './Pages/Profile';
import LoginPage from './Pages/Login';
import PopularMovies from './Pages/PopularMovies';
import RecentMovies from './Pages/RecentMovies';
import Theme from './Assets/Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainPageStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="PopularMovies" component={PopularMovies} />
      <Stack.Screen name="RecentMovies" component={RecentMovies} />
    </Stack.Navigator>
  );
};

const TabScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          ...tabBarStyle,
        },
      }}>
      <Tab.Screen
        name="Main"
        component={MainPageStack}
        options={{
          tabBarIcon: ({focused}) => handleTabBarIcons(focused, 'home-outline'),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{
          tabBarIcon: ({focused}) => handleTabBarIcons(focused, 'magnify'),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarIcon: ({focused}) =>
            handleTabBarIcons(focused, 'account-outline'),
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  const {user} = useSelector(s => s.auth);

  return (
    <NavigationContainer>
      {!user.token ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="LoginScreen" component={LoginPage} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={TabScreens} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

function handleTabBarIcons(focused, iconName) {
  return (
    <Icon
      name={iconName}
      size={30}
      style={{color: focused ? 'white' : 'grey'}}
    />
  );
}

const tabBarStyle = {
  backgroundColor: Theme.tabBarColor,
  height: 60,
  borderTopColor: Theme.main,
};

export default Router;
