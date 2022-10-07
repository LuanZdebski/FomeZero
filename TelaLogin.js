import React from "react";
import {Text, View, StyleSheet, Image, TextInput, Button} from "react-native";
import { estilos} from "./Estilos";
function TelaLogin() {  
return <View style={estilos.DivRosaGeral}>
    <View style={estilos.DivTituloLogin}>
        <Image style={estilos.TituloLogin} source={require('./Source/Titulo.png')}></Image>
    </View>
    <View style={estilos.DivCampoLogin}>
        <Text style={estilos.TextPreto}>Usuário:</Text>
        <TextInput style={estilos.inputBox}></TextInput>
        <Text style={estilos.TextPreto}>Senha:</Text>
        <TextInput style={estilos.inputBox}></TextInput>
        <View style={estilos.buttonLogin}><Button title="Entrar" color='#eb3b5b'></Button></View>
        <View style={{paddingTop:80}}></View>
        <Text style={{paddingBottom:15}}>Ainda não possui conta? Registre-se!</Text>
        <View style={estilos.buttonLogin}><Button title="Registrar" color='#eb3b5b'></Button></View>
        
    </View>
</View>

};


export default TelaLogin;