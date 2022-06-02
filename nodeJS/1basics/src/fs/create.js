import * as fs from 'fs/promises';
import * as path from 'path';

export const create = async () => {
    // Write your code here 
    fs.writeFile(
        path.join('src', 'fs', 'files', 'fresh.txt'),
        'I am fresh and young',
        (err) => {
            if (err) throw err;
        }
    );
};

create();