import { getAction,deleteAction,putAction,postAction} from '@/api/manage'

////根路径
// const doMian = "/jeecg-boot/";
////图片预览请求地址
// const imgView = "http://localhost:8080/jeecg-boot/sys/common/view/";

//角色管理
const addRole = (params)=>postAction(`${window._CONFIG['domain']}/sys/role/add`,params);
const editRole = (params)=>putAction(`${window._CONFIG['domain']}/sys/role/edit`,params);
const getRoleList = (params)=>getAction(`${window._CONFIG['domain']}/sys/role/list`,params);
const deleteRole = (params)=>deleteAction(`${window._CONFIG['domain']}/sys/role/delete`,params);
const deleteRoleList = (params)=>deleteAction(`${window._CONFIG['domain']}/sys/role/deleteBatch`,params);
const checkRoleCode = (params)=>getAction(`${window._CONFIG['domain']}/sys/role/checkRoleCode`,params);
const queryall = (params)=>getAction(`${window._CONFIG['domain']}/sys/role/queryall`,params);

//用户管理
const addUser = (params)=>postAction(`${window._CONFIG['domain']}/sys/user/add`,params);
const editUser = (params)=>putAction(`${window._CONFIG['domain']}/sys/user/edit`,params);
const queryUserRole = (params)=>getAction(`${window._CONFIG['domain']}/sys/user/queryUserRole`,params);
const getUserList = (params)=>getAction(`${window._CONFIG['domain']}/sys/user/list`,params);
const deleteUser = (params)=>deleteAction(`${window._CONFIG['domain']}/sys/user/delete`,params);
const deleteUserList = (params)=>deleteAction(`${window._CONFIG['domain']}/sys/user/deleteBatch`,params);
const frozenBatch = (params)=>putAction(`${window._CONFIG['domain']}/sys/user/frozenBatch`,params);
//验证用户是否存在
const checkOnlyUser = (params)=>getAction(`${window._CONFIG['domain']}/sys/user/checkOnlyUser`,params);
//改变密码
const changPassword = (params)=>putAction(`${window._CONFIG['domain']}/sys/user/changPassword`,params);

//权限管理
const addPermission= (params)=>postAction(`${window._CONFIG['domain']}/sys/permission/add`,params);
const editPermission= (params)=>putAction(`${window._CONFIG['domain']}/sys/permission/edit`,params);
const getPermissionList = (params)=>getAction(`${window._CONFIG['domain']}/sys/permission/list`,params);
const deletePermission = (params)=>deleteAction(`${window._CONFIG['domain']}/sys/permission/delete`,params);
const deletePermissionList = (params)=>deleteAction(`${window._CONFIG['domain']}/sys/permission/deleteBatch`,params);
const queryTreeList = (params)=>getAction(`${window._CONFIG['domain']}/sys/permission/queryTreeList`,params);
const queryTreeListForRole = (params)=>getAction(`${window._CONFIG['domain']}/sys/role/queryTreeList`,params);
const queryListAsync = (params)=>getAction(`${window._CONFIG['domain']}/sys/permission/queryListAsync`,params);
const queryRolePermission = (params)=>getAction(`${window._CONFIG['domain']}/sys/permission/queryRolePermission`,params);
const saveRolePermission = (params)=>postAction(`${window._CONFIG['domain']}/sys/permission/saveRolePermission`,params);
//const queryPermissionsByUser = (params)=>getAction(`${window._CONFIG['domain']}/sys/permission/queryByUser`,params);
const queryPermissionsByUser = (params)=>getAction(`${window._CONFIG['domain']}/sys/permission/getUserPermissionByToken`,params);
const loadAllRoleIds = (params)=>getAction(`${window._CONFIG['domain']}/sys/permission/loadAllRoleIds`,params);
const getPermissionRuleList = (params)=>getAction(`${window._CONFIG['domain']}/sys/permission/getPermRuleListByPermId`,params);
const queryPermissionRule = (params)=>getAction(`${window._CONFIG['domain']}/sys/permission/queryPermissionRule`,params);

// 部门管理
const queryDepartTreeList = (params)=>getAction(`${window._CONFIG['domain']}/sys/sysDepart/queryTreeList`,params);
const queryIdTree = (params)=>getAction(`${window._CONFIG['domain']}/sys/sysDepart/queryIdTree`,params);
const queryParentName   = (params)=>getAction(`${window._CONFIG['domain']}/sys/sysDepart/queryParentName`,params);
const searchByKeywords   = (params)=>getAction(`${window._CONFIG['domain']}/sys/sysDepart/searchBy`,params);
const deleteByDepartId   = (params)=>deleteAction(`${window._CONFIG['domain']}/sys/sysDepart/delete`,params);

//日志管理
const getLogList = (params)=>getAction(`${window._CONFIG['domain']}/sys/log/list`,params);
const deleteLog = (params)=>deleteAction(`${window._CONFIG['domain']}/sys/log/delete`,params);
const deleteLogList = (params)=>deleteAction(`${window._CONFIG['domain']}/sys/log/deleteBatch`,params);

//数据字典
const addDict = (params)=>postAction(`${window._CONFIG['domain']}/sys/dict/add`,params);
const editDict = (params)=>putAction(`${window._CONFIG['domain']}/sys/dict/edit`,params);
const getDictList = (params)=>getAction(`${window._CONFIG['domain']}/sys/dict/list`,params);
const treeList = (params)=>getAction(`${window._CONFIG['domain']}/sys/dict/treeList`,params);
const delDict = (params)=>deleteAction(`${window._CONFIG['domain']}/sys/dict/delete`,params);
const getDictItemList = (params)=>getAction(`${window._CONFIG['domain']}/sys/dictItem/list`,params);
const addDictItem = (params)=>postAction(`${window._CONFIG['domain']}/sys/dictItem/add`,params);
const editDictItem = (params)=>putAction(`${window._CONFIG['domain']}/sys/dictItem/edit`,params);
const delDictItem = (params)=>deleteAction(`${window._CONFIG['domain']}/sys/dictItem/delete`,params);
const delDictItemList = (params)=>deleteAction(`${window._CONFIG['domain']}/sys/dictItem/deleteBatch`,params);

//字典标签专用（通过code获取字典数组）
export const ajaxGetDictItems = (code, params)=>getAction(`${window._CONFIG['domain']}/sys/dict/getDictItems/${code}`,params);

//系统通告
const doReleaseData = (params)=>getAction(`${window._CONFIG['domain']}/sys/annountCement/doReleaseData`,params);
const doReovkeData = (params)=>getAction(`${window._CONFIG['domain']}/sys/annountCement/doReovkeData`,params);
//获取系统访问量
const getLoginfo = (params)=>getAction(`${window._CONFIG['domain']}/sys/loginfo`,params);
const getVisitInfo = (params)=>getAction(`${window._CONFIG['domain']}/sys/visitInfo`,params);
//数据日志访问
const getDataLogList = (params)=>getAction(`${window._CONFIG['domain']}/sys/dataLog/list`,params);

// 根据部门主键查询用户信息
const queryUserByDepId = (params)=>getAction(`${window._CONFIG['domain']}/sys/user/queryUserByDepId`,params);

// 查询用户角色表里的所有信息
const queryUserRoleMap = (params)=>getAction(`${window._CONFIG['domain']}/sys/user/queryUserRoleMap`,params);
// 重复校验
const duplicateCheck = (params)=>getAction(`${window._CONFIG['domain']}/sys/duplicate/check`,params);

export {
  // imgView,
  // doMian,
  addRole,
  editRole,
  checkRoleCode,
  addUser,
  editUser,
  queryUserRole,
  getUserList,
  queryall,
  frozenBatch,
  checkOnlyUser,
  changPassword,
  getPermissionList,
  addPermission,
  editPermission,
  queryTreeList,
  queryListAsync,
  queryRolePermission,
  saveRolePermission,
  queryPermissionsByUser,
  loadAllRoleIds,
  getPermissionRuleList,
  queryPermissionRule,
  queryDepartTreeList,
  queryIdTree,
  queryParentName,
  searchByKeywords,
  deleteByDepartId,
  deleteLog,
  deleteLogList,
  addDict,
  editDict,
  treeList,
  addDictItem,
  editDictItem,
  doReleaseData,
  doReovkeData,
  getLoginfo,
  getVisitInfo,
  queryUserByDepId,
  queryUserRoleMap,
  duplicateCheck,
  queryTreeListForRole,
}



