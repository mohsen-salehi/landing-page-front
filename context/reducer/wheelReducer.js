import {wheelGetAction} from "@/context/actions/wheel/wheelGetAction";

export const wheelReducer = (state, action) => {
    switch (action.type) {
        case  "GET_INDEX" : {
            wheelGetAction(state.token).then(function (result) {
                state.wheel = result?.map(item => item?.bonus?.title)
            })
            return state
        }
    }
}