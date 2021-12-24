import React from 'react';
import { observer } from 'mobx-react';
import { AnnoStore } from './anno-list-item-store';

class AnnoListItem extends React.Component {
  keyMapClass = {
    isSel: 'isSel',
  }
  /**
  * 添加代码库
  * @param {{anno: AnnoStore}} props 注释
  */
  constructor(props){
    super(props);
    this.anno = props.anno;
    
    // 类名计算映射对象
    this.anno.classMapper = {
      [this.keyMapClass.isSel]: () => {
        return this.anno.isSel;
      },
    };
  }

  render() {
    return (
      <div className={this.anno.className}>
        <div>{this.anno.info.type}</div>
        <button onClick={() => {
          this.anno.changeInfo({});
        }}>change type</button>
        <input type='checkbox' checked={this.anno.isSel} onChange={()=> {
          this.anno.changeSel();
        }} />
        <span>{String(Boolean(this.anno.isSel))}</span>
      </div>
    );
  }
}

const AListItem = observer(AnnoListItem);
export { AListItem as AnnoListItem };