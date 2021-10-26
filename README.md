Integrantes del grupo:

Ronald Leal
Maria Camila
Raul 

Para levantar la BD se debe:
- Bajar la imagen de Postgres en Docker: 
    ```docker pull postgres```
- Se inicializa la BD desde docker:
    ```docker run --name plafip -e POSTGRES_PASSWORD=root123 -p 5432:5432 -d postgres```
- Crear la BD en Postgres, se pude realizar con el cliente DBeaver: 


Para levantar la API:
- Desde la terminal se debe ejecutar 