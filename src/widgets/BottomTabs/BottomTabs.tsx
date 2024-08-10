import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React, { Fragment } from 'react'
import { View } from 'react-native'
import { TabBtn } from './TabBtn'
import { StyleSheet } from 'react-native'
import { OpenActions } from '@features/openActionsModa/OpenActions'
import HomeIcon from '@icons/home.svg'
import ProfileIcon from '@icons/profile.svg'
import ChatsIcon from '@icons/chat.svg'
import VaultIcon from '@icons/vault.svg'
import { RootNavigationParam } from 'src/app/navigation/types'
import Svg, { SvgProps } from 'react-native-svg'

export const BottomTabs = ({ navigation, state }: BottomTabBarProps) => {
  const goToTab = (routeName: keyof typeof state.routeNames) => {
    navigation.navigate(routeName)
  }

  const iconsByRouteName: Record<
    keyof RootNavigationParam,
    React.FC<SvgProps>
  > = {
    Home: HomeIcon,
    Profile: ProfileIcon,
    Vault: VaultIcon,
    Chats: ChatsIcon,
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isMiddleIndex =
          index === Math.floor((state.routeNames.length - 1) / 2)

        const Icon = iconsByRouteName[route.name] as React.FC<SvgProps>

        const isActive = state.index === index
        return isMiddleIndex ? (
          <Fragment key={route.key}>
            <TabBtn
              isActive={isActive}
              onPress={() => goToTab(route.name)}
              Icon={Icon}
            >
              {route.name}
            </TabBtn>
            <OpenActions />
          </Fragment>
        ) : (
          <TabBtn
            isActive={isActive}
            key={route.key}
            onPress={() => goToTab(route.name)}
            Icon={Icon}
          >
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
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#000',
  },
})
