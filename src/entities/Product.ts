import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

Entity("products")
export class Product {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 50 })
    name: string

    @Column({ type: "varchar", length: 300 })
    description: string

    @Column({ type: "varchar", length: 10 })
    price: string

    @Column({ type: "integer"})
    quantity: number
}