import {
  BlockHeader,
  DataHandlerContext,
  SubstrateBatchProcessor,
  SubstrateBatchProcessorFields,
  Event as _Event,
  Extrinsic as _Extrinsic,
} from '@subsquid/substrate-processor';
import { assertNotNull } from '@subsquid/util-internal';
import { lookupArchive } from '@subsquid/archive-registry';

export const processor = new SubstrateBatchProcessor()
  .setRpcEndpoint({
    url: assertNotNull(process.env.RPC_ENDPOINT),
    capacity: process.env.RPC_ENDPOINT_CAPACITY
      ? parseInt(process.env.RPC_ENDPOINT_CAPACITY)
      : undefined,
    rateLimit: process.env.RPC_ENDPOINT_MAX_REQUESTS_PER_SECOND
      ? parseInt(process.env.RPC_ENDPOINT_MAX_REQUESTS_PER_SECOND)
      : undefined,
    requestTimeout: process.env.RPC_ENDPOINT_REQUEST_TIMEOUT
      ? parseInt(process.env.RPC_ENDPOINT_REQUEST_TIMEOUT)
      : undefined,
    maxBatchCallSize: process.env.RPC_ENDPOINT_MAX_BATCH_CALL_SIZE
      ? parseInt(process.env.RPC_ENDPOINT_MAX_BATCH_CALL_SIZE)
      : undefined,
  })
  .setTypesBundle(process.env.TYPE_BUNDLE ? process.env.TYPE_BUNDLE : '')
  .setFields({
    block: {
      timestamp: true,
      parentHash: true,
      stateRoot: true,
      extrinsicsRoot: true,
      validator: true,
    },
  })
  .includeAllBlocks({
    from: process.env.BLOCKS_RANGE_FROM ? parseInt(process.env.BLOCKS_RANGE_FROM) : 0,
    to: process.env.BLOCKS_RANGE_TO ? parseInt(process.env.BLOCKS_RANGE_TO) : undefined,
  });

if (process.env.SUBSQUID_GATEWAY_NETWORK || process.env.SUBSQUID_GATEWAY_URL) {
  processor.setGateway({
    url: process.env.SUBSQUID_GATEWAY_NETWORK
      ? lookupArchive(process.env.SUBSQUID_GATEWAY_NETWORK, { release: 'ArrowSquid' })
      : assertNotNull(
          process.env.SUBSQUID_GATEWAY_URL,
          'Specify valid string values for the SUBSQUID_GATEWAY_URL or SUBSQUID_GATEWAY_NETWORK environment variables',
        ),
    requestTimeout: process.env.SUBSQUID_GATEWAY_REQUEST_TIMEOUT
      ? parseInt(process.env.SUBSQUID_GATEWAY_REQUEST_TIMEOUT)
      : undefined,
  });
}

export type Fields = SubstrateBatchProcessorFields<typeof processor>;

export type Block = BlockHeader<Fields>;

export type Event = _Event<Fields>;

export type Extrinsic = _Extrinsic<Fields>;

export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
function parseInt(SUBSQUID_GATEWAY_REQUEST_TIMEOUT: string): number | undefined {
    throw new Error('Function not implemented.');
}

