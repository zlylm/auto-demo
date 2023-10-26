import { ref } from 'vue'

export function useAutoRequest(fun, options) {
    const { loading, onSuccess } = options || { loading: false }

    const reqLoading = ref(loading)

    const run = (...params)=> {
        reqLoading.value = true
        return fun(...params).then(res => {
            onSuccess && onSuccess(res)
            return res
        }).finally(()=> {
            reqLoading.value = false
        })
    }

    return [reqLoading, run]
}