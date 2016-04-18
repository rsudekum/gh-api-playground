'use strict';

var React = require('react-native');
var { StyleSheet } = React;

var styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontWeight: 'normal'
  },
  h2: {
    fontSize: 22,
    fontWeight: 'normal'
  },
  h3: {
    fontSize: 15,
    fontWeight: 'normal'
  },
  h4: {
    fontSize: 12,
    fontWeight: 'normal'
  },
  h5: {
    fontSize: 12,
    fontWeight: 'normal'
  },
  h6: {
    fontSize: 20,
    fontWeight: 'normal'
  },
  strong: {
    fontWeight: 'bold'
  },
  container: {
    flex: 1
  },
  transparent: {
    backgroundColor: 'transparent'
  },
  justifyContentCenter: {
    justifyContent: 'center'
  },
  alignItemsCenter: {
    alignItems: 'center'
  },
  textAlingCenter: {
    textAlign: 'center'
  },
  keylineAll: {
    borderColor: 'rgba(0,0,0,0.10)',
    borderWidth: 1
  },
  keylineBottom: {
    borderBottomColor: 'rgba(0,0,0,0.10)',
    borderBottomWidth: 1
  },
  keylineTop: {
    borderTopColor: 'rgba(0,0,0,0.10)',
    borderTopWidth: 1
  },
  keylineLeft: {
    borderLeftColor: 'rgba(0,0,0,0.10)',
    borderLeftWidth: 1
  },
  keylineRight: {
    borderRightColor: 'rgba(0,0,0,0.10)',
    borderRightWidth: 1
  },
  round: {
    borderRadius: 3
  },
  pad0: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 5
  },
  pad0y: {
    paddingTop: 5,
    paddingBottom: 5
  },
  pad0x: {
    paddingRight: 5,
    paddingLeft: 5
  },
  pad1: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10
  },
  pad15: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    paddingLeft: 15
  },
  pad2: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20
  },
  pad4: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingRight: 40,
    paddingLeft: 40
  },
  pad1x: {
    paddingLeft: 10,
    paddingRight: 10
  },
  pad2x: {
    paddingLeft: 20,
    paddingRight: 20
  },
  pad4x: {
    paddingLeft: 40,
    paddingRight: 40
  },
  pad1y: {
    paddingTop: 10,
    paddingBottom: 10
  },
  pad2y: {
    paddingTop: 20,
    paddingBottom: 20
  },
  pad4y: {
    paddingTop: 40,
    paddingBottom: 40
  },
  pad8: {
    paddingTop: 80,
    paddingBottom: 80,
    paddingRight: 80,
    paddingLeft: 80
  },
  pad8y: {
    paddingTop: 80,
    paddingBottom: 80
  },
  pad8x: {
    paddingLeft: 80,
    paddingRight: 80
  },
  spaceBottom0: {
    marginBottom: 5
  },
  spaceBottom1: {
    marginBottom: 10
  },
  spaceBottom2: {
    marginBottom: 20
  },
  spaceTop0: {
    marginTop: 5
  },
  spaceTop1: {
    marginTop: 10
  },
  spaceTop2: {
    marginTop: 20
  },
  spaceTop3: {
    marginTop: 60
  },
  marginLeft4: {
    marginLeft: 40
  },
  fillDark: {
    backgroundColor: '#404040'
  },
  fillGray: {
    backgroundColor: '#eee'
  },
  fillGreyDark: {
    backgroundColor: '#404040'
  },
  fillGrayDark: {
    backgroundColor: '#404040'
  },
  fillWhite: {
    backgroundColor: '#fff'
  },
  fillLight: {
    backgroundColor: '#f8f8f8'
  },
  fillBlueLight: {
    backgroundColor: '#3bb2d0'
  },
  fillCyan: {
    backgroundColor: '#3bb2d0'
  },
  fillMidnight: {
    backgroundColor: '#142736'
  },
  fillBlue: {
    backgroundColor: '#4183c4'
  },
  fillDenim: {
    backgroundColor: '#3c4e5a'
  },
  fillNavy: {
    backgroundColor: '#28353d'
  },
  fillNavyDark: {
    backgroundColor: '#222B30'
  },
  fillPurple: {
    backgroundColor: '#8a8acb'
  },
  fillGreen: {
    backgroundColor: '#56b881'
  },
  fillYellow: {
    backgroundColor: '#f1f075'
  },
  fillOrange: {
    backgroundColor: '#ee8a65'
  },
  fillDarken0: {
    backgroundColor: 'rgba(0,0,0,0.05)'
  },
  fillDarken1: {
    backgroundColor: 'rgba(0,0,0,0.25)'
  },
  fillDarken2: {
    backgroundColor: 'rgba(0,0,0,0.50)'
  },
  fillDarken3: {
    backgroundColor: 'rgba(0,0,0,0.75)'
  },
  fillLighten0: {
    backgroundColor: 'rgba(255,255,255,0.10)'
  },
  fillLighten1: {
    backgroundColor: 'rgba(255,255,255,0.25)'
  },
  fillLighten2: {
    backgroundColor: 'rgba(255,255,255,0.50)'
  },
  fillLighten3: {
    backgroundColor: 'rgba(255,255,255,0.75)'
  },
  webView: {
    marginTop:100,
    height: 100
  },
  centering: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  block: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  pinRight: {
    position: 'absolute',
    right: 0
  },
  pinTop: {
    position: 'absolute',
    top: 0
  },
  pinLeft: {
    position: 'absolute',
    left: 0
  },
 pinBottom: {
   position: 'absolute',
   bottom: 0
 },
 small: {
   fontSize: 11
 },
 greyText: {
   color: 'rgb(144, 144, 144)'
 },
 whiteText: {
   color: 'white'
 },
 blueText: {
   color: '#4183c4'
 },
 fillRed: {
   backgroundColor: '#E63636'
 },
 fillGreen: {
   backgroundColor: '#48EA5C'
 },
 fillLightGrey: {
   backgroundColor: '#fafafa'
 },
 fillWhite: {
   backgroundColor: 'white',
 },
 round: {
   borderRadius: 3
 }
});

module.exports = styles;
