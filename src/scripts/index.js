import { posts } from "./database.js";


function abrirPoster() {
    const button = document.querySelectorAll(".abrir_posts");
    const modal = document.querySelector("#modalController");

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", (event) => {

            const idPost = event.target.id
            for (let c = 0; c < posts.length; c++) {
                if (posts[c].id == idPost) {
                    console.log(posts[c])
                    render(posts[c])
                }
            }


            modal.showModal()
            fecharPoster()

        });

    }

}
abrirPoster()

function fecharPoster() {
    const button = document.querySelector("#close__modal");
    const modal = document.querySelector("#modalController");
    const conteiner = document.querySelector(".modal__container");
    button.addEventListener("click",() => {

        modal.close()
    })

}

function render(post) {
    const conteiner = document.querySelector("#modalController",);
    conteiner.innerHTML = "";

    conteiner.insertAdjacentHTML("beforeend", `
    <div class="modal__container">
    <button id="close__modal">X</button>
    <div class="conteudo_do_post">
        
          <img class="imagens__perfil" src="${post.img}"/>
          <div>
            <h2 class="title2"> ${post.user}</h2>
            <p class="text2"> ${post.stack}</p>
          </div>
        </div>
        <h2 class="title1">
        ${post.title}
        </h2>
        <p class="text1">
        ${post.text}
        </p>
    </div>
    `)

    

}



