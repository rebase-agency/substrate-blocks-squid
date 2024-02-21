import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class Block {
    constructor(props?: Partial<Block>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_({unique: true})
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    number!: bigint

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    timestamp!: bigint

    @Column_("text", {nullable: true})
    parentHash!: string | undefined | null

    @Column_("text", {nullable: false})
    stateRoot!: string

    @Column_("text", {nullable: false})
    extrinsicsicRoot!: string

    @Column_("text", {nullable: false})
    specName!: string

    @Index_()
    @Column_("int4", {nullable: false})
    specVersion!: number

    @Column_("text", {nullable: false})
    implName!: string

    @Column_("int4", {nullable: false})
    implVersion!: number

    @Column_("text", {nullable: true})
    validator!: string | undefined | null
}
