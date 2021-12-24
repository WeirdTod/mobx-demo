import { StorePublic } from './store-pubic';
import { makeObservable, makeAutoObservable, observable, action } from 'mobx';
import { AnnoStore } from './anno-list-item-store';

class StoreAnnoList extends StorePublic {
  /** @type {TagData} AI数据 */
  tags = {}
  /** 是否编辑状态 */
  isEditing=false
  /**
  * 初始化
  * @param {StoreAnnoList} props 参数
  */
  constructor(props) {
    super(props);
    makeObservable(this, {
      tags: observable
    });
    this.tags = new TagData(props.tags);
  }
}

/** AI数据 */
class TagData extends StorePublic {
  /** @type {string} AI的类型 */
  AI = ''

  /** @type {[AnnoStore]} */
  annos = []
  /**
  * 构造方位
  * @param {TagData} props 参数
  */
  constructor(props) {
    super(props);
    makeObservable(this, {
      annos: observable
    });
    const { annos } = props;
    this.annos = annos.map(anno => new AnnoStore({ anno }));
  }
}

export { StoreAnnoList };
