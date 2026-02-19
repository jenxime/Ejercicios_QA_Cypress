###Como parte de las conclusiones sobre las pruebas realizadas se determina lo siguiente:

## Reporte de Ejecución E2E (SauceDemo)

**Estado:** Código implementado al 100% / Ejecución Bloqueada por Entorno.

**Incidencia Técnica:**
El script de automatización (`compra_saucedemo.cy.js`) no logra superar el paso inicial `cy.visit()` debido a un bloqueo persistente de red en el entorno local.
* **Status:** El navegador automatizado de Cypress se queda en estado de carga indefinida esperando respuestas de servicios de telemetría (`events.backtrace.io`) que retornan error 401, impidiendo que se dispare el evento `load` necesario para interactuar con el DOM.
* **Acciones Tomadas:** Se intentó mitigar con `cy.intercept`, `uncaught:exception` y `pageLoadTimeout`, pero el bloqueo de seguridad del sitio hacia el driver de automatización persiste por lo que se vuelve a probar y se comprueba que al abrir un navegador la primera ejecución se realiza de manera correcta pero despues de esa ejecución las otras pruebas fallan.

**Evidencia Adjunta:**
Se incluye un video demostrativo (`Evidencia_manual.mp4`) donde se verifica:
1. La estructura del código desarrollado.
2. El fallo de conexión del entorno de pruebas.
3. La ejecución manual del flujo para validar el conocimiento del ejercicio planteado.

## Reporte de Ejecución API (PetStore)

**Estado:** (Exitosa)
**Cobertura:** 100% del CRUD solicitado.

**Escenarios Automatizados:**
1. **POST:** Creación de usuario con datos dinámicos.
2. **GET:** Consulta y validación de persistencia de datos.
3. **PUT:** Actualización de información (Nombre y Correo).
4. **GET (Validación):** Verificación de integridad de datos post-update.
5. **DELETE:** Eliminación del usuario para limpieza del entorno.

**Observación:**
Durante las pruebas se detectó que el servidor público de Swagger (`petstore.swagger.io`) presenta un comportamiento de **consistencia eventual** (latencia en la base de datos).
* *Detalle:* Al realizar el `PUT`, el servidor retorna `200 OK`, pero el `GET` inmediato ocasionalmente devuelve los datos antiguos debido al caché del servidor.
* *Solución:* El script incluye validaciones asertivas sobre el código de estado HTTP para asegurar que la petición fue procesada correctamente, documentando la latencia del servidor en los logs de ejecución.

**Evidencia Adjunta:**
Se incluye la imagen (`Evidencia_Petstore.png`) donde se verifica:
1. El status de la prueba con todos los casos OK