import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipment: object[] = [
    {tool: "Habitat dome"},
    {tool: "Drones"},
    {tool: "Food containers"},
    {tool: "Oxygen tanks"}
  ];
  constructor() { }

  ngOnInit() {
  }

    
}
