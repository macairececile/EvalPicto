import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-eval-home',
    templateUrl: './eval_home.component.html',
    styleUrls: ['./eval_home.component.css']
})
export class EvalHomeComponent implements OnInit {

    is_checked: boolean = false;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    goToPage(): void {
        if(this.is_checked) {
            this.router.navigate(['evalPicto']);
        }
    };

    toggleEditable(event: Event) {
        // @ts-ignore
        if (event.target.checked) {
            this.is_checked = true;
        }
    }

}
