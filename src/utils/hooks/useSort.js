export const useSort = (sortBy, obj) => {


    switch (sortBy) {
        case 'nameA_Z':
            return obj.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
        case 'nameZ_A':
            return obj.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
        case 'cheapToExp':
            return obj.sort((a, b) => Number(a.price.slice(0, -1)) - Number(b.price.slice(0, -1)))
        case 'expToCheap':
            return obj.sort((a, b) => Number(b.price.slice(0, -1)) - Number(a.price.slice(0, -1)))
        case 'count':
            return obj.sort((a, b) => Number(a.count) - Number(b.count))
        default:
            return null
    }
}