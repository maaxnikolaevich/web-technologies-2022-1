export default class ListItems{
    constructor(el,data) {
        this.el=el;
        this.data=data;
        this.init()
    }
    init(){
        const parents=this.el.querySelectorAll('[data-parent]')
        console.log(parents)
        if ( parents.length !== 0){
            parents.forEach(parent => {
                const open=parent.querySelector('[data-open]');
                open.addEventListener('click',()=>this.toggleItems(parent))
            })
        }
    }
    toggleItems(parent){
        parent.classList.toggle('list-item_open');
    }
} 