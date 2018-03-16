import { Component, OnInit } from '@angular/core'
import { SafeUrl } from '@angular/platform-browser'

import { InstagramService } from '../shared/instagram.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  instagramUrls: SafeUrl[] = []
  instagramFollowersCount = 0

  constructor(private instagramService: InstagramService) { }

  ngOnInit() {
    this.instagramService
      .getRandomPictures(3)
      .subscribe(
        imageUrl => this.instagramUrls.push(imageUrl),
        console.error
      )

      this.instagramService
        .getUserInfo()
        .subscribe(
          user => this.instagramFollowersCount = user.followers,
          console.error
        )
  }
}
