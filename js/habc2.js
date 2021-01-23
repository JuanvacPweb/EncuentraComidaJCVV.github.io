/* Declara la etiqueta "herramientas-abc" que se usa en "index.html" y
 * "usuarios.html". */
customElements.define("herramientas-abc", class extends HTMLElement {
    /** Se invoca al agregar este element a la página. */
    connectedCallback() {
        this.innerHTML = /*html*/
            `
        <button  class="btn btn-danger" id="elimina" type="button" onclick="elimina()">
          Eliminar
        </button>`;
    }
});