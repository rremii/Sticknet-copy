import { OpenCreateNote } from '@features/openCreateNote/OpenCreateNote'
import { ShadowBtn } from '@shared/ui/ShadowBtn'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FilesIcon from '@icons/files.svg'

export const NotesMenu = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#1B1B1B' }}>
      <View style={styles.subHeader}>
        <OpenCreateNote
          Button={
            <ShadowBtn icon={<FilesIcon color="#fff" width={20} height={20} />}>
              Note
            </ShadowBtn>
          }
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  subHeader: {
    padding: 10,
    flexDirection: 'row',
    gap: 10,
  },
})
