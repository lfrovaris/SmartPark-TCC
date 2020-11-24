# Smart Park (Aplicação para monitoramento de vagas de estacionamento público)

Esse projeto propõem uma aplicação com o intuito de disponibilizar para os usuários (motoristas), onde se encontram as vagas de estacionamentos livres em uma determinada região que possua um monitoramento. Propõem-se a utilização de sensores LoRaWAN nos quais utilizam o protocolo MQTT para realizar a comunicação com o servidor. A partir do uso do aplicativo, é possivel reduzir o tempo gasto na procura de vagas de estacionamento, consequentemente, reduzindo o congestionamento de carros, e devido ao menos tempo rodando à procura de um lugar disponível, também a redução de CO2.


# Arquitetura

Esse projeto é dividito em três componentes. API, Front end (disponibilização das informações ao usuário), e serviço de comunicação pelo protocolo MQTT. A Arquitetura do sistema é mostrado abaixo:


<img src="App/assets/fullarqt.jpg" alt="Arquitetura do Sistema" width="60%" height="60%"/>


## API backend
<img src="App/assets/mvc2.png" alt="Arquitetura Flux" width="60%" height="60%"/>

## Serviço MQTT
<img src="App/assets/mqtt.jpg" alt="Arquitetura MQTT" width="60%" height="60%"/>

## Requerimentos para reprodutibilidade

* Node
* Emulador para android (Foi utilizado bluestacks) ou um aparelho Android
* Android studio (Atualização dos arquivos gradle)
* jdk-8u261-windows-x64
