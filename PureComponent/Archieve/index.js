import styles from "../Styles/style";
import TimeAgo from "react-native-timeago";
import React, { PureComponent } from "react";
import arabicstyles from "../Styles/styleArabic";
import fonts from "../../../../Components/fonts";
import { Avatar, Badge } from "react-native-elements";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

class AtchieveComponent extends PureComponent {
  render() {
    let item = this.props.item;
    let props = this.props.props;
    let language = this.props.language;
    let Identifier = this.props.Identifier.toString();
    let IdentifierAvatar = this.props.IdentifierAvatar;
    let ShipmentMasterImage = this.props.item.ShipmentMasterImage;

    return language === "en" ? (
      <>
        <View style={styles.myChatsMainContainer}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("ChatSingleScreen", {
                flag: "1",
                item: item,
                name: item.ToName,
                language: language,
                Identifier: Identifier,
                ToAvatar: item.ToAvatar,
                IdentifierAvatar: IdentifierAvatar,
                ShipmentMasterImage:ShipmentMasterImage,
              })
            }
            style={styles.mainTouchContainer}
          >
            <View style={styles.mainItemContainer}>
              <View>
                <View style={styles.myChatsLinearGradientContainer}>
                  {item.ToAvatar ? (
                    <Avatar
                      rounded
                      source={{
                        uri: item.ToAvatar,
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
                    containerStyle={styles.myChatsBadgeContainer}
                    badgeStyle={styles.myChatsBadgeStyleContainer}
                  />
                )}
              </View>
              <View style={styles.toNameContainer}>
                <Text
                  style={[
                    styles.toNameTextContainer,
                    {
                      fontFamily:
                        language === "en"
                          ? fonts.poppinsRegular
                          : fonts.arabic1,
                    },
                  ]}
                >
                  {item.ToName}
                </Text>
                <Text
                  style={[
                    styles.shipmentTitleTextContainer,
                    {
                      fontFamily:
                        language === "en"
                          ? fonts.poppinsRegular
                          : fonts.arabic1,
                    },
                  ]}
                >
                  {item.ShipmentTitle}
                </Text>
                <View style={styles.shipmentTitleHeaderContainer}>
                  <Text
                    style={[
                      styles.shipmentCategoryNameContainer,
                      {
                        fontFamily:
                          language === "en"
                            ? fonts.poppinsRegular
                            : fonts.arabic1,
                      },
                    ]}
                  >
                    {item.ShipmentCategoryName}
                  </Text>
                  <Text style={styles.lastSceenTextContainer}>
                    - <TimeAgo time={item.LastChange} />
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </>
    ) : (
      <>
        <View style={arabicstyles.myChatsMainContainer}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("ChatSingleScreen", {
                flag: "1",
                item: item,
                name: item.ToName,
                language: language,
                Identifier: Identifier,
                ToAvatar: item.ToAvatar,
                IdentifierAvatar: IdentifierAvatar,
              })
            }
            style={arabicstyles.mainTouchContainer}
          >
            <View style={arabicstyles.toNameContainer}>
              <Text
                style={[
                  arabicstyles.toNameTextContainer,
                  {
                    fontFamily:
                      language === "en" ? fonts.poppinsRegular : fonts.arabic1,
                  },
                ]}
              >
                {item.ToName}
              </Text>
              <Text
                style={[
                  arabicstyles.shipmentTitleTextContainer,
                  ,
                  {
                    fontFamily:
                      language === "en" ? fonts.poppinsRegular : fonts.arabic1,
                  },
                ]}
              >
                {item.ShipmentTitle}
              </Text>
              <View style={arabicstyles.shipmentTitleHeaderContainer}>
                <Text style={arabicstyles.lastSceenTextContainer}>
                  - <TimeAgo time={item.LastChange} />
                </Text>
                <Text
                  style={[
                    arabicstyles.shipmentCategoryNameContainer,
                    {
                      fontFamily:
                        language === "en"
                          ? fonts.poppinsRegular
                          : fonts.arabic1,
                    },
                  ]}
                >
                  {item.ShipmentCategoryName}
                </Text>
              </View>
            </View>
            <View style={arabicstyles.mainItemContainer}>
              <View>
                <View style={arabicstyles.myChatsLinearGradientContainer}>
                  {item.ToAvatar ? (
                    <Avatar
                      rounded
                      source={{
                        uri: item.ToAvatar,
                      }}
                      size={60}
                    />
                  ) : (
                    <View style={arabicstyles.addUserContainer}>
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
                    containerStyle={arabicstyles.myChatsBadgeContainer}
                    badgeStyle={arabicstyles.myChatsBadgeStyleContainer}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default AtchieveComponent;
