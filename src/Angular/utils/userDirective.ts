import { Component, Input, OnChanges } from '@angular/core';

@Component({
    template: '<h2>Hello {{user}}',
    selector: 'user'    
})
export class UserDirective {
    @Input('data') private user;
}