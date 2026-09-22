# 🏋️ CIB302 - SportyStyle Tienda Virtual

Mini aplicación web desarrollada para la actividad práctica sumativa de **Taller de Plataformas Web**.

SportyStyle es una tienda virtual de ropa y accesorios deportivos que permite explorar productos, agregarlos a un carrito, iniciar sesión mediante Auth0 y completar una compra simulada utilizando validaciones de formulario y `Session Storage`.

El proyecto se ejecuta mediante un servidor local desarrollado con **Node.js**, **Express** y **HTTPS**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Auth0](https://img.shields.io/badge/Auth0-EB5424?style=for-the-badge&logo=auth0&logoColor=white)
![HTTPS](https://img.shields.io/badge/HTTPS-005C97?style=for-the-badge&logo=letsencrypt&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

## 📌 Tabla de contenido

- [Descripción del proyecto](#-descripción-del-proyecto)
- [Quiénes somos](#-quiénes-somos)
- [Objetivo](#-objetivo)
- [Funcionalidades implementadas](#-funcionalidades-implementadas)
- [Mejoras visuales incorporadas](#-mejoras-visuales-incorporadas)
- [Tecnologías utilizadas](#-tecnologías-utilizadas)
- [Flujo de autenticación con Auth0](#-flujo-de-autenticación-con-auth0)
- [Proceso de selección de productos](#-proceso-de-selección-de-productos)
- [Uso de Session Storage](#-uso-de-session-storage)
- [Validaciones del formulario](#-validaciones-del-formulario)
- [Simulación de compra](#-simulación-de-compra)
- [Servidor HTTPS](#-servidor-https)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Instalación y ejecución](#-instalación-y-ejecución)
- [Pruebas realizadas](#-pruebas-realizadas)
- [Seguridad y archivos excluidos](#-seguridad-y-archivos-excluidos)
- [Autor](#-autor)

---

## 🛍️ Descripción del proyecto

SportyStyle es una tienda virtual orientada a personas activas que entrenan en el gimnasio, practican running o realizan actividades deportivas al aire libre.

La aplicación permite:

- Explorar productos deportivos.
- Revisar productos organizados por categorías.
- Agregar productos al carrito.
- Consultar cantidades y precios.
- Iniciar sesión mediante Auth0.
- Mantener el carrito durante la navegación.
- Completar una compra simulada.
- Validar los datos de despacho.
- Visualizar una confirmación del pedido.

El proyecto funciona mediante un servidor HTTPS local desarrollado con Node.js y Express.

---

## 👥 Quiénes somos

En SportyStyle nos especializamos en ropa y accesorios deportivos para personas que disfrutan entrenar en el gimnasio, al aire libre o practicando su deporte favorito.

Nuestro objetivo es ofrecer productos cómodos, funcionales y con estilo, para que cada usuario pueda concentrarse en alcanzar su máximo rendimiento durante sus sesiones de entrenamiento.

En la tienda se pueden encontrar camisetas técnicas, pantalones deportivos y accesorios seleccionados para acompañar distintas actividades físicas.

---

## 🎯 Objetivo

Desarrollar una mini aplicación web que permita:

- Mostrar productos deportivos en distintas categorías.
- Simular el proceso de selección y compra.
- Implementar autenticación de usuarios con Auth0.
- Mantener el carrito actualizado con `Session Storage`.
- Validar los datos ingresados en el formulario.
- Mostrar una confirmación detallada del pedido.
- Utilizar un servidor HTTPS durante la ejecución local.

---

## ⚙️ Funcionalidades implementadas

- Visualización de productos con imagen, nombre, descripción y precio.
- Organización de productos por categorías.
- Categoría de camisetas deportivas.
- Categoría de pantalones deportivos.
- Categoría de accesorios deportivos.
- Botón **Agregar al carrito** en cada producto.
- Carrito de compras visible y actualizado.
- Visualización del nombre del producto.
- Visualización del precio.
- Visualización de la cantidad seleccionada.
- Cálculo del total de la compra.
- Botón **Quitar del carrito**.
- Inicio de sesión mediante Auth0.
- Cierre de sesión mediante Auth0.
- Mensaje de bienvenida al usuario autenticado.
- Almacenamiento temporal del carrito con `Session Storage`.
- Eliminación de los datos del carrito al cerrar sesión.
- Eliminación de los datos del carrito al finalizar la compra.
- Formulario para simular el pago y despacho.
- Validación del correo electrónico.
- Validación del número telefónico.
- Mensajes de error para datos inválidos.
- Pantalla de confirmación de compra.
- Detalle del pedido confirmado.
- Servidor local ejecutado mediante HTTPS.

---

## ✨ Mejoras visuales incorporadas

Además de los requisitos funcionales, se incorporaron mejoras visuales para entregar una experiencia más clara, atractiva y ordenada.

### Diseño visual

- Paleta de colores oscuros con tonos azules.
- Contraste adecuado entre fondos, textos y botones.
- Tarjetas visuales para presentar los productos.
- Bordes redondeados.
- Sombras y efectos de profundidad.
- Botones con degradados y estados hover.
- Separación clara entre las distintas secciones.

### Organización del contenido

- Sección principal “Quiénes somos”.
- Sección de características de la tienda.
- Presentación diferenciada para cada categoría de productos.
- Distribución ordenada del carrito.
- Formulario de compra agrupado y fácil de leer.
- Footer con la identidad de la tienda.

### Zoom de imágenes

Se agregó una mejora visual para ampliar las imágenes de los productos.

Al hacer clic sobre una imagen:

1. Se abre un modal.
2. La imagen se muestra en un tamaño mayor.
3. Se presenta el nombre o descripción del producto.
4. El usuario puede cerrar la imagen mediante el botón correspondiente.

Esta mejora permite revisar con mayor detalle la apariencia de cada producto.

### Diseño responsive

La interfaz se adapta a distintos tamaños de pantalla mediante reglas CSS responsive.

En pantallas pequeñas:

- El encabezado se reorganiza verticalmente.
- Las tarjetas de productos ocupan el ancho disponible.
- Las tarjetas informativas se muestran en una sola columna.
- El formulario se adapta al tamaño del dispositivo.
- Los elementos del carrito se reorganizan para facilitar su lectura.

---

## 🧰 Tecnologías utilizadas

- **HTML5:** estructura de la aplicación.
- **CSS3:** estilos, diseño visual, modal y responsive.
- **JavaScript:** interacción, carrito, validaciones y autenticación.
- **Node.js:** entorno de ejecución del servidor.
- **Express:** servidor web y publicación de archivos estáticos.
- **Auth0:** autenticación de usuarios.
- **Session Storage:** almacenamiento temporal del carrito.
- **HTTPS:** comunicación segura en el entorno local.
- **Certificados digitales:** habilitación de HTTPS local.
- **Git y GitHub:** control de versiones.
- **Visual Studio Code:** entorno de desarrollo.

---

## 🔐 Flujo de autenticación con Auth0

La autenticación se implementa mediante el SDK de Auth0 para aplicaciones SPA.

El flujo funciona de la siguiente manera:

1. El usuario presiona el botón **Iniciar sesión**.
2. La aplicación ejecuta el método de autenticación de Auth0.
3. El usuario es redirigido a la pantalla de inicio de sesión administrada por Auth0.
4. Auth0 valida las credenciales del usuario.
5. Después de autenticarse, Auth0 redirige al usuario nuevamente a la aplicación.
6. La aplicación obtiene la información básica del usuario.
7. Se muestra un mensaje de bienvenida personalizado.
8. El usuario puede cerrar sesión mediante el botón **Cerrar sesión**.

La aplicación delega a Auth0 la gestión de la sesión y los tokens. No se implementa una validación manual de tokens JWT.

El SDK de Auth0 para aplicaciones SPA utiliza el flujo de redirección para autenticar al usuario y luego completar el retorno a la aplicación mediante la URL configurada.[web:1110]

La URL local utilizada en el proyecto es:

```text
https://localhost:3000
```

Esta dirección debe estar configurada en Auth0 como:

- Allowed Callback URLs.
- Allowed Logout URLs.
- Allowed Web Origins.

---

## 🛒 Proceso de selección de productos

Los productos se encuentran definidos en JavaScript y se presentan agrupados por categorías.

Cada producto contiene:

- Identificador.
- Imagen.
- Nombre.
- Descripción.
- Precio.
- Categoría.

Cuando el usuario presiona **Agregar al carrito**, la aplicación:

1. Identifica el producto seleccionado.
2. Comprueba si ya existe en el carrito.
3. Aumenta la cantidad si el producto ya había sido agregado.
4. Incorpora el producto si es una nueva selección.
5. Guarda el carrito actualizado en `Session Storage`.
6. Actualiza la sección visible del carrito.
7. Recalcula el total de la compra.

El usuario también puede quitar productos seleccionados mediante el botón **Quitar del carrito**.

---

## 💾 Uso de Session Storage

`Session Storage` se utiliza para almacenar temporalmente los productos seleccionados durante la navegación.

Cada vez que el usuario agrega o quita un producto:

1. Se actualiza el arreglo del carrito.
2. Se transforma la información a formato JSON.
3. Se guarda en `Session Storage`.
4. Se vuelve a renderizar la sección del carrito.
5. Se actualiza el total de la compra.

Mientras la sesión del navegador continúe activa, el carrito puede mantenerse disponible al recargar la página.

Al cerrar sesión, se eliminan los datos almacenados del carrito. Los datos también se eliminan al finalizar la compra.

`Session Storage` se utiliza únicamente para datos temporales del carrito. No se almacenan contraseñas, tokens manuales, números de tarjetas ni información bancaria.

---

## ✅ Validaciones del formulario

El formulario de compra solicita:

- Nombre completo.
- Dirección de envío.
- Correo electrónico.
- Teléfono.

### Nombre completo

- Es obligatorio.
- No puede quedar vacío.

### Dirección de envío

- Es obligatoria.
- No puede quedar vacía.

### Correo electrónico

- Es obligatorio.
- Debe contener el carácter `@`.
- Debe contener un dominio válido.

Ejemplo:

```text
usuario@gmail.com
```

### Teléfono

- Es obligatorio.
- Debe contener solamente números.
- Debe cumplir con una longitud adecuada.

Si algún dato no cumple con las condiciones, la aplicación muestra un mensaje de error y evita continuar hasta que el usuario corrija la información.

---

## 📦 Simulación de compra

La aplicación simula un proceso de compra y despacho. No se realizan pagos reales.

El flujo es:

1. El usuario inicia sesión.
2. Selecciona uno o más productos.
3. Revisa el carrito.
4. Verifica las cantidades y el total.
5. Completa el formulario de despacho.
6. La aplicación valida los datos.
7. Se muestra el mensaje **Gracias por tu compra**.
8. Se muestra el detalle del pedido.
9. Se limpia el carrito de la sesión.

La confirmación incluye:

- Nombre de los productos.
- Cantidades seleccionadas.
- Precios.
- Total de la compra.

---

## 🔒 Servidor HTTPS

La aplicación se ejecuta mediante HTTPS utilizando Node.js y Express.

El archivo `server.js`:

- Carga la clave privada.
- Carga el certificado digital.
- Publica los archivos de la carpeta `public`.
- Escucha en el puerto `3000`.
- Permite acceder a la tienda mediante HTTPS.

La dirección de ejecución es:

```text
https://localhost:3000
```

Durante el desarrollo local, el navegador puede mostrar el mensaje **“No es seguro”** cuando se utiliza un certificado autofirmado.

Esta advertencia ocurre porque el certificado local no fue emitido por una autoridad certificadora pública reconocida. La dirección sigue utilizando HTTPS porque comienza con:

```text
https://
```

Para generar certificados locales confiables se puede utilizar `mkcert`. Esto permite que el navegador reconozca el certificado generado para el entorno de desarrollo.

---

## 🗂️ Estructura del proyecto

```text
Sportystyle/
├── certs/
│   ├── localhost-cert.pem
│   └── localhost-key.pem
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── img/
│   │   └── imágenes de productos
│   ├── js/
│   │   └── app.js
│   └── index.html
├── scripts/
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

### Descripción de las carpetas

- `certs/`: contiene los certificados utilizados para HTTPS local.
- `node_modules/`: contiene las dependencias instaladas por npm. No debe subirse a GitHub.
- `public/`: contiene los archivos visibles de la aplicación.
- `public/css/`: contiene los estilos CSS.
- `public/img/`: contiene las imágenes de los productos.
- `public/js/`: contiene el código JavaScript.
- `scripts/`: contiene scripts auxiliares del proyecto.
- `server.js`: inicia el servidor HTTPS y Express.
- `package.json`: define la información y dependencias del proyecto.
- `package-lock.json`: registra versiones específicas de las dependencias.
- `README.md`: documenta el proyecto.
- `.gitignore`: excluye archivos sensibles o innecesarios.

---

## ▶️ Instalación y ejecución

### Requisitos

- Node.js instalado.
- npm instalado junto con Node.js.
- Visual Studio Code u otro editor.
- Navegador web actualizado.
- Cuenta y aplicación configurada en Auth0.
- Certificados locales dentro de la carpeta `certs`.

### Clonar el repositorio

```bash
git clone https://github.com/MatiasAquea/CIB302-SportyStyle-tienda-virtual.git
```

Ingresar a la carpeta:

```bash
cd CIB302-SportyStyle-tienda-virtual
```

### Instalar dependencias

En PowerShell se puede utilizar:

```powershell
npm.cmd install
```

Si PowerShell permite la ejecución de scripts:

```powershell
npm install
```

El comando instala las dependencias definidas en `package.json` dentro de `node_modules`.[web:1078][web:1079]

### Iniciar el servidor

```bash
node server.js
```

### Abrir la aplicación

En el navegador, visitar:

```text
https://localhost:3000
```

### Detener el servidor

En la terminal donde está ejecutándose Node.js:

```text
Ctrl + C
```

### Importante

Este proyecto no se ejecuta mediante Live Server.

La aplicación utiliza el servidor Node.js definido en `server.js`, porque este servidor permite:

- Servir los archivos de `public`.
- Ejecutar HTTPS.
- Utilizar los certificados de la carpeta `certs`.
- Mantener la misma dirección configurada en Auth0.
- Trabajar con el puerto `3000`.

---

## 🧪 Pruebas realizadas

Se verificó el siguiente flujo:

- La aplicación carga en `https://localhost:3000`.
- El servidor HTTPS inicia correctamente.
- Los archivos HTML, CSS y JavaScript se cargan desde `public`.
- Los productos se muestran correctamente.
- Las categorías aparecen organizadas.
- Las imágenes se visualizan correctamente.
- El zoom de imágenes funciona.
- El botón **Agregar al carrito** funciona.
- El carrito se actualiza al agregar productos.
- El carrito muestra nombre, precio y cantidad.
- El total se recalcula correctamente.
- El botón **Quitar del carrito** funciona.
- El inicio de sesión con Auth0 funciona.
- Se muestra el mensaje de bienvenida.
- El cierre de sesión funciona.
- El carrito se elimina al cerrar sesión.
- El formulario exige los campos obligatorios.
- El correo electrónico se valida.
- El teléfono se valida.
- Se muestra el mensaje de confirmación.
- Se muestra el detalle del pedido.
- El carrito se limpia al finalizar la compra.
- La interfaz se adapta a pantallas pequeñas.
- La aplicación funciona mediante HTTPS.

---

## 🛡️ Seguridad y archivos excluidos

El archivo `.gitignore` evita publicar archivos que no deben formar parte del repositorio.

Contenido recomendado:

```gitignore
node_modules/
.env

certs/*.pem
certs/*.key
certs/*.crt
```

No deben publicarse:

- La carpeta `node_modules`.
- El archivo `.env`.
- Claves privadas.
- Certificados locales.
- Credenciales de Auth0.
- Tokens.
- Contraseñas.
- Datos reales de usuarios.
- Información bancaria.

Sí deben conservarse en el repositorio:

- `package.json`.
- `package-lock.json`.
- `server.js`.
- La carpeta `public`.
- El archivo `README.md`.
- El archivo `.gitignore`.

Las dependencias pueden reinstalarse posteriormente mediante:

```bash
npm install
```

---

## 📚 Relación con la actividad

El proyecto cumple con los principales requisitos solicitados:

- Tienda virtual de ropa y accesorios deportivos.
- Productos distribuidos en tres categorías.
- Imagen, nombre, descripción y precio para cada producto.
- Botón **Agregar al carrito**.
- Carrito visible y actualizado.
- Autenticación mediante Auth0.
- Mensaje de bienvenida al usuario.
- Uso de `Session Storage`.
- Eliminación de datos al cerrar sesión.
- Formulario de pago y despacho simulado.
- Validación del correo electrónico.
- Validación del número telefónico.
- Confirmación con detalle del pedido.
- Servidor HTTPS funcional.
- Código organizado en carpetas.
- Documentación del proyecto.
- Mejora visual mediante zoom de imágenes.
- Diseño responsive para distintos dispositivos.

---

## 👨‍💻 Autor

**Matías Aquea**

---

## 📚 Asignatura

**Taller de Plataformas Web**

**Actividad Práctica Sumativa – Semana 6**

---

## 📝 Observación

Este proyecto fue desarrollado con fines académicos para demostrar la implementación de:

- Autenticación con Auth0.
- Gestión de sesión mediante `Session Storage`.
- Carrito de compras.
- Validaciones de formulario.
- Servidor HTTPS local.
- Organización de archivos web.
- Uso de Node.js y Express.
- Diseño visual responsive.
- Mejora de experiencia de usuario mediante zoom de imágenes.

La aplicación no procesa pagos reales ni almacena información bancaria.
=======
# CIB302-SportyStyle-tienda-virtual
>>>>>>> 139ae408184eacfa2a9812a6dfebe9dd4fa1a563
