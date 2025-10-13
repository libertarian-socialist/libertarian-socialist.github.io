class MdArticle extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const srcPath = this.getAttribute("src");

    let md;
    if (srcPath !== null) {
      const res = await fetch(srcPath);
      md = await res.text();
    } else {
      md = this.innerHTML.trim();
    }

    this.innerHTML = `
      <div class="container">
        <div class="markdown">
          ${marked.parse(md)}
        </div>
      </div>
    `;
  }
}

customElements.define("md-article", MdArticle);
