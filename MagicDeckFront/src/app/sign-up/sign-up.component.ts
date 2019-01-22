import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertService, UserService } from '../services/index';

@Component({selector: 'app-sign-up',
templateUrl: './sign-up.component.html',
styleUrls: ['./sign-up.component.scss']})
export class SignUpComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService
    ) {
        // redirect to home if already logged in
        if (this.userService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            passwords : this.formBuilder.group({
                password: ['', [Validators.required, Validators.minLength(6)]],
                confirmPassword: ['', Validators.required]
            }, {validator: this.samePasswords('password', 'confirmPassword')})
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    samePasswords(password: string, confirmPassword: string) {
        return (group: FormGroup) => {
            const passwordValue = group.controls[password];
            const confirmPasswordValue = group.controls[confirmPassword];
            if (passwordValue.value !== confirmPasswordValue.value) {
                return confirmPasswordValue.setErrors({notEquivalent: true});
            }
        };
    }
    onSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .subscribe(
                data => {
                    this.alertService.success(data.toString(), true);
                    setTimeout(() => {
                        this.router.navigate(['/sign-in']);
                    }, 5000);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
