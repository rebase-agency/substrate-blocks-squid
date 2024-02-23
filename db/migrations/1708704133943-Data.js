module.exports = class Data1708704133943 {
    name = 'Data1708704133943'

    async up(db) {
        await db.query(`CREATE TABLE "block" ("id" character varying NOT NULL, "number" numeric NOT NULL, "timestamp" numeric NOT NULL, "parent_hash" text, "state_root" text NOT NULL, "extrinsics_root" text NOT NULL, "spec_name" text NOT NULL, "spec_version" integer NOT NULL, "impl_name" text NOT NULL, "impl_version" integer NOT NULL, "validator" text, CONSTRAINT "PK_d0925763efb591c2e2ffb267572" PRIMARY KEY ("id"))`)
        await db.query(`CREATE UNIQUE INDEX "IDX_38414873c187a3e0c7943bc4c7" ON "block" ("number") `)
        await db.query(`CREATE INDEX "IDX_5c67cbcf4960c1a39e5fe25e87" ON "block" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_5b79d140fa8e2c64a7ef223598" ON "block" ("spec_version") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "block"`)
        await db.query(`DROP INDEX "public"."IDX_38414873c187a3e0c7943bc4c7"`)
        await db.query(`DROP INDEX "public"."IDX_5c67cbcf4960c1a39e5fe25e87"`)
        await db.query(`DROP INDEX "public"."IDX_5b79d140fa8e2c64a7ef223598"`)
    }
}
