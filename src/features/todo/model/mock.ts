import {Todo} from "../domain/domain.ts";

export const MOCK_TODOS: Todo[] = [
    {
        id: '1',
        text: 'Buy groceries',
        createdAt: '2024-09-01T10:00:00Z',
        completed: false,
    },
    {
        id: '2',
        text: 'Finish TypeScript project',
        createdAt: '2024-09-01T12:30:00Z',
        completed: true,
    },
    {
        id: '3',
        text: 'Call the plumber',
        createdAt: '2024-09-02T08:15:00Z',
        completed: false,
    },
    {
        id: '4',
        text: 'Schedule dentist appointment',
        createdAt: '2024-09-02T09:00:00Z',
        completed: true,
    },
    {
        id: '5',
        text: 'Prepare presentation for Monday meeting',
        createdAt: '2024-09-03T14:00:00Z',
        completed: false,
    },
];
