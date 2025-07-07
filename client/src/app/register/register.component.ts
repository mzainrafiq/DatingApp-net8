import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private accountService = inject(AccountService);
  //usersFromHomeComponent = input.required<any>(); // using new way, not by tradational decorators
  //@Output() cancelRegister = new EventEmitter();  // old syntax for EventEmitter that uses decorators
  private toastr = inject(ToastrService);
  cancelRegister = output<boolean>();
  //RegisterSuccess = output<string>();
  model: any = {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: response => {
        console.log(response);
        //this.success();
        this.toastr.success('Registration successful');
        //this.usersFromHomeComponent = response; // using new way, not by tradational decorators
        //this.cancelRegister.emit(false); // old syntax for EventEmitter that uses decorators

        this.cancel();
      },
      error: error => this.toastr.error(error.error)
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

  // success() {
  //   this.RegisterSuccess.emit('Registration successful');
  // }
}