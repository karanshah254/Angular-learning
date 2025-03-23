import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService } from '../service/user.service';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { error } from 'console';

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
    const srNo = this.route.snapshot.paramMap.get('srNo');

    if (srNo) {
      this.isEditMode = true;
      this.userService.getUserBySrNo(parseInt(srNo)).subscribe((existingUser) => {
        if (existingUser) {
          this.user = existingUser;
        }
      }, (error) => {
        console.error('Error fetching user by srNo:', error);
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.userService.updateUser(this.user).subscribe(() => {
        this.userService.loadUsersFromBackend();
        this.userService.getUsers().subscribe(users => {
          const index = users.findIndex(u => u.srNo === this.user.srNo);
          if (index !== -1) {
            users[index] = this.user; // Update list with edited user
          }
        });
        this.router.navigate(['/user-list']);
      }, (error) => {
        console.error('Error updating user:', error);
      }
    );
    } else {
      this.userService.addUser(this.user).subscribe(() => {
        this.userService.loadUsersFromBackend();
        this.router.navigate(['/user-list']);
      }, (error) => {
        console.error('Error adding user:', error);
      }
    );
    }
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
