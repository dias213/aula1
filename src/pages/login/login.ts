import { UsuarioProvider } from './../../providers/usuario/usuario';
import { CadastroPage } from './../cadastro/cadastro';
import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  nomeUsuario: any;
  isUsuarioValido: boolean;
  urlImage: string = 'assets/imgs/user.svg'
    email: String;
    senha: String;

  constructor(public navCtrl: NavController, public navParams: NavParams,public usuarioProvider: UsuarioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

abrirCadastro(){
 this.navCtrl.push(CadastroPage)     
}


  fazerLogin(){

    let elementoBotao = <HTMLElement>document.querySelector('#btnLogin')
     elementoBotao.innerText = 'Entrando...'
     let corAntiga = elementoBotao.style.background
     elementoBotao.style.background = '#c31432'
    console.log(elementoBotao)

  setTimeout(()=>{
    if(this.email == 'admin' && this.senha == 'admin'){
      alert('logado!');
    }else{
      alert('incorreto !!');
    }
     elementoBotao.innerHTML = 'ENTRAR'
     elementoBotao.style.background = corAntiga
  }, 3000)
this.usuarioProvider.buscarUserGithub (this.email).then(
  (data: any) => {
    if (data.avatar_url){
      //se o usuario existir faça isso
      this.urlImage = data.avatar_url
      this.nomeUsuario = data.nome
      this.isUsuarioValido = true
      console.log(data)
    }else{
    this.isUsuarioValido = false
    this.urlImage = 'assets/imgs/user.svg'
    }
  })
}
  
}
