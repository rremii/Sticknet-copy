import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React from 'react'
import {
  View,
  Text,
  FlatList,
  Modal,
  LayoutChangeEvent,
  Dimensions,
} from 'react-native'
import { TabBtn } from './TabBtn'
import { StyleSheet } from 'react-native'

const OpenActions = () => {
  return (
    <>
      <Text>OpenActions</Text>
      <View style={actionsStyles(-500).modal}>
        <Text>Modal</Text>
      </View>
    </>
  )
}

const actionsStyles = (bottom: number = 0) =>
  StyleSheet.create({
    modal: {
      position: 'absolute',
      bottom,
      zIndex: 100,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(49, 176, 102, 0.5)',
      width: Dimensions.get('window').width,
      height: 500,
    },
  })

export const BottomTabs = ({ navigation, state }: BottomTabBarProps) => {
  const goToTab = (routeName: keyof typeof state.routeNames) => {
    navigation.navigate(routeName)
  }

  return (
    <View style={styles.container}>
      {state.routeNames.map((route, index) => {
        const isMiddleIndex =
          index === Math.round((state.routes.length - 1) / 2)

        return isMiddleIndex ? (
          <>
            <OpenActions />
            <TabBtn key={index} onPress={() => goToTab(route)}>
              {route}
            </TabBtn>
          </>
        ) : (
          <TabBtn key={index} onPress={() => goToTab(route)}>
            {route}
          </TabBtn>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingRight: 20,
    paddingLeft: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
  },
})
