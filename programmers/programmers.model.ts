const programmers = [
    {
        name: 'Thiago Henrique',
        lastName: 'Santos',
        telephone: '5511986082341',
        email: 'henrique.thsantos.ths@gmail.com',
        tecnologies: [
            {
                name: 'Javascript',
                type: 'language',
            },
            {
                name: 'Python',
                type: 'language',
            },
            {
                name: 'C++',
                type: 'language',
            },
            {
                name: 'restify',
                type: 'framework',
            },
            {
                name: 'MongoDB',
                type: 'database',
            },
        ],
    },
    {
        name: 'Paulo',
        lastName: 'Silva',
        telephone: '5511999888333',
        email: 'paulos@gmail.com',
        tecnologies: [
            {
                name: 'Java',
                type: 'language',
            },
            {
                name: 'SQL',
                type: 'language',
            },
            {
                name: 'C',
                type: 'language',
            },
            {
                name: 'express',
                type: 'framework',
            },
            {
                name: 'MySQL',
                type: 'database',
            },
        ],
    },
];

export class Programmer {
    static findAll(): Promise<any[]> {
        return Promise.resolve(programmers);
    }
}
