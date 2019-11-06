import { UsuarioProvider } from './../../providers/usuario/usuario';
import { HomePage } from './../home/home';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
 email: String
 senah: String
 nome: String
 dtNascimento: Date

 cep: String
 bairro: String
 rua: String
 estado: String

  constructor(public navCtrl: NavController, public navParams: NavParams,public UsuarioProvider:UsuarioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }
  buscarCep(){
    this.UsuarioProvider.buscarEnderecoViaCep(this.cep).then((data:any) =>{
      this.bairro = data.bairro
      this.rua = data.logradouro
      this.estado = data.localidade
      this.cep= data.cep

      console.log(data)
    }) 
  }
  cadastrar(){
    this.navCtrl.setRoot(HomePage)
  }
  jaPossuoConta(){
    this.navCtrl.push(LoginPage)
  }
}
