import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService } from '../services/index';

@Component({selector: 'app-sign-in',
templateUrl: './sign-in.component.html',
styleUrls: ['./sign-in.component.scss']})
export class SignInComponent implements OnInit {
    signInForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
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
        this.signInForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.signInForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.signInForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.login(this.f.username.value, this.f.password.value)
            .subscribe(
                data => {
                    console.log('data',data);
                    if (data) {
                    this.alertService.success('Vous êtes connecté');
                    this.router.navigate([this.returnUrl]);
                    } else {
                        this.alertService.error('error');
                    }
                },
                error => {
                    console.log(error);
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}