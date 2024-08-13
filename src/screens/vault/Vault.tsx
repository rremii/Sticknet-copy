import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs'
import FilesIcon from '@icons/files.svg'
import PhotosIcon from '@icons/photos.svg'
import NotesIcon from '@icons/notes.svg'
import { FilesMenu } from '@widgets/filesMenu/FilesMenu'
import { PhotosMenu } from '@widgets/photosMenu/PhotosMenu'
import { NotesMenu } from '@widgets/notesMenu/NotesMenu'
import { FlatList } from 'react-native'

const Tab = createMaterialTopTabNavigator()

interface TabIconProps {
  focused: boolean
  color: string
}

export const Vault = () => {
  const topTabs = [
    {
      icon: ({ color }: TabIconProps) => (
        <FilesIcon color={color || 'white'} width={20} height={20} />
      ),
      name: 'Files',
      component: FilesMenu,
    },
    {
      icon: ({ color }: TabIconProps) => (
        <PhotosIcon color={color || 'white'} width={20} height={20} />
      ),
      name: 'Photos',
      component: PhotosMenu,
    },
    {
      icon: ({ color }: TabIconProps) => (
        <NotesIcon color={color || 'white'} width={20} height={20} />
      ),
      name: 'Notes',
      component: NotesMenu,
    },
  ]

  return (
    <Tab.Navigator screenOptions={navScreenOptions}>
      {topTabs.map((item) => (
        <Tab.Screen
          key={item.name}
          options={{
            tabBarIcon: item.icon,
          }}
          name={item.name}
          component={item.component}
        />
      ))}
    </Tab.Navigator>
  )
}

const navScreenOptions: MaterialTopTabNavigationOptions = {
  tabBarIndicatorStyle: {
    backgroundColor: '#867EF8',
  },
  tabBarIconStyle: {
    width: 20,
    height: 20,
  },
  tabBarStyle: {
    borderBottomColor: '#00000062',
    borderBottomWidth: 1,
    overflow: 'hidden',
    height: 50,
    backgroundColor: '#1B1B1B',
  },
  tabBarItemStyle: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabBarInactiveTintColor: '#e4e4e4',
  tabBarActiveTintColor: '#867EF8',
}
