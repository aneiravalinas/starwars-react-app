# Starwars-React-App

**Starwars-React-App** es una sencilla aplicación que consume la API Rest [Starwars-API](https://github.com/aneiravalinas/starwars-backend).

## Instalación del proyecto

En este repositorio se incluye un **fichero Dockerfile** en el directorio raíz.

1. **Construir imágen del proyecto.**
+ `REACT_APP_API_URL`: URL donde está escuchando la API Rest [Starwars-API](https://github.com/aneiravalinas/starwars-backend). En caso de que no se especifiquemos una, la aplicación utilizará la `http://localhost:8080` por defecto.
+ `nombre_imagen`: Nombre que queramos darle a la imágen.
```
docker build --build-arg REACT_APP_API_URL=http://localhost:8080 -t 'nombre_imagen' .
```

2. **Ejecutar imágen en contenedor**. 
* `puerto`: La API escucha peticiones en el puerto 3000, por lo que tendremos que sustiruir `puerto` por el puerto de nuestra máquina local donde queramos mapearlo.
* `nombre_contenedor`: **(Opcional)** Nombre que queramos darle al contenedor.
* `nombre_imagen`: Nombre de la imágen creada en el paso anterior.
```
docker run -d -p 'puerto':3000 --name 'nombre_contenedor' 'nombre_imagen'  
```

