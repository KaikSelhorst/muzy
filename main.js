(()=>{"use strict";class t{constructor(t,i,s){this.element=t,this.events=i,this.callback=s,this.html=document.documentElement,this.outside="data-outside",this.handleOutsideClick=this.handleOutsideClick.bind(this)}handleOutsideClick({target:t}){this.element.contains(t)||(this.element.removeAttribute(this.outside),this.events.forEach((t=>{this.html.removeEventListener(t,this.handleOutsideClick)})),this.callback())}init(){return this.element.hasAttribute(this.outside)||(this.events.forEach((t=>{setTimeout((()=>this.html.addEventListener(t,this.handleOutsideClick)))})),this.element.setAttribute(this.outside,"")),this}}class i{constructor(t,i){this.list=document.querySelectorAll(t),this.classActive=i||"active"}toggleAccordion(t){t.classList.toggle(this.classActive)}addEventAccordion(){this.list.forEach((t=>t.addEventListener("click",(()=>this.toggleAccordion(t)))))}init(){return this.list.length&&(this.toggleAccordion(this.list[0]),this.addEventAccordion()),this}}new class{constructor(t,i,s,e){this.btn=document.querySelector(t),this.menu=document.querySelector(i),this.classActive=s,this.events=e||["click","touchstart"],this.openMenu=this.openMenu.bind(this)}openMenu(i){i.preventDefault(),this.btn.classList.toggle(this.classActive),this.menu.classList.toggle(this.classActive),this.btn.ariaExpanded=this.btn.classList.contains(this.classActive),new t(this.menu,["click","touchstart"],(()=>{this.btn.classList.remove(this.classActive),this.menu.classList.remove(this.classActive),this.btn.ariaExpanded=!1})).init()}addEventMenu(){this.events.forEach((t=>this.btn.addEventListener(t,this.openMenu)))}init(){return this.btn&&this.menu&&this.events&&this.addEventMenu(),this}}("[data-menu='button'] ","[data-menu='list']","active").init(),new class{constructor(t,i,s){this.email=document.querySelector(t),this.correct=i,this.incorrect=s,this.checkEmail=this.checkEmail.bind(this)}checkEmail({target:t}){t.value.match(/[\w.-]+@[\w-]+\.[\w-.]+/gi)?(t.classList.remove(this.incorrect),t.classList.add(this.correct)):(t.classList.remove(this.correct),t.classList.add(this.incorrect))}addEventEmail(){this.email.addEventListener("change",this.checkEmail)}init(){return this.email&&this.addEventEmail(),this}}("[data-form='email']","correto","incorreto").init(),new class{constructor(t,i){this.item=document.querySelector(t),this.activeClass=i}dadosFuncionamento(){this.diasSemana=this.item.dataset.semana.split(",").map(Number),this.horarioSemana=this.item.dataset.horario.split(",").map(Number)}dadosAgora(){this.dataAgora=new Date,this.diaAgora=this.dataAgora.getDay(),this.horarioAgora=this.dataAgora.getUTCHours()-3}estaAberto(){const t=-1!==this.diasSemana.indexOf(this.diaAgora),i=this.horarioAgora>=this.horarioSemana[0]&&this.horarioAgora<this.horarioSemana[1];return t&&i}ativaAberto(){this.estaAberto()&&this.item.classList.add(this.activeClass)}init(){return this.item&&(this.dadosFuncionamento(),this.dadosAgora(),this.ativaAberto()),this}}(".contato-horario","aberto").init(),new i('[data-accordion="list"] dt').init(),new i('[data-accordion="tratamento"] dt').init(),new class{constructor(t,i){this.sections=document.querySelectorAll(t),this.classActive=i,this.windowMetade=.6*window.innerHeight,this.checkDistance=this.checkDistance.bind(this)}getDistance(){this.distance=[...this.sections].map((t=>{const i=t.offsetTop;return{element:t,offset:Math.floor(i-this.windowMetade)}}))}checkDistance(){this.distance.forEach((t=>{window.pageYOffset>t.offset&&t.element.classList.add(this.classActive)}))}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}stop(){window.removeEventListener("scroll",this.checkDistance)}}("[data-anima]","ativo").init()})();