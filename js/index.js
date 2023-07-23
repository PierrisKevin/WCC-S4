class scrollDown{
    constructor(elem){
        this.elem = elem;
        this.elem_height = this.elem.clientHeight
        this.firstChild = this.elem.children[0];
        this.width = this.firstChild.clientWidth;
        this.height = this.firstChild.clientHeight + 0.5;
        this.change = false
        this.#setDefaultHeight()
    }

    getHeight(){
        return this.height;
    }
    #setDefaultHeight(){
        this.elem.style.height = "18px";
        this.elem.style.width = "220px"
    }
    
    #setvisible(){
        this.elem.style.height = 18*5+"px";
    }
    
    controlEvent(){
        this.firstChild.addEventListener("click", ()=>{
            console.log(this.change)
            if (this.change) this.#setDefaultHeight();
            else this.#setvisible();
            this.change = (this.change) ? false : true
        })
    }
}

const scrool = new scrollDown(document.querySelector('.menu'))
scrool.controlEvent()

//control menu bars
const menu = document.querySelector("#header-nav .menus")
const btn_controls = document.querySelector("#header-nav .humberger")
btn_controls.addEventListener("click", ()=>{
    console.log("clicked...")
    menu.classList.toggle("active")
})