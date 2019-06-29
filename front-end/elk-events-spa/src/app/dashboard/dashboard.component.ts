import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboard1Url = "http://localhost:5601/app/kibana#/dashboard/904d8320-9a9e-11e9-ab18-a7b69ddc7c5d?_g=(refreshInterval:(pause:!t,value:0),time:(from:now%2FM,to:now%2FM))&_a=(description:'',filters:!(),fullScreenMode:!t,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(vis:(colors:('Count%20of%20events':%23629E51),legendOpen:!t)),gridData:(h:19,i:'1',w:48,x:0,y:0),id:'2a5a6bf0-9a9e-11e9-ab18-a7b69ddc7c5d',panelIndex:'1',type:visualization,version:'7.1.1')),query:(language:kuery,query:''),timeRestore:!f,title:'Event%20Dashboard',viewMode:view)"
  dashboard2Url = "http://localhost:5601/app/kibana#/dashboard/25708440-9ac0-11e9-ab18-a7b69ddc7c5d?_g=(refreshInterval:(pause:!t,value:0),time:(from:now%2FM,to:now%2FM))&_a=(description:'',filters:!(),fullScreenMode:!t,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(),gridData:(h:19,i:'1',w:48,x:0,y:0),id:'08254790-9ac0-11e9-ab18-a7b69ddc7c5d',panelIndex:'1',type:visualization,version:'7.1.1')),query:(language:kuery,query:''),timeRestore:!f,title:'Event%20Count%20Pie%20Dashboard',viewMode:view)"
  dashboardUrl = this.dashboard1Url;

  constructor() { }

  ngOnInit() {
  }

  showBarChart() {
    this.dashboardUrl = this.dashboard1Url;
  }

  showPieChart() {
    this.dashboardUrl = this.dashboard2Url;
  }
}
