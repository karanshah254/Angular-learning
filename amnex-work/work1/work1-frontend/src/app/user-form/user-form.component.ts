import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService } from '../service/user.service';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  // styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {

  user: User = { srNo: 0, name: '', gender: '', pincode: 0, dob: '' };
  isEditMode: boolean = false;
  private usersSubscription: Subscription | null = null;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const url = this.router.url;
    if (url.includes('edit')) {
      const srNo = parseInt(url.split('/')[2]);
      const existingUser = this.userService.getUserBySrNo(srNo);
      if (existingUser) {
        this.user = { ...existingUser };
        this.isEditMode = true;
      }
    }
    const srNo = this.route.snapshot.paramMap.get('srNo');

    if (srNo) {
      const existingUser = this.userService.getUserBySrNo(parseInt(srNo));
      if (existingUser) {
        this.user = { ...existingUser };
        this.isEditMode = true;
      }
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.userService.updateUser(this.user);
    } else {
      this.user.srNo = this.generateSrNo();
      this.userService.addUser(this.user);
    }
    this.router.navigate(['/user-list']);
  }

  private generateSrNo(): number {
    let maxSrNo = 0;
    this.usersSubscription = this.userService.getUsers().subscribe((users) => {
      maxSrNo = Math.max(...users.map((user) => user.srNo), 0);
    });
    return maxSrNo + 1;
  }

  ngOnDestroy(): void {
    if (this.usersSubscription) {
      this.usersSubscription.unsubscribe();
    }
  }

  resetForm() {
    this.user = { srNo: 0, name: '', gender: '', pincode: 0, dob: '' };
  }


  navigateToList() {
    this.router.navigate(['/user-list']);
  }

}
