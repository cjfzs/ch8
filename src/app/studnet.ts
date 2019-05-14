export class Student {
    constructor(
        private id: string,
        private name: string,
        private gender: number,
        private web: Course,
        private embeded: Course,
    ) {

    }
}
export class Course {
    constructor(private count: number, private type: number) {

    }
}
export const Allstu: Student[] = [
    new Student('01', 'a', 1, new Course(90, 0), new Course(80, 1)),
    new Student('02', 'b', 0, new Course(80, 0), new Course(90, 1)),
    new Student('03', 'c', 1, new Course(50, 0), new Course(50, 1)),
    new Student('04', 'd', 0, new Course(50, 0), new Course(50, 1))
];