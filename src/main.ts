import { Block } from './model';
import { ProcessorContext, processor } from './processor';
import { Store, TypeormDatabase } from '@subsquid/typeorm-store';

const blocksHandler = async (ctx: ProcessorContext<Store>) => {
  const blocks: Block[] = [];

  for (const block of ctx.blocks) {
    blocks.push(
      new Block({
        id: block.header.hash,
        number: BigInt(block.header.height),
        parentHash: block.header.parentHash,
        timestamp: BigInt(block.header.timestamp ?? 0),
        extrinsicsRoot: block.header.extrinsicsRoot,
        specName: block.header.specName,
        specVersion: block.header.specVersion,
        implName: block.header.implName,
        implVersion: block.header.implVersion,
        stateRoot: block.header.stateRoot,
        validator: block.header.validator || undefined,
      }),
    );
  }

  const startBlock = ctx.blocks.at(0)?.header.height ?? 0;
  const endBlock = ctx.blocks.at(-1)?.header.height ?? 0;
  const blocksQuantity = endBlock - startBlock;

  await ctx.store.upsert(blocks);
  ctx.log.info(`Saved ${blocksQuantity} block(s): from ${startBlock} to ${endBlock}`);
};

processor.run(
  new TypeormDatabase({
    supportHotBlocks: true,
  }),
  blocksHandler,
);
