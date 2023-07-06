import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
 @Input() faceSnap!: FaceSnap;
 
  // 1 déclarer  
 buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private router: Router ) {
  }

  ngOnInit() {
    // 2 initialiser 
this.buttonText = 'Oh Snap!';   
  }


  onSnap() { // event binding : liaison par événement: la méthode commence par " on "
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, un Snap!';         
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!'; 
    }
  }

onViewFaceSnap(){   // injecter le "router" et utiliser sa méthode "navigateByUrl()"
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
}
}