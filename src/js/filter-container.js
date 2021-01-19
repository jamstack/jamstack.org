class FilterContainer extends HTMLElement {
  constructor() {
    super();
    this.attrs = {
      bind: "data-filter-bind",
      delimiter: "data-filter-delimiter",
      results: "data-filter-results",
    };
    this.classes = {
      hidden: "filter--hide",
    }
  }

  connectedCallback() {
    this.results = this.querySelector(`[${this.attrs.results}]`);
    let formElements = this.getAllFormElements();
    this.bindEvents(formElements);
    this.filterAll(formElements);
  }
  
  getAllFormElements() {
    return this.querySelectorAll(`[${this.attrs.bind}]`);
  }

  getAllKeys() {
    let keys = new Set();
    for(let formEl of this.getAllFormElements()) {
      keys.add(formEl.getAttribute(this.attrs.bind));
    }
    return Array.from(keys);
  }
  
  getElementSelector(key) {
    return `data-filter-${key}`
  }

  getAllFilterableElements() {
    let keys = this.getAllKeys();
    let selector = keys.map(key => {
      return `[${this.getElementSelector(key)}]`;
    }).join(",");
    return this.querySelectorAll(selector);
  }

  bindEvents(formElements) {
    for(let el of formElements) {
      el.addEventListener("change", e => {
        this.filter(e.target);
        requestAnimationFrame(() => {
          this.renderResultCount();
        })
      }, false);
    }
  }

  filterAll(formElements) {
    for(let el of formElements) {
      this.filter(el);
    }
    this.renderResultCount();
  }

  filter(formElement) {
    let key = formElement.getAttribute(this.attrs.bind);
    let delimiter = formElement.getAttribute(this.attrs.delimiter);

    let value = formElement.value;
    let elementsSelectorAttr = this.getElementSelector(key);
    
    let elements = this.querySelectorAll(`[${elementsSelectorAttr}]`);
    let count = 0;
    let cls = `filter-${key}--hide`;
    for(let element of Array.from(elements)) {
      if(this.elementIsValid(element, elementsSelectorAttr, value, delimiter)) {
        element.classList.remove(cls);
      } else {
        element.classList.add(cls);
      }
    }
  }

  elementIsValid(element, attributeName, value, delimiter) {
    if(!value && element.hasAttribute(attributeName)) {
      return true;
    }
    let attrValue = element.getAttribute(attributeName);
    if(delimiter && attrValue.split(delimiter).indexOf(value) > -1) {
      return true;
    }
    if(!delimiter && attrValue === value) {
      return true;
    }
    return false;
  }

  elementIsVisible(element) {
    for(let cls of element.classList) {
      if(cls.startsWith("filter-") && cls.endsWith("--hide")) {
        return false;
      }
    }
    return true;
  }

  renderResultCount() {
    let count = Array.from(this.getAllFilterableElements())
      .filter(entry => this.elementIsVisible(entry))
      .length;

    this.results.innerHTML = `${count} Result${count !== 1 ? "s" : ""}`;
  }
}

window.customElements.define("filter-container", FilterContainer);