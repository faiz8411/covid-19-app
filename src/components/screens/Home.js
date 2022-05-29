import { Entypo, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from './../theme/colors';
import { spacing } from './../theme/spacing';
import Caller from "./Caller";
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: "#473F97" }}>
        <View style={styles.notification}>
          <SimpleLineIcons name="menu" size={24} color="white" />
          <Ionicons name="notifications-circle-sharp" size={24} color="white" />
        </View>
        <View style={styles.covid}>
          <View>
            <Text
              style={{ color: colors.white, fontWeight: "bold", fontSize: 23 }}
            >
              Covid-19
            </Text>
          </View>
          <View style={styles.usa}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginHorizontal: 10,
              }}
            >
              <Image
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                  marginRight: 10,
                }}
                source={{
                  uri: "https://i.ibb.co/DVy7G26/image-17.png",
                }}
              />
              <Text>USA</Text>
              <Entypo name="triangle-down" size={19} color="#61688B" />
            </View>
          </View>
        </View>
        <View style={{ marginVertical: 30, marginHorizontal: 30 }}>
          <Text
            style={{ fontSize: 18, color: colors.white, fontWeight: "600" }}
          >
            Are you feeling sick?
          </Text>
          <Text style={{ fontSize: 14, color: colors.grey, fontWeight: "300" }}>
            If you feel sick with any of covid-19 symptoms please call or SMS us
            immediately for help.
          </Text>
              </View>
              <Caller/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    margin: spacing[4],
  },
    notification: {
       
        flexDirection:"row",
      justifyContent:"space-between"
    },
    usa:{
        backgroundColor:colors.white,
        height: 40,
        width: 100,
        borderRadius:35,
        marginRight: spacing[5],
        justifyContent: "center",
        alignItems:"center"
        
        
    },
    covid: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical:40
    }
});