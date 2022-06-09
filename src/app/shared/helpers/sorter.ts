export class Sorter {
    static sortBy<T>(collection: T[], mapTo: (value: T) => number) : T[]{
        return [...collection].sort((a,b) => {

            const value1 = mapTo(a);
            const value2 = mapTo(b);
            //return value2-value1;
            if(value2 > value1){
                return  1;
            } else if (value2 < value1) {
                return -1;
            } else {
                return 0;
            }

        })

    }
}
