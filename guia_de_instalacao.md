# Guia de instalação

Para rodar o projeto é preciso seguir os seguintes passos de instalação.

### Instalar JDK 8

- `sudo add-apt-repository ppa:webupd8team/java`

- `sudo apt-get update`

- `sudo apt-get install oracle-java8-installer`

Setar variaveis ambiente por default:
  - `sudo apt-get install oracle-java8-set-default`

### Instalar CURL

- `sudo apt install curl`

### Instalar Node

- `curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -`
- `sudo apt-get install -y nodejs`

### Instalar React-Native

- `npm install -g react-native-cli`

### Instalar Android Studio

- [Android Studio](https://developer.android.com/studio/index.html?hl=pt-br)

Dependencias android studio

- `sudo apt-get install lib32z1 lib32ncurses5 lib32stdc++6`

### Como rodar o projeto

Dentro da pasta do projeto e com emulador aberto

`npm install`

`react-native run-android`

OBS: em alguns casos e necessarios configurar as variaveis de ambiente

Abra o bashrc:

`nano ~/.bashrc`

adicione as seguintes linhas:

`export ANDROID_HOME=/home/*SEUUSUÁRIO*/Android/Sdk`
`export PATH=$PATH:$ANDROID_HOME/tools`
`export PATH=$PATH:$ANDROID_HOME/platform-tools`
