import { runSeeders } from "typeorm-extension";
import { dataSource } from "../data-source";

async function runSeeder() {
    try {
        await dataSource.initialize();
        await runSeeders(dataSource, { seedTracking: true });
        console.log('Seeder executed!');
    } catch (error) {
        console.error('Error executing seeders', error);
    } finally {
        console.log('Destroying data source!');
        await dataSource.destroy();
    }
}

runSeeder();