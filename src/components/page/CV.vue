<template>
    <div>
        <section>
        <div class="maPhoto">
            <img src='@/assets/img/photo.png' alt="ma photo de profil">
        </div>
        <div class="info-contacts" >
            <div class="element">
                <button class="button" @click="isDisplayTel =! isDisplayTel"> <img src='@/assets/img/portable.png'></button>
                <div class="mail" v-show="isDisplayTel">
                    <span>07 58 62 40 77</span>
                </div>
            </div>
            <div class="element">
                <button class="button" @click="isDisplayMail =! isDisplayMail"><img src='@/assets/img/mail.png'
                ></button>
                <div class="mail" v-show="isDisplayMail">
                    <span>alikhlifi.kh@gmail.com</span>
                </div>
            </div>
            
                
            
            <div class="element">
                <a href="https://www.linkedin.com/in/ali-khlifi-77b60a148/" target="_blank"><img src='@/assets/img/linkidin2.png' alt="profil-linkidin"></a>
                
            </div>
            <div class="element">
                <a href="https://github.com/Ali-Khlifi" target="_blank"><img src='@/assets/img/guithub.png' alt="mon guithub"></a>
                
            </div>
        </div>
        <div class="pres">
            <p>Extrêmement motivé pour développer constamment mes compétences et évoluer professionnellement. Je suis confiant dans ma capacité à proposer des idées innovantes pour élaborer des applications Web de plus en plus performantes.</p>
        </div>
    </section>
    <div class="container">
        <div class="row justify-content-between custom-line">
            <div class="col-4">
                <div class="carre-exp">
                    <div class="titre">
                        <h3>Expériences</h3>
                    </div>
                    <div class="compet">
                        <div>
                            <h6>Développeur Web </h6>
                            <p>Mars - Septembre 2022 </p>  
                        </div>
                        <div class="exp-desc">
                            <ul>
                                <li>
                                    Participation au développement d’une application web dédiée à la gestion 
                                    des appels d’urgence pour les préfectures

                                </li>
                                <li>
                                    Développement des services Web type RESTful (JAX-RS), implémentation RESTEasy avec Java,
                                    </li>
                                    <li>
                                        Développement des nouvelles fonctionnalités et correction de bugs : création des formulaires, manipulation de fichiers, gestion des notifications,
                                    </li>
                            </ul>
                        </div>
                    </div>
                    <div class="compet">
                        <div>
                            <h6>Développeur WebSIG </h6>
                            <p>Janvier - Février 2022 </p>
                        </div>
                        <div class="exp-desc">
                            <ul>
                                <li>
                                    Développement d'une application web pour la gestion des ressources en eau
                                    d’une agglomération urbaine,
                                </li>
                                <li>
                                    Conception et mise en œuvre d'une base de données relationnelle,
                                </li>
                                <li>
                                    Développement d'une interface utilisateur responsive,
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="compet">
                        <div>
                            <h6>Chargé d'études SIG </h6>
                            <p>2018 - 2020 </p>
                        </div>
                        <div class="exp-desc">
                           <ul>
                            <li>
                                Développement des scripts d’automatisation des processus SIG avec Python,
                                </li>
                                <li>
                                    Mise en place d’un suivi graphique des projets (automatisation des mises
                                    à jour des données d’entrées rafraichies de façon hebdomadaire),
                                </li>
                           </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="carre-comp">
                    <div class="titre">
                        <h3>Compétences</h3>
                    </div>
                    <div class="compet">
                        <h6>Programmation</h6>
                        <ul>
                            <li>
                                java
                            </li>
                            <li>
                                JavaScript, HTML, CSS
                            </li>
                            <li>
                                Python, SQL
                            </li>
                            <li>
                                Vue.js
                            </li>
                            <li>
                                Spring Boot
                            </li>
                        </ul>
                    </div>
                    <div class="compet">
                        <h6>Modélisation / SGBD</h6>
                        <ul>
                            <li>
                                PostgreSQL
                            </li>
                            <li>
                                SQLite
                            </li>
                            <li>
                                UML
                            </li>
                        </ul>
                    </div>
                    <div class="compet">
                        <h6>Environnement technique</h6>
                        <ul>
                            <li>
                                Linux
                            </li>
                            <li>
                                Git/GitHub
                            </li>
                            <li>
                                Docker
                            </li>
                            <li>
                                IntelliJ, VSCode
                            </li>
                        </ul>
                    </div>
                    <div class="compet">
                        <h6>Projets réalisés</h6>
                        <p>
                            Développement d’une application métier pour la gestion des ressources en
                            eau de la ville de Zaghouan. <a href="#/projets"> Cliquer ici</a>
                        </p>
                        <p>
                            Participatuin au développement d’une
                            solution SIG permettant de visualiser
                            la mobilité vélo à Toulouse et à Lyon.
                        </p>
                        
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="carre-form">
                    <div class="titre">
                        <h3>Formation</h3>
                    </div>
                    <div class="exp">
                        <div>
                            <a href="#"><img src='@/assets/img/logo.png' alt="logo UGA"></a>
                        </div>
                        <div>
                            <h2>Master 2 Informatique <br>technologies web</h2>
                            <h4>2022 - 2023</h4> 
                        </div>
                    </div>
                    <div class="exp">
                        <div>
                            <a href="#"><img src='@/assets/img/ensat.png' alt="logo UGA"></a>  
                        </div>
                        <div>
                            <h2>Master 2 Géomatique </h2>
                            <h4>2021 - 2022</h4> 
                        </div>
                    </div>
                    <div class="exp">
                        <div>
                            <a href="#"><img src='@/assets/img/univ-lorraine.png' alt="lorraine"></a>
                        </div>
                        <div>
                            <h2>Maîtrise en Géosciences <br>et environnement</h2>
                            <h4>2020 - 2021</h4>
                        </div>
                    </div>
                </div>
                <div class="col 4">
                    <div class="carre-certif">
                            <button class="cvBtn" @click="afficheTexte" ref="btnToggle">
                            Certificats
                            </button>
                            <div v-show="display">
                                <div class="exp">
                                <div>
                                    <h2> • Programmation avec Java - CODEGYM</h2>
                                    <h2> •	Databases and SQL - IBM</h2>
                                    <h2> • Data Analysis with Python - UDACITY</h2>
                                </div>
                                
                                
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>  
        </div>
    </div>
</template>

<script>
export default {
    name:"CV",
    data(){
        return{
            isDisplayTel: false,
            isDisplayMail: false,
            display: true
        }
    },
    methods: {
        afficheTexte:function(){
            this.display = !this.display;
            this.$refs.btnToggle.innerText = this.display?'Certificats':'Certificats';

        }
    }      
}
   
</script>

<style>

.exp img{
    width: 50px;
    height: 50px;
    border: 2px solid #ccc;
}
.exp h2{
    text-align: center;
    display:flex;
    font-size: 1.2em;
    margin-left: 20px;
    
}
.exp h4{
    font-size: 1em;
    font-family: normal;
}
.maPhoto{
    text-align: center;
}
.maPhoto img{
    width: 150px;
    height: 150px;
    border:3px;
    border-radius: 50%;
}
.carre-form{
	width:350px;
	height:270px;
	background: #D6DBDF;
}
.carre-exp{
    width:350px;
	height:655px;
	background:#D6DBDF
}
.carre-comp{
    width:350px;
	height:550px;
	background:#D6DBDF
}
.carre-certif{
    margin-top: 40px;
    width:350px;
	height:300px;
	background:#D6DBDF

}
.compet{
    text-align : left;
    margin-top: 10px;
    margin-block: 5px;
    padding-left: 3px;
    border-left: 4px green solid;
    background-color: lightgrey;
    vertical-align:middle;
}

.compet h6{
    font-size: 0.9em;
    border-block-style: groove;
    writing-mode: horizontal-tb;
    direction: rtl;
}
.compet li{
    font-size: small;
}

.compet p{
    font-size: small;
    text-align: start;
}
.compet img{
    width: 50px;
    height: 50px;
    border: 2px solid #ccc;
}

.titre h3 {
    text-align: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size:1.2em;
    border: 1px solid #B2BABB;
    font-weight: normal;
    background: #7f7f7f;
    color: #fff;
    margin: auto;
    padding: 2px;
}
.exp{
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-family: 'Courier New', Courier, monospace;
    font-size: small;
    
}
.exp-desc ul{
    text-align: start
}

.info-contacts{
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto 0px auto;
    margin-bottom: -8px;
    position: relative;
    
}
.element{
    margin-bottom:8px;
    display:flex;
    margin-right: 12px;
    justify-content: center;
    flex-wrap: wrap
}
.element img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
}

.button{
    cursor:pointer;
    border:none
}
.mail{
    font-family: 'Courier New', Courier, monospace;
    font-size: smaller;
    color: #000;
    margin-top: 5px;
    font-weight: bold;
}
.cvBtn{
    transition-duration: 0.4s;
    border-radius: 6px;
    text-align: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size:1.2em;
    font-weight: normal;
    background: #7f7f7f;
    color: #fff;
    margin: auto;
    padding: 2px;
    width: 350px
}
.cvBtn:hover{
  background-color: #4CAF50; /* Green */
  color: white;
}
.pres p{
    font-size: small;
}

</style>