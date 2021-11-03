
Feature: Testes de usabilidade, atributos e componentes na plataforma Take Blip

    Feature Description: Teste de usabilidade

  Realize uma bateria de testes na plataforma take blip para o chatbot: Chatbot Intelbras
  

@Acesso
  Scenario:  Validar acesso a plataforma take blip
  Given       Que eu estou na plataforma Take Blip
  Then        Deve ser possível utilizar acessar a plataforma para utilizar o chatbot.

@Informações 
  Scenario:  Validar componentes, atributos e valores na plataforma.
  Given       Que eu estou na plataforma Take Blip
  Then        Deve ser possível visualizar o comment icon, o nome do Chatbot e o status online, input text, input text placeholder e o botão enviar.


  Scenario:  Validar interação inicial do Chatbot
  Given       Que eu estou na plataforma Take Blip
  When        Envio uma mensagem de saudação "Olá"
  And         Visualizo a saudação incial "Olá, eu sou assistente virtual da intelbras e estou aqui para ajudar com a Linha Action!"
  And         Visualizo a pergunta "Conta ai, você possui algum produto da linha Action? Não Sabe? Então confirme na etiqueta embaixo do produto"
  Then        Deve ser possível visualizar um menu do tipo select: "1 - Sim, tenho roteadores Action. 2 - Não, possuo outro modelo 0 - Finalizar atendimento"
    
  Scenario:  Validar visualização de hora:minutos das mensagens
  Given       Que eu estou na plataforma Take Blip
  When        Clico no campo "digite sua mensagem aqui" e envio uma mensage através do msg-textarea. 
  And         Visualizo a saudação incial "Olá, eu sou assistente virtual da intelbras e estou aqui para ajudar com a Linha Action!"
  And         Visualizo a pergunta "Conta ai, você possui algum produto da linha Action? Não Sabe? Então confirme na etiqueta embaixo do produto"
  Then        Deve ser possível visualizar a hora:minutos de todas as mensagens enviadas & chatbot exibidas na plataforma.

  Scenario: Validar todo o fluxo de solicitação de suporte como provedor - Case1
  Given      Que eu tenho o menu inicial do Chatbot    

             ## Atualmente está sendo necessário enviar uma mensagem para iniciar uma conversa no Chatbot. 
  When       Clico no campo "digite sua mensagem aqui" e envio uma mensage através do msg-textarea. 
  
             ##MENU1 Case1 - Deve ser selecionado a opção1: Sim, tenho roteadores action 
  And        Visualizo a saudação incial "Olá, eu sou assistente virtual da intelbras e estou aqui para ajudar com a Linha Action!"
  And        Visualizo a pergunta "Conta ai, você possui algum produto da linha Action? Não Sabe? Então confirme na etiqueta embaixo do produto"
  And        Visualizo o menu inicial do tipo select
  When       Clico na opção "1. Sim, tenho roteadores action" ou envio o texto 1 pelo msg-textarea.   

             ##MENU2 Case1 - Deve ser selecionado a opção1: Meu roteador não está funcionando
  And        Visualizo o texto "Show, gosto muito desse produto, mas me conta, em que posso ajudar?"
  And        Visualizo o menu do tipo select com as opções: "1. Meu roteador não está funcionando 2. Quero alterar as configurações do meu roteador. 0. Voltar para início"      
  When       Clico na opção "1. Meu roteador não está funcionando" ou envio o texto 1 pelo msg-textarea.

             ##MENU3 Case1 - Deve ser selecionado a opção1: 1. LEDs “Sys,LAN,WAN  
  And        Visualizo o texto "Hum, acredito que já sei o que ocorreu no seu roteador, mas me confirme algumas informações, por favor!"
  And        Visualizo o texto "Preciso que você verifique quais LEDs estão fixos em azul!"
  And        Visualizo o menu "1. LEDs “Sys,LAN,WAN” 2. LEDs “Wi-fi,1,2,3,Internet” 3. Nenhuma das opções anteriores"
  When       Clico no menu "1. LEDs “Sys,LAN,WAN" ou envio o texto 1 pelo msg-textarea.

             ##MENU4 Case1 - Deve ser selecionado a opção1: 1. Ok 
  And        Visualizo o texto " Confirmei aqui, acho que seu produto está inoperante devido ao ataque cibernético que identificamos recentemente. Mas não se preocupe, eu te darei uma solução."
  And        Visualizo o texto "Só preciso de algumas informações, pode ser?"
  And        Visualizo o menu "1. Ok 2. Já passei as informações, só gostaria de saber como me proteger 0. Voltar"
  When       Clico na opção "1. Ok" ou envio o texto 1 pelo msg-textarea.
  
             ##MENU5 Case1 - Deve ser informado se é um provedor de acesso a internet ou cliente
  And        Visualizo o texto "Você é de um provedor de acesso a internet?" 
  And        Visualizo o menu "1. Sim. sou um provedor de internet 2. eu sou um cliente de provedor de internet 0. Voltar"
  When       Clico na opção "1. Sim, sou um provedor de internet" ou envio o texto 1 pelo msg-textarea.
  
             ##MENU6 Case1 - Deve ser informado o modelo do dispositivo
  And        Visualizo o texto "Escreva o nome de quais modelos que você possuir que estão inoperantes. RF 1200, RG1200... e quantidade. Ou:"         
  And        Visualizo o menu "0. voltar"
  When       Informo o modelo do aparalho através do msg-textarea.  

             ##MENU7 case1 - Deve ser informado o nome da empresa através do msg-textarea.
  And        Visualizo o texto "Precisamos de mais algumas informações sobre seu provedor. Logo irei te passar para um atendimento humano para concluir o atendimento, só mais essas informações, ok? Abaixo, digite o nome da organização. Ou:"
  And        Visualizo o menu "0. voltar"
  When       Envio o nome da empresa através do msg-textarea.
  
             ##MENU8 Case1 - Deve ser informado o CNPJ do provedor através do msg-textarea.
  And        Visualizo o texto "CNPJ do provedor."
  And        Visualizo o menu "0. Voltar"
  When       Envio o CNPJ da empresa através do msg-textarea.

             ##MENU9 Case1 - Deve ser informado o nome do responsável pelo provedor através do msg-textarea.
  And        Visualizo o texto "Preciso que você me informe o nome dos responsáveis pelo provedor."
  And        Visualizo o menu "0. Voltar"
  When       Envio o nome da responsável pelo provedor através do msg-textarea.

             ##MENU10 Case1 - Deve ser informado o telefone com o DDD do provedor através do msg-textarea.
  And        Visualizo o texto "E qual seria o telefone do provedorcom DDD? Ou:"
  And        Visualizo o menu "0. Voltar"
  When       Envio o telefone do provedor com DDD através do input msg-textarea.

             ##MENU11 Case1 - Deve ser informado o nome do cliente que está utilizando a plataforma através do msg-textarea.
  And        Visualizo o texto "Preciso de alguns dados para cadastro. Para continuar, digite seu nome."
  When       Envio o nome do cliente que está utilizando a plataforma através do msg-textarea.

             ##MENU12 Case1 - Deve ser informado o e-mail do cliente que está utilizando a plataforma através do msg-textarea.
  And        Visualizo o texto "Talvez eu terei que enviar o status da sua solicitação. Por isso, preciso que você informe seu e-mail"
  When       Envio o meu e-mail através do input text

             ##MENU13 Case1 - Deve ser informado o telefone do cliente que está utilizando a plataforma através do msg-textarea.
  And        Visualizo o texto "Estamos quase terminando! Digite seu número de telefone."
  When       Envio o meu telefone através do input text
  Then       Deve ser exibir o texto "Já encaminhei sua solicitação para nossa equipe e iremos entrar em contato para mais detalhes. Obrigado pelo seu contato e até breve! #IntelbrasSemprePróxima" validando que a solicitação foi gerada com sucesso!

 