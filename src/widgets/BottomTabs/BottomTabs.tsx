import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View } from 'react-native'
import { TabBtn } from './TabBtn'
import { StyleSheet } from 'react-native'
import { OpenActions } from '../../features/actionsModal/OpenActions'

export const BottomTabs = ({ navigation, state }: BottomTabBarProps) => {
  const goToTab = (routeName: keyof typeof state.routeNames) => {
    navigation.navigate(routeName)
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isMiddleIndex =
          index === Math.floor((state.routeNames.length - 1) / 2)

        return isMiddleIndex ? (
          <>
            <TabBtn key={route.key} onPress={() => goToTab(route)}>
              {route.name}
            </TabBtn>
            <OpenActions />
          </>
        ) : (
          <TabBtn key={route.key} onPress={() => goToTab(route)}>
            {route.name}
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
    backgroundColor: '#000',
  },
})
