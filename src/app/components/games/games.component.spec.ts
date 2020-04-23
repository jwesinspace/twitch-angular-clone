import { TestBed, async, fakeAsync, ComponentFixture, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GamesComponent } from './games.component';
import { TwitchGamesService } from '../../services/twitch-games.service';
import { DebugElement } from '@angular/core';
// import { By } from '@angular/platform-browser';

describe('GamesComponent', () => {
  let fixture: ComponentFixture<GamesComponent>;
  let component: GamesComponent;
  let de: DebugElement;
  let gamesService: TwitchGamesService;
  let serviceStub: any;

  beforeEach(async(() => {
    serviceStub = {
      fetchTopGames: () => Promise.resolve([])
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [GamesComponent],
      providers: [{ provide: TwitchGamesService, useValue: serviceStub }]
    }).compileComponents();

    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
    gamesService = TestBed.get(TwitchGamesService);
  }));

  it('should create the games component', () => {
    expect(component).toBeTruthy();
  });

  // Accessing public component properties/methods
  // component.[methodname/propertyname]

  // Debug native elements
  // console.log(de.query(By.css('.games')).nativeNode);

  it('should initialize and kickoff the TwitchGamesService', fakeAsync((/* done */) => {
    fixture.detectChanges();
    // let spy = spyOn(gamesService, 'fetchTopGames').and.returnValue(Promise.resolve([]));
    component.ngOnInit();

    // ASYNC TESTING THE JASMINE WAY
    // spy.calls.mostRecent().returnValue.then(() => {
    //   fixture.detectChanges();
    //   expect(component.games).toEqual([]);
    //   done();
    // });

    // ANOTHER ASYNC ANGULAR WAY
    // Blocks for async calls, optional number of ms to block for
    tick();

    fixture.detectChanges();
    console.log(component.games);
    expect(component.games.length).toEqual(0);

    // ASYNC THE ANGULAR WAY
    // fixture.whenStable().then(() => {
    //   fixture.detectChanges();
    //   expect(component.games.length).toEqual(5);
    // });
  }));
});
