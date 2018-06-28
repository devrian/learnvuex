export default {
    members: state => {
        return state.members.sort((a,b) => {
            return a['point'] < b['point']
        })
    }
}