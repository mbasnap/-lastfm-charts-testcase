export default {
    computed: {
        img({ value }){
            return (value.image || [])  
                .reduce((cur, v) => ({ ...cur, [v.size]: v['#text']}), {})
        }        
    }
}