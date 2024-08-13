import { utils } from '@react-native-firebase/app'
import { auth, storage } from 'firebase.config'
import React, { useEffect, useState } from 'react'
import { View, Text, Button, PermissionsAndroid } from 'react-native'
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker'
import * as MediaLibrary from 'expo-media-library'

// const requestFileSystemPermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.requestMultiple([
//       PermissionsAndroid.PERMISSIONS.ACCESS_MEDIA_LOCATION,
//       PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
//       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//     ])

//     console.log(granted)
//   } catch (err) {
//     console.warn(err)
//   }
// }

export const Home = () => {
  const user = auth.currentUser

  const [fileResponse, setFileResponse] = useState<DocumentPickerResponse[]>([])
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions()

  useEffect(() => {
    if (!user || !fileResponse.length) return

    const file = fileResponse[0]

    console.log(file)

    const { name, uri } = file

    const reference = storage.ref(user.uid + '/' + name)

    reference
      .putFile(uri)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [fileResponse])

  const handleDocumentSelection = async () => {
    try {
      await requestPermission()
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [DocumentPicker.types.images],
      })
      setFileResponse(response)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View>
      {fileResponse.map((file, index) => (
        <Text
          key={index.toString()}
          style={{ color: 'white' }}
          numberOfLines={1}
          ellipsizeMode={'middle'}
        >
          {file?.uri}
        </Text>
      ))}

      <Button title="Select 📑" onPress={handleDocumentSelection} />
    </View>
  )
}
