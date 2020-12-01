class SortContainer extends HTMLElement {
  constructor() {
    super();
    this.attrs = {
      select: "data-sort",
      children: "data-sort-children",
    };
  }

  connectedCallback() {
    this.select = this.querySelector(`[${this.attrs.select}]`);
    this.bindEvents();
  }

  bindEvents() {
    this.select.addEventListener("change", e => {
      this.sort(e.target.value);
    }, false);
  }

  sort(key) {
    let container = this.querySelector(`[${this.attrs.children}]`);
    // Thanks https://github.com/component/sort (MIT License)
    let arr = [].slice.call(container.children).sort((a, b) => {
      let aVal = a.getAttribute(`data-sort-${key}`);
      let bVal = b.getAttribute(`data-sort-${key}`);

      // numeric sorts
      if(key.endsWith("-numeric") || key.endsWith("-numeric-ascending") || key.endsWith("-numeric-descending")) {
        aVal = parseFloat(aVal) || 0;
        bVal = parseFloat(bVal) || 0;

        if(key.endsWith("-numeric-descending")) {
          [aVal, bVal] = [bVal, aVal];
        }
        return aVal - bVal;
      }

      if(bVal < aVal) {
        return 1;
      } else if(aVal < bVal) {
        return -1;
      }
      return 0;
    });
    let frag = document.createDocumentFragment();
    for (let i = 0; i < arr.length; i++) {
      frag.appendChild(arr[i]);
    }
    container.appendChild(frag);
  }
}

window.customElements.define("sort-container", SortContainer);