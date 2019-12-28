import React, { Component, Fragment } from "react";
import { View, Text, Image, SafeAreaView, TextInput, ScrollView } from "react-native";
import * as Font from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './Style';

import Logo from './components/Logo'
import LayoutThumb from './components/LayoutThumb'
import Card from './components/Card'
import HomeIcon from './components/HomeIcon'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontsLoaded: false
    };
  }

  componentDidMount() {
    this._loadAssetAsync();
  }

  async _loadAssetAsync() {
    await Font.loadAsync({
      "sf-medium": require("./assets/Fonts/SF-Compact-Display-Medium.otf"),
      "sf-bold": require("./assets/Fonts/SF-Compact-Display-Bold.otf")
    });

    this.setState({ fontsLoaded: true });
  }

  mainView() {
    return(
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.headerWrapper}>
              <View style={styles.headerTop}>
                <Logo />
                <Image source={require('./assets/plus-button.png')} />
              </View>
              <View style={styles.headerBottom}>
                <View style={styles.header_BottomTitleWrap}>
                  <Text style={styles.header_bottomTitle}>Boards</Text>
                  <View style={styles.header_ChooseLayout}>
                    <LayoutThumb.style1 />
                    <View style={styles.header_ChooseLayout_divider} />
                    <LayoutThumb.style2 />
                  </View>
                </View>
              </View>
              <View style={styles.header_SearchWrapper}>
                <MaterialIcons name="search" size={24} color="#7E8CBA" />
                <TextInput placeholder="Search cards..." style={styles.header_SearchInput} placeholderTextColor="#8E9AC3" />
              </View>
              <View style={styles.header_NavigationWrapper}>
                <Text style={[styles.header_NavItem, styles.header_NavItemActive]}>All Boards</Text>
                <Text style={styles.header_NavItem}>Teams</Text>
                <Text style={styles.header_NavItem}>Personal</Text>
              </View>
          </View>
          <View style={styles.mainBottom}>
              <Card title="Google" logo={require('./assets/Img/Google_logo.png')} />
              <Card title="Facebook" logo={require('./assets/Img/Facebook_logo.png')} />
          </View>
        </ScrollView>
        <View style={styles.bottomNavigation}>
          <View style={styles.bottomNavigation_item}>
            <HomeIcon />
          </View>
          <View style={styles.bottomNavigation_item}>
            <MaterialIcons name="chat-bubble" size={24} color="#BAC5E9" />
          </View>
          <View style={styles.bottomNavigation_item}>
            <MaterialIcons name="notifications" size={24} color="#BAC5E9" />
          </View>
          <View style={styles.bottomNavigation_item}>
            <MaterialIcons name="person" size={24} color="#BAC5E9" />
          </View>   
        </View>
      </View>
    )
  }

  render() {
    return (
      <Fragment>
        <SafeAreaView style={styles.containerTop} />
        <SafeAreaView style={styles.container}>
        { this.state.fontsLoaded ? this.mainView() : null }
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default App;
