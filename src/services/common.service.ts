import { Injectable } from "@angular/core";

@Injectable()
export class Content{

    content : any;

    constructor(){
        this.content = this.getContent();
    }

    getContent() : any {
        
        let session = {
            modules : [
                { 
                    title : 'Base Project Creation',
                    content : [
                        { type : 'command', data : 'ng new events-base --prefix eve --skip-install'},
                        { type : 'desc', data : 'EventBase Project with defaults created'},
                        { type : 'command', data : 'cd events-base'},
                        { type : 'command', data : 'npm i'},
                        { type : 'desc', data : 'npm i/install will install all the default node modules'},
                        { type : 'info', data : `@package.json: change 'ng serve' to 'ng serve -o', 
                                                running this now will open teh app in default browser`},
                        { type : 'command', data : 'npm run start'},
                        { type : 'step', data : 'clear the contents of app.component.html'}
                    ]
                },
                {
                    title: 'OVERVIEW',
                    content: [
                        {type : 'list', data : 
                            [
                                'Building Forms With Bootstrap Styling',
                                'Data binding forms',
                                'Validating Form Input and handling errors',
                                'Posting form to a server'
                            ]
                        }
                    ]
                },
                {
                    title: 'INTRODUCTION',
                    content: [
                        {
                            type: 'about', data: 'Angular Form Technologies'
                        },
                        {
                            type: 'list', data: [`TEMPLATE-DRIVEN FORMS`, 'REACTIVE FORMS']
                        },
                        {
                            type: 'about', data: `TEMPLATE-DRIVEN FORMS`
                        },
                        {
                            type: 'desc', data: `ABOUT TEMPLATE-DRIVEN FORMS`
                        },
                        {
                            type: 'about', data: `REACTIVE FORMS`
                        },
                        {
                            type: 'desc', data: `ABOUT REACTIVE FORMS`
                        }
                    ]
                },
                {
                    title: 'Form Basics in Angular',
                    content: [
                        { type : 'step', data: `let's review the base project`},
                        { type :'steps start', data: 'initial form setup'},
                        { 
                            type : 'code', 
                            file: 'app.component.html', 
                            data: `<h3>Angular 2 Forms</h3>
                            <form>
                                <input type="text" placeholder="Name">
                                <button type="submit">Ok</button>
                            </form>`,
                            new: 'initial content'
                        },
                        { 
                            type : 'code', 
                            file: 'app.component.html', 
                            data: `<h3>Angular 2 Forms</h3>
                            <form #form="ngForm">
                                <input type="text" placeholder="Name">
                                <button type="submit">Ok</button>
                            </form>
                            
                            {{ form.pristine }}
                            `,
                            new: [
                                '<form #form="ngForm">', 
                                `{{ form.pristine }}`
                            ]
                        },
                        {
                            type: 'code',
                            file: 'app.module.ts',
                            data: `import { BrowserModule } from '@angular/platform-browser';
                            import { NgModule } from '@angular/core';
                            import {FormsModule} from "@angular/forms";
                            import { AppComponent } from './app.component';
                            
                            @NgModule({
                              declarations: [
                                AppComponent
                              ],
                              imports: [
                                BrowserModule,
                                FormsModule
                              ],
                              providers: [],
                              bootstrap: [AppComponent]
                            })
                            export class AppModule { }
                            `,
                            new: [
                                `import {FormsModule} from "@angular/forms";`,
                                `imports: [ ..., FormsModule ]`
                            ]
                        },
                        {
                            type: 'code',
                            file: 'app.component.html',
                            data: `<h3>Angular 2 Forms</h3>
                            <form #form="ngForm">
                                <input type="text" placeholder="Name" name="prop-name" ngModel>
                                <button type="submit">Ok</button>
                            </form>
                            
                            {{ form.pristine }}`,
                            new: [`<input type="text" placeholder="Name" name="prop-name" ngModel>`]
                        },
                        {
                            type: 'code',
                            file: 'app.component.html',
                            data: `<h3>Angular 2 Forms</h3>
                            <form #form="ngForm" ngNativeValidate>
                                <input type="text" required placeholder="Name" name="prop-name" ngModel>
                                <button type="submit">Ok</button>
                            </form>
                            
                            {{ form.pristine }}`,
                            new: ['required', '<form #form="ngForm" ngNativeValidate>'],
                            imp: 'different behavior in differnt browsers, ngNativeValidate'
                        },
                        {
                            type: 'code',
                            file: 'app.component.html',
                            data: `<h3>Angular 2 Forms</h3>
                            <form #form="ngForm" novalidate>
                                <input type="text" required placeholder="Name" name="prop-name" ngModel>
                                <button type="submit">Ok</button>
                            </form>
                            
                            {{ form.pristine }}`,
                            new: ['<form #form="ngForm" novalidate>'],
                            imp: 'novalidate is default starting angular 4.0.0'
                        },
                        {
                            type: 'code',
                            file: 'index.html',
                            data: `<head>
                            <meta charset="utf-8">
                            <title>EventsBase</title>
                            <base href="/">
                          
                            <meta name="viewport" content="width=device-width, initial-scale=1">
                            <link rel="icon" type="image/x-icon" href="favicon.ico">
                            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
                          </head>`,
                            new: [],
                            imp: 'added bootstrap to the project'
                        },
                        {
                            type: 'code',
                            file: 'app.component.html',
                            data: `<div class="container">
                                <h3>Session Form</h3>
                                <form #form="ngForm" novalidate>
                                    <div class="form-group">
                                        <label>Session Name</label>
                                        <input type="text" class="form-control" required name="eventName" ngModel>
                                    </div>
                            
                                    <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="session-duration" ngModel> Day Long
                                    </label>
                                    </div>
                                    <label>Session Type</label>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="session-type" value="O" checked>
                                            Online
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="session-type" value="C">
                                            Classroom
                                        </label>
                                    </div>
                                    <button class="btn btn-primary" type="submit">Ok</button>
                                </form>
                            </div>
                            `,
                            new: [],
                            imp: 'basic styling and few controls'
                        },
                        {
                            type: 'code',
                            file: 'app.component.html',
                            data: `<div class="container">
                                <h3>Session Form</h3>
                                <form #form="ngForm" novalidate>
                                    <div class="form-group">
                                        <label>Session Name</label>
                                        <input type="text" class="form-control" required name="eventName" ngModel>
                                    </div>
                            
                                    <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="session-duration" ngModel> Day Long
                                    </label>
                                    </div>
                                    <label>Session Type</label>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="session-type" value="O" checked>
                                            Online
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="session-type" value="C">
                                            Classroom
                                        </label>
                                    </div>
                            
                                    <div class="form-group">
                                        <label>Presenter</label>
                                        <select class="form-control">
                                            <option *ngFor="let presenter of presenters">
                                                {{ presenter }}
                                            </option>
                                        </select>
                                    </div>
                            
                                    <button class="btn btn-primary" type="submit">Ok</button>
                                </form>
                            </div>
                            `,
                            new: [`<div class="form-group">
                                <label>Presenter</label>
                                <select class="form-control">
                                    <option *ngFor="let presenter of presenters">
                                        {{ presenter }}
                                    </option>
                                </select>
                            </div>`],
                            imp: ''
                        },
                        {
                            type: 'code',
                            file: 'app.component.ts',
                            data: `import { Component } from '@angular/core';

                                @Component({
                                selector: 'eve-root',
                                templateUrl: './app.component.html',
                                styleUrls: ['./app.component.css']
                                })
                                export class AppComponent {
                                    title = 'eve';
                                    presenters = ['Ajith','Ashok', 'Bipul', 'Devaiah', 'Janny'];
                                }
                                `,
                            new: [`presenters = ['Ajith','Ashok', 'Bipul', 'Devaiah', 'Janny'];`],
                            imp: 'added a property to component for use in template'
                        },
                        { type :'steps end', data: 'initial form setup'},
                        {
                            type: 'questions'
                        }
                    ]
                },
                {
                    title: 'Data Binding',
                    content: [
                        {
                            type: 'list', data: [
                                'Data Binding Syntax with ngModel',
                                'Create Session Model',
                                'Bind to the Model',
                                'Calling a method while Binding',
                                'Binding to different controls'
                            ]
                        },
                        {
                            type: 'about', data: `About Different types of binding, 
                                no binding ( with just ngModel ), one way binding,
                                two way binding, simpler two-way data binding`
                        },
                        { type :'steps start', data: 'setup'},
                        {
                            type: 'code',
                            file: 'session.model.ts',
                            data: `export class Session{
                                    constructor(public sessionName: string, 
                                        public sessionType: boolean){
                                
                                    }
                                }`,
                            new: [],
                            imp: 'adding arguments to constructor makes them property'
                        },
                        {
                            type: 'code',
                            file: 'app.component.ts',
                            data: `import { Component } from '@angular/core';
                                import { Session } from './models/session.model';
                                
                                @Component({
                                    selector: 'eve-root',
                                    templateUrl: './app.component.html',
                                    styleUrls: ['./app.component.css']
                                })
                                export class AppComponent {
                                    title = 'eve';
                                    presenters = ['Ajith','Ashok', 'Bipul', 'Devaiah', 'Janny'];
                                    model = new Session('Angular', true);
                                    
                                }
                                `,
                            new: [`import { Session } from './models/session.model';`,
                                  `model = new Session('Angular', true);`]
                        },
                        {
                            type: 'about', data: 'Binding to the model'
                        },
                        {
                            type: 'code',
                            file: 'app.component.html',
                            data: `
                                <div class="container">
                                <h3>Session Form</h3>
                                <form #form="ngForm" novalidate>
                                    <div class="form-group">
                                        <label>Session Name</label>
                                        <input type="text" class="form-control" required name="eventName" ngModel>
                                    </div>
                            
                                    <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="session-duration" ngModel> Day Long
                                    </label>
                                    </div>
                                    <!-- <label>Session Type</label>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="session-type" value="O" checked >
                                            Online
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="session-type" value="C">
                                            Classroom
                                        </label>
                                    </div>
                            
                                    <div class="form-group">
                                        <label>Presenter</label>
                                        <select class="form-control">
                                            <option *ngFor="let presenter of presenters">
                                                {{ presenter }}
                                            </option>
                                        </select>
                                    </div> -->
                            
                                    <button class="btn btn-primary" type="submit">Ok</button>
                                </form>
                            
                                Model: {{ model | json }}
                                <br/>
                                Angular: {{ form.value | json}}
                            </div>                          
                            `,
                            new: [` Model: {{ model | json }}`,
                                    `Angular: {{ form.value | json}}`,
                                    `Commented out part of template`
                                ],
                            imp: 'Angular Model is updated but not our Session Model'
                        },
                        {
                            type: 'code',
                            file: 'app.component.html',
                            data: `
                                <div class="container">
                                <h3>Session Form</h3>
                                <form #form="ngForm" novalidate>
                                    <div class="form-group">
                                        <label>Session Name</label>
                                        <input type="text" class="form-control" required name="eventName" 
                                        [ngModel]="model.sessionName">
                                </div>
                        
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="session-duration" 
                                        [ngModel]="model.sessionDuration"> Day Long
                                    </label>
                                </div>
                                    <!-- <label>Session Type</label>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="session-type" value="O" checked >
                                            Online
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="session-type" value="C">
                                            Classroom
                                        </label>
                                    </div>
                            
                                    <div class="form-group">
                                        <label>Presenter</label>
                                        <select class="form-control">
                                            <option *ngFor="let presenter of presenters">
                                                {{ presenter }}
                                            </option>
                                        </select>
                                    </div> -->
                            
                                    <button class="btn btn-primary" type="submit">Ok</button>
                                </form>
                            
                                Model: {{ model | json }}
                                <br/>
                                Angular: {{ form.value | json}}
                            </div>                          
                            `,
                            new: [`<input type="text" class="form-control" required name="eventName" 
                            [ngModel]="model.sessionName">`,
                                    `<input type="checkbox" name="session-duration" 
                                    [ngModel]="model.sessionDuration"> Day Long`
                                ],
                            imp: 'Model Binding is done, Angular Model is updated but again not our Session Model'
                        },
                        {
                            type: 'code',
                            file: 'app.component.html',
                            data: `<div class="container">
                                <h3>Session Form</h3>
                                <form #form="ngForm" novalidate>
                                    <div class="form-group">
                                        <label>Session Name</label>
                                        <input type="text" class="form-control" required name="eventName" 
                                        [(ngModel)]="model.sessionName">
                                    </div>
                            
                                    <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="session-duration" 
                                        [ngModel]="model.sessionDuration" (ngModelChange)="model.sessionDuration=$event"> Day Long
                                    </label>
                                    </div>
                                    <!-- <label>Session Type</label>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="session-type" value="O" checked >
                                            Online
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="session-type" value="C">
                                            Classroom
                                        </label>
                                    </div>
                            
                                    <div class="form-group">
                                        <label>Presenter</label>
                                        <select class="form-control">
                                            <option *ngFor="let presenter of presenters">
                                                {{ presenter }}
                                            </option>
                                        </select>
                                    </div> -->
                            
                                    <button class="btn btn-primary" type="submit">Ok</button>
                                </form>
                            
                                Model: {{ model | json }}
                                <br/>
                                Angular: {{ form.value | json}}
                            </div>
                            `,
                            new: [
                                `<input type="text" class="form-control" required name="eventName" 
                            [(ngModel)]="model.sessionName">`,
                            `<input type="checkbox" name="session-duration" 
                            [ngModel]="model.sessionDuration" (ngModelChange)="model.sessionDuration=$event"> Day Long`
                            ],
                            imp: 'Now Two way data binding is working'
                        },
                        {
                            type: 'about', data: 'Calling a method on model change'
                        },
                        {
                            type: 'code',
                            file: 'app.component.html',
                            data: `<div class="container">
                                <h3>Session Form</h3>
                                <form #form="ngForm" novalidate>
                                    <div class="form-group">
                                        <label>Session Name</label>
                                        <input type="text" class="form-control" required name="eventName" 
                                        [ngModel]="model.sessionName" (ngModelChange)="toUpper($event)">
                                    </div>
                            
                                    <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="session-duration" 
                                        [ngModel]="model.sessionDuration" (ngModelChange)="model.sessionDuration=$event"> Day Long
                                    </label>
                                    </div>
                                    <!-- <label>Session Type</label>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="session-type" value="O" checked >
                                            Online
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="session-type" value="C">
                                            Classroom
                                        </label>
                                    </div>
                            
                                    <div class="form-group">
                                        <label>Presenter</label>
                                        <select class="form-control">
                                            <option *ngFor="let presenter of presenters">
                                                {{ presenter }}
                                            </option>
                                        </select>
                                    </div> -->
                            
                                    <button class="btn btn-primary" type="submit">Ok</button>
                                </form>
                            
                                Model: {{ model | json }}
                                <br/>
                                Angular: {{ form.value | json}}
                            </div>
                            
                            `,
                            new: [`<input type="text" class="form-control" required name="eventName" 
                            [ngModel]="model.sessionName" (ngModelChange)="toUpper($event)">`],
                            imp: `calling a function from template on model change`
                        },
                        {
                            type: 'code',
                            file: 'session.model.ts',
                            data: `
                                export class Session{
                                    constructor(public sessionName: string, 
                                                public sessionDuration: boolean,
                                                public sessionType: string,
                                                public sessionPresenter: string){
                                
                                    }
                                }`,
                            new: [
                                    `public sessionType: string`,
                                    `public sessionPresenter: string`
                                ],
                            imp: ''
                        },
                        {
                            type: 'code',
                            file: 'app.component.ts',
                            data: `import { Component } from '@angular/core';
                                import { Session } from './models/session.model';
                                
                                @Component({
                                selector: 'eve-root',
                                templateUrl: './app.component.html',
                                styleUrls: ['./app.component.css']
                                })
                                export class AppComponent {
                                title = 'eve';
                                presenters = ['Ajith','Ashok', 'Bipul', 'Devaiah', 'Janny'];
                                model = new Session('Angular', true, 'Online', 'Devaiah');
                                
                                }
                                `,
                            new: [`model = new Session('Angular', true, 'Online', 'Devaiah');`],
                            imp: ''
                        },
                        {
                            type: 'code',
                            file: 'app.component.html',
                            data: `<div class="container">
                                <h3>Session Form</h3>
                                <form #form="ngForm" novalidate>
                                    <div class="form-group">
                                        <label>Session Name</label>
                                        <input type="text" class="form-control" required name="eventName" 
                                        [(ngModel)]="model.sessionName">
                                    </div>
                            
                                    <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="sessionDuration" 
                                        [(ngModel)]="model.sessionDuration"> Day Long
                                    </label>
                                    </div>
                                    <label>Session Type</label>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="sessionType" value="Online"
                                            [(ngModel)]="model.sessionType">
                                            Online
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="sessionType" value="Classroom"
                                            [(ngModel)]="model.sessionType">
                                            Classroom
                                        </label>
                                    </div>
                            
                                    <div class="form-group">
                                        <label>Presenter</label>
                                        <select class="form-control" name="presenter"
                                        [(ngModel)]="model.sessionPresenter">
                                            <option *ngFor="let presenter of presenters">
                                                {{ presenter }}
                                            </option>
                                        </select>
                                    </div>
                            
                                    <button class="btn btn-primary" type="submit">Ok</button>
                                </form>
                            
                                Model: {{ model | json }}
                                <br/>
                                Angular: {{ form.value | json}}
                            </div>
                            
                            `,
                            new: ['nothing important'],
                            imp: ''
                        },
                        { type :'steps end', data: 'setup'},
                        {
                            type: 'questions'
                        }
                    ]
                },
                {
                    title: 'Form Validation',
                    content: [
                        {
                            type: 'list', data: [
                                'CSS classes for Validation',
                                'ngModel properties for validation',
                                'Error Messages and Styling',
                                'Form Level Validations',
                                'ngForm Properties for Validation'
                            ]
                        },
                        { type :'steps start', data: 'setup'},
                        {
                            type: 'code',
                            file: 'app.component.html',
                            data: `<div class="container">
                                <h3>Session Form</h3>
                                <form #form="ngForm" novalidate>
                                    <div class="form-group">
                                        <label>Session Name</label>
                                        <input type="text" class="form-control" required name="eventName" 
                                        [(ngModel)]="model.sessionName">
                                    </div>
                                    <button class="btn btn-primary" type="submit">Ok</button>
                                </form>
                            
                                Model: {{ model | json }}
                                <br/>
                                Angular: {{ form.value | json}}
                            </div>
                            
                            `,
                            new: [],
                            imp: 'startup markup for Validation'
                        },
                        {
                            type: 'about', data: 'Validation Classses'
                        },
                        {
                            type: 'code',
                            file: 'app.component.html',
                            data: `
                                <div class="container">
                                <h3>Session Form</h3>
                                <form #form="ngForm" novalidate>
                                    <div class="form-group">
                                        <label>Session Name</label>
                                        <input #eventName type="text" class="form-control" required name="eventName" 
                                        [(ngModel)]="model.sessionName">
                                    </div>
                                    <h3> Classes</h3>
                                    <h4> {{ eventName.className }} </h4>
                                    
                                    <button class="btn btn-primary" type="submit">Ok</button>
                                </form>
                            
                            </div>
                            `,
                            new: [`<h3> Classes</h3>
                                <h4> {{ eventName.className }} </h4>`],
                            imp: 'classes change based on the actions taken on input'
                        },
                        {
                            type: 'about', data: 'Classes and associated ngModel properties'
                        },
                        {
                            type: 'code',
                            file: 'app.component.html',
                            data: `<div class="container">
                                <h3>Session Form</h3>
                                <form #form="ngForm" novalidate>
                                    <div class="form-group">
                                        <label>Session Name</label>
                                        <input #eventName="ngModel" type="text" class="form-control" required name="eventName" 
                                        [(ngModel)]="model.sessionName">
                                    </div>
                                    <h3> NgModel properties</h3>
                                    <h4> invalid? : {{ eventName.invalid }} </h4>
                                    <h4> dirty? : {{ eventName.dirty }} </h4>
                                    <button class="btn btn-primary" type="submit">Ok</button>
                                </form>
                            
                            </div>
                            `,
                            new: [`#eventName="ngModel"`,`h3> NgModel properties</h3>`,
                            `<h4> invalid? : {{ eventName.invalid }} </h4>`,
                            `<h4> dirty? : {{ eventName.dirty }} </h4>`],
                            imp: ' Properties change based on action taken on input'
                        },
                        {
                            type: 'about', data: 'about showing error messages'
                        },
                        {
                            type: 'code',
                            file: 'app.component.html',
                            data: `<div class="container">
                                <h3>Session Form</h3>
                                <form #form="ngForm" novalidate>
                                    <div class="form-group" [class.has-error]="eventName.invalid && eventName.dirty">
                                        <label class="control-label">Session Name</label>
                                        <input #eventName="ngModel" type="text" class="form-control" required name="eventName" 
                                        [(ngModel)]="model.sessionName">
                                        <div *ngIf="eventName.invalid && eventName.dirty" class="alert alert-danger">
                                            Session Name is Required
                                        </div>
                                    </div>
                                    <button class="btn btn-primary" type="submit">Ok</button>
                                </form>
                            </div>
                            
                            `,
                            new: [`<div *ngIf="eventName.invalid && eventName.dirty" class="alert alert-danger">
                            Session Name is Required
                          </div>`],
                            imp: 'Angular works well with HTML5 validation attributes like reuqired, mazLength etc.'
                        },
                        {
                            type: 'about', data: 'Form Level Validation'
                        },
                        {
                            type: 'code',
                            file: 'app.component.html',
                            data: `<div class="container">
                                <h3>Session Form</h3>
                                <form #form="ngForm" novalidate>
                                    <div class="form-group" [class.has-error]="eventName.invalid && eventName.dirty">
                                        <label class="control-label">Session Name</label>
                                        <input #eventName="ngModel" type="text" class="form-control" required name="eventName" 
                                        [(ngModel)]="model.sessionName">
                                        <div *ngIf="eventName.invalid && eventName.dirty" class="alert alert-danger">
                                        Session Name is Required
                                        </div>
                                    </div>
                                    <button [disabled]="form.invalid" class="btn btn-primary" type="submit">Ok</button>
                            
                                    <h3>invalid? : {{ form.invalid }}</h3>
                                    <h3>dirty? : {{ form.dirty }}</h3>
                                </form>
                            
                            </div>
                            
                            `,
                            new: [`<button [disabled]="form.invalid" class="btn btn-primary" type="submit">Ok</button>`,
                                    `<h3>invalid? : {{ form.invalid }}</h3>`,
                                    `<h3>dirty? : {{ form.dirty }}</h3>`],
                            imp: 'formModel too has all the 6 properties liek ngModel'
                        },
                        { type :'steps end', data: 'setup'},
                        {
                            type: 'questions'
                        }
                    ]
                },
                {
                    title: 'HTTP Form Posting and Data Access',
                    content: [
                        {
                            type: 'list',
                            data: [
                                'Create a Test Node Server',
                                'Create and Angular Service',
                                'Form Submit and Validation',
                                'Posting with an Observable',
                                'Handling Errors',
                                'Retrieving Data from Server',
                                'Loading Form Data Dynamically'
                            ]
                        },
                        {
                            type: 'about', data: 'Create a Test Node Server'
                        },
                        {
                            type: 'steps start', data: 'server setup'
                        },
                        { type : 'command', data : 'mkdir node_server && cd node_server'},
                        { type : 'desc', data : 'folder created and switched to the folder'},
                        { type : 'command', data : 'npm init'},
                        { type : 'desc', data : 'Accept all default values'},
                        { type : 'command', data : 'npm install --save formidable'},
                        { type : 'desc', data : 'Formidable helps us process form submits'},
                        {
                            type: 'code',
                            file: 'server.js',
                            data: `var http = require('http');
                            var formidable = require("formidable");
                            var util = require('util');
                            
                            var server = http.createServer(function (req, res) {
                                res.setHeader('Access-Control-Allow-Origin', '*');
                                res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
                            
                                if (req.method.toLowerCase() == 'post') {
                                    processForm(req, res);
                                    return;
                                }
                            
                                res.end();
                            });
                            
                            
                            function processForm(req, res) {
                                var form = new formidable.IncomingForm();
                            
                                form.parse(req, function (err, fields) {
                            
                                    res.writeHead(200, {
                                        'content-type': 'text/plain'
                                    });
                                    
                                    res.end(util.inspect({
                                        "data": "saved successfully"
                                    }));
                            
                                    console.log('posted fields:\n');
                                    console.log(util.inspect({
                                        fields: fields
                                    }));
                                });
                            }
                            
                            var port = 3100;
                            server.listen(port);
                            console.log("server listening on port " + port);`,
                            new: [],
                            imp: 'Setting up CORS headers is important'
                        },
                        { type : 'command', data : 'node server.js'},
                        { type : 'desc', data : 'To run the Node Server'},
                        {
                            type: 'about', data: 'Create an Angular Service'
                        },
                        {
                            type: 'code',
                            file: 'app/services/common.service.ts',
                            data: `import { Injectable } from "@angular/core";
                                import { Http } from "@angular/http";
                                import { Session } from "../models/session.model";
                                import 'rxjs/add/operator/map';
                                import 'rxjs/add/operator/catch';
                                import { Observable } from "rxjs/Observable";
                                
                                
                                @Injectable()
                                export class CommonService{
                                
                                    constructor(private _http: Http){
                                
                                    }
                                
                                    postSession(session: Session): Observable<any> {
                                        return this._http.post('http://localhost:3100/postemployee', 
                                        JSON.stringify(session)).map(data => data).catch(error => error);
                                    }
                                
                                }`,
                            new: [],
                            imp: `running now will complain about 'No Provider being present'`
                        },
                        {
                            type: 'about', data: 'Form Submit, Validation, Observable and Read Response'
                        },
                        {
                            type: 'code',
                            file: `app.module.ts`,
                            data: `import { BrowserModule } from '@angular/platform-browser';
                                import { NgModule } from '@angular/core';
                                import {FormsModule} from "@angular/forms";
                                import { AppComponent } from './app.component';
                                import { CommonService } from './services/common.service';
                                import { HttpModule } from '@angular/http';
                                
                                @NgModule({
                                declarations: [
                                    AppComponent
                                ],
                                imports: [
                                    BrowserModule,
                                    FormsModule,
                                    HttpModule
                                ],
                                providers: [CommonService],
                                bootstrap: [AppComponent]
                                })
                                export class AppModule { }
                                `,
                            new: [
                                    `providers: [CommonService],`,
                                    `import { CommonService } from './services/common.service';`,
                                    `imports: [
                                        ...                                        
                                        HttpModule
                                    ]`
                                ],
                            imp: ' All Services must be registered as Providers'
                        },
                        {
                            type: 'code',
                            file: 'app.component.html',
                            data: `<div class="container">
                                <h3>Session Form</h3>
                                <form #form="ngForm" (submit)="submitForm(form)" novalidate>
                                    <div class="form-group" [class.has-error]="eventName.invalid && eventName.dirty">
                                        <label class="control-label">Session Name</label>
                                        <input #eventName="ngModel" type="text" class="form-control" required name="eventName" 
                                        [(ngModel)]="model.sessionName">
                                        <div *ngIf="eventName.invalid && eventName.dirty" class="alert alert-danger">
                                        Session Name is Required
                                        </div>
                                    </div>
                                    
                                    <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="sessionDuration" 
                                        [(ngModel)]="model.sessionDuration"> Day Long
                                    </label>
                                    </div>
                                    <label>Session Type</label>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="sessionType" value="Online"
                                            [(ngModel)]="model.sessionType">
                                            Online
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="sessionType" value="Classroom"
                                            [(ngModel)]="model.sessionType">
                                            Classroom
                                        </label>
                                    </div>
                            
                                    <div class="form-group">
                                        <label>Presenter</label>
                                        <select class="form-control" name="presenter"
                                        [(ngModel)]="model.sessionPresenter">
                                            <option *ngFor="let presenter of presenters">
                                                {{ presenter }}
                                            </option>
                                        </select>
                                    </div> 
                            
                                    <button class="btn btn-primary" type="submit">Ok</button>
                            
                                </form>
                            
                            </div>
                            
                            `,
                            new: [`<form #form="ngForm" (submit)="submitForm(form)" novalidate>`],
                            imp: 'Clicking on Ok button ( type submit ) fires , submit event of form'
                        },
                        {
                            type: 'code',
                            file: 'app.component.ts',
                            data:`import { Component } from '@angular/core';
                                import { Session } from './models/session.model';
                                import { CommonService } from './services/common.service';
                                import { NgForm } from '@angular/forms/src/directives/ng_form';
                                
                                @Component({
                                    selector: 'eve-root',
                                    templateUrl: './app.component.html',
                                    styleUrls: ['./app.component.css']
                                })
                                export class AppComponent {
                                    title = 'eve';
                                    presenters = ['Ajith','Ashok', 'Bipul', 'Devaiah', 'Janny'];
                                    model = new Session('Components & Services', true, 'Online', 'Bipul');
                                    
                                    constructor(private service: CommonService){
                                    
                                    }
                                    
                                    submitForm(form: NgForm){
                                        //Validate form here
                                        this.service.postSession(this.model)
                                        .subscribe(
                                            data => console.log('success: ', data),
                                            err => console.log('error: ', err)
                                        )
                                    }
                                }
                                `,
                            new: [`import { CommonService } from './services/common.service';`,
                                  `constructor(private service: CommonService)`,
                                  `submitForm(form: NgForm){
                                        //Validate form here
                                        this.service.postSession(this.model)
                                        .subscribe(
                                            data => console.log('success: ', data),
                                            err => console.log('error: ', err)
                                        )
                                    }`
                                ],
                            imp: 'execution of subscribe method triggers service call, not the postSession method'
                        },
                        {
                            type: 'about', data: 'Error Handling, Change response header in server.js to 400'
                        },
                        {
                            type: 'about', data: 'Loading data from server'
                        },
                        {
                            type: 'code',
                            file: 'server.js',
                            data: `var http = require('http');
                                var formidable = require("formidable");
                                var util = require('util');
                                
                                var server = http.createServer(function (req, res) {
                                    res.setHeader('Access-Control-Allow-Origin', '*');
                                    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
                                
                                    if (req.method.toLowerCase() == 'post') {
                                        processForm(req, res);
                                        return;
                                    }
                                
                                    if(req.method.toLowerCase() == 'get') {
                                        var data = {
                                            data: { presenters: ['Ajith','Ashok', 'Bipul', 'Devaiah', 'Janny'] }
                                        };
                                
                                        var responseData = JSON.stringify(data);
                                        res.end(responseData);
                                        console.log('get: ', responseData);
                                        return;
                                    }
                                
                                    res.end();
                                });
                                
                                
                                function processForm(req, res) {
                                    var form = new formidable.IncomingForm();
                                
                                    form.parse(req, function (err, fields) {
                                
                                        res.writeHead(200, {
                                            'content-type': 'text/plain'
                                        });
                                        
                                        res.end(util.inspect({
                                            "data": "saved successfully"
                                        }));
                                
                                        console.log('posted fields:\n');
                                        console.log(util.inspect({
                                            "data": fields
                                        }));
                                    });
                                }
                                
                                var port = 3100;
                                server.listen(port);
                                console.log("server listening on port " + port);`,
                            new: [`if(req.method.toLowerCase() == 'get') {
                                    var data = {
                                        data: { presenters: ['Ajith','Ashok', 'Bipul', 'Devaiah', 'Janny'] }
                                    };
                            
                                    var responseData = JSON.stringify(data);
                                    res.end(responseData);
                                    console.log('get: ', responseData);
                                    return;
                                }`
                            ],
                            imp: 'this server code looks for method types only'
                        },
                        {
                            type: 'code',
                            file: 'common.service.ts',
                            data: `import { Injectable } from "@angular/core";
                                import { Http } from "@angular/http";
                                import { Session } from "../models/session.model";
                                import 'rxjs/add/operator/map';
                                import 'rxjs/add/operator/catch';
                                import 'rxjs/add/operator/delay';
                                import { Observable } from "rxjs/Observable";
                                
                                
                                @Injectable()
                                export class CommonService{
                                
                                    constructor(private _http: Http){
                                
                                    }
                                
                                    postSession(session: Session): Observable<any> {
                                        return this._http.post('http://localhost:3100/postsession', 
                                        JSON.stringify(session)).map(data => data).catch(error => error);
                                    }
                                
                                    getPresenters(): Observable<any> {
                                        return this._http.get('http://localhost:3100/getpresenters').delay(2000)
                                            .map( res => res.json().data).catch(err => err);
                                    }
                                
                                }`,
                            new: [`getPresenters(): Observable<any> {
                                return this._http.get('http://localhost:3100/getpresenters').delay(2000)
                                    .map( res => res.json().data).catch(err => err);
                            }`,`import 'rxjs/add/operator/delay';`],
                            imp: 'added delay to fake service call delay'
                        },
                        {
                            type: 'code',
                            file: 'app.component.ts',
                            data: `import { Component } from '@angular/core';
                                import { Session } from './models/session.model';
                                import { CommonService } from './services/common.service';
                                import { NgForm } from '@angular/forms/src/directives/ng_form';
                                
                                @Component({
                                    selector: 'eve-root',
                                    templateUrl: './app.component.html',
                                    styleUrls: ['./app.component.css']
                                })
                                export class AppComponent {
                                title = 'eve';
                                presenters = [];
                                model = new Session('Components & Services', true, 'Online', 'Bipul');
                                
                                constructor(private service: CommonService){
                                    this.service.getPresenters()
                                    .subscribe(
                                        data => this.presenters = data.presenters,
                                        err => console.log(err)
                                    );
                                }
                                
                                submitForm(form: NgForm){
                                    //Validate form here
                                    this.service.postSession(this.model)
                                    .subscribe(
                                        data => console.log('success: ', data),
                                        err => console.log('error: ', err)
                                    )
                                }
                                
                                
                                }
                                `,
                            new: [`presenters = [];`, 
                                    `constructor(private service: CommonService){
                                        this.service.getPresenters()
                                        .subscribe(
                                            data => this.presenters = data.presenters,
                                            err => console.log(err)
                                        );
                                    }`
                                ],
                            imp: `ngOnInit is on of angular's lifecycle hook, which can be used to do initialization n stuff :)`
                        },
                        {
                            type: 'code',
                            file: 'app.component.html',
                            data: `<h3 *ngIf="presenters.length === 0">Loading...</h3>
                                <div class="container" *ngIf="presenters.length > 0">
                                <h3>Session Form</h3>
                                <form #form="ngForm" (submit)="submitForm(form)" novalidate>
                                    <div class="form-group" [class.has-error]="eventName.invalid && eventName.dirty">
                                        <label class="control-label">Session Name</label>
                                        <input #eventName="ngModel" type="text" class="form-control" required name="eventName" 
                                        [(ngModel)]="model.sessionName">
                                        <div *ngIf="eventName.invalid && eventName.dirty" class="alert alert-danger">
                                            Session Name is Required
                                        </div>
                                    </div>
                                    
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="sessionDuration" 
                                            [(ngModel)]="model.sessionDuration"> Day Long
                                        </label>
                                    </div>
                                    <label>Session Type</label>
                                        <div class="radio">
                                            <label>
                                                <input type="radio" name="sessionType" value="Online"
                                                [(ngModel)]="model.sessionType">
                                                Online
                                            </label>
                                        </div>
                                        <div class="radio">
                                            <label>
                                                <input type="radio" name="sessionType" value="Classroom"
                                                [(ngModel)]="model.sessionType">
                                                Classroom
                                            </label>
                                        </div>
                                
                                        <div class="form-group">
                                        <label>Presenter</label>
                                        <select class="form-control" name="presenter"
                                            [(ngModel)]="model.sessionPresenter">
                                            <option *ngFor="let presenter of presenters">
                                                {{ presenter }}
                                            </option>
                                        </select>
                                        </div> 
                                
                                    <button class="btn btn-primary" type="submit">Ok</button>
                                
                                </form>
                                
                                </div>
                                
                                `,
                            new: [
                                `<h3 *ngIf="presenters.length === 0">Loading...</h3>`,
                                `<div class="container" *ngIf="presenters.length > 0">`
                            ],
                            imp: ' Page loads after 2 seconds of delay, because of service call'
                        },
                        {
                            type: 'steps end', data: 'server setup'
                        },
                        {
                            type: 'wishes',
                            data: 'Wish you all best of luck with your angular projects'
                        }
                    ]
                }
            ]
        }

    }

}