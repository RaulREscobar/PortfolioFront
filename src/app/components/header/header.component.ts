import { AfterViewInit, Component, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('canvasRef', { static: false }) canvasRef: any
  @HostListener('window:resize', ['$event'])

  OnWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }

  public getScreenWidth: any
  private ctx = CanvasRenderingContext2D;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.OnWindowResize()
    console.log(this.getScreenWidth);

    const canvasEl = this.canvasRef.nativeElement;
    const ctx = canvasEl.getContext('2d');

    const w = canvasEl.width = this.getScreenWidth;
    const h = canvasEl.height = 200;


    const Eltexto = "16549   81354  6834  61657nd..    ahonld  yghzniu   zdfkjbgspdfgaio";//texto por defecto
    const cols = Math.floor(this.getScreenWidth / 20);
    const ypos = Array(cols).fill(0);
    let contador: number = 0;

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);

    const matrix = () => {

      ctx.fillStyle = '#0001';
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = '#0f0';
      ctx.font = "20px Matrix";

      ypos.forEach((y, ind) => {
        var text = "";
        if (Eltexto[contador] === undefined) {
          contador = 1;
          text = Eltexto[contador];
        } else {
          text = Eltexto[contador];
          contador = contador + 1;
        }

        const x = ind * 20;
        ctx.fillText(text, x, y);

        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 20;
      });
    }
    setInterval(matrix, 50)

  }

  constructor() { }

}
