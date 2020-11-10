import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'ang1';

constructor() {
   }
ngOnInit(): void {

  $(document).ready(function(){
    $('button').click(function(){
     const name = $('#nameid').val();
     alert(name);
     $('.img').attr('src',`https://joeschmoe.io/api/v1/${name}`);
     const b = $('.img');
     console.log(b);

    });
   });

   }
  }
