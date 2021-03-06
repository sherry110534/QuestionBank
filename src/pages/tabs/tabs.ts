import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  priority: 'high'
})
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  examRoot = 'ExamPage';
  problemRoot = 'ProblemPage';
  collectionRoot = 'CollectionPage';
  myselfRoot = 'MyselfPage';

  constructor(public navCtrl: NavController) {

  }

}
