import moment from "moment";
import styles from "./style.js";
import Pdf from "react-native-pdf";
import React, { PureComponent } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import fonts from "../../../../Components/fonts";
import { Avatar, Badge } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  PermissionsAndroid,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import RNFetchBlob from "rn-fetch-blob";
import { TouchableOpacity } from "react-native-gesture-handler";

// Dummy Data
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

class PureSingleChat extends PureComponent {
  actualDownload = (link) => {
    console.log(`link`, link)
    const { dirs } = RNFetchBlob.fs;
    RNFetchBlob.config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        title: `test.pdf`,
        path: `${dirs.DownloadDir}/test.pdf`,
      },
    })

      // .fetch('GET', 'http://www.africau.edu/images/default/sample.pdf', {})
      .fetch(
        "GET",
      link,
        {}
      )
      .then((res) => {
        console.log("The file saved to ", res.path());
      })
      .catch((e) => {
        console.log(e);
      });
  };

  downloadFile = async (link) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.actualDownload(link);
      } else {
        Alert.alert(
          "Permission Denied!",
          "You need to give storage permission to download the file"
        );
      }
    } catch (err) {
      console.warn(err);
    }
  };
  render() {
    let item = this.props.item;
    let toAvatar = this.props.ToAvatar;
    let language = this.props.language;
    let Identifier = this.props.Identifier.toString();
    let identifierAvatar = this.props.IdentifierAvatar;
    let newTime = item.CreationDate.split(" ");
    let newDate = newTime[0].split("-");
    let mon = newDate[1];
    let mon1 = parseInt(mon);
    let combineDate = newDate[2] + " " + month[mon1 - 1] + " " + newDate[0];
    // if(item.Image_base64)
    // {
    //   let type=item.Image_base64.split('.')[4].trim()
    // console.log('type', type)
    // }
    //console.log('item.Image_base64', item.Image_base64)
    return (
      <View>
        {item.Divider == 1 && (
          <View style={styles.mainDateHeaderContainer}>
            <View style={styles.leftGrayLineContainer} />
            <Text style={styles.monthTextContainer}>{combineDate}</Text>
            <View style={styles.rightGrayLineContainer} />
          </View>
        )}
        {item.IdentifierFrom === Identifier ? (
          <View style={styles.mainChatTextContainer}>
            <View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View style={styles.activeLinearGradientContainer}>
                  {identifierAvatar ? (
                    <Avatar
                      rounded
                      source={{
                        uri: identifierAvatar,
                      }}
                      size={60}
                    />
                  ) : (
                    <View style={styles.addUserContainer}>
                      <FontAwesome5
                        name={"user-alt"}
                        size={40}
                        color={"#909497"}
                      />
                    </View>
                  )}
                </View>
                {item.IsOnline && (
                  <Badge
                    status="success"
                    containerStyle={styles.activeBadgeContainer}
                    badgeStyle={styles.activeBadgeStyleContainer}
                  />
                )}
              </View>
            </View>
            {item.Image_base64 ? (
              <>
                <View style={styles.textandDateContainer}>
                  {item.sent_Status === "1" ? (
                    <View>
                      {item.Image_base64 ? (
                        <View>
                          <Image
                            style={styles.imageBase64Container}
                            resizeMode={"stretch"}
                            source={{ uri: item.Image_base64.uri }}
                          />
                          <View
                            style={[
                              styles.imageBase64ViewContainer,
                              {
                                borderTopLeftRadius: item.Image_base64
                                  ? hp(0)
                                  : hp(1.5),
                                borderTopRightRadius: item.Image_base64
                                  ? hp(0)
                                  : hp(1.5),
                              },
                            ]}
                          >
                            <Text
                              style={[
                                styles.itemMessageTextContainer,
                                {
                                  fontFamily:
                                    language === "en"
                                      ? fonts.poppinsRegular
                                      : fonts.arabic1,
                                },
                              ]}
                            >
                              {item.Message}
                            </Text>
                            {item.sent_Status === "1" ? (
                              <View style={{ paddingHorizontal: wp(2) }}>
                                <ActivityIndicator size={15} color="#909497" />
                              </View>
                            ) : (
                              <View style={styles.creationDateViewContainer}>
                                {item.Seen ? (
                                  <Text
                                    style={styles.creationDateTextContainer}
                                  >
                                    {moment(item.CreationDate).format(
                                      "hh:mm A"
                                    )}{" "}
                                    {"  "}• Seen
                                  </Text>
                                ) : (
                                  <Text
                                    style={styles.creationDateTextContainer}
                                  >
                                    {moment(item.CreationDate).format(
                                      "hh:mm A"
                                    )}{" "}
                                    {"  "}• Unseen
                                  </Text>
                                )}
                              </View>
                            )}
                          </View>
                        </View>
                      ) : null}
                    </View>
                  ) : (
                    <View>
                      {item.Image_base64.split(".")[4].trim() === "jpg" ? (
                        <>
                          <Image
                            style={styles.imageBase64Container}
                            resizeMode={"stretch"}
                            source={{
                              uri: item.Image_base64,
                            }}
                          />
                          <View
                            style={[
                              styles.imageBase64ViewContainer,
                              {
                                borderTopLeftRadius: item.Image_base64
                                  ? hp(0)
                                  : hp(1.5),
                                borderTopRightRadius: item.Image_base64
                                  ? hp(0)
                                  : hp(1.5),
                              },
                            ]}
                          >
                            <Text
                              style={[
                                styles.itemMessageTextContainer,
                                {
                                  fontFamily:
                                    language === "en"
                                      ? fonts.poppinsRegular
                                      : fonts.arabic1,
                                },
                              ]}
                            >
                              {item.Message}
                            </Text>
                            {item.sent_Status === "1" ? (
                              <View style={{ paddingHorizontal: wp(2) }}>
                                <ActivityIndicator size={15} color="#909497" />
                              </View>
                            ) : (
                              <View style={styles.creationDateViewContainer}>
                                {item.Seen ? (
                                  <Text
                                    style={styles.creationDateTextContainer}
                                  >
                                    {moment(item.CreationDate).format(
                                      "hh:mm A"
                                    )}{" "}
                                    {"  "}• Seen
                                  </Text>
                                ) : (
                                  <Text
                                    style={styles.creationDateTextContainer}
                                  >
                                    {moment(item.CreationDate).format(
                                      "hh:mm A"
                                    )}{" "}
                                    {"  "}• Unseen
                                  </Text>
                                )}
                              </View>
                            )}
                          </View>
                        </>
                      ) : (
                        /// Others
                        <View style={styles.imageBase64ViewContainer}>
                          <TouchableOpacity  onPress={() => this.downloadFile(item.Image_base64)}> 
                          <View
                            style={{
                              flexDirection: "row",
                              paddingLeft: wp(2),
                              paddingTop: hp(1),
                              paddingRight: wp(3),
                            }}
                          >
                            <Fontisto
                              name={"file-1"}
                              size={20}
                              color={"#909497"}
                            />
                            <Text
                              style={{
                                color: "#595959",
                                paddingLeft: wp(3),
                                paddingTop: hp(0),
                                paddingRight: wp(3),
                                fontSize: RFPercentage(1.7),
                              }}
                            >
                              {item.Message}
                            </Text>
                          </View>
                          </TouchableOpacity>
                          {item.sent_Status === "1" ? (
                            <View style={{ paddingHorizontal: wp(2) }}>
                              <ActivityIndicator size={15} color="#909497" />
                            </View>
                          ) : (
                            <View
                              style={[
                                styles.creationDateViewContainer,
                                { marginBottom: hp(0) },
                              ]}
                            >
                              {item.Seen ? (
                                <Text style={styles.creationDateTextContainer}>
                                  {moment(item.CreationDate).format("hh:mm A")}{" "}
                                  {"  "}• Seen
                                </Text>
                              ) : (
                                <Text style={styles.creationDateTextContainer}>
                                  {moment(item.CreationDate).format("hh:mm A")}{" "}
                                  {"  "}• Unseen
                                </Text>
                              )}
                            </View>
                          )}
                          <Text
                            style={{
                              paddingLeft: wp(3),
                              paddingRight: wp(2),
                              color: "black",
                              fontSize: RFPercentage(1.7),
                            }}
                          >
                            {item.Image_base64.split(".")[4].trim()}
                          </Text>
                        </View>
                      )}
                    </View>
                  )}
                </View>
              </>
            ) : (
              <View style={styles.textandDateContainer}>
                <View
                  style={[
                    styles.imageBase64ViewContainer,
                    {
                      borderTopLeftRadius: item.Image_base64 ? hp(0) : hp(1.5),
                      borderTopRightRadius: item.Image_base64 ? hp(0) : hp(1.5),
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.itemMessageTextContainer,
                      {
                        fontFamily:
                          language === "en"
                            ? fonts.poppinsRegular
                            : fonts.arabic1,
                      },
                    ]}
                  >
                    {item.Message}
                  </Text>
                  {item.sent_Status === "1" ? (
                    <View style={{ paddingHorizontal: wp(2) }}>
                      <ActivityIndicator size={15} color="#909497" />
                    </View>
                  ) : (
                    <View style={styles.creationDateViewContainer}>
                      {item.Seen ? (
                        <Text style={styles.creationDateTextContainer}>
                          {moment(item.CreationDate).format("hh:mm A")} {"  "}•
                          Seen
                        </Text>
                      ) : (
                        <Text style={styles.creationDateTextContainer}>
                          {moment(item.CreationDate).format("hh:mm A")} {"  "}•
                          Unseen
                        </Text>
                      )}
                    </View>
                  )}
                </View>
              </View>
            )}
          </View>
        ) : (
          <View style={styles.receiverMainChatTextContainer}>
            <View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View style={styles.receiverLinearGradientContainer}>
                  {toAvatar ? (
                    <Avatar
                      rounded
                      source={{
                        uri: item.Image_base64,
                      }}
                      size={60}
                    />
                  ) : (
                    <View style={styles.addUserContainer}>
                      <FontAwesome5
                        name={"user-alt"}
                        size={40}
                        color={"#909497"}
                      />
                    </View>
                  )}
                </View>
                {item.IsOnline && (
                  <Badge
                    status="success"
                    containerStyle={styles.receiverActiveBadgeContainer}
                    badgeStyle={styles.receiverActiveBadgeStyleContainer}
                  />
                )}
              </View>
            </View>
            <View style={styles.receiverMessageViewContainer}>
              {item.Image_base64 && (
                <View>
                  <Image
                    style={styles.receiveImageContainer}
                    resizeMode={"cover"}
                    source={{
                      uri: item.Image_base64,
                    }}
                  />
                </View>
              )}

              <View
                style={[
                  styles.receiverImageBase64Container,
                  {
                    borderTopLeftRadius: item.Image_base64 ? hp(0) : hp(1.5),
                    borderTopRightRadius: item.Image_base64 ? hp(0) : hp(1.5),
                  },
                ]}
              >
                <Text
                  style={[
                    styles.receiverItemMessageTextContainer,
                    {
                      fontFamily:
                        language === "en"
                          ? fonts.poppinsRegular
                          : fonts.arabic1,
                    },
                  ]}
                >
                  {item.Message}
                </Text>
                <View style={styles.receiverCreationDateViewContainer}>
                  {item.Seen ? (
                    <Text style={styles.receiverCreationDateTextContainer}>
                      {moment(item.CreationDate).format("hh:mm A")} {"  "}• Seen
                    </Text>
                  ) : (
                    <Text style={styles.receiverCreationDateTextContainer}>
                      {moment(item.CreationDate).format("hh:mm A")} {"  "}•
                      Uneen
                    </Text>
                  )}
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default PureSingleChat;
