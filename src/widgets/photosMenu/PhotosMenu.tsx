import { OpenCreateFolder } from '@features/openCreateFolder/OpenCreateFolder'
import { UploadFile } from '@features/uploadFile/UploadFile'
import { ShadowBtn } from '@shared/ui/ShadowBtn'
import { View, Text, StyleSheet } from 'react-native'
import FilesIcon from '@icons/files.svg'

export const PhotosMenu = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#1B1B1B' }}>
      <View style={styles.subHeader}>
        <UploadFile
          Button={
            <ShadowBtn icon={<FilesIcon color="#fff" width={20} height={20} />}>
              Upload
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
