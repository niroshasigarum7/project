export const getPaintData = () => {
    return { type: 'FETCH_PAINT_DATA'}
}

export const successData = () => {
    return { type: `FETCH_PAINT_DATA_SUCCESS`}
}

export const failureCase = () => {
    return { type: `FETCH_PAINT_DATA_FAILED`}
}