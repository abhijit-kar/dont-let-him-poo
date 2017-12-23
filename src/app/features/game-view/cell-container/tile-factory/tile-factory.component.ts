import {
  Component,
  Input,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";

import {
  LooComponent,
  NoneComponent,
  MoneyComponent,
  PizzaComponent,
  PlayerComponent,
  WallComponent,
  PoopComponent
} from "./";

import { TILE_TYPES } from "../../shared-services/";

@Component({
  selector: "dlp-tile-factory",
  templateUrl: "./tile-factory.component.html"
})
export class TileFactoryComponent implements OnInit {
  @Input() tileType: string;

  tiles = {
    wall: WallComponent, // Unpassable
    poop: PoopComponent, // Unhealthy
    none: NoneComponent, // Drop zone, Passable
    loo: LooComponent, // Long Term Goal

    // Short Term Goals
    pizza: PizzaComponent,
    money: MoneyComponent,

    player: PlayerComponent
  };

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.getComponents()
    );
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory);
  }

  private getComponents() {
    let tileComponent = this.tiles[this.tileType];
    
    if (!tileComponent) {
      return this.tiles[TILE_TYPES.none];
    }

    return tileComponent;
  }
}
