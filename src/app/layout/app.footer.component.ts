import {Component} from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div class="footer">
            <div class="card clearfix">
                <span class="footer-text-left">
                </span>
                <span class="footer-text-right">
                    Desenvolvido por: <a href="https://github.com/helioluna" target="_blank">Hélio Luna  </a>
                    <span class="material-icons ui-icon-copyright"></span>
                    <span>2020</span>
                </span>
            </div>
        </div>
    `
})
export class AppFooterComponent {

}
