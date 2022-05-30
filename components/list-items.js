export default class ListItems{
    constructor(el) {
        this.el=el;
        this.init();
    }
    init(){
        // this.render();
        const parents=this.el.querySelectorAll('[data-parent]')
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
    render(){
        this.el.insertAdjacentHTML('beforeend', this.renderParent(this.data));
    }
    
    renderParent(data) {
        if (data.hasChildren){
            let currentNode= "<div class=\"list-item list-item_open\"" +
                " data-parent>\n"+
                "<div class=\"list-item__inner\">\n"+
                "<img class=\"list-item__arrow\"" +
                " src=\"../assets/img/chevron-down.png\" alt=\"chevron-down\""+
                " data-open>\n" +"<img class=\"list-item__folder\"" +
                " src=\"./assets/img/folder.png\" alt=\"folder\">\n"+"<span>"+data.name+"</span>"
                +"</div>\n"+"<div class=\"list-item__items\">"
            
            data.items.forEach(node=>{
                currentNode+=this.renderParent(node);
            });
            return currentNode+"</div> </div>"
        }   
        else
        {
            return "<div class=\"list-item__inner\">\n"+
            "<img class=\"list-item__folder\"" +
                " src=\"./assets/img/folder.png\" alt=\"folder\">\n"+ 
                "<span>"+data.name+"</span>\n"+"</div>"
        }
    }
} 