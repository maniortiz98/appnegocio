import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'tkss-home-addres',
  templateUrl: './home-addres.component.html',
  styleUrls: ['./home-addres.component.scss'],
})
export class HomeAddresComponent implements OnInit {

  public login = this.formBuilder.group({
    numeroint:['',Validators.required], // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+')
    numeroext:['',Validators.required],
    cp:['',Validators.required],
    colonia:['',Validators.required],
    estado:['',Validators.required],
    dresstype:['',Validators.required],
    calle:['',Validators.required],
    //terminos:[false,Validators.required]
  })
  constructor(
    private  formBuilder: FormBuilder,
  ) { }

  ngOnInit() {}

  singIn() {
    console.log(this.login.value);
  }

}
