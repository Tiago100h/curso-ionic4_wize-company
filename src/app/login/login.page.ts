import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: User = {};

  passwordType: String;
  eyeIcon: String;
  caminho: String;

  showHidePassword() {
    if (this.passwordType === "password") {
      this.passwordType = "text";
      this.eyeIcon = "eye-off";
    } else {
      this.passwordType = "password";
      this.eyeIcon = "eye";
    }
  }

  constructor(
    private loadingController: LoadingController,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.passwordType = "password";
    this.eyeIcon = "eye";
    this.caminho = "../../assets/wize-logo.png";
  }

  async realizarLoginAsync() {
    let htmlIonLoadingElement = await this.loadingController.create({
      message: "Realizando login..."
    });
    try {
      htmlIonLoadingElement.present();
      await this.authService.login(this.usuario);
    } catch (error) {
      console.log(error);      
    } finally {
      await htmlIonLoadingElement.dismiss();
    }
  }

}
