import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  HostListener,
} from "@angular/core";
import { SignaturePad } from "angular2-signaturepad";

@Component({
  selector: "app-signature-box",
  templateUrl: "./signature-box.component.html",
  styleUrls: ["./signature-box.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignatureBoxComponent implements OnInit {
  @ViewChild(SignaturePad, { static: false }) signaturePad: SignaturePad;

  private signaturePadOptions: Object = {
    minWidth: 5,
    canvasWidth: 700,
    canvasHeight: 300,
    backgroundColor: "white",
  };
  content: string;

  @HostListener("window:resize") onResize() {
    this.canvasResize();
  }
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
  }

  canvasResize() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth - 100;
    canvas.height = window.innerHeight - 100;
    this.signaturePad.clear();
    this.signaturePad.fromDataURL(this.content)
  }

  drawComplete() {
    this.content= this.signaturePad.toDataURL();
  }

  drawStart() {
    console.log("begin drawing");
  }
}
