# Guia de instalação

Para rodar o projeto é preciso seguir os seguintes passos de instalação.

## Instalar JDK 8

```bash
sudo add-apt-repository ppa:webupd8team/java
```
```bash
sudo apt-get update
```
```bash
sudo apt-get install oracle-java8-installer
```
Setar variaveis ambiente por default:
```bash
sudo apt-get install oracle-java8-set-default
```
## Instalar Node
#### Instalar CURL
Tenha o CURL instalado:
```bash
sudo apt install curl
```

```bash
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
```
```bash
sudo apt-get install -y nodejs
```
## Instalar React-Native

```bash
sudo npm install -g react-native-cli
```

## Instalar Android Studio

- [Android Studio](https://developer.android.com/studio/index.html?hl=pt-br)

Dependencias android studio

```bash
sudo apt-get install lib32z1 lib32ncurses5 lib32stdc++6
```
## Instalar ambiente de testes

```bash
sudo docker build -t dulce_app .
```

## Instalação do Docker

### Instalação do Docker
```bash
sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
sudo apt-add-repository 'deb https://apt.dockerproject.org/repo ubuntu-xenial main'
sudo apt-cache policy docker-engine
sudo apt-get install docker-engine
```
### Instalação do Docker Compose

```bash
COMPOSE_RELEASE=$(curl https://api.github.com/repos/docker/compose/releases/latest -s | grep tag_name | cut -f 2 -d":" | cut -f 2 -d'"')
COMPOSE_VERSION="https://github.com/docker/compose/releases/download/${COMPOSE_RELEASE}/docker-compose-$(uname -s)-$(uname -m)"
sudo curl -L ${COMPOSE_VERSION} -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

```

## Como rodar o projeto
### Ambiente de Testes
Para executar os tests javascript:
```bash
sudo docker run -v $PWD:/app/ dulce_app npm run test
```
Dentro da pasta do projeto e com emulador aberto

```bash
npm install
```
```bash
react-native run-android
```
OBS: em alguns casos e necessarios configurar as variaveis de ambiente

Abra o bashrc:

```bash
nano ~/.bashrc
```
adicione as seguintes linhas:

```bash
export ANDROID_HOME=/home/*SEUUSUÁRIO*/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools

```
