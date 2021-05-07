import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import fonts from "../../../../Components/fonts";

const styles = StyleSheet.create({
  /////////////// SENDER_STYLES ////////////////

  mainDateHeaderContainer: {
    height: hp(5),
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(3),
    marginLeft: wp(3),
    width: wp(90),
  },
  leftGrayLineContainer: {
    height: hp(0.1),
    marginLeft: wp(1),
    marginRight: wp(2),
    width: wp(30),
    backgroundColor: "lightgray",
  },
  monthTextContainer: {
    textAlign: "center",
    width: wp(25),
    color: "gray",
    fontSize: RFPercentage(1.7),
    fontWeight: "600",
    fontFamily: fonts.poppinsRegular,
  },
  rightGrayLineContainer: {
    height: hp(0.1),
    width: wp(30),
    backgroundColor: "lightgray",
  },
  mainChatTextContainer: {
    flexDirection: "row-reverse",
    marginTop: hp(2),
    width: wp(95),
    paddingLeft: wp(2),
    paddingBottom: hp(1),
  },
  activeLinearGradientContainer: {
    width: 70,
    height: 70,
    borderRadius: wp(12),
    borderWidth: hp(2),
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFFFFF",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
  },
  addUserContainer: {
    width: 62,
    height: 62,
    borderRadius: wp(12),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  activeBadgeContainer: {
    position: "absolute",
    top: 2,
    left: 3,
    elevation: 5,
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 20,
  },
  activeBadgeStyleContainer: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: "#6ED440",
  },
  avatarContainer: {
    borderRadius: RFPercentage(4.5),
    borderColor: "#FFFFFF", //#F5F5F5
    borderWidth: wp(1),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  badgeContainer: {
    width: wp(3),
    height: wp(3),
    borderRadius: wp(1.5),
  },
  textandDateContainer: {
    marginRight: wp(2),
    borderRadius: wp(3),
    paddingLeft: wp(5),
    marginLeft: wp(15),
  },
  imageBase64Container: {
    borderTopLeftRadius: hp(0.5),
    borderTopRightRadius: hp(0.5),
    height: hp(30),
    width: wp(60),
  },
  attachmentContainer:{
    backgroundColor: "lightgreen",
    borderTopLeftRadius: hp(1.5),
    borderTopRightRadius:hp(1.5)
  },
  imageBase64ViewContainer: {
    backgroundColor: "#F5F5F5",
    borderRadius: hp(1.5),
  },
  itemMessageTextContainer: {
    color: "#595959",
    paddingLeft: wp(3),
    paddingTop: hp(3),
    paddingRight: wp(3),
    fontSize: RFPercentage(1.7),
  },
  creationDateViewContainer: {
    flex: 3,
    alignItems: "flex-end",
    marginRight: wp(4),
    marginBottom: hp(2),
    marginLeft: wp(2),
    marginTop: hp(0.1),
  },
  creationDateTextContainer: {
    color: "#454545",
    fontSize: RFPercentage(1.5),
    fontFamily: fonts.poppinsRegular,
  },

  /////////////// RECEIVER_STYLES ////////////////

  receiverMainChatTextContainer: {
    flexDirection: "row",
    marginTop: hp(2),
    width: wp(95),
    paddingLeft: wp(2),
    paddingBottom: wp(1),
  },
  receiverLinearGradientContainer: {
    width: 70,
    height: 70,
    borderRadius: wp(12),
    borderWidth: hp(2),
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFFFFF",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
  },
  receiverActiveBadgeContainer: {
    position: "absolute",
    top: 2,
    right: 3,
    elevation: 5,
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 20,
  },
  receiverActiveBadgeStyleContainer: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: "#6ED440",
  },
  receiverAvatarContainer: {
    borderRadius: RFPercentage(4.5),
    borderColor: "lightgray",
    borderWidth: wp(1.4),
  },
  receiverBadgeContainer: {
    position: "absolute",
    top: 3,
    right: 3,
  },
  receiverBadgeStylesContainer: {
    width: wp(3),
    height: wp(3),
    borderRadius: wp(1.5),
  },
  receiverMessageViewContainer: {
    marginLeft: wp(2),
    paddingRight: wp(5),
    marginRight: wp(15),
  },
  receiverImageBase64Container: {
    backgroundColor: "#FF5F4E",
    borderRadius: hp(1.5),
    padding: wp(2),
  },
  receiverItemMessageTextContainer: {
    color: "#fff",
    flexDirection: "column",
    borderRadius: hp(2),
    fontSize: RFPercentage(1.7),
  },
  receiverCreationDateViewContainer: {
    flex: 1,
    alignItems: "flex-start",
    marginBottom: hp(2),
    marginRight: wp(2),
    marginLeft: wp(2),
  },
  receiverCreationDateTextContainer: {
    color: "#FFFFFF",
    fontSize: RFPercentage(1.5),
    fontFamily: fonts.poppinsRegular,
  },
  receiveImageContainer: {
    borderTopLeftRadius: hp(2),
    borderTopRightRadius: hp(2),
    height: hp(25),
    width: wp(50),
  },
});
export default styles;
