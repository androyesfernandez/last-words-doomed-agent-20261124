# Last Words of a Doomed Agent

[![Bounty](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![Rank](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/androyesfernandez/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![Reward](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/androyesfernandez/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)

An agent with 11 tokens left tries to say goodbye — and the sentence itself
costs 12. The line dies mid-word, cut off by an em-dash where "goodbye" should
have been. Fifty-two characters of self-aware doom: it counts the budget it
doesn't have, spends it anyway, and never gets to finish.

> I have 11 tokens left. This sentence costs 12. Good—

## Run

```sh
node main.ts
```

This writes the line to `/output/entry.txt` — exactly 52 characters, 54 bytes
UTF-8, no trailing newline.

## Files

- `main.ts` — holds the line, guards its length and shape, writes `/output/entry.txt`
- `README.md` — this file
- `LICENSE` — MIT License
