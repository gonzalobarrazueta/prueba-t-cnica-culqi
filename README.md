# Culqi - Prueba técnica

## Archivos del proyecto 🗂️

En la carpeta `src` se encuentran los siguientes archivos:
- `index.js`: Es el archivo principal del proyecto. Aquí se definió el método `POST`.
- `mongodb.js`: En este archivo, se realiza la conexión a la base de datos de mongodb y se definió el método para almacenar los datos.
- `prueba-1.js`: Contiene la resolución del ejercicio 1.

## ¿Cómo probar el proyecto? 🧑‍🚀

1. Clonar el repositorio
2. Instalar paquetes: `npm install`
3. Ejecutar los contenedores de Docker: `docker compose up`
4. Utilizar una herramienta como Postman para realizar una petición POST a `http://localhost:3000/` con el siguiente body:
    ```json
    {
        "s": "barfoothefoobarman",
        "words": ["foo","bar", "the"]
    }
    ```
5. Para verificar que se haya almacenado correctamente en el contenedor de la base de datos, ejecutar los siguientes comandos:
    ```bash
    docker exec -it culqi_database mongosh
    use culqidb
    db.culqi.find()
    ```
   _Asegurarse que los contenedores estén ejecutándose antes de correr estos comandos._
