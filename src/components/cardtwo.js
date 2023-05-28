import React from "react";
import { View, Text, Image, ViewBase, ScrollView, Button, StyleSheet,Modal,Pressable} from "react-native";
import { useState } from "react";
import violetCard from "../../assets/violet.png";


const cardtwo = () => {
  const violet = "#2a1253";
  const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <View style={{ alignItems: "center", paddingTop: 15 }}>
        <View
          style={{
            backgroundColor: violet,
            justifyContent: "center",
            width: 300,
            alignItems: "center",
            borderRadius: 10,
            padding: 15,
          }}
        >
          <Image
            source={violetCard}
            style={{
              width: 170,
              height: 240,
              borderRadius: 5,
              borderWidth: 2,
              borderColor: "#fff",
            }}
          ></Image>
          <Text
            style={{
              paddingTop: 15,
              fontSize: 25,
              fontWeight: "bold",
              color: "#fff",
              alignItems: "center",
            }}
          >
            СТУДЕНТ
          </Text>
          <Text
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              fontWeight: "300",
              textAlign: "center",
              color: "#fff",
              paddingTop: 5,
            }}
          >
            Карта «Студенческая». Проезд по тарифу 50 тенге. карта будет
            индивидуальным, с фотографией и данными студента.
          </Text>
          <View
            style={{
              backgroundColor: "#fff",
              padding: 10,
              paddingHorizontal: 30,
              marginTop: 18,
              borderRadius: 10,
            }}
          >
            <Button
              onPress={()=>setModalVisible(true)}
              title="Подать заявку"
              color={violet}
              accessibilityState="learn me about"
            />
          </View>
        </View>
    {/* modal */}
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Сканируйте QR код!</Text>
            <Image source={{uri:"https://nursultan12345.github.io/tolem/tolem/images/qr2.png"}} style={styles.modalImage}></Image>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Закрыть</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      </View>

    
    );
}
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2a1253',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 25
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontSize:25,
    },
    modalImage:{
        width:200,
        height:200
    }
  });
export default cardtwo;