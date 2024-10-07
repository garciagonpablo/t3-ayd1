## Despliegue del docker:

### Construir la imagen de docker:

```sh
docker build -t api-rest-server .
```

### Ejecutar el contenedor:
```sh
docker run -p 3000:3000 api-rest-server
```

Con esto el servidor ya estará corriendo en un contenedor de docker y estará presente en el puerto 3000 de nuestra máquina.

![docker-ps](/readme-media/docker-ps.png)


Y al hacer la petición `GET` a la dirección `localhost:3000/` obtendremos la siguiente respuesta:

![peticion](/readme-media/petition.png)