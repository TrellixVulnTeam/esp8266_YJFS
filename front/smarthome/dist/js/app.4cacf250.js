(function(e){function t(t){for(var n,i,s=t[0],r=t[1],u=t[2],l=0,p=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,s=1;s<o.length;s++){var r=o[s];0!==c[r]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},c={app:0},a=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=r;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"46b2":function(e,t,o){},"4b8c":function(e,t,o){e.exports=o.p+"img/home-icon.207f329e.png"},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),c={id:"app"};function a(e,t,o,a,i,s){var r=Object(n["w"])("router-view");return Object(n["p"])(),Object(n["d"])("div",c,[Object(n["g"])(r)])}var i={};o("b0ec");i.render=a;var s=i,r=(o("ab8b"),o("bc3a")),u=o.n(r),d=o("6c02"),l=(o("b0c0"),o("4b8c")),p=o.n(l),b={id:"devices"},g=Object(n["g"])("img",{src:p.a},null,-1),v=Object(n["g"])("div",null,"Smartcommand",-1),f=Object(n["g"])("div",{id:"top",class:"head row"},"Casas > Ambientes > Dispositivos",-1),m=Object(n["g"])("hr",null,null,-1),h={key:0,class:"spinner-border text-info"},O={class:"col-md-4"},j=Object(n["g"])("div",{class:"head-name alert alert-primary"},"Nome do dispositivo",-1),y={class:"alert alert-primary"},w={key:0,class:"col-md-4"},N=Object(n["g"])("div",{class:"head-name alert alert-success"},"Status do Dispositivo",-1),k={class:"alert alert-success"},D={key:1,class:"col-md-4"},U=Object(n["g"])("div",{class:"head-name alert alert-danger"},"Status do Dispositivo",-1),x={class:"alert alert-danger"},L={key:2,class:"col-md-4"},S={key:3,class:"col-md-4"},A={class:"row"},_=Object(n["g"])("div",{class:"col-3"},null,-1),C={key:1,class:"new-device col-6"},P={key:0,class:"spinner-border text-info"},q={key:1,class:"addNewDevice"},T=Object(n["e"])('<div class="form-group"><label for="deviceName">Nome do dispositivo</label><input class="form-control" id="deviceName" aria-describedby="emailHelp" placeholder="Nome do dispositivo"></div><div class="form-group"><label for="ssid">Nome da rede</label><input class="form-control" id="ssid" placeholder="Nome da rede"></div><div class="form-group"><label for="wifiPassword">Senha da rede</label><input type="password" class="form-control" id="wifiPassword" placeholder="Senha da rede"></div><div class="form-check"><input type="checkbox" class="form-check-input" id="exampleCheck1"><label class="form-check-label" for="exampleCheck1">Tenho certeza que estou conectado à rede do dispositivo</label></div>',4);function V(e,t,o,c,a,i){return Object(n["p"])(),Object(n["d"])("div",b,[g,v,f,m,Object(n["g"])("div",null,[a.showDeviceLoading?(Object(n["p"])(),Object(n["d"])("div",h)):(Object(n["p"])(!0),Object(n["d"])(n["a"],{key:1},Object(n["v"])(a.dispositivos,(function(e){return Object(n["p"])(),Object(n["d"])("div",{class:"device row",key:e},[Object(n["g"])("div",O,[j,Object(n["g"])("div",y,Object(n["y"])(e.name),1)]),"on"===e.status?(Object(n["p"])(),Object(n["d"])("div",w,[N,Object(n["g"])("div",k,Object(n["y"])(e.status),1)])):(Object(n["p"])(),Object(n["d"])("div",D,[U,Object(n["g"])("div",x,Object(n["y"])(e.status),1)])),"on"===e.status?(Object(n["p"])(),Object(n["d"])("div",L,[Object(n["g"])("button",{type:"button",id:"button1",class:"button-toggle btn btn-secondary",onClick:function(t){return i.toggleLigth(e)}}," Desligar ",8,["onClick"])])):(Object(n["p"])(),Object(n["d"])("div",S,[Object(n["g"])("button",{type:"button",id:"button2",class:"button-toggle btn btn-secondary",onClick:function(t){return i.toggleLigth(e)}}," Ligar ",8,["onClick"])]))])})),128)),Object(n["g"])("div",A,[_,a.showAddNewDevice?(Object(n["p"])(),Object(n["d"])("div",C,[a.showNewDeviceLoading?(Object(n["p"])(),Object(n["d"])("div",P)):(Object(n["p"])(),Object(n["d"])("div",q,[Object(n["g"])("form",null,[T,Object(n["g"])("button",{type:"button",class:"btn btn-primary",onClick:t[2]||(t[2]=function(){return i.addNewDevice&&i.addNewDevice.apply(i,arguments)})}," Adicionar dispositivo "),Object(n["g"])("button",{type:"button",class:"close btn btn-secondary",onClick:t[3]||(t[3]=function(){return i.closeAddNewDevice&&i.closeAddNewDevice.apply(i,arguments)})}," Fechar ")])]))])):(Object(n["p"])(),Object(n["d"])("button",{key:0,type:"button",class:"new-device col-6",onClick:t[1]||(t[1]=function(e){return i.openAddNewDevice()})}," Adicionar novo dispositivo "))])])])}o("99af"),o("4de4"),o("ac1f"),o("5319");var z={name:"App",props:{userName:{type:String,required:!0}},data:function(){return{dispositivos:[],showAddNewDevice:!1,showDeviceLoading:!0,showNewDeviceLoading:!1,checkDeviceStatus:!0}},methods:{toggleLigth:function(e){var t=this,o=e.name+"_quarto_casa_"+this.userName;this.checkDeviceStatus=!1,setTimeout((function(){t.checkDeviceStatus=!0}),4e3),"on"===e.status?(e.status="off",console.log("deaaaasligando a luz"),this.axios.post("toggleStatus?action=D&routingKey=".concat(o)).then((function(e){console.log("mandou mensagem",e.data)})).catch((function(e){console.log("deu erro ao conectar",e)}))):(e.status="on",console.log("laaaigando a luz"),this.axios.post("toggleStatus?action=L&routingKey=".concat(o)).then((function(e){console.log("mandou mensagem",e.data)})).catch((function(e){console.log("deu erro ao conectar",e)})))},getDevices:function(){var e=this;this.checkDeviceStatus?setTimeout((function(){e.axios.get("device?user=".concat(e.userName,"&environment=quarto")).then((function(t){e.dispositivos=t.data,e.showDeviceLoading=!1,console.log("dispositivos obtidos")})).catch((function(t){e.dispositivos=[],console.log("deu erro na requisição",t)})),e.getDevices()}),4e3):setTimeout((function(){e.getDevices()}),1e3)},addNewDevice:function(){var e=this,t=document.getElementById("deviceName").value,o=document.getElementById("ssid").value,n=document.getElementById("wifiPassword").value;this.showNewDeviceLoading=!0,this.checkDeviceStatus=!1,this.axiosDevice.get("connect?rede=".concat(o,"&senha=").concat(n,"&routingKey=").concat(t+"_quarto_casa_"+this.userName,"&deviceName=").concat(t,"&status=","off","&environment=quarto&user=").concat(this.userName)).then((function(e){console.log(e.data)})).catch((function(e){console.log("deu erro ao conectar",e)})),setTimeout((function(){e.axios.get("device?user=".concat(e.userName,"&environment=quarto")).then((function(o){e.dispositivos=o.data,e.showNewDeviceLoading=!1,e.showAddNewDevice=!1,e.dispositivos.filter((function(e){return e.name===t})).length>0?alert("Dispositivo adicionado!"):alert("Erro ao adicionar dispositivo, tente novamente!")})).catch((function(t){e.dispositivos=[],console.log("deu erro na requisição",t)})),e.checkDeviceStatus=!0}),1e4)},openAddNewDevice:function(){this.showAddNewDevice=!0},closeAddNewDevice:function(){this.showAddNewDevice=!1}},created:function(){this.getDevices(),console.log("props.userName:  ",this.userName),void 0===this.userName&&(console.log("entrou undefined username"),this.$router.replace({name:"login"}))},mounted:function(){}};o("8781");z.render=V;var B=z,I=Object(n["D"])("data-v-4aa2a388");Object(n["s"])("data-v-4aa2a388");var E=Object(n["g"])("img",{src:p.a},null,-1),M=Object(n["g"])("h2",null,"Smartcommand",-1),K={class:"login"},R=Object(n["g"])("h1",null,"Login",-1),$=Object(n["g"])("br",null,null,-1),J=Object(n["g"])("br",null,null,-1),F={key:0,class:"spinner-border text-info"},H={key:1,class:"btn-login"},G=Object(n["f"])(" Você não tem conta? "),Q=Object(n["f"])("crie uma conta");Object(n["q"])();var W=I((function(e,t,o,c,a,i){var s=Object(n["w"])("router-link");return Object(n["p"])(),Object(n["d"])(n["a"],null,[E,M,Object(n["g"])("div",K,[R,Object(n["C"])(Object(n["g"])("input",{type:"text",placeholder:"Usuário","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.userNameUsed=e})},null,512),[[n["A"],a.userNameUsed]]),$,Object(n["C"])(Object(n["g"])("input",{type:"password",placeholder:"Senha","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.senha=e})},null,512),[[n["A"],a.senha]]),J,a.isLoading?(Object(n["p"])(),Object(n["d"])("div",F)):(Object(n["p"])(),Object(n["d"])("div",H,[Object(n["g"])("button",{onClick:t[3]||(t[3]=function(){return i.login&&i.login.apply(i,arguments)})},"Login")])),Object(n["g"])("p",null,[G,Object(n["g"])("span",null,[Object(n["g"])(s,{to:"/singUp"},{default:I((function(){return[Q]})),_:1})])])])],64)})),X={name:"login",data:function(){return{userNameUsed:"",senha:"",isLoading:!1}},methods:{login:function(){var e=this;this.isLoading=!0,this.axios.post("authenticate?userName=".concat(this.userNameUsed,"&password=").concat(this.senha)).then((function(){e.isLoading=!1,alert("Bem Vindo, ".concat(e.userNameUsed));var t=e.userNameUsed;e.$router.replace({name:"devices",params:{userName:t}})})).catch((function(t){e.isLoading=!1,alert("Não foi possível realizar o login. "+t.message)}))}}};o("948c");X.render=W,X.__scopeId="data-v-4aa2a388";var Y=X,Z=Object(n["D"])("data-v-02c2a9e3");Object(n["s"])("data-v-02c2a9e3");var ee=Object(n["g"])("img",{src:p.a},null,-1),te=Object(n["g"])("h2",null,"Smartcommand",-1),oe={class:"sign-up"},ne=Object(n["g"])("p",null,"Crie uma nova conta",-1),ce=Object(n["g"])("br",null,null,-1),ae=Object(n["g"])("br",null,null,-1),ie={key:0,class:"spinner-border text-info"},se=Object(n["f"])(" ou retorne ao "),re=Object(n["f"])(" login.");Object(n["q"])();var ue=Z((function(e,t,o,c,a,i){var s=Object(n["w"])("router-link");return Object(n["p"])(),Object(n["d"])(n["a"],null,[ee,te,Object(n["g"])("div",oe,[ne,Object(n["C"])(Object(n["g"])("input",{type:"text",placeholder:"Usuário","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.userNameUsed=e})},null,512),[[n["A"],a.userNameUsed]]),ce,Object(n["C"])(Object(n["g"])("input",{type:"password",placeholder:"Senha","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.senha=e})},null,512),[[n["A"],a.senha]]),ae,a.isLoading?(Object(n["p"])(),Object(n["d"])("div",ie)):(Object(n["p"])(),Object(n["d"])("button",{key:1,onClick:t[3]||(t[3]=function(){return i.signUp&&i.signUp.apply(i,arguments)})},"Registrar")),Object(n["g"])("span",null,[se,Object(n["g"])(s,{to:"/"},{default:Z((function(){return[re]})),_:1})])])],64)})),de={name:"signUp",data:function(){return{userNameUsed:"",senha:"",isLoading:!1}},methods:{signUp:function(){var e=this;this.isLoading=!0,this.axios.post("createNewUser?userName=".concat(this.userNameUsed,"&password=").concat(this.senha)).then((function(){e.isLoading=!1,alert("Bem Vindo, ".concat(e.userNameUsed));var t=e.userNameUsed;e.$router.replace({name:"devices",params:{userName:t}})})).catch((function(t){e.isLoading=!1,alert("Não foi possível realizar a criação da conta. "+t.message)}))}}};o("8a7e");de.render=ue,de.__scopeId="data-v-02c2a9e3";var le=de,pe=Object(d["a"])({history:Object(d["b"])(),routes:[{name:"login",path:"/",component:Y,props:!0},{name:"devices",path:"/devices",component:B,props:!0},{path:"/singUp",component:le,props:!0}]}),be=Object(n["c"])(s);be.use(pe),be.config.globalProperties.userName="",be.config.globalProperties.axios=u.a.create({baseURL:"https://smarthomedosfluxo.herokuapp.com",timeout:1e4}),be.config.globalProperties.axiosDevice=u.a.create({baseURL:"http://192.168.4.1:8080",timeout:3e3}),be.mount("#app")},8781:function(e,t,o){"use strict";o("adf2")},"8a7e":function(e,t,o){"use strict";o("46b2")},"8b46":function(e,t,o){},"948c":function(e,t,o){"use strict";o("fe83")},adf2:function(e,t,o){},b0ec:function(e,t,o){"use strict";o("8b46")},fe83:function(e,t,o){}});
//# sourceMappingURL=app.4cacf250.js.map