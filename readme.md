# GIT Desarrollo Colaborativo

Esto es una guia creada para facilitar el entendimiento e implementacion de la herramienta conocida como GIT desarrollada por Linus Torvalds, y cuya finalidad es el control de versiones de los diferentes proyectos que realicemos.

## Configuracion Inicial

Comandos que debemos utilizar tanto para crear un proyecto con git, como para establecer la configuracion de nuestro nombre y correo a utilizar en cada una de las confirmaciones de cambios. El parametro *--global* indica que dicha configuracion aplica para todos los proyectos del mismo usuario.

* **git init**: inicializa un repositorio en el directorio actual.
* **git config --global user.name** `username`: Establece de manera global el nombre con el que nos identificamos.
* **git config --global user.email** `email`: Define el correo de contacto para las confirmaciones de cambios.

## Gestion Repositorio Remoto

Estos comandos debemos utilizarlos cuando accedemos a un repositorio remoto y necesitamos decargar la informacion del mismo. Una vez realizada la copia, simplemente debemos gestionar los cambios locales y enviarlos, asi como tambien administrar los cambios remotos, para descargarlos e integrarlos al historial local.

* **git clone `remote` `folder`**: Descargamos el repositorio remoto en nuestra computadora
* **cd `folder`**: Abrimos el Repositorio clonado tras usar el comando anterior
* **git fetch `remote`**: Solicita el historial de cambios del repositorio remoto.
