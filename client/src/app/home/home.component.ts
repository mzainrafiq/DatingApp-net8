import { Component, inject } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [RegisterComponent]
})
export class HomeComponent {
  registerMode = false;
  private toastr = inject(ToastrService);

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
  registerSuccessMode(event: string) {
    console.log(event);
    //this.registerMode = false;
    this.toastr.success(event); // Display the success message using Toastr
  }
}
