import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  usuarioCadastro: User = {};
  caminho: string = "../../assets/wize-logo.png";

  async realizarCadastroAsync() {
    let htmlIonLoadingElement = await this.loadingController.create({
      message: "Realizando cadastro..."
    });
    try {
      htmlIonLoadingElement.present();
      await this.authService.cadastro(this.usuarioCadastro);
    } catch (error) {
      console.log(error);      
    } finally {
      await htmlIonLoadingElement.dismiss();
    }
  }

  constructor(
    private loadingController: LoadingController,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

}
