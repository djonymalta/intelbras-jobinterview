# <p align="center"> Plano de testes - Chatbot Intelbras  <img widht="10" height="80" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbv_PPIVcKRv5_ZFSw3ZIizhXgXlCwaBNiLQ&usqp=CAU" alt="Chatbot Icon"><img widht="10" height="80" src="https://logodownload.org/wp-content/uploads/2016/09/Intelbras-logo-1.png" alt="Chatbot Icon"></p><br>
<br>


## Funcionalidade: Teste de usabilidade :
###### Realize uma bateria de testes na plataforma take blip para o chatbot: Chatbot Intelbras

```diff
+ Plataforma take Blip
```
# **Cenário:** Validar acesso a plataforma take blip <br>
  &nbsp; &nbsp; **Dado** que eu acesso o link [Plataforma Take Blip][0]<br>
  &nbsp; &nbsp; **Então** deve ser possível utilizar acessar a plataforma para utilizar o chatbot.<br>
  
# <br>**Cenário:** Validar informações barra superior (header) na plataforma.<br>
  &nbsp; &nbsp; **Dado** que eu acesso o link [Plataforma Take Blip][0]<br>
  &nbsp; &nbsp; **E** visualizo um header na cor **#6cc7cb**<br>
  &nbsp; &nbsp; **Então** deve ser possível visualizar uma img de caixa de diálogo, o nome do Chatbot e o status (**online**)


# <br>**Cenário:** Validar interação inicial do Chatbot<br>
  &nbsp; &nbsp; **Dado** que eu acesso o link [Plataforma Take Blip][0]<br>
  &nbsp; &nbsp; **E** visualizo a saudação incial "Olá, eu sou assistente virtual da intelbras e estou aqui para ajudar com a Linha Action!"<br>
  &nbsp; &nbsp; **E** visualizo a pergunta "Conta ai, você possui algum produto da linha Action? Não Sabe? **Então confirme na etiqueta embaixo do<br>
  &nbsp; &nbsp;&nbsp; &nbsp; produto**<br>
  &nbsp; &nbsp; **Então** deve ser possível visualizar um menu do tipo select:<br>
  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;  **1.**  Sim, tenho roteadores Action.<br>
  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;  **2.**  Não, possuo outro modelo <br>
  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;  **0.**  Finalizar atendimento<br>

  

# <br>**Cenário:** Validar visualização de hora:minutos das mensagens<br>
  &nbsp; &nbsp; **Dado** que eu acesso o link [Plataforma Take Blip][0]<br>
  &nbsp; &nbsp; **E** visualizo a saudação incial "Olá, eu sou assistente virtual da intelbras e estou aqui para ajudar com a Linha Action!"<br>
  &nbsp; &nbsp; **E** visualizo a pergunta "Conta ai, você possui algum produto da linha Action? Não Sabe? **Então confirme na etiqueta embaixo do<br>
  &nbsp; &nbsp;&nbsp; &nbsp; produto**<br>
  &nbsp; &nbsp; **E** envio um texto / palavra no campo **"digite sua mensagem aqui"**<br>
  &nbsp; &nbsp; **E** clico aperto a tecla "**Enter**" ou clico em no botão enviar (exibido ao final do campo "Digite sua mensagem aqui")<br>
  &nbsp; &nbsp; **Então** deve ser possível visualizar a hora:minutos de todas as mensagens (enviadas & chatbot) exibidas na plataforma.
  
  

# <br>**Cenário:** Validar a funcionalidade do menu inicial<br>
  &nbsp; &nbsp; **Dado** que eu tenho o menu inicial do Chatbot
  &nbsp; &nbsp; **E** visualizo a saudação incial "Olá, eu sou assistente virtual da intelbras e estou aqui para ajudar com a Linha Action!"<br>
  &nbsp; &nbsp; **E** visualizo a pergunta "Conta ai, você possui algum produto da linha Action? Não Sabe? **Então confirme na etiqueta embaixo do<br>
  &nbsp; &nbsp;&nbsp; &nbsp; produto**<br>
  &nbsp; &nbsp; **E** visualizo o menu inicial do tipo select<br>
  &nbsp; &nbsp; **E** clico na opção "1. Sim, tenho roteadores action"<br>
  &nbsp; &nbsp; **Então** deve ser exibir a opção selecionada como resposta, o seguinte com o título "Show, gosto muito desse produto, mas me conta, em<br>
  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; que posso ajudar?" e um menu do tipo select com as seguintes opções:<br>
  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; **1.** Meu roteador não está funcionando<br>
  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; **2.** Quero alterar as configurações do meu roteador.<br>
  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; **0.** Voltar para início
  <br></br>
  &nbsp; &nbsp; **Dado** que eu tenho o menu inicial do Chatbot<br>
  &nbsp; &nbsp; **E** visualizo a saudação incial "Olá, eu sou assistente virtual da intelbras e estou aqui para ajudar com a Linha Action!"<br>
  &nbsp; &nbsp; **E** visualizo a pergunta "Conta ai, você possui algum produto da linha Action? Não Sabe? **Então confirme na etiqueta embaixo do<br>
  &nbsp; &nbsp;&nbsp; &nbsp; produto**<br>
  &nbsp; &nbsp; **E** visualizo o menu inicial do tipo select<br>
  &nbsp; &nbsp; **E** clico na opção "2. Não, tenho roteadores action"<br>
  &nbsp; &nbsp; **Então** deve ser exibir a opção selecionada como resposta, o seguinte com o título "Preciso de alguns dados para cadastro. Para .<br>
  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;continuar, digite seu nome:"
  <br></br>
  &nbsp; &nbsp; **Dado** que eu tenho o menu inicial do Chatbot<br>
  &nbsp; &nbsp; **E** visualizo a saudação incial "Olá, eu sou assistente virtual da intelbras e estou aqui para ajudar com a Linha Action!"<br>
  &nbsp; &nbsp; **E** visualizo a pergunta "Conta ai, você possui algum produto da linha Action? Não Sabe? **Então confirme na etiqueta embaixo do<br>
  &nbsp; &nbsp;&nbsp; &nbsp; produto**<br>
  &nbsp; &nbsp; **E** visualizo o menu inicial do tipo select<br>
  &nbsp; &nbsp; **E** clico na opção "3. Finalizar atendimento"<br>
  &nbsp; &nbsp; **Então** deve ser exibir a mensagem "Obrigado pelo seu contato e até breve! #IntelbrasSemprePróxima" finalizando de fato o atendimento.<br>
  
  # <br>**Cenário:** Validar informações no campo de envio de mensagens<br>
  &nbsp; &nbsp; **Dado** que eu acesso o link [Plataforma Take Blip][0]<br>
  &nbsp; &nbsp; **E** visualizo um campo para inserir uma mensagem na parte inferior (footer) da página<br>
  &nbsp; &nbsp; **Então** deve ser possível visualizar um placeholder "Digite sua mensagem aqui" e um botão ao final do campo para enviar a mensagem.


 
  
  
  
  
  
  
  
  
  
  
[0]: https://chat.blip.ai/?appKey=dGVzdGVwcmF0aWNvNTo4NGYwZmNiZS1lNzE3LTQ0MTctODBiNi1lZTcxNTJhYTgzZjU=
