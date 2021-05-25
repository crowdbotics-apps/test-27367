import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_0_4} />
      <View style={styles.View_0_5} />
      <View style={styles.View_0_6}>
        <Text style={styles.Text_0_6}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
          neque posuere justo dictum vehicula vel sit amet est. Nam lacinia
          lectus tellus, at bibendum ex condimentum sit amet. Quisque a dapibus
          sapien.
        </Text>
      </View>
      <View style={styles.View_0_7}>
        <Text style={styles.Text_0_7}>Function</Text>
      </View>
      <View style={styles.View_0_8}>
        <Text style={styles.Text_0_8}>Growth</Text>
      </View>
      <View style={styles.View_0_9}>
        <Text style={styles.Text_0_9}>+</Text>
      </View>
      <View style={styles.View_0_10}>
        <Text style={styles.Text_0_10}>Creativity</Text>
      </View>
      <View style={styles.View_0_11}>
        <Text style={styles.Text_0_11}>+</Text>
      </View>
      <View style={styles.View_0_12}>
        <Text style={styles.Text_0_12}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
          neque posuere justo dictum vehicula vel sit amet est.
        </Text>
      </View>
      <View style={styles.View_0_13}>
        <Text style={styles.Text_0_13}>Shoot an email at me</Text>
      </View>
      <View style={styles.View_0_14}>
        <Text style={styles.Text_0_14}>tosinoyinloyejr@gmail.com</Text>
      </View>
      <View style={styles.View_0_15}>
        <Text style={styles.Text_0_15}>Behance</Text>
      </View>
      <View style={styles.View_0_16}>
        <Text style={styles.Text_0_16}>Pinterest</Text>
      </View>
      <View style={styles.View_0_17}>
        <Text style={styles.Text_0_17}>Instagram</Text>
      </View>
      <View style={styles.View_0_18}>
        <Text style={styles.Text_0_18}>© 2021</Text>
      </View>
      <View style={styles.View_0_19}>
        <Text style={styles.Text_0_19}>Let’s Work Together</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3f3/52bc/b34f0faf642aaa5ec781f7324dd27855"
        }}
        style={styles.ImageBackground_0_20}
      />
      <View style={styles.View_0_73}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e7e/dc91/5a62f913bbae9032f2e50f3922a45f7c"
          }}
          style={styles.ImageBackground_0_74}
        />
        <View style={styles.View_0_78}>
          <Text style={styles.Text_0_78}>Process</Text>
        </View>
        <View style={styles.View_0_79}>
          <Text style={styles.Text_0_79}>Work</Text>
        </View>
        <View style={styles.View_0_80}>
          <Text style={styles.Text_0_80}>Contact</Text>
        </View>
      </View>
      <View style={styles.View_0_81}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e01d/648a/99ad7e19f1bb8bfec0b64d9450ac6819"
          }}
          style={styles.ImageBackground_0_82}
        />
        <View style={styles.View_0_83}>
          <Text style={styles.Text_0_83}>BeyondRetail, Brand Identity</Text>
        </View>
      </View>
      <View style={styles.View_0_84}>
        <View style={styles.View_0_85} />
        <View style={styles.View_0_86}>
          <Text style={styles.Text_0_86}>
            More About Maindrag, Art Direction, Illustration
          </Text>
        </View>
      </View>
      <View style={styles.View_0_87}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a2/53f8/85d1a4d5fdf869825f495bd03f3929dd"
          }}
          style={styles.ImageBackground_0_88}
        />
        <View style={styles.View_0_89}>
          <Text style={styles.Text_0_89}>Vault, Typograpy</Text>
        </View>
      </View>
      <View style={styles.View_0_90}>
        <View style={styles.View_0_91} />
        <View style={styles.View_0_92}>
          <Text style={styles.Text_0_92}>Mileage, Brand Identity</Text>
        </View>
      </View>
      <View style={styles.View_0_93}>
        <View style={styles.View_0_94} />
        <View style={styles.View_0_95}>
          <Text style={styles.Text_0_95}>Goshen Household, Brand Identity</Text>
        </View>
      </View>
      <View style={styles.View_0_96}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f68f/bef1/19de9cc95a54524a479e64134bbd349e"
          }}
          style={styles.ImageBackground_0_97}
        />
        <View style={styles.View_0_98}>
          <Text style={styles.Text_0_98}>Traditional Rulers, Illustration</Text>
        </View>
      </View>
      <View style={styles.View_0_99}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff9f/2a1c/9366ed0a69b20703aa33dcfedc211c09"
          }}
          style={styles.ImageBackground_0_100}
        />
        <View style={styles.View_0_101}>
          <Text style={styles.Text_0_101}>A Fond Shop, Typography</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5c1/286a/a5f0d0ea5729e83ed6b1392109e417b8"
        }}
        style={styles.ImageBackground_0_102}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/823d/7202/3ed758a9661943b0c4fd14a12fc3d38a"
        }}
        style={styles.ImageBackground_0_103}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1df/cf45/03dd2c9839967aff7307031acff9df8f"
        }}
        style={styles.ImageBackground_0_104}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab15/32e0/89c1273481f93464a21fd92fcccf3c84"
        }}
        style={styles.ImageBackground_0_105}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("377.45901639344265%") },
  View_0_4: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("91.12021857923497%"),
    minHeight: hp("91.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("247.40437158469945%"),
    backgroundColor: "rgba(0, 66, 66, 1)"
  },
  View_0_5: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("91.12021857923497%"),
    minHeight: hp("91.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(231, 231, 231, 1)"
  },
  View_0_6: {
    width: wp("29.905366288854722%"),
    minWidth: wp("29.905366288854722%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.446808510638306%"),
    top: hp("309.71239433913934%")
  },
  Text_0_6: {
    color: "rgba(231, 231, 231, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_7: {
    width: wp("33.297872340425535%"),
    minWidth: wp("33.297872340425535%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.148936170212767%"),
    top: hp("265.28760566086066%")
  },
  Text_0_7: {
    color: "rgba(19, 105, 105, 1)",
    fontSize: 58,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_8: {
    width: wp("27.97872340425532%"),
    minWidth: wp("27.97872340425532%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.148936170212767%"),
    top: hp("276.76301549692624%")
  },
  Text_0_8: {
    color: "rgba(19, 105, 105, 1)",
    fontSize: 58,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_9: {
    width: wp("4.574468085106383%"),
    minWidth: wp("4.574468085106383%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.446808510638299%"),
    top: hp("276.76301549692624%")
  },
  Text_0_9: {
    color: "rgba(19, 105, 105, 1)",
    fontSize: 58,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_10: {
    width: wp("35.42553191489362%"),
    minWidth: wp("35.42553191489362%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.148936170212767%"),
    top: hp("288.2384253329918%")
  },
  Text_0_10: {
    color: "rgba(231, 231, 231, 1)",
    fontSize: 58,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_11: {
    width: wp("4.574468085106383%"),
    minWidth: wp("4.574468085106383%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.446808510638299%"),
    top: hp("288.2384253329918%")
  },
  Text_0_11: {
    color: "rgba(231, 231, 231, 1)",
    fontSize: 58,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_12: {
    width: wp("27.679693343791556%"),
    minWidth: wp("27.679693343791556%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.382978723404255%"),
    top: hp("352.3224043715847%")
  },
  Text_0_12: {
    color: "rgba(105, 106, 106, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_13: {
    width: wp("27.679693343791556%"),
    minWidth: wp("27.679693343791556%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.446808510638306%"),
    top: hp("352.3224043715847%")
  },
  Text_0_13: {
    color: "rgba(105, 106, 106, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_14: {
    width: wp("34.14893617021277%"),
    minWidth: wp("34.14893617021277%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.446808510638306%"),
    top: hp("354.5081967213115%")
  },
  Text_0_14: {
    color: "rgba(105, 106, 106, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_15: {
    width: wp("5.638297872340425%"),
    minWidth: wp("5.638297872340425%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.446808510638306%"),
    top: hp("367.07650273224044%")
  },
  Text_0_15: {
    color: "rgba(0, 66, 66, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_16: {
    width: wp("5.851063829787234%"),
    minWidth: wp("5.851063829787234%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.57446808510637%"),
    top: hp("367.07650273224044%")
  },
  Text_0_16: {
    color: "rgba(0, 66, 66, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_17: {
    width: wp("6.489361702127659%"),
    minWidth: wp("6.489361702127659%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.80851063829788%"),
    top: hp("367.07650273224044%")
  },
  Text_0_17: {
    color: "rgba(0, 66, 66, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_18: {
    width: wp("4.680851063829787%"),
    minWidth: wp("4.680851063829787%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.382978723404255%"),
    top: hp("367.07650273224044%")
  },
  Text_0_18: {
    color: "rgba(0, 66, 66, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_19: {
    width: wp("23.085106382978722%"),
    minWidth: wp("23.085106382978722%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.382978723404255%"),
    top: hp("346.72131147540983%")
  },
  Text_0_19: {
    color: "rgba(0, 66, 66, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_20: {
    width: wp("46.595708968791556%"),
    height: hp("52.449798583984375%"),
    top: hp("26.55729700307377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.489361702127663%")
  },
  View_0_73: {
    width: wp("86.48936170212767%"),
    minWidth: wp("86.48936170212767%"),
    height: hp("11.969355807278326%"),
    minHeight: hp("11.969355807278326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.382978723404255%"),
    top: hp("6.391214672984972%")
  },
  ImageBackground_0_74: {
    width: wp("10.638297872340425%"),
    height: hp("11.969367272215463%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_78: {
    width: wp("5.851063829787234%"),
    minWidth: wp("5.851063829787234%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.22340425531915%"),
    top: hp("3.935500181437842%")
  },
  Text_0_78: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_79: {
    width: wp("4.148936170212766%"),
    minWidth: wp("4.148936170212766%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.82978723404255%"),
    top: hp("3.935500181437842%")
  },
  Text_0_79: {
    color: "rgba(0, 66, 66, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_80: {
    width: wp("6.0638297872340425%"),
    minWidth: wp("6.0638297872340425%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.42553191489363%"),
    top: hp("3.935500181437842%")
  },
  Text_0_80: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_81: {
    width: wp("57.446808510638306%"),
    minWidth: wp("57.446808510638306%"),
    height: hp("44.53551912568306%"),
    minHeight: hp("44.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.382978723404255%"),
    top: hp("99.31693989071039%")
  },
  ImageBackground_0_82: {
    width: wp("57.446808510638306%"),
    minWidth: wp("57.446808510638306%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_0_83: {
    width: wp("18.404255319148934%"),
    minWidth: wp("18.404255319148934%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42.3497267759563%")
  },
  Text_0_83: {
    color: "rgba(105, 106, 106, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_84: {
    width: wp("57.57199551196809%"),
    minWidth: wp("57.57199551196809%"),
    height: hp("44.53551912568306%"),
    minHeight: hp("44.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.04502576462766%"),
    top: hp("194.672131147541%")
  },
  View_0_85: {
    width: wp("57.57199551196809%"),
    minWidth: wp("57.57199551196809%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_86: {
    width: wp("30.531914893617024%"),
    minWidth: wp("30.531914893617024%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42.3497267759563%")
  },
  Text_0_86: {
    color: "rgba(105, 106, 106, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_87: {
    width: wp("27.659574468085108%"),
    minWidth: wp("27.659574468085108%"),
    height: hp("44.53551912568306%"),
    minHeight: hp("44.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.95744680851064%"),
    top: hp("99.31693989071039%")
  },
  ImageBackground_0_88: {
    width: wp("27.659574468085108%"),
    minWidth: wp("27.659574468085108%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_0_89: {
    width: wp("10.957446808510639%"),
    minWidth: wp("10.957446808510639%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42.3497267759563%")
  },
  Text_0_89: {
    color: "rgba(105, 106, 106, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_90: {
    width: wp("27.659574468085108%"),
    minWidth: wp("27.659574468085108%"),
    height: hp("44.53551912568306%"),
    minHeight: hp("44.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.382978723404255%"),
    top: hp("194.672131147541%")
  },
  View_0_91: {
    width: wp("27.659574468085108%"),
    minWidth: wp("27.659574468085108%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(17, 91, 200, 1)"
  },
  View_0_92: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42.3497267759563%")
  },
  Text_0_92: {
    color: "rgba(105, 106, 106, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_93: {
    width: wp("27.659574468085108%"),
    minWidth: wp("27.659574468085108%"),
    height: hp("44.53551912568306%"),
    minHeight: hp("44.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.382978723404255%"),
    top: hp("146.9945355191257%")
  },
  View_0_94: {
    width: wp("27.659574468085108%"),
    minWidth: wp("27.659574468085108%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 123, 110, 1)"
  },
  View_0_95: {
    width: wp("22.127659574468083%"),
    minWidth: wp("22.127659574468083%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42.34972677595627%")
  },
  Text_0_95: {
    color: "rgba(105, 106, 106, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_96: {
    width: wp("27.659574468085108%"),
    minWidth: wp("27.659574468085108%"),
    height: hp("44.53551912568306%"),
    minHeight: hp("44.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.17021276595745%"),
    top: hp("146.9945355191257%")
  },
  ImageBackground_0_97: {
    width: wp("27.659574468085108%"),
    minWidth: wp("27.659574468085108%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_98: {
    width: wp("18.51063829787234%"),
    minWidth: wp("18.51063829787234%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42.34972677595627%")
  },
  Text_0_98: {
    color: "rgba(105, 106, 106, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_99: {
    width: wp("27.659574468085108%"),
    minWidth: wp("27.659574468085108%"),
    height: hp("44.53551912568306%"),
    minHeight: hp("44.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.95744680851064%"),
    top: hp("146.9945355191257%")
  },
  ImageBackground_0_100: {
    width: wp("27.659574468085108%"),
    minWidth: wp("27.659574468085108%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_0_101: {
    width: wp("16.70212765957447%"),
    minWidth: wp("16.70212765957447%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42.34972677595627%")
  },
  Text_0_101: {
    color: "rgba(105, 106, 106, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_102: {
    width: wp("10.539080031374667%"),
    minWidth: wp("10.539080031374667%"),
    height: hp("18.77751168006105%"),
    minHeight: hp("18.77751168006105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.943224318484042%"),
    top: hp("158.09758087324965%"),
    resizeMode: "cover"
  },
  ImageBackground_0_103: {
    width: wp("31.508402722947142%"),
    minWidth: wp("31.508402722947142%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.17021276595745%"),
    top: hp("194.672131147541%")
  },
  ImageBackground_0_104: {
    width: wp("26.063586295919215%"),
    minWidth: wp("26.063586295919215%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.67863821476064%"),
    top: hp("194.672131147541%")
  },
  ImageBackground_0_105: {
    width: wp("15.494246787213264%"),
    minWidth: wp("15.494246787213264%"),
    height: hp("13.336356741483094%"),
    minHeight: hp("13.336356741483094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.46564175220246%"),
    top: hp("208.49576022455602%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
