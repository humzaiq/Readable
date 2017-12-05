export const GET_COMMENT = 'GET_COMMENT'
export const ALL_COMMENTS = 'ALL_COMMENTS'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export function getComment (){
	return{
		type:GET_COMMENT,
	}
}

export function allComments (){
	return{
		type:ALL_COMMENTS,
	}
}

export function editComment (){
	return{
		type:EDIT_COMMENT,
	}
}

export function deleteComment (){
	return{
		type:DELETE_COMMENT,
	}
}

