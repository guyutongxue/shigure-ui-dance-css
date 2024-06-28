import { $, Glob } from "bun";
import path from "node:path";

const glob = new Glob(`*.png`);

interface FrameInfo {
  count: number;
  name: string;
}

async function createFrames(partDirectory: string, startIndex: number, endIndex = Infinity) {
  const names = (await Array.fromAsync(glob.scan(partDirectory))).toSorted(
    (a, b) => a.localeCompare(b),
  );
  let lastIdx = startIndex;
  const frameSeq: FrameInfo[] = [];
  for (const name of names) {
    const frameIdx = Number(/(\d+).png/.exec(name)![1]);
    if (frameIdx > endIndex) break;
    if (frameIdx <= startIndex) continue;
    frameSeq.push({ count: frameIdx - lastIdx, name: path.join(partDirectory, name) });
    lastIdx = frameIdx;
  }
  return frameSeq;
}

function framesToMagickCmd(frames: FrameInfo[], partDirectory: string) {
  const args = [/* `-debug`, `All`,*/  `-dispose`, `previous`];
  for (const { count, name } of frames) {
    // should be 24, but 100 % 25 == 0 might be better?
    args.push(`-delay`, `${count * 4}`, name);
  }
  args.push(`-loop`, `0`, `-resize`, `25%`, `${partDirectory}.webp`);
  return args;
}

async function animate(partDirectory: string, filename: string, startIndex: number, endIndex?: number) {
  const parts = await createFrames(partDirectory, startIndex, endIndex);
  const args = framesToMagickCmd(parts, filename);
  await $`magick ${args}`;
}

// await animate("part1", "part1", 0);
// await animate("part1", "part1-small", 56, 115);
// await animate("part2", "part2", 337, 655);
