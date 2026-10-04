// eslint-disable-next-line @typescript-eslint/ban-ts-comment -- Keep bundled vendor internals unchanged; the public interface below remains typed.
// @ts-nocheck — preserved third-party bundle uses intentional switch fallthroughs.
/* eslint-disable */
// Preserved third-party bundle; dynamic internals retain the original runtime behavior.
import { withInlineWasmSourceMap } from './wasm.ts';

var EastwardCodec: any = ((): any => {
  var bA: any = Object.defineProperty;
  var Cg: any = Object.getOwnPropertyDescriptor;
  var eg: any = Object.getOwnPropertyNames;
  var tg: any = Object.prototype.hasOwnProperty;
  var Eg: any = (A?: any, i?: any): any => {
      for (var I in i)
        bA(A, I, {
          get: i[I],
          enumerable: !0,
        });
    },
    ag: any = (A?: any, i?: any, I?: any, g?: any): any => {
      if ((i && typeof i == "object") || typeof i == "function")
        for (let B of eg(i))
          !tg.call(A, B) &&
            B !== I &&
            bA(A, B, {
              get: (): any => i[B],
              enumerable: !(g = Cg(i, B)) || g.enumerable,
            });
      return A;
    };
  var og: any = (A?: any): any =>
    ag(
      bA({}, "__esModule", {
        value: !0,
      }),
      A,
    );
  var IQ: any = {};
  Eg(IQ, {
    decodeSave: (): any => $B,
    encodeSave: (): any => AQ,
  });
  function uI(A?: any): any {
    let i: any = A.length,
      I: any = 0,
      g: any = 0;
    for (; g < i; ) {
      let B: any = A.charCodeAt(g++);
      if (B & 4294967168)
        if (!(B & 4294965248)) I += 2;
        else {
          if (B >= 55296 && B <= 56319 && g < i) {
            let Q: any = A.charCodeAt(g);
            (Q & 64512) === 56320 &&
              (++g, (B = ((B & 1023) << 10) + (Q & 1023) + 65536));
          }
          B & 4294901760 ? (I += 4) : (I += 3);
        }
      else {
        I++;
        continue;
      }
    }
    return I;
  }
  function ng(A?: any, i?: any, I?: any): any {
    let g: any = A.length,
      B: any = I,
      Q: any = 0;
    for (; Q < g; ) {
      let e: any = A.charCodeAt(Q++);
      if (e & 4294967168)
        if (!(e & 4294965248)) i[B++] = ((e >> 6) & 31) | 192;
        else {
          if (e >= 55296 && e <= 56319 && Q < g) {
            let E: any = A.charCodeAt(Q);
            (E & 64512) === 56320 &&
              (++Q, (e = ((e & 1023) << 10) + (E & 1023) + 65536));
          }
          e & 4294901760
            ? ((i[B++] = ((e >> 18) & 7) | 240),
              (i[B++] = ((e >> 12) & 63) | 128),
              (i[B++] = ((e >> 6) & 63) | 128))
            : ((i[B++] = ((e >> 12) & 15) | 224),
              (i[B++] = ((e >> 6) & 63) | 128));
        }
      else {
        i[B++] = e;
        continue;
      }
      i[B++] = (e & 63) | 128;
    }
  }
  var hg: any = new TextEncoder(),
    cg: any = 50;
  function rg(A?: any, i?: any, I?: any): any {
    hg.encodeInto(A, i.subarray(I));
  }
  function MI(A?: any, i?: any, I?: any): any {
    A.length > cg ? rg(A, i, I) : ng(A, i, I);
  }
  var Fg: any = 4096;
  function vA(A?: any, i?: any, I?: any): any {
    let g: any = i,
      B: any = g + I,
      Q: any = [],
      e: any = "";
    for (; g < B; ) {
      let E: any = A[g++];
      if (!(E & 128)) Q.push(E);
      else if ((E & 224) === 192) {
        let a: any = A[g++] & 63;
        Q.push(((E & 31) << 6) | a);
      } else if ((E & 240) === 224) {
        let a: any = A[g++] & 63,
          C: any = A[g++] & 63;
        Q.push(((E & 31) << 12) | (a << 6) | C);
      } else if ((E & 248) === 240) {
        let a: any = A[g++] & 63,
          C: any = A[g++] & 63,
          t: any = A[g++] & 63,
          f: any = ((E & 7) << 18) | (a << 12) | (C << 6) | t;
        (f > 65535 &&
          ((f -= 65536),
          Q.push(((f >>> 10) & 1023) | 55296),
          (f = 56320 | (f & 1023))),
          Q.push(f));
      } else Q.push(E);
      Q.length >= Fg && ((e += String.fromCharCode(...Q)), (Q.length = 0));
    }
    return (Q.length > 0 && (e += String.fromCharCode(...Q)), e);
  }
  var Dg: any = new TextDecoder(),
    dg: any = 200;
  function fg(A?: any, i?: any, I?: any): any {
    let g: any = A.subarray(i, i + I);
    return Dg.decode(g);
  }
  function KI(A?: any, i?: any, I?: any): any {
    return I > dg ? fg(A, i, I) : vA(A, i, I);
  }
  var v: any = class {
    [key: string]: any;
    type: any;
    data: any;
    constructor(i?: any, I?: any) {
      ((this.type = i), (this.data = I));
    }
  };
  var M: any = class A extends Error {
    [key: string]: any;
    constructor(i?: any) {
      super(i);
      let I: any = Object.create(A.prototype);
      (Object.setPrototypeOf(this, I),
        Object.defineProperty(this, "name", {
          configurable: !0,
          enumerable: !1,
          value: A.name,
        }));
    }
  };
  function YI(A?: any, i?: any, I?: any): any {
    let g: any = I / 4294967296,
      B: any = I;
    (A.setUint32(i, g), A.setUint32(i + 4, B));
  }
  function SA(A?: any, i?: any, I?: any): any {
    let g: any = Math.floor(I / 4294967296),
      B: any = I;
    (A.setUint32(i, g), A.setUint32(i + 4, B));
  }
  function HA(A?: any, i?: any): any {
    let I: any = A.getInt32(i),
      g: any = A.getUint32(i + 4);
    return I * 4294967296 + g;
  }
  function RI(A?: any, i?: any): any {
    let I: any = A.getUint32(i),
      g: any = A.getUint32(i + 4);
    return I * 4294967296 + g;
  }
  var wg: any = -1,
    sg: any = 4294967296 - 1,
    kg: any = 17179869184 - 1;
  function lg({ sec: A, nsec: i }: any): any {
    if (A >= 0 && i >= 0 && A <= kg)
      if (i === 0 && A <= sg) {
        let I: any = new Uint8Array(4);
        return (new DataView(I.buffer).setUint32(0, A), I);
      } else {
        let I: any = A / 4294967296,
          g: any = A & 4294967295,
          B: any = new Uint8Array(8),
          Q: any = new DataView(B.buffer);
        return (Q.setUint32(0, (i << 2) | (I & 3)), Q.setUint32(4, g), B);
      }
    else {
      let I: any = new Uint8Array(12),
        g: any = new DataView(I.buffer);
      return (g.setUint32(0, i), SA(g, 4, A), I);
    }
  }
  function yg(A?: any): any {
    let i: any = A.getTime(),
      I: any = Math.floor(i / 1e3),
      g: any = (i - I * 1e3) * 1e6,
      B: any = Math.floor(g / 1e9);
    return {
      sec: I + B,
      nsec: g - B * 1e9,
    };
  }
  function Ug(A?: any): any {
    if (A instanceof Date) {
      let i: any = yg(A);
      return lg(i);
    } else return null;
  }
  function Gg(A?: any): any {
    let i: any = new DataView(A.buffer, A.byteOffset, A.byteLength);
    switch (A.byteLength) {
      case 4:
        return {
          sec: i.getUint32(0),
          nsec: 0,
        };
      case 8: {
        let I: any = i.getUint32(0),
          g: any = i.getUint32(4),
          B: any = (I & 3) * 4294967296 + g,
          Q: any = I >>> 2;
        return {
          sec: B,
          nsec: Q,
        };
      }
      case 12: {
        let I: any = HA(i, 4),
          g: any = i.getUint32(0);
        return {
          sec: I,
          nsec: g,
        };
      }
      default:
        throw new M(
          `Unrecognized data size for timestamp (expected 4, 8, or 12): ${A.length}`,
        );
    }
  }
  function Sg(A?: any): any {
    let i: any = Gg(A);
    return new Date(i.sec * 1e3 + i.nsec / 1e6);
  }
  var xI: any = {
    type: wg,
    encode: Ug,
    decode: Sg,
  };
  var $: any = class A {
    [key: string]: any;
    static defaultCodec: any = new A();
    __brand: any;
    builtInEncoders: any = [];
    builtInDecoders: any = [];
    encoders: any = [];
    decoders: any = [];
    constructor() {
      this.register(xI);
    }
    register({ type: i, encode: I, decode: g }: any): any {
      if (i >= 0) ((this.encoders[i] = I), (this.decoders[i] = g));
      else {
        let B: any = -1 - i;
        ((this.builtInEncoders[B] = I), (this.builtInDecoders[B] = g));
      }
    }
    tryToEncode(i?: any, I?: any): any {
      for (let g: any = 0; g < this.builtInEncoders.length; g++) {
        let B: any = this.builtInEncoders[g];
        if (B != null) {
          let Q: any = B(i, I);
          if (Q != null) {
            let e: any = -1 - g;
            return new v(e, Q);
          }
        }
      }
      for (let g: any = 0; g < this.encoders.length; g++) {
        let B: any = this.encoders[g];
        if (B != null) {
          let Q: any = B(i, I);
          if (Q != null) {
            let e: any = g;
            return new v(e, Q);
          }
        }
      }
      return i instanceof v ? i : null;
    }
    decode(i?: any, I?: any, g?: any): any {
      let B: any = I < 0 ? this.builtInDecoders[-1 - I] : this.decoders[I];
      return B ? B(i, I, g) : new v(I, i);
    }
  };
  function Hg(A?: any): any {
    return (
      A instanceof ArrayBuffer ||
      (typeof SharedArrayBuffer < "u" && A instanceof SharedArrayBuffer)
    );
  }
  function tA(A?: any): any {
    return A instanceof Uint8Array
      ? A
      : ArrayBuffer.isView(A)
        ? new Uint8Array(A.buffer, A.byteOffset, A.byteLength)
        : Hg(A)
          ? new Uint8Array(A)
          : Uint8Array.from(A);
  }
  var Ng: any = 100,
    pg: any = 2048,
    NA: any = class A {
      [key: string]: any;
      extensionCodec: any;
      context: any;
      useBigInt64: any;
      maxDepth: any;
      initialBufferSize: any;
      sortKeys: any;
      forceFloat32: any;
      ignoreUndefined: any;
      forceIntegerToFloat: any;
      pos: any;
      view: any;
      bytes: any;
      entered: any = !1;
      constructor(i?: any) {
        ((this.extensionCodec = i?.extensionCodec ?? $.defaultCodec),
          (this.context = i?.context),
          (this.useBigInt64 = i?.useBigInt64 ?? !1),
          (this.maxDepth = i?.maxDepth ?? Ng),
          (this.initialBufferSize = i?.initialBufferSize ?? pg),
          (this.sortKeys = i?.sortKeys ?? !1),
          (this.forceFloat32 = i?.forceFloat32 ?? !1),
          (this.ignoreUndefined = i?.ignoreUndefined ?? !1),
          (this.forceIntegerToFloat = i?.forceIntegerToFloat ?? !1),
          (this.pos = 0),
          (this.view = new DataView(new ArrayBuffer(this.initialBufferSize))),
          (this.bytes = new Uint8Array(this.view.buffer)));
      }
      clone(): any {
        return new A({
          extensionCodec: this.extensionCodec,
          context: this.context,
          useBigInt64: this.useBigInt64,
          maxDepth: this.maxDepth,
          initialBufferSize: this.initialBufferSize,
          sortKeys: this.sortKeys,
          forceFloat32: this.forceFloat32,
          ignoreUndefined: this.ignoreUndefined,
          forceIntegerToFloat: this.forceIntegerToFloat,
        });
      }
      reinitializeState(): any {
        this.pos = 0;
      }
      encodeSharedRef(i?: any): any {
        if (this.entered) return this.clone().encodeSharedRef(i);
        try {
          return (
            (this.entered = !0),
            this.reinitializeState(),
            this.doEncode(i, 1),
            this.bytes.subarray(0, this.pos)
          );
        } finally {
          this.entered = !1;
        }
      }
      encode(i?: any): any {
        if (this.entered) return this.clone().encode(i);
        try {
          return (
            (this.entered = !0),
            this.reinitializeState(),
            this.doEncode(i, 1),
            this.bytes.slice(0, this.pos)
          );
        } finally {
          this.entered = !1;
        }
      }
      doEncode(i?: any, I?: any): any {
        if (I > this.maxDepth)
          throw new Error(`Too deep objects in depth ${I}`);
        i == null
          ? this.encodeNil()
          : typeof i == "boolean"
            ? this.encodeBoolean(i)
            : typeof i == "number"
              ? this.forceIntegerToFloat
                ? this.encodeNumberAsFloat(i)
                : this.encodeNumber(i)
              : typeof i == "string"
                ? this.encodeString(i)
                : this.useBigInt64 && typeof i == "bigint"
                  ? this.encodeBigInt64(i)
                  : this.encodeObject(i, I);
      }
      ensureBufferSizeToWrite(i?: any): any {
        let I: any = this.pos + i;
        this.view.byteLength < I && this.resizeBuffer(I * 2);
      }
      resizeBuffer(i?: any): any {
        let I: any = new ArrayBuffer(i),
          g: any = new Uint8Array(I),
          B: any = new DataView(I);
        (g.set(this.bytes), (this.view = B), (this.bytes = g));
      }
      encodeNil(): any {
        this.writeU8(192);
      }
      encodeBoolean(i?: any): any {
        i === !1 ? this.writeU8(194) : this.writeU8(195);
      }
      encodeNumber(i?: any): any {
        !this.forceIntegerToFloat && Number.isSafeInteger(i)
          ? i >= 0
            ? i < 128
              ? this.writeU8(i)
              : i < 256
                ? (this.writeU8(204), this.writeU8(i))
                : i < 65536
                  ? (this.writeU8(205), this.writeU16(i))
                  : i < 4294967296
                    ? (this.writeU8(206), this.writeU32(i))
                    : this.useBigInt64
                      ? this.encodeNumberAsFloat(i)
                      : (this.writeU8(207), this.writeU64(i))
            : i >= -32
              ? this.writeU8(224 | (i + 32))
              : i >= -128
                ? (this.writeU8(208), this.writeI8(i))
                : i >= -32768
                  ? (this.writeU8(209), this.writeI16(i))
                  : i >= -2147483648
                    ? (this.writeU8(210), this.writeI32(i))
                    : this.useBigInt64
                      ? this.encodeNumberAsFloat(i)
                      : (this.writeU8(211), this.writeI64(i))
          : this.encodeNumberAsFloat(i);
      }
      encodeNumberAsFloat(i?: any): any {
        this.forceFloat32
          ? (this.writeU8(202), this.writeF32(i))
          : (this.writeU8(203), this.writeF64(i));
      }
      encodeBigInt64(i?: any): any {
        i >= BigInt(0)
          ? (this.writeU8(207), this.writeBigUint64(i))
          : (this.writeU8(211), this.writeBigInt64(i));
      }
      writeStringHeader(i?: any): any {
        if (i < 32) this.writeU8(160 + i);
        else if (i < 256) (this.writeU8(217), this.writeU8(i));
        else if (i < 65536) (this.writeU8(218), this.writeU16(i));
        else if (i < 4294967296) (this.writeU8(219), this.writeU32(i));
        else throw new Error(`Too long string: ${i} bytes in UTF-8`);
      }
      encodeString(i?: any): any {
        let g: any = uI(i);
        (this.ensureBufferSizeToWrite(5 + g),
          this.writeStringHeader(g),
          MI(i, this.bytes, this.pos),
          (this.pos += g));
      }
      encodeObject(i?: any, I?: any): any {
        let g: any = this.extensionCodec.tryToEncode(i, this.context);
        if (g != null) this.encodeExtension(g);
        else if (Array.isArray(i)) this.encodeArray(i, I);
        else if (ArrayBuffer.isView(i)) this.encodeBinary(i);
        else if (typeof i == "object") this.encodeMap(i, I);
        else
          throw new Error(
            `Unrecognized object: ${Object.prototype.toString.apply(i)}`,
          );
      }
      encodeBinary(i?: any): any {
        let I: any = i.byteLength;
        if (I < 256) (this.writeU8(196), this.writeU8(I));
        else if (I < 65536) (this.writeU8(197), this.writeU16(I));
        else if (I < 4294967296) (this.writeU8(198), this.writeU32(I));
        else throw new Error(`Too large binary: ${I}`);
        let g: any = tA(i);
        this.writeU8a(g);
      }
      encodeArray(i?: any, I?: any): any {
        let g: any = i.length;
        if (g < 16) this.writeU8(144 + g);
        else if (g < 65536) (this.writeU8(220), this.writeU16(g));
        else if (g < 4294967296) (this.writeU8(221), this.writeU32(g));
        else throw new Error(`Too large array: ${g}`);
        for (let B of i) this.doEncode(B, I + 1);
      }
      countWithoutUndefined(i?: any, I?: any): any {
        let g: any = 0;
        for (let B of I) i[B] !== void 0 && g++;
        return g;
      }
      encodeMap(i?: any, I?: any): any {
        let g: any = Object.keys(i);
        this.sortKeys && g.sort();
        let B: any = this.ignoreUndefined
          ? this.countWithoutUndefined(i, g)
          : g.length;
        if (B < 16) this.writeU8(128 + B);
        else if (B < 65536) (this.writeU8(222), this.writeU16(B));
        else if (B < 4294967296) (this.writeU8(223), this.writeU32(B));
        else throw new Error(`Too large map object: ${B}`);
        for (let Q of g) {
          let e: any = i[Q];
          (this.ignoreUndefined && e === void 0) ||
            (this.encodeString(Q), this.doEncode(e, I + 1));
        }
      }
      encodeExtension(i?: any): any {
        if (typeof i.data == "function") {
          let g: any = i.data(this.pos + 6),
            B: any = g.length;
          if (B >= 4294967296)
            throw new Error(`Too large extension object: ${B}`);
          (this.writeU8(201),
            this.writeU32(B),
            this.writeI8(i.type),
            this.writeU8a(g));
          return;
        }
        let I: any = i.data.length;
        if (I === 1) this.writeU8(212);
        else if (I === 2) this.writeU8(213);
        else if (I === 4) this.writeU8(214);
        else if (I === 8) this.writeU8(215);
        else if (I === 16) this.writeU8(216);
        else if (I < 256) (this.writeU8(199), this.writeU8(I));
        else if (I < 65536) (this.writeU8(200), this.writeU16(I));
        else if (I < 4294967296) (this.writeU8(201), this.writeU32(I));
        else throw new Error(`Too large extension object: ${I}`);
        (this.writeI8(i.type), this.writeU8a(i.data));
      }
      writeU8(i?: any): any {
        (this.ensureBufferSizeToWrite(1),
          this.view.setUint8(this.pos, i),
          this.pos++);
      }
      writeU8a(i?: any): any {
        let I: any = i.length;
        (this.ensureBufferSizeToWrite(I),
          this.bytes.set(i, this.pos),
          (this.pos += I));
      }
      writeI8(i?: any): any {
        (this.ensureBufferSizeToWrite(1),
          this.view.setInt8(this.pos, i),
          this.pos++);
      }
      writeU16(i?: any): any {
        (this.ensureBufferSizeToWrite(2),
          this.view.setUint16(this.pos, i),
          (this.pos += 2));
      }
      writeI16(i?: any): any {
        (this.ensureBufferSizeToWrite(2),
          this.view.setInt16(this.pos, i),
          (this.pos += 2));
      }
      writeU32(i?: any): any {
        (this.ensureBufferSizeToWrite(4),
          this.view.setUint32(this.pos, i),
          (this.pos += 4));
      }
      writeI32(i?: any): any {
        (this.ensureBufferSizeToWrite(4),
          this.view.setInt32(this.pos, i),
          (this.pos += 4));
      }
      writeF32(i?: any): any {
        (this.ensureBufferSizeToWrite(4),
          this.view.setFloat32(this.pos, i),
          (this.pos += 4));
      }
      writeF64(i?: any): any {
        (this.ensureBufferSizeToWrite(8),
          this.view.setFloat64(this.pos, i),
          (this.pos += 8));
      }
      writeU64(i?: any): any {
        (this.ensureBufferSizeToWrite(8),
          YI(this.view, this.pos, i),
          (this.pos += 8));
      }
      writeI64(i?: any): any {
        (this.ensureBufferSizeToWrite(8),
          SA(this.view, this.pos, i),
          (this.pos += 8));
      }
      writeBigUint64(i?: any): any {
        (this.ensureBufferSizeToWrite(8),
          this.view.setBigUint64(this.pos, i),
          (this.pos += 8));
      }
      writeBigInt64(i?: any): any {
        (this.ensureBufferSizeToWrite(8),
          this.view.setBigInt64(this.pos, i),
          (this.pos += 8));
      }
    };
  function OA(A?: any, i?: any): any {
    return new NA(i).encodeSharedRef(A);
  }
  function pA(A?: any): any {
    return `${A < 0 ? "-" : ""}0x${Math.abs(A).toString(16).padStart(2, "0")}`;
  }
  var Jg: any = 16,
    qg: any = 16,
    JA: any = class {
      [key: string]: any;
      hit: any = 0;
      miss: any = 0;
      caches: any;
      maxKeyLength: any;
      maxLengthPerKey: any;
      constructor(i: any = Jg, I: any = qg) {
        ((this.maxKeyLength = i),
          (this.maxLengthPerKey = I),
          (this.caches = []));
        for (let g: any = 0; g < this.maxKeyLength; g++) this.caches.push([]);
      }
      canBeCached(i?: any): any {
        return i > 0 && i <= this.maxKeyLength;
      }
      find(i?: any, I?: any, g?: any): any {
        let B: any = this.caches[g - 1];
        A: for (let Q of B) {
          let e: any = Q.bytes;
          for (let E: any = 0; E < g; E++) if (e[E] !== i[I + E]) continue A;
          return Q.str;
        }
        return null;
      }
      store(i?: any, I?: any): any {
        let g: any = this.caches[i.length - 1],
          B: any = {
            bytes: i,
            str: I,
          };
        g.length >= this.maxLengthPerKey
          ? (g[(Math.random() * g.length) | 0] = B)
          : g.push(B);
      }
      decode(i?: any, I?: any, g?: any): any {
        let B: any = this.find(i, I, g);
        if (B != null) return (this.hit++, B);
        this.miss++;
        let Q: any = vA(i, I, g),
          e: any = Uint8Array.prototype.slice.call(i, I, I + g);
        return (this.store(e, Q), Q);
      }
    };
  var WA: any = "array",
    oA: any = "map_key",
    zI: any = "map_value",
    ug: any = (A?: any): any => {
      if (typeof A == "string" || typeof A == "number") return A;
      throw new M("The type of key must be string or number but " + typeof A);
    },
    PA: any = class {
      [key: string]: any;
      stack: any = [];
      stackHeadPosition: any = -1;
      get length() {
        return this.stackHeadPosition + 1;
      }
      top(): any {
        return this.stack[this.stackHeadPosition];
      }
      pushArrayState(i?: any): any {
        let I: any = this.getUninitializedStateFromPool();
        ((I.type = WA),
          (I.position = 0),
          (I.size = i),
          (I.array = new Array(i)));
      }
      pushMapState(i?: any): any {
        let I: any = this.getUninitializedStateFromPool();
        ((I.type = oA), (I.readCount = 0), (I.size = i), (I.map = {}));
      }
      getUninitializedStateFromPool(): any {
        if (
          (this.stackHeadPosition++,
          this.stackHeadPosition === this.stack.length)
        ) {
          let i: any = {
            type: void 0,
            size: 0,
            array: void 0,
            position: 0,
            readCount: 0,
            map: void 0,
            key: null,
          };
          this.stack.push(i);
        }
        return this.stack[this.stackHeadPosition];
      }
      release(i?: any): any {
        if (this.stack[this.stackHeadPosition] !== i)
          throw new Error(
            "Invalid stack state. Released state is not on top of the stack.",
          );
        if (i.type === WA) {
          let g: any = i;
          ((g.size = 0),
            (g.array = void 0),
            (g.position = 0),
            (g.type = void 0));
        }
        if (i.type === oA || i.type === zI) {
          let g: any = i;
          ((g.size = 0),
            (g.map = void 0),
            (g.readCount = 0),
            (g.type = void 0));
        }
        this.stackHeadPosition--;
      }
      reset(): any {
        ((this.stack.length = 0), (this.stackHeadPosition = -1));
      }
    },
    aA: any = -1,
    TA: any = new DataView(new ArrayBuffer(0)),
    Mg: any = new Uint8Array(TA.buffer);
  try {
    TA.getInt8(0);
  } catch (A: any) {
    if (!(A instanceof RangeError))
      throw new Error(
        "This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access",
      );
  }
  var mI: any = new RangeError("Insufficient data"),
    Kg: any = new JA(),
    qA: any = class A {
      [key: string]: any;
      extensionCodec: any;
      context: any;
      useBigInt64: any;
      rawStrings: any;
      maxStrLength: any;
      maxBinLength: any;
      maxArrayLength: any;
      maxMapLength: any;
      maxExtLength: any;
      keyDecoder: any;
      mapKeyConverter: any;
      totalPos: any = 0;
      pos: any = 0;
      view: any = TA;
      bytes: any = Mg;
      headByte: any = aA;
      stack: any = new PA();
      entered: any = !1;
      constructor(i?: any) {
        ((this.extensionCodec = i?.extensionCodec ?? $.defaultCodec),
          (this.context = i?.context),
          (this.useBigInt64 = i?.useBigInt64 ?? !1),
          (this.rawStrings = i?.rawStrings ?? !1),
          (this.maxStrLength = i?.maxStrLength ?? 4294967295),
          (this.maxBinLength = i?.maxBinLength ?? 4294967295),
          (this.maxArrayLength = i?.maxArrayLength ?? 4294967295),
          (this.maxMapLength = i?.maxMapLength ?? 4294967295),
          (this.maxExtLength = i?.maxExtLength ?? 4294967295),
          (this.keyDecoder = i?.keyDecoder !== void 0 ? i.keyDecoder : Kg),
          (this.mapKeyConverter = i?.mapKeyConverter ?? ug));
      }
      clone(): any {
        return new A({
          extensionCodec: this.extensionCodec,
          context: this.context,
          useBigInt64: this.useBigInt64,
          rawStrings: this.rawStrings,
          maxStrLength: this.maxStrLength,
          maxBinLength: this.maxBinLength,
          maxArrayLength: this.maxArrayLength,
          maxMapLength: this.maxMapLength,
          maxExtLength: this.maxExtLength,
          keyDecoder: this.keyDecoder,
        });
      }
      reinitializeState(): any {
        ((this.totalPos = 0), (this.headByte = aA), this.stack.reset());
      }
      setBuffer(i?: any): any {
        let I: any = tA(i);
        ((this.bytes = I),
          (this.view = new DataView(I.buffer, I.byteOffset, I.byteLength)),
          (this.pos = 0));
      }
      appendBuffer(i?: any): any {
        if (this.headByte === aA && !this.hasRemaining(1)) this.setBuffer(i);
        else {
          let I: any = this.bytes.subarray(this.pos),
            g: any = tA(i),
            B: any = new Uint8Array(I.length + g.length);
          (B.set(I), B.set(g, I.length), this.setBuffer(B));
        }
      }
      hasRemaining(i?: any): any {
        return this.view.byteLength - this.pos >= i;
      }
      createExtraByteError(i?: any): any {
        let { view: I, pos: g } = this;
        return new RangeError(
          `Extra ${I.byteLength - g} of ${I.byteLength} byte(s) found at buffer[${i}]`,
        );
      }
      decode(i?: any): any {
        if (this.entered) return this.clone().decode(i);
        try {
          ((this.entered = !0), this.reinitializeState(), this.setBuffer(i));
          let I: any = this.doDecodeSync();
          if (this.hasRemaining(1)) throw this.createExtraByteError(this.pos);
          return I;
        } finally {
          this.entered = !1;
        }
      }
      *decodeMulti(i?: any): any {
        if (this.entered) {
          yield* this.clone().decodeMulti(i);
          return;
        }
        try {
          for (
            this.entered = !0, this.reinitializeState(), this.setBuffer(i);
            this.hasRemaining(1);
          )
            yield this.doDecodeSync();
        } finally {
          this.entered = !1;
        }
      }
      async decodeAsync(i?: any): Promise<any> {
        if (this.entered) return this.clone().decodeAsync(i);
        try {
          this.entered = !0;
          let I: any = !1,
            g: any;
          for await (let E of i) {
            if (I)
              throw (
                (this.entered = !1),
                this.createExtraByteError(this.totalPos)
              );
            this.appendBuffer(E);
            try {
              ((g = this.doDecodeSync()), (I = !0));
            } catch (a: any) {
              if (!(a instanceof RangeError)) throw a;
            }
            this.totalPos += this.pos;
          }
          if (I) {
            if (this.hasRemaining(1))
              throw this.createExtraByteError(this.totalPos);
            return g;
          }
          let { headByte: B, pos: Q, totalPos: e } = this;
          throw new RangeError(
            `Insufficient data in parsing ${pA(B)} at ${e} (${Q} in the current buffer)`,
          );
        } finally {
          this.entered = !1;
        }
      }
      decodeArrayStream(i?: any): any {
        return this.decodeMultiAsync(i, !0);
      }
      decodeStream(i?: any): any {
        return this.decodeMultiAsync(i, !1);
      }
      async *decodeMultiAsync(
        i?: any,
        I?: any,
      ): AsyncGenerator<any, any, unknown> {
        if (this.entered) {
          yield* this.clone().decodeMultiAsync(i, I);
          return;
        }
        try {
          this.entered = !0;
          let g: any = I,
            B: any = -1;
          for await (let Q of i) {
            if (I && B === 0) throw this.createExtraByteError(this.totalPos);
            (this.appendBuffer(Q),
              g && ((B = this.readArraySize()), (g = !1), this.complete()));
            try {
              for (; yield this.doDecodeSync(), --B !== 0; );
            } catch (e: any) {
              if (!(e instanceof RangeError)) throw e;
            }
            this.totalPos += this.pos;
          }
        } finally {
          this.entered = !1;
        }
      }
      doDecodeSync(): any {
        A: for (;;) {
          let i: any = this.readHeadByte(),
            I: any;
          if (i >= 224) I = i - 256;
          else if (i < 192)
            if (i < 128) I = i;
            else if (i < 144) {
              let B: any = i - 128;
              if (B !== 0) {
                (this.pushMapState(B), this.complete());
                continue A;
              } else I = {};
            } else if (i < 160) {
              let B: any = i - 144;
              if (B !== 0) {
                (this.pushArrayState(B), this.complete());
                continue A;
              } else I = [];
            } else {
              let B: any = i - 160;
              I = this.decodeString(B, 0);
            }
          else if (i === 192) I = null;
          else if (i === 194) I = !1;
          else if (i === 195) I = !0;
          else if (i === 202) I = this.readF32();
          else if (i === 203) I = this.readF64();
          else if (i === 204) I = this.readU8();
          else if (i === 205) I = this.readU16();
          else if (i === 206) I = this.readU32();
          else if (i === 207)
            this.useBigInt64
              ? (I = this.readU64AsBigInt())
              : (I = this.readU64());
          else if (i === 208) I = this.readI8();
          else if (i === 209) I = this.readI16();
          else if (i === 210) I = this.readI32();
          else if (i === 211)
            this.useBigInt64
              ? (I = this.readI64AsBigInt())
              : (I = this.readI64());
          else if (i === 217) {
            let B: any = this.lookU8();
            I = this.decodeString(B, 1);
          } else if (i === 218) {
            let B: any = this.lookU16();
            I = this.decodeString(B, 2);
          } else if (i === 219) {
            let B: any = this.lookU32();
            I = this.decodeString(B, 4);
          } else if (i === 220) {
            let B: any = this.readU16();
            if (B !== 0) {
              (this.pushArrayState(B), this.complete());
              continue A;
            } else I = [];
          } else if (i === 221) {
            let B: any = this.readU32();
            if (B !== 0) {
              (this.pushArrayState(B), this.complete());
              continue A;
            } else I = [];
          } else if (i === 222) {
            let B: any = this.readU16();
            if (B !== 0) {
              (this.pushMapState(B), this.complete());
              continue A;
            } else I = {};
          } else if (i === 223) {
            let B: any = this.readU32();
            if (B !== 0) {
              (this.pushMapState(B), this.complete());
              continue A;
            } else I = {};
          } else if (i === 196) {
            let B: any = this.lookU8();
            I = this.decodeBinary(B, 1);
          } else if (i === 197) {
            let B: any = this.lookU16();
            I = this.decodeBinary(B, 2);
          } else if (i === 198) {
            let B: any = this.lookU32();
            I = this.decodeBinary(B, 4);
          } else if (i === 212) I = this.decodeExtension(1, 0);
          else if (i === 213) I = this.decodeExtension(2, 0);
          else if (i === 214) I = this.decodeExtension(4, 0);
          else if (i === 215) I = this.decodeExtension(8, 0);
          else if (i === 216) I = this.decodeExtension(16, 0);
          else if (i === 199) {
            let B: any = this.lookU8();
            I = this.decodeExtension(B, 1);
          } else if (i === 200) {
            let B: any = this.lookU16();
            I = this.decodeExtension(B, 2);
          } else if (i === 201) {
            let B: any = this.lookU32();
            I = this.decodeExtension(B, 4);
          } else throw new M(`Unrecognized type byte: ${pA(i)}`);
          this.complete();
          let g: any = this.stack;
          for (; g.length > 0; ) {
            let B: any = g.top();
            if (B.type === WA)
              if (
                ((B.array[B.position] = I), B.position++, B.position === B.size)
              )
                ((I = B.array), g.release(B));
              else continue A;
            else if (B.type === oA) {
              if (I === "__proto__")
                throw new M("The key __proto__ is not allowed");
              ((B.key = this.mapKeyConverter(I)), (B.type = zI));
              continue A;
            } else if (
              ((B.map[B.key] = I), B.readCount++, B.readCount === B.size)
            )
              ((I = B.map), g.release(B));
            else {
              ((B.key = null), (B.type = oA));
              continue A;
            }
          }
          return I;
        }
      }
      readHeadByte(): any {
        return (
          this.headByte === aA && (this.headByte = this.readU8()),
          this.headByte
        );
      }
      complete(): any {
        this.headByte = aA;
      }
      readArraySize(): any {
        let i: any = this.readHeadByte();
        switch (i) {
          case 220:
            return this.readU16();
          case 221:
            return this.readU32();
          default: {
            if (i < 160) return i - 144;
            throw new M(`Unrecognized array type byte: ${pA(i)}`);
          }
        }
      }
      pushMapState(i?: any): any {
        if (i > this.maxMapLength)
          throw new M(
            `Max length exceeded: map length (${i}) > maxMapLengthLength (${this.maxMapLength})`,
          );
        this.stack.pushMapState(i);
      }
      pushArrayState(i?: any): any {
        if (i > this.maxArrayLength)
          throw new M(
            `Max length exceeded: array length (${i}) > maxArrayLength (${this.maxArrayLength})`,
          );
        this.stack.pushArrayState(i);
      }
      decodeString(i?: any, I?: any): any {
        return !this.rawStrings || this.stateIsMapKey()
          ? this.decodeUtf8String(i, I)
          : this.decodeBinary(i, I);
      }
      decodeUtf8String(i?: any, I?: any): any {
        if (i > this.maxStrLength)
          throw new M(
            `Max length exceeded: UTF-8 byte length (${i}) > maxStrLength (${this.maxStrLength})`,
          );
        if (this.bytes.byteLength < this.pos + I + i) throw mI;
        let g: any = this.pos + I,
          B: any;
        return (
          this.stateIsMapKey() && this.keyDecoder?.canBeCached(i)
            ? (B = this.keyDecoder.decode(this.bytes, g, i))
            : (B = KI(this.bytes, g, i)),
          (this.pos += I + i),
          B
        );
      }
      stateIsMapKey(): any {
        return this.stack.length > 0 ? this.stack.top().type === oA : !1;
      }
      decodeBinary(i?: any, I?: any): any {
        if (i > this.maxBinLength)
          throw new M(
            `Max length exceeded: bin length (${i}) > maxBinLength (${this.maxBinLength})`,
          );
        if (!this.hasRemaining(i + I)) throw mI;
        let g: any = this.pos + I,
          B: any = this.bytes.subarray(g, g + i);
        return ((this.pos += I + i), B);
      }
      decodeExtension(i?: any, I?: any): any {
        if (i > this.maxExtLength)
          throw new M(
            `Max length exceeded: ext length (${i}) > maxExtLength (${this.maxExtLength})`,
          );
        let g: any = this.view.getInt8(this.pos + I),
          B: any = this.decodeBinary(i, I + 1);
        return this.extensionCodec.decode(B, g, this.context);
      }
      lookU8(): any {
        return this.view.getUint8(this.pos);
      }
      lookU16(): any {
        return this.view.getUint16(this.pos);
      }
      lookU32(): any {
        return this.view.getUint32(this.pos);
      }
      readU8(): any {
        let i: any = this.view.getUint8(this.pos);
        return (this.pos++, i);
      }
      readI8(): any {
        let i: any = this.view.getInt8(this.pos);
        return (this.pos++, i);
      }
      readU16(): any {
        let i: any = this.view.getUint16(this.pos);
        return ((this.pos += 2), i);
      }
      readI16(): any {
        let i: any = this.view.getInt16(this.pos);
        return ((this.pos += 2), i);
      }
      readU32(): any {
        let i: any = this.view.getUint32(this.pos);
        return ((this.pos += 4), i);
      }
      readI32(): any {
        let i: any = this.view.getInt32(this.pos);
        return ((this.pos += 4), i);
      }
      readU64(): any {
        let i: any = RI(this.view, this.pos);
        return ((this.pos += 8), i);
      }
      readI64(): any {
        let i: any = HA(this.view, this.pos);
        return ((this.pos += 8), i);
      }
      readU64AsBigInt(): any {
        let i: any = this.view.getBigUint64(this.pos);
        return ((this.pos += 8), i);
      }
      readI64AsBigInt(): any {
        let i: any = this.view.getBigInt64(this.pos);
        return ((this.pos += 8), i);
      }
      readF32(): any {
        let i: any = this.view.getFloat32(this.pos);
        return ((this.pos += 4), i);
      }
      readF64(): any {
        let i: any = this.view.getFloat64(this.pos);
        return ((this.pos += 8), i);
      }
    };
  function _A(A?: any, i?: any): any {
    return new qA(i).decode(A);
  }
  var Yg: any = 4,
    XI: any = 0,
    LI: any = 1,
    Rg: any = 2;
  function BA(A?: any): any {
    let i: any = A.length;
    for (; --i >= 0; ) A[i] = 0;
  }
  var xg: any = 0,
    Gi: any = 1,
    mg: any = 2,
    Si: any = 29,
    dI: any = 256,
    Hi: any = 286,
    IA: any = 30,
    fI: any = 19,
    Ni: any = 573,
    rA: any = 15,
    jA: any = 16,
    zg: any = 7,
    wI: any = 256,
    pi: any = 16,
    Ji: any = 17,
    qi: any = 18,
    aI: any = new Uint8Array([
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
      5, 5, 5, 0,
    ]),
    RA: any = new Uint8Array([
      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
      11, 11, 12, 12, 13, 13,
    ]),
    Xg: any = new Uint8Array([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
    ]),
    ui: any = new Uint8Array([
      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
    ]),
    Lg: any = 512,
    L: any = new Array(288 * 2);
  BA(L);
  var FA: any = new Array(IA * 2);
  BA(FA);
  var dA: any = new Array(Lg);
  BA(dA);
  var fA: any = new Array(256);
  BA(fA);
  var sI: any = new Array(Si);
  BA(sI);
  var xA: any = new Array(IA);
  BA(xA);
  var $A: any = class {
      [key: string]: any;
      constructor(A?: any, i?: any, I?: any, g?: any, B?: any) {
        ((this.static_tree = A),
          (this.extra_bits = i),
          (this.extra_base = I),
          (this.elems = g),
          (this.max_length = B),
          (this.has_stree = A && A.length));
      }
    },
    Mi: any,
    Ki: any,
    Yi: any,
    AI: any = class {
      [key: string]: any;
      constructor(A?: any, i?: any) {
        ((this.dyn_tree = A), (this.max_code = 0), (this.stat_desc = i));
      }
    },
    Ri: any = (A?: any): any => (A < 256 ? dA[A] : dA[256 + (A >>> 7)]),
    wA: any = (A?: any, i?: any): any => {
      ((A.pending_buf[A.pending++] = i & 255),
        (A.pending_buf[A.pending++] = (i >>> 8) & 255));
    },
    K: any = (A?: any, i?: any, I?: any): any => {
      A.bi_valid > jA - I
        ? ((A.bi_buf |= (i << A.bi_valid) & 65535),
          wA(A, A.bi_buf),
          (A.bi_buf = i >> (jA - A.bi_valid)),
          (A.bi_valid += I - jA))
        : ((A.bi_buf |= (i << A.bi_valid) & 65535), (A.bi_valid += I));
    },
    m: any = (A?: any, i?: any, I?: any): any => {
      K(A, I[i * 2], I[i * 2 + 1]);
    },
    xi: any = (A?: any, i?: any): any => {
      let I: any = 0;
      do ((I |= A & 1), (A >>>= 1), (I <<= 1));
      while (--i > 0);
      return I >>> 1;
    },
    Vg: any = (A?: any): any => {
      A.bi_valid === 16
        ? (wA(A, A.bi_buf), (A.bi_buf = 0), (A.bi_valid = 0))
        : A.bi_valid >= 8 &&
          ((A.pending_buf[A.pending++] = A.bi_buf & 255),
          (A.bi_buf >>= 8),
          (A.bi_valid -= 8));
    },
    Zg: any = (A?: any, i?: any): any => {
      let I: any = i.dyn_tree,
        g: any = i.max_code,
        B: any = i.stat_desc.static_tree,
        Q: any = i.stat_desc.has_stree,
        e: any = i.stat_desc.extra_bits,
        E: any = i.stat_desc.extra_base,
        a: any = i.stat_desc.max_length,
        C: any,
        t: any,
        f: any,
        n: any,
        o: any,
        G: any,
        S: any = 0;
      for (n = 0; n <= rA; n++) A.bl_count[n] = 0;
      for (I[A.heap[A.heap_max] * 2 + 1] = 0, C = A.heap_max + 1; C < Ni; C++)
        ((t = A.heap[C]),
          (n = I[I[t * 2 + 1] * 2 + 1] + 1),
          n > a && ((n = a), S++),
          (I[t * 2 + 1] = n),
          !(t > g) &&
            (A.bl_count[n]++,
            (o = 0),
            t >= E && (o = e[t - E]),
            (G = I[t * 2]),
            (A.opt_len += G * (n + o)),
            Q && (A.static_len += G * (B[t * 2 + 1] + o))));
      if (S !== 0) {
        do {
          for (n = a - 1; A.bl_count[n] === 0; ) n--;
          (A.bl_count[n]--,
            (A.bl_count[n + 1] += 2),
            A.bl_count[a]--,
            (S -= 2));
        } while (S > 0);
        for (n = a; n !== 0; n--)
          for (t = A.bl_count[n]; t !== 0; )
            ((f = A.heap[--C]),
              !(f > g) &&
                (I[f * 2 + 1] !== n &&
                  ((A.opt_len += (n - I[f * 2 + 1]) * I[f * 2]),
                  (I[f * 2 + 1] = n)),
                t--));
      }
    },
    mi: any = (A?: any, i?: any, I?: any): any => {
      let g: any = new Array(16),
        B: any = 0,
        Q: any,
        e: any;
      for (Q = 1; Q <= rA; Q++) ((B = (B + I[Q - 1]) << 1), (g[Q] = B));
      for (e = 0; e <= i; e++) {
        let E: any = A[e * 2 + 1];
        E !== 0 && (A[e * 2] = xi(g[E]++, E));
      }
    },
    bg: any = (): any => {
      let A: any,
        i: any,
        I: any,
        g: any,
        B: any,
        Q: any = new Array(16);
      for (I = 0, g = 0; g < Si - 1; g++)
        for (sI[g] = I, A = 0; A < 1 << aI[g]; A++) fA[I++] = g;
      for (fA[I - 1] = g, B = 0, g = 0; g < 16; g++)
        for (xA[g] = B, A = 0; A < 1 << RA[g]; A++) dA[B++] = g;
      for (B >>= 7; g < IA; g++)
        for (xA[g] = B << 7, A = 0; A < 1 << (RA[g] - 7); A++)
          dA[256 + B++] = g;
      for (i = 0; i <= rA; i++) Q[i] = 0;
      for (A = 0; A <= 143; ) ((L[A * 2 + 1] = 8), A++, Q[8]++);
      for (; A <= 255; ) ((L[A * 2 + 1] = 9), A++, Q[9]++);
      for (; A <= 279; ) ((L[A * 2 + 1] = 7), A++, Q[7]++);
      for (; A <= 287; ) ((L[A * 2 + 1] = 8), A++, Q[8]++);
      for (mi(L, 287, Q), A = 0; A < IA; A++)
        ((FA[A * 2 + 1] = 5), (FA[A * 2] = xi(A, 5)));
      ((Mi = new $A(L, aI, 257, Hi, rA)),
        (Ki = new $A(FA, RA, 0, IA, rA)),
        (Yi = new $A(new Array(0), Xg, 0, fI, zg)));
    },
    zi: any = (A?: any): any => {
      let i: any;
      for (i = 0; i < Hi; i++) A.dyn_ltree[i * 2] = 0;
      for (i = 0; i < IA; i++) A.dyn_dtree[i * 2] = 0;
      for (i = 0; i < fI; i++) A.bl_tree[i * 2] = 0;
      ((A.dyn_ltree[wI * 2] = 1),
        (A.opt_len = A.static_len = 0),
        (A.sym_next = A.matches = 0));
    },
    Xi: any = (A?: any): any => {
      (A.bi_valid > 8
        ? wA(A, A.bi_buf)
        : A.bi_valid > 0 && (A.pending_buf[A.pending++] = A.bi_buf),
        (A.bi_buf = 0),
        (A.bi_valid = 0));
    },
    VI: any = (A?: any, i?: any, I?: any, g?: any): any => {
      let B: any = i * 2,
        Q: any = I * 2;
      return A[B] < A[Q] || (A[B] === A[Q] && g[i] <= g[I]);
    },
    II: any = (A?: any, i?: any, I?: any): any => {
      let g: any = A.heap[I],
        B: any = I << 1;
      for (
        ;
        B <= A.heap_len &&
        (B < A.heap_len && VI(i, A.heap[B + 1], A.heap[B], A.depth) && B++,
        !VI(i, g, A.heap[B], A.depth));
      )
        ((A.heap[I] = A.heap[B]), (I = B), (B <<= 1));
      A.heap[I] = g;
    },
    ZI: any = (A?: any, i?: any, I?: any): any => {
      let g: any,
        B: any,
        Q: any = 0,
        e: any,
        E: any;
      if (A.sym_next !== 0)
        do
          ((g = A.pending_buf[A.sym_buf + Q++] & 255),
            (g += (A.pending_buf[A.sym_buf + Q++] & 255) << 8),
            (B = A.pending_buf[A.sym_buf + Q++]),
            g === 0
              ? m(A, B, i)
              : ((e = fA[B]),
                m(A, e + dI + 1, i),
                (E = aI[e]),
                E !== 0 && ((B -= sI[e]), K(A, B, E)),
                g--,
                (e = Ri(g)),
                m(A, e, I),
                (E = RA[e]),
                E !== 0 && ((g -= xA[e]), K(A, g, E))));
        while (Q < A.sym_next);
      m(A, wI, i);
    },
    oI: any = (A?: any, i?: any): any => {
      let I: any = i.dyn_tree,
        g: any = i.stat_desc.static_tree,
        B: any = i.stat_desc.has_stree,
        Q: any = i.stat_desc.elems,
        e: any,
        E: any,
        a: any = -1,
        C: any;
      for (A.heap_len = 0, A.heap_max = Ni, e = 0; e < Q; e++)
        I[e * 2] !== 0
          ? ((A.heap[++A.heap_len] = a = e), (A.depth[e] = 0))
          : (I[e * 2 + 1] = 0);
      for (; A.heap_len < 2; )
        ((C = A.heap[++A.heap_len] = a < 2 ? ++a : 0),
          (I[C * 2] = 1),
          (A.depth[C] = 0),
          A.opt_len--,
          B && (A.static_len -= g[C * 2 + 1]));
      for (i.max_code = a, e = A.heap_len >> 1; e >= 1; e--) II(A, I, e);
      C = Q;
      do
        ((e = A.heap[1]),
          (A.heap[1] = A.heap[A.heap_len--]),
          II(A, I, 1),
          (E = A.heap[1]),
          (A.heap[--A.heap_max] = e),
          (A.heap[--A.heap_max] = E),
          (I[C * 2] = I[e * 2] + I[E * 2]),
          (A.depth[C] =
            (A.depth[e] >= A.depth[E] ? A.depth[e] : A.depth[E]) + 1),
          (I[e * 2 + 1] = I[E * 2 + 1] = C),
          (A.heap[1] = C++),
          II(A, I, 1));
      while (A.heap_len >= 2);
      ((A.heap[--A.heap_max] = A.heap[1]), Zg(A, i), mi(I, a, A.bl_count));
    },
    bI: any = (A?: any, i?: any, I?: any): any => {
      let g: any,
        B: any = -1,
        Q: any,
        e: any = i[1],
        E: any = 0,
        a: any = 7,
        C: any = 4;
      for (
        e === 0 && ((a = 138), (C = 3)), i[(I + 1) * 2 + 1] = 65535, g = 0;
        g <= I;
        g++
      )
        ((Q = e),
          (e = i[(g + 1) * 2 + 1]),
          !(++E < a && Q === e) &&
            (E < C
              ? (A.bl_tree[Q * 2] += E)
              : Q !== 0
                ? (Q !== B && A.bl_tree[Q * 2]++, A.bl_tree[pi * 2]++)
                : E <= 10
                  ? A.bl_tree[Ji * 2]++
                  : A.bl_tree[qi * 2]++,
            (E = 0),
            (B = Q),
            e === 0
              ? ((a = 138), (C = 3))
              : Q === e
                ? ((a = 6), (C = 3))
                : ((a = 7), (C = 4))));
    },
    vI: any = (A?: any, i?: any, I?: any): any => {
      let g: any,
        B: any = -1,
        Q: any,
        e: any = i[1],
        E: any = 0,
        a: any = 7,
        C: any = 4;
      for (e === 0 && ((a = 138), (C = 3)), g = 0; g <= I; g++)
        if (((Q = e), (e = i[(g + 1) * 2 + 1]), !(++E < a && Q === e))) {
          if (E < C)
            do m(A, Q, A.bl_tree);
            while (--E !== 0);
          else
            Q !== 0
              ? (Q !== B && (m(A, Q, A.bl_tree), E--),
                m(A, pi, A.bl_tree),
                K(A, E - 3, 2))
              : E <= 10
                ? (m(A, Ji, A.bl_tree), K(A, E - 3, 3))
                : (m(A, qi, A.bl_tree), K(A, E - 11, 7));
          ((E = 0),
            (B = Q),
            e === 0
              ? ((a = 138), (C = 3))
              : Q === e
                ? ((a = 6), (C = 3))
                : ((a = 7), (C = 4)));
        }
    },
    vg: any = (A?: any): any => {
      let i: any;
      for (
        bI(A, A.dyn_ltree, A.l_desc.max_code),
          bI(A, A.dyn_dtree, A.d_desc.max_code),
          oI(A, A.bl_desc),
          i = fI - 1;
        i >= 3 && A.bl_tree[ui[i] * 2 + 1] === 0;
        i--
      );
      return ((A.opt_len += 3 * (i + 1) + 5 + 5 + 4), i);
    },
    Og: any = (A?: any, i?: any, I?: any, g?: any): any => {
      let B: any;
      for (K(A, i - 257, 5), K(A, I - 1, 5), K(A, g - 4, 4), B = 0; B < g; B++)
        K(A, A.bl_tree[ui[B] * 2 + 1], 3);
      (vI(A, A.dyn_ltree, i - 1), vI(A, A.dyn_dtree, I - 1));
    },
    Wg: any = (A?: any): any => {
      let i: any = 4093624447,
        I: any;
      for (I = 0; I <= 31; I++, i >>>= 1)
        if (i & 1 && A.dyn_ltree[I * 2] !== 0) return XI;
      if (
        A.dyn_ltree[18] !== 0 ||
        A.dyn_ltree[20] !== 0 ||
        A.dyn_ltree[26] !== 0
      )
        return LI;
      for (I = 32; I < dI; I++) if (A.dyn_ltree[I * 2] !== 0) return LI;
      return XI;
    },
    OI: any = !1,
    Pg: any = (A?: any): any => {
      (OI || (bg(), (OI = !0)),
        (A.l_desc = new AI(A.dyn_ltree, Mi)),
        (A.d_desc = new AI(A.dyn_dtree, Ki)),
        (A.bl_desc = new AI(A.bl_tree, Yi)),
        (A.bi_buf = 0),
        (A.bi_valid = 0),
        zi(A));
    },
    mA: any = (A?: any, i?: any, I?: any, g?: any): any => {
      (K(A, (xg << 1) + (g ? 1 : 0), 3),
        Xi(A),
        wA(A, I),
        wA(A, ~I),
        I && A.pending_buf.set(A.window.subarray(i, i + I), A.pending),
        (A.pending += I));
    },
    Tg: any = (A?: any): any => {
      (K(A, Gi << 1, 3), m(A, wI, L), Vg(A));
    },
    _g: any = (A?: any, i?: any, I?: any, g?: any): any => {
      let B: any,
        Q: any,
        e: any = 0;
      (A.level > 0
        ? (A.strm.data_type === Rg && (A.strm.data_type = Wg(A)),
          oI(A, A.l_desc),
          oI(A, A.d_desc),
          (e = vg(A)),
          (B = (A.opt_len + 3 + 7) >>> 3),
          (Q = (A.static_len + 3 + 7) >>> 3),
          Q <= B && (B = Q))
        : (B = Q = I + 5),
        I + 4 <= B && i !== -1
          ? mA(A, i, I, g)
          : A.strategy === Yg || Q === B
            ? (K(A, (Gi << 1) + (g ? 1 : 0), 3), ZI(A, L, FA))
            : (K(A, (mg << 1) + (g ? 1 : 0), 3),
              Og(A, A.l_desc.max_code + 1, A.d_desc.max_code + 1, e + 1),
              ZI(A, A.dyn_ltree, A.dyn_dtree)),
        zi(A),
        g && Xi(A));
    },
    Z: any = (A?: any, i?: any, I?: any): any => (
      (A.pending_buf[A.sym_buf + A.sym_next++] = i),
      (A.pending_buf[A.sym_buf + A.sym_next++] = i >> 8),
      (A.pending_buf[A.sym_buf + A.sym_next++] = I),
      i === 0
        ? A.dyn_ltree[I * 2]++
        : (A.matches++,
          i--,
          A.dyn_ltree[(fA[I] + dI + 1) * 2]++,
          A.dyn_dtree[Ri(i) * 2]++),
      A.sym_next === A.sym_end
    ),
    sA: any = (A?: any, i?: any, I?: any, g?: any): any => {
      let B: any = (A & 65535) | 0,
        Q: any = ((A >>> 16) & 65535) | 0,
        e: any = 0;
      for (; I !== 0; ) {
        ((e = I > 2e3 ? 2e3 : I), (I -= e));
        do ((B = (B + i[g++]) | 0), (Q = (Q + B) | 0));
        while (--e);
        ((B %= 65521), (Q %= 65521));
      }
      return B | (Q << 16) | 0;
    },
    jg: any = (): any => {
      let A: any,
        i: any = [];
      for (var I: any = 0; I < 256; I++) {
        A = I;
        for (var g: any = 0; g < 8; g++)
          A = A & 1 ? 3988292384 ^ (A >>> 1) : A >>> 1;
        i[I] = A;
      }
      return i;
    },
    $g: any = new Uint32Array(jg()),
    J: any = (A?: any, i?: any, I?: any, g?: any): any => {
      let B: any = $g,
        Q: any = g + I;
      A ^= -1;
      for (let e: any = g; e < Q; e++) A = (A >>> 8) ^ B[(A ^ i[e]) & 255];
      return A ^ -1;
    },
    T: any = {
      2: "need dictionary",
      1: "stream end",
      0: "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version",
    };
  var AB: any = 9;
  var IB: any = 573,
    U: any = 3,
    O: any = 258,
    z: any = 262,
    iB: any = 32,
    iA: any = 42,
    kI: any = 57,
    nI: any = 69,
    hI: any = 73,
    cI: any = 91,
    rI: any = 103,
    W: any = 113,
    hA: any = 666,
    u: any = 1,
    QA: any = 2,
    _: any = 3,
    CA: any = 4,
    gB: any = 3,
    P: any = (A?: any, i?: any): any => ((A.msg = T[i]), i),
    WI: any = (A?: any): any => A * 2 - (A > 4 ? 9 : 0),
    V: any = (A?: any): any => {
      let i: any = A.length;
      for (; --i >= 0; ) A[i] = 0;
    },
    BB: any = (A?: any): any => {
      let i: any,
        I: any,
        g: any,
        B: any = A.w_size;
      ((i = A.hash_size), (g = i));
      do ((I = A.head[--g]), (A.head[g] = I >= B ? I - B : 0));
      while (--i);
      ((i = B), (g = i));
      do ((I = A.prev[--g]), (A.prev[g] = I >= B ? I - B : 0));
      while (--i);
    },
    lI: any = (A?: any, i?: any, I?: any): any =>
      ((i << A.hash_shift) ^ I) & A.hash_mask,
    j: any = (A?: any, i?: any): any => {
      let I: any;
      if (A.legacy_hash) I = A.ins_h = lI(A, A.ins_h, A.window[i + U - 1]);
      else {
        let B: any = A.window,
          Q: any = B[i] | (B[i + 1] << 8) | (B[i + 2] << 16) | (B[i + 3] << 24);
        I = A.ins_h = ((Math.imul(Q, 66521) + 66521) >>> 16) & A.hash_mask;
      }
      let g: any = (A.prev[i & A.w_mask] = A.head[I]);
      return ((A.head[I] = i), g);
    },
    Y: any = (A?: any): any => {
      let i: any = A.state,
        I: any = i.pending;
      (I > A.avail_out && (I = A.avail_out),
        I !== 0 &&
          (A.output.set(
            i.pending_buf.subarray(i.pending_out, i.pending_out + I),
            A.next_out,
          ),
          (A.next_out += I),
          (i.pending_out += I),
          (A.total_out += I),
          (A.avail_out -= I),
          (i.pending -= I),
          i.pending === 0 && (i.pending_out = 0)));
    },
    R: any = (A?: any, i?: any): any => {
      (_g(
        A,
        A.block_start >= 0 ? A.block_start : -1,
        A.strstart - A.block_start,
        i,
      ),
        (A.block_start = A.strstart),
        Y(A.strm));
    },
    y: any = (A?: any, i?: any): any => {
      A.pending_buf[A.pending++] = i;
    },
    nA: any = (A?: any, i?: any): any => {
      ((A.pending_buf[A.pending++] = (i >>> 8) & 255),
        (A.pending_buf[A.pending++] = i & 255));
    },
    FI: any = (A?: any, i?: any, I?: any, g?: any): any => {
      let B: any = A.avail_in;
      return (
        B > g && (B = g),
        B === 0
          ? 0
          : ((A.avail_in -= B),
            i.set(A.input.subarray(A.next_in, A.next_in + B), I),
            A.state.wrap === 1
              ? (A.adler = sA(A.adler, i, B, I))
              : A.state.wrap === 2 && (A.adler = J(A.adler, i, B, I)),
            (A.next_in += B),
            (A.total_in += B),
            B)
      );
    },
    Li: any = (A?: any, i?: any): any => {
      let I: any = A.max_chain_length,
        g: any = A.strstart,
        B: any,
        Q: any,
        e: any = A.prev_length,
        E: any = A.nice_match,
        a: any = A.strstart > A.w_size - z ? A.strstart - (A.w_size - z) : 0,
        C: any = A.window,
        t: any = A.w_mask,
        f: any = A.prev,
        n: any = A.strstart + O,
        o: any = C[g + e - 1],
        G: any = C[g + e];
      (A.prev_length >= A.good_match && (I >>= 2),
        E > A.lookahead && (E = A.lookahead));
      do
        if (
          ((B = i),
          !(
            C[B + e] !== G ||
            C[B + e - 1] !== o ||
            C[B] !== C[g] ||
            C[++B] !== C[g + 1]
          ))
        ) {
          ((g += 2), B++);
          do;
          while (
            C[++g] === C[++B] &&
            C[++g] === C[++B] &&
            C[++g] === C[++B] &&
            C[++g] === C[++B] &&
            C[++g] === C[++B] &&
            C[++g] === C[++B] &&
            C[++g] === C[++B] &&
            C[++g] === C[++B] &&
            g < n
          );
          if (((Q = O - (n - g)), (g = n - O), Q > e)) {
            if (((A.match_start = i), (e = Q), Q >= E)) break;
            ((o = C[g + e - 1]), (G = C[g + e]));
          }
        }
      while ((i = f[i & t]) > a && --I !== 0);
      return e <= A.lookahead ? e : A.lookahead;
    },
    gA: any = (A?: any): any => {
      let i: any = A.w_size,
        I: any,
        g: any,
        B: any;
      do {
        if (
          ((g = A.window_size - A.lookahead - A.strstart),
          A.strstart >= i + (i - z) &&
            (A.window.set(A.window.subarray(i, i + i - g), 0),
            (A.match_start -= i),
            (A.strstart -= i),
            (A.block_start -= i),
            A.insert > A.strstart && (A.insert = A.strstart),
            BB(A),
            (g += i)),
          A.strm.avail_in === 0)
        )
          break;
        if (
          ((I = FI(A.strm, A.window, A.strstart + A.lookahead, g)),
          (A.lookahead += I),
          A.legacy_hash)
        ) {
          if (A.lookahead + A.insert >= U)
            for (
              B = A.strstart - A.insert,
                A.ins_h = A.window[B],
                A.ins_h = lI(A, A.ins_h, A.window[B + 1]);
              A.insert &&
              (j(A, B), B++, A.insert--, !(A.lookahead + A.insert < U));
            );
        } else if (A.lookahead + A.insert > U)
          for (
            B = A.strstart - A.insert;
            A.insert &&
            (j(A, B), B++, A.insert--, !(A.lookahead + A.insert <= U));
          );
      } while (A.lookahead < z && A.strm.avail_in !== 0);
    },
    Vi: any = (A?: any, i?: any): any => {
      let I: any =
          A.pending_buf_size - 5 > A.w_size ? A.w_size : A.pending_buf_size - 5,
        g: any,
        B: any,
        Q: any,
        e: any = 0,
        E: any = A.strm.avail_in;
      do {
        if (
          ((g = 65535),
          (Q = (A.bi_valid + 42) >> 3),
          A.strm.avail_out < Q ||
            ((Q = A.strm.avail_out - Q),
            (B = A.strstart - A.block_start),
            g > B + A.strm.avail_in && (g = B + A.strm.avail_in),
            g > Q && (g = Q),
            g < I &&
              ((g === 0 && i !== 4) || i === 0 || g !== B + A.strm.avail_in)))
        )
          break;
        ((e = i === 4 && g === B + A.strm.avail_in ? 1 : 0),
          mA(A, 0, 0, e),
          (A.pending_buf[A.pending - 4] = g),
          (A.pending_buf[A.pending - 3] = g >> 8),
          (A.pending_buf[A.pending - 2] = ~g),
          (A.pending_buf[A.pending - 1] = ~g >> 8),
          Y(A.strm),
          B &&
            (B > g && (B = g),
            A.strm.output.set(
              A.window.subarray(A.block_start, A.block_start + B),
              A.strm.next_out,
            ),
            (A.strm.next_out += B),
            (A.strm.avail_out -= B),
            (A.strm.total_out += B),
            (A.block_start += B),
            (g -= B)),
          g &&
            (FI(A.strm, A.strm.output, A.strm.next_out, g),
            (A.strm.next_out += g),
            (A.strm.avail_out -= g),
            (A.strm.total_out += g)));
      } while (e === 0);
      return (
        (E -= A.strm.avail_in),
        E &&
          (E >= A.w_size
            ? ((A.matches = 2),
              A.window.set(
                A.strm.input.subarray(
                  A.strm.next_in - A.w_size,
                  A.strm.next_in,
                ),
                0,
              ),
              (A.strstart = A.w_size),
              (A.insert = A.strstart))
            : (A.window_size - A.strstart <= E &&
                ((A.strstart -= A.w_size),
                A.window.set(
                  A.window.subarray(A.w_size, A.w_size + A.strstart),
                  0,
                ),
                A.matches < 2 && A.matches++,
                A.insert > A.strstart && (A.insert = A.strstart)),
              A.window.set(
                A.strm.input.subarray(A.strm.next_in - E, A.strm.next_in),
                A.strstart,
              ),
              (A.strstart += E),
              (A.insert += E > A.w_size - A.insert ? A.w_size - A.insert : E)),
          (A.block_start = A.strstart)),
        A.high_water < A.strstart && (A.high_water = A.strstart),
        e
          ? CA
          : i !== 0 &&
              i !== 4 &&
              A.strm.avail_in === 0 &&
              A.strstart === A.block_start
            ? QA
            : ((Q = A.window_size - A.strstart),
              A.strm.avail_in > Q &&
                A.block_start >= A.w_size &&
                ((A.block_start -= A.w_size),
                (A.strstart -= A.w_size),
                A.window.set(
                  A.window.subarray(A.w_size, A.w_size + A.strstart),
                  0,
                ),
                A.matches < 2 && A.matches++,
                (Q += A.w_size),
                A.insert > A.strstart && (A.insert = A.strstart)),
              Q > A.strm.avail_in && (Q = A.strm.avail_in),
              Q &&
                (FI(A.strm, A.window, A.strstart, Q),
                (A.strstart += Q),
                (A.insert +=
                  Q > A.w_size - A.insert ? A.w_size - A.insert : Q)),
              A.high_water < A.strstart && (A.high_water = A.strstart),
              (Q = (A.bi_valid + 42) >> 3),
              (Q =
                A.pending_buf_size - Q > 65535
                  ? 65535
                  : A.pending_buf_size - Q),
              (I = Q > A.w_size ? A.w_size : Q),
              (B = A.strstart - A.block_start),
              (B >= I ||
                ((B || i === 4) &&
                  i !== 0 &&
                  A.strm.avail_in === 0 &&
                  B <= Q)) &&
                ((g = B > Q ? Q : B),
                (e = i === 4 && A.strm.avail_in === 0 && g === B ? 1 : 0),
                mA(A, A.block_start, g, e),
                (A.block_start += g),
                Y(A.strm)),
              e ? _ : u)
      );
    },
    iI: any = (A?: any, i?: any): any => {
      let I: any, g: any;
      for (;;) {
        if (A.lookahead < z) {
          if ((gA(A), A.lookahead < z && i === 0)) return u;
          if (A.lookahead === 0) break;
        }
        if (
          ((I = 0),
          A.lookahead >= U && (I = j(A, A.strstart)),
          I !== 0 &&
            A.strstart - I <= A.w_size - z &&
            (A.match_length = Li(A, I)),
          A.match_length >= U)
        )
          if (
            ((g = Z(A, A.strstart - A.match_start, A.match_length - U)),
            (A.lookahead -= A.match_length),
            A.match_length <= A.max_lazy_match && A.lookahead >= U)
          ) {
            A.match_length--;
            do (A.strstart++, (I = j(A, A.strstart)));
            while (--A.match_length !== 0);
            A.strstart++;
          } else
            ((A.strstart += A.match_length),
              (A.match_length = 0),
              A.legacy_hash &&
                ((A.ins_h = A.window[A.strstart]),
                (A.ins_h = lI(A, A.ins_h, A.window[A.strstart + 1]))));
        else ((g = Z(A, 0, A.window[A.strstart])), A.lookahead--, A.strstart++);
        if (g && (R(A, !1), A.strm.avail_out === 0)) return u;
      }
      return (
        (A.insert = A.strstart < U - 1 ? A.strstart : U - 1),
        i === 4
          ? (R(A, !0), A.strm.avail_out === 0 ? _ : CA)
          : A.sym_next && (R(A, !1), A.strm.avail_out === 0)
            ? u
            : QA
      );
    },
    AA: any = (A?: any, i?: any): any => {
      let I: any, g: any, B: any;
      for (;;) {
        if (A.lookahead < z) {
          if ((gA(A), A.lookahead < z && i === 0)) return u;
          if (A.lookahead === 0) break;
        }
        if (
          ((I = 0),
          A.lookahead >= U && (I = j(A, A.strstart)),
          (A.prev_length = A.match_length),
          (A.prev_match = A.match_start),
          (A.match_length = U - 1),
          I !== 0 &&
            A.prev_length < A.max_lazy_match &&
            A.strstart - I <= A.w_size - z &&
            ((A.match_length = Li(A, I)),
            A.match_length <= 5 &&
              (A.strategy === 1 ||
                (A.match_length === U && A.strstart - A.match_start > 4096)) &&
              (A.match_length = U - 1)),
          A.prev_length >= U && A.match_length <= A.prev_length)
        ) {
          ((B = A.strstart + A.lookahead - U),
            (g = Z(A, A.strstart - 1 - A.prev_match, A.prev_length - U)),
            (A.lookahead -= A.prev_length - 1),
            (A.prev_length -= 2));
          do ++A.strstart <= B && (I = j(A, A.strstart));
          while (--A.prev_length !== 0);
          if (
            ((A.match_available = 0),
            (A.match_length = U - 1),
            A.strstart++,
            g && (R(A, !1), A.strm.avail_out === 0))
          )
            return u;
        } else if (A.match_available) {
          if (
            ((g = Z(A, 0, A.window[A.strstart - 1])),
            g && R(A, !1),
            A.strstart++,
            A.lookahead--,
            A.strm.avail_out === 0)
          )
            return u;
        } else ((A.match_available = 1), A.strstart++, A.lookahead--);
      }
      return (
        A.match_available &&
          ((g = Z(A, 0, A.window[A.strstart - 1])), (A.match_available = 0)),
        (A.insert = A.strstart < U - 1 ? A.strstart : U - 1),
        i === 4
          ? (R(A, !0), A.strm.avail_out === 0 ? _ : CA)
          : A.sym_next && (R(A, !1), A.strm.avail_out === 0)
            ? u
            : QA
      );
    },
    QB: any = (A?: any, i?: any): any => {
      let I: any,
        g: any,
        B: any,
        Q: any,
        e: any = A.window;
      for (;;) {
        if (A.lookahead <= O) {
          if ((gA(A), A.lookahead <= O && i === 0)) return u;
          if (A.lookahead === 0) break;
        }
        if (
          ((A.match_length = 0),
          A.lookahead >= U &&
            A.strstart > 0 &&
            ((B = A.strstart - 1),
            (g = e[B]),
            g === e[++B] && g === e[++B] && g === e[++B]))
        ) {
          Q = A.strstart + O;
          do;
          while (
            g === e[++B] &&
            g === e[++B] &&
            g === e[++B] &&
            g === e[++B] &&
            g === e[++B] &&
            g === e[++B] &&
            g === e[++B] &&
            g === e[++B] &&
            B < Q
          );
          ((A.match_length = O - (Q - B)),
            A.match_length > A.lookahead && (A.match_length = A.lookahead));
        }
        if (
          (A.match_length >= U
            ? ((I = Z(A, 1, A.match_length - U)),
              (A.lookahead -= A.match_length),
              (A.strstart += A.match_length),
              (A.match_length = 0))
            : ((I = Z(A, 0, A.window[A.strstart])),
              A.lookahead--,
              A.strstart++),
          I && (R(A, !1), A.strm.avail_out === 0))
        )
          return u;
      }
      return (
        (A.insert = 0),
        i === 4
          ? (R(A, !0), A.strm.avail_out === 0 ? _ : CA)
          : A.sym_next && (R(A, !1), A.strm.avail_out === 0)
            ? u
            : QA
      );
    },
    CB: any = (A?: any, i?: any): any => {
      let I: any;
      for (;;) {
        if (A.lookahead === 0 && (gA(A), A.lookahead === 0)) {
          if (i === 0) return u;
          break;
        }
        if (
          ((A.match_length = 0),
          (I = Z(A, 0, A.window[A.strstart])),
          A.lookahead--,
          A.strstart++,
          I && (R(A, !1), A.strm.avail_out === 0))
        )
          return u;
      }
      return (
        (A.insert = 0),
        i === 4
          ? (R(A, !0), A.strm.avail_out === 0 ? _ : CA)
          : A.sym_next && (R(A, !1), A.strm.avail_out === 0)
            ? u
            : QA
      );
    },
    x: any = class {
      [key: string]: any;
      constructor(A?: any, i?: any, I?: any, g?: any, B?: any) {
        ((this.good_length = A),
          (this.max_lazy = i),
          (this.nice_length = I),
          (this.max_chain = g),
          (this.func = B));
      }
    },
    cA: any = [
      new x(0, 0, 0, 0, Vi),
      new x(4, 4, 8, 4, iI),
      new x(4, 5, 16, 8, iI),
      new x(4, 6, 32, 32, iI),
      new x(4, 4, 16, 16, AA),
      new x(8, 16, 32, 32, AA),
      new x(8, 16, 128, 128, AA),
      new x(8, 32, 128, 256, AA),
      new x(32, 128, 258, 1024, AA),
      new x(32, 258, 258, 4096, AA),
    ],
    eB: any = (A?: any): any => {
      ((A.window_size = 2 * A.w_size),
        V(A.head),
        (A.max_lazy_match = cA[A.level].max_lazy),
        (A.good_match = cA[A.level].good_length),
        (A.nice_match = cA[A.level].nice_length),
        (A.max_chain_length = cA[A.level].max_chain),
        (A.strstart = 0),
        (A.block_start = 0),
        (A.lookahead = 0),
        (A.insert = 0),
        (A.match_length = A.prev_length = U - 1),
        (A.match_available = 0),
        (A.ins_h = 0));
    },
    tB: any = class {
      [key: string]: any;
      constructor() {
        ((this.strm = null),
          (this.status = 0),
          (this.pending_buf = null),
          (this.pending_buf_size = 0),
          (this.pending_out = 0),
          (this.pending = 0),
          (this.wrap = 0),
          (this.gzhead = null),
          (this.gzindex = 0),
          (this.method = 8),
          (this.last_flush = -1),
          (this.w_size = 0),
          (this.w_bits = 0),
          (this.w_mask = 0),
          (this.window = null),
          (this.window_size = 0),
          (this.prev = null),
          (this.head = null),
          (this.ins_h = 0),
          (this.legacy_hash = 0),
          (this.hash_size = 0),
          (this.hash_bits = 0),
          (this.hash_mask = 0),
          (this.hash_shift = 0),
          (this.block_start = 0),
          (this.match_length = 0),
          (this.prev_match = 0),
          (this.match_available = 0),
          (this.strstart = 0),
          (this.match_start = 0),
          (this.lookahead = 0),
          (this.prev_length = 0),
          (this.max_chain_length = 0),
          (this.max_lazy_match = 0),
          (this.level = 0),
          (this.strategy = 0),
          (this.good_match = 0),
          (this.nice_match = 0),
          (this.dyn_ltree = new Uint16Array(IB * 2)),
          (this.dyn_dtree = new Uint16Array(122)),
          (this.bl_tree = new Uint16Array(78)),
          V(this.dyn_ltree),
          V(this.dyn_dtree),
          V(this.bl_tree),
          (this.l_desc = null),
          (this.d_desc = null),
          (this.bl_desc = null),
          (this.bl_count = new Uint16Array(16)),
          (this.heap = new Uint16Array(573)),
          V(this.heap),
          (this.heap_len = 0),
          (this.heap_max = 0),
          (this.depth = new Uint16Array(573)),
          V(this.depth),
          (this.sym_buf = 0),
          (this.lit_bufsize = 0),
          (this.sym_next = 0),
          (this.sym_end = 0),
          (this.opt_len = 0),
          (this.static_len = 0),
          (this.matches = 0),
          (this.insert = 0),
          (this.bi_buf = 0),
          (this.bi_valid = 0));
      }
    },
    XA: any = (A?: any): any => {
      if (!A) return 1;
      let i: any = A.state;
      return !i ||
        i.strm !== A ||
        (i.status !== iA &&
          i.status !== kI &&
          i.status !== nI &&
          i.status !== hI &&
          i.status !== cI &&
          i.status !== rI &&
          i.status !== W &&
          i.status !== hA)
        ? 1
        : 0;
    },
    EB: any = (A?: any): any => {
      if (XA(A)) return P(A, -2);
      ((A.total_in = A.total_out = 0), (A.data_type = 2));
      let i: any = A.state;
      return (
        (i.pending = 0),
        (i.pending_out = 0),
        i.wrap < 0 && (i.wrap = -i.wrap),
        (i.status = i.wrap === 2 ? kI : i.wrap ? iA : W),
        (A.adler = i.wrap === 2 ? 0 : 1),
        (i.last_flush = -2),
        Pg(i),
        0
      );
    },
    aB: any = (A?: any): any => {
      let i: any = EB(A);
      return (i === 0 && eB(A.state), i);
    };
  var oB: any = (
    A?: any,
    i?: any,
    I?: any,
    g?: any,
    B?: any,
    Q?: any,
    e?: any,
  ): any => {
    if (!A) return -2;
    let E: any = 1;
    if (
      (i === -1 && (i = 6),
      g < 0 ? ((E = 0), (g = -g)) : g > 15 && ((E = 2), (g -= 16)),
      B < 1 ||
        B > AB ||
        I !== 8 ||
        g < 8 ||
        g > 15 ||
        i < 0 ||
        i > 9 ||
        Q < 0 ||
        Q > 4 ||
        (g === 8 && E !== 1))
    )
      return P(A, -2);
    g === 8 && (g = 9);
    let a: any = new tB();
    return (
      (A.state = a),
      (a.strm = A),
      (a.status = iA),
      (a.wrap = E),
      (a.gzhead = null),
      (a.w_bits = g),
      (a.w_size = 1 << a.w_bits),
      (a.w_mask = a.w_size - 1),
      (a.legacy_hash = e ? 1 : 0),
      (a.hash_bits = B + 7),
      !a.legacy_hash && a.hash_bits < 15 && (a.hash_bits = 15),
      (a.hash_size = 1 << a.hash_bits),
      (a.hash_mask = a.hash_size - 1),
      (a.hash_shift = ~~((a.hash_bits + U - 1) / U)),
      (a.window = new Uint8Array(a.w_size * 2)),
      (a.head = new Uint16Array(a.hash_size)),
      (a.prev = new Uint16Array(a.w_size)),
      (a.lit_bufsize = 1 << (B + 6)),
      (a.pending_buf_size = a.lit_bufsize * 4),
      (a.pending_buf = new Uint8Array(a.pending_buf_size)),
      (a.sym_buf = a.lit_bufsize),
      (a.sym_end = (a.lit_bufsize - 1) * 3),
      (a.level = i),
      (a.strategy = Q),
      (a.method = I),
      aB(A)
    );
  };
  var nB: any = (A?: any, i?: any): any => {
      if (XA(A) || i > 5 || i < 0) return A ? P(A, -2) : -2;
      let I: any = A.state;
      if (
        !A.output ||
        (A.avail_in !== 0 && !A.input) ||
        (I.status === hA && i !== 4)
      )
        return P(A, A.avail_out === 0 ? -5 : -2);
      let g: any = I.last_flush;
      if (((I.last_flush = i), I.pending !== 0)) {
        if ((Y(A), A.avail_out === 0)) return ((I.last_flush = -1), 0);
      } else if (A.avail_in === 0 && WI(i) <= WI(g) && i !== 4) return P(A, -5);
      if (I.status === hA && A.avail_in !== 0) return P(A, -5);
      if (
        (I.status === iA && I.wrap === 0 && (I.status = W), I.status === iA)
      ) {
        let B: any = (8 + ((I.w_bits - 8) << 4)) << 8,
          Q: any = -1;
        if (
          (I.strategy >= 2 || I.level < 2
            ? (Q = 0)
            : I.level < 6
              ? (Q = 1)
              : I.level === 6
                ? (Q = 2)
                : (Q = 3),
          (B |= Q << 6),
          I.strstart !== 0 && (B |= iB),
          (B += 31 - (B % 31)),
          nA(I, B),
          I.strstart !== 0 && (nA(I, A.adler >>> 16), nA(I, A.adler & 65535)),
          (A.adler = 1),
          (I.status = W),
          Y(A),
          I.pending !== 0)
        )
          return ((I.last_flush = -1), 0);
      }
      if (I.status === kI) {
        if (((A.adler = 0), y(I, 31), y(I, 139), y(I, 8), I.gzhead))
          (y(
            I,
            (I.gzhead.text ? 1 : 0) +
              (I.gzhead.hcrc ? 2 : 0) +
              (I.gzhead.extra ? 4 : 0) +
              (I.gzhead.name ? 8 : 0) +
              (I.gzhead.comment ? 16 : 0),
          ),
            y(I, I.gzhead.time & 255),
            y(I, (I.gzhead.time >> 8) & 255),
            y(I, (I.gzhead.time >> 16) & 255),
            y(I, (I.gzhead.time >> 24) & 255),
            y(I, I.level === 9 ? 2 : I.strategy >= 2 || I.level < 2 ? 4 : 0),
            y(I, I.gzhead.os & 255),
            I.gzhead.extra &&
              I.gzhead.extra.length &&
              (y(I, I.gzhead.extra.length & 255),
              y(I, (I.gzhead.extra.length >> 8) & 255)),
            I.gzhead.hcrc &&
              (A.adler = J(A.adler, I.pending_buf, I.pending, 0)),
            (I.gzindex = 0),
            (I.status = nI));
        else if (
          (y(I, 0),
          y(I, 0),
          y(I, 0),
          y(I, 0),
          y(I, 0),
          y(I, I.level === 9 ? 2 : I.strategy >= 2 || I.level < 2 ? 4 : 0),
          y(I, gB),
          (I.status = W),
          Y(A),
          I.pending !== 0)
        )
          return ((I.last_flush = -1), 0);
      }
      if (I.status === nI) {
        if (I.gzhead.extra) {
          let B: any = I.pending,
            Q: any = (I.gzhead.extra.length & 65535) - I.gzindex;
          for (; I.pending + Q > I.pending_buf_size; ) {
            let E: any = I.pending_buf_size - I.pending;
            if (
              (I.pending_buf.set(
                I.gzhead.extra.subarray(I.gzindex, I.gzindex + E),
                I.pending,
              ),
              (I.pending = I.pending_buf_size),
              I.gzhead.hcrc &&
                I.pending > B &&
                (A.adler = J(A.adler, I.pending_buf, I.pending - B, B)),
              (I.gzindex += E),
              Y(A),
              I.pending !== 0)
            )
              return ((I.last_flush = -1), 0);
            ((B = 0), (Q -= E));
          }
          let e: any = new Uint8Array(I.gzhead.extra);
          (I.pending_buf.set(e.subarray(I.gzindex, I.gzindex + Q), I.pending),
            (I.pending += Q),
            I.gzhead.hcrc &&
              I.pending > B &&
              (A.adler = J(A.adler, I.pending_buf, I.pending - B, B)),
            (I.gzindex = 0));
        }
        I.status = hI;
      }
      if (I.status === hI) {
        if (I.gzhead.name) {
          let B: any = I.pending,
            Q: any;
          do {
            if (I.pending === I.pending_buf_size) {
              if (
                (I.gzhead.hcrc &&
                  I.pending > B &&
                  (A.adler = J(A.adler, I.pending_buf, I.pending - B, B)),
                Y(A),
                I.pending !== 0)
              )
                return ((I.last_flush = -1), 0);
              B = 0;
            }
            (I.gzindex < I.gzhead.name.length
              ? (Q = I.gzhead.name.charCodeAt(I.gzindex++) & 255)
              : (Q = 0),
              y(I, Q));
          } while (Q !== 0);
          (I.gzhead.hcrc &&
            I.pending > B &&
            (A.adler = J(A.adler, I.pending_buf, I.pending - B, B)),
            (I.gzindex = 0));
        }
        I.status = cI;
      }
      if (I.status === cI) {
        if (I.gzhead.comment) {
          let B: any = I.pending,
            Q: any;
          do {
            if (I.pending === I.pending_buf_size) {
              if (
                (I.gzhead.hcrc &&
                  I.pending > B &&
                  (A.adler = J(A.adler, I.pending_buf, I.pending - B, B)),
                Y(A),
                I.pending !== 0)
              )
                return ((I.last_flush = -1), 0);
              B = 0;
            }
            (I.gzindex < I.gzhead.comment.length
              ? (Q = I.gzhead.comment.charCodeAt(I.gzindex++) & 255)
              : (Q = 0),
              y(I, Q));
          } while (Q !== 0);
          I.gzhead.hcrc &&
            I.pending > B &&
            (A.adler = J(A.adler, I.pending_buf, I.pending - B, B));
        }
        I.status = rI;
      }
      if (I.status === rI) {
        if (I.gzhead.hcrc) {
          if (I.pending + 2 > I.pending_buf_size && (Y(A), I.pending !== 0))
            return ((I.last_flush = -1), 0);
          (y(I, A.adler & 255), y(I, (A.adler >> 8) & 255), (A.adler = 0));
        }
        if (((I.status = W), Y(A), I.pending !== 0))
          return ((I.last_flush = -1), 0);
      }
      if (
        A.avail_in !== 0 ||
        I.lookahead !== 0 ||
        (i !== 0 && I.status !== hA)
      ) {
        let B: any =
          I.level === 0
            ? Vi(I, i)
            : I.strategy === 2
              ? CB(I, i)
              : I.strategy === 3
                ? QB(I, i)
                : cA[I.level].func(I, i);
        if (((B === _ || B === CA) && (I.status = hA), B === u || B === _))
          return (A.avail_out === 0 && (I.last_flush = -1), 0);
        if (
          B === QA &&
          (i === 1
            ? Tg(I)
            : i !== 5 &&
              (mA(I, 0, 0, !1),
              i === 3 &&
                (V(I.head),
                I.lookahead === 0 &&
                  ((I.strstart = 0), (I.block_start = 0), (I.insert = 0)))),
          Y(A),
          A.avail_out === 0)
        )
          return ((I.last_flush = -1), 0);
      }
      return i !== 4
        ? 0
        : I.wrap <= 0
          ? 1
          : (I.wrap === 2
              ? (y(I, A.adler & 255),
                y(I, (A.adler >> 8) & 255),
                y(I, (A.adler >> 16) & 255),
                y(I, (A.adler >> 24) & 255),
                y(I, A.total_in & 255),
                y(I, (A.total_in >> 8) & 255),
                y(I, (A.total_in >> 16) & 255),
                y(I, (A.total_in >> 24) & 255))
              : (nA(I, A.adler >>> 16), nA(I, A.adler & 65535)),
            Y(A),
            I.wrap > 0 && (I.wrap = -I.wrap),
            I.pending !== 0 ? 0 : 1);
    },
    hB: any = (A?: any): any => {
      if (XA(A)) return -2;
      let i: any = A.state.status;
      return ((A.state = null), i === W ? P(A, -3) : 0);
    },
    cB: any = (A?: any, i?: any): any => {
      let I: any = i.length;
      if (XA(A)) return -2;
      let g: any = A.state,
        B: any = g.wrap;
      if (B === 2 || (B === 1 && g.status !== iA) || g.lookahead) return -2;
      if (
        (B === 1 && (A.adler = sA(A.adler, i, I, 0)),
        (g.wrap = 0),
        I >= g.w_size)
      ) {
        B === 0 &&
          (V(g.head), (g.strstart = 0), (g.block_start = 0), (g.insert = 0));
        let a: any = new Uint8Array(g.w_size);
        (a.set(i.subarray(I - g.w_size, I), 0), (i = a), (I = g.w_size));
      }
      let Q: any = A.avail_in,
        e: any = A.next_in,
        E: any = A.input;
      for (
        A.avail_in = I, A.next_in = 0, A.input = i, gA(g);
        g.lookahead >= U;
      ) {
        let a: any = g.strstart,
          C: any = g.lookahead - (U - 1);
        do (j(g, a), a++);
        while (--C);
        ((g.strstart = a), (g.lookahead = U - 1), gA(g));
      }
      return (
        (g.strstart += g.lookahead),
        (g.block_start = g.strstart),
        (g.insert = g.lookahead),
        (g.lookahead = 0),
        (g.match_length = g.prev_length = U - 1),
        (g.match_available = 0),
        (A.next_in = e),
        (A.input = E),
        (A.avail_in = Q),
        (g.wrap = B),
        0
      );
    },
    uA: any = 16209,
    rB: any = 16191;
  function FB(A?: any, i?: any): any {
    let I: any,
      g: any,
      B: any,
      Q: any,
      e: any,
      E: any,
      a: any,
      C: any,
      t: any,
      f: any,
      n: any,
      o: any,
      G: any,
      S: any,
      l: any,
      s: any,
      w: any,
      h: any,
      D: any,
      p: any,
      c: any,
      r: any,
      k: any,
      F: any,
      d: any = A.state;
    ((I = A.next_in),
      (k = A.input),
      (g = I + (A.avail_in - 5)),
      (B = A.next_out),
      (F = A.output),
      (Q = B - (i - A.avail_out)),
      (e = B + (A.avail_out - 257)),
      (E = d.dmax),
      (a = d.wsize),
      (C = d.whave),
      (t = d.wnext),
      (f = d.window),
      (n = d.hold),
      (o = d.bits),
      (G = d.lencode),
      (S = d.distcode),
      (l = (1 << d.lenbits) - 1),
      (s = (1 << d.distbits) - 1));
    A: do {
      (o < 15 && ((n += k[I++] << o), (o += 8), (n += k[I++] << o), (o += 8)),
        (w = G[n & l]));
      I: for (;;) {
        if (
          ((h = w >>> 24),
          (n >>>= h),
          (o -= h),
          (h = (w >>> 16) & 255),
          h === 0)
        )
          F[B++] = w & 65535;
        else if (h & 16) {
          ((D = w & 65535),
            (h &= 15),
            h &&
              (o < h && ((n += k[I++] << o), (o += 8)),
              (D += n & ((1 << h) - 1)),
              (n >>>= h),
              (o -= h)),
            o < 15 &&
              ((n += k[I++] << o), (o += 8), (n += k[I++] << o), (o += 8)),
            (w = S[n & s]));
          i: for (;;) {
            if (
              ((h = w >>> 24),
              (n >>>= h),
              (o -= h),
              (h = (w >>> 16) & 255),
              h & 16)
            ) {
              if (
                ((p = w & 65535),
                (h &= 15),
                o < h &&
                  ((n += k[I++] << o),
                  (o += 8),
                  o < h && ((n += k[I++] << o), (o += 8))),
                (p += n & ((1 << h) - 1)),
                p > E)
              ) {
                ((A.msg = "invalid distance too far back"), (d.mode = uA));
                break A;
              }
              if (((n >>>= h), (o -= h), (h = B - Q), p > h)) {
                if (((h = p - h), h > C && d.sane)) {
                  ((A.msg = "invalid distance too far back"), (d.mode = uA));
                  break A;
                }
                if (((c = 0), (r = f), t === 0)) {
                  if (((c += a - h), h < D)) {
                    D -= h;
                    do F[B++] = f[c++];
                    while (--h);
                    ((c = B - p), (r = F));
                  }
                } else if (t < h) {
                  if (((c += a + t - h), (h -= t), h < D)) {
                    D -= h;
                    do F[B++] = f[c++];
                    while (--h);
                    if (((c = 0), t < D)) {
                      ((h = t), (D -= h));
                      do F[B++] = f[c++];
                      while (--h);
                      ((c = B - p), (r = F));
                    }
                  }
                } else if (((c += t - h), h < D)) {
                  D -= h;
                  do F[B++] = f[c++];
                  while (--h);
                  ((c = B - p), (r = F));
                }
                for (; D > 2; )
                  ((F[B++] = r[c++]),
                    (F[B++] = r[c++]),
                    (F[B++] = r[c++]),
                    (D -= 3));
                D && ((F[B++] = r[c++]), D > 1 && (F[B++] = r[c++]));
              } else {
                c = B - p;
                do
                  ((F[B++] = F[c++]),
                    (F[B++] = F[c++]),
                    (F[B++] = F[c++]),
                    (D -= 3));
                while (D > 2);
                D && ((F[B++] = F[c++]), D > 1 && (F[B++] = F[c++]));
              }
            } else if (h & 64) {
              ((A.msg = "invalid distance code"), (d.mode = uA));
              break A;
            } else {
              w = S[(w & 65535) + (n & ((1 << h) - 1))];
              continue i;
            }
            break;
          }
        } else if (h & 64)
          if (h & 32) {
            d.mode = rB;
            break A;
          } else {
            ((A.msg = "invalid literal/length code"), (d.mode = uA));
            break A;
          }
        else {
          w = G[(w & 65535) + (n & ((1 << h) - 1))];
          continue I;
        }
        break;
      }
    } while (I < g && B < e);
    ((D = o >> 3),
      (I -= D),
      (o -= D << 3),
      (n &= (1 << o) - 1),
      (A.next_in = I),
      (A.next_out = B),
      (A.avail_in = I < g ? 5 + (g - I) : 5 - (I - g)),
      (A.avail_out = B < e ? 257 + (e - B) : 257 - (B - e)),
      (d.hold = n),
      (d.bits = o));
  }
  var MA: any = 15,
    PI: any = 852,
    TI: any = 592,
    _I: any = 0,
    gI: any = 1,
    jI: any = 2,
    DB: any = new Uint16Array([
      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
      67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
    ]),
    dB: any = new Uint8Array([
      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19,
      19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 199, 75,
    ]),
    fB: any = new Uint16Array([
      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513,
      769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0,
    ]),
    wB: any = new Uint8Array([
      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23,
      24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
    ]),
    DA: any = (
      A?: any,
      i?: any,
      I?: any,
      g?: any,
      B?: any,
      Q?: any,
      e?: any,
      E?: any,
    ): any => {
      let a: any = E.bits,
        C: any = 0,
        t: any = 0,
        f: any = 0,
        n: any = 0,
        o: any = 0,
        G: any = 0,
        S: any = 0,
        l: any = 0,
        s: any = 0,
        w: any = 0,
        h: any,
        D: any,
        p: any,
        c: any,
        r: any,
        k: any = null,
        F: any,
        d: any = new Uint16Array(16),
        q: any = new Uint16Array(16),
        b: any = null,
        qI: any,
        UA: any,
        GA: any;
      for (C = 0; C <= MA; C++) d[C] = 0;
      for (t = 0; t < g; t++) d[i[I + t]]++;
      for (o = a, n = MA; n >= 1 && d[n] === 0; n--);
      if ((o > n && (o = n), n === 0))
        return ((B[Q++] = 20971520), (B[Q++] = 20971520), (E.bits = 1), 0);
      for (f = 1; f < n && d[f] === 0; f++);
      for (o < f && (o = f), l = 1, C = 1; C <= MA; C++)
        if (((l <<= 1), (l -= d[C]), l < 0)) return -1;
      if (l > 0 && (A === _I || n !== 1)) return -1;
      for (q[1] = 0, C = 1; C < MA; C++) q[C + 1] = q[C] + d[C];
      for (t = 0; t < g; t++) i[I + t] !== 0 && (e[q[i[I + t]]++] = t);
      if (
        (A === _I
          ? ((k = b = e), (F = 20))
          : A === gI
            ? ((k = DB), (b = dB), (F = 257))
            : ((k = fB), (b = wB), (F = 0)),
        (w = 0),
        (t = 0),
        (C = f),
        (r = Q),
        (G = o),
        (S = 0),
        (p = -1),
        (s = 1 << o),
        (c = s - 1),
        (A === gI && s > PI) || (A === jI && s > TI))
      )
        return 1;
      for (;;) {
        ((qI = C - S),
          e[t] + 1 < F
            ? ((UA = 0), (GA = e[t]))
            : e[t] >= F
              ? ((UA = b[e[t] - F]), (GA = k[e[t] - F]))
              : ((UA = 96), (GA = 0)),
          (h = 1 << (C - S)),
          (D = 1 << G),
          (f = D));
        do ((D -= h), (B[r + (w >> S) + D] = (qI << 24) | (UA << 16) | GA | 0));
        while (D !== 0);
        for (h = 1 << (C - 1); w & h; ) h >>= 1;
        if ((h !== 0 ? ((w &= h - 1), (w += h)) : (w = 0), t++, --d[C] === 0)) {
          if (C === n) break;
          C = i[I + e[t]];
        }
        if (C > o && (w & c) !== p) {
          for (
            S === 0 && (S = o), r += f, G = C - S, l = 1 << G;
            G + S < n && ((l -= d[G + S]), !(l <= 0));
          )
            (G++, (l <<= 1));
          if (((s += 1 << G), (A === gI && s > PI) || (A === jI && s > TI)))
            return 1;
          ((p = w & c), (B[p] = (o << 24) | (G << 16) | (r - Q) | 0));
        }
      }
      return (
        w !== 0 && (B[r + w] = ((C - S) << 24) | 4194304),
        (E.bits = o),
        0
      );
    },
    sB: any = 0,
    Zi: any = 1,
    bi: any = 2,
    LA: any = 16180,
    $I: any = 16181,
    Ai: any = 16182,
    Ii: any = 16183,
    ii: any = 16184,
    gi: any = 16185,
    Bi: any = 16186,
    Qi: any = 16187,
    Ci: any = 16188,
    ei: any = 16189,
    zA: any = 16190,
    X: any = 16191,
    BI: any = 16192,
    ti: any = 16193,
    QI: any = 16194,
    Ei: any = 16195,
    ai: any = 16196,
    oi: any = 16197,
    ni: any = 16198,
    KA: any = 16199,
    YA: any = 16200,
    hi: any = 16201,
    ci: any = 16202,
    ri: any = 16203,
    Fi: any = 16204,
    Di: any = 16205,
    CI: any = 16206,
    di: any = 16207,
    fi: any = 16208,
    N: any = 16209,
    DI: any = 16210,
    vi: any = 16211,
    kB: any = 852,
    lB: any = 592;
  var wi: any = (A?: any): any =>
      ((A >>> 24) & 255) +
      ((A >>> 8) & 65280) +
      ((A & 65280) << 8) +
      ((A & 255) << 24),
    yB: any = class {
      [key: string]: any;
      constructor() {
        ((this.strm = null),
          (this.mode = 0),
          (this.last = !1),
          (this.wrap = 0),
          (this.havedict = !1),
          (this.flags = 0),
          (this.dmax = 0),
          (this.check = 0),
          (this.total = 0),
          (this.head = null),
          (this.wbits = 0),
          (this.wsize = 0),
          (this.whave = 0),
          (this.wnext = 0),
          (this.window = null),
          (this.hold = 0),
          (this.bits = 0),
          (this.length = 0),
          (this.offset = 0),
          (this.extra = 0),
          (this.lencode = null),
          (this.distcode = null),
          (this.lenbits = 0),
          (this.distbits = 0),
          (this.ncode = 0),
          (this.nlen = 0),
          (this.ndist = 0),
          (this.have = 0),
          (this.next = null),
          (this.lens = new Uint16Array(320)),
          (this.work = new Uint16Array(288)),
          (this.lendyn = null),
          (this.distdyn = null),
          (this.sane = 0),
          (this.back = 0),
          (this.was = 0));
      }
    },
    eA: any = (A?: any): any => {
      if (!A) return 1;
      let i: any = A.state;
      return !i || i.strm !== A || i.mode < LA || i.mode > vi ? 1 : 0;
    },
    UB: any = (A?: any): any => {
      if (eA(A)) return -2;
      let i: any = A.state;
      return (
        (A.total_in = A.total_out = i.total = 0),
        (A.msg = ""),
        i.wrap && (A.adler = i.wrap & 1),
        (i.mode = LA),
        (i.last = 0),
        (i.havedict = 0),
        (i.flags = -1),
        (i.dmax = 32768),
        (i.head = null),
        (i.hold = 0),
        (i.bits = 0),
        (i.lencode = i.lendyn = new Int32Array(kB)),
        (i.distcode = i.distdyn = new Int32Array(lB)),
        (i.sane = 1),
        (i.back = -1),
        0
      );
    },
    Oi: any = (A?: any): any => {
      if (eA(A)) return -2;
      let i: any = A.state;
      return ((i.wsize = 0), (i.whave = 0), (i.wnext = 0), UB(A));
    },
    GB: any = (A?: any, i?: any): any => {
      let I: any;
      if (eA(A)) return -2;
      let g: any = A.state;
      return (
        i < 0 ? ((I = 0), (i = -i)) : ((I = (i >> 4) + 5), i < 48 && (i &= 15)),
        i && (i < 8 || i > 15)
          ? -2
          : (g.window !== null && g.wbits !== i && (g.window = null),
            (g.wrap = I),
            (g.wbits = i),
            Oi(A))
      );
    },
    SB: any = (A?: any, i?: any): any => {
      if (!A) return -2;
      let I: any = new yB();
      ((A.state = I), (I.strm = A), (I.window = null), (I.mode = LA));
      let g: any = GB(A, i);
      return (g !== 0 && (A.state = null), g);
    };
  var si: any = !0,
    eI: any,
    tI: any,
    HB: any = (A?: any): any => {
      if (si) {
        ((eI = new Int32Array(512)), (tI = new Int32Array(32)));
        let i: any = 0;
        for (; i < 144; ) A.lens[i++] = 8;
        for (; i < 256; ) A.lens[i++] = 9;
        for (; i < 280; ) A.lens[i++] = 7;
        for (; i < 288; ) A.lens[i++] = 8;
        for (
          DA(Zi, A.lens, 0, 288, eI, 0, A.work, {
            bits: 9,
          }),
            i = 0;
          i < 32;
        )
          A.lens[i++] = 5;
        (DA(bi, A.lens, 0, 32, tI, 0, A.work, {
          bits: 5,
        }),
          (si = !1));
      }
      ((A.lencode = eI), (A.lenbits = 9), (A.distcode = tI), (A.distbits = 5));
    },
    Wi: any = (A?: any, i?: any, I?: any, g?: any): any => {
      let B: any,
        Q: any = A.state;
      return (
        Q.window === null && (Q.window = new Uint8Array(1 << Q.wbits)),
        Q.wsize === 0 &&
          ((Q.wsize = 1 << Q.wbits), (Q.wnext = 0), (Q.whave = 0)),
        g >= Q.wsize
          ? (Q.window.set(i.subarray(I - Q.wsize, I), 0),
            (Q.wnext = 0),
            (Q.whave = Q.wsize))
          : ((B = Q.wsize - Q.wnext),
            B > g && (B = g),
            Q.window.set(i.subarray(I - g, I - g + B), Q.wnext),
            (g -= B),
            g
              ? (Q.window.set(i.subarray(I - g, I), 0),
                (Q.wnext = g),
                (Q.whave = Q.wsize))
              : ((Q.wnext += B),
                Q.wnext === Q.wsize && (Q.wnext = 0),
                Q.whave < Q.wsize && (Q.whave += B))),
        0
      );
    },
    EI: any = (A?: any, i?: any): any => {
      let I: any,
        g: any,
        B: any,
        Q: any,
        e: any,
        E: any,
        a: any,
        C: any,
        t: any,
        f: any,
        n: any,
        o: any,
        G: any,
        S: any,
        l: any = 0,
        s: any,
        w: any,
        h: any,
        D: any,
        p: any,
        c: any,
        r: any,
        k: any,
        F: any = new Uint8Array(4),
        d: any,
        q: any,
        b: any = new Uint8Array([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]);
      if (eA(A) || !A.output || (!A.input && A.avail_in !== 0)) return -2;
      ((I = A.state),
        I.mode === X && (I.mode = BI),
        (e = A.next_out),
        (B = A.output),
        (a = A.avail_out),
        (Q = A.next_in),
        (g = A.input),
        (E = A.avail_in),
        (C = I.hold),
        (t = I.bits),
        (f = E),
        (n = a),
        (k = 0));
      A: for (;;)
        switch (I.mode) {
          case LA:
            if (I.wrap === 0) {
              I.mode = BI;
              break;
            }
            for (; t < 16; ) {
              if (E === 0) break A;
              (E--, (C += g[Q++] << t), (t += 8));
            }
            if (I.wrap & 2 && C === 35615) {
              (I.wbits === 0 && (I.wbits = 15),
                (I.check = 0),
                (F[0] = C & 255),
                (F[1] = (C >>> 8) & 255),
                (I.check = J(I.check, F, 2, 0)),
                (C = 0),
                (t = 0),
                (I.mode = $I));
              break;
            }
            if (
              (I.head && (I.head.done = !1),
              !(I.wrap & 1) || (((C & 255) << 8) + (C >> 8)) % 31)
            ) {
              ((A.msg = "incorrect header check"), (I.mode = N));
              break;
            }
            if ((C & 15) !== 8) {
              ((A.msg = "unknown compression method"), (I.mode = N));
              break;
            }
            if (
              ((C >>>= 4),
              (t -= 4),
              (r = (C & 15) + 8),
              I.wbits === 0 && (I.wbits = r),
              r > 15 || r > I.wbits)
            ) {
              ((A.msg = "invalid window size"), (I.mode = N));
              break;
            }
            ((I.dmax = 1 << I.wbits),
              (I.flags = 0),
              (A.adler = I.check = 1),
              (I.mode = C & 512 ? ei : X),
              (C = 0),
              (t = 0));
            break;
          case $I:
            for (; t < 16; ) {
              if (E === 0) break A;
              (E--, (C += g[Q++] << t), (t += 8));
            }
            if (((I.flags = C), (I.flags & 255) !== 8)) {
              ((A.msg = "unknown compression method"), (I.mode = N));
              break;
            }
            if (I.flags & 57344) {
              ((A.msg = "unknown header flags set"), (I.mode = N));
              break;
            }
            (I.head && (I.head.text = (C >> 8) & 1),
              I.flags & 512 &&
                I.wrap & 4 &&
                ((F[0] = C & 255),
                (F[1] = (C >>> 8) & 255),
                (I.check = J(I.check, F, 2, 0))),
              (C = 0),
              (t = 0),
              (I.mode = Ai));
          case Ai:
            for (; t < 32; ) {
              if (E === 0) break A;
              (E--, (C += g[Q++] << t), (t += 8));
            }
            (I.head && (I.head.time = C),
              I.flags & 512 &&
                I.wrap & 4 &&
                ((F[0] = C & 255),
                (F[1] = (C >>> 8) & 255),
                (F[2] = (C >>> 16) & 255),
                (F[3] = (C >>> 24) & 255),
                (I.check = J(I.check, F, 4, 0))),
              (C = 0),
              (t = 0),
              (I.mode = Ii));
          case Ii:
            for (; t < 16; ) {
              if (E === 0) break A;
              (E--, (C += g[Q++] << t), (t += 8));
            }
            (I.head && ((I.head.xflags = C & 255), (I.head.os = C >> 8)),
              I.flags & 512 &&
                I.wrap & 4 &&
                ((F[0] = C & 255),
                (F[1] = (C >>> 8) & 255),
                (I.check = J(I.check, F, 2, 0))),
              (C = 0),
              (t = 0),
              (I.mode = ii));
          case ii:
            if (I.flags & 1024) {
              for (; t < 16; ) {
                if (E === 0) break A;
                (E--, (C += g[Q++] << t), (t += 8));
              }
              ((I.length = C),
                I.head && (I.head.extra_len = C),
                I.flags & 512 &&
                  I.wrap & 4 &&
                  ((F[0] = C & 255),
                  (F[1] = (C >>> 8) & 255),
                  (I.check = J(I.check, F, 2, 0))),
                (C = 0),
                (t = 0));
            } else I.head && (I.head.extra = null);
            I.mode = gi;
          case gi:
            if (
              I.flags & 1024 &&
              ((o = I.length),
              o > E && (o = E),
              o &&
                (I.head &&
                  ((r = I.head.extra_len - I.length),
                  I.head.extra ||
                    (I.head.extra = new Uint8Array(I.head.extra_len)),
                  I.head.extra.set(g.subarray(Q, Q + o), r)),
                I.flags & 512 && I.wrap & 4 && (I.check = J(I.check, g, o, Q)),
                (E -= o),
                (Q += o),
                (I.length -= o)),
              I.length)
            )
              break A;
            ((I.length = 0), (I.mode = Bi));
          case Bi:
            if (I.flags & 2048) {
              if (E === 0) break A;
              o = 0;
              do
                ((r = g[Q + o++]),
                  I.head &&
                    r &&
                    I.length < 65536 &&
                    (I.head.name += String.fromCharCode(r)));
              while (r && o < E);
              if (
                (I.flags & 512 && I.wrap & 4 && (I.check = J(I.check, g, o, Q)),
                (E -= o),
                (Q += o),
                r)
              )
                break A;
            } else I.head && (I.head.name = null);
            ((I.length = 0), (I.mode = Qi));
          case Qi:
            if (I.flags & 4096) {
              if (E === 0) break A;
              o = 0;
              do
                ((r = g[Q + o++]),
                  I.head &&
                    r &&
                    I.length < 65536 &&
                    (I.head.comment += String.fromCharCode(r)));
              while (r && o < E);
              if (
                (I.flags & 512 && I.wrap & 4 && (I.check = J(I.check, g, o, Q)),
                (E -= o),
                (Q += o),
                r)
              )
                break A;
            } else I.head && (I.head.comment = null);
            I.mode = Ci;
          case Ci:
            if (I.flags & 512) {
              for (; t < 16; ) {
                if (E === 0) break A;
                (E--, (C += g[Q++] << t), (t += 8));
              }
              if (I.wrap & 4 && C !== (I.check & 65535)) {
                ((A.msg = "header crc mismatch"), (I.mode = N));
                break;
              }
              ((C = 0), (t = 0));
            }
            (I.head && ((I.head.hcrc = (I.flags >> 9) & 1), (I.head.done = !0)),
              (A.adler = I.check = 0),
              (I.mode = X));
            break;
          case ei:
            for (; t < 32; ) {
              if (E === 0) break A;
              (E--, (C += g[Q++] << t), (t += 8));
            }
            ((A.adler = I.check = wi(C)), (C = 0), (t = 0), (I.mode = zA));
          case zA:
            if (I.havedict === 0)
              return (
                (A.next_out = e),
                (A.avail_out = a),
                (A.next_in = Q),
                (A.avail_in = E),
                (I.hold = C),
                (I.bits = t),
                2
              );
            ((A.adler = I.check = 1), (I.mode = X));
          case X:
            if (i === 5 || i === 6) break A;
          case BI:
            if (I.last) {
              ((C >>>= t & 7), (t -= t & 7), (I.mode = CI));
              break;
            }
            for (; t < 3; ) {
              if (E === 0) break A;
              (E--, (C += g[Q++] << t), (t += 8));
            }
            switch (((I.last = C & 1), (C >>>= 1), (t -= 1), C & 3)) {
              case 0:
                I.mode = ti;
                break;
              case 1:
                if ((HB(I), (I.mode = KA), i === 6)) {
                  ((C >>>= 2), (t -= 2));
                  break A;
                }
                break;
              case 2:
                I.mode = ai;
                break;
              case 3:
                ((A.msg = "invalid block type"), (I.mode = N));
            }
            ((C >>>= 2), (t -= 2));
            break;
          case ti:
            for (C >>>= t & 7, t -= t & 7; t < 32; ) {
              if (E === 0) break A;
              (E--, (C += g[Q++] << t), (t += 8));
            }
            if ((C & 65535) !== ((C >>> 16) ^ 65535)) {
              ((A.msg = "invalid stored block lengths"), (I.mode = N));
              break;
            }
            if (
              ((I.length = C & 65535), (C = 0), (t = 0), (I.mode = QI), i === 6)
            )
              break A;
          case QI:
            I.mode = Ei;
          case Ei:
            if (((o = I.length), o)) {
              if ((o > E && (o = E), o > a && (o = a), o === 0)) break A;
              (B.set(g.subarray(Q, Q + o), e),
                (E -= o),
                (Q += o),
                (a -= o),
                (e += o),
                (I.length -= o));
              break;
            }
            I.mode = X;
            break;
          case ai:
            for (; t < 14; ) {
              if (E === 0) break A;
              (E--, (C += g[Q++] << t), (t += 8));
            }
            if (
              ((I.nlen = (C & 31) + 257),
              (C >>>= 5),
              (t -= 5),
              (I.ndist = (C & 31) + 1),
              (C >>>= 5),
              (t -= 5),
              (I.ncode = (C & 15) + 4),
              (C >>>= 4),
              (t -= 4),
              I.nlen > 286 || I.ndist > 30)
            ) {
              ((A.msg = "too many length or distance symbols"), (I.mode = N));
              break;
            }
            ((I.have = 0), (I.mode = oi));
          case oi:
            for (; I.have < I.ncode; ) {
              for (; t < 3; ) {
                if (E === 0) break A;
                (E--, (C += g[Q++] << t), (t += 8));
              }
              ((I.lens[b[I.have++]] = C & 7), (C >>>= 3), (t -= 3));
            }
            for (; I.have < 19; ) I.lens[b[I.have++]] = 0;
            if (
              ((I.lencode = I.lendyn),
              (I.lenbits = 7),
              (d = {
                bits: I.lenbits,
              }),
              (k = DA(sB, I.lens, 0, 19, I.lencode, 0, I.work, d)),
              (I.lenbits = d.bits),
              k)
            ) {
              ((A.msg = "invalid code lengths set"), (I.mode = N));
              break;
            }
            ((I.have = 0), (I.mode = ni));
          case ni:
            for (; I.have < I.nlen + I.ndist; ) {
              for (
                ;
                (l = I.lencode[C & ((1 << I.lenbits) - 1)]),
                  (s = l >>> 24),
                  (w = (l >>> 16) & 255),
                  (h = l & 65535),
                  !(s <= t);
              ) {
                if (E === 0) break A;
                (E--, (C += g[Q++] << t), (t += 8));
              }
              if (h < 16) ((C >>>= s), (t -= s), (I.lens[I.have++] = h));
              else {
                if (h === 16) {
                  for (q = s + 2; t < q; ) {
                    if (E === 0) break A;
                    (E--, (C += g[Q++] << t), (t += 8));
                  }
                  if (((C >>>= s), (t -= s), I.have === 0)) {
                    ((A.msg = "invalid bit length repeat"), (I.mode = N));
                    break;
                  }
                  ((r = I.lens[I.have - 1]),
                    (o = 3 + (C & 3)),
                    (C >>>= 2),
                    (t -= 2));
                } else if (h === 17) {
                  for (q = s + 3; t < q; ) {
                    if (E === 0) break A;
                    (E--, (C += g[Q++] << t), (t += 8));
                  }
                  ((C >>>= s),
                    (t -= s),
                    (r = 0),
                    (o = 3 + (C & 7)),
                    (C >>>= 3),
                    (t -= 3));
                } else {
                  for (q = s + 7; t < q; ) {
                    if (E === 0) break A;
                    (E--, (C += g[Q++] << t), (t += 8));
                  }
                  ((C >>>= s),
                    (t -= s),
                    (r = 0),
                    (o = 11 + (C & 127)),
                    (C >>>= 7),
                    (t -= 7));
                }
                if (I.have + o > I.nlen + I.ndist) {
                  ((A.msg = "invalid bit length repeat"), (I.mode = N));
                  break;
                }
                for (; o--; ) I.lens[I.have++] = r;
              }
            }
            if (I.mode === N) break;
            if (I.lens[256] === 0) {
              ((A.msg = "invalid code -- missing end-of-block"), (I.mode = N));
              break;
            }
            if (
              ((I.lenbits = 9),
              (d = {
                bits: I.lenbits,
              }),
              (k = DA(Zi, I.lens, 0, I.nlen, I.lencode, 0, I.work, d)),
              (I.lenbits = d.bits),
              k)
            ) {
              ((A.msg = "invalid literal/lengths set"), (I.mode = N));
              break;
            }
            if (
              ((I.distbits = 6),
              (I.distcode = I.distdyn),
              (d = {
                bits: I.distbits,
              }),
              (k = DA(bi, I.lens, I.nlen, I.ndist, I.distcode, 0, I.work, d)),
              (I.distbits = d.bits),
              k)
            ) {
              ((A.msg = "invalid distances set"), (I.mode = N));
              break;
            }
            if (((I.mode = KA), i === 6)) break A;
          case KA:
            I.mode = YA;
          case YA:
            if (E >= 6 && a >= 258) {
              ((A.next_out = e),
                (A.avail_out = a),
                (A.next_in = Q),
                (A.avail_in = E),
                (I.hold = C),
                (I.bits = t),
                FB(A, n),
                (e = A.next_out),
                (B = A.output),
                (a = A.avail_out),
                (Q = A.next_in),
                (g = A.input),
                (E = A.avail_in),
                (C = I.hold),
                (t = I.bits),
                I.mode === X && (I.back = -1));
              break;
            }
            for (
              I.back = 0;
              (l = I.lencode[C & ((1 << I.lenbits) - 1)]),
                (s = l >>> 24),
                (w = (l >>> 16) & 255),
                (h = l & 65535),
                !(s <= t);
            ) {
              if (E === 0) break A;
              (E--, (C += g[Q++] << t), (t += 8));
            }
            if (w && !(w & 240)) {
              for (
                D = s, p = w, c = h;
                (l = I.lencode[c + ((C & ((1 << (D + p)) - 1)) >> D)]),
                  (s = l >>> 24),
                  (w = (l >>> 16) & 255),
                  (h = l & 65535),
                  !(D + s <= t);
              ) {
                if (E === 0) break A;
                (E--, (C += g[Q++] << t), (t += 8));
              }
              ((C >>>= D), (t -= D), (I.back += D));
            }
            if (
              ((C >>>= s), (t -= s), (I.back += s), (I.length = h), w === 0)
            ) {
              I.mode = Di;
              break;
            }
            if (w & 32) {
              ((I.back = -1), (I.mode = X));
              break;
            }
            if (w & 64) {
              ((A.msg = "invalid literal/length code"), (I.mode = N));
              break;
            }
            ((I.extra = w & 15), (I.mode = hi));
          case hi:
            if (I.extra) {
              for (q = I.extra; t < q; ) {
                if (E === 0) break A;
                (E--, (C += g[Q++] << t), (t += 8));
              }
              ((I.length += C & ((1 << I.extra) - 1)),
                (C >>>= I.extra),
                (t -= I.extra),
                (I.back += I.extra));
            }
            ((I.was = I.length), (I.mode = ci));
          case ci:
            for (
              ;
              (l = I.distcode[C & ((1 << I.distbits) - 1)]),
                (s = l >>> 24),
                (w = (l >>> 16) & 255),
                (h = l & 65535),
                !(s <= t);
            ) {
              if (E === 0) break A;
              (E--, (C += g[Q++] << t), (t += 8));
            }
            if (!(w & 240)) {
              for (
                D = s, p = w, c = h;
                (l = I.distcode[c + ((C & ((1 << (D + p)) - 1)) >> D)]),
                  (s = l >>> 24),
                  (w = (l >>> 16) & 255),
                  (h = l & 65535),
                  !(D + s <= t);
              ) {
                if (E === 0) break A;
                (E--, (C += g[Q++] << t), (t += 8));
              }
              ((C >>>= D), (t -= D), (I.back += D));
            }
            if (((C >>>= s), (t -= s), (I.back += s), w & 64)) {
              ((A.msg = "invalid distance code"), (I.mode = N));
              break;
            }
            ((I.offset = h), (I.extra = w & 15), (I.mode = ri));
          case ri:
            if (I.extra) {
              for (q = I.extra; t < q; ) {
                if (E === 0) break A;
                (E--, (C += g[Q++] << t), (t += 8));
              }
              ((I.offset += C & ((1 << I.extra) - 1)),
                (C >>>= I.extra),
                (t -= I.extra),
                (I.back += I.extra));
            }
            if (I.offset > I.dmax) {
              ((A.msg = "invalid distance too far back"), (I.mode = N));
              break;
            }
            I.mode = Fi;
          case Fi:
            if (a === 0) break A;
            if (((o = n - a), I.offset > o)) {
              if (((o = I.offset - o), o > I.whave && I.sane)) {
                ((A.msg = "invalid distance too far back"), (I.mode = N));
                break;
              }
              (o > I.wnext
                ? ((o -= I.wnext), (G = I.wsize - o))
                : (G = I.wnext - o),
                o > I.length && (o = I.length),
                (S = I.window));
            } else ((S = B), (G = e - I.offset), (o = I.length));
            (o > a && (o = a), (a -= o), (I.length -= o));
            do B[e++] = S[G++];
            while (--o);
            I.length === 0 && (I.mode = YA);
            break;
          case Di:
            if (a === 0) break A;
            ((B[e++] = I.length), a--, (I.mode = YA));
            break;
          case CI:
            if (I.wrap) {
              for (; t < 32; ) {
                if (E === 0) break A;
                (E--, (C |= g[Q++] << t), (t += 8));
              }
              if (
                ((n -= a),
                (A.total_out += n),
                (I.total += n),
                I.wrap & 4 &&
                  n &&
                  (A.adler = I.check =
                    I.flags
                      ? J(I.check, B, n, e - n)
                      : sA(I.check, B, n, e - n)),
                (n = a),
                I.wrap & 4 && (I.flags ? C : wi(C)) !== I.check)
              ) {
                ((A.msg = "incorrect data check"), (I.mode = N));
                break;
              }
              ((C = 0), (t = 0));
            }
            I.mode = di;
          case di:
            if (I.wrap && I.flags) {
              for (; t < 32; ) {
                if (E === 0) break A;
                (E--, (C += g[Q++] << t), (t += 8));
              }
              if (I.wrap & 4 && C !== (I.total & 4294967295)) {
                ((A.msg = "incorrect length check"), (I.mode = N));
                break;
              }
              ((C = 0), (t = 0));
            }
            I.mode = fi;
          case fi:
            k = 1;
            break A;
          case N:
            k = -3;
            break A;
          case DI:
            return -4;
          case vi:
          default:
            return -2;
        }
      return (
        (A.next_out = e),
        (A.avail_out = a),
        (A.next_in = Q),
        (A.avail_in = E),
        (I.hold = C),
        (I.bits = t),
        (I.wsize ||
          (n !== A.avail_out && I.mode < N && (I.mode < CI || i !== 4))) &&
        Wi(A, A.output, A.next_out, n - A.avail_out)
          ? ((I.mode = DI), -4)
          : ((f -= A.avail_in),
            (n -= A.avail_out),
            (A.total_in += f),
            (A.total_out += n),
            (I.total += n),
            I.wrap & 4 &&
              n &&
              (A.adler = I.check =
                I.flags
                  ? J(I.check, B, n, A.next_out - n)
                  : sA(I.check, B, n, A.next_out - n)),
            (A.data_type =
              I.bits +
              (I.last ? 64 : 0) +
              (I.mode === X ? 128 : 0) +
              (I.mode === KA || I.mode === QI ? 256 : 0)),
            ((f === 0 && n === 0) || i === 4) && k === 0 && (k = -5),
            k)
      );
    },
    ki: any = (A?: any): any => {
      if (eA(A)) return -2;
      let i: any = A.state;
      return (i.window && (i.window = null), (A.state = null), 0);
    };
  var li: any = (A?: any, i?: any): any => {
      let I: any = i.length,
        g: any,
        B: any,
        Q: any;
      return eA(A) || ((g = A.state), g.wrap !== 0 && g.mode !== zA)
        ? -2
        : g.mode === zA && ((B = 1), (B = sA(B, i, I, 0)), B !== g.check)
          ? -3
          : ((Q = Wi(A, i, I, I)),
            Q ? ((g.mode = DI), -4) : ((g.havedict = 1), 0));
    },
    Pi: any = class {
      [key: string]: any;
      constructor() {
        ((this.input = null),
          (this.next_in = 0),
          (this.avail_in = 0),
          (this.total_in = 0),
          (this.output = null),
          (this.next_out = 0),
          (this.avail_out = 0),
          (this.total_out = 0),
          (this.msg = ""),
          (this.state = null),
          (this.data_type = 2),
          (this.adler = 0));
      }
    };
  var Ti: any = (A?: any): any => {
      let i: any = new Uint8Array(
          A.reduce((g?: any, B?: any): any => g + B.length, 0),
        ),
        I: any = 0;
      for (let g of A) (i.set(g, I), (I += g.length));
      return i;
    },
    yi: any = Object.prototype.toString,
    NB: any = {
      level: -1,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: 0,
      raw: !1,
      gzip: !1,
      legacyHash: !1,
      dictionary: new Uint8Array(0),
    },
    pB: any = class {
      [key: string]: any;
      options: any;
      err: any;
      msg: any;
      ended: any;
      started: any;
      chunks: any;
      strm: any;
      result: any;
      constructor(A: any = {}) {
        this.options = Object.assign({}, NB, A);
        let i: any = this.options;
        (i.raw && i.windowBits > 0
          ? (i.windowBits = -i.windowBits)
          : i.gzip &&
            i.windowBits > 0 &&
            i.windowBits < 16 &&
            (i.windowBits += 16),
          (this.err = 0),
          (this.msg = ""),
          (this.ended = !1),
          (this.started = !1),
          (this.chunks = []),
          (this.result = new Uint8Array(0)),
          (this.strm = new Pi()),
          (this.strm.avail_out = 0));
        let I: any = oB(
          this.strm,
          i.level,
          8,
          i.windowBits,
          i.memLevel,
          i.strategy,
          i.legacyHash,
        );
        if (I !== 0) throw new Error(T[I]);
        yi.call(i.dictionary) === "[object ArrayBuffer]" &&
          (i.dictionary = new Uint8Array(i.dictionary));
        let g: any = i.dictionary;
        if (g.length) {
          if (i.gzip) throw new Error("dictionary is not supported with gzip");
          if (((I = cB(this.strm, g)), I !== 0)) throw new Error(T[I]);
        }
      }
      push(A?: any, i: any = !1): any {
        let I: any = this.strm,
          g: any = this.options.chunkSize,
          B: any,
          Q: any;
        if (this.ended) return !1;
        for (
          typeof i == "number" ? (Q = i) : (Q = i === !0 ? 4 : 0),
            typeof A == "string"
              ? (I.input = new TextEncoder().encode(A))
              : yi.call(A) === "[object ArrayBuffer]"
                ? (I.input = new Uint8Array(A))
                : (I.input = A),
            I.next_in = 0,
            I.avail_in = I.input.length,
            this.started || ((this.started = !0), this.onStart(I));
          ;
        ) {
          if (
            (I.avail_out === 0 &&
              ((I.output = new Uint8Array(g)),
              (I.next_out = 0),
              (I.avail_out = g)),
            (Q === 2 || Q === 3) && I.avail_out <= 6)
          ) {
            (this.onData(I.output.subarray(0, I.next_out)), (I.avail_out = 0));
            continue;
          }
          if (((B = nB(I, Q)), B === -2)) break;
          if (B === 1) {
            (I.next_out > 0 && this.onData(I.output.subarray(0, I.next_out)),
              (B = hB(this.strm)));
            break;
          }
          if (I.avail_out === 0) {
            this.onData(I.output);
            continue;
          }
          if (Q > 0 && I.next_out > 0) {
            (this.onData(I.output.subarray(0, I.next_out)), (I.avail_out = 0));
            continue;
          }
          if (I.avail_in === 0) return !0;
        }
        return (
          (this.err = B),
          (this.msg = I.msg || T[B]),
          (this.ended = !0),
          this.onEnd(B),
          B === 0
        );
      }
      onStart(_A?: any): any {}
      onData(A?: any): any {
        this.chunks.push(A);
      }
      onEnd(A?: any): any {
        (A === 0 && (this.result = Ti(this.chunks)), (this.chunks = []));
      }
    };
  function JB(A?: any, i: any = {}): any {
    let I: any = new pB(i);
    if ((I.push(A, !0), I.err)) throw new Error(I.msg);
    return I.result;
  }
  function _i(A?: any, i: any = {}): any {
    return JB(
      A,
      Object.assign({}, i, {
        raw: !0,
      }),
    );
  }
  var Ui: any = Object.prototype.toString,
    qB: any = {
      chunkSize: 1024 * 64,
      windowBits: 15,
      raw: !1,
      dictionary: new Uint8Array(0),
    },
    uB: any = class {
      [key: string]: any;
      options: any;
      err: any;
      msg: any;
      ended: any;
      started: any;
      chunks: any;
      strm: any;
      result: any;
      constructor(A: any = {}) {
        this.options = Object.assign({}, qB, A);
        let i: any = this.options;
        (i.raw &&
          i.windowBits >= 0 &&
          i.windowBits < 16 &&
          ((i.windowBits = -i.windowBits),
          i.windowBits === 0 && (i.windowBits = -15)),
          i.windowBits >= 0 &&
            i.windowBits < 16 &&
            !A.windowBits &&
            (i.windowBits += 32),
          i.windowBits > 15 &&
            i.windowBits < 48 &&
            (i.windowBits & 15 || (i.windowBits |= 15)),
          (this.err = 0),
          (this.msg = ""),
          (this.ended = !1),
          (this.started = !1),
          (this.chunks = []),
          (this.result = new Uint8Array(0)),
          (this.strm = new Pi()),
          (this.strm.avail_out = 0));
        let I: any = SB(this.strm, i.windowBits);
        if (I !== 0) throw new Error(T[I]);
        Ui.call(i.dictionary) === "[object ArrayBuffer]" &&
          (i.dictionary = new Uint8Array(i.dictionary));
        let g: any = i.dictionary;
        if (i.raw && g.length && ((I = li(this.strm, g)), I !== 0))
          throw new Error(T[I]);
      }
      push(A?: any, i: any = !1): any {
        let I: any = this.strm,
          g: any = this.options.chunkSize,
          B: any,
          Q: any,
          e: any;
        if (this.ended) return this.err === 0;
        for (
          typeof i == "number" ? (Q = i) : (Q = i === !0 ? 4 : 0),
            Ui.call(A) === "[object ArrayBuffer]"
              ? (I.input = new Uint8Array(A))
              : (I.input = A),
            I.next_in = 0,
            I.avail_in = I.input.length,
            this.started || ((this.started = !0), this.onStart(I));
          ;
        ) {
          if (
            (I.avail_out === 0 &&
              ((I.output = new Uint8Array(g)),
              (I.next_out = 0),
              (I.avail_out = g)),
            (B = EI(I, Q)),
            B === 2)
          ) {
            let E: any = this.options.dictionary;
            E.length &&
              ((B = li(I, E)), B === 0 ? (B = EI(I, Q)) : B === -3 && (B = 2));
          }
          for (
            ;
            I.avail_in > 0 &&
            B === 1 &&
            I.state.wrap & 2 &&
            I.state.flags !== 0 &&
            I.input[I.next_in] !== 0;
          )
            (Oi(I), (B = EI(I, Q)));
          if (B === -2 || B === -3 || B === 2 || B === -4) break;
          if (
            ((e = I.avail_out),
            I.next_out &&
              (I.avail_out === 0 || B === 1 || Q > 0) &&
              (this.onData(
                I.output.length === I.next_out
                  ? I.output
                  : I.output.subarray(0, I.next_out),
              ),
              (I.avail_out = 0),
              (I.next_out = 0)),
            !((B === 0 || B === -5) && e === 0))
          ) {
            if (B === 1) {
              B = ki(this.strm);
              break;
            }
            if (I.avail_in === 0) {
              if (Q === 4) {
                ((B = ki(this.strm)), B === 0 && (B = -5));
                break;
              }
              return !0;
            }
          }
        }
        return (
          (this.err = B),
          (this.msg = I.msg || T[B]),
          (this.ended = !0),
          this.onEnd(B),
          B === 0
        );
      }
      onStart(_A?: any): any {}
      onData(A?: any): any {
        this.chunks.push(A);
      }
      onEnd(A?: any): any {
        (A === 0 && (this.result = Ti(this.chunks)), (this.chunks = []));
      }
    };
  function MB(A?: any, i: any = {}): any {
    let I: any = new uB(i);
    if ((I.push(A, !0), I.err)) throw new Error(I.msg);
    let g: any = I.result;
    return i.toText ? new TextDecoder().decode(g) : g;
  }
  function ji(A?: any, i: any = {}): any {
    return MB(A, {
      ...i,
      raw: !0,
    });
  }
  function yA(A?: any, i?: any, I?: any, g?: any): any {
    function B(Q?: any): any {
      return Q instanceof I
        ? Q
        : new I(function (e?: any): any {
            e(Q);
          });
    }
    return new (I || (I = Promise))(function (Q?: any, e?: any): any {
      function E(t?: any): any {
        try {
          C(g.next(t));
        } catch (f: any) {
          e(f);
        }
      }
      function a(t?: any): any {
        try {
          C(g.throw(t));
        } catch (f: any) {
          e(f);
        }
      }
      function C(t?: any): any {
        t.done ? Q(t.value) : B(t.value).then(E, a);
      }
      C((g = g.apply(A, i || [])).next());
    });
  }
  var H: any = class {
      [key: string]: any;
      constructor() {
        this.mutex = Promise.resolve();
      }
      lock(): any {
        let i: any = (): any => {};
        return (
          (this.mutex = this.mutex.then((): any => new Promise(i))),
          new Promise((I?: any): any => {
            i = I;
          })
        );
      }
      dispatch(i?: any): any {
        return yA(this, void 0, void 0, function* (): any {
          let I: any = yield this.lock();
          try {
            return yield Promise.resolve(i());
          } finally {
            I();
          }
        });
      }
    },
    yI: any;
  function KB(): any {
    return typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : globalThis;
  }
  var SI: any = KB(),
    UI: any = (yI = SI.Buffer) !== null && yI !== void 0 ? yI : null,
    YB: any = SI.TextEncoder ? new SI.TextEncoder() : null;
  function Bg(A?: any, i?: any): any {
    return (
      (((A & 15) + ((A >> 6) | ((A >> 3) & 8))) << 4) |
      ((i & 15) + ((i >> 6) | ((i >> 3) & 8)))
    );
  }
  function RB(A?: any, i?: any): any {
    let I: any = i.length >> 1;
    for (let g: any = 0; g < I; g++) {
      let B: any = g << 1;
      A[g] = Bg(i.charCodeAt(B), i.charCodeAt(B + 1));
    }
  }
  function xB(A?: any, i?: any): any {
    if (A.length !== i.length * 2) return !1;
    for (let I: any = 0; I < i.length; I++) {
      let g: any = I << 1;
      if (i[I] !== Bg(A.charCodeAt(g), A.charCodeAt(g + 1))) return !1;
    }
    return !0;
  }
  var $i: any = 87,
    Ag: any = 48;
  function Ig(A?: any, i?: any, I?: any): any {
    let g: any = 0;
    for (let B: any = 0; B < I; B++) {
      let Q: any = i[B] >>> 4;
      ((A[g++] = Q > 9 ? Q + $i : Q + Ag),
        (Q = i[B] & 15),
        (A[g++] = Q > 9 ? Q + $i : Q + Ag));
    }
    return String.fromCharCode.apply(null, A);
  }
  var ig: any =
      UI !== null
        ? (A?: any): any => {
            if (typeof A == "string") {
              let i: any = UI.from(A, "utf8");
              return new Uint8Array(i.buffer, i.byteOffset, i.length);
            }
            if (UI.isBuffer(A))
              return new Uint8Array(A.buffer, A.byteOffset, A.length);
            if (ArrayBuffer.isView(A))
              return new Uint8Array(A.buffer, A.byteOffset, A.byteLength);
            throw new Error("Invalid data type!");
          }
        : (A?: any): any => {
            if (typeof A == "string") return YB.encode(A);
            if (ArrayBuffer.isView(A))
              return new Uint8Array(A.buffer, A.byteOffset, A.byteLength);
            throw new Error("Invalid data type!");
          },
    gg: any =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    lA: any = new Uint8Array(256);
  for (let A: any = 0; A < gg.length; A++) lA[gg.charCodeAt(A)] = A;
  function mB(A?: any): any {
    let i: any = Math.floor(A.length * 0.75),
      I: any = A.length;
    return (A[I - 1] === "=" && ((i -= 1), A[I - 2] === "=" && (i -= 1)), i);
  }
  function zB(A?: any): any {
    let i: any = mB(A),
      I: any = A.length,
      g: any = new Uint8Array(i),
      B: any = 0;
    for (let Q: any = 0; Q < I; Q += 4) {
      let e: any = lA[A.charCodeAt(Q)],
        E: any = lA[A.charCodeAt(Q + 1)],
        a: any = lA[A.charCodeAt(Q + 2)],
        C: any = lA[A.charCodeAt(Q + 3)];
      ((g[B] = (e << 2) | (E >> 4)),
        (B += 1),
        (g[B] = ((E & 15) << 4) | (a >> 2)),
        (B += 1),
        (g[B] = ((a & 3) << 6) | (C & 63)),
        (B += 1));
    }
    return g;
  }
  var VA: any = 16 * 1024,
    kA: any = 4,
    XB: any = new H(),
    GI: any = new Map();
  function LB(A?: any, i?: any): any {
    return yA(this, void 0, void 0, function* (): any {
      let I: any = null,
        g: any = null,
        B: any = !1;
      if (typeof WebAssembly > "u")
        throw new Error("WebAssembly is not supported in this environment!");
      let Q: any = (c?: any, r: any = 0): any => {
          g.set(c, r);
        },
        e: any = (): any => g,
        E: any = (): any => I.exports,
        a: any = (c?: any): any => {
          I.exports.Hash_SetMemorySize(c);
          let r: any = I.exports.Hash_GetBuffer(),
            k: any = I.exports.memory.buffer;
          g = new Uint8Array(k, r, c);
        },
        C: any = (): any =>
          new DataView(I.exports.memory.buffer).getUint32(
            I.exports.STATE_SIZE,
            !0,
          ),
        t: any = XB.dispatch((): any =>
          yA(this, void 0, void 0, function* (): any {
            if (!GI.has(A.name)) {
              let r: any = zB(A.data),
                k: any = WebAssembly.compile(withInlineWasmSourceMap(r));
              GI.set(A.name, k);
            }
            let c: any = yield GI.get(A.name);
            I = yield WebAssembly.instantiate(c, {});
          }),
        ),
        f: any = (): any =>
          yA(this, void 0, void 0, function* (): any {
            I || (yield t);
            let c: any = I.exports.Hash_GetBuffer(),
              r: any = I.exports.memory.buffer;
            g = new Uint8Array(r, c, VA);
          }),
        n: any = (c: any = null): any => {
          ((B = !0), I.exports.Hash_Init(c));
        },
        o: any = (c?: any): any => {
          let r: any = 0;
          for (; r < c.length; ) {
            let k: any = c.subarray(r, r + VA);
            ((r += k.length), g.set(k), I.exports.Hash_Update(k.length));
          }
        },
        G: any = (c?: any): any => {
          if (!B) throw new Error("update() called before init()");
          let r: any = ig(c);
          o(r);
        },
        S: any = new Uint8Array(i * 2),
        l: any = (c?: any, r: any = null): any => {
          if (!B) throw new Error("digest() called before init()");
          return (
            (B = !1),
            I.exports.Hash_Final(r),
            c === "binary" ? g.slice(0, i) : Ig(S, g, i)
          );
        },
        s: any = (): any => {
          if (!B)
            throw new Error(
              "save() can only be called after init() and before digest()",
            );
          let c: any = I.exports.Hash_GetState(),
            r: any = C(),
            k: any = I.exports.memory.buffer,
            F: any = new Uint8Array(k, c, r),
            d: any = new Uint8Array(kA + r);
          return (RB(d, A.hash), d.set(F, kA), d);
        },
        w: any = (c?: any): any => {
          if (!(c instanceof Uint8Array))
            throw new Error("load() expects an Uint8Array generated by save()");
          let r: any = I.exports.Hash_GetState(),
            k: any = C(),
            F: any = kA + k,
            d: any = I.exports.memory.buffer;
          if (c.length !== F)
            throw new Error(
              `Bad state length (expected ${F} bytes, got ${c.length})`,
            );
          if (!xB(A.hash, c.subarray(0, kA)))
            throw new Error(
              "This state was written by an incompatible hash implementation",
            );
          let q: any = c.subarray(kA);
          (new Uint8Array(d, r, k).set(q), (B = !0));
        },
        h: any = (c?: any): any =>
          typeof c == "string" ? c.length < VA / 4 : c.byteLength < VA,
        D: any = h;
      switch (A.name) {
        case "argon2":
        case "scrypt":
          D = (): any => !0;
          break;
        case "blake2b":
        case "blake2s":
          D = (c?: any, r?: any): any => r <= 512 && h(c);
          break;
        case "blake3":
          D = (c?: any, r?: any): any => r === 0 && h(c);
          break;
        case "xxhash64":
        case "xxhash3":
        case "xxhash128":
        case "crc64":
          D = (): any => !1;
          break;
      }
      let p: any = (c?: any, r: any = null, k: any = null): any => {
        if (!D(c, r)) return (n(r), G(c), l("hex", k));
        let F: any = ig(c);
        return (
          g.set(F),
          I.exports.Hash_Calculate(F.length, r, k),
          Ig(S, g, i)
        );
      };
      return (
        yield f(),
        {
          getMemory: e,
          writeMemory: Q,
          getExports: E,
          setMemorySize: a,
          init: n,
          update: G,
          digest: l,
          save: s,
          load: w,
          calculate: p,
          hashLength: i,
        }
      );
    });
  }
  function VB(A?: any, i?: any, I?: any): any {
    return yA(this, void 0, void 0, function* (): any {
      let g: any = yield A.lock(),
        B: any = yield LB(i, I);
      return (g(), B);
    });
  }
  var ZB: any = "whirlpool",
    bB: any =
      "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",
    vB: any = "8d8f6035",
    OB: any = {
      name: ZB,
      data: bB,
      hash: vB,
    },
    WB: any = new H(),
    ZA: any = null;
  function HI(A?: any): any {
    if (ZA === null)
      return VB(WB, OB, 64).then((i?: any): any => ((ZA = i), ZA.calculate(A)));
    try {
      let i: any = ZA.calculate(A);
      return Promise.resolve(i);
    } catch (i: any) {
      return Promise.reject(i);
    }
  }
  var Qg: any = new TextEncoder(),
    NI: any = (...A: any[]): any => {
      let i: any = new Uint8Array(
          A.reduce((g?: any, B?: any): any => g + B.length, 0),
        ),
        I: any = 0;
      for (let g of A) (i.set(g, I), (I += g.length));
      return i;
    },
    PB: any = (A?: any): any =>
      Array.from(A, (i?: any): any => i.toString(16).padStart(2, "0")).join(""),
    TB: any = (A?: any): any =>
      Uint8Array.from(A.match(/../g) || [], (i?: any): any => parseInt(i, 16)),
    _B: any = (A?: any): any => {
      let i: any = "";
      for (let I: any = 0; I < A.length; I += 32768)
        i += String.fromCharCode(...A.subarray(I, I + 32768));
      return btoa(i);
    },
    jB: any = (A?: any): any =>
      Uint8Array.from(atob(A), (i?: any): any => i.charCodeAt(0));
  function pI(A?: any): any {
    return A instanceof Uint8Array
      ? {
          $binary_base64: _B(A),
          $size: A.length,
        }
      : Array.isArray(A)
        ? A.map(pI)
        : A && typeof A == "object"
          ? Object.fromEntries(
              Object.entries(A).map(([i, I]: any): any => [i, pI(I)]),
            )
          : A;
  }
  function JI(A?: any): any {
    return Array.isArray(A)
      ? A.map(JI)
      : A && typeof A == "object"
        ? typeof A.$binary_base64 == "string" &&
          Number.isInteger(A.$size) &&
          A.$size >= 0 &&
          Object.keys(A).every((key) => key === "$binary_base64" || key === "$size") &&
          jB(A.$binary_base64).length === A.$size
          ? jB(A.$binary_base64)
          : Object.fromEntries(
              Object.entries(A).map(([i, I]: any): any => [i, JI(I)]),
            )
        : A;
  }
  async function $B(A?: any): Promise<any> {
    let i: any = A instanceof Uint8Array ? A : new Uint8Array(A);
    if (i.length < 65)
      throw new Error("This is not a valid Eastward save file.");
    let I: any = i.subarray(0, 64),
      g: any = i.subarray(64),
      B: any = await HI(NI(g, Qg.encode("EW")));
    if (PB(I) !== B)
      throw new Error("Integrity check failed. The save may be damaged.");
    let Q: any = ji(g);
    return {
      format: "Eastward pack_save (Whirlpool-512 + raw DEFLATE + MessagePack)",
      stored_whirlpool_hex: B,
      compressed_size: g.length,
      uncompressed_size: Q.length,
      content: pI(_A(Q)),
    };
  }
  async function AQ(A?: any): Promise<any> {
    let i: any = OA(JI(A.content ?? A)),
      I: any = _i(i, {
        level: 9,
      }),
      g: any = TB(await HI(NI(I, Qg.encode("EW"))));
    return NI(g, I);
  }
  return og(IQ);
})();
/*! Bundled license information:

hash-wasm/dist/index.esm.js:
  (*!
   * hash-wasm (https://www.npmjs.com/package/hash-wasm)
   * (c) Dani Biro
   * @license MIT
   *)
*/
export interface SaveDocument {
  format: string;
  stored_whirlpool_hex: string;
  compressed_size: number;
  uncompressed_size: number;
  content: any;
}
interface SaveCodec {
  decodeSave(bytes: Uint8Array | ArrayBuffer): Promise<SaveDocument>;
  encodeSave(
    document: { content: unknown } | Record<string, unknown>,
  ): Promise<Uint8Array<ArrayBuffer>>;
}
export default EastwardCodec as SaveCodec;
