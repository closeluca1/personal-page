<!DOCTYPE html>
<html lang="pt_BR">
<head>
    <title>Document</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./www/mainstyle.css">
</head>
<body>
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-firestore.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-analytics.js"></script>

    <div class="container">
        <header>
            <div class="pic-me">
                <figure>
                    <img class="pc-icon" src="./imagem/codingItem.png" alt="">
                </figure>
                <figure>
                    <img src="./imagem/lucawww.jpg" alt="@_lucawww">
                </figure>
            </div>
            <h1 class="my-name-is" alt="ig _lucawww">Patrick</h1>
        </header>
        <main>
            <div class="top-item">
                <a href="https://github.com/closeluca1" target="blank" rel="noopener noreferrer"><div class="icon-space">
                    <img src="./imagem/githubIcon.png">
                </div></a>
                <a href="https://www.instagram.com/_lucawww/" target="blank" rel="noopener noreferrer"><div class="icon-space">
                    <img style="width: 85%" src="./imagem/instagramIcon.png">
                </div></a>
                <a href="https://www.youtube.com/channel/UCHOI2_iXzt5X3nzqVTLDv6g" target="blank" rel="noopener noreferrer"><div class="icon-space">
                    <img style="width: 70%" src="./imagem/youtubeIncon.png">
                </div></a>
            </div>
                <span class="span-title">Projeto &nbsp;👇🏼</span>
            <section class="about-something">
                <h2>Automatização de cardapio</h2>
                <p>Descrição projeto</p>
            </section>
            <button>💻 &nbsp; Minhas criações & participações;&nbsp;</button>
            <button onclick="AbrirPage()">Entrar em contato;</button>
        </main>
        <section id="single-page-contato">
            <div class="single-item-top">
                <span onclick="AbrirPage()"><img src="./imagem/seta.png">Voltar</span>
            </div>
            <form autocomplete="off">
                <input id="NameTake" type="text" placeholder="Nome*">
                <input id="EmailTake" type="email" placeholder="E-mail">
                <input id="TakeAssunto" type="text" placeholder="Assunto*">
                <textarea id="TakeMensagem" placeholder="Escreva sua mensagem" cols="30" rows="10"></textarea>
            </form>
            <button id="EnviarCompleto">Enviar</button>
            <!--<span id="email-enviado"></span>-->
        </section>
        <footer>
            <h6>"o desejo precisa de um certo claustro"</h6>
        </footer>
    </div>
    <script src="./www/firebase.js"></script>
    <script src="./www/gerenciamento.js"></script>
    <script src="./www/mainscript.js"></script>
</body>
</html>
