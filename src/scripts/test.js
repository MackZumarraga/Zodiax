class Test {
    constructor(el) {
        this.el = el
        this.el.innerHTML = "Hello World"
        this.el.addEventListener("click", this.handleClick.bind(this))
    }

    handleClick() {
        this.el.innerText = "The click works!"
    }
}

export default Test;