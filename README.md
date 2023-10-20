# H-Buy
Proyecto final de cursada para Full Stack Web Developer de soyHenry

Junto a un equipo de 7 compañeros desarrollamos este humilde y hermoso e-commerce.
Al ingresar, nos recibe una Landing Page con carruseles de promociones y productos. Cuenta con una barra de navegación para visitar las distintas páginas, buscar productos por nombre, vista previa del carrito y el acceso como usuario.
Podemos acceder a la página de productos donde se pueden combinar filtros para una búsqueda más específica. El listado de productos está organizado con un paginado para evitar mostrar todos los productos a la vez en pantalla. Cada carta tiene los datos del producto: nombre, imagen, calificación, categoría y fecha de publicación; botón para agregar al carrito y a favoritos, con alerta personalizada; y botón de acceso a la vista individual del producto. En esta página se muestran, además de la descripción del producto, los datos del vendedor y las reseñas de los compradores. Cabe destacar que solamente se puede comentar si se efectuó la compra.
Desde el ícono del carrito se puede acceder a la página con los productos añadidos donde se puede proceder con la compra y realizar el pago a través de Mercado Pago.
El acceso de usuarios se controla con el autenticador de Google que permite acceder con una cuenta Gmail o crear un usuario personalizado. Una vez ingresado redirigirá al página del perfil de usuario. Los perfiles se categorizan por comprador, vendedor o administrador. El comprador puede ver sus compras realizadas, su lista de favoritos y datos personales. El vendedor tiene el listado de sus ventas, sus productos cargados y un formulario para cargar los productos. Con el perfil de administrador de H-Buy se pueden crear, modificar y eliminar categorías, productos y usuarios. Con un listado de botones de acceso que facilita el flujo de trabajo del administrador.

Tecnologías aplicadas
Back: Express, Cloudinary, Mongoose
Front: React, Redux Toolkit, Bootstrap, Material UI, Auth0, Sweet Alert 2, Axios, MercadoPago
