import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  CEOSet,
  Delegated,
  IceLevelTransfer,
  InitialMinting,
  LevelEdit,
  MetaTransactionExecuted,
  Proceed,
  SupplyCheck,
  TokenUpgrade,
  UpgradeCancel,
  UpgradeRequest,
  UpgradeResolved,
  WorkerAdded,
  WorkerRemoved
} from "../generated/Contract/Contract"
import { ExampleEntity } from "../generated/schema"

export function handleCEOSet(event: CEOSet): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.newCEO = event.params.newCEO

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.accessoriesContract(...)
  // - contract.allowChangeSaleLimit(...)
  // - contract.canPurchaseAgain(...)
  // - contract.ceoAddress(...)
  // - contract.delegate(...)
  // - contract.depositAddressDG(...)
  // - contract.depositAddressNFT(...)
  // - contract.frames(...)
  // - contract.getHash(...)
  // - contract.getIceBonus(...)
  // - contract.getLevel(...)
  // - contract.getLevelById(...)
  // - contract.getNumber(...)
  // - contract.getSupply(...)
  // - contract.isIceEnabled(...)
  // - contract.isWorker(...)
  // - contract.levels(...)
  // - contract.limits(...)
  // - contract.mintingPrice(...)
  // - contract.paymentToken(...)
  // - contract.registrer(...)
  // - contract.requestUpgrade(...)
  // - contract.requests(...)
  // - contract.saleCount(...)
  // - contract.saleFrame(...)
  // - contract.saleLimit(...)
  // - contract.targets(...)
  // - contract.tokenAddressDG(...)
  // - contract.tokenAddressICE(...)
  // - contract.upgradeCount(...)
  // - contract.upgradeRequestCount(...)
}

export function handleDelegated(event: Delegated): void {}

export function handleIceLevelTransfer(event: IceLevelTransfer): void {}

export function handleInitialMinting(event: InitialMinting): void {}

export function handleLevelEdit(event: LevelEdit): void {}

export function handleMetaTransactionExecuted(
  event: MetaTransactionExecuted
): void {}

export function handleProceed(event: Proceed): void {}

export function handleSupplyCheck(event: SupplyCheck): void {}

export function handleTokenUpgrade(event: TokenUpgrade): void {}

export function handleUpgradeCancel(event: UpgradeCancel): void {}

export function handleUpgradeRequest(event: UpgradeRequest): void {}

export function handleUpgradeResolved(event: UpgradeResolved): void {}

export function handleWorkerAdded(event: WorkerAdded): void {}

export function handleWorkerRemoved(event: WorkerRemoved): void {}
