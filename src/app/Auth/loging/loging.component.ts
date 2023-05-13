import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iloging } from 'src/app/Interface/Iloging';
import { AunthService } from 'src/app/Service/authService';
import { alert2 } from 'src/app/Utils/toaster';

@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent implements OnInit {

  userInfo: Iloging = {
    email: '',
    password: '',
  };

  constructor(private loginS: AunthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  async login() {
    if (this.userInfo.email !== '' && this.userInfo.password !== '') {
      try {
        await this.loginS.loginUser(this.userInfo);
        alert2('Inicio de Sesión con Éxito', 'success')
        return this.router.navigateByUrl('/home')
      } catch (error) {
        console.log(error);
        return alert2(error as string, 'error')
      }
    } else {
      if (this.userInfo.email === '' && this.userInfo.password === '') {
        return alert2('Por favor llene los campos', 'error');
      } else {
        return this.userInfo.email === ''
          ? alert2('Por Favor Ingrese el Email', 'error')
          : alert2('Por Favor Ingrese Contraseña', 'error');
      }
    }
  }

  register(){
    
  }
}
