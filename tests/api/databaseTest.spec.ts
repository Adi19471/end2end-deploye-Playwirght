
import { test, expect } from '@playwright/test';
import { getConnection } from '../../utils/dbConnection';

test('Verify user data in MySQL', async () => {

    const connection = await getConnection();

    try {
        const [rows]: any = await connection.execute(
            'SELECT * FROM users WHERE id = ?',
            [1]
        );

        expect(rows.length).toBe(1);
        expect(rows[0].name).toBe('Adi');
        expect(rows[0].email).toBe('adi2@gmail.com');

        console.log(rows);

    } finally {
        await connection.end();
    }
});
