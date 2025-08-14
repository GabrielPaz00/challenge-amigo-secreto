# Amigo secreto

> Aplicación web para ingresar una lista de amigas y amigos y realizar un sorteo aleatorio para determinar el “amigo secreto”.

---

## Descripción

En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto". El usuario agregará nombres mediante un campo de texto y un botón “Adicionar”. Los nombres ingresados se mostrarán en una lista visible en la página y, al finalizar, un botón “Sortear Amigo” seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

---

## Tabla de contenidos

- [Descripción](#descripción)
- [Funcionalidades](#funcionalidades)
- [Flujo de uso](#flujo-de-uso)
- [Validaciones-y-reglas](#validaciones-y-reglas)
- [Criterios-de-aceptación](#criterios-de-aceptación)

---

## Funcionalidades

- **Agregar nombres:** Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en “Adicionar”.
- **Validar entrada:** Si el campo de texto está vacío, el sistema deberá mostrar una alerta o mensaje de error solicitando un nombre válido.
- **Visualizar la lista:** Los nombres ingresados aparecerán en una lista debajo del campo de entrada, manteniéndose visibles para revisión.
- **Sorteo aleatorio:** Al hacer clic en el botón “Sortear Amigo”, se seleccionará aleatoriamente un nombre de la lista y se mostrará el resultado en la página.

---

## Flujo de uso

1. **Abrir la aplicación:**
   - El usuario accede a la página con un campo de texto, un botón “Adicionar”, una lista vacía y un botón “Sortear Amigo” deshabilitado si no hay nombres.
2. **Adicionar un nombre:**
   - El usuario escribe un nombre y pulsa “Adicionar”. El nombre se agrega a la lista y el campo se limpia automáticamente.
3. **Revisar la lista:**
   - La lista muestra todos los nombres agregados en orden de inserción.
4. **Sortear el amigo secreto:**
   - Con al menos un nombre en la lista, el usuario pulsa “Sortear Amigo” y la aplicación presenta el nombre seleccionado al azar.
5. **Reintentar sorteo (opcional):**
   - El usuario puede volver a sortear utilizando la misma lista o limpiar la lista para comenzar de nuevo.

---

## Validaciones y reglas

- **Campo obligatorio:** No se permite agregar entradas vacías ni solo espacios; debe mostrarse un mensaje claro solicitando un nombre válido.
- **Evitar duplicados (opcional):** Puede impedirse la inclusión de nombres repetidos para mejorar la experiencia.
- **Habilitar/deshabilitar botones:** “Sortear Amigo” debe estar deshabilitado cuando no existan nombres en la lista.
- **Selección uniforme:** Cada nombre en la lista debe tener la misma probabilidad de ser seleccionado en el sorteo.
- **Persistencia (opcional):** Puede almacenarse la lista temporalmente (por ejemplo, en memoria o almacenamiento local) para mantener el estado entre recargas.

---

## Criterios de aceptación

- **Entrada válida:** Al intentar adicionar con el campo vacío, se muestra un mensaje de error y no se agrega nada.
- **Lista visible:** Cada nombre agregado aparece inmediatamente en una lista visible bajo el campo de entrada.
- **Sorteo funcional:** Al presionar “Sortear Amigo” con al menos un elemento, se muestra un único nombre seleccionado al azar.
- **Accesibilidad básica:** Controles accesibles por teclado y mensajes de error comprensibles para lector de pantalla.
- **Estado coherente:** El botón “Sortear Amigo” permanece deshabilitado sin nombres y se habilita al existir al menos uno.

---

[⬆️ Volver arriba](#amigo-secreto)
