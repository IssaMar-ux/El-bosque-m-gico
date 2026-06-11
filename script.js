document.addEventListener("DOMContentLoaded", function(){

const boton = document.getElementById("boton");

boton.addEventListener("click", iniciarJuego);

});

function iniciarJuego() {

    document.querySelector(".tarjeta").innerHTML = `

    <div class="luna">🌙</div>

    <h1>La primera luciérnaga</h1>

    <p id="mensaje">
    🌙 El bosque:
    Tengo la sensación de que alguien ha entrado al bosque...
    </p>

    <div id="zona">
        <div class="luci" id="luci">🦋</div>
    </div>

    `;

    const luci = document.getElementById("luci");
    const mensaje = document.getElementById("mensaje");

    const frases = [
        "🌙 El bosque: Oh... la  encontraste.",
        "🌙 El bosque: Esa luciérnaga es muy escuridisa.",
        "🌙 El bosque: Creo que quiere jugar contigo.",
        "🌙 El bosque: Casi la atrapas..."
    ];

    const posiciones = [
        {x:0,y:0},
        {x:-60,y:0},
        {x:60,y:0},
        {x:0,y:-30},
        {x:0,y:30}
    ];

    let numero = 0;
    let posicion = 0;
    let clics = 0;

    luci.addEventListener("click", function(){

        if(clics < 4){

            mensaje.textContent = frases[numero];

            numero++;
            if(numero >= frases.length){
                numero = 0;
            }

            const p = posiciones[posicion];

            luci.style.transform =
            `translate(${p.x}px, ${p.y}px)`;

            posicion++;
            if(posicion >= posiciones.length){
                posicion = 0;
            }

            clics++;

        }else{

            luci.textContent = "✨";

            mensaje.innerHTML = `
            🌙 El bosque:

            Vaya... parece que ha decidido confiar en ti. Cuidala

            <br><br>

            <button id="seguir">
            ⭐ Seguir el camino
            </button>
            `;

            document
            .getElementById("seguir")
            .addEventListener("click", pantallaEstrella);

        }

    });

}

function pantallaEstrella(){

document.querySelector(".tarjeta").innerHTML=`

<div class="luna">🌙</div>

<h1>La Estrella Perdida</h1>

<p id="mensajeEstrella">

🌙 El bosque:

Una estrella ha caído del cielo.

Solo una sigue brillando.

</p>

<div class="estrellas">

<span>⭐</span>
<span>⭐</span>
<span>⭐</span>
<span>⭐</span>
<span>⭐</span>

</div>

`;

const estrellas=document.querySelectorAll(".estrellas span");
const mensaje=document.getElementById("mensajeEstrella");

const correcta=2;

estrellas.forEach((estrella,indice)=>{

estrella.addEventListener("click",()=>{

if(indice===correcta){

estrella.textContent="✨";

mensaje.innerHTML=`

🌙 El bosque:

¡Sabía que la encontrarías!

<br><br>

<button id="flor">

🌸 Continuar el viaje

</button>

`;

document.getElementById("flor").addEventListener("click", pantallaFlor);

}else{

estrella.style.opacity="0";

estrella.style.pointerEvents="none";

mensaje.textContent="🌙 El bosque: Esa no era...";

}

});

});

}

function pantallaFlor(){

document.querySelector(".tarjeta").innerHTML=`

<div class="luna">🌙</div>

<h1>La Flor Dormida</h1>

<p id="mensajeFlor">

🌙 El bosque:

Las flores del bosque florecen con paciencia.

</p>

<div id="florGrande">

🥀

</div>

<br>

<button id="regar">

💧 Regar

</button>

`;

const flor=document.getElementById("florGrande");
const mensaje=document.getElementById("mensajeFlor");
const boton=document.getElementById("regar");

const estados=["🥀","🌱","🌿","🌸"];

let paso=0;

boton.addEventListener("click",()=>{

paso++;

flor.textContent=estados[paso];

if(paso==3){

mensaje.innerHTML=`

🌙 El bosque:

Sabía que podías devolverle la vida.

<br><br>

<button id="regalo">

💌 Abrir carta

</button>

`;

document
.getElementById("regalo")
.addEventListener("click", pantallaCarta);
}

});

}

function pantallaCarta(){

document.querySelector(".tarjeta").innerHTML=`

<div class="luna">🌙</div>

<h1>Una carta para ti</h1>

<div id="sobre">

✉️

</div>

<p>

Hay algo que he querido decirte.

Pero primero...

abre esta carta.

</p>

<br>

<button id="abrir">

💌 Abrir carta

</button>

`;

document
.getElementById("abrir")
.addEventListener("click", abrirCarta);

}

function abrirCarta(){

document.querySelector(".tarjeta").innerHTML=`

<div class="luna">🌙</div>

<h1>🌙 Para ti...</h1>

<div class="mensajeFinal">

<p>

Si has llegado hasta aquí,
supongo que el bosque cumplió su misión.

</p>

<br>

<p>

Quería regalarte algo diferente.
Un pequeño viaje hecho con tiempo,
paciencia
y algunos errores en el código
que por suerte logre arreglar.

</p>

<br>

<p>

Hoy es un día especial.

Porque es tu cumpleaños. 🎂✨

Y no quería dejar pasar la oportunidad
de desearte toda la felicidad
que la vida pueda darte.

</p>

<br>

<p>

También quería agradecerte.

Han pasado dos años,
nuestras vidas cambiaron
y nuestros caminos tomaron rumbos distintos,
pero de alguna manera,
hoy estamos aqui juntos.

Y eso es algo que valoro mucho.

</p>

<br>

<p>

Quiero que sepas que,
sin importar el tiempo,
hay pequeños detalles que nunca cambian.

Y para mí,
tu apodo siempre será
<b>"mi niño".</b>

🖤

</p>

<br>

<p>

Espero que este pequeño bosque,
sus luciérnagas,
sus estrellas
y su flor
hayan logrado sacarte una sonrisa.

</p>

<br>

<p>

Feliz cumpleaños. 🎂✨

Gracias por llegar hasta el final
de esta aventura.

</p>

<br>

<p>

Con cariño,

<b>Issa. 🌙💚</b>

</p>

<hr>

<p>

<br><br>

<i>

"Algunas personas nunca dejan de ser importantes,
aunque el tiempo cambie la historia."

</i>

✨

</p>

<br><br>

<button id="cielo">

🌙 Ver el cielo

</button>

</div>

`;

document
.getElementById("cielo")
.addEventListener("click", pantallaFinal);

}

function pantallaFinal(){

document.querySelector(".tarjeta").innerHTML=`

<div class="final">

<div class="cielo">

✨ ✨ ✨ ✨ ✨

</div>

<h1>

🌙

</h1>

<h2>

El último cielo

</h2>

<p>

Feliz cumpleaños,

<b>mi niño.</b>

🎂✨

</p>

<br>

<p>

Gracias por recorrer
este pequeño bosque.

</p>

<br>

<p>

Espero que este nuevo año
te traiga paz,
muchas sonrisas,
personas bonitas
y momentos que siempre quieras recordar.

</p>

<br>

<p>

🌙

Y gracias a ti,

esta historia tuvo un final bonito.

✨

</p>

<br>

<p style="font-size:14px; opacity:.8;">

El bosque siempre recordará
a quienes caminaron por él.

</p>

<div class="cielo">

✨ 🌙 ✨ 🌙 ✨

</div>

</div>

`;

}