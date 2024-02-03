import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductTable1706970742354 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "products",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "product_name",
                        type: "varchar",
                        length: "100"
                    },
                    {
                        name: "product_description",
                        type: "varchar",
                        length: "100"
                    },
                    {
                        name: "product_price",
                        type: "varchar",
                        length: "8"
                    },
                    {
                        name: "product_quantity",
                        type: "int",
                        length: "5"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products"); 
    }

}


