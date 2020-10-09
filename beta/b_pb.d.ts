// package: beta
// file: beta/b.proto

import * as jspb from "google-protobuf";

export class BetaTest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BetaTest.AsObject;
  static toObject(includeInstance: boolean, msg: BetaTest): BetaTest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BetaTest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BetaTest;
  static deserializeBinaryFromReader(message: BetaTest, reader: jspb.BinaryReader): BetaTest;
}

export namespace BetaTest {
  export type AsObject = {
  }
}

