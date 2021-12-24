import React from "react";
import "./anno-list.less";
import { observer } from 'mobx-react';
import { tags } from '../json/tagsData';
import { StoreAnnoList } from './anno-list-store';
import { AnnoListItem } from './anno-list-item';

class AnnoList extends React.Component{
  constructor(props){
    super(props);

    this.storeTag = new StoreAnnoList({tags});
    console.log(this.storeTag);
  }
  render(){
    const annoList = this.storeTag.tags.annos.map(anno => <AnnoListItem key={anno.info.uuid} anno={anno} />);
   console.log('render');
    return (
      <div>
        {annoList}
      </div>
    );
  }
}

const AList = observer(AnnoList);
export { AList as AnnoList }