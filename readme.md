# Instagram challenge backend

Esta API en general es un crud completo de la aplicacion Instagram Challenge tambien incluida en mi portafolio: [Instagram Challenge](https://github.com/AlexValdiviezo/instagram-challenge)

<br></br>
# Ejecución de la aplicación
- Antes de ejecutar la aplicación debe asegurarse de que los environments estén agregados. Hay un archivo de ejemplo llamado `example.env`. En base a este archivo se debe crear el respectivo `.env` con sus datos propios.
- `npm run start` ejecuta la aplicación en su estado de producción.
- `npm run dev` ejecuta la aplicación en su estado de desarrollo.

<br></br>
# Caracteristicas

## Servidor:
- El servidor está hecho en base a una clase con su propio constructor iniciando la base de datos asociada, indicando los middlewares bases y asociando las rutas programadas en express.

## Rutas y Metodos:

- `GET /api` obtiene todos los datos que se encuentren en la coleccion de publicaciones en la base de datos.

- `POST /api` Crea una publicación y la guarda en la base de datos. (es obligatorio los parametros '')

- `PUT /api` Actualiza tanto la publicación entera como los likes de una publicación en la base de datos.

- `DELETE /api` Elimina completamente una publicación en la base de datos.

- `PUT /upload` Sube una imagen y devuelve el link de la misma para así mismo hacer un request `PUT /api` para subir la imagen a la base de datos.

- Para mas información del CRUD dejo la [Documentación de POSTMAN](https://documenter.getpostman.com/view/10430257/VUjSFPQj)

## Middlewares:
- `isPostValid-middleware:` Valida que los parametros sean validos en el `POST` de `/api`.
- `isPutValid-middleware:` Valida que los parametros sean validos en el `POST` de `/api`.
- `isUrlImg-middleware:` valida que el url de imagen sea un url valido y ademas sea tambien una imagen `(jpg, png, jpeg o pneg)`.
- `isValidID-middleware:` valida que el id sea valido para `MONGODB`.
- `isValidText-middleware:` valida que el texto enviado desde el fronten no tenga `caracteres especiales`.

## Base de datos
Como uso general de base de datos utilizo `MongoDB` y para la creación y coneccion con las colecciones utilizo `mongoose`.
Para el uso de imagenes en la nube utilicé la API de cloudinary debido a que en su actual host no tiene acceso a los archivos por un motivo de seguridad de heroku. Es así por lo que las imagenes deben subirse a otro repositorio. Igualmente si el servidor se inicia localmente, las imagenes empezaran a almacenarse en el servidor local.

# host
- Actualmente la API esta hosteada en [Heroku App](https://instagram-challenge-backend.herokuapp.com/api)
- Un ejemplo de frontend para la ejecución de la API es mi propia aplicacion [instagram-challenge](https://github.com/AlexValdiviezo/instagram-challenge), hosteada tambien en [Heroku App](https://instagram-challenge-sondeos.herokuapp.com)