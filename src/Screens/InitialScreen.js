import React from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    Image
} from 'react-native';
import AGRButton from '../Components/AGRButton';
import SmallLogo from '../Components/SmallLogo';



export default class InitialScreen extends React.Component {
    render() {
        return (
            <ScrollView style={{padding: 20}}>
              <SmallLogo />
                <Text
                    style={{fontSize: 27}}>
                    Welcome
                </Text>
                <View style={{margin:20}} />
                <AGRButton
                  onPress={() => this.props.navigation.navigate('profile')}
                  text="Perfil"
                />
                <AGRButton
                  onPress={() => this.props.navigation.navigate('edit')}
                  text="Editar Perfil"
                />
                <AGRButton
                  onPress={() => this.props.navigation.navigate('list')}
                  text="Ver médicos"
                />
                <AGRButton
                  onPress={() => this.props.navigation.navigate('newManager')}
                  text="Criar novos gerentes"
                />
                // Verificar o uso do Employee
                <AGRButton
                  onPress={() => this.props.navigation.navigate('EmployeeProfile')}
                  text="Employee Profile"
                />
                // Verificar o uso do perfil gestor
                <AGRButton
                  onPress={() => this.props.navigation.navigate('ProfileManager')}
                  text="Perfil gestor"
                />
                <AGRButton
                  onPress={() => this.props.navigation.navigate('login')}
                  text="Logout"
                />
                </ScrollView>
              );
    }
}
