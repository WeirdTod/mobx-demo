import { computed, makeObservable, observable } from 'mobx';

class StorePublic {
  constructor(props){
    makeObservable(this, {
      className: computed
    });
  }
  /** 类名通过方法映射 */
  classMapper = {}
  /** 插入props */
  propsInsert(props) {
    for (const i in props) {
      this[i] = props[i];
    }
  }

  /** 获取纯对象 */
  toJson() {
    const jsonData = {};
    for (const i in this) {
      jsonData[i] = this[i];
    }
    return jsonData;
  }

  /** 通过映射对象得到的类名 */
  get className () {
    const classList = Object.keys(this.classMapper);
    const classListUse = classList.filter(className => this.classMapper[className]());
    const className = classListUse.join('');
    return className;
  }
}

export {
  StorePublic
};
