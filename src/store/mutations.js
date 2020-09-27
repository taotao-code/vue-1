import * as types from './types.js';


let mutations = {
	[types.UPDATE_LOADING] : (state,payload) => state.bLoading = payload,
	[types.UPDATE_NAV] : (state,payload) => state.bNav = payload,
	[types.UPDATE_FOOT] : (state,payload) => state.bFoot = payload,
	[types.UPDATE_HEADER] : (state,payload) => state.hNav= payload,
	
	[types.UPDATE_HOME] : (state,payload) => state.home = payload,
	[types.UPDATE_FOLLOW] : (state,payload) => state.follow = payload,
	[types.UPDATE_COLUMN] : (state,payload) => state.column = payload,
	[types.UPDATE_BANNER] : (state,payload) => state.banner = payload,
	[types.UPDATE_CILIST] : (state,payload) => state.cilist = payload,
	
	
	[types.UPDATE_DETAIL] : (state,payload) => state.detail = payload,
	
	[types.UPDATE_USER] : (state,payload) => state.user = payload
};

export default mutations;