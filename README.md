# Nodejs AWS SAM API Gateway Lambda DynamoDB &middot; 

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

Descripción del proyecto: Proyecto de infraestructura como código utilizando el framework AWS SAM para el desarrollo y despliegue de API Gateway, Lambda y DynamoDB.

## Arquitectura a desplegar

<img width="400" alt="cal-ios" src="./infra.png">

## Acerca de AWS y los servicios utilizados

* https://aws.amazon.com/es/serverless/sam/
* https://aws.amazon.com/es/lambda/
* https://aws.amazon.com/es/api-gateway/
* https://aws.amazon.com/es/dynamodb/

## Prerequisitos

* Instalación de Nodjes
  + https://nodejs.org/es/
* Instalación de AWS CLI
  + https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
* Instalación de CLI SAM
  + https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html
* Credenciales de AWS con políticas de
  + IAMFullAccess
  + AWSCloudFormationFullAccess
  + AmazonAPIGatewayAdministrator
  + AmazonAPIGatewayInvokeFullAccess
  + AWSLambda_FullAccess
  + AmazonDynamoDBFullAccess
  + AmazonS3FullAccess

NOTA: Las políticas entregadas son a efectos de velocidad, se recomienda realizar una descomposición por temas de seguridad
## Configuración de credenciales

Ejecutar comando de configuración de AWS CLI para la ingresar las credenciales

```
aws configure
```

## Validar Yaml

Ejecutar comando

```
sam validate
```

## Deploy proyecto en AWS

Para desplegar aplicación en AWS ejecutar

```
sam deploy
```
NOTA: Indicar como primera instancia de que las funciones no contendran autorización


## Output final ejemplo
```
POST https://x90ri7iu80.execute-api.us-east-1.amazonaws.com/Prod/hello/
GET https://x90ri7iu80.execute-api.us-east-1.amazonaws.com/Prod/hello/
```

## Equipo

Desarrollado por Diego Cortés

* dcortes.net@gmail.com
