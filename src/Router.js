import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainPage from './Pages/Main';
import SearchPage from './Pages/Search';
import ProfilePage from './Pages/Profile';
import LoginPage from './Pages/Login';
import MoviesListPage from './Pages/MovieList/MoviesListPage';
import DetailPage from './Pages/Detail';
import Theme from './Assets/Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainPageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="MainPage"
        component={MainPage}
      />
      <Stack.Screen
        options={({route}) => ({
          title: setHeaderTitle(route.params),
          ...headerStyle,
        })}
        name="MoviesListPage"
        component={MoviesListPage}
      />
      <Stack.Screen
        name="DetailPage"
        component={DetailPage}
        options={{...headerStyle}}
      />
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

// Tab Navigation iconlarını set eden ve tıklandığı durumda rengini değiştiren fonksiyon
function handleTabBarIcons(focused, iconName) {
  return (
    <Icon
      name={iconName}
      size={30}
      style={{color: focused ? 'white' : 'grey'}}
    />
  );
}

// MoviesListPages sayfasına navigate edilen yere göre headerTitle ayarlayan fonksiyon (Recent Movies - See More,
// Disney,Marvel,vb)
function setHeaderTitle(params) {
  const {name, companyIndex} = params;
  switch (name) {
    case 'POPULAR':
      return 'Popular Movies';
    case 'RECENT':
      return 'Recent Movies';
    case 'LIST': {
      switch (companyIndex) {
        case 0:
          return 'Disney';
        case 1:
          return 'Pixar';
        case 2:
          return 'Marvel';
        case 3:
          return 'Star Wars';
      }
    }
    default:
      return;
  }
}

const tabBarStyle = {
  backgroundColor: Theme.tabBarColor,
  height: 60,
  borderTopColor: Theme.main,
};

const headerStyle = {
  headerStyle: {
    backgroundColor: Theme.cardColor,
  },
  headerTitleStyle: {
    color: 'white',
    fontFamily: 'OpenSans-Bold',
  },
  headerTitleAlign: 'center',
};

export default Router;
