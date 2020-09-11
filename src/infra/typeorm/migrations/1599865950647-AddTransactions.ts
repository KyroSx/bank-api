import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class AddTransactions1599865950647 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "transactions",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "value",
            type: "int",
          },
          {
            name: "type",
            type: "varchar",
          },
          {
            name: "category_id",
            type: "uuid",
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      "transactions",
      new TableForeignKey({
        name: "TransactionsCategory",
        columnNames: ["category_id"],

        referencedTableName: "categories",
        referencedColumnNames: ["id"],

        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("transactions", "TransactionsCategory");
    await queryRunner.dropTable("transactions");
  }
}
