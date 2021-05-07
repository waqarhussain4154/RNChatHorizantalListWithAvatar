// import React, {Component} from 'react';
// import {Text, View, TouchableOpacity} from 'react-native';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import axios from 'axios';
// export default class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//        lastImage:''
//     }
//   }
  
//   selectPhotoTapped() {
//     const options = {
//       quality: 1.0,
//       maxWidth: 500,
//       maxHeight: 500,
//       noData: true,
//       storageOptions: {
//         skipBackup: true,
//       },
//     };
//     // Image Show as Preview
//     launchCamera(options, response => {
//       if (response.didCancel) {
//         console.log('User cancelled photo picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         let source = {uri: response.uri};
//         let image={
//           uri:source.uri,
//           type:'image/jpeg',
//           name:"image"
//         }
//         console.log(`image`, image);
//         this.setState({lastImage:image})
        
//       }
//     });
//   }

//   async SendData(){
//     let data = new FormData();
//     data.append('user_id', "1541");
//     data.append('national_insurance_number', "sdrtf43");
//     data.append('home_address', 'multanabad');
//     data.append('job_sectors', "1234");
//     data.append('type', "staff");
//     data.append('identification_card', this.state.lastImage);
//     console.log('data', data)

//    axios({
//      url: "http://obstechnologia.com/izero/api/create_profile",
//       method: "POST",
//       data: data,
//       headers: {
//         "Content-Type": "multipart/form-data",
//            Accept: "application/json",
//           Authorization: "Bearer " + "64|dA5NUZXn6pnftV00GevkXBiVrAhucxaPVuOgGT3V",
//       },
//     })
//       .then((response) => {
//         console.log(`response`, response)
//         return response;
//       })
//       .catch((error) => {
//        console.log(`error`, error)
//       });


//     // try {
//     //   let response = await fetch("http://obstechnologia.com/izero/api/create_profile", {
//     //     method: "POST",
//     //     withCredentials: true,
  
//     //     headers: {
//     //       "Content-Type": "multipart/form-data",
//     //       Accept: "application/json",
        
//     //       Authorization: "Bearer " + "39|fdrv6RNzFYccRcWdlfYS6Nse6NKtGMHhfIWbgZHr",
//     //     },
//     //     body: data,
//     //   });
  
//     //   let responseJson = await response.json();
//     //   console.log("responseJson is", responseJson);
  
    
//     // } catch (error) {
//     //   console.log(`error`, error)
//     // }
//   }
//   render() {
//     return (
//       <View style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}>
//         <Text> textInComponent </Text>
//         <TouchableOpacity onPress={() => this.selectPhotoTapped()}>
//           <Text style={{color: 'black'}}>select picture</Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//         onPress={() => this.SendData()}
//         >
//           <Text style={{color: 'black'}}>Call API</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
import React, { Component } from 'react'
import { Text, StyleSheet, View,FlatList } from 'react-native'
import ActiveComponent from "./PureComponent/Active/index";
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      identifierAvatar: "",
      Identifier:"",
       data:[
        {
            "IdentifierShipment": 28,
            "ShipmentInvoiceNumber": "006100820125958",
            "ShipmentCategoryName": "قطع منزلية مفردة",
            "ShipmentCategoryID": "6",
            "ShipmentTitle": "مستلزمات المكتب والمنزل",
            "ShipmentMasterImage": "https://abdulrahman.fleeti.com/img/defaultship.png",
            "IdentifierClient": 74,
            "FirstName": "قصي",
            "LastName": "زين",
            "IsOnline": false,
            "Avatar_base64": null
        },
        {
            "IdentifierShipment": 41,
            "ShipmentInvoiceNumber": "003240920084806",
            "ShipmentCategoryName": "السيارات",
            "ShipmentCategoryID": "3",
            "ShipmentTitle": "المركبات - API",
            "ShipmentMasterImage": "https://abdulrahman.fleeti.com/img/defaultship.png",
            "IdentifierClient": 9,
            "FirstName": "احمد",
            "LastName": "خالد",
            "IsOnline": false,
            "Avatar_base64": "https://abdulrahman.fleeti.com/save_file/uploads/provider/user/5bf637c8_60262ff8dbde39.10627959.jpg"
        },
        {
            "IdentifierShipment": 50,
            "ShipmentInvoiceNumber": "008250920080139",
            "ShipmentCategoryName": "القوارب والدبابت البحريه",
            "ShipmentCategoryID": "8",
            "ShipmentTitle": "Muhammad Arshad Alam Butt",
            "ShipmentMasterImage": "https://abdulrahman.fleeti.com/img/defaultship.png",
            "IdentifierClient": 9,
            "FirstName": "احمد",
            "LastName": "خالد",
            "IsOnline": false,
            "Avatar_base64": "https://abdulrahman.fleeti.com/save_file/uploads/provider/user/5bf637c8_60262ff8dbde39.10627959.jpg"
        },
        {
            "IdentifierShipment": 119,
            "ShipmentInvoiceNumber": "008170221222429",
            "ShipmentCategoryName": "القوارب والدبابت البحريه",
            "ShipmentCategoryID": "8",
            "ShipmentTitle": "قوارب",
            "ShipmentMasterImage": "https://abdulrahman.fleeti.com/img/defaultship.png",
            "IdentifierClient": 504,
            "FirstName": "ahmed",
            "LastName": "salem",
            "IsOnline": false,
            "Avatar_base64": "https://abdulrahman.fleeti.com/save_file/uploads/provider/user/5e769e67_601ec048287474.22511405.jpeg"
        },
        {
            "IdentifierShipment": 189,
            "ShipmentInvoiceNumber": "011170221223158",
            "ShipmentCategoryName": "مواد خام",
            "ShipmentCategoryID": "11",
            "ShipmentTitle": "مواد البناء",
            "ShipmentMasterImage": "https://abdulrahman.fleeti.com/img/defaultship.png",
            "IdentifierClient": 504,
            "FirstName": "ahmed",
            "LastName": "salem",
            "IsOnline": false,
            "Avatar_base64": "https://abdulrahman.fleeti.com/save_file/uploads/provider/user/5e769e67_601ec048287474.22511405.jpeg"
        }]
    }
  }
  
  render() {
    return (
      <View>
        <FlatList
                horizontal={true}
                data={this.state.data}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
               // inverted={language === "en" ? false : true}
                contentContainerStyle={{ alignSelf: "flex-start" }}
                renderItem={({ item }) => (
                  <ActiveComponent
                    item={item}
                  //  props={this.props}
                    //language={language}
                  //  Identifier={this.state.Identifier}
                    //IdentifierAvatar={this.state.identifierAvatar}
                  />
                )}
              // onEndReachedThreshold={0.01}
               // onEndReached={this.LoadMoreActiveChat}
                // ListFooterComponent={this.renderFooter.bind(this)}
                keyExtractor={(item) => item.id}
              />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
