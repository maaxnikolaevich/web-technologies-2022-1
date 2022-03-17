import ListItems from "./components/list-items.js";

if (document.readyState==='loading'){
    document.addEventListener('DOMContentLoader',init)
} else {
    init();
}

function init(){
    const items=new ListItems(document.getElementById('list-items'),{});

}



// function listHtml(children) {
//     return  '<ul>' + children.map(node =>
//             '<li>' + node.name +
//             (node.type === 'file' ? '' : listHtml(node.children)) +
//             '</li>').join('\n') +
//         '</ul>';
// }
//
// // Sample data
// var data = [
//     { name: 'Root', type: 'folder', children: [
//             { name: 'includes', type: 'folder', children: [
//                     { name: 'header.php', type: 'file' },
//                     { name: 'footer.php', type: 'file' },
//                 ]},
//             { name: 'css', type: 'folder', children: [
//                     { name: 'images', type: 'folder', children: [
//                             { name: 'logos', type: 'folder', children: [
//                                     { name: 'white.svg', type: 'file' },
//                                     { name: 'dark.svg', type: 'file' },
//                                 ]},
//                             { name: 'gallery', type: 'folder', children: [
//                                     { name: '1.jpg', type: 'file' },
//                                     { name: '2.jpg', type: 'file' },
//                                     { name: '3.jpg', type: 'file' },
//                                     { name: '4.jpg', type: 'file' },
//                                     { name: '5.jpg', type: 'file' },
//                                 ]},
//                             { name: 'contact-page.jpg', type: 'file' },
//                         ]},
//                     { name: 'style.css', type: 'file' },
//                 ]},
//             { name: 'js', type: 'folder', children: [
//                     { name: 'jquery.js', type: 'file' },
//                     { name: 'main.js', type: 'file' },
//                 ]},
//             { name: 'index.php', type: 'file' },
//             { name: 'contact.php', type: 'file' },
//             { name: 'about-us.php', type: 'file' },
//         ]}
// ];
//
//
// var html = listHtml(data);


// var insert=document.getElementById("insert");
//
// insert.insertAdjacentHTML("beforebegin",html)

