import moment from "moment"


export const disabledDateRanges = (range = { startDate: false, endDate: false }) => {
    const { startDate, endDate } = range;
    return function disabledDate(current) {
        let startCheck = true;
        let endCheck = true;
        if (startDate) {
            startCheck = current && current < moment(startDate, 'YYYY-MM-DD');
        }
        if (endDate) {
            endCheck = current && current > moment(endDate, 'YYYY-MM-DD');
        }
        return (startDate && startCheck) || (endDate && endCheck);
    };
}