import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const layout = () => {
  return (
    <Stack>
      <Stack.Screen
      name="index"
      option={{
        headerShown: false
      }}
      />
       <Stack.Screen
      name="home/index"
      option={{
        headerShown: false
      }}
      />
      
    </Stack>
  )
}
 const styles = StyleSheet.create({
    
 })
export default layout