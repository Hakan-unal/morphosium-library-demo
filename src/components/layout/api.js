import { protectedApi } from '../../services/axios'

export const isValidToken = (payload) => {
    return protectedApi.post('/pass/token/verify/', payload)
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error
        })
}