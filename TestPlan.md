# <p align="center"> Plano de testes - Chatbot Intelbras  <img widht="10" height="80" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbv_PPIVcKRv5_ZFSw3ZIizhXgXlCwaBNiLQ&usqp=CAU" alt="Chatbot Icon"><img widht="10" height="80" src="https://logodownload.org/wp-content/uploads/2016/09/Intelbras-logo-1.png" alt="Chatbot Icon"></p><br>
<br>


## Funcionalidade: Teste de usabilidade & visibilidade (componentes, atributos, textos, etc.) 
###### Realize uma bateria de testes na plataforma take blip para o chatbot: Chatbot Intelbras<br>
###### Critérios de aceite:<br>
> &nbsp; &nbsp;1 - Deve ser validado se a plataforma de fato está acessível.<br> 
> &nbsp; &nbsp;2 - Os componentes, atributos e valores devem estar visíveis na tela e momento da interação como:<br>
>  - Header (validar Status do Chatbot, Nome do Chatbot)<br>
>  - As mensagens trocadas devem apresentar a hora:minuto de quando as mensagens foram apresentadas.
>  - Footer deve constar um input text field para o usuário digitar uma mensagem e o botão enviar.<br> 
>   
> &nbsp; &nbsp;3 - Ao finalizar o atendimento, deve ser gerado um relatório referente ao acesso e solicitação quando houver.
<br> 


```diff
+ Informações
```
## **Cenário:** Validar acesso a plataforma take blip <br>
  &nbsp; &nbsp; **Dado** que eu acesso o link [Plataforma Take Blip][0]<br>
  &nbsp; &nbsp; **Então** deve ser possível utilizar acessar a plataforma para utilizar o chatbot.<br>
  
## <br>**Cenário:** Validar componentes, atributos e valores na plataforma.<br>
  &nbsp; &nbsp; **Dado** que eu estou na plataforma [Plataforma Take Blip][0]<br>
  &nbsp; &nbsp; **E** visualizo um header contendo as seguintes informações **#(status Chatbot,Nome do Chatbot e Commit icon)**<br>
  &nbsp; &nbsp; **E** visualizo o chatbot icon 🤖  em todas as mensagens e menus retornados pelo **Chatbot**<br>
  &nbsp; &nbsp; **E** visualizo as horas:minutos nas mensagens e menus retornados pelo Chatbot **#6cc7cb**<br>
  &nbsp; &nbsp; **E** visualizo as horas:minutos nas mensagens enviadas pelo **usuario**<br>
  &nbsp; &nbsp; **Então** devo constatar que a plataforma esteja com todas as informações necessárias para inicar seu funcionamento.(**online**)

 <br>
 
```diff
+ Usabilidade
```

##  Scenario: Validar solicitação de suporte | Modo Cliente”
###### Critérios de aceite:<br>
> &nbsp; &nbsp;1 - Deve ser informado que possui um roteador Action.<br> 
> &nbsp; &nbsp;2 - Deve ser solicitado suporte informando que o roteador não está funcionando.<br>
> &nbsp; &nbsp;3 - Ao ser questionado quais LEDs estão fixos em azul, deve ser selecionado a opção 1. LEDs “Sys,LAN,WAN”<br>
> &nbsp; &nbsp;4 - Deve clicar em 1. ok ao ver a pergunta Sö preciso de algumas informações, pode ser?<br>
> &nbsp; &nbsp;5 - Ao ser questionado se é um provedor de  acesso a internet, deve ser selecionado a opção 2. Não, eu sou um cliente de um &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;provedor de internet<br>
> &nbsp; &nbsp;6 - Deve ser informado o modelo do aparelho e quantidade. Ex: (RG1200 3<br>
> &nbsp; &nbsp;7 - Deve ser informado o nome do provedor<br>
> &nbsp; &nbsp;8 - Deve ser informado o CNPJ do provedor de internet.<br>
> &nbsp; &nbsp;9 - Deve ser informado o nome dos responsáveis pelo provedor<br>
> &nbsp; &nbsp;10 - Deve ser informado o telefone do provedor com DDD<br>
> &nbsp; &nbsp;11 - Deve ser informado o nome do solicitante pelo atendimento em **"digite seu nome"**<br>
> &nbsp; &nbsp;12 - Deve ser informado o e-mail do solicitante pelo atendimento<br>
> &nbsp; &nbsp;13 - Deve ser informado o telefone do solicitante pelo atendimento<br>
> &nbsp; &nbsp;14 - Ao final da da requisição, deve ser exibido uma mensagem "Já encaminhei sua solicitação para nossa equipe e iremos<br> 
> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;entrar em contato para mais detalhes." "Obrigado pelo seu contato e até breve! #IntelbrasSemprePróxima<br>
> &nbsp; &nbsp;15 - Deve ser validado se de fato a equipe responsável recebeu a solicitação gerada pelo cliente.<br>

<br>
 
> Atualmente está sendo necessário enviar uma mensagem para iniciar uma conversa no Chatbot.<br> 

  &nbsp; &nbsp; **Dado** &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Que eu tenho o menu inicial do Chatbot <br> 
  &nbsp; &nbsp; **Quando** &nbsp; Clico no campo "digite sua mensagem aqui" e envio uma mensage através do msg-textarea.<br> 
  &nbsp; &nbsp; **Então** &nbsp; &nbsp; &nbsp; Deve ser exibido a mensagem inicial de interação do Chatbot<br> 
  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🤖 Olá, eu sou assistente virtual da Intelbras e estou aqui para ajudar com a Linha Action!<br> 
  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 🤖 Conta ai, você possui algum produto da linha Action? Não sabe? Então confirme na etiqueta embaixo do produto.<br>
&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Seguido do menu inicial.
<br> 

  &nbsp; &nbsp; **Dado** &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Que eu tenho o menu inicial:<br> 
  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; - 1. Sim, tenho roteadores Action.<br>
  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; - 2. Não, possuo outro modelo<br>
  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; - 0. Finalizar atendimento<br>
  &nbsp; &nbsp; **Quando** &nbsp; Clico no menu de número 1. Sim, tenho roteadores Action.<br> 
  &nbsp; &nbsp; **Então** &nbsp; &nbsp; &nbsp; Deve ser exibido na tela como resposta a opção selecionada e na sequência o próximo menu <br>


  &nbsp; &nbsp; **Dado** &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Que eu visualizo o menu o menu:<br>
  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; 🤖 Show, gosto muito desse produto, mas me conta, em que posso ajudar?
<br>
  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; - 1. Meuroteador não está funcionando<br>
  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; - 2. Quero alterar as configurações do meu roteador<br>
  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; - 0. Voltar para inicio<br>
  <br>
  &nbsp; &nbsp; **Quando** &nbsp; Clico no menu de número 1. Meuroteador não está funcionando<br> 
  &nbsp; &nbsp; **Então** &nbsp; &nbsp; &nbsp; Deve ser exibido na tela como resposta a opção selecionada, exibindo o próximo menu <br>
  
  
  &nbsp; &nbsp; **Dado** &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Que eu visualizo o menu o menu:<br>
  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; 🤖 Show, gosto muito desse produto, mas me conta, em que posso ajudar?
<br>
  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; - 1. Meuroteador não está funcionando<br>
  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; - 2. Quero alterar as configurações do meu roteador<br>
  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; - 0. Voltar para inicio<br>
  <br>
  &nbsp; &nbsp; **Quando** &nbsp; Clico no menu de número 1. Meuroteador não está funcionando<br> 
  &nbsp; &nbsp; **Então** &nbsp; &nbsp; &nbsp; Deve ser exibido na tela como resposta a opção selecionada, exibindo o próximo menu <br>

...

> Relatório com a cobertura dos testes.
- Validar se as mensagens de fato estão sendo registradas e enviadas aos responsáveis<br> 
- Validar as opções selecionadas dos respectivos menus estão seguindo o fluxo de acordo com a escolha.<br> 
- Validar se todos os componentes, atributos, textos e valores estão em perfeita funcionalidade e visíveis na tela.<br>
- Validar se está sendo aplicado uma máscara para verificar se um CNPJ ou CPF informado é um documnto válido, impedindo o usuário de passar para o próximo passo sem corrigi-lo.
- Validar se está sendo aplicado uma máscara para verificar se o telefone informado é um número válido (quantidade de dígitos), impedindo a inserção de caracteres especiais, impedindo o usuário de passar para o próximo passo sem corrigi-lo.
  
- Validar se está sendo aplicado uma máscara para verificar se o e-mail informado é válido, impedindo o usuário de passar para o próximo passo sem corrigi-lo.

> Melhorias<br>
- Quando o usuário clica em uma opção do menu que está sendo exibido na tela, é exibido na tela a resposta do usuário e na sequência o próximo menu. Em alguns menus, existe a opção 0 . Voltar. Com isso, deve ser bloqueado do usuário clicar no menu anterior como resposta do menu atual. <br>
- O Chatbot deve ser iniciado automaticamente ao entrar, nao havendo a necessidade do usuario digitar alguma informacao para iniciar o chat.

> Testes mais importantes a serem ressaltados. <br>
> - Acessivbilidade e funcionalidade - Valida se a plataforma esta  como os menus (clicaveis), o input text field liberado para enviar uma mensagem e o botao enviar.<br>
> - Log e backup : Valida se as informacoes estao sendo gravadas.<br>
> - Entrega : Validar se as informacoes estao chegando aos responsaveis pelo atendimento ao cliente / provedor de acesso a internet com status e prioridade.<br>




  
  
  
  
  
  
  
  
[0]: https://chat.blip.ai/?appKey=dGVzdGVwcmF0aWNvNTo4NGYwZmNiZS1lNzE3LTQ0MTctODBiNi1lZTcxNTJhYTgzZjU=
