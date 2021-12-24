import { StorePublic } from './store-pubic';
import { makeObservable, makeAutoObservable, observable, action } from 'mobx';

/** 病灶数据对象 */
class AnnoStore extends StorePublic {
  /** 源数据 */
  $anno = null
  /** 是否选中 */
  isSel=true
  /** @type {AnnoInfo} 病灶信息 */
  info = {}
  /**
  * 构造方法
  * @param {{anno: any}} props 参数
  */
  constructor(props) {
    super(props);
    makeObservable(this, {
      isSel: observable,
      info: observable,
      changeInfo: action,
      changeSel: action,
    });
    const { anno } = props;
    this.$anno = anno;
    const annoJson = anno.$get ? anno.$get() : JSON.parse(JSON.stringify(anno));
    this.propsInsert(annoJson);
  }

  /**
  * 改变病灶信息
  * @param {string} key 改变目标的键值
  * @param {any} value 改变目标的只
  */
  changeInfo({ key, value }){
    this.info[key] = value;
    this.info.type = Number(this.info.type)+1;
  }

  /** 改变勾选状态 */
  changeSel(){
    this.isSel = !this.isSel;
  }
}

/** 病灶信息 */
class AnnoInfo {
  /** @type {string} 类型*/
  type = ''
  /** @type {['L', 'R']} */
  laterality='L'
  /** @type {string} 唯一标识id*/
  uuid=''
}

export { AnnoStore };