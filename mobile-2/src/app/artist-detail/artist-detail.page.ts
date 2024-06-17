import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ArtistsService } from '../services/artists.service';
import { Artist } from '../models/artist.interface';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.page.html',
  styleUrls: ['./artist-detail.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ArtistDetailPage implements OnInit {

  artist: Artist | null = null

  activatedRoute = inject(ActivatedRoute)
  artistsService = inject(ArtistsService);

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      const artistId = params['artistId']
      const response = await this.artistsService.getArtist(artistId)
      this.artist = response
    })
  }

}
