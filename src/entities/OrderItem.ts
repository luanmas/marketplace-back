import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"

Entity("OrderItems")
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 8 })
    subtotal: string

    @OneToOne(() => Product)
    @JoinColumn()
    product: Product
}