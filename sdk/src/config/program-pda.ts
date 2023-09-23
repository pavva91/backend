import * as anchor from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { programId } from "./program-id";

export const programPda = {
  project: function (owner: string, repository: string): [PublicKey, number] {
    return anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from(anchor.utils.bytes.utf8.encode("project")),
        Buffer.from(anchor.utils.bytes.utf8.encode(owner)),
        Buffer.from(anchor.utils.bytes.utf8.encode(repository)),
      ],
      programId
    );
  },

  abc: function (owner: string, repository: string): [PublicKey, number] {
    return anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from(anchor.utils.bytes.utf8.encode("abc")),
        Buffer.from(anchor.utils.bytes.utf8.encode(owner)),
        Buffer.from(anchor.utils.bytes.utf8.encode(repository)),
      ],
      programId
    );
  },
};