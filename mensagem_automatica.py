#pywhatkit (biblioteca)
## Passo a passo para instalar a biblioteca 
# 1. Ter conhecimento da biblioteca que vai utilizar
# 2. Abra o terminal 
# 3. Digite o seguinte comando: pip install pywhatkit
# 4. Verifique se a biblioteca foi instalada corretamente 

## Vamos para o desenvolvimento

import pywhatkit as kit 
# 1. Chamar e/ou importar a biblioteca
# Em Python é utilizado o termo "import" para chamar e/ou importar biblioteca
kit.sendwhatmsg_instantly("+55", "Oi,tudo bem?")  
# Vamos enviar a mensagem através desse comando, entre parênteses e aspas iremos adicionar o número de contato do usuário e a mensagem deseja
print("Mensagem enviada com sucesso!")
# Para finalizar será emetida uma confirmação que a mensagem foi enviada
