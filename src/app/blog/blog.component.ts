import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  //loadComponent_blog: boolean = true;
  apiData;
  selectedCategoryData:any[];

  constructor() { }

  switchBlogCategory( category:string ){
    if( category === 'characters'){
      this.selectedCategoryData = this.apiData.characters_blog_list;
    } else if( category === 'jedi'){
      this.selectedCategoryData = this.apiData.jedi_blog_list;
    } else if( category === 'games'){
      this.selectedCategoryData = this.apiData.games_blog_list;
    }
  }

  noContent(){
    alert('Ops ! Looks like content was Blocked by Sith Empire, please visit official page at https://www.starwars.com. Test demo by Andriy Diduh ')
  }

  ngOnInit() {
    this.apiData = {
      characters_blog_list: [
        {
          title: 'AUTHOR E.K. JOHNSTON’S 6 FAVORITE PADMÉ MOMENTS',
          img: 'https://starwarsblog.starwars.com/wp-content/uploads/2019/03/johnston-padme-moments-tall-1536x512.jpg',
          description: 'In honor of her latest book, Queen’s Shadow, the author tells StarWars.com about her love of brave handmaidens and building a weaponized wardrobe.'
        },
        {
          title: 'DESIGNING STAR WARS: STAR WARS RESISTANCE',
          img: 'https://starwarsblog.starwars.com/wp-content/uploads/2019/03/designing-resistance-tall-1536x512.jpg',
          description: 'StarWars.com talks with Art Director Amy Beth Christenson about kitbashing the Aces’ racers, how Flix is related to the Ewoks, and more! #SWR'
        },
        {
          title: 'MISSION BRIEFING: STAR WARS RESISTANCE INTEL TO PREPARE YOU FOR THE SEASON FINALE',
          img: 'https://starwarsblog.starwars.com/wp-content/uploads/2019/03/kaz-resistance-tall-1536x512.jpg',
          description: 'New to the fast-and-fun animated series? Get ready for the two-part season finale with StarWars.com’s easy guide!'
        }
      ],
      jedi_blog_list: [
        {
          title: 'GARY WHITTA ON EXPLORING THE FORCE AND GIVING ACKBAR HIS MOMENT IN MARVEL’S STAR WARS: THE LAST JEDI COMIC',
          img: 'https://starwarsblog.starwars.com/wp-content/uploads/2018/05/the-last-jedi-comic-1-cover-tall-1536x512.jpg',
          description: 'The writer talks to StarWars.com about bringing the latest film in the saga to comics and breaking a Star Wars writer record.'
        },
        {
          title: 'DAN MUMFORD ON HIS INCREDIBLE STAR WARS: THE LAST JEDI ART',
          img: 'https://starwarsblog.starwars.com/wp-content/uploads/2018/04/dan-mumford-last-jedi-tall-1536x512.jpg',
          description: 'Plus first details on a timed release of screen prints and the exclusive reveal of beautiful new variant editions.'
        },
        {
          title: 'CHECK OUT THE STAR WARS: THE LAST JEDI SET AND SCORING STAGE IN STUNNING 360 VR',
          img: 'https://starwarsblog.starwars.com/wp-content/uploads/2018/03/kylo-ren-mask-off-tall-1536x512.jpg',
          description: 'Take an immersive trip inside the making of the film and the recording of its score.'
        }
      ],
      games_blog_list: [
        {
          title: 'REPLAYING THE CLASSICS: STAR WARS: TIE FIGHTER',
          img: 'https://starwarsblog.starwars.com/wp-content/uploads/2019/02/tie-fighter-game-tall-1536x512.jpg',
          description: 'Enlist as a pilot with the Imperial Navy in this stone-cold masterpiece.'
        },
        {
          title: 'REPLAYING THE CLASSICS: STAR WARS: BOUNTY HUNTER',
          img: 'https://starwarsblog.starwars.com/wp-content/uploads/2019/02/bounty-hunter-jango-fett-tall-1536x512.jpg',
          description: '“I was recruited by a man called Tyranus on one of the moons of Bogden.”'
        },
        {
          title: 'REPLAYING THE CLASSICS: STAR WARS: ROGUE SQUADRON 3D',
          img: 'https://starwarsblog.starwars.com/wp-content/uploads/2019/01/rogue-squadron-tall-1536x512.jpg',
          description: 'Lock S-foils in attack position for this Nintendo 64 masterwork.'
        }
      ]
    }
    this.switchBlogCategory( 'characters' );
  }

}
