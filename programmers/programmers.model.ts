const programmers = [
    {
        id: '1',
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
        id: '2',
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

    static findById(id: string): Promise<any> {
        return new Promise((resolve) => {
            const filtered = programmers.filter((user) => user.id === id);

            let programmer = undefined;
            if (filtered.length > 0) {
                programmer = filtered[0];
            }
            resolve(programmer);
        });
    }
}
