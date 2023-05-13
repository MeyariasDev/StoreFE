import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iregister } from 'src/app/Interface/Iregister';
import { AunthService } from 'src/app/Service/authService';
import { alert2 } from 'src/app/Utils/toaster';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formRegister = this.formBuilder.group({
    name: ['', [Validators.required, Validators.min(3)]],
    lastname: ['', [Validators.required]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
      ],
    ],
    password: ['', [Validators.min(8), Validators.required]],
  });
  userRegister: Iregister = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  constructor(private auhtS: AunthService, private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit() { }

  registerformfields() {
    const { controls } = this.formRegister;
    Object.entries(controls).map(([key, value]) => {
      if (value.status === 'INVALID') {
        switch (key) {
          case 'name':
            alert2('Por favor llene Campo Nombre', 'error');
            break;
          case 'lastname':
            alert2('Por Favor llene Campo Apellido', 'error');
            break;
          case 'email':
            alert2('Por Favor llene Campo Correo Correctamente', 'error');
            break;
          case 'password':
            alert2('Por favor llene la Contraseña', 'error');
            break;
          default:
            break;
        }
      }
    });
  }

  async register() {
    const { status, value } = this.formRegister;
    console.log(this.formRegister, 'Register');

    if (status !== 'INVALID') {
      try {
        await this.auhtS.createAccount(value as Iregister);
        alert2('Se ha creado con Éxito', 'success');
        this.router.navigateByUrl('/login')

      } catch (error) {
        alert2(error as string, 'error');
      }
    } else {
      this.registerformfields();
    }
  }
}
