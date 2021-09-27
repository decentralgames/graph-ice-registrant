import {
  Delegated,
} from "../generated/Contract/Contract"
import { Token } from "../generated/schema"


export function handleDelegated(event: Delegated): void {
  let entity = new Token(
    event.params.tokenId.toString()
  );

  entity.tokenId = event.params.tokenId;
  entity.tokenAddress = event.params.tokenAddress;
  entity.delegateAddress = event.params.delegateAddress;
  entity.delegatePercent = event.params.delegatePercent;
  entity.tokenOwner = event.params.tokenOwner;
  entity.timestamp = event.block.timestamp;
  
  entity.save();
}
