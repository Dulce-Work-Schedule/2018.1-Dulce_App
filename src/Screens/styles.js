import {purple_dulce, orange_dulce, black_dulce} from '../styles';

export const styles = {
  editScreen: {
    container: {
      justifyContent: 'center',
      marginTop: 10,
      padding: 15,
      backgroundColor: '#FFF'
    },
    text: {
      fontSize: 15,
      marginBottom: 10,
      marginLeft: 10,
      color: black_dulce,
      fontFamily: 'Lato'
    },
    button: {
      height: 50,
      paddingHorizontal: 30,
      backgroundColor: purple_dulce,
      alignSelf: 'center',
      alignItems: 'center',
      width: 180,
      marginTop: '80%'
    }
  },
  listProfile: {
    center: {
      flex: 1,
      flexDirection: 'column',
      marginLeft: 2
    },

    colorPurple: {
      color: purple_dulce,
      fontSize: 17,
      fontFamily: 'Raleway'
    },
    img: {
      height: 40,
      resizeMode: 'contain'
    },
    text: {
      fontFamily: 'Lato',
      color: black_dulce,
      fontSize: 17
    },
    textPurple: {
      fontFamily: 'Lato',
      color: purple_dulce,
      fontSize: 17
    }
  },
  loginScreen: {
    container: {
      flex: 1,
      flexDirection: 'column',
      padding: 15,
      backgroundColor: '#FFF'
    },
    input: {
      height: 36,
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
      marginBottom: 10,
      width: '100%',
      alignSelf: 'center'
    },
    text: {
      fontSize: 15,
      color: purple_dulce
    },
    buttonRegister: {
      alignSelf: 'center'
    },
    logo: {
      alignSelf: 'center',
      height: 140,
      resizeMode: 'contain',
      backgroundColor: 'transparent',
      marginTop: 20
    }
  },
  newProfile: {
    picker: {
      height: 50,
      width: 300,
      marginBottom: 5,
      marginLeft: 10
    },
    container: {
      justifyContent: 'center',
      marginTop: 10,
      padding: 15,
      backgroundColor: '#FFF'
    },
    title: {
      fontSize: 30,
      alignSelf: 'center',
      marginBottom: 30
    },
    buttonText: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center'
    },
    item: {
      borderBottomWidth: 1
    },
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    },
    text: {
      fontSize: 15,
      marginBottom: 10,
      marginLeft: 10,
      color: 'black',
      fontFamily: 'Raleway'
    }
  },
  newUser: {
    container: {
      justifyContent: 'center',
      marginTop: 10,
      padding: 15,
      backgroundColor: '#FFF'
    },
    title: {
      fontSize: 30,
      alignSelf: 'center',
      marginBottom: 30
    },
    buttonText: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center'
    },
    item: {
      borderBottomWidth: 1
    },
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    }
  },
  notificationScreen: {
    view1: {
      flex: 1,
      flexDirection: 'row'
    },
    view2: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center'
    },
    view3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    view4: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    buttonView: {
      flexDirection: 'row',
      marginLeft: '60%'
    },
    colorPurple: {
      color: purple_dulce,
      fontSize: 15,
      fontFamily: 'Raleway'
    },
    colorOrange: {
      color: orange_dulce,
      fontSize: 15,
      fontFamily: 'Raleway'
    },
    text: {
      color: black_dulce,
      fontSize: 16,
      fontFamily: 'Lato',
      textDecorationStyle: 'solid'
    },
    icon: {
      fontSize: 40,
      color: purple_dulce
    }
  },
  profileManagerScreen: {
    container: {
      flex: 8,
      flexDirection: 'column',
      backgroundColor: '#FFF'
    },
    text: {
      fontSize: 22,
      marginBottom: 15,
      fontFamily: 'Lato'
    },
    textProfile: {
      fontSize: 25,
      marginBottom: 15,
      alignSelf: 'center',
      fontFamily: 'Raleway'
    },
    textEmail: {
      fontSize: 22,
      marginBottom: 15,
      fontFamily: 'Lato',
      alignSelf: 'center'
    },
    transparentButton: {
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      marginBottom: 20,
      width: 170,
      margin: 20,
      marginHorizontal: 120
    },
    textButtonTrasparent: {
      color: orange_dulce,
      fontSize: 17,
      fontFamily: 'Raleway',
      alignItems: 'center'
    }
  },
  weekSchedule: {
    item: {
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      marginTop: 17
    },
    emptyDate: {
      height: 15,
      flex: 1,
      paddingTop: 30
    }
  }
};

export const editScreen = styles.editScreen;
export const listProfile = styles.listProfile;
export const loginScreen = styles.loginScreen;
export const newProfile = styles.newProfile;
export const newUser = styles.newUser;
export const notificationScreen = styles.notificationScreen;
export const profileManagerScreen = styles.profileManagerScreen;
export const weekSchedule = styles.weekSchedule;
