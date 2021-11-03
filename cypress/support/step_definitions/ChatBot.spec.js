/// <reference types="cypress" />
import { expect } from "chai";
import { Given, And, Then, When, Before } from "cypress-cucumber-preprocessor/steps";

  // Validar acesso a plataforma take blip
  Given("Que eu estou na plataforma Take Blip", () => {
    cy.url().should('eql', 'https://chat.blip.ai/?appKey=dGVzdGVwcmF0aWNvNTo4NGYwZmNiZS1lNzE3LTQ0MTctODBiNi1lZTcxNTJhYTgzZjU=/')

  });

  Then("Deve ser possível utilizar acessar a plataforma para utilizar o chatbot.", () => {
    cy.get('#message-input').should('be.visible')
    cy.get('.ss-content').should('be.visible')
    cy.get('.blip-chat-bot-name').should('be.visible')
    cy.get('.blip-chat-bot-status').should('be.visible')
    cy.get('.blip-chat-container > .br-100').should('be.visible')
    cy.url().should('eql', 'https://chat.blip.ai/?appKey=dGVzdGVwcmF0aWNvNTo4NGYwZmNiZS1lNzE3LTQ0MTctODBiNi1lZTcxNTJhYTgzZjU=/')
  });
  // ##########################################################

  // Validar componentes, atributos e valores na plataforma.
  Given("Que eu acesso o link da plataforma Take Blip", () => {
    cy.url().should('eql', 'https://chat.blip.ai/?appKey=dGVzdGVwcmF0aWNvNTo4NGYwZmNiZS1lNzE3LTQ0MTctODBiNi1lZTcxNTJhYTgzZjU=/')

  })
  
  Then('Deve ser possível visualizar o comment icon, o nome do Chatbot e o status online, input text, input text placeholder e o botão enviar.', () => {
    cy.get('#blip-chat-header').should('be.visible')
    cy.get('.blip-chat-container > .br-100').should('be.visible')
    cy.get('.blip-chat-bot-name').should('be.visible')
    cy.get('.blip-chat-bot-status').should('include.text', 'online')
    cy.get('[placeholder="Digite sua mensagem aqui"]').should('exist')
    cy.get('#blip-send-message').should('be.visible')
    
  })
  // ##########################################################

  // Validar interação inicial do Chatbot
  Given('Que eu acesso o link da plataforma Take Blip', () => {
    cy.url().should('eql', 'https://chat.blip.ai/?appKey=dGVzdGVwcmF0aWNvNTo4NGYwZmNiZS1lNzE3LTQ0MTctODBiNi1lZTcxNTJhYTgzZjU=/')

  })
  
  When('Envio uma mensagem de saudação "Olá"', () => {
    cy.get('#msg-textarea').type('Olá')
    cy.get('#blip-send-message').click()
    cy.wait(2000)
  })
  
  And('Visualizo a saudação incial "Olá, eu sou assistente virtual da intelbras e estou aqui para ajudar com a Linha Action!"', () => {
    cy.get(':nth-child(2) > .blip-card-group > :nth-child(1) > :nth-child(1) > .blip-card-container > .blip-card > .blip-container > .bubble > div').should('include.text', 'Olá, eu sou assistente virtual da Intelbras e estou aqui para ajudar com a Linha Action!')
  })
  
  And('Visualizo a pergunta "Conta ai, você possui algum produto da linha Action? Não Sabe? Então confirme na etiqueta embaixo do produto"', () => {
    cy.get('.text-left').should('include.text', 'Conta ai, você possui algum produto da linha Action? Não sabe? Então confirme na etiqueta embaixo do produto.')
  })
  
  
  Then('Deve ser possível visualizar um menu do tipo select: "1 - Sim, tenho roteadores Action. 2 - Não, possuo outro modelo 0 - Finalizar atendimento"', () => {
    cy.get('ul > :nth-child(1) > div > b').should('be.visible')
    cy.get('ul > :nth-child(2) > div').should('be.visible')
    cy.get('ul > :nth-child(3) > div').should('be.visible')
  })
  // ##########################################################

  // Validar visualização de hora:minutos das mensagens
  Given('Que eu acesso o link da plataforma Take Blip', () => {
    cy.url().should('eql', 'https://chat.blip.ai/?appKey=dGVzdGVwcmF0aWNvNTo4NGYwZmNiZS1lNzE3LTQ0MTctODBiNi1lZTcxNTJhYTgzZjU=/')

  })
  
  When('Clico no campo "digite sua mensagem aqui" e envio uma mensage através do msg-textarea.', () => {
    cy.reload()
    cy.wait(2000)
    cy.get('#msg-textarea').type('Olá')
    cy.get('#blip-send-message').click()
    cy.wait(2000)
  })

  And('Visualizo a saudação incial "Olá, eu sou assistente virtual da intelbras e estou aqui para ajudar com a Linha Action!"', () => {
    cy.get(':nth-child(2) > .blip-card-group > :nth-child(1) > :nth-child(1) > .blip-card-container > .blip-card > .blip-container > .bubble > div').should('include.text', 'Olá, eu sou assistente virtual da Intelbras e estou aqui para ajudar com a Linha Action!')

  })
  
  And('Visualizo a pergunta "Conta ai, você possui algum produto da linha Action? Não Sabe? Então confirme na etiqueta embaixo do produto"', () => {
    cy.get('.text-left').should('include.text', 'Conta ai, você possui algum produto da linha Action? Não sabe? Então confirme na etiqueta embaixo do produto.')

  })
  
  Then('Deve ser possível visualizar a hora:minutos de todas as mensagens enviadas & chatbot exibidas na plataforma.', () => {
    cy.get(':nth-child(1) > .blip-card-group > .group-notification > span').should('be.visible')
    cy.get(':nth-child(2) > .blip-card-group > .group-notification > span').should('be.visible')

})
  // ##########################################################

// Validar todo o fluxo de solicitação de suporte como provedor - Case1

Given('Que eu tenho o menu inicial do Chatbot', () => {
  cy.reload()
  cy.wait(2000)

  // Atualmente está sendo necessário enviar uma mensagem para iniciar uma conversa no Chatbot. 
  cy.get('#msg-textarea').type('Olá')
  cy.get('#blip-send-message').click()
  cy.wait(2000)
  cy.url().should('eql', 'https://chat.blip.ai/?appKey=dGVzdGVwcmF0aWNvNTo4NGYwZmNiZS1lNzE3LTQ0MTctODBiNi1lZTcxNTJhYTgzZjU=/')
  cy.get('ul > :nth-child(1) > div > b').should('be.visible')
  cy.get('ul > :nth-child(2) > div').should('be.visible')
  cy.get('ul > :nth-child(3) > div').should('be.visible')



//MENU1 Case1 - Deve ser selecionado a opção1: Sim, tenho roteadores action 
And('Visualizo a saudação incial "Olá, eu sou assistente virtual da intelbras e estou aqui para ajudar com a Linha Action!"', () => {
  cy.get(':nth-child(2) > .blip-card-group > :nth-child(1) > :nth-child(1) > .blip-card-container > .blip-card > .blip-container > .bubble > div').should('include.text', 'Olá, eu sou assistente virtual da Intelbras e estou aqui para ajudar com a Linha Action!')
})

And('Visualizo a pergunta "Conta ai, você possui algum produto da linha Action? Não Sabe? Então confirme na etiqueta embaixo do produto"', () => {
  cy.get('.text-left').should('include.text', 'Conta ai, você possui algum produto da linha Action? Não sabe? Então confirme na etiqueta embaixo do produto.')
})

And('Visualizo o menu inicial do tipo select', () => {
  cy.get('ul > :nth-child(1) > div > b').should('be.visible')
  cy.get('ul > :nth-child(2) > div').should('be.visible')
  cy.get('ul > :nth-child(3) > div').should('be.visible')
})

When('Clico na opção "1. Sim, tenho roteadores action" ou envio o texto 1 pelo msg-textarea.', () => {
  cy.get('ul > :nth-child(1) > div > b').click()
  cy.wait(2000)
})

//MENU2 Case1 - Deve ser selecionado a opção1: Meu roteador não está funcionando
And('Visualizo o texto "Show, gosto muito desse produto, mas me conta, em que posso ajudar?"', () => {
  cy.get(':nth-child(4) > .blip-card-group > .blip-relative > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .text-left').should('be.visible')
})

And('Visualizo o menu do tipo select com as opções: "1. Meu roteador não está funcionando 2. Quero alterar as configurações do meu roteador. 0. Voltar para início"', () => {
  cy.get(':nth-child(4) > .blip-card-group > .blip-relative > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .fixed-options > ul > :nth-child(1) > div').should('be.visible')
})

When('Clico na opção "1. Meu roteador não está funcionando" ou envio o texto 1 pelo msg-textarea.', () => {
  cy.get(':nth-child(4) > .blip-card-group > .blip-relative > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .fixed-options > ul > :nth-child(1) > div').click()
})

//MENU3 Case1 - Deve ser selecionado a opção1: 1. LEDs “Sys,LAN,WAN  
And('Visualizo o texto "Hum, acredito que já sei o que ocorreu no seu roteador, mas me confirme algumas informações, por favor!"', () => {
  cy.get(':nth-child(6) > .blip-card-group > :nth-child(1) > :nth-child(1) > .blip-card-container > .blip-card > .blip-container > .bubble > div').should('be.visible')
})

And('Visualizo o texto "Preciso que você verifique quais LEDs estão fixos em azul!"', () => {
  cy.get(':nth-child(6) > .blip-card-group > :nth-child(2) > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .text-left > b').should('be.visible')
})

And('Visualizo o menu "1. LEDs “Sys,LAN,WAN” 2. LEDs “Wi-fi,1,2,3,Internet” 3. Nenhuma das opções anteriores"', () => {
  cy.get(':nth-child(6) > .blip-card-group > :nth-child(2) > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .fixed-options > ul > :nth-child(1)').should('be.visible')
  cy.get(':nth-child(6) > .blip-card-group > :nth-child(2) > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .fixed-options > ul > :nth-child(2)').should('be.visible')
  cy.get(':nth-child(6) > .blip-card-group > :nth-child(2) > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .fixed-options > ul > :nth-child(3)').should('be.visible')
})

When('Clico no menu "1. LEDs “Sys,LAN,WAN" ou envio o texto 1 pelo msg-textarea.', () => {
  cy.get(':nth-child(6) > .blip-card-group > :nth-child(2) > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .fixed-options > ul > :nth-child(1)').should('be.visible').click()
})

//MENU4 Case1 - Deve ser selecionado a opção1: 1. Ok 
And('Visualizo o texto " Confirmei aqui, acho que seu produto está inoperante devido ao ataque cibernético que identificamos recentemente. Mas não se preocupe, eu te darei uma solução."', () =>{
  cy.get(':nth-child(8) > .blip-card-group > :nth-child(1) > :nth-child(1) > .blip-card-container > .blip-card > .blip-container > .bubble > div').should('be.visible')
})

And('Visualizo o texto "Só preciso de algumas informações, pode ser?"', () =>{
  cy.get(':nth-child(8) > .blip-card-group > :nth-child(2) > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .text-left > b').should('be.visible')
})

And('Visualizo o menu "1. Ok 2. Já passei as informações, só gostaria de saber como me proteger 0. Voltar"', () =>{
  cy.get(':nth-child(8) > .blip-card-group > :nth-child(2) > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .fixed-options > ul > :nth-child(1)').should('be.visible')
  cy.get(':nth-child(8) > .blip-card-group > :nth-child(2) > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .fixed-options > ul > :nth-child(2)').should('be.visible')
  cy.get(':nth-child(8) > .blip-card-group > :nth-child(2) > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .fixed-options > ul > :nth-child(3)').should('be.visible')

})

When('Clico na opção "1. Ok" ou envio o texto 1 pelo msg-textarea.', () =>{
  cy.get(':nth-child(8) > .blip-card-group > :nth-child(2) > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .fixed-options > ul > :nth-child(1)').should('be.visible').click()

})

//MENU5 Case1 - Deve ser informado se é um provedor de acesso a internet ou cliente
And('Visualizo o texto "Você é de um provedor de acesso a internet?"', () => {
  cy.get(':nth-child(10) > .blip-card-group > .blip-relative > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .text-left').should('be.visible')
})

And('Visualizo o menu "1. Sim. sou um provedor de internet 2. eu sou um cliente de provedor de internet 0. Voltar"', () => {
  cy.get(':nth-child(10) > .blip-card-group > .blip-relative > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .fixed-options > ul > :nth-child(1)').should('be.visible')
  cy.get(':nth-child(10) > .blip-card-group > .blip-relative > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .fixed-options > ul > :nth-child(2)').should('be.visible')
  cy.get(':nth-child(10) > .blip-card-group > .blip-relative > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .fixed-options > ul > :nth-child(3)').should('be.visible')

})

When('Clico na opção "1. Sim, sou um provedor de internet" ou envio o texto 1 pelo msg-textarea.', () => {
  cy.get(':nth-child(10) > .blip-card-group > .blip-relative > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .fixed-options > ul > :nth-child(1)').click()
})

//MENU6 Case1 - Deve ser informado o modelo do dispositivo
And('Visualizo o texto "Escreva o nome de quais modelos que você possuir que estão inoperantes. RF 1200, RG1200... e quantidade. Ou:"', () => {
  cy.get(':nth-child(12) > .blip-card-group > .blip-relative > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .text-left').should('be.visible')
})

And('Visualizo o menu "0. voltar"', () => {
  cy.wait(1000)
  cy.get(':nth-child(12) > .blip-card-group > .blip-relative > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .fixed-options > ul > li > div').should('be.visible')
})

When('Informo o modelo do aparalho através do msg-textarea.', () => {
  cy.wait(2000)
  cy.get('#msg-textarea').type('RG1200')
  cy.get('#blip-send-message').click()
  cy.wait(2000)
 
})

//MENU7 case1 - Deve ser informado o nome da empresa através do msg-textarea.
And('Visualizo o texto "Precisamos de mais algumas informações sobre seu provedor. Logo irei te passar para um atendimento humano para concluir o atendimento, só mais essas informações, ok? Abaixo, digite o nome da organização. Ou:"', () => {
  cy.get(':nth-child(14) > .blip-card-group > :nth-child(1) > :nth-child(1) > .blip-card-container > .blip-card > .blip-container > .bubble > div').should('be.visible')
})

And('Visualizo o menu "0. voltar"', () => {
  cy.get(':nth-child(14) > .blip-card-group > :nth-child(2) > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .fixed-options > ul > li > div').should('be.visible')
})

When('Envio o nome da empresa através do msg-textarea.', () => {
  cy.wait(2000)
  cy.get('#msg-textarea').type('Intelbras')
  cy.get('#blip-send-message').click()
  cy.wait(2000)
})

//MENU8 Case1 - Deve ser informado o CNPJ do provedor através do msg-textarea.
And('Visualizo o texto "CNPJ do provedor."', () => {
  cy.get(':nth-child(16) > .blip-card-group > .blip-relative > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .text-left').should('be.visible')
})

And('Visualizo o menu "0. Voltar"', () => {
  cy.get(':nth-child(16) > .blip-card-group > .blip-relative > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .fixed-options > ul > li > div').should('be.visible')
})

When('Envio o CNPJ da empresa através do msg-textarea.', () => {
  cy.wait(2000)
  cy.get('#msg-textarea').type('12.993.785/0001-20')
  cy.get('#blip-send-message').click()
  cy.wait(2000)
})


//MENU9 Case1 - Deve ser informado o nome do responsável pelo provedor através do msg-textarea.
And('Visualizo o texto "Preciso que você me informe o nome dos responsáveis pelo provedor."', () => {
  cy.get(':nth-child(18) > .blip-card-group > .blip-relative > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .text-left').should('be.visible')
})

And('Visualizo o menu "0. Voltar"', () => {
  cy.get(':nth-child(18) > .blip-card-group > .blip-relative > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .fixed-options > ul > li > div').should('be.visible')
})

When('Envio o nome da responsável pelo provedor através do msg-textarea.', () => {
  cy.wait(2000)
  cy.get('#msg-textarea').type('Manager')
  cy.get('#blip-send-message').click()
  cy.wait(2000)
})

//MENU10 Case1 - Deve ser informado o telefone com o DDD do provedor através do msg-textarea.
And('Visualizo o texto "E qual seria o telefone do provedorcom DDD? Ou:"', () => {
  cy.get(':nth-child(20) > .blip-card-group > .blip-relative > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .fixed-options > ul > li > div').should('be.visible')
})

And('Visualizo o menu "0. Voltar"', () => {
  cy.get(':nth-child(20) > .blip-card-group > .blip-relative > :nth-child(1) > .blip-card-container > .blip-container > :nth-child(1) > .bubble > .fixed-options > ul > li > div').should('be.visible')
})

When('Envio o telefone do provedor com DDD através do input msg-textarea.', () => {
  cy.wait(2000)
  cy.get('#msg-textarea').type('(48) 99999-9999')
  cy.get('#blip-send-message').click()
  cy.wait(2000)
})

//MENU11 Case1 - Deve ser informado o nome do cliente que está utilizando a plataforma através do msg-textarea.
And('Visualizo o texto "Preciso de alguns dados para cadastro. Para continuar, digite seu nome."', () => {
  cy.get(':nth-child(22) > .blip-card-group > .blip-relative > :nth-child(1) > .blip-card-container > .blip-card > .blip-container > .bubble > div').should('be.visible')
})

When('Envio o nome do cliente que está utilizando a plataforma através do msg-textarea.', () => {
  cy.wait(2000)
  cy.get('#msg-textarea').type('Djony Malta')
  cy.get('#blip-send-message').click()
  cy.wait(2000)
})

//MENU12 Case1 - Deve ser informado o e-mail do cliente que está utilizando a plataforma através do msg-textarea.
And('Visualizo o texto "Talvez eu terei que enviar o status da sua solicitação. Por isso, preciso que você informe seu e-mail"', () => {
  cy.get(':nth-child(24) > .blip-card-group > .blip-relative > :nth-child(1) > .blip-card-container > .blip-card > .blip-container > .bubble > div').should('be.visible')
})

When('Envio o meu e-mail através do input text', () => {
  cy.wait(2000)
  cy.get('#msg-textarea').type('djony.malta@gmail.com')
  cy.get('#blip-send-message').click()
  cy.wait(2000)
})

//MENU13 Case1 - Deve ser informado o telefone do cliente que está utilizando a plataforma através do msg-textarea.
And('Visualizo o texto "Estamos quase terminando! Digite seu número de telefone."', () => {
  cy.get(':nth-child(26) > .blip-card-group > .blip-relative > :nth-child(1) > .blip-card-container > .blip-card > .blip-container > .bubble > div').should('be.visible')
})

When('Envio o meu telefone através do input text', () => {
  cy.wait(2000)
  cy.get('#msg-textarea').type('(48) 99999-9999')
  cy.get('#blip-send-message').click()
  cy.wait(2000)
})

Then('Deve ser exibir o texto "Já encaminhei sua solicitação para nossa equipe e iremos entrar em contato para mais detalhes. Obrigado pelo seu contato e até breve! #IntelbrasSemprePróxima" validando que a solicitação foi gerada com sucesso!', () => {
  cy.get(':nth-child(26) > .blip-card-group > .blip-relative > :nth-child(1) > .blip-card-container > .blip-card > .blip-container > .bubble > div').should('be.visible')
  cy.get(':nth-child(2) > :nth-child(1) > .blip-card-container > .blip-card > .blip-container > .bubble').should('be.visible')
})

})

