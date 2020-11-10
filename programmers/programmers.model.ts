import * as mongoose from 'mongoose';

export interface TecnologyItem extends mongoose.Document {
    name: string;
    kind: string;
}

export interface Programmer extends mongoose.Document {
    name: string;
    lastName: string;
    telephone: string;
    email: string;
    tecnologies: TecnologyItem[];
}

const tecnologySchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength: 15,
        required: true,
    },
    kind: {
        type: String,
        enum: ['language', 'framework', 'tool'],
        required: true,
    },
});

const programmerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 36,
        minLength: 2,
    },
    lastName: {
        type: String,
        maxLength: 12,
        minlength: 2,
        required: true,
    },
    telephone: {
        type: String,
        minLength: 11,
        required: false,
        unique: true,
        match: /\(\d{2}\)\s\d{4,5}\-\d{4}/,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    tecnologies: {
        type: [tecnologySchema],
        required: false,
    },
});

export const Programmer = mongoose.model<Programmer>(
    'Programmer',
    programmerSchema
);
