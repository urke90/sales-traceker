import { BLUR_INPUT, CHANGE_VALUE } from '../constants/input-reducer-actions';

export const inputInitState = {
    value: 0,
    isTouched: false,
    isValid: true
};

export const inputReducer = (state, action) => {
    switch (action.type) {
        case BLUR_INPUT: {
            return { ...state, isTouched: true };
        }
        case CHANGE_VALUE: {
            const { value } = action.payload;
            let floatValue = parseFloat(value);

            if (value.trim() === '') floatValue = 0;

            const isValid = typeof floatValue === 'number' && floatValue !== 0;

            return { ...state, isValid, value: floatValue };
        }

        default:
            throw new Error('Unsupported action type');
    }
};
