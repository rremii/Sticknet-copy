import { OpenCreateFolder } from '@features/openCreateFolder/OpenCreateFolder'
import { ShadowBtn } from '@shared/ui/ShadowBtn'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import FilesIcon from '@icons/files.svg'
import { UploadFile } from '@features/uploadFile/UploadFile'
import { OpenCreateNote } from '@features/openCreateNote/OpenCreateNote'

export const FilesMenu = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#1B1B1B' }}>
      <View style={styles.subHeader}>
        <OpenCreateFolder
          Button={
            <ShadowBtn icon={<FilesIcon color="#fff" width={20} height={20} />}>
              Folder
            </ShadowBtn>
          }
        />
        <UploadFile
          Button={
            <ShadowBtn icon={<FilesIcon color="#fff" width={20} height={20} />}>
              Upload
            </ShadowBtn>
          }
        />
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
