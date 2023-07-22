class scrollDown{
    constructor(elem){
        this.elem = elem;
        this.elem_height = this.elem.clientHeight
        this.firstChild = this.elem.children[0];
        this.width = this.firstChild.clientWidth;
        this.height = this.firstChild.clientHeight + 0.5;
        this.change = false
    }

    getHeight(){
        return this.height;
    }
    setDefaultHeight(){
        this.elem.style.height = this.getHeight()+"px";
        this.elem.style.width = this.width + 15+"px"
    }
    setHider(){
        this.elem.style.width = this.width+15+"px";
        this.elem.style.height = this.height+"px";
    }
    setvisible(){
        this.elem.style.height = this.elem_height+"px";
    }
    
    controlEvent(){
        this.firstChild.addEventListener("click", ()=>{
            console.log(this.change)
            if (this.change) this.setHider();
            else this.setvisible();
            this.change = (this.change) ? false : true
        })
    }
}

const scrool = new scrollDown(document.querySelector('.menu'))
scrool.setDefaultHeight()
scrool.controlEvent()

//control menu bars
const menu = document.querySelector("#header-nav .menus")
const btn_controls = document.querySelector("#header-nav .humberger")
btn_controls.addEventListener("click", ()=>{
    console.log("clicked...")
    menu.classList.toggle("active")
})