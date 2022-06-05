import * as fs from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const create = async () => {
    // Write your code here 
    try {
        await fs.writeFile(
            path.join(__dirname, 'files', 'fresh.txt'),
            'I am fresh and young',
            { flag: 'wx' },
            (err) => {
                if (err) throw new Error;
            }
        );
    } catch (err) {
        if (err.code === 'EEXIST') console.error(Error(`FS operation failed`));
    }
};

create();
