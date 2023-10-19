import { StyleSheet, Pressable, Text, TextInput, View, Button } from "react-native";

export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Instagram
            </Text>

            <View>
                <TextInput style={styles.textInput} placeholder="Telefone, nome de usuário ou email">

                </TextInput>
                <TextInput style={styles.textInput} placeholder="Senha">

                </TextInput>
                <Pressable style={styles.senhaBotton}>
                    <Text style={styles.senhaText}>Esqueceu a senha?</Text>
                </Pressable>
                <Pressable style={styles.entrarButton}>
                    <Text style={styles.entrarText}>Entrar</Text>
                </Pressable>
            </View>

            <Text style={styles.alternativoText}>ou</Text>

            <View>
                <Pressable>
                    <Text style={styles.facebookText}>Entrar com o Facebook</Text>
                </Pressable>
            </View>

            <View style={styles.cadastroButton}>
                <Text style={styles.contaText}>Não tem uma conta?</Text>
                <Pressable>
                    <Text style={styles.cadastroText}>Cadastre-se.</Text>
                </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    titulo: {
        color: '#fff',
        fontSize: 40,
        flexShrink: 0,
    },
    textInput: {
        backgroundColor: '#262626',
        color: '#DFDFDF',
        width: 400,
        height: 50,
        fontSize: 20,
        borderRadius: 10,
        marginBottom: 15,
        padding: 10,
        
    },
    senhaBotton: {
        alignItems: 'flex-end',
        margin: 10,
    },
    senhaText: {
        color: '#00A3FF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    entrarButton: {
        backgroundColor: '#00A3FF',
        width: 400,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    entrarText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
    alternativoText: {
        color: '#fff',
        fontSize: 25,
    },
    facebookText: {
        color: '#00A3FF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    cadastroButton: {
        flexDirection: 'row',
    },
    contaText: {
        color: '#DFDFDF',
        marginRight: 10,
    },
    cadastroText: {
        color: '#00A3FF',
        fontWeight: 'bold',
    }
})