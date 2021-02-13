// https://github.com/kr512/sleep.js
// Reference: https://my-nutri.co.kr/%EC%88%98%EB%A9%B4-%EC%A3%BC%EA%B8%B0-%EA%B3%84%EC%82%B0/

const SleepJS = function () {

    /**
     * 추천하는 수면 시간을 반환합니다.
     * @param {int} age 연령 (년 기준) 
     * @returns [최솟값, 최댓값] 반환
     */
    this.getRecommendedSleepHour = function (age) {
        if (age <= (1 / 12) * 3) return [14, 17];
        if (age > (1 / 12) * 3 && age < 1) return [12, 15];
        if (age >= 1 && age < 3) return [11, 14];
        if (age >= 3 && age < 6) return [10, 13];
        if (age >= 6 && age < 14) return [9, 11];
        if (age >= 14 && age < 18) return [8, 10];
        if (age >= 18 && age < 65) return [7, 9];
        return [7, 8];
    }

    /**
     * 시간으로 기준이 된 시간을 반환.
     * @param {int} hours 시간 
     * @param {int} mins 분 
     * @returns 시간 반환 (24시간 이상이면 24시간을 뺀 시간으로 반환함)
     */
    this.getHourNum = function (hours, mins) {
        return (hours + (mins - mins % 15) / 60) % 24;
    }

    /**
     * 시간으로 기준이 된 시간을 반환.
     * 공식: (현재 + 0.25(잠드는 15분) + (1.5(90분) * 사이클수)) % 24(24시간 초과시 빼기)
     * @param {int} from 잠드는 시간 (현재) 
     * @param {int} cycle 수면 사이클 수 
     * @returns 결과시간 반환 (24시간 이상이면 24시간을 뺀 시간으로 반환함)
     */
    this.getSleepTime = function (from, cycle) {
        return (from + 0.25 + (1.5 * cycle)) % 24;
    }

    /**
     * getSleepTime을 array로 받아옵니다.
     * @param {int} from 잠드는 시간 (현재) 
     * @param {array} cycle 수면 사이클 수의 Array (기본값=6,7)
     * @returns 결과시간 반환 (24시간 이상이면 24시간을 뺀 시간으로 반환함)
     */
    this.getSleepTimes = function (from, cycles = -1) {
        if (typeof cycles !== "object" || cycles == -1) cycles = [6, 7];
        var a = new Array();
        cycles.forEach(v => a.push(this.getSleepTime(from, v)));
        return a;
    }

}

module.exports = SleepJS;